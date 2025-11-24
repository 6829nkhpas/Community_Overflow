import {IndexType,Permission} from"node-appwrite";
import { db, answerCollection } from "../name";
import {databases} from "./config";

export default async function createAnswerCollection(){
    // Create Answer Collection
    await databases.createCollection(db,answerCollection,answerCollection,[
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Answer Collection Created");
    await Promise.all([
        databases.createStringAttribute(db,answerCollection,"questionId",255,true),
        databases.createStringAttribute(db,answerCollection,"content",4096,true),
        databases.createStringAttribute(db,answerCollection,"authorId",255,true),
        
    ]);
    console.log("Answer Attributes Created");
    //create indexes
}