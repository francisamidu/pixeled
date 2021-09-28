<template>
  <main>
    <div class="search-form">
      <form @submit.prevent="searchImages">
        <input
          type="text"
          class="search-input"
          placeholder="Search image term"
          v-model="term"
        />
        <span class="icon-cross" @click="searchImages" v-show="term"></span>
        <button class="btn">Search</button>
      </form>
    </div>
    <div class="image-list" v-if="imageList.length">
      <AppImage
        v-for="image in imageList"
        :key="image.id"
        :image="image"
        :searchImages="searchImages"
      />
    </div>
    <div class="no-images" v-else>
      <h2>No images found</h2>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  data: () => ({
    term: '',
    imageList: [],
  }),
  async created() {
    this.getImages().then(() => this.setImages(this.images))
  },
  computed: {
    ...mapGetters({
      images: 'images/images',
      imageByTag: 'images/imagesByTag',
    }),
    getImageByTag() {
      return this.imageByTag(this.term)
    },
  },
  methods: {
    ...mapActions({
      getImages: 'images/getImages',
    }),
    searchImages(tag) {
      if (typeof tag === 'string') {
        this.term = tag
      }
      const images = this.getImageByTag
      this.setImages(images)
    },
    setImages(images) {
      this.imageList = images || []
    },
  },
}
</script>

<style scoped lang="scss">
@import '../assets/icomoon/icomoon.css';
@import '../assets/app-images.scss';
</style>
