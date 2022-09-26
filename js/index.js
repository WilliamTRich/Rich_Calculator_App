$(document).ready(function() {
    let stringEquation = "";
    $(".number").click(function () {
        let value = parseInt(this.textContent);
        let display = document.querySelector(".display");
        if (parseInt(display.textContent) > 0) {
            display.textContent += value;
            stringEquation += String(value);
        } else if(stringEquation.length > 0){
            display.textContent = value;
            stringEquation += String(value);
        } else {
            display.textContent = value;
            stringEquation = value;
        }
    })
    $(".decimal").click(function () {
        let value = this.textContent;
        let display = document.querySelector(".display");
        if (parseInt(display.textContent) > 0) {
            if (display.textContent[display.textContent.length - 1] != ".") {
                display.textContent += value;
                stringEquation += String(value);
            } else {
                console.log("error");
            }
        } else if(stringEquation.length > 0){
            display.textContent = value;
            stringEquation += String(value);
        } else {
            display.textContent = value;
            stringEquation = value;
        }
    })
    $(".clear").click(() => {
        var display = document.querySelector(".display").textContent;
        if (display != 0) {
            document.querySelector(".display").textContent = 0;
        } else {
            stringEquation = "";
        }
    })
    $(".operator").click(function () {
        let operator = this.getAttribute('data-');
        stringEquation += operator;
        document.querySelector(".display").textContent = 0;
    })
    $(".equals").click(function () {
        function parse(str) {
            return Function(`'use strict'; return (${str})`)()
        }
        result = parse(stringEquation)
        document.querySelector(".display").textContent = result;
        stringEquation = result;
    })
})
