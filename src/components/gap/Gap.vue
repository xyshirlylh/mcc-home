<template>
  <div :style="{width: `${width/10}rem`, height: `${height/10}rem`}"></div>
</template>

<script>
  export default {
    name: "Gap",
    props: {
      width: {
        type: Number,
        default: 0,
      },
      height: {
        type: Number,
        default: 0,
      }
    }
  }
</script>
