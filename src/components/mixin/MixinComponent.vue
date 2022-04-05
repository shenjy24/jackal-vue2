<template>
  <div class="hi">
    {{ show }}<br>
    <input type="button" @click="toggleShow()" value="toggle"/>
  </div>
</template>

<script>
import {toggle} from "../../common/mixin/toggle";

export default {
  name: 'MixinComponent',
  mixins: [toggle]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  color: red;
  font-size: 20px;
}
</style>
