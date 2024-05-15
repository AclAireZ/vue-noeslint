<template>
  <div>
    <v-toolbar
      dark
      src="https://img.freepik.com/free-vector/pink-color-hexagonal-shapes-geometric-banner-design-vector_1055-11286.jpg?w=1380&t=st=1715764195~exp=1715764795~hmac=103bfc8082d339a2dc3b94fe1c3ca4dab647c3224afc2a37724996bcb980742a"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Vuetify</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-btn icon @click="cart" :to="cart.route" link>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
      src="https://img.freepik.com/free-vector/pink-color-hexagonal-shapes-geometric-banner-design-vector_1055-11286.jpg?w=1380&t=st=1715764195~exp=1715764795~hmac=103bfc8082d339a2dc3b94fe1c3ca4dab647c3224afc2a37724996bcb980742a"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard", route: "/markets" },
        { title: "Products", icon: "mdi-forum", route: "/products" },
      ],
      cart: { route: "/cart" },
    };
  },
};
</script>
