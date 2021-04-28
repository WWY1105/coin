<template>
<div class="halo-home container-fluid">
    <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section section1">
            <img class="bg1-img d-none d-lg-block " :src="bg1Img" />
            <img class="gold-coins-img d-none d-lg-block " :src="goldCoinsImg" />
            <!-- phone -->
            <img :src="m_bg_2" alt="" class="m_bg_2 d-block d-lg-none d-xl-block">
            <img :src="m_bg_1" alt="" class="m_bg_1 d-block d-lg-none d-xl-block">
            <img :src="m_bg_system" alt="" class="m_bg_system d-block d-lg-none d-xl-block">
            <div class="home-con">
                <div class="introduce-con">
                    <div class="introduce-word">
                        <div class="introduce-title">HALO Infinite Financial System</div>
                        <!-- phone -->
                        <span class="midline d-block d-lg-none d-xl-block"></span>
                        <div class="introduce-text">
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
        <div class="section">
            <!-- <div class="home-con"> -->
            <div class="guide-con d-flex">
                <div class="guide-card guide-card1">
                    <div class="guide-title">Build your DAPP</div>
                    <div class="guide-text">Explore the world of DEFI projects with</div>
                    <div class="guide-text2">3 easy steps.</div>
                </div>
                <div class="guide-card guide-card2">
                    <div class="guide-title2">Build your DAPP</div>
                    <div class="row">
                        <div class="guide-text3 col-sm-6 col-lg-12">
                            <div>Support</div>
                            <div>HashPai & MATEMASK Wallet</div>
                        </div>
                        <div class="col-sm-6 col-lg-12">
                            <Button type="primary" class="btn click-btn" @click="jumpTo('down-wrap')">
                                CLICK
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="guide-card guide-card2">
                    <div class="guide-title2">Get assets</div>
                    <div class="row">
                        <div class="guide-text3 col-sm-6 col-lg-12">
                            <div class="guide-text3">
                                <div>Convert selected coins via</div>
                                <div>HALO Bridge</div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-12">
                            <Button type="primary" class="btn click-btn" @click="jumpTo('bridge-con')">
                                CLICK
                            </Button>
                        </div>
                    </div>
                    </div>
                    <div class="guide-card guide-card2">
                        <div class="guide-title2">Explore projects on HALO System</div>
                        <Button type="primary" class="click-btn2">
                            Stay Tuned...
                        </Button>
                    </div>
                </div>
                <!-- </div> -->
            </div>
            <div class="section">
                <div class="bridge-con-wrap">
                    <img class="home-left-img" :src="homeLeftImg" />
                    <img class="home-left-img2" :src="homeLeftImg" />
                    <div class="bridge-con" id="bridge-con">
                        <div class="bridge-hd">
                            <div class="bridge-line"></div>
                            <div class="bridge-title">HALO Bridge</div>
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
                            <img class="bg2-img" :src="bg2Img" />
                            <Button type="primary" class="con-btn click-btn">
                                CONNECT
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="down-wrap" id="down-wrap">
                    <div class="down-con">
                        <div class="down-title">GET YOUR WALLET</div>
                        <div class="down-left">
                            <img class="app-ex-img" :src="appExImg" />
                            <div class="down-left-sup">
                                <img class="mm-logo-img" :src="mmLogoImg" />
                                <div class="sup-text">Supported</div>
                                <div>
                                    <img class="down-img" :src="iconAppleLogoImg" />
                                    <img class="down-img" :src="iconGoogleLogoImg" />
                                    <img class="down-img" :src="iconChromeLogoImg" />
                                </div>
                            </div>
                        </div>
                        <div class="down-line">
                            <div class="down-line-l"></div>
                            <div class="down-line-t">or</div>
                            <div class="down-line-l"></div>
                        </div>
                        <div class="down-right">
                            <img class="hashpay-img" :src="hashpayImg" />
                        </div>
                    </div>
                </div>
            </div>
    </full-page>

</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

// import { Button } from 'antd';
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
import m_bg_1 from '@/assets/images/phone/m_bg_1.png'
export default {
    components: {},
    // 定义属性
    data() {
        return {
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
        jumpTo(id) {
            document.querySelector('#' + id).scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        // this.$refs.fullpage.api.destroy('all');

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
