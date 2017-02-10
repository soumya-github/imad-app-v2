console.log('Loaded!');
var counter=0;
var button=document.getElementbyId("counter");
button.onClick=function(){
    //request to counter end point
    
    //capture response and store it variable
    
    //assign the variable to the span correctly
    counter=counter+1;
    var span=document.getElementbyId("count");
    span.innerHTML=counter.toString();
    
};


