<template>
  <div class="app">
    <div class="container">
      <Page>
        <div>
          <img src="/images/logo.jpg" />

          <header>
            <p>Noun: An alias representing the phrase "Camel Case Developer"</p>
          </header>
        </div>
      </Page>

      <Page>
        <div>
          <div class="profile"></div>

          <header>
            <p class="small">
              I am a self-taught software engineer since I was about 11 years old.
            </p>
          </header>
        </div>
      </Page>
    </div>
  </div>
</template>

<script>
  import Page from './components/Page.vue'

  export default {
    components: {
      Page
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
    }

    h1 {
      font-weight: normal;
    }
  }
</style>
