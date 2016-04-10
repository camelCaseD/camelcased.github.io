<template>
  <div id="grid">
    <template v-for="(index, item) in items">
      <div @click="enlarge(index, $event)"  class="item">
        <div class="image" :style="{backgroundImage: 'url(\'' + item.image + '\')'}"></div>

        <h1>
          <a :href="item.link" v-show="item.link">
            {{ item.title }}
            <i class="material-icons">launch</i>
          </a>

          <span v-show="!item.link">{{ item.title }}</span>
        </h1>

        <p>{{ item.summary }}</p>
      </div>
    </template>

    <slot></slot>
  </div>
</template>

<style lang="sass">
  #grid {
    margin-top: 5%;
    height: 470px;
    position: relative;

    .item {
      width: 24%;
      height: 50%;
      cursor: pointer;
      display: inline-block;
      position: relative;
      
      &:hover div.image {
        filter: grayscale(0%);
        transition: filter 0.4s linear;
      }

      div.image {
        width: 100%;
        height: 100%;
        filter: grayscale(100%);
        transition: filter 0.4s linear;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center left;
      }

      a {
        color: white;
        text-decoration: none;
      }

      h1, p {
        left: 2.5%;
        text-shadow: 1px 1px 2px black;
      }

      h1 {
        margin: 0;
        position: absolute;
        top: 25%;

        i {
          font-size: 14px;
          position: relative;
          top: 2px;
          right: 5px;
        }
      }

      p {
        margin: 0;
        position: absolute;
        top: 50%;
        font-size: 18px;
      }
    }
  }
</style>

<script>

  export default {
    data: function () {
      return {
        items: []
      };
    },

    ready: function () {
      this.$http({url: 'https://api.github.com/gists/dc204ef991491acc002881aa95da61c8?access_token=57f712031cf2db579b495667d0c8ca69854d8a9f', methid: 'GET'}).then(function (response) {
        this.$set('items', JSON.parse(response.data.files['items.json'].content).items);
      });
    },

    methods: {
      enlarge: function (index, event) {
        if (event.target.tagName !== 'A' && event.target.tagName !== 'I') {
          this.$router.go('/grid/' + index);
        }
      }
    }
  }
</script>
