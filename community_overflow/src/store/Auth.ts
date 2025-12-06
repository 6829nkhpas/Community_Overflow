import {immer} from 'zustand/middleware/immer';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import { AppwriteException,ID,Models } from 'node-appwrite';
import { account } from '@/models/client/config';

export interface A