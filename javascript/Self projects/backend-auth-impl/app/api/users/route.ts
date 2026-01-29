import { NextResponse } from "next/server";
import mongoose, { Types } from "mongoose";
import dbConnect from "@/lib/db";
import User from "@/models/userModel";

export async function POST(request: Request) {
    try {
        await dbConnect()
        const { name, age } = await request.json()
        if (!name || !age) {
            return NextResponse.json(
                { error: "Name and age required" },
                { status: 400 }
            );
        }
        const newUser = new User({ name, age });
        await newUser.save();
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error(error)
    }
}

export async function GET() {
    try {
        await dbConnect();
        const userList = await User.find({})
        return NextResponse.json(userList, { status: 200 })
    } catch (error) {
        console.error("Fetch users error:", error);
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        );
    }
}

const objID = mongoose.Types.ObjectId;

export async function PATCH(request:Request) {
    try {
        const { newName, userID } = await request.json()
        if (!newName || !userID) {
            return NextResponse.json(
                { error: "New Name and age required" },
                { status: 400 }
            );
        }
        await dbConnect()
        if (!objID.isValid(userID)) {
            return NextResponse.json(
                { error: "Invalid User Id" },
                { status: 400 }
            );
        }

        const updatedUser = await User.findOneAndUpdate(
            {_id: new objID(userID)},
            {name:newName},
            {new:true}
        )
        if(!updatedUser){
            return NextResponse.json(
                { error: "Name not found" },
                { status: 400 }
            );
        }
        else{
            return NextResponse.json(
                {message: "User name updated successfully", updatedUser} ,
                { status: 200 }
            )
        } 
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 }
        );

    }

}

export async function DELETE(request:Request) {
    try {
        const {searchParams} = new URL(request.url) || '';
        const userID = searchParams.get('userID');
        if (!userID) {
            return NextResponse.json(
                { error: "User ID required" },
                { status: 400 }
            );
        }
        if (!objID.isValid(userID)) {
            return NextResponse.json(
                { error: "Invalid User Id" },
                { status: 400 }
            );
        }
        await dbConnect()
        const deletedUser = await User.findOneAndDelete({_id: new objID(userID)});
        if(!deletedUser){
            return NextResponse.json(
                { error: "User not found" },
                { status: 400 }
            );
        }
        return NextResponse.json(
            {message: "User deleted successfully", deletedUser} ,
            { status: 200 }
        );

        
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 }
        );
    }
}