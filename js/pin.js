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

// ** pad numbers value 

document.getElementById('padNumbers').addEventListener('click',function(event){
const key = event.target.innerText;
const InputPin = document.getElementById('inputPin');
const previousPin = InputPin.value;
if(isNaN(key)){
    if(key=="C"){
        InputPin.value = '';
    }
    else if(key == '<'){
        const backPin = previousPin.slice(0,previousPin.length-1);
        InputPin.value = backPin;
    }
}
else{
    // const previousPin = InputPin.value;
    const newPin = previousPin + key;
    InputPin.value = newPin;
}

})