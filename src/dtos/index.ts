import { z } from 'zod';

export const DateDTO = z.object({
    human: z.string(),
    string: z.string(),
    local: z.date({ coerce: true })
});

export const UserDTO = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    created_at: DateDTO,
    updated_at: DateDTO
});

export const TokenDTO = z.object({
    access_token: z.string(),
    token_type: z.literal('Bearer'),
    refresh_token: z.string()
});
