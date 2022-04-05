<template>
  <web-page>
    <!-- headerProps任意命名 -->
    <template v-slot:header="headerProps">
      <h1>Here might be a page title</h1>
      {{ headerProps.page.header2 }}
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </web-page>
</template>

<script>
import WebPage from "./WebPage";
export default {
  name: 'WebSite',
  components: {WebPage}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  color: red;
  font-size: 20px;
}
</style>
