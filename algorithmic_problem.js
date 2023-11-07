function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);
    console.log(a, b, c)

    if (a < b && b < c) {
    result = "Выполняется неравенство A < B < C"
        document.getElementById("result").innerText =  result;
    }
    else if (a > b && b > c) {
       result = "Выполняется неравенство A > B > C"
        document.getElementById("result").innerText =  result;

    } else {
        result = "Ни одно из неравенств не выполняется"
        document.getElementById("result").innerText =  result;
    }
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
