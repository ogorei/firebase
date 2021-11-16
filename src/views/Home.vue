<template>
  <div class="home-container">
    <Hero :welcomeScreen="welcomeScreen"/>
  
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
  name: "Home",
  components: {
    Hero
  },

  data(){
    return{
      welcomeScreen: {
        title: "ITコンサルティング",
        desc: "ご要望を満たすためのソリューション提案やプロジェクトマネジメント支援を行い、ITを用いた業務改善のご支援を致します。",
        welcomeScreen: true, 
        photo: "rtimage"
      }
    }
  }



};
</script>

<style lang="scss" scoped>

.card-wrapper{
  font-weight: 300px;
  font-size: 14px;
  margin-bottom: 32px;

}

</style>
