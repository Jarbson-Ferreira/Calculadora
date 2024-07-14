function insert(number) {
    var numero = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = numero + number;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function backspace() {
    var backspace = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = backspace.substring(0, backspace.length - 1)
}

function resultado() {
    var resultado = document.getElementById('result').innerHTML;
    if (resultado) {
        document.getElementById('result').innerHTML = eval(resultado)
    }
    else {
        document.getElementById('result').innerHTML = ""
    }
}