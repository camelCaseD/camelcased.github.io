<template>
  <div class="item">
    <h1>{{ item.title }}</h1>
    <p>{{ item.body }}</p>
  </div> 
</template>

<style lang="sass" scoped>
  #grid {
    .item {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      cursor: default;
      background-repeat: no-repeat;
      background-size: cover;

      &.animate {
        width: 24%;
        animation-name: enlarge;
        animation-duration: 1s;
        animation-timing-function: linear;
      }

      &.final {
        width: 100%;
        height: 100%;
        top: 0 !important;
        left: 0 !important;
      }
    }
  }

  @keyframes enlarge {
    from {
      width: 24%;
    }

    to {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
</style>

<script>
  export default {
    data: function () {
      return {
        item: {}
      };
    },

    methods: {
      loadData: function (data) {
        var index = parseInt(this.$route.params.item);

        this.$set('item', data[index]);

        var divider = index > 4 ? 2 : 1;
        this.$el.style.left = index * 24 / divider + '%';

        var multiplier = index > 4 ? 2 : 0;
        this.$el.style.top = 35 * multiplier + '%';

        this.$el.style.backgroundImage = "url('" + this.item.image + "')";

        this.$el.classList.add('animate');

        setTimeout(() => {
          this.$el.classList.remove('aniamte');
          this.$el.classList.add('final');
        }, 1000);
      }
    },

    ready: function () {
      if (this.$parent.items.length === 0) {
        this.$parent.$watch('items', (newVal) => {
          this.loadData(newVal);
        });
      } else {
        this.loadData(this.$parent.items);
      }

      this.$router.afterEach(() => {
        this.loadData(this.$parent.items);
      });
    }
  }
</script>
