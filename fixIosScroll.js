const fixIosScroll = function(option) {
    this.element = option.element;
    this.firstChild = this.element.firstElementChild;
    this.lastTime = 0;
    this.incremental = 0; //增长的值
    this.direction = 1; //滚动方向,向上:1 向下:-1
    this.lastScrollY = 0;
    this.scrollYDistance = 1; //滚动拉回到Y轴顶端或底端像素
    this.inAnimation = false; //是否处于滚动回拉中
    this.threshold = option.threshold?option.threshold:0;
    this._atTheTop = option.atTheTop
    this._atTheBottom = option.atTheBottom
    this._loadFn = option.loadFn
    
    this._init(option);
}
fixIosScroll.prototype = {
    _init: function(){
        this.ScrollBackFn()
        this.element.addEventListener('scroll', (e) => {
            this.bindScrollFn(e)
            e.preventDefault()
            e.stopPropagation()
        }, false)
    },
    bindScrollFn(e){
        let nowScrollY = e.target.scrollTop
        if(nowScrollY > this.lastScrollY){
            this.direction = 1
        }else{
            this.direction = -1
        }
        this.lastScrollY = nowScrollY
        this.ScrollBackFn()
    },
    ScrollToTarget(){
        if (this.incremental > this.scrollYDistance) {
            this.inAnimation = false
            this.incremental = 0
            return
        }
        this.element.scrollTop += this.direction*this.incremental++
        setTimeout(() => {
            this.ScrollToTarget()
        }, 30);
    },
    ScrollBackFn(){
        if(this.firstChild.offsetHeight < this.element.offsetHeight)return
        let _top = this.element.scrollTop;
        if( this.firstChild.offsetHeight - (this.element.offsetHeight + _top) <= this.threshold && this.threshold > 0 ){
            //console.log('到指定区间了')
            this._loadFn&&this._loadFn()
        }
        if ( (_top == 0 || _top == this.firstChild.offsetHeight - this.element.offsetHeight) && !this.inAnimation ) {
            if( _top == 0 ){
                //console.log('到顶了')
                this._atTheTop&&this._atTheTop()
            }
            if( _top == this.firstChild.offsetHeight - this.element.offsetHeight ){
                //console.log('到底了')
                this._atTheBottom&&this._atTheBottom()
            }
            this.inAnimation = true
            this.incremental = 0
            this.ScrollToTarget()
        }
    }
}