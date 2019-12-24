export default {
  async nuxtServerInit({ commit }) {
    // logo data
    const svgCode = await require.context(
      '~/assets/content/logo/',
      false,
      /\.json$/
    )
    const logo = svgCode.keys().map((key) => {
      const res = svgCode(key)
      res.slug = key.slice(2, -5)
      return res
    })
    // project data
    const projectFiles = await require.context(
      '~/assets/content/projects/',
      false,
      /\.json$/
    )
    const projects = projectFiles.keys().map((key) => {
      const res = projectFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    await commit('setLogo', logo)
    await commit('setProjects', projects)
  }
}
