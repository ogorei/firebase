<template>
  <div class="hero-container">
    <div class="pr-desc">
      <h2>{{welcomeScreen.title}}</h2>
      <p class="desc">{{welcomeScreen.desc}}</p>
    </div>
    <div class="right-image">
      <img src="../assets/rt-logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props:{
    welcomeScreen: Object,
    default: ()=>{}
  }

}
</script>

<style lang="scss" scoped >

.hero-container{
  margin-top: 10%;
  margin-bottom:10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
  .pr-desc{
    font-size: 100px;
    text-align: center;
    flex-direction: column;
    flex-basis: 30%;
     @media (max-width: 598px) {
      flex-basis: 70%;
      font-size: 14px;
    }
    h2{
      font-size: 30px;
      @media (max-width: 598px) {
      font-size: 25px;
    }
    }
    .desc{
      font-size: 10px;
    }
  }
  .right-image{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-basis: 30%;
  img{
    width: 200px;
    height: auto;
  }
  }


  .rt-design{
    font-size: 100px;
    font-family: 'Orbitron', sans-serif;
    text-align: center;
    text-shadow: lawngreen;
  }



}


</style>