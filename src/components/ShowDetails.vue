<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h1 style="text-align: left; font-weight: bold">{{ product.pName }}</h1>
        <p class="prodDescription" style="text-align: left">
          {{ product.description }}
        </p>
        <p style="text-align: left">*Fields Required.</p>
      </div>
      <div class="col-md-5 col-lg-5 col-sm-12">
        <img class="prodImage" :src="product.detailImg" :alt="product.pName" />
      </div>
    </div>
    <div>
      <div class="row" v-for="(value, ingredientName, idx) in ingredients" :key="idx">
        <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
          <h2 style="text-align: left; font-weight: bold">{{ingredientName}}</h2>
          <div class="row g-3">
            <div @click="getData" class="col-sm-12 col-md-6 col-lg-4" v-for="item in value" :key="item.iid">
              <!-- item card -->
              <div class="card shadow-sm" @click="showEditBtn($event, item)" v-show="(!editFlag || !(selected.iid==item.iid)) || !editBtnFlag" style="width: 100%; height: 100%">
                <img :src="item.img" :alt="item.iName" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{{item.iName}}</h5>
                  <p class="card-text">
                    <span v-show="item.price">${{ item.price }} · </span>{{ item.cals }}Cals
                  </p>
                  <button v-show="(selected.iid==item.iid)&&editBtnFlag" @click="editItem()" class="btn btn-outline-success">Edit</button>
                </div>
              </div>
              <!-- edit item card -->
              <div class="card shadow-sm editItemCard" style="width: 100%; height: 100%" v-show="(selected.iid==item.iid)&& editFlag">
                <nav v-show="!item.editPrice">
                  <ul>
                    <li @click="handleOption($event, option)" class="btn btn-outline-success" v-for="(option, idx) in item.edit" :key="idx">{{option}}</li>
                  </ul>
                  <button @click="doneEdit(item)" class="btn btn-outline-success">Done</button>
                </nav>  
                <nav v-show="item.editPrice">
                  <ul>
                    <li @click="handleOption($event, option)" class="btn btn-outline-success" v-for="(option, idx) in item.editPrice" :key="idx">{{option.eName}} +${{option.ePrice}}</li>
                  </ul>
                  <button @click="doneEdit(item)" class="btn btn-outline-success">Done</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="cart">
      <div class="list" v-for="(item, idx) in shoppingCart" :key="idx">
        <span>{{item}}</span>
      </div>
  </section>
  <span id="total">Total : ${{total}}</span>
</template>
<script>
import readJson from "../services/JsonService";
// import jQuery from "jquery";
// const $ = jQuery;

export default {
  name: "ShowDetails",
  data() {
    return {
      products: [],
      product: {},
      id: 0,
      ingredients: [],
      editBtnFlag: false,
      editFlag: false,
      selected: '',
      selectedOption: '',
      activeIndex: 0,
      shoppingCart: new Set(),
      flag:false,
      total:0,
    };
  },
  methods: {
    loadIngredients() {
      readJson.getIngredientsJson().then((res) => {
        this.ingredients = res.data;
      });
    },
    showEditBtn(event, item){
      event.currentTarget.style = "border: 3px solid #00491e; height: 100%;"
      // if(this.selected.iid == item.iid){
      //    event.currentTarget.style = "height: 100%;"
      // }
      if(this.selected.iid != item.iid){
        this.editFlag = false
      }
      if (item.edit || item.editPrice){
        this.selected = item
        this.editBtnFlag = true
      }
    },
    editItem(){
      this.editBtnFlag = false
      this.editFlag = true
    },
    handleOption(event, option){
      console.log(event.currentTarget.innerText);
      const cartEl = document.getElementById("cart");

      for(let i of cartEl.children){
        if(i.children[0].innerText == event.currentTarget.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[0].innerText){
          let spanEl = document.createElement("span");
          if(event.currentTarget.innerText.indexOf("+") != -1){
            let items = event.currentTarget.innerText.split("+");
            console.log(items)
            spanEl.innerText = items[0];

            let spanEl2 = document.createElement("span");
            spanEl2.innerText = items[1];

            i.appendChild(spanEl);
            i.appendChild(spanEl2);

            this.total += Number(items[1].split("$")[1])
          }else{
            spanEl.innerText = event.currentTarget.innerText;
            i.appendChild(spanEl);
          }
        }
      }

      console.log(cartEl);
      document.querySelector(".editItemCard li").style.backgroundColor = "white"
      document.querySelector(".editItemCard li").style.color = "#198754"
      console.log(document.querySelector(".editItemCard li").style);
      event.currentTarget.style = "background-color: #198754; color: white;"
      if(this.selectedOption == option){
        event.currentTarget.style= "color: #198754; background-color: white;"
      }
      this.selectedOption = option;
    },
    doneEdit(){
      this.editFlag = false
    },
    getData(e){
      this.shoppingCart.add(e.currentTarget.children[0].children[1].children[0].innerText);

      if(!this.flag){
        this.flag = true;
        const spanEl = document.createElement("span");
        spanEl.innerText = e.currentTarget.children[0].children[1].children[1].children[0].innerText.split(" ")[0];
        
        setTimeout(()=>{
          const cartEl = document.getElementById("cart").children[0];
          cartEl.children[0].appendChild(spanEl)
          this.total += Number(spanEl.innerText.split("$")[1]);
          }, 100);
      }

    }
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id > 100 && this.id < 200) {
      readJson
        .getProductsJson()
        .then((res) => {
          res.data.sandwiches.forEach((product) => {
            if (product.pid == this.id) {
              this.product = product;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (this.id > 200 && this.id < 300) {
      readJson
        .getProductsJson()
        .then((res) => {
          res.data.salads.forEach((product) => {
            if (product.pid == this.id) {
              this.product = product;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (this.id > 300) {
      readJson
        .getProductsJson()
        .then((res) => {
          res.data.breakfasts.forEach((product) => {
            if (product.pid == this.id) {
              this.product = product;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.loadIngredients();
  },
};
</script>
<style scoped>
.pdpLeftPart {
  padding: 60px 0 15px 0;
}
.prodImage {
  width: 40%;
  padding: 0;
  padding-top: 60px;
  position: fixed;
  right: 0;
}

.card.shadow-sm {
  transition: 0.4s;
}
.editItemCard{
  border: 3px solid #00491e; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.editItemCard ul{
  display: flex;
  flex-direction: column;
  row-gap: 0.4vh;
}
.editItemCard li {
  transition: 0.4s;
}
.black{
  background-color: black;

}
section{
  position: fixed;
  top: 10%;
  right: 10%;
}
#total{
  position: fixed;
  bottom: 10px;
  right: 12%;
}

#cart {
  width: 20%;
  position: fixed;
  right: 20vh;
  z-index: 2;
  border: 5px solid #00491e;
  color: black;
  background-color: white;
  height: 70vh;
  top: 20vh;
  border-radius: 20px;
  padding: 2rem;
}

section span,
#total{
  font-size: 20px;
}

section span{
  text-align: left;
  display: flex;
  column-gap: 4vh;
}

.list {
  border-bottom: 3px solid green;
  /* display: flex;
  column-gap: 4vh; */
  text-align: left;
}

.list span:first-child {
  width: 100%;
}

.container {
  position: relative;
}


</style>
