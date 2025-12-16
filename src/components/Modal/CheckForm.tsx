"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FormInModalProps } from "../../../types/modalProps";
import { FormButton } from "./FormButton";
import { validateFormData } from "@/utils/validateForm";
import {
  formUrl,
  initialErrors,
  initialFormData,
  inputClass,
} from "@/constants/formConst";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { CustomCheckbox } from "./CustomCheckbox";

export const CheckForm = ({ notificationHandler }: FormInModalProps) => {
  const t = useTranslations("Interpol");

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  const [formPolicyItem1, setFormPolicyItem1] = useState(false);
  const [formPolicyItem4, setFormPolicyItem4] = useState(false);

  const policyList = [
    t("formPolicyItem1"),
    t("formPolicyItem2"),
    t("formPolicyItem3"),
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, errors } = validateFormData(formData, t);
    setErrors(errors);

    if (!isValid) return;

    const onSendData = async () => {
      const data = {
        name: formData.name,
        country: formData.country,
        email: formData.email,
        messager: formData.messenger,
        contact: formData.contact,
        citizenship: formData.citizenship,
        language: formData.language,
        fast: formData.fast,
        message: formData.message,
      };
      const res = await fetch(formUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      setFormData({
        name: "",
        email: "",
        country: "",
        messenger: "",
        contact: "",
        citizenship: "",
        language: "",
        fast: "",
        message: "",
      });
    };

    try {
      await notificationHandler(onSendData);
    } catch (error) {
      console.error("Відправка не вдалася:", error);
    }
  };

  return (
    <>
      <h2 className="max-w-[650px] mx-auto font-lora text-white font-medium uppercase text-lg pc:text-xl mb-4 text-center">
        {t("formPolicyTitle")}
      </h2>
      <form
        onSubmit={handleSubmit}
        className=" max-w-[800px] w-full mx-auto text-left "
      >
        <CustomCheckbox
          checked={formPolicyItem1}
          onChange={() => setFormPolicyItem1(!formPolicyItem1)}
          label={policyList.map((item) => (
            <p key={item} className="mb-4 last:mb-0">
              {item}
            </p>
          ))}
        />
        <div className="tab:flex tab:gap-5 tab:mb-4 mt-8">
          <CustomInput
            id="name"
            value={formData.name}
            placeholder={t("name")}
            error={errors.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <CustomInput
            id="email"
            value={formData.email}
            placeholder={t("email")}
            error={errors.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="tab:flex tab:gap-5 tab:mb-4">
          <CustomSelect
            id="messenger"
            value={formData.messenger}
            placeholder={t("messenger")}
            error={errors.messenger}
            options={[
              { value: "Telegram", label: "Telegram" },
              { value: "Viber", label: "Viber" },
              { value: "WhatsApp", label: "WhatsApp" },
              { value: "Signal", label: "Signal" },
            ]}
            onChange={(e) =>
              setFormData({
                ...formData,
                messenger: e.target.value,
                contact: "",
              })
            }
          />
          <CustomInput
            id="contact"
            value={formData.contact}
            error={errors.contact}
            placeholder={
              formData.messenger
                ? t("enter") + " " + formData.messenger + " " + t("contact")
                : t("selectMessengerFirst")
            }
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
            disabled={!formData.messenger}
            className={` ${
              !formData.messenger ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </div>

        <div className="tab:flex tab:gap-5 tab:mb-4">
          <CustomInput
            id="country"
            value={formData.country}
            placeholder={t("country")}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          />
          <CustomInput
            id="citizenship"
            value={formData.citizenship}
            placeholder={t("citizenship")}
            onChange={(e) =>
              setFormData({ ...formData, citizenship: e.target.value })
            }
          />
        </div>
        <div className="tab:flex tab:gap-5 tab:mb-4">
          <CustomSelect
            id="language"
            value={formData.language}
            placeholder={t("language")}
            onChange={(e) =>
              setFormData({ ...formData, language: e.target.value })
            }
            options={[
              { value: "украинский", label: t("uk") },
              { value: "русский", label: t("ru") },
              { value: "английский", label: t("en") },
            ]}
          />
          <CustomSelect
            id="fast"
            value={formData.fast}
            onChange={(e) =>
              setFormData({
                ...formData,
                fast: e.target.value,
              })
            }
            options={[
              { value: "Да, это срочно", label: t("yes") },
              { value: "Нет, запрос не срочный", label: t("no") },
            ]}
            placeholder={t("fast")}
          />
        </div>
        <div className=" relative group mb-7 ">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            placeholder={t("message")}
            maxLength={300}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`${inputClass} h-[114px] tab:h-auto font-lora`}
          />
          <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
        </div>

        <div className="tab:flex tab:gap-5 mt-4 tab:mt-[45px]">
          <CustomCheckbox
            checked={formPolicyItem4}
            onChange={() => setFormPolicyItem4(!formPolicyItem4)}
            label={t("formPolicyItem4")}
          />

          <div className="flex justify-center tab:justify-end tab:w-1/2">
            <FormButton
              disabled={!formPolicyItem1 || !formPolicyItem4}
              text={t("send")}
              send
            />
          </div>
        </div>
      </form>
    </>
  );
};
