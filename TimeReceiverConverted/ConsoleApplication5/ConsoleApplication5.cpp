#include "pch.h"
#include "TimeRequester.h"

int main() {
	TimeRequester tr;

	Console::WriteLine(tr.GetNetworkTime());
	Console::ReadLine();
}
