<template>
    <div class="pa-0 ma-0 overflow-y-auto" ref="scroll">

        <v-app-bar dense flat color="grey lighten-2">
            <v-icon @click="$router.back()" class="rotate-180 pl-5">mdi-logout</v-icon>
            <v-toolbar-title class="pl-1">{{ getUser.name.first + " " + getUser.name.last }}</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>
        <div class="chat-screen__name-bar pa-0 ma-0" >

            <v-row class="pt-5 pa-2 ma-0">
                <v-col xs="12" class="pa-2">
                    <!--  v-card xs="12" class="pa-2 overflow-y-auto mx-auto" width="100%" max-height="400" ref="scroll"  -->


                    <!-- <v-list
        class="overflow-y-auto mx-auto my-10"
        width="100%"
        max-height="200"
        max-width="500">

        <v-list-item
            v-for="item in items"
            :key="item.message">
            {{ item.message }}
        </v-list-item>
    </v-list> -->



                    <messageBox v-for="messages in getMsgList" :key="messages.order" :messages="messages"></messageBox>

                </v-col>
            </v-row>
        </div>

        <v-footer app outlined class="mx-0" color="grey lighten-2">
            <v-row no-gutters class="d-flex align-content-center justify-center">
                <v-col class="pr-2">
                    <v-textarea auto-grow dense outlined rows="1" hide-details="false" label="Enter message..."
                        v-model="text" @keydown.enter.exact="keyDownEnter" @keyup.enter.exact="keyUpEnter"
                        @keydown.enter.shift="keyEnterShift">
                    </v-textarea>
                </v-col>
                <v-btn depressed color="gray lighten-4" class="px-0 d-flex  align-content-center" min-width="0"
                    @click="sendMessage()">
                    <v-icon large class="color-gray">mdi-send-circle-outline</v-icon>
                </v-btn>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
import messageBox from "@/components/messageBox.vue";
import { Message } from '@/model/index.js'

export default {
    name: 'chatScreen',
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
    // updated() {
    //     let chatLog = this.refs.scroll;
    //     if (!chatLog) return chatLog.scrollTop = chatLog.scrollHeight
    // },

    updated() {
        this.$nextTick(function () {
            let chatLog = this.$refs.scroll;
            if (!chatLog) return chatLog.scrollTop = chatLog.scrollHeight;
        })
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

        // scrollToBottom() {
        //     this.$nextTick(() => {
        //         const chatLog = this.$refs.scroll[0];
        //         if (!chatLog) return chatLog.scrollTop = chatLog.scrollHeight;
        //     })
        // }
    },
    components: {
        messageBox
    }
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
    border-radius: 8px 8px 0 8px !important;
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
</style>
