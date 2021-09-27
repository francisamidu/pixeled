<template>
  <AppImages />
</template>

<script>
  import { mapActions } from 'vuex'
export default {
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
