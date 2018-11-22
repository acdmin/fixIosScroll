## fixIosScroll.js
ios浏览器滚动bug修复

# 调用方式
new fixIosScroll({
    element: item,
    threshold: 50,
    loadFn: function(){},
    atTheTop: function(){},
    atTheBottom: function(){}
})

# 参数说明
  item: Dom元素
  threshold: （可选）距离底部的位置，默认0
  atTheTop: （可选）滚动到顶端后执行的函数
  loadFn: （可选）滚动到距离底部threshold像素位置执行的函数，threshold大于0是可用
  atTheBottom: （可选）滚动到低端执行的函数
