<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import {SessionKey} from "./common/constant";

export default {
  name: 'App',

  created() {
    if (sessionStorage.getItem(SessionKey.COUNTER)) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem(SessionKey.COUNTER))))
    }

    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem(SessionKey.COUNTER, JSON.stringify(this.$store.state))
    })

    window.addEventListener('keydown', event => {
      console.log("key:" + event.key)
      console.log("code:" + event.code)
      if (event.key === 'F5' || event.key === 'Control' || event.key === 'w') {
        event.preventDefault()
      }
    })
  },

  beforeDestroy() {
    window.removeEventListener('keydown', event => {
      console.log(event.value)
      event.preventDefault()
    })
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
