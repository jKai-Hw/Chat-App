<template>
    <router-link :to="{ name: 'chatScreen', params: { id: getUser.login.uuid } }" class="text-decoration-none">
        <v-list-item class="px-2 py-2 min-height-">
            <v-avatar class="me-2">
                <img :src="getUser.picture.large">
            </v-avatar>
            <div class="width100">
                <div class="d-flex align-center  text-center pb-1 width100">
                    <h4 class="font-name pe-5 f-black">{{ getUser.name.last }}</h4>
                    <v-spacer></v-spacer>
                    <p class="font-date">{{ getLastMsg.date }}</p>
                </div>
                <div class="ma-0">
                    <p class="font-text ma-0">{{ getLastMsg.text }}</p>
                </div>
            </div>
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
            return this.$store.getters['messages/getLatestMessageById'](this.uuid);
        },
        getUser() {
            return this.$store.getters.getUserById(this.uuid);
        }
    },
}
</script>

<style>
.width100 {
    width: 100%;
}
.min-height- {
    min-height: 40px !important;
}
.font-name {
    max-width: 10px !important;
}
</style>
