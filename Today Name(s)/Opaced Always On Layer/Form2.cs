using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Opaced_Always_On_Layer
{
    public partial class Form2 : Form
    {
        // Define the Windows API Constants
        private const int WS_EX_TRANSPARENT = 0x20;
        private const int WS_EX_LAYERED = 0x80000;
        
        private static Color BLACK = Color.Black;
        private static Color BLUE = Color.Blue;
        private static Color LIGHT_GREEN = Color.LightGreen;
        private static Color LIGHT_YELLOW = Color.LightYellow;
        private Color colour = LIGHT_YELLOW;
        private int timerTickInHours = 4;

        public Form2()
        {
            InitializeComponent();

            
            // A valid Icon is required, otherwise the tray icon won't show up!
            notifyIcon1.Icon = SystemIcons.Application; // Replace with your own .ico file if available
            notifyIcon1.Text = "Davis' Name";

            // Double-clicking the tray icon restores the app
            notifyIcon1.DoubleClick += TrayIcon_DoubleClick;

            // 2. Hide the main app button from the Windows Taskbar
            this.ShowInTaskbar = false;
        }

        private void TrayIcon_DoubleClick(object sender, EventArgs e)
        {
            this.Close();
        }

        protected override CreateParams CreateParams
        {
            get
            {
                CreateParams cp = base.CreateParams;
                // Use bitwise OR to append the transparent and layered styles
                cp.ExStyle |= WS_EX_TRANSPARENT | WS_EX_LAYERED;

                return cp;
            }
        }

        private void Form2_Load(object sender, EventArgs e)
        {
            this.textBox1.Text = "Krisdash Nai Chúa bậc Đế NGưu Đấng Y vương hiệu Nam Hải Long Vương mộc Rồng Xanh";
            colour = LIGHT_YELLOW;
            notifyIcon1.Visible = true;
            this.Left = 1510 - 40;
            this.Top = 7;
            this.Width = this.textBox1.Width;
            this.Height = textBox1.Height;
            textBox1.Left = 0;
            textBox1.Top = 0;
            this.textBox1.ForeColor = colour;
            this.timer1.Interval = timerTickInHours * 3600 * 1000;
            this.timer1.Start();
            this.PerformLayout();
        }

        protected override void OnFormClosing(FormClosingEventArgs e)
        {
            notifyIcon1.Dispose();
            base.OnFormClosing(e);
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            this.timer1.Stop();

            if (colour == LIGHT_YELLOW)
            {
                colour = BLUE;
                timerTickInHours = 8;
            }
            else if (colour == BLUE)
            {
                colour = BLACK;
                timerTickInHours = 4;
            }
            else if (colour == BLACK) {
                colour = LIGHT_GREEN;
                timerTickInHours = 8;
            }
            else if (colour == LIGHT_GREEN)
            {
                colour = LIGHT_YELLOW;
                timerTickInHours = 4;
            }

            this.textBox1.ForeColor = colour;
            this.textBox1.Update();

            this.timer1.Interval = timerTickInHours * 3600 * 1000;
            this.timer1.Start();
        }
    }
}
