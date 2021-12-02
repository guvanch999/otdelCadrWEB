<template>
  <div style="height: 100vh">
    <b-row style="height: 100%">
      <b-col md="6" style="background-color:hsla(23,0%,0%,0.1)">
        <b-container class="mustsenterBolg">
          <div class="mustsenteritem">
            <h1>Login first</h1>
          </div>
        </b-container>
      </b-col>
      <b-col md="6">
        <b-container class="mustsenterBolg">
          <div class="mustsenteritem" style="width: 80%">
            <h4>Login first</h4>
            <b-input v-model="loginProps.username" type="text" placeholder="Username" style="width: 100%" /><br>
            <b-input v-model="loginProps.password" type="password" placeholder="Password" style="width: 100%" />
            <br>
            <b-button variant="primary" @click="handleLogin">
              Login
            </b-button>
          </div>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {

  data () {
    return {
      loginProps: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin (event) {
      event.preventDefault()
      console.log(this.loginProps)
    }
  }

}
</script>

<style>
.mustsenterBolg{
  position: relative;
  height: 100%;
}
.mustsenteritem{
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}

</style>
