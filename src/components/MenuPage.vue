<template>
  <div class="container">
    <h1 style="margin: 6rem 6rem 3rem 0rem; text-align: left; font-weight: bold">Menu</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
         <div class="card shadow-sm" style="width: 100%; padding: 0">
        <img
          src="https://www.subway.com/ns/images/Menu/CAN/ENG/L_SandwichCategory_6Inch_Black_desk_534x534_v2.png"
          class="card-img-top"
          alt="sandwiches"
        />
        <div class="card-body">
          <h5 class="card-title" style="text-align: left">
            <router-link to="/sandwiches">Sandwiches</router-link>
          </h5>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card shadow-sm" style="width: 100%; padding: 0">
        <img
          src="https://www.subway.com/ns/images/Menu/CAN/ENG/L_SaladCategory_Black_desk_534x534_v2.png"
          class="card-img-top"
          alt="sandwiches"
        />
        <div class="card-body">
          <h5 class="card-title" style="text-align: left">
            <router-link to="/salads">Salads</router-link>
          </h5>
        </div>
      </div>
      </div>
      <div class="col">
         <div class="card shadow-sm" style="width: 100%; padding: 0">
        <img
          src="https://www.subway.com/ns/images/Menu/CAN/ENG/L_Beauty_SidekickEggBaconBreakfast_Black_Desktop_534x534.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title" style="text-align: left">
            <router-link to="/breakfast">Breakfast</router-link>
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
  text-transform: uppercase;
  font-weight: bold;
}
article {
  display: flex;
  flex-wrap: wrap;
}
</style>
