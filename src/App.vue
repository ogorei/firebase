<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
  
    };
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Orbitron:wght@600&family=Righteous&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

button,
.routerBtn{
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 15px;
  padding: 12px 24px;
  background-color:black;
  color: #fff;
  border-radius: 20px;
  border: none;
  &:focus{
    outline:#fff;
  }
  &:hover{
    background-color: #6C63FF;
  }
}

// .home-card-wrap{
//   position: relative;
//   padding: 80px 16px;
//   background-color: #f1f1f1;
//   grid-auto-rows: auto;
//   gap: 32px;
//     @media (min-width: 500px) {
//       padding:100px 16px;
//     }

//   .cards{
//     display: grid;
//     gap:32px;
//     grid-template-columns: 1fr 1fr 1fr;
//     @media (min-width: 500px) {
//       grid-template-columns: repeat(2, 1fr);
//     }
//     }
//     .arrow{
//       margin-left: 8px;
//       width: 12px;
//       path{
//         fill: #000;
//       }
//     }
// }
</style>
