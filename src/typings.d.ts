import React from "react";

export interface MenuItemProps {
  label: string;
  data: string;
}

export interface BeneficiaryForm {
  name: string;
  nif: string;
  mobile: string;
  address: string;
  city: string;
  postal_code: string;
  email: string;
  gender: string;
  birth_date: string | null;
  cc: string;
  customerNumber: string;
}
export interface InsuredAssetData {
  quoteId?: string;
  protectedassetId?: string;
  type: string;
  model: string;
  brand: string;
  price: number | string;
  serial_number?: string;
}
export interface InsuranceContextInterface {
  insuredAssetDataList: Array<InsuredAssetData>;
  rateBase: string;
  quoteId: string;
  fingerprint: string;
  handleChangeAssetData: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<{ value: unknown }>, index: number) => void;
  // updateProtectedData: (protectedData: InsuredAssetData) => void;
  addNewQuoteForm: () => void;
  setRateBase:(rateBase: string) => void;
  setQuoteId: (quoteId: string) => void;
  setFingerprint: (fingerprint: string) => void;
  setProtectedDataSetId: (protectedassetId: string, index: number) => void;
  removeProtectedAsset: (protectedAssetId: string, index: number) => void;
}
export interface ValidateForm {
  purchaseData?: string;
  invoice?: string;
}
export interface Document {
  name: string;
  uri: string;
  description?: string;
}
export interface QuoteAndPolicy {
  id: string;
  number: string;
  product: string;
  insured: string;
  date: string;
  state: string;  
}
export interface UrlParams {
  policy_id: string;
}
export interface DetailDataItem {
  namespace: string;
  data: string;
}
export interface DeleteQuoteActionParams {
  protectedDataId?: string;
  index: number;
}
