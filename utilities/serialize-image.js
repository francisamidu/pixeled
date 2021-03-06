const serializeImage = (image) => ({
  id: image?.id,
  url: image?.webformatURL,
  likes: image?.likes,
  downloads: image?.downloads,
  views: image?.views,
  tags: image?.tags?.split(','),
  user: image.user,
})

export default serializeImage
