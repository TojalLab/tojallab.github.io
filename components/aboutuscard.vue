<template>
  <v-card style="width: 100%" :elevation="isIntersecting"
          v-intersect="{handler: onIntersect,options: {threshold: [.1, 1.0]}}">
    <ContentDoc style="display: none" path="/israel"/>
    <ContentDoc style="display: none" path="/lab"/>
    <v-card-text>
      <span class="font-weight-thin text-overline">About us</span>
      <div class="d-flex flex-row">
        <v-tabs
            v-model="selected"
            direction="vertical"
            color="primary"
        >
          <v-tab v-for="option in options" :value="option.id">{{ option.id }}</v-tab>
        </v-tabs>
        <v-card-text>
          <v-window v-model="selected" direction="vertical">
            <v-window-item v-for="option in options" :value="option.id">
              <div class="markdown-content">
                <ContentDoc :path="option.source"/>
              </div>
            </v-window-item>
          </v-window>
        </v-card-text>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'AboutUsCard',
  data() {
    return {
      isIntersecting: 2,
      selected: "The lab",
      options: [{
        id: "The Lab",
        source: "/lab"
      }, {
        id: "Israel Tojal da Silva",
        source: "/israel"
      }]
    }
  },
  methods: {
    onIntersect(isIntersecting, entries, observer) {
      this.isIntersecting = 2 + (entries[0].intersectionRatio * 12)
    },
    changeText(option) {
    }
  }
}
</script>
<style>
.markdown-content p {
  margin-top: 12px;
}

.markdown-content h1 {
  margin-bottom: 12px;
}

.markdown-content h2 {
  margin-bottom: 12px;
  margin-top: 16px;
}
</style>
