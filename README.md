# fixIosScroll.js
ios浏览器滚动bug修复

## 调用方式
new fixIosScroll({</br>
	element: item,</br>
&nbsp;&nbsp;threshold: 50,</br>
&nbsp;&nbsp;loadFn: function(){},</br>
&nbsp;&nbsp;atTheTop: function(){},</br>
&nbsp;&nbsp;atTheBottom: function(){}</br>
})

## 参数说明
  item: Dom元素</br>
  threshold: （可选）距离底部的位置，默认0</br>
	atTheTop: （可选）滚动到顶端后执行的函数</br>
  loadFn: （可选）滚动到距离底部threshold像素位置执行的函数，threshold大于0是可用</br>
  atTheBottom: （可选）滚动到低端执行的函数</br>
