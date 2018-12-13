## 功能说明

    ios Safari浏览器,在可滚动内容父级开启回弹效果时,
    即:-webkit-overflow-scrolling:touch,内容滚动容易出现卡顿,
    快速滚动时甚至出现无法滚动的问题.

## 调用方式

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

## 参数说明

    dom: dom实例
    threshold: （可选）距离底部的位置，默认0
    backYdistance: (可选) 在滚动到顶端或者低端时,自动回拉backYdistance像素的距离,防止下次滚动无法正常出发的BUG. 默认为1个像素单位，不能大于3
    onScroll: (可选) 持续滚动事件,每次都会调用
    onScrollEnd: (可选) 滚动结束时调用
    atTheTop: （可选）滚动到顶端后，并且触发backYdistance回弹后调用
    onLoadFn: （可选）滚动到距离底部threshold像素位置执行的函数，threshold大于0时可用
    atTheBottom: （可选）滚动到底端后，并且触发backYdistance回弹后调用
