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

        private void btnApplyVal_Click(object sender, EventArgs e)
        {
            int nLeft = N_DEFAULT;
            int nTop = N_DEFAULT;

            Int32.TryParse(txtLeft.Text, out nLeft);
            Int32.TryParse(txtTop.Text, out nTop);
            f.Left = nLeft;
            f.Top = nTop;
            f.ResumeLayout();
        }
    }
}
