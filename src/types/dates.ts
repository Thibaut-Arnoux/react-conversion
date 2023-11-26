import { DateSchema } from '@/schemas';
import { z } from 'zod';

export type DateReponse = z.infer<typeof DateSchema>;
