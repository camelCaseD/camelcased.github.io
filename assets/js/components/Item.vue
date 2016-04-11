<template>
  <div class="item">
    <h1>
      <a :href="item.link" v-show="item.link">
        {{ item.title }}
        <i class="material-icons">launch</i>
      </a>

      <span v-show="!item.link">{{ item.title }}</span>
    </h1>

    <p>{{ item.body }}</p>

    <button @click="shrink">x</button>

    <div class="overlay"></div>
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
        height: 105%;
        top: 0 !important;
        left: 0 !important;
      }

      .overlay {
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.2;
        position: relative;
        z-index: -1;
      }

      button {
        right: 10px;
        position: absolute;
        background-color: transparent;
        border: none;
        font-size: 30px;
        color: white;
        cursor: pointer;
        text-shadow: 1px 1px 2px black;
      }
    }
  }

  @keyframes enlarge {
    from {
      width: 24%;
    }

    to {
      width: 100%;
      height: 105%;
      top: 0;
      left: 0;
    }
  }

  @keyframes shrink {
    from {
      width: 100%;
      height: 105%;
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
  import helpers from '../helpers';

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

        this.$el.style.left = (index > 3 ? index - 4 : index) * 24 + '%';

        this.$el.style.top = (index > 3 ? 50 : 0) + '%';

        this.$el.style.backgroundImage = "url('" + this.item.image + "')";

        if (animate) {
          this.enlarge();
        } else {
          this.$el.classList.add('final');
        }
      },

      enlarge: function () {
        this.$el.classList.add('enlarge');
      },

      shrink: function () {
        this.$el.classList.add('shrink');
        this.$el.classList.remove('final');
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

      this.$el.addEventListener(helpers.whichAnimationEvent(), (event) => {
        if (event.animationName === 'enlarge') {
          this.$el.classList.add('final');
          this.$el.classList.remove('enlarge');
        } else if (event.animationName === 'shrink') {
          this.$el.style.display = 'none';

          this.$el.classList.remove('shrink');

          this.$router.go('/');
        }
      });
    }
  }
</script>
