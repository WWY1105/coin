<template>
<div class="halo-header">
    <header class="home-hd">
        <div>
            <!-- {changeMenu.bind(this, { key: 'home' })} -->
            <img class="logo-img" :src="logoImg" @click="changeMenu"/>
        </div>
        <!-- <Menu mode="horizontal" @click="changeMenu" class="hd-menu" theme="dark" selectedKeys={[menu]}>
            <SubMenu title="WALLET" class="menu-item" key="WALLET">
                <Menu.Item class="menu-item-sub" key="META">
                    META
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="EXPLORER">EXPLORER</Menu.Item>
            <Menu.Item key="bridge">HALO BRIDGE</Menu.Item>
            <Menu.Item key="genesis">HALO GENESIS</Menu.Item>
            <Menu.Item key="WHITEPAPER">WHITEPAPER</Menu.Item>
        </Menu> -->
    </header>
    <img class="bg1-img" :src='bg1Img'/>
</div>
</template>

<script>
import logoImg from '@/assets/images/logo.png';
import bg1Img from '@/assets/images/bg1.jpg';
import './index.less';
export default {
    data() {
        return {
            logoImg: logoImg,
            bg1Img: bg1Img
        }
    },
    methods:{
        changeMenu(){
            
        }
    }
}
</script>

<style lang="less">
@import url('./index.less');
</style>
