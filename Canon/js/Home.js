/* GIỮ THANH NAV LẠI */
$(document).ready(function () {
   $(window).scroll(function (event) {
      var pos_body = $('html,body').scrollTop();
      /* console.log(pos_body) */
      if (pos_body > 20) {
         $('.nav-fix').addClass('co_dinh_nav');
      }
      else {
         $('.nav-fix').removeClass('co_dinh_nav');
      }
   });
});