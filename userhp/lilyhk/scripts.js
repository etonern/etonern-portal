document.addEventListener("DOMContentLoaded", function() {
    // ローディング画面を取得
    const loadingScreen = document.getElementById('loading-screen');
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const profileImage = document.getElementById('profileImage');

    // 初期画像設定
    let currentImage = '../myicon.png';
    const alternateImage = '../myicon2.jpg';

    // プロフィール画像をクリック時に画像を切り替える
    profileImage.addEventListener('click', function() {
        currentImage = currentImage === '../myicon.png' ? alternateImage : '../myicon.png';
        profileImage.src = currentImage;
    });

    // ページ読み込み時にローカルストレージからテーマを復元
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        applyLoadingScreenStyles(true); // ダークモード用のスタイルを適用
    } else {
        applyLoadingScreenStyles(false); // ライトモード用のスタイルを適用
    }

    // ダークモードの切り替えイベントリスナーを追加
    toggleDarkModeButton.addEventListener('click', function() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        applyLoadingScreenStyles(isDarkMode); // ダークモード/ライトモードに応じたスタイルを適用
        const theme = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    // 2秒後にローディング画面をフェードアウト
    setTimeout(function() {
        loadingScreen.classList.add('fade-out');
        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none';
        }, { once: true });
    }, 2000); // 2秒間表示

    // ローディング画面の初期状態設定
    loadingScreen.style.display = 'flex';

    // ダークモード/ライトモードに応じたローディング画面のスタイルを適用する関数
    function applyLoadingScreenStyles(isDark) {
        if (isDark) {
            loadingScreen.style.backgroundColor = '#333';
            loadingScreen.querySelector('.spinner').style.borderTopColor = '#ff6666';
            loadingScreen.querySelector('p').style.color = '#e0e0e0';
        } else {
            loadingScreen.style.backgroundColor = '#fffdd0';
            loadingScreen.querySelector('.spinner').style.borderTopColor = '#cc0000';
            loadingScreen.querySelector('p').style.color = '#333';
        }
    }
});