<template>
    <article v-for="(blogPost, index) in blogPosts" :key="`post-${index}`">
        <h1>{{blogPost.title}}</h1>
        <div>{{blogPost.body}}</div>
    </article>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
};
</script>

<style>

</style>