<template>
<div class="container-fluid">
    <!-- <header>
        <div class="container-fluid">
            <div class="logoBox"> <img src="../assets/index/logo.png" alt="" class="logo"></div>
        </div>
    </header> -->
    <full-page :options="options" ref="fullpage">

              <div class="section">

                        first section

                  </div>

              <div class="section footerH">

                        second section

                  </div>
        <div class="section footerH">

                        second section

                  </div>
        <div class="section footerH">

                        second section

                  </div>

    </full-page>

</div>
</template>

<script>
import Swiper from 'swiper'
export default {
    data() {
        return {
            options: { //整屏插件vue-fullpage选项

                licenseKey: null,

                verticalCentered: true, //定义每一页的内容是否垂直居中

                afterLoad: this.afterLoad, //滚动到某一屏后的回调函数

                // scrollOverflow: true,//内容超过满屏后显示滚动条

                controlArrows: true, //是否通过箭头控制slide幻灯片

                loopHorizontal: true, //slide幻灯片是否循环滚动

                autoScrolling: false, //true则是一滚动就是一整屏

                onLeave: this.onLeave, //滚动前的回调函数，

            },
        };
    },

    mounted() {
        let that = this;
        // that.$refs.fullpage.api.setAutoScrolling(true)
        let width = document.documentElement.clientWidth;
        let bodyWidth = document.body.getBoundingClientRect().width;
        let init = () => {

            document.documentElement.style.fontsize = width / 10 + 'px';

        }
        //首次加载是计算
        init();

        //添加监听，窗口发生变化时计算init
       window.onresize = () => {
            console.log('resize');
            console.log(bodyWidth)
            if (bodyWidth < 500) {
                console.log('小于')
                that.$refs.fullpage.api.setAutoScrolling(true)
                //   that.options.autoScrolling=true;
            }
            if (bodyWidth > 500) {
                console.log('da于')
                that.$refs.fullpage.api.setAutoScrolling(false)
            }
        };
        window.addEventListener('orientationchange', init);
    }
}
</script>

<style lang="less" scoped>
.swiper-container {
    height: 500px;
    width: 100%;

    .swiper-wrapper {
        .swiper-slide {
            width: 100%;
            height: 100%;
            background-color: #42b983;
            text-align: center;
            line-height: 500px;
        }
    }
}
</style>
