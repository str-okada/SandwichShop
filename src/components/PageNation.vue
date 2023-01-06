<template>
  <div id="pagenation">
    <button class="btn" v-if="nowPage > 1" @click="()=>onPageChange(nowPage - 1)">&lt;</button>
    <button class="btn" v-for="(page, index) in pageList" :key="index" @click="()=>onPageChange(page)">{{page}}</button>
    <button class="btn" v-if="nowPage < lastPage()" @click="()=>onPageChange(nowPage + 1)">&gt;</button>
  </div>
</template>
<script>
export default {
  name: 'PageNation',
  props: ['nowPage', 'total'],
  data(){
    return {
      pageList: [],
      counter: 0
    }
  },
  methods: {
    // total = 1 10 11 20 21 100 101
    // lastPage = 1 1 2 2 3 10 11
    lastPage(){
      return Math.ceil(this.total / 12);
    },
    // nowPage = 1 10 11 20 21 100 101
    // startPage = 1 1 11 11 21 91 101
    startPage(){
      // console.log(this.nowPage);
      return Math.ceil(this.nowPage / 10) * 10 - 9;
    },
    // nowPage = 1 10 11 20 21 100 101
    // endPage = 10 10 20 20 30 100 110
    endPage(){
      return this.startPage() + 9 > this.lastPage() ? this.lastPage() : this.startPage() + 9;
    },
    onPageChange(page){
      this.$emit('onPageChange', page);
    }
  },
  watch: {
    total: function(){
      this.lastPage();
      this.startPage();
      this.endPage();
      for (let i = this.startPage(); i <= this.endPage(); i++) {
        this.pageList.push(i);
      }
    },
    nowPage: function(){
      let tmp = document.getElementById("pagenation");
      for(let i of tmp.children){
        console.log(i);
        if(i.innerText == this.nowPage){
          i.style.backgroundColor = "green";
          i.style.color = "white";
        }else{
          i.style.backgroundColor = "transparent";
          i.style.color = "black";
        }
      }
      console.log(tmp);
    }
  },
  mounted() {
    // document.getElementById("pagenation").children[0].style.backgroundColor = "red";
  }
}

</script>
<style scoped>
  #pagination {
    display: inline-block;
  }

  .btn{
    color: black;
    background-color: transparent;
    border: none;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  .btn:active {
    border-radius: 5px;
    /* background-color: #4CAF50; */
    border: 1.5px solid #4CAF50;
  }
</style>