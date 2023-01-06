<template>
  <section class="container">
    <swiper :slidesPerView="1" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide>
        <img class="slideImg" src="../assets/img/2.jpg">
        <p class="description">Everything we use to make our food is 100% pure without any chemicals of the sort.</p>
      </swiper-slide>
      <swiper-slide>
        <img class="slideImg" src="../assets/img/3.jpg">
        <p class="description">All our ingredients and materials are eco-friendly as to help the environment we live in.</p>
      </swiper-slide>
      <swiper-slide>
        <img class="slideImg" src="../assets/img/1.jpg">
        <p class="description">Start your day off right!</p>
      </swiper-slide>
    </swiper>
  </section>
  <section class="contents" id="contents">
    <article class="news_one">
        <aside>
        </aside>
        <article>
            <h1>Try this month's sandwich</h1>
            <p>Come over to Skytrain today to taste our wonderful new sandwich.</p>
            <a href="#">Learn more</a>
        </article>
    </article>
    <article class="news_two">
        <aside>
        </aside>
        <article>
            <h1>The World's Best Sandwich award</h1>
            <p>We have been honoured with the special award of having the best sandwich's in the world.</p>
            <a href="#">Learn more</a>
        </article>
    </article> 
  </section>
</template>

<script>
// npm i swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";


export default {
  name: "HomeSlideCompo",
  components:{
    Swiper,
    SwiperSlide,
  },
  props:[],
  setup(){
    return {
      modules: [Navigation],
    };
  },
  methods:{

  },
  watch:{

  }
}
</script>

<style>

  .slideImg{
    width: 100%;
    height: 70vh;
    position: relative;
    z-index: 1;
  }

  .description {
    position: absolute;
    z-index: 2;
    color: white;
    top: 600px;
    /* font-size: 28px; */
    width: 100%;
    font-weight: 600;
  }
  
  .swiper{
    overflow: hidden;
  }
  .swiper-slide{
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after{
    color: #FDEEC0;
  }

  .contents {
    display: flex;
    flex-direction: column;
    row-gap: 10vh;
    padding: 3rem 15rem ;
  }
  
  .contents a {
    text-decoration: none;
    border: 3px solid whitesmoke;
    border-radius: 50px;
    padding: 3%;
    color: whitesmoke;
    /* font-size: 24px; */
  }

  .contents h1 {
    /* font-size: 38px; */
    font-weight: 600;
  }

  .contents p {
    width: 85%;
    /* font-size: 26px; */
  }
  
  .news_one {
    background-color: rgb(79, 161, 182);
    height: 50vh;
    color: whitesmoke;
    display: flex;
    justify-content: space-between;
  }
  .news_one aside {
    background-image: url("../assets/img/5.jpeg");
    background-position: right;
    width: 50%;
  }
  .news_one > article {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: 2vh;
  }
  .news_two {
    background-color: #18219c;
    height: 50vh;
    color: whitesmoke;
    display: flex;
    justify-content: space-between;
  }
  .news_two aside {
    background-image: url("../assets/img/4.jpg");
    background-position: right;
    width: 50%;
  }
  .news_two > article {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: 2vh;
  }


  
</style>