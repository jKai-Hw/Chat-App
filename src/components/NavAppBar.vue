<template>

    <v-card class="overflow-hidden">
        <v-app-bar app color="">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-btn depressed retain-focus-on-click
 to="/" class="no-background-hover">
                <v-toolbar-title class="text-capitalize grey--text">Chat App</v-toolbar-title>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn href="https://github.com/jKai-Hw/chat-app#readme" target="_blank" text>
                <span class="mr-2 text-capitalize">GitHub README</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app width="350" v-model="drawer" class="drawer">
            <UserList1 />

            <!-- <v-list>
                <v-list-item-group>
                    <v-list-item color="red" v-for="link in links" :key="link.text" touter :to="link.route">
                        <v-list-item-icon>
                            <v-icon class="red--text">{{ link.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="red--text">{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list> -->
        </v-navigation-drawer>
    </v-card>

</template>

<script>
import UserList1 from '@/components/UserList1.vue'

export default {
    name: 'NavAppBar',
    data() {
        return {
            drawer: null,
            links: [
                { icon: 'mdi-home', text: 'Home', route: '/' },
                { icon: 'mdi-forum', text: 'Talk', route: '/message-list' },
            ]
        }
    },
    components: {
        UserList1,
    }
}
</script>

<style lang="scss">
.no-background-hover::before {
    background-color: transparent !important;
}
.drawer {
    max-height: calc(100% - 0px) !important;
    transform: translateX(0%) !important;
}
</style>
