<template>
<div class="halo-bridge">
    <div class="bridge-con container-lg">
        <div class="bridge-top ">
            <div class="top-title">HALO Bridge</div>
            <div class="top-text">
                The safe, fast and most secure way to convert the digital assets to HALO
                chains.
            </div>
        </div>
        <div class="bridge-cen row ">
            <div class=" col-12 col-lg-3">
                <div class="cen-left">
                    <div class="cen-left-box1 d-none d-md-none d-lg-block">Halo Bridge was issued assets</div>
                    <!-- phone -->
                    <div class="cen-left-box1 d-md-block d-lg-none">Halo Bridge was issued assets</div>
                    <div class="row w100">
                        <div class="cen-left-box  col-6 col-lg-12">
                            <div class="box-title">Token</div>
                            <div class="box-con">HRC-ETH</div>
                        </div>
                        <div class="cen-left-box  col-6 col-lg-12">
                            <div class="box-title">Amount</div>
                            <div class="box-con">10000000</div>
                        </div>
                    </div>
                    <img class="bridge-side d-none d-md-none d-lg-block" :src="bridgeSide" />
                </div>
            </div>
            <div class=" col-12 col-lg-9">
                <div class="cen-right ">
                    <div class="right-form">
                        <div class="form-hd">Asset</div>
                        <a-select class="right-sel" defaultValue="lucy">
                            <a-select-option value="jack">Jack</a-select-option>
                            <a-select-option value="lucy">Lucy</a-select-option>
                            <a-select-option value="disabled" disabled>
                                Disabled
                            </a-select-option>
                            <a-select-option value="Yiminghe">yiminghe</a-select-option>
                        </a-select>
                    </div>
                    <div class="right-form-wrap row">
                        <div class="right-form col-6 col-lg-12">
                            <div class="form-hd">From</div>
                            <div class="form-box">
                                <div class="form-box-tp">
                                    <div class="flexStart">
                                        <img class="form-box-icon" :src="bridgeMask" />
                                        <div class="form-box-text">{{nick}}</div>
                                    </div>
                                    <Button type="primary" class="btn-l form-btn">
                                        CONNECT WALLET
                                    </Button>
                                    <!-- <img class="form-box-sel" :src="bridgeSelect" @click="openModal" /> -->
                                </div>
                                <!-- <div>

                                    </div> -->
                            </div>
                        </div>
                        <div class="right-form col-6 col-lg-12">
                            <div class="form-hd">To</div>
                            <div class="form-box">
                                <div class="form-box-tp">
                                    <img class="form-box-icon" :src="bridgeIcHalo" />
                                    <div class="form-box-text">HALO Network</div>
                                </div>
                                <div class="form-box-bt">
                                    <Input class="bt-inp" placeholder="Enter HALO Wallet address"></Input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-form">
                        <div class="form-hd">Amount</div>
                        <Input class="right-inp" />
                    </div>
                    <Button type="primary" class="btn con-btn">
                        CONVERT
                    </Button>
                    <div class="right-bt">
                        <div class="right-bt-text">
                            Conversion completed time: The cross-chain transfer will be
                            completed within 5 minutes.
                        </div>
                        <div>
                            The Halo Bridge V1 version supports the conversion of ETH to HRX-ETH
                            only. The V2 version will be launch after Genesis Event. The V2
                            version will support more digital assets and the conversion with
                            different chains.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <Modal class="from-modal" title="" visible={isModalVisible} footer={''} closable={false}>
        <Select class="right-sel" defaultValue="lucy">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
                Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Input class="right-inp" />
        <div class="modal-bt">
            <a class="btn-m-w" @click="useIsModalVisible(false)">
                CANCEL
            </a>
            <Button type="primary" class="btn-m" @click="useIsModalVisible(false)">
                CONNECT WALLET
            </Button>
        </div>
    </Modal> -->
</div>
</template>

<script>
import bridgeSide from '@/assets/images/bridge-side.png';
import bridgeIcHalo from '@/assets/images/bridge-ic-halo.png';
import bridgeMask from '@/assets/images/bridge-mask.png';
import bridgeSelect from '@/assets/images/bridge-select.png';

export default {
    components: {},
    data() {
        return {
            bridgeSide: bridgeSide,
            bridgeIcHalo: bridgeIcHalo,
            bridgeMask: bridgeMask,
            bridgeSelect: bridgeSelect,
            nick: 'Halo Network'
        }
    },
    // 方法集合
    methods: {
        useIsModalVisible() {

        },
        openModal() {

        }
    },

}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
