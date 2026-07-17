namespace Opaced_Always_On_Layer
{
    partial class Form2
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.txtDaveName4Today = new System.Windows.Forms.RichTextBox();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // txtDaveName4Today
            // 
            this.txtDaveName4Today.Location = new System.Drawing.Point(70, 65);
            this.txtDaveName4Today.Name = "txtDaveName4Today";
            this.txtDaveName4Today.ReadOnly = true;
            this.txtDaveName4Today.Size = new System.Drawing.Size(612, 96);
            this.txtDaveName4Today.TabIndex = 9;
            this.txtDaveName4Today.Text = "";
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(154, 205);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(396, 20);
            this.textBox1.TabIndex = 10;
            // 
            // Form2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.ClientSize = new System.Drawing.Size(759, 288);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.txtDaveName4Today);
            this.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.Name = "Form2";
            this.Text = "Form2";
            this.Load += new System.EventHandler(this.Form2_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.RichTextBox txtDaveName4Today;
        private System.Windows.Forms.TextBox textBox1;
    }
}