$(document).ready(function() {
  function socialEvent() {
    $(this).find('img').toggleClass('focus');
  };
  // need to refactor for DRY standard
  $('.social').on('mouseenter','li',socialEvent);
  $('.social').on('mouseleave','li',socialEvent);
  $('.container').find('p').slideDown(2000);
});
