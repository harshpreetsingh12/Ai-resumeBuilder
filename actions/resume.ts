"use server";

import db  from "@/lib/prisma";
import { isUserExist } from "./helpers";
import { revalidatePath } from "next/cache";

export async function createResume(){
    try{
        const user = await isUserExist();

        if(!user) console.log("User not found");

        const document= await db.resume.create({
            data: {
                userId:user.id,
            }
        });

        await db.resumeContent.create({
            data: { resumeId: document.id }
        });

        revalidatePath("/dashboard");
        return {success:true, data:document}
    }
    catch(error){
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
}


export async function getAllUserResumes() {
    try{
        const user = await isUserExist();
        if(!user) console.log("user not found");

        const documents = await db.resume.findMany({
            where:{ userId: user.id },
            orderBy: { createdAt: "desc" },
        })

        return documents
    }
    catch(error){
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
}

export async function getUserResume(resumeId:string) {
    try{
        const user = await isUserExist();
        if(!user) console.log("user not found");

        const resume = await db.resume.findUnique({
            where:{ 
                userId: user.id,
                id:resumeId 
            },
        })

        return resume
    }
    catch(error){
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
}
