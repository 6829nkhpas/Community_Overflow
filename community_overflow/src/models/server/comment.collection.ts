import {Permission} from"node-appwrite";
import { db, commentCollection } from "../name";
import{databases} from "@/models/server/config";

export default async function createCommentCollection(){
    // Create Comment Collection
    await databases.createCollection(db,commentCollection,commentCollection,[
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Comment Collection Created");
    await Promise.all([
        databases.createStringAttribute(db,commentCollection,"typeId",255,true),
        databases.createStringAttribute(db,commentCollection,"content",2048,true),
        databases.createEnumAttribute(db,commentCollection,"type",["answer","question"],true),
        databases.createStringAttribute(db,commentCollection,"authorId",255,true),
    ]);
    console.log("Comment Attributes Created");
}