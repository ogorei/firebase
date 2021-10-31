<template>
<header>
  <nav class="container">
    <div class="branding">
      <router-link class="header" :to="{name : 'Home'}">ASTRONOUTS</router-link>
    </div>
    <div class="nav-links">
      <ul>
        <router-link class="link" to="#">ホーム</router-link>
        <router-link class="link" to="#">会社概要</router-link>
        <router-link class="link" to="#">お問い合わせ</router-link>
      </ul>
    </div>
  </nav>
<menuIcon />
<transition name='mobile-nav'>
  <ul>
    <router-link class="link" to="#">ホーム</router-link>
    <router-link class="link" to="#">会社概要</router-link>
    <router-link class="link" to="#">お問い合わせ</router-link>
  </ul>

</transition>
</header>
  
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg'
export default {
  name:'Navigation',
  components:{
    menuIcon

  }

}
</script>

<style lang='scss' scoped>

</style>