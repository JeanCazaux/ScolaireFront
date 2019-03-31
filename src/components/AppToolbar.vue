<template>
  <div>
    <v-toolbar fixed dark app style="background-color: #323A45;">
      <img
        class="ml-5"
        src="https://d1c2gz5q23tkk0.cloudfront.net/assets/networks/81/website_header_logo/6f24d9c66c519afe4e608c1409406813-original.png?1499509224"
        alt="Network picture"
        height="50"
      />
    </v-toolbar>
    <v-toolbar
      class="text-xs-center"
      color="white"
      fixed
      app
      style="margin-top: 64px; display: grid; justify-content: center;"
    >
      <v-btn
        class="btn-menu"
        depressed
        small
        href="https://platform.deepbloo.com/"
        target="_self"
        >Live feed</v-btn
      >
      <v-btn
        class="btn-menu"
        depressed
        small
        href="https://platform.deepbloo.com/companies"
        target="_self"
        >Find Companies</v-btn
      >
      <v-btn
        class="btn-menu"
        depressed
        small
        href="https://platform.deepbloo.com/people"
        target="_self"
        >Find People</v-btn
      >
      <v-btn
        class="btn-menu active"
        depressed
        small
        href="https://platform.deepbloo.com/ventures"
        target="_self"
        >Tenders</v-btn
      >
      <v-btn
        class="btn-menu"
        depressed
        small
        href="https://platform.deepbloo.com/opportunities"
        target="_self"
        >Jobs</v-btn
      >
      <v-btn
        class="btn-menu"
        depressed
        small
        href="https://platform.deepbloo.com/news"
        target="_self"
        >Publications</v-btn
      >
      <v-btn
        class="btn-menu"
        depressed
        small
        href="https://platform.deepbloo.com/events"
        target="_self"
        >Events</v-btn
      >
      <v-btn
        class="btn-menu"
        depressed
        small
        href="https://platform.deepbloo.com/topics"
        target="_self"
        >Groups</v-btn
      >
      <v-btn
        class="btn-menu"
        depressed
        small
        href="https://platform.deepbloo.com/page/how-does-it-work"
        target="_self"
        >How does it work ?</v-btn
      >
    </v-toolbar>
    <div style="height: 130px;"></div>
  </div>
</template>

<style>
.btn-menu {
  background-color: #ffffff !important;
  border-bottom: 3px solid #ffffff;
}
.btn-menu:hover {
  background: #ffffff !important;
  background-color: #ffffff !important;
  /* border-bottom: 3px solid #ffcccc; */
}

.btn-menu.active {
  border-bottom: 3px solid #f7444a;
}
</style>
