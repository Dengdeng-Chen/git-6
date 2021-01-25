define(["jquery"], function ($) {
  function add() {
    $(".list").on("click", "li .add", function () {
      var coun=parseInt( $(this).prev().text())
      $(this).prev().text(coun + 1);
      var id = $(this).next().attr("data-id");
      // console.log(id);
      var arr = JSON.parse(localStorage.getItem("goods"));
      // console.log(arr);
      var _this = this;
      $.each(arr, function (index, item) {
        if (item.id === id) {
          // console.log($(_this).prev().text());
          item.num = parseInt($(_this).prev().text());
          localStorage.setItem("goods", JSON.stringify(arr));
        }
      })
    })
  }
  function reduce() {
    $(".list").on("click", "li .reduce", function () {
      var coun = parseInt($(this).next().text())
      if (coun <= 1) {
        return false;
      }
      $(this).next().text(coun - 1);
      var id = $(this).next().next().next().attr("data-id");
      // console.log(id);
      var arr = JSON.parse(localStorage.getItem("goods"));
      // console.log(arr);
      var _this = this;
      $.each(arr, function (index, item) {
        if (item.id === id) {
          // console.log($(_this).prev().text());
          item.num = parseInt($(_this).next().text());
          localStorage.setItem("goods", JSON.stringify(arr));
        }
      })
    })
  }
  return {add,reduce}
})