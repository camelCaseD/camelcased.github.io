<template>
  <div id="grid">
    <template v-for="(index, item) in items">
      <div @click="enlarge(index, item)"  class="item">
        <img :src="item.image" />

        <h1>{{ item.title }}</h1>
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
      height: 35%;
      cursor: pointer;
      display: inline-block;
      position: relative;
      
      &:hover img {
        filter: grayscale(0%);
        transition: filter 0.4s linear;
      }

      img {
        width: 100%;
        height: 100%;
        filter: grayscale(100%);
        transition: filter 0.4s linear;
      }

      h1, p {
        left: 2.5%;
      }

      h1 {
        margin: 0;
        position: absolute;
        top: 25%;
      }

      p {
        margin: 0;
        position: absolute;
        top: 50%;
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
      enlarge: function (index, item) {
        this.$router.go('/grid/' + index);
      }
    }
  }
</script>
