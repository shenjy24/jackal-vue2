<template>
  <div>
    <video id="videoElement" controls width="videoWidth + 'px'" height="videoHeight + 'px'"></video>
    <button @click="playPause">播放/暂停</button>
  </div>
</template>

<script>
import flvjs from 'flv.js'

export default {
  name: "FlvComponent",
  data() {
    return {
      videoWidth: 300,
      videoHeight: 200,
      flvPlayer: null,
    }
  },
  methods: {
    playPause() {
      if (this.flvPlayer._mediaElement.paused) {
        this.flvPlayer.play()
      } else {
        this.flvPlayer.pause()
      }
    }
  },
  mounted() {
    let videoElement = document.getElementById('videoElement')
    this.flvPlayer = flvjs.createPlayer({
      type: 'mp4',
      isLive: false,
      hasAudio: true,
      url: require('../../assets/media/mov_bbb.mp4')
    })
    this.flvPlayer.attachMediaElement(videoElement)
    this.flvPlayer.load()
    this.flvPlayer.play()
  }
}
</script>

<style scoped>

</style>
