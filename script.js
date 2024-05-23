// Initializing variables whose IDs are specified in HTML code

var addButton=document.getElementById("addToDo");
var text= document.getElementById("inputField");
var toDoList= document.getElementById("toDoList");
var modeSwitch = document.getElementById("modeSwitch");

// Creating functions

// Adding functionality of toggle dark mode with modeSwitch variable and hence modeSwitch button in HTML
modeSwitch.addEventListener("click",switchMode);

// This Function will switch theme to dark mode and vice versa. It uses the value attribute of button to perform the first step.
function switchMode(e){
    if(modeSwitch.value=="light"){
        modeSwitch.value="dark"
        document.getElementById("main-header").style.backgroundColor="midnightblue";
        modeSwitch.classList.remove("btn-secondary");
        modeSwitch.classList.add("btn-light");
        document.getElementById("card").style.backgroundColor="rgba(0, 0, 0)";
        document.body.style.backgroundImage="url(pexels-black-ice-1314544dark.jpg)";
    }

    else{
        modeSwitch.value="light"
        document.getElementById("main-header").style.backgroundColor="#F4CE14";
        modeSwitch.classList.remove("btn-light");
        modeSwitch.classList.add("btn-secondary");
        document.getElementById("card").style.backgroundColor="#F5F7F8";
        document.body.style.backgroundImage="url(pexels-black-ice-1314544.jpg)";
    }
}

//Adding some more functionalities to buttons and text boxes
addButton.addEventListener("click",addItem);
text.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        addItem();
    }
})

//Using this function will add a task to our card. This will be achived by making text boxes and buttons.
function addItem(e){
    const item_value=text.value;

    const item= document.createElement("div");
    item.classList.add("item");

    const item_content= document.createElement("div");
    item_content.classList.add("content");
    item.appendChild(item_content);

    const input_bar =document.createElement("input");
    input_bar.classList.add("text");
    input_bar.type="text";
    input_bar.value=item_value;
    input_bar.setAttribute("readonly","readonly");

    //With this function I will check a task after completion.
    input_bar.addEventListener("dblclick",function(){
        if(input_bar.style.textDecoration!= "line-through"){
        input_bar.style.textDecoration= "line-through";
        const congrat=document.createElement("div");
        congrat.classList.add("congrat");
        congrat.innerText="Congratulations, you completed a task."
        document.body.appendChild(congrat);
        setTimeout(function(){document.body.removeChild(congrat)},5000)
        }
    })

    item_content.appendChild(input_bar);

    const item_action = document.createElement("div");
    item_action.classList.add("action");

    const edit_button = document.createElement("button");
    edit_button.classList.add("edit","btn","btn-success");
    edit_button.type = "button";
    edit_button.innerText = "Edit";

    const delete_button =document.createElement("button");
    delete_button.classList.add("delete","btn","btn-danger","fa","fa-trash");
    delete_button.type = "button";

    item_action.appendChild(edit_button);
    item_action.appendChild(delete_button);

    item.appendChild(item_action);
    toDoList.appendChild(item);

    text.value = "";

    edit_button.addEventListener("click",(e) =>{

        if(input_bar.style.textDecoration=="line-through"){
            alert("This task has already been completed.")
        }

        else if(edit_button.innerText=="Edit"){
            edit_button.innerText="Save";
            input_bar.removeAttribute("readonly");
            input_bar.focus();

        }
        else{
            edit_button.innerText= "Edit";
            input_bar.setAttribute("readonly","readonly");
        }
    })

    delete_button.addEventListener("click", (e) =>{
        toDoList.removeChild(item);
    })
    
}