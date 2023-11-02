import { DateSchema } from '@/dtos';
import { z } from 'zod';

export type DateReponse = z.infer<typeof DateSchema>;
