console.log('Loaded!');
var counter=0;
var button=document.getElementById("counter");
button.onClick=function(){
    alert("counter="+counter);
    //request to counter end point
    
    //capture response and store it variable
    
    //assign the variable to the span correctly
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
    console.log('Loaded!'+counter);
    alert("counter="+counter);
};



