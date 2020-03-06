export const state = () => ({
  blogPosts: [],
  workPosts:[]
});

export const mutations = {
  SET_POSTS(state, data) {
    state.blogPosts = data
  },
  SET_WORKPOSTS(state, data) {
    state.workPosts = data
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getBlogPosts')
    await dispatch('getWorkPosts')
  },
  async getBlogPosts({ state, commit }) {
    let files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    let blogPosts = files.keys().map(key => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('SET_POSTS', blogPosts)
  },
  async getWorkPosts({ state, commit }) {
    let wfiles = await require.context(
      '~/assets/content/work/',
      false,
      /\.json$/
    )
    let workPosts = wfiles.keys().map(key => {
      let res = wfiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    commit('SET_WORKPOSTS', workPosts)

  },
};
