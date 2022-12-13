<template>
    <div class="">
        <v-system-bar fixed light class="top-nav" color="#EAE0C7">
            <span class="ps-2">{{ this.value }}</span>
        </v-system-bar>

        <div class="nav-main" v-bind:class="homeDisplay">
            <UserListCard ref="userCardList" v-for="user in getUsers" :key=user.login.uuid :user="user" />
        </div>
        <div class="nav-main" v-bind:class="talkDisplay">
            <TalkList  />
        </div>

        <v-bottom-navigation app fixed grow shift v-model="value" height="52px" class="d-none d-sm-flex" background-color="#EAE0C7">
            <v-btn value="Home" color="#EAE0C7">
                <span>Home</span>
                <v-icon>mdi-home-outline</v-icon>
            </v-btn>

            <v-btn value="Talk" color="#EAE0C7">
                <span>talk</span>
                <v-icon>mdi-chat-processing-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>
        <v-bottom-navigation app fixed grow shift v-model="value" class="d-flex d-sm-none" background-color="#EAE0C7">
            <v-btn value="Home" color="#EAE0C7">
                <span>Home</span>
                <v-icon>mdi-home-outline</v-icon>
            </v-btn>

            <v-btn value="Talk" color="#EAE0C7" to="/talk-view">
                <span>talk</span>
                <v-icon>mdi-chat-processing-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>

    </div>
</template>

<script>
import UserListCard from "@/components/UserListCard";
import TalkList from "@/components/TalkList.vue";

export default {
    data: () => ({
        value: 'Home',
    }),
    // created: function () {
    //     if (Object.keys(this.$store.getters.getAllUsers).length == 0) {
    //         this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=10');
    //     }
    // },
    computed: {
        getUsers() {
            return Object.values(this.$store.getters.getAllUsers);
        },
        homeDisplay() {
            if(this.value == 'Talk') return "d-none";
            else return "";
        },
        talkDisplay() {
            if (this.value == 'Home') return "d-none";
            else return "";
        }
    },
    components: {
        UserListCard,
        TalkList,
    }
}
</script>

<style>
@media only screen and (max-width: 37.5rem/* スマホの時 */) {
    .top-nav {
        top: 32px !important;
    }
}
.nav-main{
    height: 100%;
    position: relative;
    margin-top: 24px;
    margin-bottom: 56px;
    box-sizing: border-box;
}
.btm-nav {
    bottom: 32px !important;
}
</style>
