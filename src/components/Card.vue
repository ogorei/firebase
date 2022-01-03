<template>
  <div class="card-container">
    <div v-for="(post, index) in sampleCard" :key="index">
      <div class="blog-card">
        <img :src="require(`../assets/undraw/${post.blogCoverPhoto}.png`)" alt="">
        <h4>{{post.title}}</h4>
        <p>{{post.content}}</p>
        <router-link class="routerBtn" :to="post.url">
          詳細 <Arrow class="arrow" />
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
  name: "Card",
  props:{
  sampleCard: Array,
  default: ()=>[]
  },
  components:{
    Arrow
  }

}
</script>

<style lang="scss">

.card-container{
  display: flex;
  align-items: center;
  flex-basis: 10%;
    @media (max-width: 500px) {
    flex-wrap: wrap;  
    }
  .blog-card{
    margin:2%;
    padding: 5%;
    position: relative;
    cursor: pointer;
    flex-direction: column;
    flex-basis: 30%;
    border-radius: 8px;
    background-color: #fff;
    min-height: 420px;
    transition: .5s ease;
    &:hover{
      transform: rotateZ(-1deg) scale(1);
      box-shadow: 0 4px 6px -1px #ccc;
    }
    .arrow{
        margin-left: 8px;
        width: 12px;
        path{
          fill: #fff;
        }
      }
    h4, p{
      text-align: center;
      padding: 15px 30px;
    }
    .routerBtn{
      margin-left:30px;
      margin-right:30px ;
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;

    }
    
  }
  img{
    display: block;
    border-radius: 8px;
    width: 100%;
    z-index: 1;
    object-fit: cover;
  }
}
</style>