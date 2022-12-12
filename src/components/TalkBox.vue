<template>
    <router-link :to="{ name: 'chatScreen', params: { id: getUser.login.uuid } }" class="text-decoration-none">
        <!-- <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider> -->

        <v-list-item class="px-2 py-2 min-height-">
            <v-dialog dark max-width="70%" transition="dialog-bottom-transition" v-model="dialog" class="height70">
                <template v-slot:activator="{ on, attrs }">
                        <v-avatar class="me-2" v-bind="attrs" v-on="on">
                            <img :src="getUser.picture.large">
                        </v-avatar>
                </template>

                <v-card img="https://source.unsplash.com/random">
                    <div class="height70 d-flex align-center justify-center flex-column">
                        <div class="close-btn">
                            <v-btn icon @click="dialog = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <div class="width100">
                            <div class="d-flex justify-center">
                                <v-avatar size="100"><img :src="getUser.picture.large" alt=""></v-avatar>
                            </div>
                            <v-card-title class="d-flex justify-center">
                                {{(getUser.name.first + " " + getUser.name.last)}}
                            </v-card-title>
                            <v-card-subtitle class="d-flex justify-center">
                                {{( "country: " + getUser.location.country) }}
                            </v-card-subtitle>
                            <v-card-actions class="d-flex justify-center">
                                <v-btn text class="btn-multiline text-center" width="50" height="60"
                                    :to="{ name: 'chatScreen', params: { id: getUser.login.uuid }}" @click="dialog = false">
                                    <span class="text-wrap"><v-icon>mdi-chat-processing</v-icon>Talk</span>
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </div>
                </v-card>
            </v-dialog>



            <div class="hull-width">
                <div class="d-flex align-center  text-center pb-1">
                    <h4 class="font-name pe-5">{{ getUser.name.first }}</h4>
                    <v-spacer></v-spacer>
                    <p class="font-date">{{ getLastMsg.date }}</p>
                </div>
                <div class="ma-0">
                    <p class="font-text ma-0">{{ getLastMsg.text }}</p>
                </div>
            </div>
            <!-- <v-list-item-content class="py-1">
                <div class="d-flex">
                    <v-list-item-title>{{ getUser.name.first }}</v-list-item-title>
                    <v-spacer></v-spacer>
                    <v-list-item-subtitle>{{ getLastMsg.date }}</v-list-item-subtitle>
                </div>
                <v-list-item-subtitle>{{ getLastMsg.text }}</v-list-item-subtitle>
            </v-list-item-content> -->
        </v-list-item>
    </router-link>
</template>

<script>
export default {
    data() {
        return {
            messages: Object,
            order: 0,
            text: "",
            keyDownCode: 0,
            dialog: false,
        }
    },
    props: {
        uuid: String
    },
    computed: {
        getLastMsg() {
            console.log(this.$store.getters['messages/getLatestMessageById'](this.uuid).text);
            return this.$store.getters['messages/getLatestMessageById'](this.uuid);
        },
        getUser() {
            return this.$store.getters.getUserById(this.uuid);
        }
    },
    // data: () => ({
    //     items: [
    //         { header: 'Today' },
    //         {
    //             avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    //             title: 'Brunch this weekend?',
    //             subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    //         },
    //         { divider: true, inset: true },
    //         {
    //             avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    //             title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
    //             subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    //         },
    //         { divider: true, inset: true },
    //         {
    //             avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    //             title: 'Oui oui',
    //             subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    //         },
    //         { divider: true, inset: true },
    //         {
    //             avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    //             title: 'Birthday gift',
    //             subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    //         },
    //         { divider: true, inset: true },
    //         {
    //             avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    //             title: 'Recipe to try',
    //             subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    //         },
    //     ],
    // }),
}
</script>

<style>
.min-height- {
    min-height: 40px !important;
}
</style>
