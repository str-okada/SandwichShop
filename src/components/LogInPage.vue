<template>
  <main class="form-signin w-100 m-auto">
    <form style="width:300px">
      <h1 class="navbar-brand mb-4" style="font-weight: bold; font-size: 40px;"><span style="color: #f2b840">Order</span><span style="color: #3d8a39">SkyTrain</span></h1>
      <h1 class="h3 mb-3 fw-normal">Please Login</h1>
      <div class="form-floating">
        <input v-model="uname" type="text" class="form-control" id="floatingInput">
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input v-model="pass" type="password" class="form-control" id="floatingPassword">
        <label for="floatingPassword">Password</label>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input v-on:click="isChecked" type="checkbox" value="remember-me" id="remember"> Remember me
        </label>
      </div>
      <button v-on:click="login" class="w-100 btn btn-lg btn-success" type="submit">
        Login
      </button>
      <p class="mt-5 mb-3 text-muted">© 2017-2022</p>
    </form>
  </main>
</template>

<script>
import readJson from "../services/JsonService";
import userClass from "../classes/userClass"
import cookieClass from "../classes/cookieClass"

export default {
  name: "LoginPage",
  data() {
    return {
      uname: "",
      pass: "",
      logFlag: false
    };
  },
  methods: {
    login() {
      readJson
        .getUsersJson()
        .then((res) =>
          res.data.forEach((user) => {
            if (user.username == this.uname && user.password == this.pass) {
              let loggedUser = new userClass(user.cid, user.firstName, user.lastName, user.username, user.email, user.address, user.cardNum, user.expDate)
              this.logFlag = true
              this.$emit("handleLogFlag", this.logFlag)
              sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser.toObject()));

              if(document.querySelector("#remember").checked){
                const cookieObj = new cookieClass();
                cookieObj.setCookie('uname', loggedUser.toObject().uname);
              }
              alert(`Welcome, ${loggedUser.toObject().fullname}`)

              this.$router.push("/menu");
              // this.loginFlag = true;
            }
          })
        )
        .catch((err) => console.log(err));
    },
    // isChecked(e) {
    //   if (e.target.checked) {
    //     const cookieObj = new cookieClass();
    //     console.log(this.userObj);
    //     console.log(this.userObj.uname);
    //     cookieObj.setCookie('username', this.userObj.uname);
    //   }
    // },
  },
  mounted() {
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (loggedUser){
      this.$router.push("/menu");
      this.logFlag = true
      this.$emit("handleLogFlag", this.logFlag)
      console.log(this.logFlag);

    }
    console.log(loggedUser);

    const cookieObj = new cookieClass();
    if(cookieObj.getCookie('uname')!=''){
      this.uname = cookieObj.getCookie('uname');
    }
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
  color: #42b983;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
