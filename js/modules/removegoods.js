define(["jquery"], function ($) {
  function remove() {
    // 获取购物车数据
    var goodsArr = JSON.parse( localStorage.getItem('goods') )
    $('.list').on('click','li em',function (){
      // 当前点击的商品id
      var id = $(this).attr('data-id')
      $.each(goodsArr,function (index,item){
        if (item.id === id) {
          goodsArr.splice(index,1)
          return false
        }
      })
      // 删除dom结构
      $(this).parent().remove()
      // 更新本地存储的数据
      localStorage.setItem('goods',JSON.stringify(goodsArr))
      if (goodsArr.length <= 0) {
        localStorage.removeItem('goods')
        var newLi = '<li>购物车暂无数据！</li>'
        $('.list').html(newLi)
      }
      var flag = false;
      $.each($(".list li input"), function (index, item) {
        
        if (!$(item).prop("checked")) {
          flag = true;
        }
      })
      if (flag) {
        $(".allchecked").prop("checked",false)
      } else {
        $(".allchecked").prop("checked",true)
      }
    })
  }
  return {remove}
})