<template>
    <div>
        <div id="xs-index" class="d-flex d-sm-none">
            <UserList />
        </div>
    </div>
</template>

<script>
import UserList from '@/components/UserList.vue'

export default {
    name: 'index',
    created: function () {
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
        UserList,
    },
}
</script>
