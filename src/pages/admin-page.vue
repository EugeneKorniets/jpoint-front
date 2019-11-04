<template>
  <div class="admin-page">
    <header class="admin-page__header mb-4">
      <div class="admin-page__content">
        <app-logo class="admin-page__logo"/>
        <h1 class="admin-page__heading p-3">Управление дашбордом</h1>
      </div>
    </header>

    <main class="admin-page__content">
      <div class="admin-page__panel">
        <app-menu/>
        <a
          class="btn btn-primary"
          href="/"
          target="_blank"
        >Открыть табло в новой вкладке</a>
      </div>

      <router-view/>
    </main>
  </div>
</template>

<script>
  import AppLogo from '../components/app-logo'
  import AppMenu from '../components/app-menu'

  export default {
    name: "admin-page",

    components: {
      AppLogo,
      AppMenu
    }
  }
</script>

<style lang="scss">
  .admin-page {

    &__header {
      color: #fff;
      text-align: center;
      background-color: #005aab;
    }

    &__heading {
      font-size: 24px;
      line-height: 44px;
    }

    &__content {
      position: relative;
      width: 80%;
      min-width: 980px;
      margin: 0 auto;
    }

    &__logo {
      position: absolute;
      top: 10px;
      left: 0;
      width: 124px;
      height: 56px;
      cursor: default;
    }

    &__panel {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
</style>
