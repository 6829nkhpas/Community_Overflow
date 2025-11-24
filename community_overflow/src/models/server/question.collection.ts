import { db, questionCollection } from "../name";
import{databases} from "@/models/server/config";

import {IndexStatus, IndexType, Permission} from"node-appwrite";

export default async function createQuestionCollection(){
    // Create Question Collection
    await databases.createCollection(db,questionCollection,questionCollection,[
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    await Promise.all([
        databases.createStringAttribute(db,questionCollection,"title",255,true),
        databases.createStringAttribute(db,questionCollection,"content",4096,true),
        databases.createStringAttribute(db,questionCollection,"authorId",255,true),
        databases.createStringAttribute(db,questionCollection,"tags",1024,true,undefined,true),
        databases.createStringAttribute(db,questionCollection,"attachmentId",50,false),
,
    ]);
    console.log("Question Collection Created");
    //create indexes
    await Promise.all([
        databases.createIndex(db, questionCollection, "title", IndexType.Fulltext, ["title"], ["asc"]),
        databases.createIndex(db, questionCollection, "content", IndexType.Fulltext, ["content"], ["asc"]),
        databases.createIndex(db, questionCollection, "authorId", IndexType.Key, ["authorId"], ["asc"]),
        databases.createIndex(db, questionCollection, "tags", IndexType.Fulltext, ["tags"], ["asc"]),
        databases.createIndex(db, questionCollection, "attachmentId", IndexType.Key, ["attachmentId"], ["asc"]),
    ]);
    console.log("Question Indexes Created");
}