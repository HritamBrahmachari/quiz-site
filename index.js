async function quiz() {
    try {
        const response = await fetch('https://the-trivia-api.com/v2/questions');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }
 
}

var m, n, o, q;
var cat = document.getElementById('cat');
var p = document.getElementById('p');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');
var i = Math.floor(Math.random() * 10);
var j = Math.floor(Math.random() * 3);
var k = Math.floor(Math.random() * 3);
var l = Math.floor(Math.random() * 3);
var m = Math.floor(Math.random() * 4);
var n = Math.floor(Math.random() * 4);
var o = Math.floor(Math.random() * 4);

 q = Math.floor(Math.random() * 4);
var array;
async function quizes() {
   
    const data = await quiz();

    var b = document.querySelectorAll('.b');


    cat.innerHTML = `<h2> CATEGORY: ${data[i].category} </h2>`;
    p.innerHTML = `<h2> QUESTION: ${data[i].question.text} </h2>`;
    b1.style.display = 'inline';
    b2.style.display = 'inline';
    b3.style.display = 'inline';
    b4.style.display = 'inline';
    b5.style.display = 'inline';

    do {
        j = Math.floor(Math.random() * 3);
        k = Math.floor(Math.random() * 3);
        l = Math.floor(Math.random() * 3);
    } while (j === k || k === l || j === l) {


        array = [data[i].correctAnswer, data[i].incorrectAnswers[j], data[i].incorrectAnswers[k], data[i].incorrectAnswers[l]];

    }


    do {
        m = Math.floor(Math.random() * 4);
        n = Math.floor(Math.random() * 4);
        o = Math.floor(Math.random() * 4);
        q = Math.floor(Math.random() * 4);
    } while (m === n || m === o || m === q || n === o || n === q || o === q) {

        b1.innerHTML = `<p>${array[m]}</p>`;
        b2.innerHTML = `<p>${array[n]}</p>`;
        b3.innerHTML = `<p>${array[o]}</p>`;
        b4.innerHTML = `<p>${array[q]}</p>`;
       
      

    }
}

async function checks() {
  
    const data = await quiz();
    
    array = [data[i].correctAnswer, data[i].incorrectAnswers[j], data[i].incorrectAnswers[k], data[i].incorrectAnswers[l]];

    var check = [m, n, o, q];

    if (array[check[0]] === data[i].correctAnswer ) {
        b2.style.backgroundColor = 'green';
        b2.style.color = 'white';
    } 
    else if (array[check[1]] === data[i].correctAnswer ) {
        b1.style.backgroundColor = 'green';
        b1.style.color = 'white';
    }
    else if (array[check[2]] === data[i].correctAnswer ) {
        b3.style.backgroundColor = ' green';
        b3.style.color = 'white';
    } else if (array[check[3]] === data[i].correctAnswer) {
        b4.style.backgroundColor = 'green';
        b4.style.color = 'white';
    } 

   
}


b1.addEventListener('click', async () => { await checks() });
b2.addEventListener('click', async () => { await checks() });
b3.addEventListener('click', async () => { await checks() });
b4.addEventListener('click', async () => { await checks() });
b5.addEventListener('click', () => {
    b1.style.backgroundColor = 'white';
    b1.style.color = 'black';
    b2.style.backgroundColor = 'white';
b2.style.color = ' black';
    b3.style.backgroundColor = 'white';
    b3.style.color = 'black';
b4.style.backgroundColor = 'white';  
b4.style.color = 'black';});
b5.addEventListener('click', async () => { await quizes() });

