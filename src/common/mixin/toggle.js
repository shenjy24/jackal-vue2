export const toggle = {
  data() {
    return {
      show: false
    }
  },
  created() {
    console.log("created")
  },
  mounted() {
    console.log("mounted")
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    }
  }
}
