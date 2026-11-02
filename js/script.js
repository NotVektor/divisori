const calcolaBtn = document.getElementById('calcola');
const inputNumero = document.getElementById('inputNumero');
const output = document.getElementById("output")

let primi = [2, 3, 5, 7]
function isPrimo(x) {
    if (x in primi) {
        return true
    } else if (x > primi[-1]) {
        let divisibile = false;
        for (i in range(primi[-1], x)) {
            for (j in primi) {
                if (i%j == 0) {
                    divisibile=true;
                    break;
                }
            }
            if (!divisibile) {
                primi.add(i)
            }
        };
    }
}

calcolaBtn.addEventListener('click', () => {
    let numero = inputNumero.value;
    if (
        numero === null ||
        isNaN(numero) ||
        numero.trim() === ""
    ){
        output.textContent = "invalido";
        return;
    } else if (numero == 0) {
        output.textContent = 0;
        return;
    }


    numero = Math.abs(parseInt(numero));
    console.log(numero)
    const divisori = [];

});