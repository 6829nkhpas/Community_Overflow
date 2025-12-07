import {immer} from 'zustand/middleware/immer';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import { AppwriteException,ID,Models } from 'node-appwrite';
import { account } from '@/models/client/config';
import { Inter } from 'next/font/google';

export interface UserPrefs{
  reputation: number;
}

interface IAuthstate {
  user: Models.User<UserPrefs> | null;
  session: Models.Session | null;
  jwt: string | null;
  hydrate: boolean;

  setHydrate(): void;
  verifySession(): Promise<void>;
    login(email: string, password: string): Promise<{sucess: boolean; error?: AppwriteException}>;
    createAccount(email: string, password: string, name: string): Promise<{sucess: boolean; error?: AppwriteException}>;
    logout(): Promise<void>;
    
}
export const useAuthStore = create<IAuthstate>()(
  persist(
    immer(set) => ({
        user: null,
        session: null,
        jwt: null,
        hydrate: false,

        setHydrate() {
            set({hydrate: true});
    },

        async verifySession() {
            try {
                const session = await account.getSession('current');
                set({session});
        }
        catch (error) {
                console.log(error)
            }
    },
        async login(email: string, password: string) {
)