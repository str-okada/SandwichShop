<template>
  <div>
    <nav-bar :logFlag="logFlag" @SearcedItems="SearcedItems"></nav-bar>
  </div>
  <router-view :loggedUser="loggedUser" @globalLoggedUser="globalLoggedUser" @handleLogFlag="handleLogFlag"  :searcedItems="searcedItems"/>
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      logFlag: false,
      searcedItems:"",
      loggedUser: "" // use it in shopping cart page when getting the cardNum, expDate
    };
  },
  methods: {
    handleLogFlag(logFlag) {
      this.logFlag = logFlag;
    },
    SearcedItems(val){
      this.searcedItems = val; 
    },
    globalLoggedUser(loggedUser){
      this.loggedUser = loggedUser // use it in shopping cart page when getting the cardNum, expDate
    }
  },
   mounted() {
    this.loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (this.loggedUser){
      this.logFlag = true
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
