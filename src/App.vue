<template>
  <div id="appRoot">
    <app-toolbar v-if="headerShow" class="app--toolbar"></app-toolbar>
    <router-view :key="$route.fullpath"></router-view>
  </div>
</template>

<script>
import AppToolbar from "@/components/AppToolbar";

export default {
  name: "Tenders",

  components: {
    AppToolbar
  },

  data: () => ({
    headerShow: false,
  })
};
</script>
