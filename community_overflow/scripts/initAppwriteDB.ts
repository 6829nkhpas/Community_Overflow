// Run this with: npx ts-node scripts/initAppwriteDB.ts
// Node-only script — DO NOT run in Next.js Edge middleware.
import getOrCreateDB from '../src/models/server/dbsetup';
import getOrCreateStorage from '../src/models/server/storage.collection';

(async () => {
  try {
    console.log('Initializing Appwrite DB and Storage (Node.js)...');
    await Promise.all([getOrCreateDB(), getOrCreateStorage()]);
    console.log('Initialization complete.');
    process.exit(0);
  } catch (err) {
    console.error('Initialization failed:', err);
    process.exit(1);
  }
})();
