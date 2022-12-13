export const users = {

    state: {
        users: {}
    },
    getters: {
        getAllUsers(state){
            return state.users;
        },
        getUserById: (state) => (id) => {
            return state.users[id];
        }
    },
    mutations: {
        setUsers (state, data) {
            let user = {};
            for (let i = 0; i < data.length; i++) {
                user[data[i].login.uuid] = data[i];
                user[data[i].login.uuid]["index"] = i.toString();
            }
            state.users = user;
        }
    },
    actions: {
        async fetchUsers (context, payload) {//payload = const USERS_API = "https://randomuser.me/api/";
            const res = await fetch(payload);
            const users = await res.json();
            context.commit('setUsers', users.results);
        }
    }
}
