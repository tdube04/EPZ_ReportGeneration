# EPZ_ReportGeneration

Module to generate reports

Technologies used:

1. React.js
2. > Nodej.s
   >

Main objective is to generate a pdf using nodejs.

The issue at hand failing to calculate the average of sten values which are in an array.

Inside: server/document/index.js

> That is where the code to design the pdf template is in. Look at line 145 that is where the code to calculate the average starts. The function '`calculateAverage`' is being called at line 199, and the value of the average is used inside the switch statement on line 200, which prints the star on a pdf depending on the value of the average.
>
> ![1633073285183.png](image/README/1633073285183.png)
>
> Instead when l console.log(AverageSten) `it outputs the values of the array instead of the average :)`![1633073196929.png](image/README/1633073196929.png)
