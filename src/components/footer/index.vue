<template>
<div class="halo-footer">
    <div class="home-bt-con">
        <div class="bt-text">©2021 - 2022 HALO OS.All rights reserved.</div>
        <div>
            <img class="jump-img" src={btIconTwitter} @click="window.open('https://twitter.com/finance_halo', '_blank')"></img>
            <img class="jump-img" src={btIconTelegram} @click="window.open('https://t.me/halofinance_community', '_blank')"></img>
            <img class="jump-img" src={btIconMedium} @click="window.open('https://medium.com/halo-finance', '_blank')"></img>
        </div>
    </div>
</div>
</template>

<script>
import btIconTwitter from '@/assets/images/bt-icon-twitter.png';
import btIconTelegram from '@/assets/images/bt-icon-telegram.png';
import btIconMedium from '@/assets/images/bt-icon-medium.png';

export default {
    data() {
        return {
            btIconTwitter: btIconTwitter,
            btIconTelegram: btIconTelegram,
            btIconMedium: btIconMedium
        }
    }
}
</script>

<style lang="less">
@import url('./index.less');
</style>
