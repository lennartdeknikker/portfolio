export default {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setLogo(state, svgCode) {
    state.logoSvgCode = svgCode
  },
  setProjects(state, list) {
    state.projects = list
  }
}
