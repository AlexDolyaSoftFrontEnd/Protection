"use client";
import { useState } from "react";

import { ErrorMessage } from "./ErrorMessage";
import { Modal } from "./Modal";
import { SuccessMessage } from "./SuccessMessage";
import { CheckForm } from "./CheckForm";
import { SubmitFnType } from "../../../types/modalProps";
import { IconArrow } from "../icons/IconArrow";
import { useTranslations } from "next-intl";
import { FormButton } from "./FormButton";
import Image from "next/image";

export const CheckModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const t = useTranslations("Interpol");

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
  };

  const notificationHandler = async (submitFn: SubmitFnType) => {
    try {
      await submitFn();
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsErrorModalOpen(true);
    }
  };

  return (
    <>
      <FormButton text={t("ctaButton")} onClick={() => setIsOpen(true)} />

      <Modal isOpen={isOpen} onClose={handleClose}>
        {isSuccess ? (
          <SuccessMessage />
        ) : (
          <div className=" relative w-[80%] min-w-[288px] h-auto max-w-[800px] mx-auto mt-[100px] tab:mt-[120px] pb-[100px]">
            <CheckForm notificationHandler={notificationHandler} />
          </div>
        )}
      </Modal>

      <Modal isOpen={isErrorModalOpen} onClose={handleErrorModalClose}>
        <ErrorMessage />
      </Modal>
    </>
  );
};
