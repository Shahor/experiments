window.addEventListener('load', function (e) {
    // Check for the various File API support.
    if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
      // Great success! All the File APIs are supported.
      alert('Though shalt not pass !!  (Seriously, get a real browser)');
      throw 'up';
    }

    var $ = document.querySelector.bind(document),
        $$ = document.querySelectorAll.bind(document)

    var dz = $(".dropzone")
});