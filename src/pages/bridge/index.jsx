import { useState } from 'react';
import { Select, Button, Input, Modal, message } from 'antd';
const { Option } = Select;
import bridgeSide from '@assets/images/bridge-side.png';
import bridgeIcHalo from '@assets/images/bridge-ic-halo.png';
import bridgeMask from '@assets/images/bridge-mask.png';
import bridgeSelect from '@assets/images/bridge-select.png';
import './index.less';
function Bridge() {
    const [isModalVisible, useIsModalVisible] = useState(false);
    const [connectStatus, useConnectStatus] = useState(false);

    let nick = '0X121xxxx11111';
    nick = nick.slice(0, 5) + '...' + nick.slice(-5);

    const openModal = () => {
        useIsModalVisible(true);
    };

    return (
        <div class="halo-bridge">
            <div class="bridge-con">
                <div class="bridge-top">
                    <div class="top-title">HALO Bridge</div>
                    <div class="top-text">
                        The safe, fast and most secure way to convert the digital assets to HALO
                        chains.
                    </div>
                </div>
                <div class="bridge-cen">
                    <div class="cen-left">
                        <div class="cen-left-box1">Halo Bridge was issued assets</div>
                        <div class="cen-left-box">
                            <div class="box-title">Token</div>
                            <div class="box-con">HRC-ETH</div>
                        </div>
                        <div class="cen-left-box">
                            <div class="box-title">Amount</div>
                            <div class="box-con">10000000</div>
                        </div>
                        <img class="bridge-side" src={bridgeSide}></img>
                    </div>
                    <div class="cen-right">
                        <div class="right-form">
                            <div class="form-hd">Asset</div>
                            <Select class="right-sel" defaultValue="lucy">
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <div class="right-form-wrap">
                            <div class="right-form">
                                <div class="form-hd">From</div>
                                <div class="form-box">
                                    <div class="form-box-tp">
                                        <img class="form-box-icon" src={bridgeMask}></img>
                                        <div class="form-box-text">{nick}</div>
                                        <img
                                            class="form-box-sel"
                                            src={bridgeSelect}
                                            onClick={openModal}
                                        ></img>
                                    </div>
                                    <div>
                                        <Button
                                            type="primary"
                                            class="btn-l form-btn"
                                            onClick={() => {
                                                message.open({
                                                    content: 'Connected',
                                                    class: 'custom-class',
                                                    style: {
                                                        marginTop: '20vh'
                                                    }
                                                });
                                            }}
                                        >
                                            CONNECT WALLET
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div class="right-form">
                                <div class="form-hd">To</div>
                                <div class="form-box">
                                    <div class="form-box-tp">
                                        <img class="form-box-icon" src={bridgeIcHalo}></img>
                                        <div class="form-box-text">HALO Network</div>
                                    </div>
                                    <div class="form-box-bt">
                                        <Input
                                            class="bt-inp"
                                            placeholder="Enter HALO Wallet address"
                                        ></Input>
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
            <Modal
                class="from-modal"
                title=""
                visible={isModalVisible}
                footer={''}
                closable={false}
            >
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
                    <a
                        class="btn-m-w"
                        onClick={() => {
                            useIsModalVisible(false);
                        }}
                    >
                        CANCEL
                    </a>
                    <Button
                        type="primary"
                        class="btn-m"
                        onClick={() => {
                            useIsModalVisible(false);
                        }}
                    >
                        CONNECT WALLET
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export default Bridge;
