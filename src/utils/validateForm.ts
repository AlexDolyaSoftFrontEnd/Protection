import { emailRegex, nameRegex } from "@/constants/formConst";

// utils/validateForm.ts
type FormData = {
  name: string;
  email: string;
  messenger: string;
  contact: string;
};

type Errors = {
  name: string;
  messenger: string;
  email: string;
  contact: string;
};

type TranslateFunc = (key: string) => string;

export function validateFormData(
  formData: FormData,
  t: TranslateFunc
): { isValid: boolean; errors: Errors } {
  const errors: Errors = {
    name: "",
    messenger: "",
    email: "",
    contact: "",
  };

  let isValid = true;

  if (!formData.name.trim()) {
    errors.name = t("nullName");
    isValid = false;
  } else if (!nameRegex.test(formData.name)) {
    errors.name = t("errorName");
    isValid = false;
  }

  const hasEmail = !!formData.email.trim();
  const hasMessenger = !!formData.messenger?.trim();

  if (!hasEmail && !hasMessenger) {
    errors.email = t("eitherEmailOrMessenger");
    errors.messenger = t("eitherEmailOrMessenger");
    isValid = false;
  }

  if (hasEmail && !emailRegex.test(formData.email)) {
    errors.email = t("errorEmail");
    isValid = false;
  }

  if (hasMessenger && !formData.contact) {
    errors.contact = t("errorMessengerContactMissing");
    isValid = false;
  }

  return { isValid, errors };
}
