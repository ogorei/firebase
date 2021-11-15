<template>
  <div class="home-container">
    <div class="pr-desc">
      <h2>{{welcomeScreen.title}}</h2>
      <p class="desc">{{welcomeScreen.desc}}</p>
    </div>
    <div class="right-image">
      <div class="rt-design">R&T</div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {},

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

.home-container{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
  .pr-desc{
    text-align: center;
    flex-direction: column;
    flex-basis: 50%;
    .desc{
      font-size: 10px;
    @media (min-width: 598px) {
      font-size: 14px;
    }
    }
  
}
}

.right-image{
flex-direction: column;
flex-basis: 40%;
}

.rt-design{
  font-size: 100px;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  text-shadow: lawngreen;

}
</style>
