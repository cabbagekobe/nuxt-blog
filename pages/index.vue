<template>
  <ul class="m-contents-list">
    <li v-for="post in posts" :key="post.slug" class="m-contents-main">
      <header class="m-contents-main-header">
        <div class="m-contents-main-header-meta">
          <time :dateTime="post.date" class="m-contents-main-header-meta-time">
            {{post.date}}
          </time>
        </div>

        <h1 class="m-contents-main-header-title">
          <nuxt-link :to="'/posts/'+ post.slug">
            {{post.title}}
          </nuxt-link>
        </h1>
      </header>
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('posts' || 'index')
    const posts = await query.sortBy('date', 'desc').fetch()
    return { posts }
  }
}
</script>
