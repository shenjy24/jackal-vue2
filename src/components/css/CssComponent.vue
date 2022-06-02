<template>
  <div :style="getClass()">
    <p>{{msg}}</p>
    <a class="tooltip" href="#">链接文字 <span>提示文字</span></a>
  </div>
</template>

<script>
export default {
  name: 'CssComponent',
  data() {
    return {
      msg: "自定义属性",
      show: false
    }
  },
  methods: {
    getClass() {
      if (this.show) {
        return {background: '#fff2df'}
      }
      return {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  --main-font: Helvetica, Arial, sans-serif;
}

p {
  font-family: var(--main-font);
}

.color {
  background: #fff2df;
}

.tooltip {
  position: relative
}

.tooltip span {
  display:none;
  padding:5px;
  width:200px;
  border-style: solid;
  border-width: 1px;
  border-color: #00AEFF;
}

.tooltip:hover {
  background:#fff;
} /*background-color is a must for IE6*/

.tooltip:hover span {
  display:inline;
  position:absolute;
  top: -2em;
  left: -0.5em;
}
</style>
