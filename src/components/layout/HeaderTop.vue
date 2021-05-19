<template>
  <header class="header">
    <nav class="navbar fixed-top">
      <!-- Begin Topbar -->
      <div
        class="
          navbar-holder
          d-flex
          align-items-center align-middle
          justify-content-between
        "
      >
        <!-- Begin Logo -->
        <div class="navbar-header">
          <a href="/" class="navbar-brand">
            <div class="brand-image brand-big">
              <img
                src="@/assets/img/logo-big.png"
                alt="logo"
                class="logo-big"
              />
            </div>
            <div class="brand-image brand-small">
              <img
                src="@/assets/img/logo-big.png"
                alt="logo"
                class="logo-small"
              />
            </div>
          </a>
          <!-- Toggle Button -->
          <a id="toggle-btn" href="#" class="menu-btn active">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <!-- End Toggle -->
        </div>
        <!-- End Logo -->
        <!-- Begin Navbar Menu -->
        <ul
          class="
            nav-menu
            list-unstyled
            d-flex
            flex-md-row
            align-items-md-center
            pull-right
          "
        >
          <li class="nav-item mr-3">
            <a href="#" class="nav-link"
              ><i class="la la-bell"></i><b class="text-dark">박정운</b>님
              반갑습니다</a
            >
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-sm btn-square btn-outline-secondary"
            >
              로그아웃
            </button>
          </li>
        </ul>
        <!-- End Navbar Menu -->
      </div>
      <!-- End Topbar -->
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
