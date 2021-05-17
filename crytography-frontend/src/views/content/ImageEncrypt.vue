<template>
  <div>
    <canvas id="canvas" ref="canvas"></canvas>
    img
  </div>
</template>

<script>
export default {
  name: 'ImageEncrypt',
  data () {
    return {
      canvas: '',
      ctx: '',
      pixArr: []
    }
  },
  methods: {
    createImage () {
      const img = new Image(200, 200)
      img.crossOrigin = 'Anonymous'
      img.src = 'https://miro.medium.com/max/875/1*zeKjWCjyAGZ9JN4fvnWsiA.png'

      // img.Access-Control-Allow-Origin "*"

      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')
      const that = this
      img.onload = renderCanvas

      function renderCanvas () {
        // Use the intrinsic size of image in CSS pixels for the canvas element
        that.canvas.width = this.naturalWidth
        that.canvas.height = this.naturalHeight

        that.ctx.drawImage(this, 0, 0, this.naturalWidth, this.naturalHeight)
        console.log(that.canvas.toDataURL())
        //  arr.length = 143792
      }
    }
  },
  mounted () {
    this.createImage()
  }
}
</script>

<style scoped>

</style>
