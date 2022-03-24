<template>
  <div>
    <component-son1/>
    <component-son2 title="My journey with Vue"></component-son2>
    <div :style="{ fontSize: postFontSize + 'em' }">
        <component-son3 v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title" v-on:enlarge-text="postFontSize += 0.1"></component-son3>
    </div>
  </div>
</template>

<script>
import ComponentSon1 from "./ComponentSon1";
import ComponentSon2 from "./ComponentSon2";
import ComponentSon3 from "./ComponentSon3";

export default {
  name: 'ComponentParent',
  components: {ComponentSon2, ComponentSon1, ComponentSon3},

  data() {
    return {
      posts: [
        {id: 1, title: 'My journey with Vue'},
        {id: 2, title: 'Blogging with Vue'},
        {id: 3, title: 'Why Vue is so fun'}
      ],
      postFontSize: 1
    }
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
.hi {
  color: red;
  font-size: 20px;
}
</style>
