import {NextResponse} from "next/server";
import connectDB from "../../../database/connection"
import UserModel from "@/database/models/userModel";




export async function POST(request){
    await connectDB()
 
    try {
        const formData = await request.formData();

        const email = formData.get('email');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const password = formData.get('password');
        
        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            password,
        });

        const existingEmail = await UserModel.findOne({email});
        if (existingEmail) return NextResponse.json({
            error: true,
            message: "email already registered"
        })

        const saved = await newUser.save();
        if (saved){
            return NextResponse.json({
                success: true,
                message: "Account created successfully"
            })
        }

        // console.log(formData.get());
        return NextResponse.json({ 
            error: true,
            message:"unknown error"
    })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ 
            error: true,
            message:"server error"
    })
    }
}