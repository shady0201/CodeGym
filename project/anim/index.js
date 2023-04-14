const ball = document.querySelector('.ball');

const startAnimation = () => {
ball.style.animationPlayState = 'running';
};

const stopAnimation = () => {
ball.style.animationPlayState = 'paused';
};

// document.getElementById('startBall').addEventListener('click', startAnimation);
// document.getElementById('stopBall').addEventListener('click', stopAnimation);

