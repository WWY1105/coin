<template>
<div class="halo-genesis">
     <!-- phone -->
     <!-- <img :src="m_bg_2" alt="" class="m_bg_2 d-sm-block d-lg-none"> -->
    <div class="bridge-con">
        <div class="bridge-top">
            <div class="top-title">HALO Genesis</div>
            <div class="top-text">
                Participants in HALO Genesis will be the earliest HALO Finance adopters,
                committed ETH will support the HOLP POOL as liquidity
            </div>
        </div>
        <div class="bridge-cen row">
            <div class=" col-12 col-lg-3">
                <div class="cen-left">
                    <div class="cen-left-box1 d-none d-md-none d-lg-block">Status</div>
                    <!-- phone -->
                    <div class="cen-left-box1 d-md-block d-lg-none">Status</div>

                    <div class="row w100">
                        <div class="cen-left-box col-12 col-lg-12">
                            <div class="box-title">Rate</div>
                            <div class="box-con">1 ETH : 5000 HO</div>
                        </div>
                        <div class="cen-left-box col-6 col-lg-12">
                            <div class="box-title">Minted</div>
                            <div class="box-con">10000000 HO</div>
                        </div>
                        <div class="cen-left-box col-6 col-lg-12 ">
                            <div class="box-title">Destroyed</div>
                            <div class="box-con">10000000 HO</div>
                        </div>
                        <div class="cen-left-box col-6 col-lg-12 ">
                            <div class="box-title">Total Account</div>
                            <div class="box-con">10000000</div>
                        </div>
                        <div class="cen-left-box col-6 col-lg-12 ">
                            <div class="box-title">HOlppool</div>
                            <div class="box-con">10000000 ETH</div>
                        </div>
                    </div>

                    <img class="bridge-side d-none d-md-none d-lg-block" :src="bridgeSide" />
                </div>
            </div>
            <div class=" col-12 col-lg-9">
                <div class="cen-right">
                    <!-- pc -->
                    <div class="right-change d-none d-md-none d-lg-block">
                        <div class="row right-change-top">
                            <div class="change-title col-lg-6">
                                <img class="form-box-icon" :src="bridgeIcHalo" />HALO
                                Network
                            </div>
                            <div class="col-lg-6 btnBox">
                                <Button type="primary" class="btn form-btn">
                                    CONECT WALLET
                                </Button>
                            </div>
                        </div>
                        <div class="row right-change-bot">
                            <div class="item">
                                <div class="change-bal">Wallet address</div>
                                <div class="change-num">0X111…11111</div>
                            </div>
                            <div class="item">
                                <div class="change-bal">HRC-ETH Balance</div>
                                <div class="change-num">0.1</div>
                            </div>
                            <div class="item btnBox">
                                <Button type="primary" class="btn form-btn">
                                    EXCHANGE
                                </Button>
                            </div>
                        </div>
                    </div>
                    <!-- phone -->
                    <div class="right-change phone d-sm-block d-md-block d-lg-none">
                        <div class="right-change-top">
                            <div class="change-title">
                                <img class="form-box-icon" :src="bridgeIcHalo" />HALO
                                Network
                            </div>

                        </div>
                        <div class=" right-change-bot">
                            <div class="row w100">
                                <div class="item item1 col-6">
                                    <div class="change-bal">Wallet address</div>
                                    <div class="change-num">0X111…11111</div>
                                </div>
                                <div class="col-6 btnBox">
                                    <Button type="primary" class="btn form-btn">
                                        CONECT WALLET
                                    </Button>
                                </div>
                            </div>

                            <div class="row w100">
                                <div class="item col-6 ">
                                    <div class="change-bal">HRC-ETH Balance</div>
                                    <div class="change-num">0.1</div>
                                </div>
                                <div class="item col-6  btnBox">
                                    <Button type="primary" class="btn form-btn">
                                        EXCHANGE
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-form">
                        <div class="form-hd">Committed HRC-ETH</div>
                        <div class="right-inp-wrap row">
                            <Input class="right-inp col-12 col-lg-6" placeholder="0.1～10000" />
                            <div class="right-inp-ext col-12  col-lg-6">
                                <span class="ext-text1">Estimated receive</span>
                                <span class="ext-text2">0 HO</span>
                            </div>
                        </div>
                    </div>
                    <div class="right-form flex flexColumn">
                        <div class="form-hd">Synchronize Voting Node</div>
                        <Input class="right-inp borderInput" />
                        <div class="form-text">
                            The HO obtained during HALO Genesis event will vote for this node at
                            the same time
                        </div>
                    </div>
                    <Button type="primary" class="btn-g gen-btn">
                        COMMIT TO GENESIS
                    </Button>
                    <div class="right-bt last">
                        <div class="mb5 title">Rules of Genesis event:</div>
                        <div class="mb5">
                            - The ratio of HALO reward that defines 1ETH:10000HO
                        </div>
                        <div class="mb5">
                            - The cost of ETH will increase by 0.001 if increasing or destroying
                            1000 HO
                        </div>
                        <div class="mb20">
                            - 2000 HO will destroy automatically if without any genesis orders
                            within 60mins and will relocking
                        </div>
                        <div class="mb5">Example: </div>
                        <div class="mb5">
                            If the first 0-1000 HO requires 0.1 ETH, and 1001-2000 HO requires
                            0.101 ETH. The cost of ETH will increase by 0.001 when every 1000 HO
                            staked or destroyed. So, the cost of last 1000 HO is 10.099 ETH:
                            10000 HO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import { Button, Input } from 'antd';
import bridgeSide from '@/assets/images/bridge-side.png';
import bridgeIcHalo from '@/assets/images/bridge-ic-halo.png';
import m_bg_2 from '@/assets/images/phone/m_bg_2.png'
export default {
    data() {
        return {
            m_bg_2:m_bg_2,
            bridgeSide: bridgeSide,
            bridgeIcHalo: bridgeIcHalo
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
