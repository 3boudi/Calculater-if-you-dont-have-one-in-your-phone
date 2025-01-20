function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
function calculate(){
    const display = document.getElementById('display');
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="ERROR";
        setTimeout(()=>{
            display.value="";
        },1000) 
    }
}
function clearDisplay(){
    const display=document.getElementById('display');
    display.value="";
}
function clearChar(){
    const display = document.getElementById('display');
    display.value = display.value.substring(0, display.value.length - 1);
}
