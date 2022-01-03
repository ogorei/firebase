<template>
<div class="wrapper">
  <div class="content">
    <h2 v-if="service.title">{{service.title}}</h2>
    <p v-if="service.desc">{{service.desc}}</p>
    <p class="preview"></p>
  </div>
  <div class="photo">
    <img v-if="service" :src="require(`../assets/undraw/${service.photo}.png`)" alt="" class="src">
  </div>

</div>
  
</template>

<script>
export default {
name: "Post",
props:["service"]
}
</script>

<style lang="scss">
.wrapper{
  margin-top:60px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 1px #E3F906;
    @media (min-width:750px) {
      min-height: 650px;
      max-height:650px;
      flex-direction: row;
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 4;
      order:2;
      @media(min-width: 700px){
        order:1
      }
      @media (min-width:800px) {
        flex: 3;
      }
    }
    p{margin: 10%;
      padding:10px 20px;
    }
    .photo{
      order:1;
      flex: 3;
      @media(min-width:700px){
        order:2
      }
      @media(min-width:800px){
        order:4
      }
      img{
        display: block;
        width: 80%;
        object-fit: cover;
        height: 80%;
      }
    }

}
.wrapper:nth-child(even){
      .content{
        order:2;
      }
      .photo{
        order:1;
      }
    }

</style>