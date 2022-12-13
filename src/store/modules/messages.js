import { Message } from "@/model";

export const messages = {
    namespaced: true,

    state: {
        msgListPerRecipient: {},
    },
    getters: {
        getMessagesById: (state) => (id) => {
            return state.msgListPerRecipient[id];
        },
        getLatestMessageById: (state) => (id) => {
            return state.msgListPerRecipient[id][state.msgListPerRecipient[id].length-1];
        },
        getLatestMsgIdList(state) {
            let msgList =  state.msgListPerRecipient;

            let arr =  Object.keys(msgList).map(
                (k) => ({ key: k, value: msgList[k][msgList[k].length-1].dateNum })
                );
            arr.sort((a, b) => b.value - a.value);

            let idOnly = [];
            for (let i = 0; i < arr.length; i++) {
                idOnly.push(arr[i].key);
            }

            return idOnly;
        },
    },
    mutations: {
        setMessages (state, payload) {
            let msgList = state.msgListPerRecipient;
            if (msgList[payload.id] == null) msgList[payload.id] = [payload];
            else msgList[payload.id].push(payload);

            state.msgListPerRecipient = Object.assign({}, msgList);
        }
    },
    actions: {
        setReply(context, payload) {
            setTimeout(() => {
                let formData = new FormData();
                formData.append('apikey', process.env.VUE_APP_TALKAPI_APIKEY);
                formData.append('query', payload.text);

                fetch('https://api.a3rt.recruit.co.jp/talk/v1/smalltalk', {
                    method: 'POST',
                    body: formData,
                })
                .then((response) => response.json())
                .then((data) => {
                    let replyText = data.results[0].reply;
                    let replyMsgObj = new Message(payload.order+1, payload.id, replyText, false);
                    replyMsgObj.date = Message.getDateString();
                    let dNum = new Date().getTime();
                    replyMsgObj.dateNum = dNum;

                    context.commit('setMessages', replyMsgObj);
                })

            }, 100)
            // Math.floor(Math.random() * 3000)
        }
    }
}
