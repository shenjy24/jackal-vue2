<template>
  <div>
    <img @click="onClick()" src="../../assets/logo.png"/>
  </div>
</template>

<script>
export default {
  name: 'EventComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick () {
      console.log(this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  color: red;
  font-size: 20px;
}
</style>
