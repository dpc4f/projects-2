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
            this.btnApply = new System.Windows.Forms.Button();
            this.txtWidth = new System.Windows.Forms.TextBox();
            this.txtHeight = new System.Windows.Forms.TextBox();
            this.txtStep = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.btnSetSize = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // txtControlBox
            // 
            this.txtControlBox.BackColor = System.Drawing.SystemColors.HighlightText;
            this.txtControlBox.Font = new System.Drawing.Font("Microsoft Sans Serif", 27.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtControlBox.ForeColor = System.Drawing.SystemColors.ControlText;
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
            // btnApply
            // 
            this.btnApply.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.btnApply.Location = new System.Drawing.Point(331, 219);
            this.btnApply.Name = "btnApply";
            this.btnApply.Size = new System.Drawing.Size(75, 23);
            this.btnApply.TabIndex = 2;
            this.btnApply.Text = "Apply Values";
            this.btnApply.UseVisualStyleBackColor = true;
            this.btnApply.Click += new System.EventHandler(this.button1_Click);
            // 
            // txtWidth
            // 
            this.txtWidth.Location = new System.Drawing.Point(412, 73);
            this.txtWidth.Name = "txtWidth";
            this.txtWidth.Size = new System.Drawing.Size(100, 20);
            this.txtWidth.TabIndex = 3;
            this.txtWidth.Text = "838";
            // 
            // txtHeight
            // 
            this.txtHeight.Location = new System.Drawing.Point(412, 112);
            this.txtHeight.Name = "txtHeight";
            this.txtHeight.Size = new System.Drawing.Size(100, 20);
            this.txtHeight.TabIndex = 4;
            this.txtHeight.Text = "529";
            // 
            // txtStep
            // 
            this.txtStep.Location = new System.Drawing.Point(87, 152);
            this.txtStep.Name = "txtStep";
            this.txtStep.Size = new System.Drawing.Size(232, 20);
            this.txtStep.TabIndex = 5;
            this.txtStep.Text = "enter a number 4 the step [default = 7]";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(368, 80);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(38, 13);
            this.label1.TabIndex = 6;
            this.label1.Text = "Width:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(365, 119);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(41, 13);
            this.label2.TabIndex = 7;
            this.label2.Text = "Height:";
            // 
            // btnSetSize
            // 
            this.btnSetSize.Location = new System.Drawing.Point(547, 109);
            this.btnSetSize.Name = "btnSetSize";
            this.btnSetSize.Size = new System.Drawing.Size(82, 23);
            this.btnSetSize.TabIndex = 8;
            this.btnSetSize.Text = "Set Size";
            this.btnSetSize.UseVisualStyleBackColor = true;
            this.btnSetSize.Click += new System.EventHandler(this.btnSetSize_Click);
            // 
            // Form2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.ClientSize = new System.Drawing.Size(759, 288);
            this.Controls.Add(this.btnSetSize);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtStep);
            this.Controls.Add(this.txtHeight);
            this.Controls.Add(this.txtWidth);
            this.Controls.Add(this.btnApply);
            this.Controls.Add(this.txtControlBox);
            this.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.Name = "Form2";
            this.Text = "Form2";
            this.Load += new System.EventHandler(this.Form2_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox txtControlBox;
        private System.Windows.Forms.Button btnApply;
        private System.Windows.Forms.TextBox txtWidth;
        private System.Windows.Forms.TextBox txtHeight;
        private System.Windows.Forms.TextBox txtStep;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button btnSetSize;
    }
}