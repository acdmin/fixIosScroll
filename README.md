# fixIosScroll.js
ios浏览器滚动bug修复

### 调用方式
new fixIosScroll({</br>
&nbsp;&nbsp;&nbsp;&nbsp;element: dom,</br>
&nbsp;&nbsp;&nbsp;&nbsp;threshold: 20,</br>
&nbsp;&nbsp;&nbsp;&nbsp;backYdistance: 1,</br>
&nbsp;&nbsp;&nbsp;&nbsp;atTheTop(){},</br>
&nbsp;&nbsp;&nbsp;&nbsp;onScroll(){},</br>
&nbsp;&nbsp;&nbsp;&nbsp;onScrollEnd(){},</br>
&nbsp;&nbsp;&nbsp;&nbsp;onLoadFn(){},</br>
&nbsp;&nbsp;&nbsp;&nbsp;atTheBottom(){}</br>
})

### 参数说明
&nbsp;&nbsp;&nbsp;&nbsp;dom:  dom实例</br>
&nbsp;&nbsp;&nbsp;&nbsp;threshold: （可选）距离底部的位置，默认0</br>
&nbsp;&nbsp;&nbsp;&nbsp;backYdistance:  (可选) 默认为1个像素单位，不能大于3</br>
&nbsp;&nbsp;&nbsp;&nbsp;onScroll:  (可选) 持续滚动事件</br>
&nbsp;&nbsp;&nbsp;&nbsp;onScrollEnd: (可选) 滚动结束事件</br>
&nbsp;&nbsp;&nbsp;&nbsp;atTheTop: （可选）滚动到顶端后执行的函数</br>
&nbsp;&nbsp;&nbsp;&nbsp;onLoadFn: （可选）滚动到距离底部threshold像素位置执行的函数，threshold大于0时可用</br>
&nbsp;&nbsp;&nbsp;&nbsp;atTheBottom: （可选）滚动到低端执行的函数
