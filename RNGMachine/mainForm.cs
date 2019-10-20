using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace RNGMachine
{

    public partial class mainForm : Form
    {
        public int randomNumbers(int setSize, int min, int max)
        {
            int result = 0; //stores the result
            Random random = new Random(); //random number

            for (int i = 0; i < setSize; i++)
            {
                result = random.Next(min, max); //generates a random number in the range
                lst_results.Items.Add(result); //adds it to lst_results
            }

            return result; //returns the result
        }

        public mainForm()
        {
            InitializeComponent();
        }

        private void Btn_generate_Click(object sender, EventArgs e) //when the generate button is clicked
        {
            Decimal numbers = num_numbers.Value; //the number of numbers to generate
            Decimal min = num_rangeMin.Value; //the minimum in the number range
            Decimal max = num_rangeMax.Value; //the maximum in the number range

            randomNumbers(Decimal.ToInt32(numbers), Decimal.ToInt32(min), Decimal.ToInt32(max));
        }

        private void Btn_dice_Click(object sender, EventArgs e) //when the dice button is clicked
        {
            Decimal numbers = num_numberOfDice.Value; //from the number of dice box

            if (radio_trad.Checked)
            {
                randomNumbers(Decimal.ToInt32(numbers), 1, 6); //generates number from 1 to 6
            }

            if (radio_dnd.Checked)
            {
                randomNumbers(Decimal.ToInt32(numbers), 1, 20); //generates number from 1 to 20
            }
        }

        private void btn_clear_Click(object sender, EventArgs e)
        {
            lst_results.Items.Clear();
        }
    }
}
