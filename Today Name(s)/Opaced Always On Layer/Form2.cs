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
        const int N_DEFAULT = 80;
        const int N_STEP_DEFAULT = 7;
        const int N_WIDTH_DEFAULT = 838;
        const int N_HEIGHT_DEFAULT = 539;
        Form1 f; // by default f is null

        public Form2()
        {
            InitializeComponent();
        }

        private void btnAlwaysOn_Click(object sender, EventArgs e)
        {
            this.Hide();  
        }

        private void Form2_Load(object sender, EventArgs e)
        {
            this.textBox1.Text = "Nai Chúa Bậc Đế Ngưu Đấng Y vương hiệu Gia Long mộc Rồng Xanh";
        }

        private void btnMovements_KeyPress(object sender, KeyPressEventArgs e)
        {
            MessageBox.Show("A key has been pressed.");
        }

        private void textBox1_KeyDown(object sender, KeyEventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
         
        }

        private void btnSetSize_Click(object sender, EventArgs e)
        {
         
        }
    }
}
