function equation(){
    var n1=0,n2=0,n3=0,n4=0,n5=0,positive=0,negative=0,zero=0,summary;

    n1 = parseInt(document.forms["table1"].elements["n1"].value);
    n2 = parseInt(document.forms["table1"].elements["n2"].value);
    n3 = parseInt(document.forms["table1"].elements["n3"].value);
    n4 = parseInt(document.forms["table1"].elements["n4"].value);
    n5 = parseInt(document.forms["table1"].elements["n5"].value);
    
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)){
        document.getElementById("fade").style.display = "none";
        document.getElementById("totals").innerHTML = "<span>Please enter an integer</span>";
    } 
    else{
        if (n1>0){
            positive++;
        }
        else if (n1<0){
            negative++;
        }
        else if (n1==0){
            zero++;
        }
        if (n2>0){
            positive++;
        }
        else if (n2<0){
            negative++;
        }
        else if (n2==0){
            zero++;
        }
        if (n3>0){
            positive++;
        }
        else if (n3<0){
            negative++;
        }
        else if (n3==0){
            zero++;
        }
        if (n4>0){
            positive++;
        }
        else if (n4<0){
            negative++;
        }
        else if (n4==0){
            zero++;
        }
        if (n5>0){
            positive++;
        }
        else if (n5<0){
            negative++;
        }
        else if (n5==0){
            zero++;
        }
        summary = "<span>Results</span> <br>";
        summary += "<span>Positive: </span>" + positive + "<br>";
        summary += "<span>Negative: </span>" + negative + "<br>";
        summary += "<span>Zero: </span>" + zero + "<br>";
        document.getElementById("totals").innerHTML = summary;
    }
}