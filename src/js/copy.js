(function() {
  'use strict';

  var d = document;
  var select = d.getElementById('notifiedUsersLeft').getElementsByTagName('select')[0];
  var num = 0;
  var target_ids = [];
  var len = select.childElementCount;

  for (var i = 0; i < len; i++) {
    if (select.options[i].selected) {
      target_ids[num] = select.options[i].value;
      num++;
    }
  }

  try {
    localStorage.setItem('notifiedUsers', target_ids);
    console.log('お知らせユーザを保存しました。');
  } catch (err) {
    console.error('データの保存に失敗しました。', err);
  }
})();
