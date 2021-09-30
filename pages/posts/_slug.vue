<template>
  <div>
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

    <div v-if="post.image" class="m-contents-main-eyecatch">
      <img :src="post.image" />

      <p v-if="post.description" class="m-contents-main-eyecatch-description">
        {{post.description}}
      </p>
    </div>

    <div class="m-contents-main-body">
      <nuxt-content :document="post" />
    </div>
  </div>
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
