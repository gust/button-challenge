$(document).ready(function() {
})


function setLabels(target, button, article){
  if (target == "investor" || target == "accelerator") {
    article.html("an")
    button.html("Start Investing Today")
  } else {
    article.html("a")
    button.html("Get Funded Today")
  }
};

function readyFn() {
  var $toggleBtn = $("#test-button");
  var $targetBtn = $("#new-button");

  $("form").on('change', function() {
    var formElements = $("select");
    var formElementsValue = $("select").prop("value");
    var article = $("#article");

    if (formElementsValue != '') {
      $targetBtn.prop('disabled', '')
      setLabels(formElementsValue, $targetBtn, article);
    }else{
      $targetBtn.prop('disabled', 'disabled')
      $targetBtn.html("Submit")
    }
  })
};


$(readyFn);
