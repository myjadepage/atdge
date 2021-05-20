<template>
  <div id="app">
    <div class="page">
      <header-top />
      <div class="page-content d-flex align-items-stretch">
        <side-bar />

        <div class="content-inner">
          <router-view />
          <footer-bottom />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonScript from "@/assets/js/script.js";
import FooterBottom from "./components/layout/FooterBottom.vue";
import HeaderTop from "./components/layout/HeaderTop.vue";
import SideBar from "./components/layout/SideBar.vue";
export default {
  components: { SideBar, HeaderTop, FooterBottom },
  data() {},
  mounted() {
    commonScript();
  },
};
</script>

<style
  lang="css"
  src="@/assets/icons/lineawesome/css/line-awesome.min.css"
></style>
<style lang="css" src="@/assets/icons/ionicons/css/ionicons.min.css"></style>
<style
  lang="css"
  src="@/assets/icons/themify/css/themify-icons.min.css"
></style>
