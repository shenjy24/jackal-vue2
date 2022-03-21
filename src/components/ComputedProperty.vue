<template>
  <div class="hi">
    <p>Original message: "{{ msg }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>Computed reversed message: "{{ getReversedMessage() }}"</p>
    <input v-model:value="msg"/>
  </div>
</template>

<script>
export default {    //计算属性
  name: 'ComputedProperty',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    getReversedMessage() {
      return this.msg.split('').reverse().join('')
    }
  },
  watch: {  //侦听器，需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的
    //如果 `msg` 发生改变，这个函数就会运行
    msg() {
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
