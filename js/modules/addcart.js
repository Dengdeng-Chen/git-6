define(["jquery"], function ($) {
  return $(".list").on('click', '.buycart', function () {
    // goods=>[{id:'',num:1}]
    var id = $(this).attr("data-id");//获取点击的商品的id
    // console.log(id);
    var goodsArr = [];
    //判断本地有没有该商品
    if (localStorage.getItem('goods')) {
      goodsArr=JSON.parse(localStorage.getItem('goods'))
    }
    var flag = false;
    $.each(goodsArr, function (i, ite) {
      if (ite.id === id) {
        ite.num++;
        flag = true;
      }
    })
    if (!flag) {
      goodsArr.push({"id":id,"num":1})
    }
    localStorage.setItem("goods",JSON.stringify(goodsArr)) 
  })
})