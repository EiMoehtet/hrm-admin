<template>
     <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
    <v-list nav>
        <v-list-item-group color="primary">
        <v-list-item to="/" exact>
            <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon="mdi-account-multiple" no-action>
            <template v-slot:activator>
                <v-list-item-title>Employees</v-list-item-title>
            </template>
        <v-list-item to="/employees/create" exact>
            <v-list-item-content>
                <v-list-item-title>Create</v-list-item-title>
            </v-list-item-content>
             <v-list-item-icon>
                <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
        </v-list-item>
        <v-list-item to="/employees" exact>
            <v-list-item-content>
                <v-list-item-title> List</v-list-item-title>
            </v-list-item-content>
             <v-list-item-icon>
                <v-icon>mdi-menu</v-icon>
            </v-list-item-icon>
        </v-list-item>
        </v-list-group>
        </v-list-item-group>
    </v-list>
     </v-navigation-drawer>
</template>

<script>
export default {
   props:["drawer"]
}
</script>

<style>

</style>
