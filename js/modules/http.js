define(["jquery"], function ($) {
  function goodslist() {
    return $.ajax({
    url: './data/goods.json',
    dataType: "json",
    type: 'get',
    cache:false,
    success: function (json) {
      var domStr = '';
      $.each(json, function (index, item) {
        domStr+=`<li>
        <a href="#">
          <img src="${item.goodsimg}" alt="">
          <span>${item.price}</span>
          <p>${item.title}</p>
          <span data-id="${item.id}" class="buycart">购物车</span>
        </a>
    </li>`
      })
       $(".list").html(domStr);
    },
    error: function (err) {
      console.log(err);
    }
  })
  }
  function shopping() {
    // 获取购物车数据
    var goodsArr = JSON.parse( localStorage.getItem('goods') )
    // 获取所有数据
    $.ajax({
      url: './data/goods.json',
      type: 'get',
      dataType: 'json',
      success: function (json){
        var domStr = ''
        $.each(json,function (index,item){
          $.each(goodsArr,function (i,obj){
            if (item.id === obj.id) {
              domStr += `
              <li>
                <input type="checkbox">
                <img src="${item.goodsimg}" alt="">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class='reduce'>-</button>
                <span>${obj.num}</span>
                <button class='add'>+</button>
                <em data-id="${item.id}">删除</em>
              </li>
              `
            }
          })
        })
        $('.list').html(domStr)
      }
    })
  }
  return {goodslist,shopping}
});