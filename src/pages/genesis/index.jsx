import { Button, Input } from 'antd';
import bridgeSide from '@assets/images/bridge-side.png';
import bridgeIcHalo from '@assets/images/bridge-ic-halo.png';
import './index.less';
function Genesis() {
    return (
        <div class="halo-genesis">
            <div class="bridge-con">
                <div class="bridge-top">
                    <div class="top-title">HALO Genesis</div>
                    <div class="top-text">
                        Participants in HALO Genesis will be the earliest HALO Finance adopters,
                        committed ETH will support the HOLP POOL as liquidity
                    </div>
                </div>
                <div class="bridge-cen">
                    <div class="cen-left">
                        <div class="cen-left-box1">Status</div>
                        <div class="cen-left-box">
                            <div class="box-title">Rate</div>
                            <div class="box-con">1 ETH : 5000 HO</div>
                        </div>
                        <div class="cen-left-box">
                            <div class="box-title">Minted</div>
                            <div class="box-con">10000000 HO</div>
                        </div>
                        <div class="cen-left-box">
                            <div class="box-title">Destroyed</div>
                            <div class="box-con">10000000 HO</div>
                        </div>
                        <div class="cen-left-box">
                            <div class="box-title">Total Account</div>
                            <div class="box-con">10000000</div>
                        </div>
                        <div class="cen-left-box">
                            <div class="box-title">HOlppool</div>
                            <div class="box-con">10000000 ETH</div>
                        </div>
                        <img class="bridge-side" src={bridgeSide}></img>
                    </div>
                    <div class="cen-right">
                        <div class="right-change">
                            <div>
                                <div class="change-title">
                                    <img class="form-box-icon" src={bridgeIcHalo}></img>HALO
                                    Network
                                </div>
                                <div class="change-bal">HRC-ETH Balance</div>
                                <div class="change-num">0.1</div>
                            </div>
                            <Button type="primary" class="btn">
                                EXCHANGE
                            </Button>
                        </div>
                        <div class="right-form">
                            <div class="form-hd">Committed HRC-ETH</div>
                            <div class="right-inp-wrap">
                                <Input class="right-inp" placeholder="0.1～10000" />
                                <div class="right-inp-ext">
                                    <div class="ext-text1">Estimated receive</div>
                                    <div class="ext-text2">0 HO</div>
                                </div>
                            </div>
                        </div>
                        <div class="right-form">
                            <div class="form-hd">Synchronize Voting Node</div>
                            <Input class="right-inp" />
                            <div class="form-text">
                                The HO obtained during HALO Genesis event will vote for this node at
                                the same time
                            </div>
                        </div>
                        <Button type="primary" class="btn-g gen-btn">
                            COMMIT TO GENESIS
                        </Button>
                        <div class="right-bt">
                            <div class="mb5">Rules of Genesis event:</div>
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
    );
}

export default Genesis;
