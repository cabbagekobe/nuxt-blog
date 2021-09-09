<template>
  <main class="m-contents-main" role="main">
    <header class="m-contents-main-header">
      <div class="m-contents-main-header-meta">
        <time class="m-contents-main-header-meta-time">
          {{post.date}}
        </time>
      </div>

      <h1 class="m-contents-main-header-title">
        {{post.title}}
      </h1>
    </header>

    <div>
      <img :src="post.image" />
    </div>

    <div class="m-contents-main-body">
      <nuxt-content :document="post" />
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.slug || 'index').fetch()

    return {
      post
    }
  },

  mounted() {
    if (twttr) {
      twttr.widgets.load()
    }
  }
}
</script>

<style>
.mainContent {
}

.nuxt-content {
}
</style>
