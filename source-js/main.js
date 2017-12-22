jQuery(document).ready(function(event) {
  jQuery('form').submit(function() {
    if (jQuery('.input').val() !== '') {
      var newTask = jQuery('.input').val()
      var newLi = jQuery('<li>' + newTask + '<a class="remove" href="#">X</a></li>');
      newLi.on('click', function() {
        jQuery(this).remove() // Attach the event handler *before* adding the element
      })
      jQuery('ul').prepend(newLi) // To put the new task at the top of the list
      jQuery('.input').val('')
      return false; // So the change persists
    }
  });
});