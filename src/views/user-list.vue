<template>
    <div class="userList">
        <h1 class="subheading grey--text">Home</h1>

        <div class="my-5">
            <v-row wrap>
                <userCard v-for="user in getUsers" :key=user.login.uuid :user="user"></userCard>
            </v-row>
        </div>
    </div>
</template>

<script>
import userCard from "@/components/userCard";


export default {
    name: 'userList',
    created: function () {
        // console.log(process.env.NODE_ENV);
        if (Object.keys(this.$store.getters.getAllUsers).length == 0) {
            this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=10');
        }
    },
    computed: {
        getUsers() {
            return Object.values(this.$store.getters.getAllUsers);
        }
    },
    components: {
        userCard,
    },
}
</script>
