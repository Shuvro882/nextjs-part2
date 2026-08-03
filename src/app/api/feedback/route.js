import { DatabasePlus } from "lucide-react";
// import { feedback } from "../route";
import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";



const feedbackCollection=connect("feedbacks");

export async function GET(request) {

    
    const result = await feedbackCollection.find().toArray();
    return Response.json(result)
}

export async function POST(request) {

//    const data = await request.json();
   
  const {message} = await request.json();

   if(!message || typeof message !== "string"){
    return Response.json({
        status:400,
        message:'please send a message'
    })
   }

//    const newfeedback = {message, id:feedback.length+1};
   const newfeedback = {message, date:new Date().toISOString()};
//    feedback.push(newfeedback);

const result =await feedbackCollection.insertOne(newfeedback);
revalidatePath("/feedback")


return Response.json(result);

    // return Response.json({
    //     // status:200,
    //     // data
    //     acknowledged:true,
    //     insertedId:newfeedback.id,
    // })
}