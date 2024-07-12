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

var cat = document.getElementById('cat');
var p = document.getElementById('p');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');
var array;
var correctAnswer;

async function quizes() {
    const data = await quiz();

    // Display elements
    cat.innerHTML = `<h2> CATEGORY: ${data[0].category} </h2>`;
    p.innerHTML = `<h2> QUESTION: ${data[0].question.text} </h2>`;
    b1.style.display = 'inline';
    b2.style.display = 'inline';
    b3.style.display = 'inline';
    b4.style.display = 'inline';
    b5.style.display = 'inline';
    p.style.display = 'inline';
    b5.style.backgroundColor = 'cyan';
   
    let j, k, l;
    do {
        j = Math.floor(Math.random() * data[0].incorrectAnswers.length);
        k = Math.floor(Math.random() * data[0].incorrectAnswers.length);
        l = Math.floor(Math.random() * data[0].incorrectAnswers.length);
    } while (j === k || k === l || j === l);

    array = [data[0].correctAnswer, data[0].incorrectAnswers[j], data[0].incorrectAnswers[k], data[0].incorrectAnswers[l]];
    correctAnswer = data[0].correctAnswer;

    let m, n, o, q;
    do {
        m = Math.floor(Math.random() * array.length);
        n = Math.floor(Math.random() * array.length);
        o = Math.floor(Math.random() * array.length);
        q = Math.floor(Math.random() * array.length);
    } while (m === n || m === o || m === q || n === o || n === q || o === q);

    b1.innerText = array[m];
    b2.innerText = array[n];
    b3.innerText = array[o];
    b4.innerText = array[q];
}

function checks(selectedButton) {
    [b1, b2, b3, b4].forEach((btn) => {
        if (btn.innerText === correctAnswer) {
            btn.style.backgroundColor = 'green';
            btn.style.color = 'white';
        } else if (btn === selectedButton) {
            btn.style.backgroundColor = 'red';
            btn.style.color = 'white';
        } else {
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
        }
    });
}

[b1, b2, b3, b4].forEach((btn) => {
    btn.addEventListener('click', () => {
        checks(btn);
    });
});

b5.addEventListener('click', () => {
    b1.style.backgroundColor = 'white';
    b1.style.color = 'black';
    b2.style.backgroundColor = 'white';
    b2.style.color = 'black';
    b3.style.backgroundColor = 'white';
    b3.style.color = 'black';
    b4.style.backgroundColor = 'white';
    b4.style.color = 'black';
    quizes();
});

// Initialize quiz
quizes();
