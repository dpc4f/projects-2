#pragma once


using namespace System;
using namespace System::Net;
using namespace System::Net::Sockets;


ref class TimeRequester
{
public:
	DateTime GetNetworkTime();

private:
	System::UInt32 SwapEndianness(UInt64 x);

};
