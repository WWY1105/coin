<template>
<div class="halo-header">
    <header class="home-hd">
        <div>
            <!-- {changeMenu.bind(this, { key: 'home' })} -->
            <img class="logo-img" :src="logoImg" @click="changeMenu"></img>
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            WALLET
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">META</a>
                        </div>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">EXPLORER</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">HALO BRIDGE</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">HALO GENESIS</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">WHITEPAPER</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <img class="bg1-img" :src="bg1Img"></img>
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
    }
}
</script>

<style lang="less">
@import url('./index.less');
</style>
