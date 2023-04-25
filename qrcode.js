const input = document.getElementById("input");
const button = document.getElementById("button");
const qrcode = document.getElementById("qrimg");

button.addEventListener("click",()=>{
    let inp = input.value;
    if(!inp)
    return;
    qrcode.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp}`
})