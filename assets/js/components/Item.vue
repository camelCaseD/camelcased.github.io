<template>
  <div class="item">
    <h1>{{ item.title }}</h1>
    <p>{{ item.body }}</p>

    <button @click="shrink">x</button>
  </div> 
</template>

<style lang="sass" scoped>
  $animation-time: 0.7s;

  #grid {
    .item {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      cursor: default;
      background-repeat: no-repeat;
      background-size: cover;

      &.enlarge {
        animation-name: enlarge;
        animation-duration: $animation-time;
        animation-timing-function: linear;
      }
      
      &.shrink {
        animation-name: shrink;
        animation-duration: $animation-time;
        animation-timing-function: linear;
      }

      &.final {
        width: 100%;
        height: 100%;
        top: 0 !important;
        left: 0 !important;
      }

      button {
        right: 10px;
        position: absolute;
        background-color: transparent;
        border: none;
        font-size: 30px;
        color: white;
        cursor: pointer;
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

  @keyframes shrink {
    from {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    to {
      width: 24%;
      height: 50%;
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
      loadData: function (data, animate) {
        animate = animate !== false ? true : animate;

        var index = parseInt(this.$route.params.item);

        this.$set('item', data[index]);

        var divider = index > 4 ? 2 : 1;
        this.$el.style.left = index * 24 / divider + '%';

        var multiplier = index > 4 ? 2 : 0;
        this.$el.style.top = 35 * multiplier + '%';

        this.$el.style.backgroundImage = "url('" + this.item.image + "')";

        if (animate) {
          this.enlarge();
        } else {
          this.$el.classList.add('final');
        }
      },

      enlarge: function () {
        this.$el.classList.add('enlarge');
        this.$el.classList.add('final');

        setTimeout(() => {
          this.$el.classList.remove('enlarge');
        }, 1000);
      },

      shrink: function () {
        this.$el.classList.add('shrink');
        this.$el.classList.remove('final');

        setTimeout(() => {
          this.$el.style.display = 'none';

          this.$el.classList.remove('shrink');

          this.$router.go('/');
        }, 1000);
      }
    },

    ready: function () {
      if (this.$parent.items.length === 0) {
        this.$parent.$watch('items', (newVal) => {
          this.loadData(newVal, false);
        });
      } else {
        this.loadData(this.$parent.items);
      }

      this.$router.afterEach(() => {
        if (this.$route.path !== '/') {
          this.loadData(this.$parent.items);
        }
      });
    }
  }
</script>
