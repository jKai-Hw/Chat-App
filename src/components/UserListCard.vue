<template>
    <div class="text-center">
        <v-dialog dark max-width="70%" transition="dialog-bottom-transition" v-model="dialog" class="height70">
            <template v-slot:activator="{ on, attrs }">
                <div class="d-flex ps-2 py-2 align-center " v-bind="attrs" v-on="on">
                        <v-avatar color="indigo">
                            <img  :src="user.picture.large" alt="">
                        </v-avatar>

                    <h3 class="ps-2">{{(user.name.first + " " + user.name.last)}}</h3>
                </div>
            </template>

            <v-card :img="bgList[user.index]" v-bind:class="profileDisplay">
            <!-- <v-card :img="require('../assets/background-img/background-img3.jpeg')" v-bind:class="profileDisplay"> -->

                <!-- <img :src="require('../assets/background-img/background-img3.jpeg')"> -->
                <!-- <v-card v-bind:class="(profileDisplay, bgimg)"> -->
                <!-- <v-card img="user.background-img" class="" v-bind:class="profileDisplay"> -->
                <div class="height70 d-flex align-center justify-center flex-column">
                    <div class="close-btn">
                        <v-btn icon  @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <div class="userDetail-btn">
                        <v-btn icon @click="value = 'Detail'">
                            <v-icon>mdi-account</v-icon>
                        </v-btn>
                    </div>
                    <!-- <div class="userDetail-btn">
                        <v-btn text class="btn-multiline text-center" width="50" height="60">
                            <span class="text-wrap"><v-icon>mdi-account</v-icon>Detail</span>
                        </v-btn>
                    </div> -->
                    <div class="width100">
                        <div class="d-flex justify-center">
                            <v-avatar size="100"><img  :src="user.picture.large" alt=""></v-avatar>
                        </div>
                        <v-card-title  class="d-flex justify-center">
                            {{(user.name.first + " " + user.name.last)}}
                        </v-card-title>
                        <v-card-subtitle class="d-flex justify-center">
                            <v-icon>mdi-map-marker</v-icon>{{( user.location.country) }}
                        </v-card-subtitle>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn text class="btn-multiline text-center" width="50" height="60" :to="{ name: 'chatScreen', params: { id: user.login.uuid }}" @click="dialog = false">
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
            <v-card color="blue-grey darken-1" class="" v-bind:class="detailDisplay">
                <div class="width100 height70">
                    <div class="close-btn">
                        <v-btn icon @click="value = 'Profile'">
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                    </div>
                    <div class=" d-flex flex-column justify-center">
                        <div class="d-flex flex-column flex-sm-row justify-center align-center pt-6">
                            <div class="d-flex justify-center  order-sm-1">
                                <v-avatar  size="150"><img :src="user.picture.large" alt=""></v-avatar>
                            </div>
                            <div class="pe-sm-7 order-sm-0">
                                <v-card-title class="d-flex justify-center">
                                    {{(user.name.first + " " + user.name.last)}}
                                </v-card-title>
                                <v-card-subtitle class="d-flex justify-center pb-2">
                                    <v-icon>mdi-map-marker</v-icon>{{( user.location.country) }}
                                </v-card-subtitle>
                                <v-card-actions class="d-flex justify-center pa-0">
                                    <v-btn text class="btn-multiline text-center" width="50" height="40"
                                        :to="{ name: 'chatScreen', params: { id: user.login.uuid }}" @click="dialog = false">
                                        <span class="text-wrap"><v-icon>mdi-chat-processing</v-icon></span>
                                    </v-btn>
                                    <v-btn text class="btn-multiline text-center" width="50" height="40" @click="phoneDialog = true">
                                        <span class="text-wrap"><v-icon>mdi-phone</v-icon></span>
                                    </v-btn>
                                    <v-btn text class="btn-multiline text-center" width="50" height="40">
                                        <span class="text-wrap"><v-icon>mdi-video</v-icon></span>
                                    </v-btn>
                                </v-card-actions>
                            </div>
                        </div>
                        <div class="d-flex justify-center">
                            <v-simple-table class="table">
                                <template v-slot:default>

                                    <tbody>
                                        <tr>
                                            <td>gender</td>
                                            <td class="text-right">{{ user.gender }}</td>
                                        </tr>
                                    </tbody>

                                    <tbody>
                                        <tr>
                                            <td>age</td>
                                            <td class="text-right">{{ user.dob.age }}</td>
                                        </tr>
                                    </tbody>

                                    <tbody>
                                        <tr>
                                            <td>country</td>
                                            <td class="text-right">{{ user.location.country }}</td>
                                        </tr>
                                    </tbody>

                                    <tbody>
                                        <tr>
                                            <td>state</td>
                                            <td class="text-right">{{ user.location.state }}</td>
                                        </tr>
                                    </tbody>

                                    <tbody>
                                        <tr>
                                            <td>city</td>
                                            <td class="text-right">{{ user.location.city }}</td>
                                        </tr>
                                    </tbody>

                                    <tbody>
                                        <tr>
                                            <td>email</td>
                                            <td class="text-right">{{ user.email }}</td>
                                        </tr>
                                    </tbody>

                                </template>
                            </v-simple-table>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog v-model="phoneDialog" max-width="500px">
            <v-card>
                <v-card-title>
                    Call
                </v-card-title>
                <h4 class="px-6 pt-3"><v-icon class="pe-6">mdi-phone</v-icon><span class="text-decoration-underline grey--text text--darken-3">{{ user.cell }}</span></h4>
                <h4 class="pt-10 px-6">
                    <v-icon>mdi-alert</v-icon>
                    This is not a real telephone number. Please note that we cannot be held responsible for any problems that may arise from
                    calling this number.
                </h4>
                <v-card-actions>
                    <v-btn color="primary" text @click="phoneDialog = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
    data () {
        return {
        dialog: false,
        phoneDialog: false,
        value: 'Profile',
        bgList: [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10],
        }
    },
    props: {
        user: Object
    },
    created: function () {
        // console.log(process.env.NODE_ENV);

    },
    computed: {
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
.height70 {
    height: 70vh;
}
.width100 {
    width: 100%;
}
.w60vw {
    width: 60vw;
}
.width50p {
    width: 50px;
}
.table {
    background-color: transparent !important;
}
.close-btn {
    position: absolute;
    top: 1vh;
    left: 1vh;
}
.userDetail-btn {
    position: absolute;
    top: 2vh;
    right: 3vh;
}
.btn-multiline>span {
    width: 100%
}



/* .bgimg1 {
    background: url("../assets/background-img/background-img1.jfif");
}

.bgimg2 {
    background: url("../assets/background-img/background-img2.jfif");
}

.bgimg3 {
    background: url("../assets/background-img/background-img3.jfif");
}

.bgimg4 {
    background: url("../assets/background-img/background-img4.jfif");
}

.bgimg5 {
    background: url("../assets/background-img/background-img5.jfif");
}

.bgimg6 {
    background: url("../assets/background-img/background-img6.jfif");
}

.bgimg7 {
    background: url("../assets/background-img/background-img7.jfif");
}

.bgimg8 {
    background: url("../assets/background-img/background-img8.jfif");
}

.bgimg9 {
    background: url("../assets/background-img/background-img9.jfif");
}

.bgimg10 {
    background: url("../assets/background-img/background-img10.jfif");
} */
</style>
