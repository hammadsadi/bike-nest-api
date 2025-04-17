import { Customer } from "@prisma/client";

// Create Customer
const customerSaveToDB = async (payload: Customer) => {
  console.log(payload);
  return payload;
};

export const CustomerServices = {
  customerSaveToDB,
};
