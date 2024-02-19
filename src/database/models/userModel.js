import {Schema, connection} from "mongoose"


const userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});

const userModel = connection
    .useDb("BitFinance")
    .model("User", userSchema, "users");

    export default userModel;