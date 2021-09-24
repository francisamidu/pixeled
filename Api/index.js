class Api {
  static async getImages(term) {
    try {
      const request = await fetch(term)
      const response = await request.json()
      return response
    } catch (error) {
      return error
    }
  }
}
export default Api
