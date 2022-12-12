<template>
    <div class="">
        <v-system-bar fixed light class="top-nav">
            <span class="ps-2">{{ this.value }}</span>
            <!-- <v-spacer></v-spacer>
            <span>2022/22/22 33:66:66</span>
            <v-btn>Github<v-icon>mdi-open-in-new</v-icon></v-btn> -->
        </v-system-bar>

        <div class="nav-main" v-bind:class="homeDisplay">
            <UserListCard ref="userCardList" v-for="user in getUsers" :key=user.login.uuid :user="user" />
        </div>
        <div class="nav-main" v-bind:class="talkDisplay">
            <TalkList  />
        </div>

        <v-bottom-navigation app fixed grow v-model="value" class="d-none d-sm-flex">
            <v-btn value="Home">
                <span>Home</span>
                <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn value="Talk">
                <span>talk</span>
                <v-icon>mdi-chat-processing</v-icon>
            </v-btn>
        </v-bottom-navigation>
        <v-bottom-navigation app fixed grow v-model="value" class="d-flex d-sm-none">
            <v-btn value="Home" disabled>
                <span>Home</span>
                <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn value="Talk" to="/message-list">
                <span>talk</span>
                <v-icon>mdi-chat-processing</v-icon>
            </v-btn>
        </v-bottom-navigation>

    </div>
</template>

<script>
import UserListCard from "@/components/UserListCard";
import TalkList from "@/components/talkList.vue";

export default {
    data: () => ({
        value: 'Home',
    }),

    created: function () {
        // console.log(process.env.NODE_ENV);
        if (Object.keys(this.$store.getters.getAllUsers).length == 0) {
            this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=10');
        }
    },
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
    /* width: 30vh;
    height: 100%;
    width: 100%; */
    bottom: 32px !important;
}
</style>
