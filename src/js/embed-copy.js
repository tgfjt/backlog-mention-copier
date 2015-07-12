(function(d) {
  'use strict';

  var commentsInner = d.getElementById('comments-inner');
  var observer = new MutationObserver(function() {
    var editable = commentsInner.querySelectorAll('.disable-collapse-event');
    var comments = commentsInner.querySelectorAll('.comment-content-container');
    var select = d.getElementById('notifiedUsersLeft').getElementsByTagName('select')[0];
    var selectlen = select.childElementCount;

    function getUserNames(n) {
      return [].map.call(comments[n].parentNode.querySelectorAll('.notifyUserLink img'), function(img) {
        return img.alt;
      });
    }

    function copypaste(e) {
      var names = getUserNames(this.indexNum);
      var ev = d.createEvent('HTMLEvents');
      var usersIds = [];
      e.preventDefault();
      e.stopPropagation();

      var isUser = false;

      for (var k = selectlen - 1; k >= 0; k--) {
        if (names.indexOf(select.options[k].innerHTML) > -1) {
          select.options[k].selected = true;
          usersIds.push(select.options[k].value);
          isUser = true;
        }
      }

      if (isUser === false) {
        console.warn('該当するユーザーが見つかりませんでした。');
        return;
      }

      try {
        localStorage.setItem('notifiedUsers', usersIds);
        console.log('お知らせユーザを保存しました。');
      } catch (err) {
        console.error('データの保存に失敗しました。', err);
      }

      ev.initEvent('change', false, true);
      select.dispatchEvent(ev);
    }

    [].forEach.call(commentsInner.querySelectorAll('.js-notifyCopyPaste'), function(node) {
      node.parentNode.removeChild(node);
    });

    for (var i = editable.length - 1; i >= 0; i--) {
      var span = d.createElement('span');
      var link = d.createElement('a');
      span.classList.add('js-notifyCopyPaste');
      link.innerHTML = 'お知らせコピペ';
      link.indexNum = i;
      link.addEventListener('click', copypaste);

      span.appendChild(link);
      editable[i].insertBefore(span, editable[i].querySelector('span'));
    }
  });

  observer.observe(d.getElementById('comments-inner'), {childList: true});
})(document);


