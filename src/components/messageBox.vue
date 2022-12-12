<template>
    <div>
        <v-row wrap v-if="messages.didISent == false" class="ma-0 d-flex">
            <div>

                <v-dialog dark max-width="70%" transition="dialog-bottom-transition" v-model="dialog" class="height70">
                    <template v-slot:activator="{ on, attrs }">
                        <v-avatar class="me-1"  v-bind="attrs" v-on="on">
                            <img :src="getUser.picture.large">
                        </v-avatar>
                    </template>

                    <v-card :img="bgList[getUser.index]" v-bind:class="profileDisplay">
                        <!-- <v-card :img="require('../assets/background-img/background-img3.jpeg')" v-bind:class="profileDisplay"> -->

                        <!-- <img :src="require('../assets/background-img/background-img3.jpeg')"> -->
                        <!-- <v-card v-bind:class="(profileDisplay, bgimg)"> -->
                        <!-- <v-card img="getUser.background-img" class="" v-bind:class="profileDisplay"> -->
                        <div class="height70 d-flex align-center justify-center flex-column">
                            <div class="close-btn">
                                <v-btn icon @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </div>
                            <div class="userDetail-btn">
                                <v-btn icon @click="value = 'Detail'">
                                    <v-icon>mdi-account</v-icon>
                                </v-btn>
                            </div>
                            <!-- <div class="getUserDetail-btn">
                                        <v-btn text class="btn-multiline text-center" width="50" height="60">
                                            <span class="text-wrap"><v-icon>mdi-account</v-icon>Detail</span>
                                        </v-btn>
                                    </div> -->
                            <div class="width100">
                                <div class="d-flex justify-center">
                                    <v-avatar size="100"><img :src="getUser.picture.large" alt=""></v-avatar>
                                </div>
                                <v-card-title class="d-flex justify-center">
                                    {{(getUser.name.first + " " + getUser.name.last)}}
                                </v-card-title>
                                <v-card-subtitle class="d-flex justify-center">
                                    <v-icon>mdi-map-marker</v-icon>{{( getUser.location.country) }}
                                </v-card-subtitle>
                                <v-card-actions class="d-flex justify-center">
                                    <v-btn text class="btn-multiline text-center" width="50" height="60"
                                        :to="{ name: 'chatScreen', params: { id: getUser.login.uuid }}" @click="dialog = false">
                                        <span class="text-wrap"><v-icon>mdi-chat-processing</v-icon>Talk</span>
                                    </v-btn>
                                    <v-btn text class="btn-multiline text-center" width="50" height="60" @click="phoneDialog = true">
                                        <span class="text-wrap"><v-icon>mdi-phone</v-icon>Phone</span>
                                    </v-btn>
                                    <v-btn text class="btn-multiline text-center" width="50" height="60">
                                        <span class="text-wrap"><v-icon>mdi-video</v-icon>Video call</span>
                                    </v-btn>
                                </v-card-actions>
                            </div>
                        </div>
                    </v-card>
                    <v-card color="blue-grey darken-1" class="card" v-bind:class="detailDisplay">
                        <div class="width100 height70">
                            <div class="close-btn">
                                <v-btn icon @click="value = 'Profile'">
                                    <v-icon>mdi-arrow-left</v-icon>
                                </v-btn>
                            </div>
                            <div class=" d-flex flex-column justify-center justify-space-around height100p">
                                <div class="d-flex flex-column flex-sm-row justify-center align-center pt-6">
                                    <div class="d-flex justify-center  order-sm-1">
                                        <v-avatar size="150"><img :src="getUser.picture.large" alt=""></v-avatar>
                                    </div>
                                    <div class="pe-sm-7 order-sm-0">
                                        <v-card-title class="d-flex justify-center">
                                            {{(getUser.name.first + " " + getUser.name.last)}}
                                        </v-card-title>
                                        <v-card-subtitle class="d-flex justify-center pb-2">
                                            <v-icon>mdi-map-marker</v-icon>{{( getUser.location.country) }}
                                        </v-card-subtitle>
                                        <v-card-actions class="d-flex justify-center pa-0">
                                            <v-btn text class="btn-multiline text-center" width="50" height="40"
                                                :to="{ name: 'chatScreen', params: { id: getUser.login.uuid }}" @click="dialog = false">
                                                <span class="text-wrap"><v-icon>mdi-chat-processing</v-icon></span>
                                            </v-btn>
                                            <v-btn text class="btn-multiline text-center" width="50" height="40"
                                                @click="phoneDialog = true">
                                                <span class="text-wrap"><v-icon>mdi-phone</v-icon></span>
                                            </v-btn>
                                            <v-btn text class="btn-multiline text-center" width="50" height="40">
                                                <span class="text-wrap"><v-icon>mdi-video</v-icon></span>
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </div>
                                <v-card-text class="userData-con">
                                    <div class="d-flex userData">
                                        <p>gender</p>
                                        <v-spacer></v-spacer>
                                        <p>{{ getUser.gender }}</p>
                                    </div>
                                    <div class="d-flex userData">
                                        <p>age</p>
                                        <v-spacer></v-spacer>
                                        <p>{{ getUser.dob.age }}</p>
                                    </div>
                                    <div class="d-flex userData">
                                        <p>country</p>
                                        <v-spacer></v-spacer>
                                        <p>{{ getUser.location.country }}</p>
                                    </div>
                                    <div class="d-flex userData">
                                        <p>state</p>
                                        <v-spacer></v-spacer>
                                        <p>{{ getUser.location.state }}</p>
                                    </div>
                                    <div class="d-flex userData">
                                        <p>city</p>
                                        <v-spacer></v-spacer>
                                        <p>{{ getUser.location.city }}</p>
                                    </div>
                                    <div class="d-flex userData">
                                        <p>email</p>
                                        <v-spacer></v-spacer>
                                        <p>{{ getUser.email }}</p>
                                    </div>
                                </v-card-text>
                            </div>
                        </div>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="phoneDialog" max-width="500px">
                    <v-card>
                        <v-card-title>
                            Call
                        </v-card-title>
                        <h4 class="px-6 pt-3"><v-icon class="pe-6">mdi-phone</v-icon><span
                                class="text-decoration-underline grey--text text--darken-3">{{ getUser.cell }}</span></h4>
                        <h4 class="pt-10 px-6">
                            <v-icon>mdi-alert</v-icon>
                            This is not a real telephone number. Please note that we cannot be held responsible for any problems that
                            may arise from
                            calling this number.
                        </h4>
                        <v-card-actions>
                            <v-btn color="primary" text @click="phoneDialog = false">
                                Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- <router-link :to="{ name: 'userDetails', params: { id: getUser.login.uuid } }" class="text-decoration-none">
                    <v-avatar class="me-1">
                        <img :src="getUser.picture.thumbnail">
                    </v-avatar>
                </router-link> -->
            </div>

            <div>
                <v-card class="mb-1 ms-1 card-opponent">
                    <v-card-text class="pa-2">
                        <p class="font-message f-NSJ ">{{ messages.text }}</p>
                    </v-card-text>
                </v-card>
                <v-row class="ms-1 ma-0">
                    <p class="font-date ma-0 pl-1">{{ messages.date }}</p>
                </v-row>
            </div>
        </v-row>

        <v-row wrap class="justify-end ma-0" v-else>
            <div class="">
                <v-card class="mb-1 card-mine" color="#3A5475">
                    <v-card-text class="pa-2">
                        <p class="font-message white--text f-NSJ fw-300">{{ messages.text }}</p>
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
import bg1 from '../assets/background-img/background-img1.jpeg'
import bg2 from '../assets/background-img/background-img2.jpeg'
import bg3 from '../assets/background-img/background-img3.jpeg'
import bg4 from '../assets/background-img/background-img4.jpeg'
import bg5 from '../assets/background-img/background-img5.jpeg'
import bg6 from '../assets/background-img/background-img6.jpeg'
import bg7 from '../assets/background-img/background-img7.jpeg'
import bg8 from '../assets/background-img/background-img8.jpeg'
import bg9 from '../assets/background-img/background-img9.jpeg'
import bg10 from '../assets/background-img/background-img10.jpeg'

export default {
    name: 'messageBox',
    data() {
        return {
            dialog: false,
            phoneDialog: false,
            value: 'Profile',
            bgList: [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10],
        }
    },
    props: {
        messages: Object,
        user: Object
    },
    computed: {
        getUser() {
            return this.$store.getters.getUserById(this.$route.params.id);
        },
        profileDisplay() {
            if (this.value == 'Detail') return "d-none";
            else return "";
        },
        detailDisplay() {
            // console.log(this.user.backgroundimg);
            if (this.value == 'Profile') return "d-none";
            else return "";
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
.height100p {
    height: 100%;
}
.fw-300 {
    font-weight: 300;
}
.overflow-hidden {
    overflow: hidden !important;
}
.font-date {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.875rem;
    margin: 0% !important;
}
.card {
    display: flex !important;
    flex-direction: column;
}
.userData-con {
    overflow: auto;
}

.userData {
    width: 100%;
}
.margin-12 {
    margin: 12px 0;
}
@media only screen and (max-width: 37.5rem) {
    .userData-con {
        flex-grow: 1;
    }
}

@media only screen and (min-width: 37.5rem) {
    .userData {
        width: 65%;
        margin: 0 auto;
    }
}
</style>
