<template>
  <div style="horiz-align: center">
    <div class="loginBlock">
      <div class="headerblock">
        <h2 class="headerText">
          OGUZ HAN ENGINEERING AND TECHNOLOGY UNIVERSITY
        </h2>
      </div>
      <b-row class="mt-3">
        <b-col md="4">
          <img src="img.png" width="166" height="166" style="margin: 20px"/>
        </b-col>
        <b-col md="8">
          <h3
            class="loginINText">Log in</h3>
          <b-input v-model="loginProps.username" type="text" placeholder="Username"
                   class="inputclass mb-3"/>
          <b-input v-model="loginProps.password" type="password" placeholder="Password"
                   class="inputclass"/>
          <b-button @click="handleLogin" class="singinbuttonstyle">Iceri gir
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  middleware:['auth'],
  data() {
    return {
      loginProps: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      loginFunction: 'liginAction'
    }),
    async handleLogin(event) {
      event.preventDefault()
      await this.loginFunction(this.loginProps);
      if (this.userToken) {
        let returnTo=this.returnPath!=='/login'?this.returnPath:'/students/addstudent';
        this.$router.push(returnTo);
      } else {
        alert('Bir zat nadogry');
      }
    }
  },
  computed: {
    ...mapGetters({
      userToken: 'getUserToken',
      returnPath:'getReturnPath'
    })
  }
}
</script>

<style>
.loginBlock {
  position: absolute;
  width: 618px;
  height: 410px;
  left: 50%;
  top: 25%;
  /* White */

  background: #FFFFFF;
  border-radius: 8px;
  transform: translateX(-50%);
}

.headerblock {
  width: 100%;
  height: 121px;
  background: #0762C8;
  border-radius: 8px;
}

.headerText {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  margin-right: 20px;
  margin-left: 20px;
  padding-top: 20px;
  text-align: center;
  color: #FFFFFF;
}

.loginINText {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #0762C8;
  margin-top: 20px;
  margin-bottom: 10px;
}

.inputclass {
  width: 80%;
  background: #F2F3F5;
  border-radius: 8px;
}

.singinbuttonstyle {
  background-color: #0762C8;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 20px
}

.singinbuttonstyle:hover {
  background-color: #0e88fd;
}
</style>
