# Finding your target in the money laundering capital of the world 

## Before the class!

**1. Please ensure you have downloaded XSV [here](https://github.com/BurntSushi/xsv).**

For **Mac** users with homebrew installed, the easiest way is `brew install xsv`.

For **Windows** users, please download and unzip the binary files into a folder it is easy to navigate to during the class

**2. Please download the two sample datasets `pscs-skup.csv` and `CCOD-skup.csv`**

## Key xsv commands

**Windows users** please note you will need to run xsv.exe to run the commands in the directory.**

`xsv count pscs-skup.csv` Counts the number of rows in our file

`xsv search -s data.name 'Trump' pscs-skup.csv > trump.csv` To search a specific column in the dataset for a keyword, in this case Trump and produces a file with the results.

`xsv join company_number norway-pscs.csv Company Registration No. (1)' CCOD-skup.csv > norway-land.csv` joins the data together via the company number which is common to both files and produces a csv file of the results. 

[Link to session presentation](https://docs.google.com/presentation/d/1MYxH9zVaIJADZdjlQUmp5W1Tt8FErCYTVNTpqxEFY08)if you would like to review it after the class.

# Stay in touch!

If you have any questions about the datasets or would like to collaborate on a project, please contact me on **leila.haddou@thetimes.co.uk**
