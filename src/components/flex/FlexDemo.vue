<template>
  <!-- div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推 -->
  <div class="box">
    <span class="item1"></span>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png'

export default {
  name: 'Flex',
  data() {
    return {}
  },
  methods: {
    updateMsg(msg) {
      this.msg = msg
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: fixed; /*禁止滚动*/
  background: url("../../assets/flex/img/background.png") center center no-repeat;
  background-size: 100% 100%;
}

.item1 {

}
</style>
