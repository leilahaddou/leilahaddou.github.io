var hints = Array.from(document.querySelectorAll('.hint'))

hints.forEach(function(each) {
    each.style.display = 'none';
    var button = $('<div class="btn btn-default">Show hint</div>');
    $(each).after(button);
    button.click(function() {
		each.style.display = each.style.display === '' ? 'none' : '';
    });
});
