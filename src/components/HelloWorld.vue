<template>
  <div class="hi">
    {{ msg }}<br>
    <input type="button" @click="updateMsg('Nice')" value="click"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    updateMsg (msg) {
      this.msg = msg
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
