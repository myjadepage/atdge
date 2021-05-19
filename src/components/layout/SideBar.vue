<template>
  <div class="default-sidebar">
    <!-- Begin Side Navbar -->
    <nav class="side-navbar box-scroll sidebar-scroll">
      <!-- Begin Main Navigation -->
      <ul class="list-unstyled">
        <li>
          <a href="/" aria-expanded="true" data-toggle="collapse">
            <i class="la la-columns"></i><span>리포트</span>
          </a>
          <ul id="dropdown-report" class="collapse list-unstyled pt-0">
            <li>
              <router-link to="/">캠페인 리포트</router-link>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="list-unstyled">
        <li>
          <a href="/CampMake" aria-expanded="false" data-toggle="collapse">
            <i class="la la-share-alt"></i><span>캠페인 생성</span>
          </a>
          <ul id="dropdown-camp-create" class="collapse list-unstyled pt-0">
            <li>
              <router-link to="/CampMake">캠페인 만들기</router-link>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="list-unstyled">
        <li>
          <a href="/CampPage" aria-expanded="false" data-toggle="collapse">
            <i class="la la-comments"></i><span>캠페인 페이지</span>
          </a>
          <ul id="dropdown-camp-list" class="collapse list-unstyled pt-0">
            <li>
              <router-link to="/CampPage">캠페인 리스트</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- End Main Navigation -->
    </nav>
    <!-- End Side Navbar -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
