import { z } from 'zod';

export const DateSchema = z.object({
    human: z.string(),
    string: z.string(),
    local: z.date({ coerce: true })
});
