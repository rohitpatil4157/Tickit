
let svgContainer = document.getElementById('svg');

let animation = bodymovin.loadAnimation({
    wrapper: svgContainer,
    Type: 'svg',
    autoplay : false,
    loop : true,
    path : "https://assets1.lottiefiles.com/packages/lf20_lbHpNV.json"
    


});
// animation.goToAndPlay(0,true);

let backAnimation = document.getElementById('svg1');

let ankime = bodymovin.loadAnimation({
    wrapper : backAnimation,
    Type: "svg1",
    autoplay : false,
    loop: false,
    path : 'https://assets1.lottiefiles.com/private_files/lf30_lBM2J2.json'
})

ankime.play()

















/* for Future :
Name : USeful name spark
co-ordinates : svgcont{transform: translate3d(-43px, -60px, 0px);}
animation.setSpeed(0.5)
"https://assets10.lottiefiles.com/packages/lf20_5xdtaojy.json"


Name : GooglePay Animation 
Co-ordinatees : same as above! Lmao
https://assets1.lottiefiles.com/private_files/lf30_kth591yp.json

simialr Tick Like this :
// path : "https://assets5.lottiefiles.com/packages/lf20_gekR1y.json" 



*/