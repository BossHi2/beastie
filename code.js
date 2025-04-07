const beast = document.getElementsByClassName("beast")[0];
var prevNum = 0;

const cursor = document.getElementsByClassName("cursor")[0];

cursor.click(function(e){e.preventDefault();});

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    cursor.animate({
        left: `${clientX-200}px`,
        top: `${clientY-100}px`
    
    }, {duration: 1, fill: "forwards"})

}

function beastClick(){
    var audio = new Audio('bark.mp3');
    audio.play();
    var randNum = 1+(Math.random() * 79);
    while(Math.abs(randNum-prevNum) < 3)
        randNum = 1+(Math.random() * 79);
    var pos = randNum + 'vw';
    beast.style.left = pos;
    prevNum = randNum;
}

beast.addEventListener('click', beastClick);
