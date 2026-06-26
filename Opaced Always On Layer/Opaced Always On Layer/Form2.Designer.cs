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
            this.btnAlwaysOn = new System.Windows.Forms.Button();
            this.txtLeft = new System.Windows.Forms.TextBox();
            this.txtTop = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.btnApplyVal = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnAlwaysOn
            // 
            this.btnAlwaysOn.Location = new System.Drawing.Point(324, 111);
            this.btnAlwaysOn.Name = "btnAlwaysOn";
            this.btnAlwaysOn.Size = new System.Drawing.Size(91, 23);
            this.btnAlwaysOn.TabIndex = 0;
            this.btnAlwaysOn.Text = "Always On";
            this.btnAlwaysOn.UseVisualStyleBackColor = true;
            this.btnAlwaysOn.Click += new System.EventHandler(this.btnAlwaysOn_Click);
            // 
            // txtLeft
            // 
            this.txtLeft.Location = new System.Drawing.Point(28, 66);
            this.txtLeft.Name = "txtLeft";
            this.txtLeft.Size = new System.Drawing.Size(100, 20);
            this.txtLeft.TabIndex = 1;
            this.txtLeft.Text = "455";
            // 
            // txtTop
            // 
            this.txtTop.Location = new System.Drawing.Point(176, 66);
            this.txtTop.Name = "txtTop";
            this.txtTop.Size = new System.Drawing.Size(100, 20);
            this.txtTop.TabIndex = 2;
            this.txtTop.Text = "137";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(25, 40);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(28, 13);
            this.label1.TabIndex = 3;
            this.label1.Text = "Left:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(173, 40);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(29, 13);
            this.label2.TabIndex = 4;
            this.label2.Text = "Top:";
            // 
            // btnApplyVal
            // 
            this.btnApplyVal.Location = new System.Drawing.Point(324, 64);
            this.btnApplyVal.Name = "btnApplyVal";
            this.btnApplyVal.Size = new System.Drawing.Size(91, 23);
            this.btnApplyVal.TabIndex = 5;
            this.btnApplyVal.Text = "Apply Values";
            this.btnApplyVal.UseVisualStyleBackColor = true;
            this.btnApplyVal.Click += new System.EventHandler(this.btnApplyVal_Click);
            // 
            // Form2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(436, 199);
            this.Controls.Add(this.btnApplyVal);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtTop);
            this.Controls.Add(this.txtLeft);
            this.Controls.Add(this.btnAlwaysOn);
            this.Name = "Form2";
            this.Text = "Form2";
            this.Load += new System.EventHandler(this.Form2_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnAlwaysOn;
        private System.Windows.Forms.TextBox txtLeft;
        private System.Windows.Forms.TextBox txtTop;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button btnApplyVal;
    }
}