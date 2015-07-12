(function() {
  'use strict';

  var item;

  try {
    item = localStorage.getItem('notifiedUsers');
  } catch (err) {
    console.error('お知らせユーザデータの取得に失敗しました。', err);
    return false;
  }

  if (item === null) {
    alert('RAKU-5: お知らせユーザデータがありません。');
    return;
  }

  var target_ids = item.split(',');
  var d = document;
  var select = d.getElementById('notifiedUsersLeft').getElementsByTagName('select')[0];
  var e = d.createEvent('HTMLEvents');
  var i;
  var len = select.childElementCount;
  var isUser = false;

  for (i = 0; i < len; i++) {
    if (target_ids.indexOf(select.options[i].value) > -1) {
      select.options[i].selected = true;
      isUser = true;
    }
  }

  if (isUser === false) {
    console.warn('RAKU-5: 該当するユーザーが見つかりませんでした。');
    return;
  }

  e.initEvent('change', false, true);
  select.dispatchEvent(e);

  console.log('RAKU-5: お知らせユーザを貼り付けました。');
})();
