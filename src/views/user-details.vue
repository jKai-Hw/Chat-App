<template>
    <v-flex class="pt-5 pa-3">
        <v-card>
            <v-row justify="center">
                <v-col cols="6">
                    <v-img :src="getUser.picture.large" max-height="350" contain></v-img>
                </v-col>
            </v-row>
            <v-row justify="center" class="ma-0">
                <v-card-title class="pa-3">{{ getUser.name.first }}</v-card-title>
            </v-row>
            <v-row justify="center" class="pb-4 ma-0">
                <v-btn color="red lighten-4 red--text" :to="{ name: 'chatScreen', params: { id: getUser.login.uuid } }">
                    <v-icon small left>mdi-forum</v-icon>
                    <span>Message</span>
                </v-btn>
            </v-row>
            <v-simple-table>
                <template v-slot:default>

                    <tbody>
                        <tr>
                            <td>gender</td>
                            <td class="text-center">{{ getUser.gender }}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td>age</td>
                            <td>{{ getUser.dob.age }}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td>country</td>
                            <td>{{ getUser.location.country }}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td>state</td>
                            <td>{{ getUser.location.state }}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td>city</td>
                            <td>{{ getUser.location.city }}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td>email</td>
                            <td>{{ getUser.email }}</td>
                        </tr>
                    </tbody>

                </template>
            </v-simple-table>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    computed: {
        getUser() {
            return this.$store.getters.getUserById(this.$route.params.id);
        }
    },
}
</script>

<style lang="scss">
tbody {
    tr:hover {
        background-color: transparent !important;
    }
}
</style>
