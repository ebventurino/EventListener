//replace event with the correct string to handle a click event on the button
//write the function that has instructionsfor activating the corresponding power
//The function should...
// 1. Remove the `disabled` class
// 2. Add the `enabled` class

document.querySelector("#activate-flight").addEventListener("click", handlerFunction)

function handlerFunction() {
    const el = document.getElementById("flight");
    el.className = el.className.replace("disabled", "enabled");
    console.log(el)
}

handlerFunction()

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

document.querySelector("#activate-mindreading").addEventListener("click", handlerFunctionMind)

function handlerFunctionMind() {
    const mind = document.getElementById("mindreading");
    mind.className = mind.className.replace("disabled", "enabled");
    console.log(mind)
}

handlerFunctionMind()

// second one

document.querySelector("#activate-xray").addEventListener("click", handlerFunctionX)

function handlerFunctionX() {
    const xRay = document.getElementById("xray");
    xRay.className = xRay.className.replace("disabled", "enabled");
    console.log(xRay)
}

handlerFunctionMind()

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

document.querySelector("#activate-all").addEventListener("click", handlerFunctionEnabled)

function handlerFunctionEnabled() {
    const selectedAll = document.querySelectorAll(".power");
    console.log(selectedAll, "nodelist")
    for (var i = 0; i < selectedAll.length; i++) {
        selectedAll[i].className = selectedAll[i].className.replace("power disabled", "power enabled");
        console.log(selectedAll[i])
    }

}
handlerFunctionEnabled()


// second

document.querySelector("#deactivate-all").addEventListener("click", handlerFunctionDisabled)

function handlerFunctionDisabled() {
    const deselectedAll = document.querySelectorAll(".power");
    console.log(deselectedAll, "nodelist")
    for (var i = 0; i < deselectedAll.length; i++) {
        deselectedAll[i].className = deselectedAll[i].className.replace("power enabled", "power disabled");
        console.log(deselectedAll[i])
    }

}
handlerFunctionDisabled()