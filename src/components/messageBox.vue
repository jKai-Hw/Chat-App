<template>
    <div>
        <v-row wrap v-if="messages.didISent == false" class="ma-0">

            <router-link :to="{ name: 'userDetails', params: { id: getUser.login.uuid } }" class="text-decoration-none">
                <v-avatar class="me-1">
                    <img :src="getUser.picture.thumbnail">
                </v-avatar>
            </router-link>

            <div>
                <v-card class="mb-1 card-opponent">
                    <v-card-text class="pa-2">
                        <p class="font-message">{{ messages.text }}</p>
                    </v-card-text>
                </v-card>
                <v-row class="ma-0">
                    <p class="font-date ma-0 pl-1">{{ messages.date }}</p>
                </v-row>
            </div>
        </v-row>

        <v-row wrap class="justify-end ma-0" v-else>
            <div class="">
                <v-card class="mb-1 " color="red lighten-4 card-mine">
                    <v-card-text class="pa-2 ">
                        <p class="font-message">{{ messages.text }}</p>
                    </v-card-text>
                </v-card>
                <v-row class="justify-end ma-0">
                    <p class="font-date ma-0 pr-1">{{ messages.date }}</p>
                </v-row>
            </div>
        </v-row>
    </div>
</template>


<script>
export default {
    name: 'messageBox',
    props: {
        messages: Object,
        user: Object
    },
    computed: {
        getUser() {
            return this.$store.getters.getUserById(this.$route.params.id);
        }
    },
}
</script>

<style>
.font-message {
    color: rgba(0, 0, 0, 0.87);
    line-height: 1.05;
    font-size: 1rem;
    margin: 0% !important;
}

.font-date {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.875rem;
    margin: 0% !important;
}

.margin-12 {
    margin: 12px 0;
}
</style>
