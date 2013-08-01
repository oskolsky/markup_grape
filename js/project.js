// DOM READY
// ----------------------------------------------------------------------------------------------------
$(function() {

  var appLink = 'https://itunes.apple.com/us/app/grape-app/id602618538?mt=8';

  // AppStore redirect for iPhone
  if (iOSCheck()) { document.location.href = appLink; }

  $.stickyFooter();

  // Comming Soon
  $('.comming-soon').click(function() {
    document.location.href = appLink;
  });

  // Select dropdown
  $('.select').toggle(function() {
    $(this).addClass('select_active');
    $(this).find('.select_dropdown').show();
  }, function() {
    $(this).removeClass('select_active');
    $(this).find('.select_dropdown').hide();
  });
  
  $('.select').find('dd').click(function() {
    var value = $(this).text();
    $('.select_hidden').attr('value', value);
    $('.select_title').text(value);
  });  

  // Control click

  setInterval( function() { Control.Next() } , 10000)

  $('.control_next').click(function() {
    Control.Next();
    return false;
  });

  $('.control_prev').click(function() {
    Control.Prev();
    return false;
  });

  $('.control').live('selectstart', function() { return false; });

});

// DOCUMENT SCROLL
// ----------------------------------------------------------------------------------------------------
$(document).scroll(function() {});

// WINDOW LOAD
// ----------------------------------------------------------------------------------------------------
$(window).load(function() {

  $('.page_index').css({visibility: 'visible'});

});

// WINDOW RESIZE
// ----------------------------------------------------------------------------------------------------
$(window).resize(function() {

  $.stickyFooter();

});