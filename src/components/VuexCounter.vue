<template>
  <div class="hi">
    {{ getCount }}<br>
    <input type="button" @click="updateCount()" value="click"/>
  </div>
</template>

<script>
export default {
  name: 'VuexCounter',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    updateCount() {
      this.$store.dispatch("counter/setCountAction", this.$store.state.counter.count + 1)
    }
  },
  computed: {
    getCount() {
      return this.$store.state.counter.count
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
