<template>
  <nuxt-layout name="full">
    <v-row>
      <v-col cols="12" md="3">
        <v-card class="sticky" v-if="meta != null" elevation="1">
          <v-img v-if="meta.image != null" :src="meta.image" height="300"
                 gradient="to bottom, rgba(0,0,0,.0), rgba(255,255,255,.5)"/>
          <v-card-text  v-if="meta != null">
            <div class="text-h6 mb-1">{{ meta.title }}</div>
            <div><span class="author-name" v-for="author in meta.authors">{{ author }}</span></div>
            <div>
              <v-chip-group>
                <v-chip
                    size="small" variant="outlined" v-for="cat in meta.category">{{ cat }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-card-text>
          <v-expansion-panels>
            <v-expansion-panel
                title="Cite this paper"
                v-if="meta.bib != null"
                key="bib"
            >
              <v-expansion-panel-text class="bib-section">
                {{ meta.bib }}
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel
                v-if="meta.links != null"
                key="link" title="Additional links">
              <v-expansion-panel-text>
                The following links are associated with this article:
                <ul>
                  <li v-for="link in meta.links" :key="link.title"><a :href="link.url" target="_blank">{{ link.title }}</a></li>
                </ul>
              </v-expansion-panel-text>

            </v-expansion-panel>
          </v-expansion-panels>

        </v-card>
        <div v-else>
          <h3>News page</h3>
        </div>
        <!--        <h5>{{ // data.title }}</h5>-->
      </v-col>
      <v-col cols="12" md="9">
        <div class="markdown">
          <ContentDoc/>
        </div>
      </v-col>
    </v-row>
  </nuxt-layout>
</template>

<script lang="ts">
export default {
  name: "[article].vue",
  data() {
    return {
      meta: null
    }
  },
  async mounted() {
    // const {title} = await this.$content('/israel').only(['title']).fetch()
    //console.log(this.$route)
    this.meta = await queryContent(this.$route.fullPath).findOne();
    // console.log("article.vue", title)
  }
}
</script>

<style scoped>

</style>

<style>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
}

.bib-section {
  position: relative;
  margin: 8px;
  /*padding: 2px;*/
  font-size: 12px;
  border-radius: 30px;
  border: #37474f;
  background-color: #90a4ae;
}


.markdown {
  margin: 16px;
}

.markdown img {
  width: 100%;
  max-width: 1080px;
}

.markdown h1 {
  font-family: 'Montserrat', sans-serif;
}

.markdown h2 {
  font-family: 'Montserrat', sans-serif;
}

.markdown h3 {
  margin-top: 16px;
  font-family: 'Montserrat', sans-serif;
}

.markdown p {
  font-family: 'Lora', serif;
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
}

.markdown li {
  /*list-style-position: inside;*/
  /*background: black;*/
  margin-left: 16px;
  font-family: 'Lora', serif;
  /*display: block;*/
}

.author-name {
  margin-right: 12px;
  color: #37474f;
}
</style>
