var socket = io();
const SENT = 'SENT';
const RECIEVED = 'RECIEVED';
let username= ""
const formContainer = document.getElementById("formContainer");

const joinBtn = document.getElementById("joinBtn");

const userNameInput = document.getElementById("validationCustomUsername");

const userUnhide = document.getElementById("userUnhide");

const message_input = document.getElementById("message_input");

const sendBtn = document.getElementById("messageBtnSend");

const messageContainer = document.getElementById("messageContainer");

const chatArea = document.getElementById("chatArea");

joinBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    username = userNameInput.value;
    formContainer.classList.add("hide");
    chatArea.classList.remove("hide");

});

userUnhide.addEventListener("click",()=>{
    formContainer.classList.remove("hide");
    chatArea.classList.add("hide");
});


sendBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(message_input.value!=""){
    let data ={
        id:socket.id,
        username:username,
        message:message_input.value,
    };
    socket.emit('this is event name',data);
    renderMessage(data,SENT);
    }
});

message_input.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter'){


    let data ={
        id:socket.id,
        username:username,
        message:message_input.value,
    };
    socket.emit('this is event name',data);
    renderMessage(data,SENT);
    }
});





socket.on('this is event name',(data)=>{
    if(data.id!==socket.id){
        renderMessage(data,RECIEVED);
    }
});

function renderMessage(data,messageType) {
    let msgDiv = document.createElement("div");
    msgDiv.innerText = `${data.username}: ${data.message}`;

    if(messageType===SENT){
        msgDiv.setAttribute('class','message send');
    }else{
        msgDiv.setAttribute('class','message received')
        // playSound(); 
    }

    messageContainer.appendChild(msgDiv);
    message_input.value= "";
}


// function playSound() {
// 	let ding = new Audio("public/assets/sound.mp3");
// 	ding.play();
// }