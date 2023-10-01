<template>
  <nuxt-layout name="full">
    <v-row v-if="current != null">
      <v-col sm="12" md="3">
        <h2 class="text-right">{{ current.title }}</h2>
        <p class="text-right">{{ current.subtitle }}</p>
      </v-col>
      <v-col sm="12" md="9">
        <ContentList :path="current.source" v-slot="{ list }">
          <v-card :to="article._path" class="mt-1" v-for="article in list" :key="article._path">
            <v-card-title>{{ article.title }}</v-card-title>
            <v-card-text>
              {{ article.description }}
              <v-chip-group>
                <v-chip
                    size="small" variant="outlined" color="primary" dense v-for="cat in article.category">{{ cat }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </ContentList>
      </v-col>
    </v-row>

  </nuxt-layout>
</template>
<script setup lang="ts">
// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  validate: async (route) => {
    return ['publications', 'news', 'software'].includes(route.params.slug)
  }
})
</script>
<script lang="ts">
export default {
  name: "publications",
  computed: {
    current: function(){
      return this.meta[this.$route.params.slug];
    }
  },
  data() {
    return {
      meta: {
        publications: {
          title: "Our published work",
          subtitle: "Our research focuses on bioinformatics, genetics, imaging and machine learning.",
          source: '/publications'
        },
        news: {
          title: "Blog posts",
          subtitle: "All published posts.",
          source: '/news'
        },
        software: {
          title: "Open Source Software",
          subtitle: "Throughout the years we have developed a number of software focusing bioinformatics and machine learning research.",
          source: '/software'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
