<template>
<div class="services">
  <h2>サービス一覧</h2>
  <Post :service="service" v-for="(service, index) in services" :key="index" />
</div>
  
</template>

<script>
import Post from '../components/Post.vue';
export default {
  name:"Services",
  components:{
    Post,
  },
  data(){
    return{
      services: [ 
        {id:"0",
        title:"IT コンサルティング",
        desc:"内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。",
        photo:"undraw_Interview_re_e5jn"},

         {id:"1",
        title:"LP作成",
        desc:"内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。",
        photo:"undraw_Web_devices_re_m8sc"},

         {id:"2",
        title:"ECサイト運用",
        desc:"内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。内容をここにはりましょう。",
        photo:"undraw_Software_engineer_re_fyew"},

      ]
    }
  }


}
</script>

<style lang="scss">
h2{
  padding-top:5%;
  display: flex;
  justify-content: center;
}

</style>