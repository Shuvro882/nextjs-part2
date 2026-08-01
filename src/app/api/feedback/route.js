import { DatabasePlus } from "lucide-react";
import { feedback } from "../route";


export async function GET(request) {
    return Response.json(feedback)
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

   const newfeedback = {message, id:feedback.length+1};
   feedback.push(newfeedback);


    return Response.json({
        // status:200,
        // data
        acknowledged:true,
        insertedId:newfeedback.id,
    })
}