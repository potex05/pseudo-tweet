    document.addEventListener("DOMContentLoaded", function () {
        const trendHeader = document.querySelector(".trend-container h2");

        window.addEventListener("scroll", function () {
            const rect = trendHeader.getBoundingClientRect();
            if (rect.top <= 0) {
                trendHeader.classList.add("scrolled");
            } else {
                trendHeader.classList.remove("scrolled");
            }
        });
    });

document.querySelector(".tweet-button").addEventListener("click", function() {
    document.querySelector(".tweet-modal").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".tweet-modal").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const tweetInput = document.querySelector(".tweet-input");
    const tweetSubmit = document.querySelector(".tweet-submit");
    const tweetModal = document.querySelector(".tweet-modal");
    const tweetButton = document.querySelector(".tweet-button");
    const closeModal = document.querySelector(".close");

    // 通知要素を作成
    const notification = document.createElement("div");
    notification.classList.add("tweet-notification");
    notification.innerText = "ツイートを送信しました";
    document.body.appendChild(notification);

    // 入力イベントでツイートボタンの有効化
    tweetInput.addEventListener("input", function () {
        if (tweetInput.value.trim().length > 0) {
            tweetSubmit.classList.add("active");
        } else {
            tweetSubmit.classList.remove("active");
        }
    });

    // ツイートボタンを押したときの処理
    tweetSubmit.addEventListener("click", function () {
        if (!tweetSubmit.classList.contains("active")) return;

        tweetModal.style.display = "none";
        tweetInput.value = "";
        tweetSubmit.classList.remove("active");

        // 通知を表示
        notification.style.top = "10px";

        // 5秒後に通知を消す
        setTimeout(() => {
            notification.style.top = "-60px";
        }, 5000);
    });

    // ツイートモーダルの開閉
    tweetButton.addEventListener("click", function () {
        tweetModal.style.display = "flex";
    });

    closeModal.addEventListener("click", function () {
        tweetModal.style.display = "none";
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        const tweetButton = document.querySelector(".tweet-button");
        const tweetModal = document.querySelector(".tweet-modal");
        const closeModal = document.querySelector(".close");

        function openModal(event) {
            event.preventDefault();
            tweetModal.style.display = "flex";
        }

        function closeModalFunc() {
            tweetModal.style.display = "none";
        }

        // PC用クリックイベント
        tweetButton.addEventListener("click", openModal);

        // スマホ用タッチイベント
        tweetButton.addEventListener("touchstart", openModal);

        // モーダルを閉じる
        closeModal.addEventListener("click", closeModalFunc);
    });
