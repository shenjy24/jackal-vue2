<template>
  <div>
    <table class="t">
      <tr v-for="u in users">
        <td @click="showUser(u.name)">{{u.name}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Router1',
  data() {
    return {
      users: []
    }
  },
  methods: {
    showUser(userName) {
      this.$router.push({name: 'Router2', query: {name: userName}})
    }
  },
  mounted() {
    this.$axios({
      method: 'post',
      url: '/user/listUser',
      data: {}
    }).then(response => {
      this.users = response
      console.log(response, 'success')
    }).catch(error => {
      console.log(error, 'error')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t {
  text-align: center;
}
</style>
