const divisionID = document.getElementById('division');
const multiplyID = document.getElementById('multiply');
const subtractID = document.getElementById('subtract');
const sumID = document.getElementById('sum');
const resultID = document.getElementById('result');
const operators = document.querySelectorAll('.operator');
const displayUserNumber = document.querySelector('.display-user-number');
const displayResult = document.querySelector('.display-result');
const number = document.querySelectorAll('.number');
const clearID = document.getElementById('clear');
const delID = document.getElementById('del');
const simbolID = document.getElementById('simbol');
const dotID = document.getElementById('dot');
var fullNumber = "";
var operatorName = "";
var numberInputs = [];


//Display
for (i=0;i<number.length;i++){
    (function(i){
        number[i].onclick=function(){
            fullNumber = fullNumber.concat(number[i].textContent);
            displayUserNumber.textContent = fullNumber;
        }
    }(i))
};


//Operações
var operatorObj = {
    sum: function(array) {
        return array.slice(array.length-2).reduce((previousNumber,nextNumber)=> previousNumber+nextNumber);
      },
    subtract: function(array) {
        return array.slice(array.length-2).reduce((previousNumber,nextNumber)=> previousNumber-nextNumber);
      },
      multiply: function(array) {
        return array.slice(array.length-2).reduce((previousNumber,nextNumber)=> previousNumber*nextNumber);
      },
      division: function(array) {
          if(array.slice(array.length-1) !="0"){
        return array.slice(array.length-2).reduce((previousNumber,nextNumber)=> previousNumber/nextNumber);
          } else{
              // !!!!Preciso retornar texto, retirar o ultimo item do index e utilizar o ultimo item do index para a proxima operacao!!!!!
              return displayUserNumber.textContent="Cant divide by 0!";
          }
      }
}



//Operador + armazenamento dos números digitados
for (i=0;i<operators.length;i++){
    (function(i){
        operators[i].onclick=function(){
            if(displayUserNumber.textContent!="" && operatorName==""){
            numberInputs.push(Number(displayUserNumber.textContent));
            operatorName = this.getAttribute('id');
            fullNumber="";
            displayUserNumber.textContent="";
            displayResult.textContent=numberInputs[numberInputs.length-1]+" "+ operators[i].textContent;
        }else if (displayUserNumber.textContent!="" && operatorName!=""){
            numberInputs.push(Number(displayUserNumber.textContent));
            numberInputs.push(operatorObj[operatorName](numberInputs));
            operatorName = this.getAttribute('id');
            fullNumber="";
            displayResult.textContent=numberInputs[numberInputs.length-1]+" "+ operators[i].textContent;
        }else{
            return}
        }   
    }
    (i))
    ;
};


// //Resultado da operação
resultID.onclick = (function(){
    if(operatorName!=""){
        numberInputs.push(Number(displayUserNumber.textContent));
        numberInputs.push(operatorObj[operatorName](numberInputs));
        fullNumber="";
        displayResult.textContent="";
        displayUserNumber.textContent=numberInputs[numberInputs.length-1];
        operatorName="";
    } else{
        return;
    }
})

clearID.onclick = (function(){
    fullNumber = "";
    displayResult.textContent = "";
    displayUserNumber.textContent = "";
    operatorName = "";
    numberInputs = [];
})

delID.onclick = (function(){
    displayUserNumber.textContent = displayUserNumber.textContent.slice(0,-1);
    fullNumber = displayUserNumber.textContent;
})

simbolID.onclick = (function(){
    if(fullNumber.substring(0,1)!="-"){
        fullNumber = fullNumber.substring(0, 0) + "-" + fullNumber.substring(0);
        displayUserNumber.textContent = fullNumber;
    } else{
        fullNumber = fullNumber.slice(1);
        displayUserNumber.textContent = fullNumber;
    }
})

dotID.onclick = (function(){
    if (fullNumber.includes(".")){
        return;
    } else{
        fullNumber = fullNumber.concat(dotID.textContent);
        displayUserNumber.textContent = fullNumber;
    }
})