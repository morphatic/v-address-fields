<template>
  <v-app>
    <v-app-bar
      app
      color="primary white--text"
    >
      <v-app-bar-nav-icon />
      <v-toolbar-title>Demo</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-switch
          v-model="$vuetify.theme.dark"
          class="pt-5"
          label="Dark?"
        />
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <p>
              Selected state: {{ state }}
            </p>
            <v-state-select
              v-model="state"
              include-territories
              hint="Type or select from the dropdown"
              label="State of Residence"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mdiCheck } from '@mdi/js'
  export default {
    data: () => ({
      icons: {
        check: mdiCheck,
      },
      state: 'DC',
    }),
  }
</script>
