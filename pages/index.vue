<template>
  <AppImages />
</template>

<script>
export default {
  import { mapActions } from 'vuex'
  head() {
    return {
      title: 'Pixeled - An image gallery built on Nuxtjs',
    }
  },
  methods:{
    ...mapActions({
      getImages:'images/getImages'
    })
  },
  created(){

  }
}
</script>
