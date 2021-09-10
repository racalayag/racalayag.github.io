function equation(){
    var n1,n2,n3,sum,avg,prod,min,max,results;
    var vid = document.getElementById("bakamitai");

    n1 = parseInt(document.forms["table1"].elements["n1"].value);
    n2 = parseInt(document.forms["table1"].elements["n2"].value);
    n3 = parseInt(document.forms["table1"].elements["n3"].value);
   
  //   $(document).ready(function(){
  //     $('#bakamitai').css('visibility', 'hidden');
  // });
    // document.getElementById("bakamitai").style.display="visible";    
    // vid.style.display = 'inline-block';
    $('bakamitai').hide();

if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
    document.getElementById("fade").style.display = "none";
    document.getElementById("totals").innerHTML = "<span>Please enter an integer</span>";
    document.getElementById("bakamitai").style.display = "inline-block";
 
    $('bakamitai').show();
    document.getElementById("bakamitai").style.display="inline-block";  
    vid.play();
  

}
else{
    document.getElementById("fade").style.display = "inline-block";
    sum = n1 + n2 + n3;
    avg = sum/3;
    prod = n1 * n2 * n3;
    min = Math.min(n1,n2,n3);
    max = Math.max(n1,n2,n3);

    results = "<span>Results</span> <br>";
    results += "<span>The sum is:</span>" + sum + "<br>";
    results += "<span>The average is:</span>" + avg + "<br>";
    results += "<span>The product is:</span>" + prod + "<br>";
    results += "<span>The minimum is:</span>" + min + "<br>";
    results += "<span>The maximum is:</span>" + max + "<br>";
    document.getElementById("totals").innerHTML = results;
}



$(document).ready(function(){
    $("#fade").click(function(){
      $("#container").fadeTo("slow", 0.15);
    
    });
  });

}