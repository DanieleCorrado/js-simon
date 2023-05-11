// Acquisisco dall'HTML i div

const randomNumberscontainer = document.getElementById("random-numbers");
const userNumb = document.getElementById("user-numbers");
const result = document.getElementById("result");
const showNumbresremenmbered = document.getElementById("numbers-remembered");

// Inizializzo gli array per numeri casuali, numeri inseriti dall'utente e numeri ricordati dall'utente

let numbers = [];
let userNumbersList = [];
let numbersRemeberedList = [];

// Inizializzo il contatore dei numeri ricordati dall'utente

let numbersRemebered = 0;

// Richiamo le funzioni per creare numeri casuali e nasconderli dopo 30 secondi

randomNumber();
setTimeout(hideNumbers, 30000);

// Richiamo la funzione per far inserire all'utente i numeri che si ricorda e controllare se i numeri inseriti sono corretti

setTimeout(controlUserNumbers, 30100);


// Funzioni

// Crea 5 numeri casuali da 1 a 100 e li inserisce nel div "random-numbers"

function randomNumber() {

  while(numbers.length < 5){

    var number = Math.floor(Math.random() * 100) + 1;

    if(numbers.indexOf(number) === -1) {

      numbers.push(number);

    }
  }

  randomNumberscontainer.innerHTML = numbers;
  console.log(numbers);
}

// Modifica la display mode del div "random-numbers"

function hideNumbers() {

  randomNumberscontainer.style.display = "none";

}

// Chiede all'utente di inserire i numeri che ha viusalizzato e controlla se corrispondo a quelli generati casualmente

function controlUserNumbers() {

  // Inserimento numeri utente

  for(let i = 0; i < 5; i++) {

    userNumbersList[i] = parseInt(prompt("inserisci un numero"));
    
  }

  // Controllo se e quali numeri inseriti dall'utente conincidono con quelli generati casualmente

  for(let i = 0; i < 5; i++) {

    if(userNumbersList.indexOf(numbers[i]) != -1) {

        numbersRemebered += 1;
        numbersRemeberedList.push(numbers[i]);

      }
  }

  // Mostra nuovamenteall'utente i numeri generati e i numeri da esso inseriti

  randomNumberscontainer.innerHTML = "Numeri generati: " + numbers +".";

  userNumb.innerHTML = "Hai inserito i numeri: " + userNumbersList +".";

  randomNumberscontainer.style.display = "block";

  // Mostra all'utente quanti e quali numeri è riscito a ricordarsi

  if (numbersRemebered === 0) {

    result.innerHTML = `Non ti sei ricordato nessun numero.`;

  } else if(numbersRemebered === 1) {

    result.innerHTML = `Ti sei ricordato correttamente ${numbersRemebered} numero.`;

    showNumbresremenmbered.innerHTML = `Il numero ricordato \xE8: ${numbersRemeberedList}.`;

  } else {

    result.innerHTML = `Ti sei ricordato correttamente ${numbersRemebered} numeri.`;

    showNumbresremenmbered.innerHTML = `I numeri ricordati sono: ${numbersRemeberedList}.`;

  }

}