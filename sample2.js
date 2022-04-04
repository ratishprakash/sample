// alert("alo")
function checkbox(){
    if (chktick.checked){
        var ul=document.getElementById("list")
        var li=document.createElement('li')
        li.appendChild(document.createTextNode(chktick.name))
        ul.appendChild(li)
    }
}
function remove(){
    var ul=document.getElementById("list")
    while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }
}   

