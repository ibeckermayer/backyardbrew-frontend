<template>
    <v-container>
        <v-layout justify-center>
            <v-flex md8>
                <v-card flat>
                    <v-card-title>
                        <span class="headline">Feedback</span>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12>
                                    <v-text-field
                                        validate-on-blur
                                        ref="email"
                                        color="primary"
                                        label="Email"
                                        v-model="form.email"
                                        required
                                        :rules="[rules.reqd, rules.vemail]"
                                    >
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-textarea
                                        ref="feedback"
                                        label="Feedback"
                                        :rules="[rules.reqd]"
                                        v-model="form.feedback"
                                    >
                                    </v-textarea>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-container>
                            <v-layout justify-center align-center>
                                <v-btn color="primary" dark @click="submit" text-md-center
                                    >Submit</v-btn
                                >
                            </v-layout>
                        </v-container>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Feedback',
    data() {
        return {
            rules: {
                reqd: val => !!val || 'This field is required',
                vemail: val =>
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                        String(val).toLowerCase()
                    ) || 'Please enter valid email'
            },
            form: {
                email: null,
                feedback: null
            }
        };
    },
    methods: {
        submit() {
            this.hasErrors = false;

            for (let key in this.form) {
                if (!this.$refs[key].validate(true)) {
                    this.hasErrors = true;
                }
            }
            if (this.hasErrors) {
                console.log('Form has errors!');
            } else {
                console.log('Form Completed!');
            }
        }
    }
};
</script>

<style scoped></style>
