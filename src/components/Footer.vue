<template>
  <footer>
    <div class="container">
         <!-- <div class="col-1">
           <router-link class="link-scope" :to="{name :'about'}">会社概要</router-link>
        </div>
        <div class="col-1">
          <router-link class="lin-scope" :to="{name :'contact'}">お問い合わせ</router-link>
        </div> -->
    </div>
    <div class="left"><p>R&T All Rights Reserved</p></div>
  </footer>
</template>

<script>
export default {
  name : 'Footer'

}
</script>

<style lang="scss" scoped>
footer{
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  padding: 40px 25px;
  background-color: #6C63FF;
 
   .container{
     display: flex;
     flex-direction: row;
     @media(min-width: 800px){
       flex-direction: row;
       gap: 0px;
     }
     .header{
       display: flex;
       justify-content: flex-start;
       

     }
    //  .col-1{
    //    width:200px;
    //    display: flex;
    //    flex-direction: column;
    //  }

     .left p{
       display: flex;
       color: #fff;
       flex-direction: column;
     }


     
   }
}

</style>