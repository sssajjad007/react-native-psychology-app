export interface INoteImage {
  path: string;
  id: string;
}

export interface INote {
  providerId: string;
  customerId: string;
  id: string;
  title: string;
  content: string;
  imageIds: string[];
  createdAt: string;
  modifiedAt: string;
}
