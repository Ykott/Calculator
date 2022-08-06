let num1 = -1001666.;
    let num2 = -1001666.;
    operation = "";
const buttons = (document.querySelectorAll("button"));
buttons.forEach(button => button.onclick = function() {
    const display = (document.querySelector("#dsp"));
    x = button.id;
    


    if("/*-+".includes(x) && num1 != -1001666 && num2 == -1001666){
        operation = x;
        display.textContent = (num1 + " " + operation);
    }
    if(x == "clr"){
        operation = "";
        num1 = -1001666.;
        num2 = -1001666.;
        display.textContent = "";
    }
    if(x == "negative"){
        if(num2 != -1001666.){
            num2 = num2 * -1;
        }
        else{
            num1 = num1 * -1;
        }
    }
    
    if(!"negativeclr/*+-=".includes(x)){
        if(num1 != -1001666. && operation == "" && !(num1.includes(".") && x == ".")){
            num1 = (num1 + x);
            display.textContent = (num1);
        }
        if(num1 == -1001666){
            num1 = x;
            display.textContent = (num1);
        }
        if(operation != "" && num2 != -1001666 && operation != "" && !(num2.includes(".") && x == ".")){
            num2 = (num2 + x);
            display.textContent = (num1 + " " + operation + " " + num2);
        }
        if(num2 == -1001666 && operation != ""){
            num2 = x;
            display.textContent = (num1 + " " + operation + " " + num2);
        }
        }

        if(x == "="){
            if(num1 != -1001666 && num2 != -1001666){
                if(operation == "*"){
                    num1 = parseInt(num1) * parseInt(num2);
                }
                if(operation == "/"){
                    num1 = parseInt(num1) / parseInt(num2);
                }
                if(operation == "-"){
                    num1 = parseInt(num1) - parseInt(num2);
                }
                if(operation == "+"){
                    num1 = parseInt(num1) + parseInt(num2);
                }
                num1 = num1.toPrecision(10);
                display.textContent = num1;
                num2 = -1001666;
                operation = "";

        }
        }
        button.classList.add("pressed")
        setTimeout(() => { button.classList.add("unpressed")}, 120);
        }
    );

    //parseInt()