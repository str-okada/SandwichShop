<template>
  <section>
    <div>
      <h1>404</h1>
      <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
      <p>
        The page you are looking for is temporarily unavailable. <br>Click the button below to go back to the homepage.
      </p>
      <button class="btn" @click="goBack">
        BACK TO HOMEPAGE
      </button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.push('/menu');
    }
  }
}
</script>

<style scoped>
  div{
    padding: 10rem;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    align-items: center;
  }

  img {
    width: 600px;
  }

  h1 {
    font-size: 7.5em;
    margin: 15px 0px;
    font-weight:bold;
  }
  
  h2 {
    font-weight:bold;
  }
  
  .btn {
    width: fit-content;
    background: transparent;
    padding: 8px 50px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1em;
    letter-spacing: 2px;
    transition: 0.2s ease;
    font-weight: bold;
    margin: 5px 0px;
    border: 4px solid green;
  }

  .btn:hover {
    color: white;
    background: green;
    transition: 0.2s ease;
  }


</style>