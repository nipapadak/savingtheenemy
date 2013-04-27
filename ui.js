var answers = {}

$('.next').on('click', function() {
  var $this = $(this);
  var $step = $this.closest('section');
  var nextStep = parseInt($step.attr('id').split('step')[1]) + 1;

  /* Log the answer */
  answers[$step.attr('id')] = this.className;

  /* Hide the current step */
  $step.removeClass('focused').addClass('completed');

  /* Show the next step */
  if ($this.data('next')) {
    $('#' + $this.data('next')).addClass('focused');
  } else {
    $('#step' + nextStep).addClass('focused');
  }
});
