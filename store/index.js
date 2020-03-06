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
      const context = await require.context('~/content/blog/', false, /\.json$/);

      const searchposts = await context.keys().map(key => ({
        ...context(key),
        _path: `/blog/${key.replace('.json', '').replace('./', '')}`
      }));

      commit('SET_POSTS', searchposts.reverse())
    },
    async getWorkPosts({ state, commit }) {


      const context = await require.context('~/content/work/', false, /\.json$/);

      const workPosts = await context.keys().map(key => ({
        ...context(key),
        _path: `/work/${key.replace('.json', '').replace('./', '')}`
      }));

      commit('SET_WORKPOSTS', workPosts)

    },
  };