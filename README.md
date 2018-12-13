## 功能说明

    ios Safari浏览器，在滚动内容父级开启回弹效果时，内容滚动 内容滚动容易出现bug

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

    dog | bird | cat
    ----|------|----
    foo | foo  | foo
    bar | bar  | bar
    baz | baz  | baz

##
    | 参数名 | 传参 | 说明 | 默认 |
    --------|------|------|------|
    |  DOM  |  必传 | dom实例 | 0 |

##
    dom: dom实例
    threshold: （可选）距离底部的位置，默认0
    backYdistance: (可选) 默认为1个像素单位，不能大于3
    onScroll: (可选) 持续滚动事件
    onScrollEnd: (可选) 滚动结束事件
    atTheTop: （可选）滚动到顶端后执行的函数
    onLoadFn: （可选）滚动到距离底部threshold像素位置执行的函数，threshold大于0时可用
    atTheBottom: （可选）滚动到低端执行的函数
