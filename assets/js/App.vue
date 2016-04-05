<template>
  <div class="app">
    <div class="container">
      <header>
        <img src="/images/logo.jpg" />
      </header>

      <Grid>
        <router-view></router-view>
      </Grid>
    </div>
  </div>
</template>

<script>
  import Grid from './components/Grid.vue'

  import VueRouter from 'vue-router'

  export default {
    components: {
      Grid
    },

    created: function () {
      let router = new VueRouter();

      router.map({
        '/grid/:item': {
          component: {}
        }
      });

      router.start(Grid, '#grid');
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
        margin-top: 20px;
      }
    }

    h1 {
      font-weight: normal;
    }
  }
</style>
