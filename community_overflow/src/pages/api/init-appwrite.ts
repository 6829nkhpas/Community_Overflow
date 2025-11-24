// API route to initialize Appwrite database and collections
import type { NextApiRequest, NextApiResponse } from 'next';
import getOrCreateDB from '../../models/server/dbsetup';
import getOrCreateStorage from '../../models/server/storage.collection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await Promise.all([
      getOrCreateDB(),
      getOrCreateStorage()
    ]);
    res.status(200).json({ message: 'Appwrite database and collections initialized.' });
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
}
