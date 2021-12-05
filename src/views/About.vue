<template>
<div>
  <Hero :welcomeScreen="welcomeScreen" />
  <div class="container">
    <table class="table">
      <tr>
        <td>理念</td>
        <td>「新しい価値を共に創る」</td>
      </tr>
      <tr>
        <td>設立</td>
        <td>2021年8月17日</td>
      </tr>
      <tr>
        <td>資本金</td>
        <td>100,000円</td>
      </tr>
      <tr>
        <td>取締役</td>
        <td>遠藤拓也</td>
      </tr>
      

    </table>
    
  </div>
</div>
  
</template>


<script>
import Hero from '../components/Hero.vue'
export default {
  name:'About',
  components:{
    Hero
  },
  data() {
    return{
      welcomeScreen: {
        title: "会社概要",
        welcomeScreen: true, 
        photo: "rtimage"
      }

    }

  }

}
</script>

<style lang="scss" scoped>
.container{
  display:flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-bottom:50px;
  table tr td{
    border: 1px solid #ccc;
    padding: 20px 250px;
     @media (max-width: 598px) {
      padding: 10px;
    }

  }

}

</style>