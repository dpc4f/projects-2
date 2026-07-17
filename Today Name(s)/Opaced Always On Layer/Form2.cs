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

        public Form2()
        {
            InitializeComponent();
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
            this.textBox1.Text = "Nai Chúa Bậc Đế Ngưu Đấng Y vương hiệu Gia Long mộc Rồng Xanh";
            this.Left = 1555;
            this.Top = 137;
        }

        private void btnMovements_KeyPress(object sender, KeyPressEventArgs e)
        {
            MessageBox.Show("A key has been pressed.");
        }
    }
}
