// src/types/types.ts

// Ensure UserSession includes role
export interface UserSession {
  name?: string;
  email?: string;
  image?: string;
  wallet?: string;
  role?: string;
}
