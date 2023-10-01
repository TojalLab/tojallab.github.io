<template>
  <v-row>
    <v-divider class="row-space"/>
    <v-col sm="12" md="2">
      <h3 class="text-right">{{ meta.title }}</h3>
      <p class="text-right">{{ meta.subtitle }}</p>
    </v-col>
    <v-col sm="12" md="10">
      <ContentList :query="query" v-slot="{ list }">
        <v-slide-group show-arrows direction="horizontal">
          <v-card
              v-for="article in list" :key="article._path"
              :to="article._path"
              class="mt-1 mb-1 ml-2 mr-2"
              elevation="2"
              max-width="400px">
            <v-img
                cover v-if="article.image != null" :src="article.image" height="100"/>
            <v-card-text>
              <div class="text-h6 mb-1">{{ article.title }}</div>
              <div>{{ article.description }}</div>
              <v-chip-group>
                <v-chip
                    size="small" variant="outlined" color="primary" dense v-for="cat in article.category">{{ cat }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-slide-group>
      </ContentList>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'latest',
  computed: {
    query() {
      return {path: this.meta.source, limit: 5}//, sort: [{date: -1}]}
    }
  },
  props: ['meta'],
}
</script>
<style scoped>

.row-space {
  margin-top: 70px;
  margin-bottom: 70px;
}
</style>
