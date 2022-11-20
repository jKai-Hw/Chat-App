<template>
    <tr class="">
        <router-link :to="{ name: 'chatScreen', params: { id: getUser.login.uuid } }" class="text-decoration-none">
            <div class="d-flex align-center mb-1">

                <router-link :to="{ name: 'userDetails', params: { id: getUser.login.uuid } }"
                    class="text-decoration-none">
                    <v-avatar class="me-2">
                        <img :src="getUser.picture.thumbnail">
                    </v-avatar>
                </router-link>

                <div class="">
                    <div class="d-flex align-center  text-center pb-1">
                        <h4 class="font-name pe-5">{{ getUser.name.first }}</h4>
                        <p class="font-date">{{ getLastMsg.date }}</p>
                    </div>
                    <v-row class="ma-0">
                        <p class="font-text ma-0">{{ getLastMsg.text }}</p>
                    </v-row>
                </div>
            </div>
        </router-link>
    </tr>
</template>


<script>
export default {
    name: 'personBox',

    data() {
        return {
            messages: Object,
            order: 0,
            text: "",
            keyDownCode: 0
        }
    },
    props: {
        uuid: String
    },
    computed: {
        getLastMsg() {
            return this.$store.getters['messages/getLatestMessageById'](this.uuid);
        },
        getUser() {
            return this.$store.getters.getUserById(this.uuid);
        }
    },
}
</script>

<style>
.font-name {
    color: rgba(0, 0, 0, 0.87);
    line-height: 1.05;
    font-size: 1rem;
    margin: 0% !important;
}

.font-text {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.83rem;
    margin: 0% !important;
}

.font-date {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.7rem;
    margin: 0% !important;
}

.margin-12 {
    margin: 12px 0;
}
</style>
