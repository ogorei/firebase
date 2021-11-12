<template>
  <div class="container">
    <div class="pr-desc">
    <h1>{{welcomeScreen.title}}</h1>
    <p>{{welcomeScreen.desc}}</p>
    </div>

    <div class="right-image">
      <img class="" src="../assets/logo.png" alt="">
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
        title: "R&T",
        desc: "ITコンサルティング",
        welcomeScreen: true, 
        photo: "rtimage"
      }

    }
  }



};
</script>

<style lang="scss" scoped>

.container{
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  margin: 0;
  padding: 0;
}

.pr-desc{
  flex-direction: column;
  flex-basis: 60%;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
}

.right-image{
flex-direction: column;
flex-basis: 40%;
}

</style>
