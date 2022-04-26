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

});

// ** verify button script stats from here 
document.getElementById('submitBtn').addEventListener('click',function(){
    const randomPin = document.getElementById("generatePinInput").value;
    const userPin = document.getElementById("inputPin").value;
    const wrongNotify = document.getElementById("wrongNotify");
    const rightNotify = document.getElementById('rightNotify');
    // **try left number 
    const tryLeftId = document.getElementById('tryLeft');
    let tryLeftText = tryLeftId.innerText;
    let tryLeftNumber = parseInt(tryLeftText);
        
    if(randomPin == userPin){
        rightNotify.style.display = 'block';
        wrongNotify.style.display = 'none';
        tryLeftId.innerText = 3;
    }
    else{
        wrongNotify.style.display = 'block';
        rightNotify.style.display = 'none';
        // const tryLeftId = document.getElementById('tryLeft');
        // let tryLeftText = tryLeftId.innerText;
        // let tryLeftNumber = parseInt(tryLeftText);
        if(tryLeftNumber>0){
            
            tryLeftNumber = tryLeftNumber - 1;
            tryLeftId.innerText = tryLeftNumber;
        }
        else{
            alert('your all atempts lost');
            window.location.reload();
        }
        
        
    }
})