<template>
  <!-- div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推 -->
  <div class="box">
  </div>
</template>

<script>

export default {
  name: 'CssComponent',
  data() {
    return {}
  },
  methods: {
    updateMsg(msg) {
      this.msg = msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /*z-index: -1;*/
  background: url("../../assets/flex/img/background.png");
}
</style>
