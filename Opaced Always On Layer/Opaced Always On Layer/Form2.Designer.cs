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
            this.txtControlBox = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // txtControlBox
            // 
            this.txtControlBox.BackColor = System.Drawing.SystemColors.MenuText;
            this.txtControlBox.Font = new System.Drawing.Font("Microsoft Sans Serif", 27.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtControlBox.ForeColor = System.Drawing.SystemColors.InactiveBorder;
            this.txtControlBox.Location = new System.Drawing.Point(87, 39);
            this.txtControlBox.Multiline = true;
            this.txtControlBox.Name = "txtControlBox";
            this.txtControlBox.Size = new System.Drawing.Size(232, 93);
            this.txtControlBox.TabIndex = 1;
            this.txtControlBox.Text = "Press The Arrow Keys";
            this.txtControlBox.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            this.txtControlBox.UseWaitCursor = true;
            this.txtControlBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.textBox1_KeyDown);
            // 
            // button1
            // 
            this.button1.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.button1.Location = new System.Drawing.Point(161, 159);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 2;
            this.button1.Text = "Apply Values";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // Form2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.ClientSize = new System.Drawing.Size(410, 205);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.txtControlBox);
            this.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.Name = "Form2";
            this.Text = "Form2";
            this.Load += new System.EventHandler(this.Form2_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.Form2_KeyDown);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox txtControlBox;
        private System.Windows.Forms.Button button1;
    }
}