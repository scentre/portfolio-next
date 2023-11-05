"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown) => {
  if (!value || value == undefined || typeof value !== "string") {
    return false;
  }
  return true;
};
export const sendEmail = async (formData: FormData) => {
  let email = formData.get("email");
  let message = formData.get("message");

  if (!validateString(email)) {
    return {
      error: "invalid sender email",
    };
  }
  if (!validateString(message)) {
    return {
      error: "invalid sender email",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "ememe.ebuka@imalipay.com",
      subject: "message from resenders",
      reply_to: email as string,
      text: message as string,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    } else if (error && typeof error === "object" && "message" in error) {
    }
  }
};
