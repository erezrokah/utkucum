<template>
  <article>
    <h1>{{workPost.title}}</h1>
    <div v-html="$md.render(workPost.body)" />
  </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { workPost: payload };
    else
      return {
        workPost: await require(`~/assets/content/work/${params.blog}.json`),
      };
  },
};
</script>

<style>

</style>