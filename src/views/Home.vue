<template>
  <div class="home-container">
    <Hero :welcomeScreen="welcomeScreen"/>
    <div class="home-card-wrap">
      <h2>サービス一覧</h2>
        <div class="cards">
          <Card :sampleCard="sampleCard"/>
        </div>
    </div>
    <div class="updates circle">
      <div class="container">
        <h2>経営 × IT</h2>
        <p>環境変化における戦略・戦術を提案いたします</p>
         <a href="mailto:Endooooooo7@gmail.com?subject=お問い合わせ&body=">
          <button id="btnOutlook">お問い合わせ</button>
        </a>
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
        title:"ECサイト運用",
        content: "お客様のサイトにぴったりのSEO対策を提案いたします。 ",
        blogCoverPhoto: 'undraw_Software_engineer_re_fyew'
        },
        {
        title:"LP作成",
        content: "作りたい制作イメージと、近い実績があるデザイナーを選定可能になるので、 リスクなく安心して発注をすることができます。",
        blogCoverPhoto: 'undraw_Web_devices_re_m8sc'
        },
        {
        title:"ITコンサルティング",
        content: "システムの見直し、新システム導入の提案をさせていただきます。",
        blogCoverPhoto: 'undraw_Interview_re_e5jn'
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
      padding-bottom: 10px;
    }
  }


</style>
