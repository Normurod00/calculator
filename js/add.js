let equal_pressed = 0;
//access all button excluding C and DEL
let button_input = document.querySelectorAll(".input-button");

//access input,equal,clear and erase

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(equal_pressed == 1){
            input.value = "";
            equal_pressed = 0;
        }
        input.value += button_class.value;
    });
});
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try{
        //evaluate user's input
        let soultion = eval(inp_val);
        //True for natural numbers
        //false for decimals
        if(Number.isInteger(soultion)){
            input.value = soultion;
        }
        else
        {
            input.value = soultion.toFixed(2);
        }
    }
    catch(err){
        alert("invalid Input");
    }
});