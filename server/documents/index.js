// module.exports = ({ date_taken, testeeName, testName,attempts, score,sten,percentile} )=> {
module.exports = (testeeRecords, allStens) => {
   const today = new Date();

   const openingTags = `
   <!doctype html>
      <html>
         <head>
            <meta charset="utf-8">
            <title>PDF Report Template</title>
            <style>
               .invoice-box {
                  
               padding: 30px;
               border: 1px solid #eee;
               box-shadow: 0 0 10px rgba(0, 0, 0, .15);
               font-size: 16px;
               
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

   <table id="tableAve" border="1" style='border-collapse:collapse' align=center> 
      <tr>
         <td   width="100" bgcolor="red"     height=" 20"  align=center>Below Average </td>     
         <td   width="100" bgcolor="#ffc000" height=" 20"  align=center>Lower Average</td>
         <td   width="100" bgcolor="yellow" height=" 20"  align=center>Average</td>
         <td   width="100" bgcolor="#92d050" height=" 20"  align=center>Upper Average</td>
         <td   width="100" bgcolor="#00b050" height=" 20"  align=center>Above Average</td>
      </tr> 
         
   </table>
   </br> 
      <table  align=center   > 
         
         <tr>
            <td   width="150" style="font-size:10px" ></td>
            <td   width="20"   align=center> 1</td>
            <td   width="20"  align=center>2</td>
            <td   width="20"   align=center>3</td>
            <td   width="20"   align=center>4</td>
            <td   width="20"  align=center>5</td>
            <td   width="20"  align=center>6</td>
            <td   width="20"  align=center>7</td>
            <td   width="20"  align=center>8</td>
            <td   width="20"  align=center>9</td>
            <td   width="24"  align=center>10</td>
            <td   width="100"  style="text-align:right; font-size:10px" style='border-collapse:collapse'> </td>
            
         </tr>
      </table>
      `;
   const closingTags = ` 
         </body>
      </html>`;

   var body = ``;
   var scoringTableTemplate = ``;
   var count = 1;
   var averageTableTemplate = '';



   testeeRecords.forEach(candidate => {

      let stenSum = 0; let itemsFound = 0;

      var allStens = [];

      allStens = candidate.sten;
      var len = allStens.length;


      let item = null;

      for (let i = 0; i < len; i++) {
         item = allStens[i];
         if (item.found) {
            stenSum = item.sten + stenSum;
            itemsFound = itemsFound + 1;

         }
      }
      const averageSten = stenSum / itemsFound;
      console.log(averageSten);


      averageTableTemplate = `
      <div align=center>
         <p> Overall Cognitive Profile</p>
      </div>
      <table id="tableAve" border="1" style='border-collapse:collapse' align=center> 
      <tr>
         <td   width="100" bgcolor="red"     height=" 20"  align=center>Below Average </td>     
         <td   width="100" bgcolor="#ffc000" height=" 20"  align=center>Lower Average</td>
         <td   width="100" bgcolor="#92d050" height=" 20"  align=center>Average</td>
         <td   width="100" bgcolor="#70ad47" height=" 20"  align=center>Upper Average</td>
         <td   width="100" bgcolor="#00b050" height=" 20"  align=center>Above Average</td>
      </tr>
      <tr>
         <td  id ="cell1" width="100" height=" 20" align=center>   </td>     
         <td  id ="cell2" width="100" height=" 20" align=center>   </td>
         <td  id ="cell3" width="100" height=" 20" align=center>   </td>
         <td  id ="cell4" width="100" height=" 20" align=center>   </td>
         <td  id ="cell5" width="100" height=" 20" align=center>   </td>
      </tr>

   </table>
   <br/>

   <script>
            var cell1 = document.getElementById("cell1");
            var cell2 = document.getElementById("cell2");
            var cell3 = document.getElementById("cell3");
            var cell4 = document.getElementById("cell4");
            var cell5 = document.getElementById("cell5");

            var aveSten = 6;

            switch(aveSten) {
               case 1:
               case 2:
               case 3:
                  cell1 = document.getElementById("cell1").innerHTML = "*";
                  
                  break;
              
               case 4:
                  cell2 = document.getElementById("cell2").innerHTML = "*";
                  
                  break;
               case 5:
               case 6:
                  cell3 = document.getElementById("cell3").innerHTML = "*";
                  
                  break;
               
                  
               case 7:
                  cell4 = document.getElementById("cell4").innerHTML = "*";
                  
                  break;
               case 8:
               case 9:
               case 10:
                  cell5 = document.getElementById("cell5").innerHTML = "*";
                  
                  break;
               default:
                  console.log("");
                  break;
            }
         </script>


      `
   })

   testeeRecords.forEach(candidate => {
      scoringTableTemplate += `
         <table id="table${count}" border="1" style='border-collapse:collapse' align=center> 
            <tr >
            
               <td  id ="${count}cell0" width="150" style="font-size:10px" >${candidate.testName}</td>
               <td  id ="${count}cell1" width="20" bgcolor="red"  align=center> </td>
               <td  id ="${count}cell2" width="20" bgcolor="red"  align=center> </td>
               <td  id ="${count}cell3" width="20" bgcolor="red"  align=center></td>
               <td  id ="${count}cell4" width="20" bgcolor="#ffc000"  align=center></td>
               <td  id ="${count}cell5" width="20" bgcolor="yellow" align=center></td>
               <td  id ="${count}cell6" width="20" bgcolor="yellow" align=center></td>
               <td  id ="${count}cell7" width="20" bgcolor="#92d050" align=center></td>
               <td  id ="${count}cell8" width="20" bgcolor="green" align=center></td>
               <td  id ="${count}cell9" width="20" bgcolor="green" align=center></td>
               <td  id ="${count}cell10" width="20" bgcolor="green" align=center></td>
               <td  id ="${count}cell11" width="100"  style="text-align:right; font-size:10px" style='border-collapse:collapse'> </td>
               
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
            var cell11 = document.getElementById("${count}cell11");

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

      body = `
      
         <div class="invoice-box" style="background-color: #f2f2f2; height: 340vh" style="margin-top:50px;">
            <div style="background-color: #a8d08d; height: 340vh; width:100vh; margin-left:43vh;">
               
               <div style="background-color: #8eaadb;height: 340vh; width:200vh;margin-left:5vh"> 
               
               
               <div style="background-color: #1b2e53; height: 30vh; width:200vh">
                   <h2 style="text-align:absolute; color: white; font-size:20px; font-family: Candara,">CONFIDENTIAL PSYCHOMETRIC REPORT</h2>
               </div>
               <table cellpadding="0" cellspacing="0" >
                  <tr class="top">
                     <td colspan="2">
                        <table>
                           <tr>
                              <td>
                                 Date Taken : ${candidate.date_taken}
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
                                 Testee name : ${candidate.testeeName}
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
                                 Position : Position
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
                                 Company : Company Name
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                             
               </table>
               <div style="margin-left: 12vh; font-family: Candara, serif">
                  <p>The contents of this report are highly confidential 
                     and unauthorised persons not directly involved with the 
                     selection decision may not obtain access to its contents. 
                     Under NO circumstances may this report 
                     or a copy of it be given to the candidate it concerns.
                  </p>
                  <p>Psychometric tests must not be used as the
                     sole determinant of selection decisions. 
                     Other sources of information like interviews, reference checks, etc.,
                     should also be considered in making a final decision.
                  </p>
                 
               </div>
               </div>
            </div>
            <div style="position:absolute; bottom:1200px; left:0px; height: 70vh; width:56vh" > 
         <p style="text-align:center; font-size:12px;font-family: Candara"> DONE BY EP INDUSTRIAL PSYCHOLOGICAL SERVICES P/L </p>
         <a href="default.asp">
         <img  src="https://drive.google.com/file/d/18UiU1dndntNTVypYJ1DUwQINrrzjTCdA/view?usp=sharing"
         style="width:100%; max-width:156px;">
</a>
      </div>
            <br />
         </div>
         <div style="height: 16vh">
         </div>
         <div style="margin-left: 24vh; font-family: Candara, serif" >
            <div style="background-color: #1b2e53; height: 8vh; width:250vh">
               <h3 style="text-align:center; font-size:14px; color: white;font-family: Candara, serif" >NON-INTERACTIVE PSYCHOMETRIC TESTING</h3>
           </div>
           <div style="width:250vh; font-family: Candara">
            <h3 style="text-align:left; font-size:12px" >COGNITIVE ABILITY - CRITICAL REASONING TEST BATTERY</h3>
            <p >The Critical Reasoning Test (CRT) Battery assesses the candidate’s cognitive ability,
               that is, verbal reasoning, numerical reasoning and abstract reasoning skills. It assesses 
               the ability to solve complex problems as well as make meaningful decisions on the basis of information presented.
               The cognitive ability level is then compared with similar other candidates in a given population (norms).
               The battery consists of the following tests:</p>
            <p>Verbal Reasoning</p>
            <img src="logo.PNG" alt="EPZ_LOGO">
            <p>The Verbal Reasoning Test assesses a person’s ability to use words in a logical way, 
               that is, the ability to perceive and understand concepts and ideas verbally. 
               It assesses one’s ability to make decisions based on given information, as well as the ability to understand, 
               interpret and use words for the purposes of communication.
            </p>
            <p>Numerical Reasoning</p>
            <p>The Numerical Reasoning Tests assesses the candidate’s ability to understand and interpret given 
               statistical information presented
               in tabular and graphical form, for work-related decision-making.
            </p>
            <p>Abstract Reasoning </p>
            <p>This test assesses the candidate’s ability to understand and follow complex patterns and make judgments
               for decision-making. It seeks to measure the ability to think logically,
               imagine concepts and reduce those concepts into practical realities.
            </p>
            <p>The cognitive ability level is then compared with similar other candidates in a given population (norms).
               As a result a standard score (sten) and a percentile rank (%ile) are used to interpret the performance on this test battery and are given to 
               indicate where one is in comparison with similar candidates in the population who took the same test.  Stens (standard ten) rank candidates’ performance on a scale of 1 (lowest)  to 10,  (highest), in comparison with a representative sample of similar others. Percentiles (%ile) provide the relative standing of the candidate’s performance on the test on a scale of 1 to 100, that is, 
               when compared again to a representative sample of similar others who took the same test. 
            </p>
            <p>For example, performance at 80%ile means that one performed better
               than 79% of a comparable sample. So those with higher Stens and percentiles would have 
               performed better than those with lower Stens and percentiles. 
            </p>
            <p> The candidate’s cognitive ability profile is provided overleaf.</p>
         </div>
   </div>
         <br />
      `;
      count++;
   });

   return openingTags + body + staticScale + scoringTableTemplate + averageTableTemplate + closingTags;

};