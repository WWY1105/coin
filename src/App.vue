<template>
<div id="app">
    <div class="contiainer-fiuld">
        <HaloHeader></HaloHeader>
        <!-- <div class="container"> -->
        <router-view />
        <!-- </div> -->
        <HaloFooter></HaloFooter>
    </div>

</div>
</template>

<script>
import HaloHeader from '@/components/header/index';
import HaloFooter from '@/components/footer/index';
export default {
    name: 'App',
    components: {
        HaloHeader,
        HaloFooter
    },
    mounted() {
        var PixelRatio = 1 / window.devicePixelRatio;
        console.log(window.devicePixelRatio); //像素比
        document.write(
            '<meta name="viewport" content="width=device-width, initial-scale=' +
            PixelRatio +
            ", minimum-scale=" +
            PixelRatio +
            ", maximum-scale=" +
            PixelRatio +
            ',user-scalable=no"/>'
        ); //动态设置视口
        function setSize() {
            //动态设置字体大小，自适应
            var html = document.getElementsByTagName("html")[0];
            //获取屏幕宽度
            var pageWidth = html.getBoundingClientRect().width;
            console.log(pageWidth);
            html.style.fontSize = pageWidth / 15 + "px";
        }
        setSize();
        window.addEventListener("resize", setSize, false); //自动跳转不需要刷新页面
        window.addEventListener("orientationchange", setSize, false);
    }

}
</script>

<style>
<<<<<<< HEAD
@import url('./assets/css/index.less');

#app,
body,
html {
    padding: 0;
    margin: 0;
=======
#app {
   
}
.flexStart{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.w100{
>>>>>>> eeda406bc0e82d64780c2bb2023fc6b6b62135c2
    width: 100%;
}
</style>
