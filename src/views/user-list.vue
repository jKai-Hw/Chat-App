<template>
    <div>
        <div id="xs-index" class="d-flex d-sm-none">
            <UserList1 />
        </div>
    </div>
</template>

<script>
import userCard from "@/components/userCard";
import UserList1 from '@/components/UserList1.vue'


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
        UserList1,
    },
}
</script>
