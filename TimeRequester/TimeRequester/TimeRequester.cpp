// TimeRequester.cpp : Defines the exported functions for the DLL.
//

#include "pch.h"
#include "framework.h"
#include "TimeRequester.h"


// This is an example of an exported variable
TIMEREQUESTER_API int nTimeRequester=0;

// This is an example of an exported function.
TIMEREQUESTER_API int fnTimeRequester(void)
{
    return 0;
}

// This is the constructor of a class that has been exported.
CTimeRequester::CTimeRequester()
{
    return;
}
