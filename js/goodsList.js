
require.config({
  baseUrl: './js',
  paths: {
    'jquery': "lib/jquery-1.8.3",
    "http": "modules/http",
    "addcart":"modules/addcart"
  }
})

require(["http", "addcart"], function (h,a) {
  h.goodslist()
})