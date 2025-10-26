// すべての画像要素を取得
const messages = document.querySelectorAll('.message');

// 最初に表示する画像のインデックス（2枚目から開始）
let currentIndex = 1;

function messageAppear() {
  // 最後の画像の後は最初に戻す
  if (currentIndex >= messages.length) {
    currentIndex = 0;
  }

  // すべての画像を非表示にする
  messages.forEach(message => {
    message.classList.remove('appear');
  });

  // 現在の画像を表示
  messages[currentIndex].classList.add('appear');

  // 次の画像に進む
  currentIndex++;
}

// 3秒ごとに画像を切り替える
setInterval(messageAppear, 4000);
