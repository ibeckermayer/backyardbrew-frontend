<template>
<v-card width="800px">
    <v-card-title>
        <v-layout column>
            <v-flex><b>Name:</b> {{ feedback.name }}</v-flex>
            <v-flex><b>Email:</b> {{ feedback.email }}</v-flex>
            <v-flex><b>Recieved:</b> {{feedback.rcvd_on}}</v-flex>
        </v-layout>
    </v-card-title>
    <v-card-text>
        {{ feedback.text }}
    </v-card-text>
    <v-card-actions>
        <v-btn small color="primary" outline @click="toggleResolved(feedback)" text-xs-center>Mark Resolved</v-btn>
    </v-card-actions>
</v-card>
    
</template>

<script>
export default {
    name: 'FeedbackCard',
    props: ['feedback'],
    methods: {
        toggleResolved(feedback){
            console.log('toggle-resolved emitted');
            this.$emit('toggle-resolved', feedback);
        }
    }
}
</script>

<style scoped>

</style>
