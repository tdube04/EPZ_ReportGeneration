// module.exports = ({ date_taken, testeeName, testName,attempts, score,sten,percentile} )=> {
   module.exports = (testeeRecords )=> {
   const today = new Date();

   const openingTags = `
   <!doctype html>
      <html>
         <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <style>
               .invoice-box {
               max-width: 800px;
               margin: auto;
               padding: 30px;
               border: 1px solid #eee;
               box-shadow: 0 0 10px rgba(0, 0, 0, .15);
               font-size: 16px;
               line-height: 24px;
               font-family: 'Helvetica Neue', 'Helvetica',
               color: #555;
               }
               .margin-top {
               margin-top: 50px;
               }
               .justify-center {
               text-align: center;
               }
               .invoice-box table {
               width: 100%;
               line-height: inherit;
               text-align: left;
               }
               .invoice-box table td {
               padding: 5px;
               vertical-align: top;
               }
               .invoice-box table tr td:nth-child(2) {
               text-align: right;
               }
               .invoice-box table tr.top table td {
               padding-bottom: 20px;
               }
               .invoice-box table tr.top table td.title {
               font-size: 45px;
               line-height: 45px;
               color: #333;
               }
               .invoice-box table tr.information table td {
               padding-bottom: 40px;
               }
               .invoice-box table tr.heading td {
               background: #eee;
               border-bottom: 1px solid #ddd;
               font-weight: bold;
               }
               .invoice-box table tr.details td {
               padding-bottom: 20px;
               }
               .invoice-box table tr.item td {
               border-bottom: 1px solid #eee;
               }
               .invoice-box table tr.item.last td {
               border-bottom: none;
               }
               .invoice-box table tr.total td:nth-child(2) {
               border-top: 2px solid #eee;
               font-weight: bold;
               }
               @media only screen and (max-width: 600px) {
               .invoice-box table tr.top table td {
               width: 100%;
               display: block;
               text-align: center;
               }
               .invoice-box table tr.information table td {
               width: 100%;
               display: block;
               text-align: center;
               }
               }
            </style>
         </head>
      <body>`;
   const staticScale = `
      <table align=center> 
         <tr>
            <td width="20">1 </td>
            <td width="20"> 2</td>
            <td width="20">3 </td>
            <td width="20"> 4</td>
            <td width="20"> 5</td>
            <td width="20"> 6</td>
            <td width="20"> 7</td>
            <td width="20"> 8</td>
            <td width="20"> 9</td>
            <td width="20"> 10</td>
            <td width="150"> </td>
         </tr>
      </table>
      <br/>`;
   const closingTags = ` 
         </body>
      </html>`;

   var body = ``;
   var scoringTableTemplate = ``
   var count = 1;

   testeeRecords.forEach(candidate => {
      scoringTableTemplate += `
         <table id="table${count}" border="1" style='border-collapse:collapse' align=center> 
            <tr>
               <td  id ="${count}cell0" width="150" style="font-size:10px" >${candidate.testName}</td>
               <td  id ="${count}cell1" width="20" bgcolor="red" > </td>
               <td  id ="${count}cell2" width="20" bgcolor="red"> </td>
               <td  id ="${count}cell3" width="20" bgcolor="red"></td>
               <td  id ="${count}cell4" width="20" bgcolor="yellow"></td>
               <td  id ="${count}cell5" width="20" bgcolor="yellow"></td>
               <td  id ="${count}cell6" width="20" bgcolor="yellow"></td>
               <td  id ="${count}cell7" width="20" bgcolor="yellow"></td>
               <td  id ="${count}cell8" width="20" bgcolor="green"></td>
               <td  id ="${count}cell9" width="20" bgcolor="green"></td>
               <td  id ="${count}cell10" width="20" bgcolor="green"></td>
               <td  id ="${count}cell11" width="100"  style="text-align:right; font-size:10px" style='border-collapse:collapse'> Upper Average</td>
            </tr>
         </table>
         <br/>

         <script>
            var cell1 = document.getElementById("${count}cell1");
            var cell2 = document.getElementById("${count}cell2");
            var cell3 = document.getElementById("${count}cell3");
            var cell4 = document.getElementById("${count}cell4");
            var cell5 = document.getElementById("${count}cell5");
            var cell6 = document.getElementById("${count}cell6");
            var cell7 = document.getElementById("${count}cell7");
            var cell8 = document.getElementById("${count}cell8");
            var cell9 = document.getElementById("${count}cell9");
            var cell10 = document.getElementById("${count}cell10");
            var cell11 = document.getElementById("${count}cell10");

            switch(${candidate.sten}) {
               case 1:
                  cell1 = document.getElementById("${count}cell1").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Below Average";
                  break;
               case 2:
                  cell2 = document.getElementById("${count}cell2").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Below Average";
                  break;
               case 3:
                  cell3 = document.getElementById("${count}cell3").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Below Average";
                  break;
               case 4:
                  cell4 = document.getElementById("${count}cell4").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Average";
                  break;
               case 5:
                  cell5 = document.getElementById("${count}cell5").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Upper Average";
                  break;
               case 6:
                  cell6 = document.getElementById("${count}cell6").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Upper Average";
                  break;
               case 7:
                  cell7 = document.getElementById("${count}cell7").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Upper Average";
                  break;
               case 8:
                  cell8 = document.getElementById("${count}cell8").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Above Average";
                  break;
               case 9:
                  cell9 = document.getElementById("${count}cell9").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Above Average";
                  break;
               case 10:
                  cell10 = document.getElementById("${count}cell10").innerHTML = "*";
                  cell11 = document.getElementById("${count}cell11").innerHTML = "Above Average";
                  break;
               
               default:
                  console.log("");
                  break;
            }
         </script>`;

      body += `
         <div class="invoice-box">
            <table cellpadding="0" cellspacing="0">
               <tr class="top">
                  <td colspan="2">
                     <table>
                        <tr>
                           <td>
                              Date Taken: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                           </td>
                        </tr>
                     </table>
                  </td>
               </tr>
               <tr class="information">
                  <td colspan="2">
                     <table>
                        <tr>
                           <td>
                              Testee name: ${candidate.testeeName}
                           </td>
                           <td>
                              Test name: ${candidate.testName}
                           </td>
                        </tr>
                     </table>
                  </td>
               </tr>
               <tr class="heading">
                  <td>Column :</td>
                  <td>Value</td>
               </tr>
               <tr class="item">
                  <td>Attempts:</td>
                  <td>${candidate.attempts}</td>
               </tr>
               <tr class="item">
                  <td>Score:</td>
                  <td>${candidate.score}</td>
               </tr>
               <tr class="item">
                  <td>Sten:</td>
                  <td>${candidate.sten}</td>
               </tr>
               <tr class="item">
                  <td>Percentile:</td>
                  <td>${candidate.percentile}%</td>
               </tr>
            </table>
            <br />
         </div>
         <br />
      `;
      count++;
   });

   return openingTags + body + staticScale + scoringTableTemplate + closingTags;

};