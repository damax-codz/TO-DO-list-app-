var funky=() =>{
    var t = document.getElementById("texto")
    var div = document.getElementById("divo")
    var text = document.createTextNode(t.value)
    var ul =document.createElement("ul")
    var li =document.createElement("li")
    ul.appendChild(li)
    li.appendChild(text)
    div.appendChild(ul)
    t.value=""
    li.style.textTransform="capitalize"
    li.style.fontWeight="bolder"
    li.style.marginTop="10px"
    li.style.cursor="pointer"
   li.onclick= function(){
        ul.removeChild(li)
    }
    
    if (div.children.length >= 9) {
    div.removeChild(ul)
    }
    console.log(div.children.length)
    }
    function myfunc(){
        document.getElementById("divo").innerHTML=""
    }
    

    // var pro= prompt("what is your name")
    
