"use server";
import {connect} from "mongoose";


const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;



const connection = "mongodb+srv://test:test@cluster0.qxfplup.mongodb.net/?retryWrites=true&w=majority";

export default async function connectDB(){
    try{
        await connect(connection);
        console.log("DB connection Successful");
    } catch (error){
        console.error("DB connection failed", error)
    }
}


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://${username}:${password}@cluster0.qxfplup.mongodb.net/bitFinance.com?retryWrites=true&w=majority";


