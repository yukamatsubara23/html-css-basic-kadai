// HTMLから要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされた時の処理を関数として定義
function handleClick() {
  text.textContent = 'ボタンをクリックしました';
}

// ボタンにクリックイベントを追加
btn.addEventListener('click', handleClick);
