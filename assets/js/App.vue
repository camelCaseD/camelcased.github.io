<template>
  <div class="app">
    <div class="container">
      <header>
        <amp-img src="/images/logo.jpg" layout="fixed" width="252px" height="61px"></amp-img>
      </header>

      <Grid>
        <router-view></router-view>
      </Grid>

      <footer>
        <nav>
          <ul>
            <li>
              <a href="https://linkedin.com/in/camelcased">
                <amp-img src="/images/linkedin.svg" layout="fixed" width="20px" height="20px"></amp-img>
              </a>
            </li>
            
            <li>
              <a href="https://github.com/camelCaseD">
                <amp-img src="/images/github.svg" layout="fixed" width="20px" height="20px"></amp-img>
              </a>
            </li>
            
            <li>
              <a href="https://vimeo.com/camelcased">
                <amp-img src="/images/vimeo.svg" layout="fixed" width="20px" height="20px"></amp-img>
              </a>
            </li>
            
            <li>
              <a href="skype:camelCaseD?userinfo">
                <amp-img src="/images/skype.svg" layout="fixed" width="20px" height="20px"></amp-img>
              </a>
            </li>
          </ul>
        </nav>

        <p>All contents &copy; {{ year }} camelCaseD, Brandon Borders</p>
      </footer>
    </div>
  </div>
</template>

<script>
  import Grid from './components/Grid.vue'

  export default {
    components: {
      Grid
    },

    computed: {
      year: function () {
        const date = new Date();

        return date.getFullYear();
      }
    }
  }
</script>

<style lang="sass" scoped>
  @media (max-width: 1332px) {
    .app {
      .container {
        width: 90% !important;
      }
    }
  }
  
  @media (max-width: 1090px) {
    .app {
      .container {
        width: 100% !important;
      }
    }
  }

  @media (max-width: 932px) {
    .app {
      .container {
        header {
          img {
            width: 50% !important;
            margin-left: auto;
            margin-right: auto;
            display: block;
          }
        }

        footer {
          top: 970px !important;
        }
      }
    }
  }
  
  @media (max-width: 503px) {
    .app {
      .container {
        header {
          img {
            width: 100% !important;
          }
        }

        footer {
          top: 2860px !important;
        }
      }
    }
  }

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

      footer {
        position: relative;
        top: 40px;

        p {
          text-align: center;
          font-size: 12px;
        }

        nav {
          img {
            width: 20px;
          }

          ul {
            list-style-type: none;
            width: 95px;
            padding: 0;
            margin: 0 auto;

            li {
              display: inline-block;
              margin: 0;
              padding: 0;
            }
          }
        }
      }
    }

    h1 {
      font-weight: normal;
    }
  }
</style>
