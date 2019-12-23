export default {
  async nuxtServerInit({ commit }) {
    const logoFile = await require.context(
      '~/assets/content/logo/',
      false,
      /\.json$/
    )
    const logo = logoFile.keys().map((key) => {
      const res = logoFile(key)
      res.slug = key.slice(2, -5)
      return res
    })
    const files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    const blogPosts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })

    await commit('setBlogPosts', blogPosts)
    await commit('setLogo', logo)
  }
}