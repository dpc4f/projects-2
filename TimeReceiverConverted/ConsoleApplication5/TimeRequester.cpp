#include "pch.h"
#include "TimeRequester.h"


using namespace System;
using namespace System::Net;
using namespace System::Net::Sockets;


System::DateTime TimeRequester::GetNetworkTime()
{
	// Use the closest regional pool or Cloudflare
	String^ ntpServer = "time.windows.com";

	//// NTP message size is 48 bytes
	array<Byte>^ ntpData = gcnew array<Byte>(48);

	//// Setting Leap Indicator, Version Number, and Mode (Client = 3)
	ntpData[0] = 0x1B;

	array<System::Net::IPAddress^>^ addresses = Dns::GetHostAddresses(ntpServer);
	IPEndPoint^ ipEndPoint = gcnew IPEndPoint(addresses[0], 123);
	Socket^ socket = gcnew Socket(AddressFamily::InterNetwork, SocketType::Dgram, ProtocolType::Udp);
	DateTime^ networkDateTime = nullptr;
	Exception ex;

	try {
		//using (String^ tmp = gcnew String("abcd"))
		//{
		socket->Connect(ipEndPoint);
		socket->ReceiveTimeout = 3000; // 3 seconds timeout
		socket->Send(ntpData);
		socket->Receive(ntpData);
		/*}*/

		//// Transmit Timestamp starts at byte 40 (Seconds and Fractions)
		UInt64 intPart = BitConverter::ToUInt32(ntpData, 40);
		UInt64 fractPart = BitConverter::ToUInt32(ntpData, 44);

		//// Convert from Big-Endian to Little-Endian (Network to Host byte order)
		intPart = SwapEndianness(intPart);
		fractPart = SwapEndianness(fractPart);

		UInt64 milliseconds = (intPart * 1000L) + ((fractPart * 1000L) / 0x100000000L);

		//// NTP time starts on Jan 1, 1900
		networkDateTime = (gcnew DateTime(1900, 1, 1, 0, 0, 0, DateTimeKind::Utc))
			->AddMilliseconds((UInt64)milliseconds);
	}
	catch (Exception^ ex) {

	}
	finally {
		delete socket;
	}

	return networkDateTime->ToLocalTime();
}

System::UInt32 TimeRequester::SwapEndianness(UInt64 x)
{
	return (int)(((x & 0x000000ff) << 24) |
		((x & 0x0000ff00) << 8) |
		((x & 0x00ff0000) >> 8) |
		((x & 0xff000000) >> 24));
}