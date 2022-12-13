<template>
    <div class="pa-0 ma-0 overflow-y-auto height100 hull-width" ref="scroll">
        <v-app-bar app dense flat color="#EAE0C7">
            <v-icon @click="$router.back()" class="d-sm-none rotate-180 pl-5">mdi-logout</v-icon>
            <v-toolbar-title class="pl-1 f-black">{{ getUser.name.first + " " + getUser.name.last }}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <div class="chat-screen__name-bar pb-10" >
            <v-row class="pt-5 pa-2 ma-0">
                <v-col xs="12" class="pa-2">
                    <MessageBox v-for="messages in getMsgList" :key="messages.order" :messages="messages"></MessageBox>
                </v-col>
            </v-row>
        </div>

        <v-footer outlined class="mx-0 footer" color="#EAE0C7">
            <v-row no-gutters class="d-flex align-center justify-center">
                <v-col class="pr-2">
                    <v-textarea auto-grow dense outlined rows="1" hide-details="false" label="Enter message..." v-model="text" @keydown.enter.exact="keyDownEnter" @keyup.enter.exact="keyUpEnter" @keydown.enter.shift="keyEnterShift" color="#093353">
                    </v-textarea>
                </v-col>
                <v-btn icon  color="gray lighten-4" class="px-0 d-flex  align-center" min-width="0" @click="sendMessage()">
                    <v-icon large>mdi-send-circle-outline</v-icon>
                </v-btn>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
import MessageBox from "@/components/MessageBox.vue";
import { Message } from '@/model/index.js'

export default {
    name: "chatScreen",
    data() {
        return {
            order: 0,
            text: "",
            keyDownCode: 0,
            links: [
                { icon: 'mdi-logout', text: 'Logout', route: '/' },
                { icon: 'mdi-forum', text: 'Talk', route: '/message-list' },
            ]
        }
    },
    computed: {
        getMsgList() {
            return this.$store.getters['messages/getMessagesById'](this.$route.params.id);
        },
        getUser() {
            return this.$store.getters.getUserById(this.$route.params.id);
        }
    },
    methods: {
        sendMessage: function () {
            if (this.text == "") {
                alert("Type the message you want to send.");
                return;
            }
            let messageObj = new Message(this.order, this.$route.params.id, this.text, true);
            this.text = "";
            messageObj.date = Message.getDateString();
            let dNum = new Date().getTime();
            messageObj.dateNum = dNum;

            this.$store.commit('messages/setMessages', messageObj);
            this.$store.dispatch('messages/setReply', messageObj);

            this.order += 2;
        },
        // ここからenter key 押したときの機能
        keyDownEnter(e) {
            this.keyDownCode = e.keyCode //enterを押した時のkeycodeを記録
            e.preventDefault()
        },
        keyUpEnter(e) {
            if (this.keyDownCode === 229) { //229コードの場合は処理をストップ
                return
            }
            e.preventDefault()
            this.sendMessage()
        },
        keyEnterShift() {
            console.log('shift,enter')
        },
        // ここまでenter key 押したときの機能
    },
    components: {
        MessageBox
    }
    // updated() {
    //     this.$nextTick(function () {
    //         let chatLog = this.$refs.scroll;
    //         chatLog.scrollTop = chatLog.scrollHeight;
    //     })
    // },
}
</script>

<style>
.chat-screen__name-bar {
    width: 100% !important;
}
.rotate-180 {
    transform: rotate(180deg);
}

.card-mine {
    border-radius: 8px 0 8px 8px !important;
}

.card-opponent {
    border-radius: 8px 8px 8px 0 !important;
}

.font-message {
    color: rgba(0, 0, 0, 0.87);
    line-height: 1.05;
    font-size: 1rem;
    margin: 0% !important;
}

.font-date {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.875rem;

}

.margin-12 {
    margin: 12px 0;
}

.color-gray {
    color: #9E9E9E !important;
}

.overflow-y {
    overflow: scroll;
}

.h-100 {
    height: 100% !important;
}
.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
}
@media only screen and (max-width: 37.5remスマホの時) {
    .chat-screen__name-bar {
        position: relative !important;
        top: -80px !important;
    }
}
@media only screen and (min-width: 37.5rem) {
    .hull-width {
        position: fixed;
        right: 0;
        width: 70vw;
    }
    .footer {
        width: 70vw;
        left: 30vw !important;
    }
}
</style>
