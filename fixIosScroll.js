const fixIosScroll = function(option) {
    this.element = option.element;
    this.firstChild = this.element.firstElementChild;
    this.t1 = 0;
    this.t2 = 0;
    this.sTimer = null; //滚动是否结束
    this.loadFnTimer = null;
    this.direction = 1; //滚动方向,向上:1 向下:-1
    this.lastScrollY = 0;
    this.backYdistance = (option.backYdistance&&typeof (option.backYdistance*1) === 'number'&&option.backYdistance>=0&&option.backYdistance<=3)?option.backYdistance:1; //滚动拉回到Y轴顶端或底端像素,最大3个像素单位
    this.inScrollBack = false; //是否处于滚动回拉中
    this.threshold = option.threshold&&typeof (option.threshold*1) === 'number'?option.threshold:0;
    this._atTheTop = option.atTheTop&&typeof option.atTheTop === 'function'?option.atTheTop:null;
    this._atTheBottom = option.atTheBottom&&typeof option.atTheBottom === 'function'?option.atTheBottom:null;
    this._onLoadFn = option.onLoadFn&&typeof option.onLoadFn === 'function'?option.onLoadFn:null;
    this._onScroll = option.onScroll&&typeof option.onScroll === 'function'?option.onScroll:null
    this._onScrollEnd = option.onScrollEnd&&typeof option.onScrollEnd === 'function'?option.onScrollEnd:null;
    this._init(option);
}
fixIosScroll.prototype = {
    constructor: fixIosScroll,
    _init: function(){
        //创建加载定点元素
        //默认撑开高度，使父级默认可以滚动，防止在IOS设备滚动bug
        let emptyChild = document.createElement('div');
            emptyChild.style.cssText = 'position:absolute;left:0;top:0;height:101%;width:100%;z-index:-100;';
        emptyChild.innerHTML = '<!-- 请勿删除 -->';
        this.element.appendChild(emptyChild);
        if( this.element.scrollTop == 0 ){
            this.element.scrollTop = this.backYdistance;
        }
        this.element.addEventListener('scroll', (e) => {
            this.bindScrollFn(e)
            e.preventDefault()
            e.stopPropagation()
        }, false)
    },
    bindScrollFn(e){
        let nowScrollY = e.target.scrollTop;
        this.setDirection(nowScrollY)
        this._onScroll&&this._onScroll(e)
        clearTimeout( this.sTimer )
        this.t1 = nowScrollY;
        this.sTimer = setTimeout(() => {
            this.scrollWhithHandle()
        }, 30);
        if( nowScrollY == 0 ){
            this.element.scrollTop = this.backYdistance;
            return
        }
        if( this.firstChild.offsetHeight - (this.element.offsetHeight + nowScrollY) <= this.threshold && this.threshold > 0 && this.direction != -1 ){
            clearTimeout( this.loadFnTimer )
            this.loadFnTimer = setTimeout(() => {
                //console.log('到达指定区间了')
                this._onLoadFn&&this._onLoadFn()
            }, 30);
        }
    },
    scrollWhithHandle(){
        if(this.inScrollBack)return
        let _scrollTop = this.element.scrollTop;
        this.t2 = _scrollTop;
        if( this.t1 == this.t2 ){
            //console.log('滚动结束了')
            this._onScrollEnd&&this._onScrollEnd()
            if( this.isToTop(_scrollTop) ){
                //console.log('到顶了')
                this._atTheTop&&this._atTheTop()
            }
            if( this.isToBottom(_scrollTop) ){
                this._atTheBottom&&this._atTheBottom();
            }
        }
    },
    setDirection(nowScrollY){
        if(nowScrollY > this.lastScrollY){
            this.direction = 1;
        }else{
            this.direction = -1;
        }
        this.lastScrollY = nowScrollY;
    },
    isToTop(scrollTop){
        return scrollTop == this.backYdistance;
    },
    isToBottom(scrollTop){
        return this.firstChild.offsetHeight - (scrollTop+this.element.offsetHeight) == 0;
    }
}