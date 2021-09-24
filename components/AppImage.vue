<template>
  <div class="image-card">
    <img :src="image.url" :alt="image.title" @click="gotoImagePage" />
    <div class="image-body">
      <h2>
        Photo by <span>{{ image.user }}</span>
      </h2>
      <p>
        Views:<span>{{ image.views }}</span>
      </p>
      <p>
        Likes:<span>{{ image.likes }}</span>
      </p>
      <p>
        Downloads:<span>{{ image.downloads }}</span>
      </p>
    </div>
    <div class="tags">
      <span
        class="tag"
        v-for="(tag, index) in image.tags"
        :key="index"
        @click="handleClick(tag)"
        >#{{ tag }}</span
      >
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
    searchImages: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick(tag) {
      this?.searchImages(tag)
    },
    gotoImagePage() {
      if (process.title === 'browser') {
        window.location.assign(this.image.url)
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/app-image.scss';
</style>
