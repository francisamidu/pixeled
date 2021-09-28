import { PIXABAY_API_KEY } from '~/utilities/constants'

class Api {
  static async getImages(term) {
    try {
      const API_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo`
      const request = await fetch(API_URL)
      const response = await request.json()
      return response
    } catch (error) {
      return error
    }
  }
}
export default Api
