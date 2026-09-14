#pragma once

using namespace System;
using namespace System::Net;
using namespace System::Net::Sockets;

namespace TimeRequester2 {
	public ref class Class1
	{
		// TODO: Add your methods for this class here.
	};

	public ref class TimeRequester
	{
		public:
			DateTime GetNetworkTime();

		private:
			System::UInt32 SwapEndianness(UInt64 x);
	};
}
