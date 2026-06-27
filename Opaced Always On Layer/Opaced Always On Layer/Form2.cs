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
            f = new Form1();
            f.Show();
        }

        private void Form2_KeyDown(object sender, KeyEventArgs e)
        {
        }

        private void btnMovements_KeyDown(object sender, KeyEventArgs e)
        {

        }

        private void btnMovements_KeyPress(object sender, KeyPressEventArgs e)
        {
            MessageBox.Show("A key has been pressed.");
        }

        private void textBox1_KeyDown(object sender, KeyEventArgs e)
        {
            int nStep = -1;

            Int32.TryParse(txtStep.Text, out nStep);
            if (nStep == 0) nStep = N_STEP_DEFAULT;
            switch (e.KeyCode)
            {
                case Keys.Left:
                    f.Left -= nStep;
                    break;
                case Keys.Right:
                    f.Left += nStep;
                    break;
                case Keys.Up:
                    f.Top -= nStep;
                    break;
                case Keys.Down:
                    f.Top += nStep;
                    break;
                default:
                    break;
            }

            f.ResumeLayout();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            btnAlwaysOn_Click(sender, e);
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void txtControlBox_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnSetSize_Click(object sender, EventArgs e)
        {
            int nWidth = 0;
            int nHeight = 0;

            Int32.TryParse(txtWidth.Text, out nWidth);
            Int32.TryParse(txtHeight.Text, out nHeight);

            if (nWidth == 0 || nHeight == 0)
            {
                nWidth = N_WIDTH_DEFAULT;
                nHeight = N_HEIGHT_DEFAULT;
            }
            f.Hide();
            f.Width = nWidth;
            f.Height = nHeight;
            f.Show();
            f.ResumeLayout();
        }
    }
}
