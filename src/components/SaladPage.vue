<template>
  <div class="container">
    <h1 style="margin: 6rem 6rem 3rem 0rem; text-align: left">Salads</h1>
    <p style="text-align: left; font-size: 12px;">
      NOTICE TO OUR VALUED GUESTS: LETTUCE SUPPLY: We are experiencing lettuce shortages due to agricultural and weather-related events. Subway is instituting a temporary lettuce portion reduction in our sandwich builds to manage the shortage. Thank you for your patience.
    </p>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      <div class="col" v-for="salad in salads" :key="salad.pid">
        <div class="card shadow-sm" style="width: 100%; height: 100%">
          <img :src="salad.listImg" class="card-img-top" :alt="salad.pName" />
          <div class="card-body">
            <h5 class="card-title" style="text-align: left">
              <router-link :to="{ name: 'show-details', params: {id: salad.pid} }"  class="card-title" style="text-align: left">{{ salad.pName }}</router-link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import readJson from "../services/JsonService";
export default {
  name: "SaladPage",
  props: {
    msg: String,
  },
  data() {
    return {
      salads: [],
    };
  },
  methods: {
    loadJson() {
      readJson
        .getProductsJson()
        .then((res) => {
          this.salads = res.data.salads;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.loadJson();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
