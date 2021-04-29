<template>
<div class="halo-header">
    <header class="home-hd">
        <div class="logo-img-Box" >
            <img class="logo-img" :src="logoImg" @click="changeMenu" v-show="pageIndex==0"/>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light float-lg-right float-md-right">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img :src="m_list_w" alt="" v-show="pageIndex==0||pageIndex==3"/>
                <img :src="m_list_r" alt="" v-show="pageIndex==1||pageIndex==2"/>
            </button>
            <div class="collapse navbar-collapse float-lg-right float-md-right" id="navbarSupportedContent">
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
    <!-- <img class="bg1-img d-none d-lg-block " :src='bg1Img' /> -->
</div>
</template>

<script>
import bg1Img from '@/assets/images/bg1.jpg';
import logoImg from '@/assets/images/logo.png';
import m_list_w from '@/assets/images/phone/m_list_w.png'
import m_list_r from '@/assets/images/phone/m_list_r.png'

import './index.less';
export default {
    data() {
        return {
            logoImg: logoImg,
            m_list_w: m_list_w,
            bg1Img: bg1Img,
            m_list_r:m_list_r,
            pageIndex: 0
        }
    },
    mounted() {
        this.bus.$on('pageChange', data => {
            console.log('改变' + data);
            this.pageIndex = data;
        })
    },
    methods: {
        changeMenu() {

        }
    }
}
</script>

<style lang="less">
@import url('./index.less');
</style>
