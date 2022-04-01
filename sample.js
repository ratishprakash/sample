var count=0
function sayhello(){
    if( chktick.checked)
        count++
    else 
        count--
    
}
function sayhello1(){
    if(chktick1.checked)
        count++
    else
        count--
}
function sayhello2(){
    if(chktick2.checked)
        count++
    else 
        count--
}
function display(){
    alert(count)
}