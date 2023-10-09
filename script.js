function calcular() {
    var a = valor_a.value;
    var b = valor_b.value;
    var x = valor_x.value;
    var calculo = -b / a;

    if (a == 0) {
        alert("a deve ser diferente de zero");
    }

    else {
        if (x == calculo) {
            alert("Correto");
        }

        else {
            alert("Errado");
        }
    }
}