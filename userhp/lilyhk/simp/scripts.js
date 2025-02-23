// 设置等待时间（毫秒）
const progressBarTime = 5000; // 5秒

// 进度条动画
const progressBar = document.querySelector('.progress-bar');

// 使用CSS动画来控制进度条的宽度
progressBar.style.transition = `width ${progressBarTime}ms linear`;
progressBar.style.width = '100%';

// 当进度条满时重定向
setTimeout(() => {
    window.location.href = "https://lilyhk.static.jp/";
}, progressBarTime);

console.log("此页面将在进度条满后自动跳转到目标网站...");