define(["jquery"], function ($) {
  function countAll() {
    $(".allchecked").change(function () {
      if ($(".allchecked").prop("checked")) {
        $(".list li input").prop("checked",true);
      } else {
        $(".list li input").prop("checked",false);
      }
    })
    $(".list").on("change", "li input", function () {
      if ($(this).prop("checked")) {
        var flag = false;
        // var len = $(".list li input").length;
        $.each($(".list li input"), function (index,item) {
          if (!$(item).prop("checked")) {
            flag = true;
          }
        })
        if (flag) {
          $(".allchecked").prop("checked",false)
        } else {
          $(".allchecked").prop("checked",true)
        }
      } else {
        $(".allchecked").prop("checked",false)
      }
    })

  }
  return {countAll}
})