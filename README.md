# EPZ_ReportGeneration

Module to generate reports


# EPZ_ReportGeneration

Module to generate reports

The project is about generating a report for each candidate. So, l have developed the template with HTML.
On localhost:3000 there is a simple form if you enter data and click Download, it will download the pdf with the data you have entered.
Then below the form is the table with data from a JSON file in server/items.json.

The issue at hand is as follows:
Failing to download a pdf with the data from the table rather than downloading from the form.

Since am failing to implement the above issue. I have thought of passing the table row data to the form above (sort of like you want to update but instead want to download) and then clicking the download button. I know this will work but failing to pass the data to the form.
