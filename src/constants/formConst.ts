export const initialFormData = {
  name: "",
  email: "",
  country: "",
  messenger: "",
  contact: "",
  citizenship: "",
  language: "",
  fast: "",
  message: "",
};
export const initialErrors = {
  name: "",
  messenger: "",
  email: "",
  contact: "",
};

export const inputClass =
  "mt-6 tab:mt-0 mb-7 tab:mb-0 placeholder:text-sm placeholder:pc:text-lg pc:text-xl block w-full bg-transparent border-0 pb-4 tab:pb-[10px] pc:pb-7 tab:pt-[15px] pc:pt-[29px] pl-[18px] pr-4 tab:pl-5 placeholder:uppercase font-semibold text-textInput placeholder:text-formLight group-focus:outline-none focus:outline-none focus:ring-0";

export const nameRegex =
  /^(?=(.*\S.*\S))[^\-\s][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'"`\-\sʼ’]+$/;
export const emailRegex =
  /^(?!.*\.\.)(?!.*[.-]@)(?!@.*[.-]$)([a-zA-Z0-9._%+\-'"]+@(?=[a-zA-Z0-9.-]{1,63}\.[a-zA-Z]{2,}$)(?![.-])[a-zA-Z0-9.-]+(?<![.-]))$/;

export const formUrl = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM}`;
