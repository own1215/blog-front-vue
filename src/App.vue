<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style lang="css">
@import 'assets/css/style.css';
</style>
