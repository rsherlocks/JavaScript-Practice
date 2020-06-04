document.getElementById("head").innerHTML="rakib class";
var len=document.querySelectorAll(".mybutton").length;
var audio=new Audio("aduio/kaun.mp3");
for(var i=0;i<len;i++)
{
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
        var txt=this.innerHTML;
        document.querySelector("#head").innerHTML=txt+"button";
        var cl= document.querySelector("."+txt);
        console.log(cl);
        cl.classList.add("anim");
        setTimeout(function()
        {
            cl.classList.remove("anim");

        },2000);

       
       
        sound(txt);

      
        // if(txt=="a")
        // {
            
        
            
        // }
        // else if(txt=="b")
        // {
        //     //var aduio=new Audio("aduio/kaun.mp3");
        //     var x = document.getElementById("audio");
        //     x.pause();
            
            
        // }

    });
}
document.addEventListener("keypress",function(event)
{
    var txt=event.key;
    sound(txt);

});
function sound(txt)
{
    switch(txt)
    {
        case "a":
            console.log(audio);
             audio.play();
        break;
        case "b":
            console.log(audio);
            audio.pause();
           
         break;
             
            
    }
}
var count=0
document.querySelector(".area").addEventListener("keypress",function(vent){

    count++;
    var a=vent.key;
    console.log(a);
    document.getElementById("pre").innerHTML=count;


});