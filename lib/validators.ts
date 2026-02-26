import { z } from 'zod';

// Define Zod validation schemas

const leadFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

// Export the schema for use in other modules
export { leadFormSchema };