export interface User {
  userId: number;
  name: string;
  email: string;
  userAccessToken: string;
  isAdmin: boolean;
  termsAccepted: boolean;
  modifiedDate: number;
}