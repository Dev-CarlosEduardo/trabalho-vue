<template>
  <div>
    <b-button v-b-toggle.trabalho-menu>Abrir Menu</b-button>

    <b-sidebar id="trabalho-menu" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/area">Areas</b-nav-item>
        
      </div>
    </b-sidebar>
    <b-navbar id="trabalho-menu"> </b-navbar>
  </div>
</template>

<script>
export default {
  name: "trabalho-menu",
};
</script>

<style>
</style>