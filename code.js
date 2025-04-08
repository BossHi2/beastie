const beast = document.getElementsByClassName("beast")[0];
var prevNum = 0;

function beastClick(){
    var audio = new Audio('bark.mp3');
    audio.play();
    var randNum = 1+(Math.random() * 79);
    while(Math.abs(randNum-prevNum) < 3)
        randNum = 1+(Math.random() * 79);
    var pos = randNum + 'vw';
    beast.animate({        
        left:pos,
    }, {duration:200, fill: "forwards"})

    prevNum = randNum;
}

beast.addEventListener('click', beastClick);