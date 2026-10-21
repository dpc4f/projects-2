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
    }
}
