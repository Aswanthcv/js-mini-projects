function btnClick(value){
      let display  = document.getElementById("display");
      let current = display.value;
      let lastChar = current[current.length -1];

      if((value === '/' || value === '%' || value === '*' || value === '-' || value === '+') && (lastChar === '/' || lastChar === '%' || lastChar === '*' || lastChar === '-' || lastChar === '+')){
        return;
    }
    else{
        document.getElementById("display").value += value;
    }  
    }
    
    function calculate(){
      let expression = document.getElementById("display");
      expression.value = eval(expression.value);
    }

    function clearDisplay() {
      document.getElementById("display").value = "";
    }

    function clearLast() {
      let display = document.getElementById("display");
      display.value = display.value.slice(0, -1);
    }