(function () {
  var me = {};
  var form = document.querySelector('.form__container');
  var closeButton = null;
  function onClose(e) {
    e.preventDefault();
    me.close();
  }

  // Close ESC
  function keydownClose(e) {
    if (e.keyCode == 27) {
      me.close();
    }
  }
  me.open = function () {
    form.classList.remove('is-hidden');
    closeButton = document.querySelector('.form__close-button');
    closeButton.addEventListener('click', onClose);
    document.addEventListener("keydown", keydownClose);
     
  };

  me.close = function () {
    form.classList.add('is-hidden');
   
  };


  window.form = me;
}());
