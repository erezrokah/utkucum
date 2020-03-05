export const state = () => ({
    blogPosts: [],
    workPosts: []
  });
  
  export const mutations = {
    setBlogPosts(state, list) {
      state.blogPosts = list;
    },
    setWorkPosts(state, list) {
      state.workPosts = list;
    },
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let files = await require.context('~/assets/content/blog/', false, /\.json$/);
      let blogPosts = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        return res;
      });
      await commit('setBlogPosts', blogPosts);
    },
    async nuxtServerInit({ commit }) {
      let files = await require.context('~/assets/content/work/', false, /\.json$/);
      let workPosts = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        return res;
      });
      await commit('setWorkPosts', workPosts);
    },
  };