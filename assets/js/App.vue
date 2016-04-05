<template>
  <div class="app">
    <div class="container">
      <header>
        <img src="/images/logo.jpg" />
      </header>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="sass" scoped>
  .app {
    width: 100%;
    height: 100%;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    .container {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      
      .profile {
        background: url("/images/profile.jpg") center/cover;
        background-repeat: no-repeat;
        background-position-y: -105px;
        height: 300px;
        width: 900px;
        margin-left: auto;
        margin-right: auto;
        opacity: 0.9;
      }

      header img {
        width: 25%;
      }
    }

    h1 {
      font-weight: normal;
    }
  }
</style>
