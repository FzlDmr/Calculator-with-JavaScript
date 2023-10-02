let currentExpression = '';
function appendCharacter(char) {
    
    currentExpression += char;
    document.querySelector("#result").value = currentExpression;
}
function calculateResult() {

    document.getElementById('resulted').textContent = currentExpression;

    currentExpression = eval(currentExpression);

    document.querySelector("#result").value = currentExpression;

}
function clearResult() {
    currentExpression = '';
    document.querySelector("#result").value = '';
    document.querySelector("#resulted").innerText = '';
}