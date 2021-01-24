var windowsize = document.body.clientWidth;
windowsize = windowsize/2 -300;
windowsize += "px"
console.log(windowsize);
ScrollReveal().reveal('#lottie-logo', {
    delay: 2500,
    opacity: 1,
    distance: windowsize,
    origin: 'right',
    duration: 800, // アニメーションの完了にかかる時間
    viewFactor: 0, // 0~1,どれくらい見えたら実行するか
    reset: false   // 何回もアニメーション表示するか
});