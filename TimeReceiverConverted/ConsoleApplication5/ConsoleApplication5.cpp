#include "pch.h"

using namespace System;
using namespace System::Net;
using namespace System::Net::Sockets;

// mcppv2_sdarrays.cpp
// compile with: /clr

#define ARRAY_SIZE 2

value struct MyStruct {
	int m_i;
};

ref class MyClass {
public:
	int m_i;
};

struct MyNativeClass {
	int m_i;
};

// Returns a managed array of a reference type.
array<MyClass^>^ Test0() {
	int i;
	array< MyClass^ >^ local = gcnew array< MyClass^ >(ARRAY_SIZE);

	for (i = 0; i < ARRAY_SIZE; i++) {
		local[i] = gcnew MyClass;
		local[i]->m_i = i;
	}
	return local;
}

// Returns a managed array of Int32.
array<Int32>^ Test1() {
	int i;
	array< Int32 >^ local = gcnew array< Int32 >(ARRAY_SIZE);

	for (i = 0; i < ARRAY_SIZE; i++)
		local[i] = i + 10;
	return local;
}

// Modifies an array.
void Test2(array< MyNativeClass * >^ local) {
	for (int i = 0; i < ARRAY_SIZE; i++)
		local[i]->m_i = local[i]->m_i + 2;
}

int main_2() {
	int i;

	// Declares an array of user-defined reference types
	// and uses a function to initialize.
	array< MyClass^ >^ MyClass0;
	MyClass0 = Test0();

	for (i = 0; i < ARRAY_SIZE; i++)
		Console::WriteLine("MyClass0[{0}] = {1}", i, MyClass0[i]->m_i);
	Console::WriteLine();

	// Declares an array of value types and uses a function to initialize.
	array< Int32 >^ IntArray;
	IntArray = Test1();

	for (i = 0; i < ARRAY_SIZE; i++)
		Console::WriteLine("IntArray[{0}] = {1}", i, IntArray[i]);
	Console::WriteLine();

	// Declares and initializes an array of user-defined
	// reference types.
	array< MyClass^ >^ MyClass1 = gcnew array< MyClass^ >(ARRAY_SIZE);
	for (i = 0; i < ARRAY_SIZE; i++) {
		MyClass1[i] = gcnew MyClass;
		MyClass1[i]->m_i = i + 20;
	}

	for (i = 0; i < ARRAY_SIZE; i++)
		Console::WriteLine("MyClass1[{0}] = {1}", i, MyClass1[i]->m_i);
	Console::WriteLine();

	// Declares and initializes an array of pointers to a native type.
	array< MyNativeClass * >^ MyClass2 = gcnew array<
		MyNativeClass * >(ARRAY_SIZE);
	for (i = 0; i < ARRAY_SIZE; i++) {
		MyClass2[i] = new MyNativeClass();
		MyClass2[i]->m_i = i + 30;
	}

	for (i = 0; i < ARRAY_SIZE; i++)
		Console::WriteLine("MyClass2[{0}] = {1}", i, MyClass2[i]->m_i);
	Console::WriteLine();

	Test2(MyClass2);
	for (i = 0; i < ARRAY_SIZE; i++)
		Console::WriteLine("MyClass2[{0}] = {1}", i, MyClass2[i]->m_i);
	Console::WriteLine();

	delete[] MyClass2[0];
	delete[] MyClass2[1];

	// Declares and initializes an array of user-defined value types.
	array< MyStruct >^ MyStruct1 = gcnew array< MyStruct >(ARRAY_SIZE);
	for (i = 0; i < ARRAY_SIZE; i++) {
		MyStruct1[i] = MyStruct();
		MyStruct1[i].m_i = i + 40;
	}

	for (i = 0; i < ARRAY_SIZE; i++)
		Console::WriteLine("MyStruct1[{0}] = {1}", i, MyStruct1[i].m_i);
}


int main() {
	// NTP message size is 48 bytes
	array<Byte >^ ntpData = gcnew array<Byte >(48);
}
