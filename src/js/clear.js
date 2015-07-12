(function() {
  'use strict';

  try {
    localStorage.removeItem('notifiedUsers');
    console.log('お知らせユーザデータをクリアしました。');
  } catch (err) {
    console.error('お知らせユーザデータのクリアに失敗しました。', err);
  }
})();
