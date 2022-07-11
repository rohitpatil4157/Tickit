console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("Click.aac")
let gameover = new Audio("AUD-20220124-WA0015.aac")
let turn = "O"
let isgameover = false;




// Function to change the turn
const changeTurn = () => {
    return turn === "O" ? "X" : "O"
}

let info = document.querySelector('.info')
let imgbox = document.querySelector('.imgbox')
let line = document.querySelector('.line')


// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {

            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            document.querySelector('.info').style.background = ' #55ff00';
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
            /**/
            confetti.start();

            // /**/svgContainer.style.width = "180px"
            // /**/animation.goToAndPlay(0,true);

            setTimeout(() => {
                document.querySelector('.Gridcontainer').style.opacity = "0.5";
            }, 700);

            music.play();


        }
    })
}

// Game Logic


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        // shower.style.display = 'block'
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();

            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;


            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.Gridcontainer').style.opacity = "1";
    document.querySelector('.info').style.background = '';

    music.pause()
    gameover.play()
    /**/
    confetti.stop()
    // /**/svgContainer.style.width = '0vw';


})
let icon1 = document.querySelector('.redIc');
// let elem = window.getComputedStyle(icon1, "::before");

icon1.addEventListener('click', () => {
    icon1.classList.add('.active')
    icon1.style.background = '#44d82a';
    icon1.style.transform = 'rotate(360deg)';
    icon1.style.setProperty("--MyScaler", "200")
    icon1.style.setProperty("--tras", "1s linear")
    icon1.style.setProperty("--opacity", "0")
    setTimeout(() => {
        location.reload()
    }, 100)

})

// 
// let shower = document.querySelector('.finder');
reset.addEventListener('click', () => {
    // shower.style.backgroundColor = 'transparent'
    if (icon1.style.visibility !== 'visible') {
        icon1.style.visibility = 'visible';
        icon1.style.top = '50%';

        setTimeout(() => {
            icon1.style.visibility = 'hidden'
            icon1.style.top = '100%';
            shower.style.backgroundColor = ''
        }, 10000)
    } else {
        icon1.style.visibility = 'hidden';
        icon1.style.top = '100%';
        shower.style.backgroundColor = ''
    }
})

document.querySelector("#bts").addEventListener('click', () => {
    turn = "O"
    setTimeout(() => {
        document.querySelector(".Cont1").style.display = "none"
        // document.querySelector(".Gridcontainer").style.gridTemplateRows = "repeat(3, 10vw)"
        // document.querySelector(".Gridcontainer").style.gridTemplateColumns = "repeat(3, 10vw)"
        // document.querySelector(".Gridcontainer").style.transition = "all 0.5s ease"
    })
})