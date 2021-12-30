<template>
<div>
  <Hero :welcomeScreen="welcomeScreen" />
  <div class="container">
  <Tasks :tasks="tasks"/>
  </div>
</div>
  
</template>


<script>
import Hero from '../components/Hero.vue'
import Tasks  from '../components/Tasks.vue'
export default {
  name:'About',
  components:{
    Hero,
    Tasks
  },
  data() {
    return{
      welcomeScreen: {
        title: "会社概要",
        desc:"",
        welcomeScreen: true, 
        photo: "rtimage"
      },
      tasks:[]

    }
  },

  created() {
    this.tasks = [
      {
        id:1,
        title:'取締役',
        desc: '遠藤拓也'
      },
      {
        id:2,
        title:'設立日',
        desc: '2021年8月17日'
      },
      {
        id:3,
        title:'資本金',
        desc: '100,000円'
      }

    ]
  },

}
</script>

<style lang="scss" scoped>
.container{
  display:flex;
  flex-basis: 100%;
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