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
    //using System;
    //using System.Windows.Forms;

    //public partial class TopForm : Form
    //{
 

        //public TopForm()
        //{
        //    InitializeComponent();

        //    // Optional: Make the form semi-transparent so you can see what's underneath
        //    this.Opacity = 0.75;

        //    // Ensure the form stays on top if needed
        //    this.TopMost = true;
        //}


    //}

    public partial class Form1 : Form
    {
        // Define the Windows API Constants
        private const int WS_EX_TRANSPARENT = 0x20;
        private const int WS_EX_LAYERED = 0x80000;

        public Form1()
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

    private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            return;
        }
    }
}
