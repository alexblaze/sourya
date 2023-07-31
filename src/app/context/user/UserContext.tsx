import React, { createContext, ReactNode } from "react";
import { getUser } from "../../utils/cookieHelper";
import { UserData } from "../../types/types";

interface UserContextType {
  user: UserData;
}

const defaultUserContextValue: UserContextType = {
  user: {
    bsdate: "",
    userType: "",
    userName: "",
    branch: {
      id: 0,
      name: "",
      email: "",
      code: "",
      alternateContact: "",
      billCode: "",
      billNoStart: 0,
      cashVat: null,
      city: "",
      contactNo: "",
      creditVat: null,
      hub: "",
      joinDate: null,
      pan: "",
      street: "",
      organizationName: "",
      organizationContactNo: "",
      organizationAddress: "",
      noOfBill: 0,
      createdBy: null,
      createdDate: null,
      updatedBy: "",
      updatedDate: "",
      status: false,
    },
    fiscalYear: 0,
    token: "",
    balanceCn: 0,
  },
};

export const UserContext = createContext<UserContextType>(
  defaultUserContextValue
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const user = getUser();

  const contextValue: UserContextType = {
    user: { ...defaultUserContextValue.user, ...user },
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
