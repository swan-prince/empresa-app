export interface AuthForm {
  company: string;
  password?: string;
}

export interface UploadedFile {
  name: string;
  fileType: string;
  preview: string;
}

export interface ProfileForm {
  name: string;
  email: string;
}

export interface Client {
  id: number;
  sme: string;
  name: string;
  email: string;
}

export interface ContactForm {
  business: string;
  message: string;
}

export interface OfferForm {
  qualification: string;
  resume: string;
  description: string;
  duration: string;
  originalPrice: string;
  discountPrice: string;
}

export interface RequestItem {
  id: string;
  clientName: string;
  applicationDate: string;
  condition: string;
  expiresIn: string;
  offer: string;
}