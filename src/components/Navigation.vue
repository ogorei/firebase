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
<menuIcon class="menu-icon"/>
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

.header{
  padding: 0 25px;
  box-shadow: 0 4px 6px rgba($color: #000000, $alpha: 1.0);
  z-index: 1;
}

.link{
  font-weight: 500;
  padding: 10px 0;
  transition: .3 color ease;
  &:hover{
    color: #ccc;
  }
}

nav{
  padding:25px 20px;
  margin: 10px;
  .branding{
    display: flex;
    align-items: center;
  }
  .header{
    text-decoration: none;
    }
  .nav-links{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    }
}

</style>