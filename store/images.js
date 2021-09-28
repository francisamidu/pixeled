import serializeImage from '~/utilities/serialize-image'
import Api from '../Api/index'

export const state = () => ({
  images: [],
})

export const getters = {
  images: (state) => {
    return state.images
  },
  imagesByTag: (state) => (tag) => {
    const matchedImages = state.images.filter((image) => {
      if (
        image?.tags?.some((t) => t?.toLowerCase()?.includes(tag?.toLowerCase()))
      ) {
        return image
      }
    })
    return matchedImages
  },
}

export const mutations = {
  SET_IMAGES: (state, data) => {
    state.images = data?.map((image) => serializeImage(image))
  },
}

export const actions = {
  async getImages(store, term) {
    try {
      const data = await Api.getImages(term || '')
      store.commit('SET_IMAGES', data?.hits)
    } catch (error) {
      console.log(error)
    }
  },
}
