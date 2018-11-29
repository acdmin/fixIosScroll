# fixIosScroll.js
ios浏览器滚动bug修复

### 调用方式
new fixIosScroll({</br>
&nbsp;&nbsp;&nbsp;&nbsp;element: item,</br>
&nbsp;&nbsp;&nbsp;&nbsp;threshold: 50,</br>
&nbsp;&nbsp;&nbsp;&nbsp;loadFn: function(){},</br>
&nbsp;&nbsp;&nbsp;&nbsp;atTheTop: function(){},</br>
&nbsp;&nbsp;&nbsp;&nbsp;atTheBottom: function(){}</br>
})

new fixIosScroll({
	element: dom,
	threshold: 20,
	backYdistance: 1,
	atTheTop(){},
	onScroll(){},
	onScrollEnd(){},
	onLoadFn(){},
	atTheBottom(){}
})

### 参数说明
  dom: dom实例</br>
  threshold: （可选）距离底部的位置，默认0</br>
  backYdistance: (可选)默认为1个像素单位，不能大于3
  onScroll: (可选) 持续滚动事件
  onScrollEnd: (可选) 滚动结束事件
  atTheTop: （可选）滚动到顶端后执行的函数</br>
  onLoadFn: （可选）滚动到距离底部threshold像素位置执行的函数，threshold大于0是可用</br>
  atTheBottom: （可选）滚动到低端执行的函数</br>
