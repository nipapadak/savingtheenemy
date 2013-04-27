var answers = {}

$('button').on('click', function() {
  var $this = $(this);
  var $step = $this.closest('section');
  answers[$step.attr('id')] = this.className;
  $step.removeClass('focused');
  $('step' + $step.attr('id').split('step')[1]).addClass('focused');
});
