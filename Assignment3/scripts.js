const speechText = document.getElementById('speech-text');
const dialogues = [
    'Hello, and welcome to my dream world!',
    'It is where I keep track of my old character designs.',
    'Some of  are old, others are plain cringe.',
    'You might like it, you might not.',
    'But these characters are a part of me...',
    'And I hope you can see that sentiment.'
];
let i = 0;

speechText.addEventListener('click', () => {
    i = (i + 1) % dialogues.length;
    speechText.innerText = dialogues[i];
});

document.getElementById('clickme1').addEventListener('click', function () {
    document.getElementById('kamots-legacy').style.display = 'block';
});

document.getElementById('clickme2').addEventListener('click', function () {
    document.getElementById('kamots-nov').style.display = 'block';
});

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyK') {
        var kamotsEvil = document.querySelector('.kamots-evil');
        kamotsEvil.style.display = 'block';
        kamotsEvil.style.animation = 'jumpInAndOut 2s linear';
        setTimeout(function () {
            kamotsEvil.style.display = 'none';
            kamotsEvil.style.animation = '';
        }, 2000);
    }
});


var images = ['images/year1.png', 'images/year2.png', 'images/year3.png', 'images/year4.png', 'images/year5.png'];
var index = 0;

document.querySelector('.iconB').addEventListener('click', function () {
    var imageCycle = document.querySelector('#imageCycle');
    var oldImg = imageCycle.querySelector('img');
    if (oldImg) {
        oldImg.style.opacity = '0';
        setTimeout(function () {
            imageCycle.removeChild(oldImg);
        }, 500);
    }
    var img = document.createElement('img');
    img.src = images[index];
    img.alt = 'Year Image';
    img.classList.add('fade');
    imageCycle.appendChild(img);
    setTimeout(function () {
        img.style.opacity = '1';
    }, 100);
    index = (index + 1) % images.length;
});


document.querySelector('.iconS').addEventListener('click', function () {
    var stella = document.querySelector('.stella');
    stella.style.animation = 'rotate360 2s linear';
    setTimeout(function () {
        stella.style.animation = '';
    }, 2000);
});

document.querySelector('.gif').addEventListener('click', function () {
    var imageCycle = document.querySelector('#imageCycle');
    imageCycle.style.display = 'none';
});


const modal = document.getElementById('modalK');
const btn = document.querySelector('.iconK');
const span = document.getElementById('close');

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}