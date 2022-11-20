<template>
    <v-flex class="pa-3">
        <v-simple-table>
            <template v-slot:default>
                <tbody>
                    <personBox v-for="uuid in getLastMsgId" :key=uuid :uuid="uuid">
                    </personBox>
                </tbody>
            </template>
        </v-simple-table>
    </v-flex>
</template>

<script>
import personBox from "@/components/personBox.vue";
// import { Message } from '@/model/index.js'

export default {
    name: 'messageList',
    computed: {
        getLastMsgId() {
            // return this.$store.getters.getLatestMessageById;
            return this.$store.getters['messages/getLatestMsgIdList'];
        },
    },
    components: {
        personBox,
    }
}
</script>
