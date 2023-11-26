import { z } from 'zod';
import { DateSchema } from '.';

export const UserSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    created_at: DateSchema,
    updated_at: DateSchema
});

export const TokenSchema = z.object({
    access_token: z.string(),
    token_type: z.literal('Bearer'),
    refresh_token: z.string()
});

export const ConnexionSchema = z.object({
    user: UserSchema,
    tokens: TokenSchema
});
