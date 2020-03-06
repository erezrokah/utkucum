<template>
    <ul>
        <li v-for="(workPost, index) in workPosts" :key="`post-${index}`">
            <nuxt-link :to="workPost.slug"><h1>{{workPost.title}}</h1></nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
  computed: {
    workPosts() {
      return this.$store.state.workPosts;
    },
  },
};
</script>

<style>

</style>