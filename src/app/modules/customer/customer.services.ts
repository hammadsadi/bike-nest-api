import { Customer } from "@prisma/client";
import prisma from "../../shared/prisma";

// Create Customer
const customerSaveToDB = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

export const CustomerServices = {
  customerSaveToDB,
};
