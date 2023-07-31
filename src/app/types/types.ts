export interface Branch {
  id: number;
  name: string;
  email: string;
  code: string;
  alternateContact: string;
  billCode: string;
  billNoStart: number;
  cashVat: any; // You can replace 'any' with the appropriate type if available
  city: string;
  contactNo: string;
  creditVat: any; // You can replace 'any' with the appropriate type if available
  hub: string;
  joinDate: any; // You can replace 'any' with the appropriate type if available
  pan: string;
  street: string;
  organizationName: string;
  organizationContactNo: string;
  organizationAddress: string;
  noOfBill: number;
  createdBy: any; // You can replace 'any' with the appropriate type if available
  createdDate: any; // You can replace 'any' with the appropriate type if available
  updatedBy: string;
  updatedDate: string;
  status: boolean;
}

export interface UserData {
  bsdate: string;
  userType: string;
  userName: string;
  branch: Branch;
  fiscalYear: number;
  token: string;
  balanceCn: number;
}

export interface LoginType {
  email: string;
  password: string;
}
