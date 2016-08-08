function setToggleLabel(toggle, target) {
  if (target.prop('disabled')) {
    toggle.html('Enable');
  } else {
    toggle.html('Disable');
  }
};

function readyFn() {
  var $toggleBtn = $("#test-button");
  var $targetBtn = $("#new-button");
  setToggleLabel($toggleBtn, $targetBtn);

  $toggleBtn.on('click', function() {
    $targetBtn.prop('disabled', function(_, value) { return ! value })
    setToggleLabel($toggleBtn, $targetBtn);
  });
};

$(readyFn);
