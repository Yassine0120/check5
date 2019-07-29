function Bld(){
event.preventDefault();
    document.getElementById("fin0").style.fontWeight="bold";
}
function Bld2(){
    event.preventDefault();
    document.getElementById("fin0").style.textDecoration="underline";
}
function Bld1(){
    event.preventDefault();
    document.getElementById("fin0").style.fontStyle="italic";
}
function Bld3(){
    event.preventDefault();
    document.getElementById("fin0").style.fontSize=document.getElementById("bld33").value;
}
function Bld4(){
    event.preventDefault();
    document.getElementById("fin0").style.fontFamily=document.getElementById("bld44").value;
}
$(".ll").mouseover(function(){
    $(this).css("opacity","0.7");
    $(this).find (".pt1").show();
});
$(".ll").mouseleave(function(){
    $(this).css("opacity","1")
   $(this).find (".pt1").hide();
});

