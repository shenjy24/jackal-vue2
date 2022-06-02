<template>
  <div class="hi">
    {{ show }}<br>
    <input type="button" @click="toggleShow()" value="toggle"/>
  </div>
</template>

<script>
import {toggle} from "../../../common/mixin/toggle";

export default {
  name: 'MixinComponent2',
  mixins: [toggle],
  mounted() {
    console.log("2:mounted")
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
