#include "MyForm.h"

/*
	MyForm.cpp is Frym-mo
	Gry-moire .? <-- sound familiar
*/

#include "MyForm.h"

using namespace System;
using namespace System::Windows::Forms;

[STAThread]
void main(array<String^>^ args) {
	Application::EnableVisualStyles();
	Application::SetCompatibleTextRenderingDefault(false);
	TextBoxApp::MyForm form; // Replace "TextBoxApp" with your actual project name if different
	Application::Run(% form);
}


