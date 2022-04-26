// generate-pin function 
function generatePin(){
    const pin = (Math.floor(Math.random()*10000));
    const pinStr = pin+'';
    if(pinStr.length<4){ 
        return generatePin();
    }
    return pin;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const randomPinInput = document.getElementById('generatePinInput');
    randomPinInput.value = generatePin();
});