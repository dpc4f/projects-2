using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WinDigiClock
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            // A valid Icon is required, otherwise the tray icon won't show up!
            notifyIcon1.Icon = SystemIcons.Application; // Replace with your own .ico file if available
            notifyIcon1.Text = "Digital Clock";

            // Double-clicking the tray icon restores the app
            notifyIcon1.DoubleClick += notifyIcon1_DoubleClick;

            // 2. Hide the main app button from the Windows Taskbar
            this.ShowInTaskbar = false;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.Left = 0;
            this.Top = 0;

            label1.Width = this.Width;
            label1.Height = this.Height;
            label1.Left = -17;
            label1.Top = 0;

            timer1.Start();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            DateTime dt = DateTime.Now;
            TimeSpan time = dt.TimeOfDay;
            label1.Text = time.ToString(@"hh\:mm\:ss");
        }

        private void notifyIcon1_DoubleClick(object sender, EventArgs e)
        {
            this.Close();
        }

        protected override void OnFormClosing(FormClosingEventArgs e)
        {
            notifyIcon1.Dispose();
            base.OnFormClosing(e);
        }
    }
}
