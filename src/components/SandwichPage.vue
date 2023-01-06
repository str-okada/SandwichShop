<template>
  <div class="container">
    <h1 style="margin: 6rem 6rem 3rem 0rem; text-align: left">Sandwiches</h1>
    <p style="text-align: left; font-size: 12px;">
      NOTICE TO OUR VALUED GUESTS: LETTUCE SUPPLY: We are experiencing lettuce shortages due to agricultural and weather-related events. Subway is instituting a temporary lettuce portion reduction in our sandwich builds to manage the shortage. Thank you for your patience.
    </p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        <div class="col" v-for="sandwich in sandwiches" :key="sandwich.pid">
          <div class="card shadow-sm" style="width: 100%; height: 100%;">
            <img :src="sandwich.listImg" class="card-img-top" :alt="sandwich.pName" />
            <div class="card-body">
              <h5 class="card-title" style="text-align: left">
                <router-link :to="{ name: 'show-details', params: {id: sandwich.pid} }"  class="card-title" style="text-align: left">{{ sandwich.pName }}</router-link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <page-nation :nowPage="page" :total="total" @onPageChange="(page)=>onPageChange(page)" />
  </div>
</template>

<script>
import readJson from "../services/JsonService"
import PageNation from "../components/PageNation.vue"

export default {
  name: "SandwichPage",
  components: {
    PageNation
  },
  data(){
    return {
      sandwiches: [],
      page: 1,
      total: 0,
    }
  },
  methods: {
    loadJson(){
      readJson.getProductsJson().then((res)=>{
        this.total = res.data.sandwiches.length
      })
    },
    loadJsonPage1(){
      readJson.getProductsJson().then((res)=>{
        this.sandwiches = [];
        for (let i = 0; i < 12; i++){
          this.sandwiches.push(res.data.sandwiches[i])
        }
      })
    },
    loadJsonPage2(){
      readJson.getProductsJson().then((res)=>{
        this.sandwiches = [];
        for (let i = 12; i < 24; i++){
          this.sandwiches.push(res.data.sandwiches[i])
        }
      })
    },
    loadJsonPage3(){
      readJson.getProductsJson().then((res)=>{
        this.sandwiches = [];
        for (let i = 24; i < res.data.sandwiches.length; i++){
          this.sandwiches.push(res.data.sandwiches[i])
        }
      })
    },
    onPageChange(page){
      this.page = page
    },
  },
  watch: {
    page: function(){
      if (this.page == 1){
        this.loadJsonPage1();
      }
      if (this.page == 2){
        this.loadJsonPage2();
      }
      if (this.page == 3){
        this.loadJsonPage3();
      }
    }
  },
  mounted(){
    this.loadJson();
    this.loadJsonPage1();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
}
article {
  display: flex;
  flex-wrap: wrap;

}
aside {
  width: 25%;
}
img {
  width: 50%;
}
h3{
  widows: 40%;
}
</style>
