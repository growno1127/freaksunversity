import { z } from 'zod';

export const ZUpdateProfileMutationSchema = z.object({
  name: z.string().min(1),
  signature: z.string(),
});

export const ZUpdatePasswordMutationSchema = z.object({
  password: z.string().min(6),
});

export const ZForgotPasswordFormSchema = z.object({
  email: z.string().email().min(1),
});

export const ZResetPasswordFormSchema = z.object({
  password: z.string().min(6),
  token: z.string().min(1),
});

export type TUpdateProfileMutationSchema = z.infer<typeof ZUpdateProfileMutationSchema>;
export type TUpdatePasswordMutationSchema = z.infer<typeof ZUpdatePasswordMutationSchema>;
export type TForgotPasswordFormSchema = z.infer<typeof ZForgotPasswordFormSchema>;
export type TResetPasswordFormSchema = z.infer<typeof ZResetPasswordFormSchema>;
