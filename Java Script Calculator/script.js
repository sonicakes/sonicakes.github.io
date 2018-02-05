var inputHere = document.getElementById('inputHere');

function pushBtn(obj) {

    var pushed = obj.innerHTML;

    if (pushed == '=') {
        // Calculate
        inputHere.innerHTML = eval(inputHere.innerHTML);

    } else if (pushed == 'AC') {
        // All Clear
        inputHere.innerHTML = '0';

    } else {
        if (inputHere.innerHTML == '0') {
            inputHere.innerHTML = pushed;

        } else {
            inputHere.innerHTML += pushed;

        }
    }
}
