<template>
<header>
    <nav class="container">
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link @click="hideMenu"  class="link" to="/">ホーム</router-link>
          <router-link class="link" to="services">サービス</router-link>
          <router-link class="link" to="about">会社概要</router-link>
        </ul>
      </div>
    </nav>
  <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
  <transition name="mobile-nav">
    <ul v-show="mobileNav" class="mobile-nav">
      <li @click="hideMenu" class="link">
      <router-link class="link" to="/">ホーム</router-link>
      </li>
      <li @click="hideMenu" class="link">
      <router-link class="link" to="services">サービス</router-link>
      </li>
      <li @click="hideMenu" class="link">
      <router-link class="link" to="about">会社概要</router-link>
      </li>
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
  },
  data(){
    return{
      mobile: false,
      mobileNav: false,
      windowWidth: null,
    }
  },

  created(){
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  methods:{
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true; 
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },
    hideMenu(){
      this.mobileNav = !this.mobileNav;
    }
  }
}
</script>

<style lang='scss' scoped>

.header{
  display: flex;
  justify-content: center;
  padding: 0 25px;
  font-family: 'Orbitron', sans-serif;;
  .link{
    font-weight: 500;
    padding: 0 10px;
    transition: .3 color ease;
    &:hover{
      background-color: burlywood;
      color: #E3F906;
    }
  }
}
  nav{
    top: 0;
    display: flex;
    padding:10px 20px;
    margin: 10px;
    .branding{
      display: flex;
      align-items: center;
      z-index: 0;
    
      .header{
        text-decoration: none;
        font-size: 2.0em;
        }
    }
    .nav-links{
      top: 0;
      position: relative;
      display: flex;
      flex:1;
      align-items: center;
      justify-content: flex-end;
      }
      ul{
        margin-right: 30px;
        .link{
          margin-right: 30px;
        }
        .link:last-child{
          margin:0;
        }
      }
      @media (max-width: 768){
      .header{
        display: flex;
        justify-content: center;
      }
      }

  }
  .menu-icon{
    cursor: pointer;
    position:absolute;
    top:32px;
    right: 25px;
    height: 25px;
    width: auto;
    
    transform: rotateZ(180deg);
  }

  
  .mobile-nav{
    justify-items: center;
    top: 0;
    width: 100%;
    max-width: 260px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color:#6C63FF;;
    z-index: 2;

    .link{
      padding: 20px;
      color: #fff;
    }
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active{
    transition: all 0.1s ease-in-out;
  }

  .mobile-nav-enter{
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to{
    transform: translateX(0);
  }
  .mobile-nav-leave-to{
    transform: translateX(-250);
  }


</style>