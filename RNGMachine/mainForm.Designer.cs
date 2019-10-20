namespace RNGMachine
{
    partial class mainForm
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
            this.btn_generate = new System.Windows.Forms.Button();
            this.btn_dice = new System.Windows.Forms.Button();
            this.lst_results = new System.Windows.Forms.ListBox();
            this.lbl_numbers = new System.Windows.Forms.Label();
            this.lbl_from = new System.Windows.Forms.Label();
            this.lbl_to = new System.Windows.Forms.Label();
            this.num_numberOfDice = new System.Windows.Forms.NumericUpDown();
            this.num_numbers = new System.Windows.Forms.NumericUpDown();
            this.num_rangeMin = new System.Windows.Forms.NumericUpDown();
            this.num_rangeMax = new System.Windows.Forms.NumericUpDown();
            this.radio_trad = new System.Windows.Forms.RadioButton();
            this.container_diceType = new System.Windows.Forms.Panel();
            this.radio_dnd = new System.Windows.Forms.RadioButton();
            this.btn_clear = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.num_numberOfDice)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.num_numbers)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.num_rangeMin)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.num_rangeMax)).BeginInit();
            this.container_diceType.SuspendLayout();
            this.SuspendLayout();
            // 
            // btn_generate
            // 
            this.btn_generate.Location = new System.Drawing.Point(12, 189);
            this.btn_generate.Name = "btn_generate";
            this.btn_generate.Size = new System.Drawing.Size(75, 23);
            this.btn_generate.TabIndex = 0;
            this.btn_generate.Text = "Generate";
            this.btn_generate.UseVisualStyleBackColor = true;
            this.btn_generate.Click += new System.EventHandler(this.Btn_generate_Click);
            // 
            // btn_dice
            // 
            this.btn_dice.Location = new System.Drawing.Point(117, 189);
            this.btn_dice.Name = "btn_dice";
            this.btn_dice.Size = new System.Drawing.Size(75, 23);
            this.btn_dice.TabIndex = 1;
            this.btn_dice.Text = "Dice Roll";
            this.btn_dice.UseVisualStyleBackColor = true;
            this.btn_dice.Click += new System.EventHandler(this.Btn_dice_Click);
            // 
            // lst_results
            // 
            this.lst_results.Anchor = System.Windows.Forms.AnchorStyles.Right;
            this.lst_results.FormattingEnabled = true;
            this.lst_results.Location = new System.Drawing.Point(611, 12);
            this.lst_results.Name = "lst_results";
            this.lst_results.Size = new System.Drawing.Size(177, 420);
            this.lst_results.TabIndex = 2;
            // 
            // lbl_numbers
            // 
            this.lbl_numbers.AutoSize = true;
            this.lbl_numbers.Location = new System.Drawing.Point(82, 50);
            this.lbl_numbers.Name = "lbl_numbers";
            this.lbl_numbers.Size = new System.Drawing.Size(49, 13);
            this.lbl_numbers.TabIndex = 7;
            this.lbl_numbers.Text = "Numbers";
            // 
            // lbl_from
            // 
            this.lbl_from.AutoSize = true;
            this.lbl_from.Location = new System.Drawing.Point(18, 96);
            this.lbl_from.Name = "lbl_from";
            this.lbl_from.Size = new System.Drawing.Size(30, 13);
            this.lbl_from.TabIndex = 8;
            this.lbl_from.Text = "From";
            // 
            // lbl_to
            // 
            this.lbl_to.AutoSize = true;
            this.lbl_to.Location = new System.Drawing.Point(115, 96);
            this.lbl_to.Name = "lbl_to";
            this.lbl_to.Size = new System.Drawing.Size(16, 13);
            this.lbl_to.TabIndex = 9;
            this.lbl_to.Text = "to";
            // 
            // num_numberOfDice
            // 
            this.num_numberOfDice.Location = new System.Drawing.Point(198, 192);
            this.num_numberOfDice.Maximum = new decimal(new int[] {
            1000000,
            0,
            0,
            0});
            this.num_numberOfDice.Minimum = new decimal(new int[] {
            1000000,
            0,
            0,
            -2147483648});
            this.num_numberOfDice.Name = "num_numberOfDice";
            this.num_numberOfDice.Size = new System.Drawing.Size(57, 20);
            this.num_numberOfDice.TabIndex = 10;
            // 
            // num_numbers
            // 
            this.num_numbers.Location = new System.Drawing.Point(21, 48);
            this.num_numbers.Name = "num_numbers";
            this.num_numbers.Size = new System.Drawing.Size(57, 20);
            this.num_numbers.TabIndex = 11;
            // 
            // num_rangeMin
            // 
            this.num_rangeMin.Location = new System.Drawing.Point(52, 93);
            this.num_rangeMin.Maximum = new decimal(new int[] {
            1000000,
            0,
            0,
            0});
            this.num_rangeMin.Minimum = new decimal(new int[] {
            1000000,
            0,
            0,
            -2147483648});
            this.num_rangeMin.Name = "num_rangeMin";
            this.num_rangeMin.Size = new System.Drawing.Size(57, 20);
            this.num_rangeMin.TabIndex = 12;
            // 
            // num_rangeMax
            // 
            this.num_rangeMax.Location = new System.Drawing.Point(137, 94);
            this.num_rangeMax.Maximum = new decimal(new int[] {
            1000000,
            0,
            0,
            0});
            this.num_rangeMax.Minimum = new decimal(new int[] {
            1000000,
            0,
            0,
            -2147483648});
            this.num_rangeMax.Name = "num_rangeMax";
            this.num_rangeMax.Size = new System.Drawing.Size(57, 20);
            this.num_rangeMax.TabIndex = 13;
            // 
            // radio_trad
            // 
            this.radio_trad.AutoSize = true;
            this.radio_trad.Checked = true;
            this.radio_trad.Location = new System.Drawing.Point(3, 3);
            this.radio_trad.Name = "radio_trad";
            this.radio_trad.Size = new System.Drawing.Size(74, 17);
            this.radio_trad.TabIndex = 14;
            this.radio_trad.TabStop = true;
            this.radio_trad.Text = "Traditional";
            this.radio_trad.UseVisualStyleBackColor = true;
            // 
            // container_diceType
            // 
            this.container_diceType.Controls.Add(this.radio_dnd);
            this.container_diceType.Controls.Add(this.radio_trad);
            this.container_diceType.Location = new System.Drawing.Point(118, 218);
            this.container_diceType.Name = "container_diceType";
            this.container_diceType.Size = new System.Drawing.Size(200, 27);
            this.container_diceType.TabIndex = 16;
            // 
            // radio_dnd
            // 
            this.radio_dnd.AutoSize = true;
            this.radio_dnd.Location = new System.Drawing.Point(80, 3);
            this.radio_dnd.Name = "radio_dnd";
            this.radio_dnd.Size = new System.Drawing.Size(47, 17);
            this.radio_dnd.TabIndex = 15;
            this.radio_dnd.TabStop = true;
            this.radio_dnd.Text = "DnD";
            this.radio_dnd.UseVisualStyleBackColor = true;
            // 
            // btn_clear
            // 
            this.btn_clear.Location = new System.Drawing.Point(530, 12);
            this.btn_clear.Name = "btn_clear";
            this.btn_clear.Size = new System.Drawing.Size(75, 23);
            this.btn_clear.TabIndex = 17;
            this.btn_clear.Text = "Clear";
            this.btn_clear.UseVisualStyleBackColor = true;
            this.btn_clear.Click += new System.EventHandler(this.btn_clear_Click);
            // 
            // mainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btn_clear);
            this.Controls.Add(this.container_diceType);
            this.Controls.Add(this.num_rangeMax);
            this.Controls.Add(this.num_rangeMin);
            this.Controls.Add(this.num_numbers);
            this.Controls.Add(this.num_numberOfDice);
            this.Controls.Add(this.lbl_to);
            this.Controls.Add(this.lbl_from);
            this.Controls.Add(this.lbl_numbers);
            this.Controls.Add(this.btn_dice);
            this.Controls.Add(this.btn_generate);
            this.Controls.Add(this.lst_results);
            this.MaximizeBox = false;
            this.Name = "mainForm";
            this.Text = "RNG Machine";
            ((System.ComponentModel.ISupportInitialize)(this.num_numberOfDice)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.num_numbers)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.num_rangeMin)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.num_rangeMax)).EndInit();
            this.container_diceType.ResumeLayout(false);
            this.container_diceType.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btn_generate;
        private System.Windows.Forms.Button btn_dice;
        private System.Windows.Forms.ListBox lst_results;
        private System.Windows.Forms.Label lbl_numbers;
        private System.Windows.Forms.Label lbl_from;
        private System.Windows.Forms.Label lbl_to;
        private System.Windows.Forms.NumericUpDown num_numberOfDice;
        private System.Windows.Forms.NumericUpDown num_numbers;
        private System.Windows.Forms.NumericUpDown num_rangeMin;
        private System.Windows.Forms.NumericUpDown num_rangeMax;
        private System.Windows.Forms.RadioButton radio_trad;
        private System.Windows.Forms.Panel container_diceType;
        private System.Windows.Forms.RadioButton radio_dnd;
        private System.Windows.Forms.Button btn_clear;
    }
}

