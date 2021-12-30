<template>
<header>
    <nav class="container">
      <!-- <div class="branding">
        <router-link class="header" :to="{name : 'Home'}">R&T</router-link>
      </div> -->
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" to="/">ホーム</router-link>
          <router-link class="link" to="about">会社概要</router-link>
        </ul>
      </div>
    </nav>
  <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
  <transition name="mobile-nav">
    <ul v-show="mobileNav" class="mobile-nav">
      <router-link @click="closeMobileNav" class="link" to="/">ホーム</router-link>
      <router-link @click="closeMobileNav"  class="link" to="about">会社概要</router-link>
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
      mobile: null,
      mobileNav: null,
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
    closeMobileNav(){
     
        console.log('here');
    
    }



  }


}
</script>

<style lang='scss' scoped>

.header{
  padding: 0 25px;
  font-family: 'Orbitron', sans-serif;;
  .link{
    font-weight: 500;
    padding: 0 10px;
    transition: .3 color ease;
    &:hover{
      background-color: burlywood;
      color: #ccc;
    }
  }
}
  nav{
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
  }

  
  .mobile-nav{
    width: 100%;
    max-width: 260px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color:rgb(58, 55, 55);
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