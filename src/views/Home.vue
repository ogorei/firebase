<template>
  <div class="home-container">
    <Hero :welcomeScreen="welcomeScreen"/>
    <div class="home-card-wrap">
      <h2>サービス一覧</h2>
        <div class="cards">
          <Card :sampleCard="sampleCard"/>
        </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post</h2>
        <router-link class="routerBtn" to="#">
          register
        </router-link>
      </div>
    </div>
  
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Card from '../components/Card.vue';

export default {
  name: "Home",
  components: {
    Hero,
    Card
  },

  data(){
    return{
      welcomeScreen: {
        title: "ITコンサルティング",
        desc: "ご要望を満たすためのソリューション提案やプロジェクトマネジメント支援を行い、ITを用いた業務改善のご支援を致します。",
        welcomeScreen: true, 
        photo: "rtimage"
      },
      sampleCard: [
        {
        title:"one",
        content: "my card",
        blogCoverPhoto: 'stock-1'
        },
        {
        title:"two",
        content: "my card",
        blogCoverPhoto: 'stock-2'
        },
        {
        title:"three",
        content: "my card",
        blogCoverPhoto: 'stock-3'
        }

      ]
    }
  }



};
</script>

<style lang="scss" scoped>

.home-card-wrap{
  background-color: #f1f1f1;
  padding: 100px 30px;
  @media (max-width: 550px){
    padding: 50px 0;
  }
  h2{
    text-align: center;
    font-weight: 300px;
    font-size: 30px;
    margin-bottom: 32px;
  }  
}
.updates{
    .container{
      padding: 300px 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 550px){
        padding: 125px 25px;
        flex-direction: column;
      }
    }
    .routerBtn{
      display: flex;
      font-size: 14px;
      text-decoration: none;
    }
  }


</style>
