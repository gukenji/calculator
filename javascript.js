const divisionID = document.getElementById('division');
const multiplyID = document.getElementById('multiply');
const subtractID = document.getElementById('subtract');
const sumID = document.getElementById('sum');
const resultID = document.getElementById('result');
const operators = document.querySelectorAll('.operator');
const displayUserNumber = document.querySelector('.display-user-number');
const displayResult = document.querySelector('.display-result');
const number = document.querySelectorAll('.number');
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
        return array.slice(array.length-2).reduce((previousNumber,nextNumber)=> previousNumber/nextNumber);
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
    numberInputs.push(Number(displayUserNumber.textContent));
    numberInputs.push(operatorObj[operatorName](numberInputs));
    fullNumber="";
    displayResult.textContent="";
    displayUserNumber.textContent=numberInputs[numberInputs.length-1];
    operatorName="";
})


