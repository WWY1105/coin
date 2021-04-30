<template>
<div class="halo-home container-fluid">
    <full-page ref="fullpage" :options="options" id="fullpage">
        <!-- 第一屏 -->
        <div class="section section1">
            <!-- phone -->
             <img src="../../assets/images/phone/m_scroll.png" alt="" class="m_scroll d-sm-block d-lg-none">
            <img class="bg1-img d-none d-lg-block " :src="bg1Img" />
            <img class="gold-coins-img d-none d-lg-block " :src="goldCoinsImg" />
            <!-- phone -->
            <img :src="m_bg_2" alt="" class="m_bg_2 d-sm-block d-lg-none">
            <img :src="m_bg_1" alt="" class="m_bg_1 d-sm-block d-lg-none">
            <img :src="m_bg_system" alt="" class="m_bg_system d-sm-block d-lg-none">
            <div class="home-con">
                <div class="introduce-con">
                    <div class="introduce-word row">
                        <div class="introduce-title col-12 col-lg-10">HALO Infinite Financial System</div>
                        <!-- phone -->
                        <span class="midline d-sm-block d-lg-none"></span>
                        <div class="introduce-text col-12 col-lg-6">
                            HALO INFINITI Financial System - <strong>HALO NETWORK </strong>
                            is an efficient blockchain network system. HALO NETWORK provide one stop
                            integration of DeFi application level with decentralized, energy
                            efficient and and low-cost transaction structure with traditional
                            financial instruments.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第二屏 -->
        <div class="section">
             <!-- phone -->
             <img src="../../assets/images/phone/m_scroll.png" alt="" class="m_scroll d-sm-block d-lg-none">
            <!-- <div class="home-con"> -->
            <div class="flexCenter flexColumn">
                <div class="guide-con d-flex">
                    <img :src="bg_light" alt="" class="bg_light" />
                    <div class="guide-card guide-card1">
                        <div class="guide-title">Build your DAPP</div>
                        <div class="guide-text">Explore the world of DEFI projects with</div>
                        <div class="guide-text2">3 easy steps.</div>
                    </div>

                    <div class="guide-card guide-card2">
                        <div class="guide-title2">Build your DAPP</div>
                        <div class="row">
                            <div class="guide-text3 col-7 col-lg-12">
                                <div>Support</div>
                                <div>HashPai & MATEMASK Wallet</div>
                            </div>
                            <div class="col-5 col-lg-12 flexStart">
                                <Button type="primary" class="btn click-btn float-sm-right" @click="jumpTo('down-wrap')">
                                    CLICK
                                </Button>
                            </div>
                        </div>
                    </div>
                    <!-- phone -->
                    <img :src="m_next" class="guide-card-line d-sm-block d-lg-none" alt="">
                    <div class="guide-card guide-card2">
                        <div class="guide-title2">Get assets</div>
                        <div class="row">
                            <div class="col-7 col-lg-12">
                                <div class="guide-text3">
                                    <div>Convert selected coins via</div>
                                    <div>HALO Bridge</div>
                                </div>
                            </div>
                            <div class="col-5 col-lg-12 flexStart">
                                <Button type="primary" class="btn click-btn float-sm-right" @click="jumpTo('bridge-con')">
                                    CLICK
                                </Button>
                            </div>
                        </div>
                    </div>
                    <!-- phone -->
                    <img :src="m_next" class="guide-card-line d-sm-block d-lg-none" alt="">
                    <div class="guide-card guide-card2">
                        <div class="row">
                            <div class="guide-title2 col-7 col-lg-12 ">Explore projects on HALO System</div>
                            <div class="col-5 col-lg-12 flexStart">
                                <Button type="primary" class="click-btn2">
                                    Stay Tuned...
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </div> -->
        </div>
        <!-- 第三屏 -->
        <div class="section section3">
             <!-- phone -->
             <img src="../../assets/images/phone/m_scroll.png" alt="" class="m_scroll d-sm-block d-lg-none">
            <!-- phone -->
            <img class="m_bg_3 d-sm-block d-md-none d-lg-none" :src="m_bg_3" />
            <div class="flexCenter flexColumn">
                <div class="bridge-con-wrap">
                    <img class="home-left-img" :src="homeLeftImg" />
                    <img class="home-left-img2" :src="homeLeftImg" />

                    <div class="bridge-con" id="bridge-con">
                        <div class="bridge-hd">
                            <div class="bridge-line d-none d-lg-block"></div>
                            <div class="bridge-title">HALO Bridge</div>
                            <!-- phone -->
                            <div class="bridge-title-line d-sm-block d-lg-none"></div>
                            <div class="bridge-text">
                                The HALO Bridge is a cross-chain bridging service that aims to increase
                                interoperability between different blockchains. HALO NETWORK was created
                                to help users transfer the digital assets such as BTC, ETH with the
                                <span class="introduce-text-red">
                                    safe, fast and most secure way
                                </span>
                                to HALO chains.
                            </div>
                        </div>
                        <div class="bridge-bt">
                            <img class="bg2-img d-none d-sm-none d-md-block d-lg-block" :src="bg2Img" />
                            <!-- phone -->
                            <img class="bg2-img d-sm-block d-md-none d-lg-none" :src="m_bg_bridge" />

                            <Button type="primary" class="con-btn click-btn">
                                CONNECT
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 444444 -->
        <div class="section section4">
             <!-- phone -->
             <img src="../../assets/images/phone/m_scroll.png" alt="" class="m_scroll d-sm-block d-lg-none">
            <div class="down-wrap" id="down-wrap">
                <div class="flexCenter flexColumn">
                    <div class="down-con">
                        <!-- phone -->
                        <img :src="m_bg_4" alt="" class="m_bg_4 d-sm-block d-md-none d-lg-none">
                        <div class="down-title">GET YOUR WALLET</div>
                        <!-- phone -->
                        <div class="tabBox d-sm-block d-md-none d-lg-none">
                            <div class="content flexCenter">
                                <div :class="active==1?'item flexCenter leftItem active':'item flexCenter leftItem'" @click="changeTab(1)">
                                    <img :src="active==1?m_mmlogo_s_w:m_mmlogo_s_b" alt="" class="icon">
                                </div>
                                <div :class="active==2?'item flexCenter rightItem active':'item flexCenter rightItem'" @click="changeTab(2)">
                                    <img :src="active==2?m_hashpay_s_w:m_hashpay_s_b" alt="" class="icon">
                                </div>
                            </div>
                        </div>
                        <div class="row downBox">
                            <!-- 左边 -->
                            <div :class="active==1?'down-left col-12 col-lg-6':'hide down-left col-12 col-lg-6'">
                                <img class="app-ex-img d-none d-sm-none d-md-block d-lg-block" :src="appExImg" />
                                <!-- phone -->
                                <img :src="m_download_metamask" alt="" class="app-ex-img d-sm-block d-md-none d-lg-none">

                                <div class="down-left-sup ">
                                    <img class="mm-logo-img d-none d-sm-none d-md-block d-lg-block" :src="mmLogoImg" />
                                    <!-- phone -->
                                    <img :src="m_mm_logo" alt="" class="m_mm_logo  d-sm-block d-md-block d-lg-none">
                                    <div class="sup-text">Supported</div>
                                    <div class="flexStart flexWrap">
                                        <img class="down-img float-sm-right" :src="iconAppleLogoImg" />
                                        <img class="down-img float-sm-right" :src="iconGoogleLogoImg" />
                                        <img class="down-img float-sm-right" :src="iconChromeLogoImg" />
                                    </div>
                                </div>
                            </div>
                            <!-- 右边 -->
                            <div :class="active==2?'down-right col-12 col-lg-6':'hide down-right col-12 col-lg-6'">
                                <img class="hashpay-img  d-sm-none d-md-block d-lg-block" :src="hashpayImg" />
                                <!-- phone -->
                                <img class="hashpay-img d-sm-block d-md-none d-lg-none" :src="m_download_hashpay" />
                                <Button type="primary" class="btn click-btn d-sm-block d-md-none d-lg-none" @click="jumpTo('down-wrap')">
                                    DOWNLOAD
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section5 d-sm-block d-md-none d-lg-none">
            <div class="footerPart flexCenter flexColumn">
                <div class="topPart flexCenter flexColumn">
                    <img class="m_connectlogo" src="../../assets/images/phone/m_connectlogo.png" alt="">
                    <div class="line"></div>
                    <p class="minText">Connect Us</p>
                </div>
                <div class="lastPart ">
                    <div class="flexSpace iconsBox">
                        <div class="item"> <img src="../../assets/images/phone/m_twitter.png" alt="">
                            <p>Twitter</p>
                        </div>
                        <div class="item"> <img src="../../assets/images/phone/m_telegram.png" alt="">
                            <p>Telegram</p>
                        </div>
                        <div class="item"> <img src="../../assets/images/phone/m_medium.png" alt="">
                            <p>Medium</p>
                        </div>
                    </div>
                    <p class="footerText">©2021 - 2022 HALO OS.All rights reserved.</p>
                </div>
            </div>

        </div>
    </full-page>

</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

// import { Button } from 'antd';
import bg_light from '@/assets/images/bg_light.png';
import bg2Img from '@/assets/images/bg2.png';
import goldCoinsImg from '@/assets/images/gold-coins.png';
import mmLogoImg from '@/assets/images/mm-logo.png';
import iconGoogleLogoImg from '@/assets/images/icon-google-logo.png';
import iconChromeLogoImg from '@/assets/images/icon-chrome-logo.png';
import iconAppleLogoImg from '@/assets/images/icon-apple-logo.png';
import appExImg from '@/assets/images/app-ex.png';
import hashpayImg from '@/assets/images/hashpay.png';
import homeLeftImg from '@/assets/images/home-left.png';
import bg1Img from '@/assets/images/bg1.jpg';
import m_bg_2 from '@/assets/images/phone/m_bg_2.png'
import m_bg_system from '@/assets/images/phone/m_bg_system.png';
import m_bg_1 from '@/assets/images/phone/m_bg_1.png';
import m_next from '@/assets/images/phone/m_next.png';
import m_bg_bridge from '@/assets/images/phone/m_bg_bridge.png';
import m_bg_3 from '@/assets/images/phone/m_bg_3.png';
import m_mmlogo_s_w from '@/assets/images/phone/m_mmlogo_s_w.png';
import m_hashpay_s_b from '@/assets/images/phone/m_hashpay_s_b.png';
import m_mm_logo from '@/assets/images/phone/m_mm_logo.png';
import m_download_metamask from '@/assets/images/phone/m_download_metamask.png';
import m_bg_4 from '@/assets/images/phone/m_bg_4.png';
import m_download_hashpay from '@/assets/images/phone/m_download_hashpay.png';

import m_hashpay_s_w from '@/assets/images/phone/m_hashpay_s_w.png'
import m_mmlogo_s_b from '@/assets/images/phone/m_mmlogo_s_b.png'
export default {
    components: {},
    // 定义属性
    data() {
        return {
            active: 1,
            m_bg_4: m_bg_4,
            m_mmlogo_s_b: m_mmlogo_s_b,
            m_hashpay_s_w: m_hashpay_s_w,
            m_download_hashpay: m_download_hashpay,
            m_download_metamask: m_download_metamask,
            m_mm_logo: m_mm_logo,
            m_hashpay_s_b: m_hashpay_s_b,
            m_mmlogo_s_w: m_mmlogo_s_w,
            bg_light: bg_light,
            m_bg_3: m_bg_3,
            m_bg_bridge: m_bg_bridge,
            m_next: m_next,
            m_bg_1: m_bg_1,
            m_bg_system: m_bg_system,
            m_bg_2: m_bg_2,
            bg1Img: bg1Img,
            goldCoinsImg: goldCoinsImg,
            bg2Img: bg2Img,
            mmLogoImg: mmLogoImg,
            iconGoogleLogoImg: iconGoogleLogoImg,
            iconChromeLogoImg: iconChromeLogoImg,
            iconAppleLogoImg: iconAppleLogoImg,
            appExImg: appExImg,
            hashpayImg: hashpayImg,
            homeLeftImg: homeLeftImg,
            options: {
                scrollOverflow: false,
                //字体是否随着窗口缩放而缩放
                resize: true,
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                scrollOverflow: false,
                scrollBar: false,
                keyboardScrolling: false, //是否可以使用键盘方向键导航，默认为true
                continuousVertical: false, /// 是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop、loopBottom不兼容和，不要同时设置
                menu: '#menu',
                // autoScrolling: false,
                //每一页幻灯片的内容是否垂直居中
                verticalCentered: true,
                afterLoad: this.afterLoad,

            }
        }
    },
    // 计算属性，会监听依赖属性值随之变化
    computed: {

    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        changeTab(index) {
            this.active = index;
        },
        jumpTo(id) {
            document.querySelector('#' + id).scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        },
        afterLoad: function (origin, destination, direction) {
            // console.log(origin, destination, direction);
            let index = destination.index;
            this.bus.$emit('pageChange', index)

        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        const that = this;

        window.addEventListener("resize", function () {
            var html = document.getElementsByTagName("html")[0];
            //获取屏幕宽度
            var pageWidth = html.getBoundingClientRect().width;
            console.log('宽度' + pageWidth);
            if (pageWidth < 800) {
                that.$refs.fullpage.init();
                that.$refs.fullpage.api.reBuild();
                that.$refs.fullpage.api.setAutoScrolling(true);
            } else {

                that.$refs.fullpage.api.destroy('all');

            }
        }, false); //自动跳转不需要刷新页面
    },
    beforeCreate() {}, // 生命周期 - 创建之前
    beforeMount() {}, // 生命周期 - 挂载之前
    beforeUpdate() {}, // 生命周期 - 更新之前
    updated() {}, // 生命周期 - 更新之后
    beforeDestroy() {}, // 生命周期 - 销毁之前
    destroyed() {}, // 生命周期 - 销毁完成
    activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
