export default {
  setLogo(state, svgCode) {
    state.logoSvgCode = svgCode
  },
  setProjects(state, list) {
    function byDate(a, b) {
      return new Date(b.date) - new Date(a.date)
    }
    state.projects = list.sort(byDate)
  }
}
