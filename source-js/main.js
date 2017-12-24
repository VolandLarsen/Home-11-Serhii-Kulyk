jQuery(document).ready(function () {
  jQuery('#list-items').html(localStorage.getItem('listItems'));
  jQuery('.add-items').submit(function(event){
    event.preventDefault();
    var item = jQuery('#todo-list-item').val();
    if(item){
      jQuery('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><div class='hr'></div></li>");
      localStorage.setItem('listItems', jQuery('#list-items').html());
      jQuery('#todo-list-item').val("");
    }
  });
  jQuery(document).on('change', '.checkbox', function() {
    if(jQuery(this).attr('checked')) {
      jQuery(this).removeAttr('checked');
    } else {
      jQuery(this).attr('checked', 'checked');
    }
    jQuery(this).parent().toggleClass('completed');
    localStorage.setItem('listItems', jQuery('#list-items').html());
  });
  jQuery(document).on('click', '.remove', function() {
    jQuery(this).parent().remove();
    localStorage.setItem('listItems', jQuery('#list-items').html());
  });
});

