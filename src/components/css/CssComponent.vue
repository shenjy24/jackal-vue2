<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'CssComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    updateMsg (msg) {
      this.msg = msg
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  --main-font: Helvetica, Arial, sans-serif;
}

p {
  font-family: var(--main-font);
}
</style>
