<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{name :'home'}">R&T</router-link>
          <ul>
            <li>link 1 </li>
            <li>link 1 </li>
            <li>link 1 </li>
          </ul>
        </div>
      </div>
      <div class="left"><p>Copyright</p></div>
    </div>
  </footer>
</template>

<script>
export default {
  name : 'Footer'

}
</script>

<style lang="scss" scoped>
footer{
  margin-top: auto;
  padding: 30px 25px;
  background-color:royalblue;
   .container{
     display: flex;
     flex-direction: column;
     gap:32px;
     @media(min-width: 800px){
       flex-direction: row;
       gap: 0px;
     }

     > div{
       display: flex;
       flex: 1;
     }
     .left{
       gap: 32px;
       color: #fff;
       display: flex;
       flex-direction: column;
       align-items: center;
       @media(min-width: 800px){
        flex-direction: row;
        align-items: initial;
        gap: 0px;
      }
      .header{
        font-size:16px;
        color: #fff;
        text-decoration: none;
      }
      ul{
        gap: 16px;
        list-style: none;
      }
      .col-1{
        gap: 32px;
        display: flex;
        flex: 1;
        @media(min-width: 800px){
          gap: 0px;
        }
      }
      .col-1{
        flex-direction: column;
        h2{
          text-align: center;
        }
      }
     }
     .right{
       gap: 32px;
       color: #fff;
       flex-direction:column;
       @media(min-width: 800px){
       align-items: center;
       gap: 0px;
     }
     p{
       margin-top: auto;
     }
     }


   }
}

</style>