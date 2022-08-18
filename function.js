// get element 
function getElementById(elementId) {
    return document.getElementById(elementId);
}
function getElementInnerTextById(elementId) {
    const container = document.getElementById(elementId);
    const containerInnerText = container.innerText;
    const containerInnerTextToFloat = parseFloat(containerInnerText);
    if (containerInnerTextToFloat == "") {
        return 0;
    }
    return containerInnerTextToFloat;
}
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputValueToFloat = parseFloat(inputValue);
    if (inputValue == "") {
        return 0;
    }

    return inputValueToFloat;
}