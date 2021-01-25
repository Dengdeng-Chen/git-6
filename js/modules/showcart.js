define(["jquery","http","remove","count","countAll"], function ($,h,r,c,ca) {
  return $(function (){
    if (localStorage.getItem('goods')) {
      //有数据就加载
      h.shopping();
      // 删除商品
      r.remove();
  
    } else {
      var newLi = '<li>购物车暂无数据！</li>'
      $('.list').html(newLi)
    }
    //添加商品数量
    c.add();
    //减少商品数量
    c.reduce();
  
    $(".back").click(function () {
      history.go(-1);
    })
    //计算总价
    ca.countAll();
  })
})