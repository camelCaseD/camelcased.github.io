<template>
  <div id="grid">
    <div class="item">
      <img src="/images/profile.jpg" />

      <h1>camelCaseD?</h1>
      <p>I am a self-taught software engineer since I was 11 years old.</p>
    </div>
    
    <div class="item">
      <img src="/images/profile.jpg" />

      <h1>Title</h1>
      <p>Summary</p>
    </div>
    
    <div class="item">
      <img src="/images/profile.jpg" />

      <h1>Title</h1>
      <p>Summary</p>
    </div>
    
    <div class="item">
      <img src="/images/profile.jpg" />

      <h1>Title</h1>
      <p>Summary</p>
    </div>
    
    <div class="item">
      <img src="/images/profile.jpg" />

      <h1>Title</h1>
      <p>Summary</p>
    </div>
    
    <div class="item">
      <img src="/images/profile.jpg" />

      <h1>Title</h1>
      <p>Summary</p>
    </div>
    
    <div class="item">
      <img src="/images/profile.jpg" />

      <h1>Title</h1>
      <p>Summary</p>
    </div>
    
    <div class="item">
      <img src="/images/profile.jpg" />

      <h1>Title</h1>
      <p>Summary</p>
    </div>
  </div>
</template>

<style lang="sass">
  #grid {
    margin-top: 5%;

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
    created: function () {
    }
  }
</script>
