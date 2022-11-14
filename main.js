const list= document.querySelectorAll(".list1")
const buttonList=document.querySelector("#buttonList")

// console.log(list)
//-------------------DOM 1
buttonList.onclick=()=>{
    list.forEach(e=>{
        if (e.style.background==="red"){
            e.style.background="white"
        }
        else{e.style.background="red"}
    })
}

//-------------------- DOM 2
