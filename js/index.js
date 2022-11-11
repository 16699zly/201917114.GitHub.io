
    function lunboImg() {

    function PlayImg() {
        // 获取元素并初始化
        this.img = document.querySelector('#lunbo');
        this.span = document.querySelectorAll('span');
        this.left = document.getElementById('left');
        this.right = document.getElementById('right');
        this.index = 0;
        this.timer = null;

        // 播放当前的图片
        this.show = function() {
            this.img.src = `../upload/lunbo/index-lb-${this.index}.jpg`;
        }.bind(this);

        // 自动进行轮播
        PlayImg.prototype.autoPlay = function() {
            console.log(this);
            this.timer = setInterval(function() {
                if (this.index == this.span.length) {
                    this.index = 0;
                }
                this.show();
                this.index++;
            }.bind(this), 4000);
        }.bind(this);

        // 点击圆点切换图片
        PlayImg.prototype.pointCtrlPlay = function() {
            console.log(this);
            for (let i = 1; i < this.span.length; i++) {
                this.span[i].onclick = function() {
                    this.index = i;
                    this.show();
                }.bind(this);
            }
        }.bind(this);

        // 左右箭头切换
        PlayImg.prototype.ctrlPlay = function() {
            console.log(this);

            this.left.onclick = function() {
                if (this.index <= 1) {
                    this.index = this.span.length - 1;
                } else {
                    this.index-=2;
                }
                this.show();
            }.bind(this);

            this.right.onclick = function() {
                if (this.index >= this.span.length-1) {
                    this.index = 0;
                }
                this.index++;
                this.show();
            }.bind(this);
        }.bind(this);


        // 监听鼠标的移入移出
        PlayImg.prototype.eventListener = function() {
            console.log(this);
            for (let i = 0; i < this.span.length; i++) {
                this.span[i].addEventListener('mouseenter', function() {
                    clearInterval(this.timer);
                    this.index = i;
                    this.show();
                }.bind(this), false);
                this.span[i].addEventListener('mousemove', function() {
                    clearInterval(this.timer);
                    this.show();
                    this.autoPlay();
                }.bind(this), false);
            }
        }.bind(this);
    }
    return PlayImg;
}