<template>
    <ul>
        <li v-for="(blogPost, index) in blogPosts" :key="`post-${index}`">
            <nuxt-link to="{{blogPost.slug}}"><h1>{{blogPost.title}}</h1></nuxt-link>
            <div>{{blogPost.body}}</div>
        </li>
    </ul>
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