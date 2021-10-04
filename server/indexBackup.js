// // module.exports = ({ date_taken, testeeName, testName,attempts, score,sten,percentile} )=> {
//    module.exports = (testeeRecords, allStens) => {
//       const today = new Date();
   
//       const openingTags = `
//          <!doctype html>
//             <html>
//                <head>
//                   <meta charset="utf-8">
//                   <title>PDF Report Template</title>
//                   <style>
//                      .invoice-box {
                        
//                      padding: 30px;
//                      border: 1px solid #eee;
//                      box-shadow: 0 0 10px rgba(0, 0, 0, .15);
//                      font-size: 16px;
                     
//                      font-family: 'Helvetica Neue', 'Helvetica',
//                      color: #555;
//                      }
//                      .margin-top {
//                      margin-top: 50px;
//                      }
//                      .justify-center {
//                      text-align: center;
//                      }
//                      .invoice-box table {
//                      width: 100%;
//                      line-height: inherit;
//                      text-align: left;
//                      }
//                      .invoice-box table td {
//                      padding: 5px;
//                      vertical-align: top;
//                      }
//                      .invoice-box table tr td:nth-child(2) {
//                      text-align: right;
//                      }
//                      .invoice-box table tr.top table td {
//                      padding-bottom: 20px;
//                      }
//                      .invoice-box table tr.top table td.title {
//                      font-size: 45px;
//                      line-height: 45px;
//                      color: #333;
//                      }
//                      .invoice-box table tr.information table td {
//                      padding-bottom: 40px;
//                      }
//                      .invoice-box table tr.heading td {
//                      background: #eee;
//                      border-bottom: 1px solid #ddd;
//                      font-weight: bold;
//                      }
//                      .invoice-box table tr.details td {
//                      padding-bottom: 20px;
//                      }
//                      .invoice-box table tr.item td {
//                      border-bottom: 1px solid #eee;
//                      }
//                      .invoice-box table tr.item.last td {
//                      border-bottom: none;
//                      }
//                      .invoice-box table tr.total td:nth-child(2) {
//                      border-top: 2px solid #eee;
//                      font-weight: bold;
//                      }
//                      @media only screen and (max-width: 600px) {
//                      .invoice-box table tr.top table td {
//                      width: 100%;
//                      display: block;
//                      text-align: center;
//                      }
//                      .invoice-box table tr.information table td {
//                      width: 100%;
//                      display: block;
//                      text-align: center;
//                      }
//                      }
//                   </style>
//                </head>
//             <body>`;
//       const staticScale = `
   
//             <div style="margin-left:4vh; margin-right: 0vh"> 
//                      <table border="0" cellspacing="4" align="center" style="width:margin-top:0px">
//                         <tr> <td  height = "8" width="110"  style="font-size:11px;" style='border: none' align=center>
//                               Test
//                            </td>
//                            <td > 
//                               <table border="1" cellspacing="0">
//                                  <tr>
//                                     <p align=center style="margin-bottom:2px;margin-top:2px;font-size:10px"> Sten </p>
                        
//                                     <td   width="107" bgcolor="red"     height=" 20"  align=center>  <p style="font-size:9px">Below Average </p> </td>     
//                                     <td   width="35"  bgcolor="#ffc000" height=" 20"  align=center>  <p style="font-size:9px">Lower Average </p> </td>
//                                     <td   width="73"  bgcolor="yellow"  height=" 20"  align=center>  <p style="font-size:9px"> Average </p> </td>
//                                     <td   width="35"  bgcolor="#a9d08e" height=" 20"  align=center>  <p style="font-size:9px">Upper Average </p> </td>
//                                     <td   width="107" bgcolor="#008000" height=" 20"  align=center>  <p style="font-size:9px">Above Average </p></td> 
                                    
//                                  </tr>
                                 
//                               </table>
//                            </td>
//                            <td  cellpadding="4" height = "10" width="20"  align=right style="font-size:11px">%ile</td>
//                            <td   height = "8" width="100"  style="text-align:center; font-size:11px" style='border-collapse:collapse'>Comment </td>
//                         </table>
//                      </div>
          
//          <div style="margin-left:12vh; margin-right: 6vh">
//             <table align=center>    
//                <tr style="font-size:9px">
//                   <td   width="32"  align=left >   1 </td>
//                   <td   width="32"  align=left>    2 </td>
//                   <td   width="32"  align=left>    3 </td>
//                   <td   width="33"  align=left>    4 </td>
//                   <td   width="33"  align=left>    5 </td>
//                   <td   width="33"  align=left>    6 </td>
//                   <td   width="33"  align=left>    7 </td>
//                   <td   width="30"  align=center>  8 </td>
//                   <td   width="30"  align=center>  9 </td>
//                   <td   width="30"  align=center>  10 </td>
    
//                </tr>
//             </table>
//             </div>
//             <br/>
//             `;
//       const closingTags = ` 
//                </body>
//             </html>`;
   
//       var body = ``;
//       var scoringTableTemplate = ``;
//       var count = 1;
//       var averageTableTemplate = '';
//       var total = 0;
//       var countRecords = 0;
   
//       testeeRecords.forEach(candidate => {
   
//          let stenSum = 0; 
//          let itemsFound = 3;
//          var allStens = [];
//          let arry = [];
   
//          allStens = candidate.sten;
      
//          var smallA = arry.push(candidate.sten);
         
//          function calculateAverage(array) {
//             array.forEach(function (item, index) {
//                total = total + parseInt(item); // since item is of type 'any' , we need to convert it to parseInt so that it becomes an Integer
//                countRecords++;
//             });
   
//             var AverageSten = total / countRecords;
   
//             console.log(AverageSten); 
   
//             return AverageSten;
//          }
   
//          averageTableTemplate = `
//             <div align=center>
//                <p style="font-family: Candara ; font-size:12px"> Overall Cognitive Profile</p>
//             </div>
//             <table id="tableAve" border="1" style='border-collapse:collapse' align=center> 
//             <tr>
//                <td   width="100" bgcolor="red"     height=" 20"  align=center>Below Average </td>     
//                <td   width="100" bgcolor="#ffc000" height=" 20"  align=center>Lower Average</td>
//                <td   width="100" bgcolor="#92d050" height=" 20"  align=center>Average</td>
//                <td   width="100" bgcolor="#70ad47" height=" 20"  align=center>Upper Average</td>
//                <td   width="100" bgcolor="#00b050" height=" 20"  align=center>Above Average</td>
//             </tr>
//             <tr>
//                <td  id ="cell1" width="100" height=" 20" align=center>   </td>     
//                <td  id ="cell2" width="100" height=" 20" align=center>   </td>
//                <td  id ="cell3" width="100" height=" 20" align=center>   </td>
//                <td  id ="cell4" width="100" height=" 20" align=center>   </td>
//                <td  id ="cell5" width="100" height=" 20" align=center>   </td>
//             </tr>
      
//          </table>
//          <br/>
      
//          <script>
//                   var cell1 = document.getElementById("cell1");
//                   var cell2 = document.getElementById("cell2");
//                   var cell3 = document.getElementById("cell3");
//                   var cell4 = document.getElementById("cell4");
//                   var cell5 = document.getElementById("cell5");
      
//                   var aveSten = ${calculateAverage(arry)};
//                   switch(true) {
//                      case  ((aveSten >= 1) && (aveSten <= 3.9)):
                        
   
//                         cell1 = document.getElementById("cell1").innerHTML = "<p style='font-size:12px'>&diams;</p>";
                        
//                         break;
                    
//                      case ((aveSten >= 4) && (aveSten <= 4.9)):                 
//                         cell2 = document.getElementById("cell2").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         break;
//                      case ((aveSten >= 5) && (aveSten <= 6.9)):
                     
//                         cell3 = document.getElementById("cell3").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         break;  
//                      case ((aveSten >= 7) && (aveSten <= 7.9)):
//                         cell4 = document.getElementById("cell4").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         break;
   
//                      case ((aveSten >= 8) && (aveSten <= 10)):
//                         cell5 = document.getElementById("cell5").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         break;
   
//                      default:
//                         console.log("");
//                         break;
//                   }
//                </script>
      
      
//             `
//       })
   
//       testeeRecords.forEach(candidate => {
   
//          scoringTableTemplate += `
//                 <div style="margin-left:4vh; margin-right: 0vh; "> 
//                      <table border="0" cellspacing="4" align="center" style=" margin-botttom: 60vh;">
//                         <tr> <td id ="${count}cell0" height = "8" width="110"  style="font-size:7px;" style='border: none' align=center>
//                                  ${candidate.testName}
//                              </td>
//                            <td > 
//                               <table border="1" cellspacing="0" >
//                                  <tr>
                                    
//                                     <td  id ="${count}cell1" height = "8" width="34" bgcolor="red"     align=center> </td>
//                                     <td  id ="${count}cell2" height = "8" width="34" bgcolor="red"     align=center> </td>
//                                     <td  id ="${count}cell3" height = "8" width="34" bgcolor="red"     align=center></td>
//                                     <td  id ="${count}cell4" height = "8" width="34" bgcolor="#ffc000" align=center></td>
//                                     <td  id ="${count}cell5" height = "8" width="34" bgcolor="yellow"  align=center></td>
//                                     <td  id ="${count}cell6" height = "8" width="34" bgcolor="yellow"  align=center></td>
//                                     <td  id ="${count}cell7" height = "8" width="34" bgcolor="#a9d08e" align=center></td>
//                                     <td  id ="${count}cell8" height = "8" width="34" bgcolor="green"   align=center></td>
//                                     <td  id ="${count}cell9" height = "8" width="34" bgcolor="green"   align=center></td>
//                                     <td  id ="${count}cell10" height = "8" width="34" bgcolor="green"  align=center></td>
                                    
//                                  </tr>
                                 
//                               </table>
//                            </td>
//                            <td  id ="${count}cell112" height = "8" width="20"  align=right style="font-size:10px">${candidate.percentile}</td>
//                            <td  id ="${count}cell11" height = "8" width="100"  style="text-align:right; font-size:10px" style='border-collapse:collapse'> </td>
//                         </table>
//                      </div>
   
//                <br/>
//                <script>
//                   var cell1 = document.getElementById("${count}cell1");
//                   var cell2 = document.getElementById("${count}cell2");
//                   var cell3 = document.getElementById("${count}cell3");
//                   var cell4 = document.getElementById("${count}cell4");
//                   var cell5 = document.getElementById("${count}cell5");
//                   var cell6 = document.getElementById("${count}cell6");
//                   var cell7 = document.getElementById("${count}cell7");
//                   var cell8 = document.getElementById("${count}cell8");
//                   var cell9 = document.getElementById("${count}cell9");
//                   var cell10 = document.getElementById("${count}cell10");
//                   var cell11 = document.getElementById("${count}cell11");
      
//                   switch(${candidate.sten}) {
//                      case 1:
//                         cell1 = document.getElementById("${count}cell1").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = "<p align='center'>Below Average</p>";
//                         break;
//                      case 2:
//                         cell2 = document.getElementById("${count}cell2").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = "<p align='center'>Below Average</p>";
//                         break;
//                      case 3:
//                         cell3 = document.getElementById("${count}cell3").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = "<p align='center'>Below Average</p>";
//                         break;
//                      case 4:
//                         cell4 = document.getElementById("${count}cell4").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = "<p align='center'> Lower Average</p>";
//                         break;
//                      case 5:
//                         cell5 = document.getElementById("${count}cell5").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = " <p align='center'>Average</p>";
//                         break;
//                      case 6:
//                         cell6 = document.getElementById("${count}cell6").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = "<p align='center'>Average</p>";
//                         break;
//                      case 7:
//                         cell7 = document.getElementById("${count}cell7").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = "<p align='center'>Upper Average</p>";
//                         break;
//                      case 8:
//                         cell8 = document.getElementById("${count}cell8").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = "<p align='center'>Above Average</p>";
//                         break;
//                      case 9:
//                         cell9 = document.getElementById("${count}cell9").innerHTML ="<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = "<p align='center'>Above Average</p>";
//                         break;
//                      case 10:
//                         cell10 = document.getElementById("${count}cell10").innerHTML = "<p style='font-size:12px'>&diams;</p>";
//                         cell11 = document.getElementById("${count}cell11").innerHTML = "<p align='center'>Above Average</p>";
//                         break;
                     
//                      default:
//                         console.log("");
//                         break;
//                   }
//                </script>`;
   
//                var getInitials = function (string) {
//                   var initials = "";
//                   var names = string.split(' ');
//                   for (n = 0; n < names.length; n++) {
//                        initials += names[n].substring(0, 1).toUpperCase();
//                    }
   
//                    return initials;
//                };
//                console.log(getInitials("Tafadzwa Dube"));
   
   
//          body = `
         
                 
            
//                <div class="invoice-box" style="background-color: #f2f2f2; height: 340vh" style="margin-top:50px;">
//                   <div style="background-color: #a8d08d; height: 340vh; width:5vh; margin-left:43vh;">
                     
//                      <div style="background-color: #8eaadb;height: 260vh; width:200vh;margin-left:5vh"> 
   
//                      <div style="background-color: #1f4e79; height: 37vh; width:200vh">
//                         <br style="line-height: 200%"/>
//                         <h2 style="text-align:absolute; color: white; font-size:22px; font-family: Candara">CONFIDENTIAL PSYCHOMETRIC REPORT</h2>
//                      </div>
//                      <div style="margin-top:70px">
//                         <strong><p style="font-family: Candara"> Name of Candidate: ${candidate.testeeName} (${getInitials(candidate.testeeName)}) </p>  </strong>
//                         <strong><p style="font-family: Candara; margin-top:40px">Position : Position  </p></strong>
//                         <strong><p style="font-family: Candara; margin-top:40px">Company : Company Name</p> </strong>
//                         <strong><p style="font-family: Candara; margin-top:40px"> Date : ${candidate.date_taken} </p>  </strong>
//                      </div>
//                      <div style="margin-left: 0vh; font-family: Candara; margin-top:410px">
//                         <p style="font-size:11px">The contents of this report are highly confidential 
//                            and unauthorised persons not directly involved with the 
//                            selection decision may not obtain access to its contents. 
//                            Under NO circumstances may this report 
//                            or a copy of it be given to the candidate it concerns.
//                         </p>
//                         <p style="font-size:11px; color: #2e148b; font-family: Candara">Psychometric tests must not be used as the
//                            sole determinant of selection decisions. 
//                            Other sources of information like interviews, reference checks, etc.,
//                            should also be considered in making a final decision.
//                         </p>
                       
//                      </div><div style="position:absolute; bottom:2830px; left:0px; height: 70vh; width:56vh" > 
//                      <p style="text-align:center; font-size:12px;font-family: Candara;margin-left:10px;"> DONE BY EP INDUSTRIAL PSYCHOLOGICAL SERVICES P/L </p>
//                      <a href="default.asp">
//                         <img  src="https://cdn.pixabay.com/photo/2021/10/01/10/26/10-26-36-762_150.jpg"
//                         style="width:100%;height:15vh;position:absolute; max-width:156px;margin-left:10px;">
//                      </a>
//                   </div>
//                      </div>
//                   </div>
                  
//                   <br />
   
//                </div>
//                <div style="height: 16vh">
//                </div>
//                <div style="margin-left: 24vh; font-family: Candara" >
                  
//                  <div style="width:200vh; font-family: Candara;">
//                      <h3 style="text-align:left; font-size:12px; font-family: Candara" >The candidate was assessed on the following domains of occupational psychological functioning:</h3>
//                      <div style="margin-left:9vh; font-size:12px">
//                         <p style="font-size:12px;font-family: Candara; margin-top: 0vh">•	Cognitive Ability    </p>
//                         <p style="font-size:12px;font-family: Candara; margin-top: 0vh">•	Supervisory In-tray  </p>
//                         <p style="font-size:12px;font-family: Candara; margin-top: 0vh">•	Personality          </p>
//                      </div>
//                      <p style="font-size:13px;font-family: Candara; margin-top: 0vh"><strong>SUMMARY REPORT</strong></p>
//                      <p style="font-size:13px;font-family: Candara; margin-top: 0vh">Below is a summary of the various assessment areas:</p>
   
//                      <table  border="1" style='border-collapse:collapse' width="600px">
//                         <tr>
//                            <td width=150px" style="font-family: Candara; font-size:13px">                <strong> Key Assessment Area </strong></td>
//                            <td width="220px" align=center style="font-family: Candara; font-size:13px">  <strong> Dimension           </strong></td>
//                            <td align="center" style="font-family: Candara; font-size:13px">              <strong> Rating              </strong></td>
//                         </tr>
//                         <tr height="30px">
//                            <td style="font-size:12px"> <strong>Cognitive Ability </strong></td>
                           
//                            <td  id = "testNameCell" style="font-size:12px;font-family: Candara">
//                               <p style="font-size:12px"> Verbal Reasoning</p>
//                               <p style="font-size:12px"> Numerical Reasoning</p>
//                               <p style="font-size:12px"> Non-verbal Reasoning </p>
       
//                            </td>
                           
//                            <td style="font-size:12px;font-family: Candara" >
//                               <p style="text-align:center"> Average</p>
//                               <p style="text-align:center"> Average </p>
//                               <p style="text-align:center"> Upper  Average</p>
//                            </td>
//                         </tr>
//                         <tr height="30px">
//                            <td style="font-size:12px"> <strong>Supervisory Competencies </strong></td>
//                            <td style="font-size:12px;font-family: Candara" >
//                               <p> Management of Plans and Priorities</p>
//                               <p> Management of Time</p>
//                               <p> Management of People</p>
//                               <p> Management of Customers</p>
//                               <p> Management of Information</p>
//                               <p> Management of Operational Efficiencies</p>
//                               <p> Management of Resources</p>
//                               <p> Management of Change</p>
//                               <p> Management of Results</p>
//                               <p> Management of Self</p>
                              
//                            </td>
//                            <td style="font-size:12px;font-family: Candara" >
//                               <p  style="text-align:center"> Average</p>
//                               <p style="text-align:center"> Average </p>
//                               <p style="text-align:center"> Upper  Average</p>
//                               <p style="text-align:center"> Upper  Average</p>
//                               <p style="text-align:center"> Upper  Average</p>
//                               <p style="text-align:center"> Lower  Average</p>
//                               <p style="text-align:center"> Upper  Average</p>
//                               <p style="text-align:center"> Upper  Average</p>
//                               <p style="text-align:center"> Upper  Average</p>
//                               <p style="text-align:center"> Upper  Average</p>
//                            </td>
//                         </tr>
//                         <tr height="30px">
//                            <td style="font-size:12px"><strong>Personality </strong></td>
//                            <td style="font-size:12px;font-family: Candara" >
                             
//                               <p> Stress Tolerance</p>
//                               <p> Tough mindedness</p>
//                               <p> Self-discipline</p>
//                               <p> Sociability</p>
//                               <p> Dominance</p>
//                            </td>
//                            <td style="font-size:12px;font-family: Candara" style="text-align:center" >
//                               <p style="text-align:center"> Average</p>
//                               <p style="text-align:center"> Average </p>
//                               <p style="text-align:center"> Upper  Average</p>
//                               <p style="text-align:center"> Upper  Average</p>
//                               <p style="text-align:center"> Upper  Average</p>
//                            </td>
//                         </tr>
//                         <tr height="30px">
//                            <td style="font-size:12px"> <strong>Key Strengths </strong></td>
//                            <td style="font-size:12px;font-family: Candara" >To be capitalized on in role. </td>
//                            <td style="font-size:12px;font-family: Candara" >
//                               <p> -Management of plans, priorities and change. </p>
//                               <p> - Dominant and assertive in social encounters.   </p>
//                            </td>
//                         </tr>
//                         <tr height="30px">
//                            <td style="font-size:12px"> <strong> Key Development Areas </strong></td>
//                            <td style="font-size:12px;font-family: Candara" >To be worked on to enhance success in role.  </td>
//                            <td style="font-size:12px;font-family: Candara" >
//                               <p>-Supervisory competencies presents some developmental opportunity for BD. </p>
                              
//                            </td>
//                         </tr>
//                         <table border="1" style='border-collapse:collapse'>
//                            <tr height="30px">
//                               <td style="font-size:12px" width="152px"><strong>Recomendation </strong></td>
//                               <td style="font-size:12px;font-family: Candara" width="450px" align=center>Recommended  </td>
                              
//                            </tr>
//                         </table>
//                      </table>
   
                     
//                      <div style="height: 85vh"></div>
//                      <p style="font-family: Candara; font-size:12px"><strong>DETAILED PROFILES</strong></p>
//                      <p style="font-family: Candara; font-size:12px">Below are the detailed profiles in their respective order.</p>
                     
   
//                      <h3 style="text-align:left; font-size:12px; font-family: Candara" >1. COGNITIVE ABILITY</h3>
//                      <h3 style="text-align:left; font-size:12px; font-family: Candara" >GENERAL REASONING TEST BATTERY</h3>
                     
//                      <p style="font-size:12px; font-family: Candara">The General Reasoning Test (GRT) Battery assesses the candidate’s cognitive ability,
//                         that is, verbal reasoning, numerical reasoning and abstract reasoning skills. It assesses 
//                         the ability to solve complex problems as well as make meaningful decisions on the basis of information presented.
//                         The cognitive ability level is then compared with similar other candidates in a given population (norms).
//                         The battery consists of the following tests:</p>
   
//                      <p style="font-family: Candara; font-size:12px"><strong>Verbal Reasoning Test</strong></p>
                  
//                   <p  style="font-size:12px;font-family: Candara">The Verbal Reasoning Test assesses a person’s ability to use words in a logical way, 
//                      that is, the ability to perceive and understand concepts and ideas verbally. 
//                      It assesses one’s ability to make decisions based on given information, as well as the ability to understand, 
//                      interpret and use words for the purposes of communication.
//                   </p>
//                   <p style="font-family: Candara;font-size:12px"><strong>Numerical Reasoning Test</strong></p>
//                   <p  style="font-size:12px">The Numerical Reasoning Tests assesses the candidate’s ability to understand and interpret given 
//                      statistical information presented
//                      in tabular and graphical form, for work-related decision-making.
//                   </p>
//                   <p style="font-family: Candara;font-size:12px"><strong>Pattern Recognition and Reasoning Test</strong> </p>
//                   <p  style="font-size:12px">This test assesses the candidate’s ability to understand and follow complex patterns and make judgments
//                      for decision-making. It seeks to measure the ability to think logically,
//                      imagine concepts and reduce those concepts into practical realities.
//                   </p>
//                   <p  style="font-size:12px" style="font-family: Candara">The cognitive ability level is then compared with similar other candidates in a given population (norms).
//                      As a result a standard score (sten) and a percentile rank (%ile) are used to interpret the performance on this test battery and are given to 
//                      indicate where one is in comparison with similar candidates in the population who took the same test.  Stens (standard ten) rank candidates’ performance on a scale of 1 (lowest)  to 10,  (highest), in comparison with a representative sample of similar others. Percentiles (%ile) provide the relative standing of the candidate’s performance on the test on a scale of 1 to 100, that is, 
//                      when compared again to a representative sample of similar others who took the same test. 
//                   </p>
//                   <p  style="font-size:12px; font-family: Candara">For example, performance at 80%ile means that one performed better
//                      than 79% of a comparable sample. So those with higher Stens and percentiles would have 
//                      performed better than those with lower Stens and percentiles. 
//                   </p>
//                   <p  style="font-size:12px;font-family: Candara"> The candidate’s cognitive ability profile is provided overleaf.</p>
//                </div>
               
//          </div>
//                <br />
   
//                <script> 
               
//                   var testNameCell = document.getElementById("testNameCell");
//                   array = [];
//                   array= ${candidate.testName}
//                   console.log(array);
//                   for (i = 0; i < array.length; i++)
//                   document.getElementById("testNameCell").innerHTML += (i+1) + ": " + array[i];
//                </script>
//             `;
//          count++;
//       });
   
//       return openingTags + body +
//          `<div style="height: 550px"></div>
//             <div style= "border: 1px solid black; width:220vh; margin-left:30vh; "> 
               
//                <div style="height: 6px; border: 0.5px solid black; text-align:center;font-size:11px;font-family: Candara; margin-bottom:1vh">General Reasoning Profile Chart </div>
//                <hr style= "border: 1px solid #06050a">
//                <div style="height: 1px"></div>
               
               
//                   ${staticScale + scoringTableTemplate}
//             </div>`  +
//          averageTableTemplate + closingTags;
   
//    };