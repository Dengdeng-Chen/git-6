
require.config({
  baseUrl: 'js',
  paths: {
    "http": "modules/http",
    "show": "modules/showcart",
    "count": "modules/count",
    "remove": "modules/removegoods",
    "countAll":"modules/countAll",
    'jquery': "lib/jquery-1.8.3"
  }
})
require(["jquery", "show"])