function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
     var amount = parseInt(principal) + parseFloat(interest);
     var reasult = document.getElementById("result");

     if (principal <= 0){
         alert('please enter a positive number!');
        document.getElementById("principal").focus(); 
     }
     else {
        reasult.innerHTML ="if you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will recieve an amount of $" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";  
     }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innertext = rateval;
}