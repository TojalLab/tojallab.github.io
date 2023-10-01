<template>
  <v-card class="mt-1" :key="member._path">
    <v-card-text class="text-center">
      <v-avatar :image="`https://github.com/${member.github}.png`" size="80"
                v-if="member.github!=null && member.github!==''"/>
      <v-avatar icon="mdi-account-school" size="80" v-else/>
      <v-card-title class="text-center">{{ member.title }}</v-card-title>
      <p>{{ member.description }}</p>
      <a style="display: none" :href="member._path"/>
      <div>
        <v-btn
            class="ma-1"
            v-if="member.github!=null && member.github !== ''"
            target="_blank"
            icon="mdi-github"
            border
            height="40"
            variant="text"
            width="40"
            @click.stop
            :href="`https://github.com/${member.github}/`"
        />
        <v-btn
            class="ma-1"
            v-if="member.site != null && member.site !== ''"
            target="_blank"
            icon="mdi-web"
            border
            height="40"
            variant="text"
            width="40"
            @click.stop
            :href.prevent="member.site"
        />
        <v-btn
            class="ma-1"
            v-if="member.scholar != null && member.scholar !== ''"
            target="_blank"
            icon="mdi-school"
            border
            height="40"
            variant="text"
            width="40"
            @click.stop
            :href="member.scholar"
        ></v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "teamcard",
  props: ['member']
}
</script>

<style scoped>

</style>
