function changeFrameHeight(){
    var ifm= document.getElementById("iframe"); 
    if (ifm != undefied) {
    ifm.height=document.documentElement.clientHeight;
    }
}
window.onresize=function(){  
     changeFrameHeight();  
} 