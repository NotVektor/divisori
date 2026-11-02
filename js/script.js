const calcolaBtn = document.getElementById('calcola');
const inputNumero = document.getElementById('inputNumero');
const output = document.getElementById("output")
const outputArray = document.getElementById("outputArray")
const outputBox = document.getElementById("outputBox")


function trovaDivisori(numero) {
    let divisori = new Set();
    /*
        Regola della radice quadrata per i numeri primi:
            Per verificare se un numero n sia primo, basta controllare 
            la divisibilità solo fino a sqrt(n) per velocizzare la ricerca.
        Esempio:
            Senza regola:
                Controllo tutti i numeri da 2 a 17 cioe 16 controlli.
            Con regola:
                Controllo fino a sqrt(17) = circa 4. 
                Controllo da 2 a 4 cioe 3 controlli.

        Spiegazione fatta a mano con cura!
    */
    // Uso l'ottimizzazione della radice quadrata dai numeri primi:
    radice = Math.sqrt(numero);
    for (let i = 1; i <= radice; i++) {
        if (numero % i === 0) {
            // se i è un divisore, aggiungo lui e il suo inverso
            divisori.add(i);
            divisori.add(numero / i);
        }
    }
    // trasformo il set in un array ordinato
    divisori = Array.from(divisori).sort((a, b) => a - b);
    return divisori;
}

calcolaBtn.addEventListener('click', () => {
    const input = inputNumero.value;
    outputArray.textContent = "";
    outputBox.classList.remove("bg-danger");
    outputBox.classList.remove("text-light");

    if (
        input === null ||
        isNaN(input) ||
        input.trim() === ""
    ) {
        output.textContent = "Input non valido!";
    } else if (input == 0) {
        output.textContent = "0 non ha divisori";
    } else {
        const numero = Math.abs(parseInt(input));
        const divisori = trovaDivisori(numero);

        if (divisori.length <= 2) {
            output.textContent = input + " e' primo perche ha solo " + divisori.length 
            + (divisori.length==1? " divisore" : " divisori") + ":";
            outputBox.classList.add("bg-danger");
            outputBox.classList.add("text-light");
        } else {
            output.textContent = "I divisori di " + input + " sono " + divisori.length + ":";
        }
        outputArray.textContent = "[" + divisori.join(", ") + "]";
    }

    outputBox.classList.remove("d-none");
    document.getElementById("spinner").classList.add("d-none");
});