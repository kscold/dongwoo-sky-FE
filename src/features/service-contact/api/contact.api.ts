import { contactApi as baseContactApi } from "@/api/contact"
import type { ContactInquiryRequest } from "../types/contact"

export const serviceContactApi = {
  createInquiry: async (data: ContactInquiryRequest) => {
    const transformedData = {
      name: data.name,
      email: data.email || "",
      phone: data.phone,
      company: data.company,
      inquiryType: data.inquiryType,
      subject: data.subject || "문의",
      message: data.message,
      isUrgent: data.isUrgent,
      pricingInquiry: data.pricingInquiry,
    }
    return baseContactApi.createContactInquiry(transformedData)
  },
}