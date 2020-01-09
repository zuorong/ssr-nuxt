import { homeService } from '~/services'
export const state = () => ({
  list: [],
  language: ''
})

export const mutations = {
  setList (state, list) {
    state.list = list
  },
  setLanguage (state, language) {
    state.language = language
  }
}
export const actions = {
  setList ({ commit, state }) {
    return new Promise(async (resolve) => {
      if (JSON.stringify(state.list) !== '[]') {
        resolve(state.list)
        return false
      }
      const data = {}
      const [err, res] = await homeService.getList(data)
      if (err) {
        return false
      }
      commit('setList', res)
      resolve(res)
    })
  }
}
