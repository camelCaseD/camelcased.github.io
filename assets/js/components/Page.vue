<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">
  section {
    img {
      margin-left: auto;
      margin-right: auto;
      display: block;
    }

    header {
      text-align: center;
      
      p {
        font-size: 30px;
        font-weight: 200;

        &.small {
          font-size: 20px;
        }
      }
    }
  }
</style>
