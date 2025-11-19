import { Client, Databases, Storage, Users } from "node-appwrite";
import env from '../../app/env';
// Appwrite server SDK configuration
// Uses environment variables from src/app/env.ts (or process.env) to initialize the client.
const endpoint = env?.appwrite?.endpoint || String(process.env.APPWRITE_ENDPOINT || "");
const projectId = env?.appwrite?.projectId || String(process.env.APPWRITE_PROJECT_ID || "");
const apiKey = env?.appwrite?.apikey || String(process.env.APPWRITE_API_KEY || "");

export const client = new Client();

client
    .setEndpoint(endpoint) // Appwrite endpoint, e.g. https://HOSTNAME_OR_IP/v1
    .setProject(projectId) // Project ID
    .setKey(apiKey) // Secret API key for server-side operations
    .setSelfSigned(true); // use only in dev with self-signed certs

// Export the services your server code uses. Export `storage` because other modules import it.
export const storage = new Storage(client);
export const databases = new Databases(client);
export const users = new Users(client);

// (exports defined inline above)