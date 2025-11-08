import {db,questionCollection} from "@/app/models/name.ts";
import{databases} from "@/models/server/config.ts";

import {Permission} from"node-appwrite";

export default async function createQuestionCollection(){
    // Create Question Collection
    await databases.createCollection(db,questionCollection,questionCollection,[
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Question Collection Created");
}