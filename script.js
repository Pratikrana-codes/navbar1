let menulist = document.getElementById("menuList");

menulist.style.maxHeight ="0px";

function ToggleMenu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "300px";
    }
    else{
        menulist.style.maxHeight = "0px";
    }
}
