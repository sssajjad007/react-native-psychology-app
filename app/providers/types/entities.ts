export interface IProvider {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  description: string;
  gender: "male" | "female";
  birthday: string;
  profilePictureUrl: string;
  address: string;
  telephone: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IRequest {
  customerId: string;
  providerId: string;
  businessId: string;
  requestConfirmed: boolean;
  name: string;
  profilePictureUrl: string;
  description: string;
  createdAt: string;
  modifiedAt: string;
}
