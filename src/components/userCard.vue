<template>
    <v-flex xs12 sm6 md4 lg3 class="pa-3">
        <router-link :to="{ name: 'userDetails', params: { id: user.login.uuid } }" class="text-decoration-none">
            <v-card class="text-xs-center" tile color="grey lighten-3">
                <v-responsive class="">
                    <div class="py-2 d-flex justify-center">
                        <v-avatar size="100" class="profile grey lighten-2">
                            <img :src="user.picture.thumbnail" class="">
                        </v-avatar>
                    </div>
                </v-responsive>

                <v-divider class="mx-4"></v-divider>

                <v-card-title class="px-6 pt-1 pb-0 text-h6">{{ user.name.first }}</v-card-title>
                <v-card-text class="px-6 pb-1">
                    <div class="pa-0 ma-0">age: {{ user.dob.age }}</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions class="d-flex justify-space-around">
                    <v-btn color="red lighten-4 red--text" :to="{ name: 'chatScreen', params: { id: user.login.uuid } }">
                        <v-icon small left>mdi-forum</v-icon>
                        <span>Message</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </router-link>
    </v-flex>
</template>

<script>
export default {
    name: 'userCard',
    props: {
        user: Object
    },
}
</script>

<style>
.text-decoration-none {
    text-decoration: none;
}
</style>
