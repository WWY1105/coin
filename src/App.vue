<template>
<div id="app">
  <div class="contiainer-fiuld">
      <HaloHeader></HaloHeader>
      <div class="container">
           <router-view />
      </div>
      <HaloFooter></HaloFooter>
  </div>
   
</div>
</template>

<script>
import HaloHeader from '@/components/header/index';
import HaloFooter from '@/components/footer/index';
export default {
    name: 'App',
    components:{
         HaloHeader,
        HaloFooter
    }

}
</script>

<style>
#app {
  
}
</style>
