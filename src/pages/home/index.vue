<template>
  <div>
    <div class="halo-home">
            <div class="home-con">
                <div class="introduce-con">
                    <img class="gold-coins-img" :src="goldCoinsImg"/>
                    <div class="introduce-word">
                        <div class="introduce-title">HALO Infinite Financial System</div>
                        <div class="introduce-text">
                            HALO INFINITI Financial System - <strong>HALO NETWORK </strong>
                            is an efficient blockchain network system. HALO NETWORK provide one stop
                            integration of DeFi application level with decentralized, energy
                            efficient and and low-cost transaction structure with traditional
                            financial instruments.
                        </div>
                    </div>
                </div>
                <div class="guide-con">
                    <div class="guide-card guide-card1">
                        <div class="guide-title">Build your DAPP</div>
                        <div class="guide-text">Explore the world of DEFI projects with</div>
                        <div class="guide-text2">3 easy steps.</div>
                    </div>
                    <div class="guide-card guide-card2">
                        <div class="guide-title2">Build your DAPP</div>
                        <div class="guide-text3">
                            <div>Support</div>
                            <div>HashPai & MATEMASK Wallet</div>
                        </div>
                        <Button
                            type="primary"
                            class="btn click-btn"
                            @click='down-wrap'
                        >
                            CLICK
                        </Button>
                    </div>
                    <div class="guide-card guide-card2">
                        <div class="guide-title2">Get assets</div>
                        <div class="guide-text3">
                            <div>Convert selected coins via</div>
                            <div>HALO Bridge</div>
                        </div>
                        <Button
                            type="primary"
                            class="btn click-btn"
                            @click={jumpTo.bind(this, 'bridge-con')}
                        >
                            CLICK
                        </Button>
                    </div>
                    <div class="guide-card guide-card2">
                        <div class="guide-title2">Explore projects on HALO System</div>
                        <Button type="primary" class="click-btn2">
                            Stay Tuned...
                        </Button>
                    </div>
                </div>
            </div>
            <div class="bridge-con-wrap">
                <img class="home-left-img" :src="homeLeftImg"/>
                <img class="home-left-img2" :src="homeLeftImg"/>
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
                        <img class="bg2-img" :src="bg2Img"/>
                        <Button type="primary" class="con-btn">
                            CONNECT
                        </Button>
                    </div>
                </div>
            </div>
            <div class="down-wrap" id="down-wrap">
                <div class="down-con">
                    <div class="down-title">GET YOUR WALLET</div>
                    <div class="down-left">
                        <img class="app-ex-img" :src="appExImg"/>
                        <div class="down-left-sup">
                            <img class="mm-logo-img" :src="mmLogoImg"/>
                            <div class="sup-text">Supported</div>
                            <div>
                                <img class="down-img" :src="iconAppleLogoImg"/>
                                <img class="down-img" :src="iconGoogleLogoImg"/>
                                <img class="down-img" :src="iconChromeLogoImg"/>
                            </div>
                        </div>
                    </div>
                    <div class="down-line">
                        <div class="down-line-l"></div>
                        <div class="down-line-t">or</div>
                        <div class="down-line-l"></div>
                    </div>
                    <div class="down-right">
                        <img class="hashpay-img" :src="hashpayImg"/>
                    </div>
                </div>
            </div>
        </div>
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


export default {
  components: {
  },
  // 定义属性
  data() {
    return {
      goldCoinsImg:goldCoinsImg,
      bg2Img:bg2Img,
      mmLogoImg:mmLogoImg,
      iconGoogleLogoImg:iconGoogleLogoImg,
      iconChromeLogoImg:iconChromeLogoImg,
      iconAppleLogoImg:iconAppleLogoImg,
      appExImg:appExImg,
      hashpayImg:hashpayImg,
      homeLeftImg:homeLeftImg
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
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

<style lang='less' scoped>

 .halo-home {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    .home-con {
        width: 100%;
        margin: 0 auto;
    }

    .introduce-con {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 400px;

        .gold-coins-img {
            position: absolute;
            top: 16px;
            right: 24px;
            width: 708px;
            z-index: 0;
        }

        .introduce-word {
            z-index: 1;
            padding-top: 117px;
            width: 620px;
        }

        .introduce-title {
            font-size: 40px;
            font-weight: 700;
            color: rgba(43, 43, 43, 1);
        }

        .introduce-text {
            margin-top: 25px;
            font-size: 14px;
            color: #807677;
            line-height: 20px;
        }
    }

    .guide-con {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height: 225px;
        background: #2b2b2b;
        border-radius: 10px;
        padding-left: 43px;
        padding-right: 27px;

        .guide-card {
            flex: 1;
            padding-top: 35px;

            .guide-title {
                font-size: 24px;
                font-weight: bold;
                color: #fff;
                line-height: 29px;
            }

            .guide-text {
                margin-top: 16px;
                font-size: 14px;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.4);
                line-height: 20px;
            }

            .guide-text2 {
                margin-top: 4px;
                font-size: 14px;
                font-weight: 400;
                color: #fff;
                line-height: 20px;
            }
        }

        .guide-card2 {
            width: 197px;

            .guide-title2 {
                font-size: 16px;
                font-weight: 600;
                color: #fff;
                line-height: 22px;
            }

            .guide-text3 {
                margin-top: 10px;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.4);
            }

            .click-btn {
                margin-top: 30px;
            }

            .click-btn2 {
                margin-top: 80px;
                width: 160px;
                height: 44px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
                color: rgba(255, 255, 255, 0.4);
                border-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    .bridge-con-wrap {
        position: relative;
        width: 100%;

        .home-left-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 252px;
        }

        .home-left-img2 {
            position: absolute;
            bottom: -60px;
            right: 0;
            width: 126px;
            transform: rotate(180deg);
        }
    }

    .bridge-con {
        padding-top: 80px;
        width: 100%;
        margin: 0 auto;

        .bridge-hd {
            display: flex;
            flex-direction: column;
            align-items: center;

            .bridge-line {
                width: 90px;
                height: 6px;
                background: #2b2b2b;
            }

            .bridge-title {
                margin-top: 30px;
                height: 43px;
                font-size: 36px;
                font-weight: bold;
                line-height: 43px;
                color: #2b2b2b;
            }

            .bridge-text {
                margin-top: 20px;
                width: 731px;
                height: 66px;
                font-size: 16px;
                line-height: 22px;
                text-align: center;
            }

            .introduce-text-red {
                font-weight: 600;
                color: rgba(177, 35, 44, 1);
            }
        }

        .bridge-bt {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 44px;

            .bg2-img {
                width: 960px;
            }

            .con-btn {
                margin-top: -22px;
            }
        }
    }

    .down-wrap {
        margin-top: 120px;
        width: 100%;
        height: 370px;
        background-color: rgba(255, 246, 247, 1);

        .down-con {
            position: relative;
            display: flex;
            width: 100%;
            margin: 0 auto;
        }

        .down-title {
            position: absolute;
            top: -20px;
            left: 0;
            font-size: 36px;
            font-weight: bold;
            color: #2b2b2b;
            line-height: 43px;
        }

        .down-left {
            display: flex;
        }

        .app-ex-img {
            margin-top: 50px;
            width: 200px;
            height: 320px;
        }

        .down-left-sup {
            margin-top: 64px;
            margin-left: 41px;
        }

        .mm-logo-img {
            width: 344px;
        }

        .sup-text {
            margin-top: 18px;
            margin-bottom: 24px;
            font-size: 20px;
            font-weight: 600;
            color: #807677;
            line-height: 28px;
        }

        .sup-app {
            display: flex;
            width: 160px;
            height: 44px;
            background: #161616;
            border-radius: 4px;
            color: #fff;
        }

        .down-img {
            width: 160px;
            margin-right: 10px;
            margin-bottom: 10px;
        }

        .down-line {
            margin: 40px 0;
            margin-left: 66px;
            width: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }

        .down-line-l {
            width: 2px;
            height: 110px;
            background: rgba(216, 216, 216, 0.5);
        }

        .down-line-t {
            font-size: 30px;
            font-weight: bold;
            color: #aaa;
            line-height: 36px;
        }

        .down-right {
            margin-left: 62px;
        }

        .hashpay-img {
            width: 459px;
        }
    }
}

</style>







      

