<template>
  <div class="center examplex">
    <vs-navbar text-white :color="active" center-collapsed v-model="active">
      <template #left>
        <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="" />
      </template>
      <template #right>
        <vs-navbar-item :active="active == 'primary'" id="primary">
          Primary
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'success'" id="success">
          Success
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'danger'" id="danger">
          Danger
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'warn'" id="warn">
          Warn
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'dark'" id="dark">
          Dark
        </vs-navbar-item>
        <vs-navbar-item :active="active == '#7d33ff'" id="#7d33ff">
          HEX
        </vs-navbar-item>
        <vs-navbar-item
          :active="active == 'rgb(59,222,200)'"
          id="rgb(59,222,200)"
        >
          RGB
        </vs-navbar-item>
        <template id='right'>
          <vs-button>Login</vs-button>
        </template>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    active: "primary",
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
