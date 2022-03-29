<template>
  <div class="container">
    <header>
      <slot name="header" :page="page">
        {{ page.header1 }}
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'WebPage',
  data() {
    return {
      page: {
        header1: 'web header1',
        header2: 'web header2',
        footer: 'web footer'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  color: red;
  font-size: 20px;
}
</style>
