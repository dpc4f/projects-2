#include "pch.h"
#include "TimeRequester.h"


using namespace System;
using namespace System::Net;
using namespace System::Net::Sockets;



System::DateTime TimeRequester::GetNetworkTime()
{
	// Use the closest regional pool or Cloudflare
	const String^ ntpServer = "pool.ntp.org";

	//// NTP message size is 48 bytes
	


	//// Setting Leap Indicator, Version Number, and Mode (Client = 3)
	//ntpData[0] = 0x1B;

	//var addresses = Dns.GetHostAddresses(ntpServer);
	//var ipEndPoint = new IPEndPoint(addresses[0], 123);

	//using (var socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp))
	//{
	//	socket.Connect(ipEndPoint);
	//	socket.ReceiveTimeout = 3000; // 3 seconds timeout
	//	socket.Send(ntpData);
	//	socket.Receive(ntpData);
	//}

	//// Transmit Timestamp starts at byte 40 (Seconds and Fractions)
	//ulong intPart = BitConverter.ToUInt32(ntpData, 40);
	//ulong fractPart = BitConverter.ToUInt32(ntpData, 44);

	//// Convert from Big-Endian to Little-Endian (Network to Host byte order)
	//intPart = SwapEndianness(intPart);
	//fractPart = SwapEndianness(fractPart);

	//var milliseconds = (intPart * 1000) + ((fractPart * 1000) / 0x100000000L);

	//// NTP time starts on Jan 1, 1900
	//var networkDateTime = new DateTime(1900, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds((long)milliseconds);

	//return networkDateTime.ToLocalTime();
	return System::DateTime::Now;
}

System::UInt64 TimeRequester::SwapEndianness(UInt64 x)
{
	return (int)(((x & 0x000000ff) << 24) |
		((x & 0x0000ff00) << 8) |
		((x & 0x00ff0000) >> 8) |
		((x & 0xff000000) >> 24));
}