/**
 * 
 * @param {*} element 接受css的class和id,以及html元素标签, (body)默认
 * @param {*} direction 横向：landscape 垂直：vertical(默认)
 */
const disTouchMove = function(option){
    this.element = !option.element ? 'body' : option.element;
    this.direction = option.direction || 'vertical';
    this.startX = this.startY = 0;
    this._init(this.element, this.direction)
}
disTouchMove.prototype = {
    _init: function(element) {
        let _ele = document.querySelectorAll(element)
        if(!_ele.length){
            console.log('element对象不存在')
            return
        }
        if(_ele.length){
            _ele.forEach( t => {
                this._disTouchMove(t)
                if(t.childNodes.length){
                    this.dElement(t)
                }
            })
        }
        // else{
        //     this._disTouchMove(_ele)
        // }
    },
    dElement: function(element){
        if ( !element.childNodes.length ){
            this._disTouchMove(element)
        }else{
            element.childNodes.forEach(t => {
                if( t.childNodes.length ){
                    this.dElement(t)
                }
                this._disTouchMove(t)
            })
        }
    },
    _disTouchMove: function(element){
        element.addEventListener('touchstart', (e) => {
            let _touch = e.targetTouches[0];
            this.startX = _touch.pageX
            this.startY = _touch.pageY
        })
        element.addEventListener('touchmove', (e) => {
            let _touch = e.targetTouches[0],
                diffX = Math.abs(_touch.pageX - this.startX),
                diffY = Math.abs(_touch.pageY - this.startY);
            if( diffX < diffY && this.direction == 'vertical' ){
                e.stopPropagation()
                e.preventDefault()
            }
            if( diffX > diffY && this.direction == 'landscape' ){
                e.stopPropagation()
                e.preventDefault()
            }
        }, false)
    }
}