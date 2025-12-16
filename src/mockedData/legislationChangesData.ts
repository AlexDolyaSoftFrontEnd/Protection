export type DataChangesType = {
  id: string;
  link: string[];
};

export type LawChangesDataTranslation = {
  legislationTitle: string;
};

export type LegislationChangesType = {
  data: DataChangesType;
  uk: LawChangesDataTranslation;
  en: LawChangesDataTranslation;
  ru: LawChangesDataTranslation;
};

export const legislationChangesData: LegislationChangesType[] = [
  {
    data: {
      id: "05",
      link: [
        "https://zakon.rada.gov.ua/laws/show/4502-20#Text",
        "https://www.kmu.gov.ua/npas/pro-zatverdzhennia-pereliku-derzhav-hromadiany-piddani-iakykh-nabuvaiut-hromadianstvo-ukrainy-u-sproshchenomu-poriadku-1412-051125",
      ],
    },
    uk: {
      legislationTitle:
        "16 січня 2026 року набудуть чинності зміни до законодавства, які дозволяють громадянам України легально перебувати в іноземному громадянстві, а іноземцям отримувати українське громадянство без процедури припинення попереднього. \nНаразі перелік держав, із якими офіційно дозволене подвійне громадянство, залишається доволі обмеженим: Канада, Федеративна Республіка Німеччина, Республіка Польща, Сполучені Штати Америки та Чеська Республіка.",
    },
    en: {
      legislationTitle:
        "On January 16, 2026, amendments to the legislation will come into effect, allowing Ukrainian citizens to legally hold foreign citizenship and enabling foreigners to obtain Ukrainian citizenship without having to renounce their previous one. \nCurrently, the list of countries where dual citizenship is officially permitted remains quite limited: Canada, the Federal Republic of Germany, the Republic of Poland, the United States of America, and the Czech Republic",
    },
    ru: {
      legislationTitle:
        "С 16 января 2026 года вступят в силу изменения в законодательстве, которые позволяют гражданам Украины легально иметь иностранное гражданство, а иностранцам получать украинское гражданство без процедуры отказа от предыдущего. \nВ настоящее время перечень стран, с которыми официально разрешено двойное гражданство, остаётся довольно ограниченным: Канада, Федеративная Республика Германия, Республика Польша, Соединённые Штаты Америки и Чешская Республика.",
    },
  },
  {
    data: {
      id: "04",
      link: ["https://zakon.rada.gov.ua/laws/show/3-2025-п#Text"],
    },
    uk: {
      legislationTitle:
        "Строк дії тимчасового посвідчення громадянина України може бути продовжений на період дії військового стану в Україні +12 місяців. Також продовжується строк для подання документа про припинення іноземного громадянства. ",
    },
    en: {
      legislationTitle:
        "The validity period of a temporary certificate of a citizen of Ukraine may be extended for the period of martial law in Ukraine +12 months. The deadline for submitting a document on the termination of foreign citizenship is also extended.",
    },
    ru: {
      legislationTitle:
        "Срок действия временного удостоверения гражданина Украины может быть продлен на период военного положения в Украине +12 месяцев. Также продлевается срок для подачи документа о прекращении иностранного гражданства.",
    },
  },
  {
    data: {
      id: "01",
      link: ["https://zakon.rada.gov.ua/laws/show/3897-20#n111"],
    },
    uk: {
      legislationTitle:
        "Подання та розгляд вже поданих заяв громадян Російської Федерації, стосовно набуття громадянства України, зупиняється до спливу 12 місяців з дня припинення чи скасування воєнного стану в Україні.",
    },
    en: {
      legislationTitle:
        "The submission and consideration of already submitted applications of citizens of the Russian Federation regarding the acquisition of Ukrainian citizenship shall be suspended until the expiration of 12 months from the date of termination or cancellation of martial law in Ukraine.",
    },
    ru: {
      legislationTitle:
        "Подача та рассмотрение уже поданных заявлений граждан Российской Федерации относительно приобретения гражданства Украины приостанавливается на срок до 12 месяцев со дня прекращения или отмены военного положения в Украине.",
    },
  },
  {
    data: {
      id: "02",
      link: ["https://itd.rada.gov.ua/billInfo/Bills/Card/40268"],
    },
    uk: {
      legislationTitle:
        "Верховною Радою 1 грудня 2022 року було прийнято Закон «Про зупинення дії та вихід з Конвенції про правову допомогу і правові відносини у цивільних, сімейних і кримінальних справах та Протоколу до Конвенції про правову допомогу і правові відносини у цивільних, сімейних і кримінальних справах від 22 січня 1993 року».",
    },
    en: {
      legislationTitle:
        "The Verkhovna Rada adopted the Law «On the Suspension of the Operation and Withdrawal from the Convention on Legal Assistance and Legal Relations in Civil, Family, and Criminal Matters, and the Protocol to the Convention on Legal Assistance and Legal Relations in Civil, Family, and Criminal Matters of January 22, 1993» (Draft Law No. 0163) on December 1, 2022.",
    },
    ru: {
      legislationTitle:
        "Верховной Радой 1 декабря 2022 года был принят Закон «О приостановлении действия и выходе из Конвенции о правовой помощи и правовых отношениях по гражданским, семейным и уголовным делам и Протокола к Конвенции о правовой помощи и правовых отношениях по гражданским, семейным и уголовным делам от 22 января 1993».",
    },
  },
  {
    data: {
      id: "03",
      link: ["https://zakon.rada.gov.ua/laws/show/107-2023-п#Text"],
    },
    uk: {
      legislationTitle:
        "Відповідно до Постанови КМУ від 4 лютого 2023 року, №107 «Деякі питання прийняття на території України під час воєнного стану документів, виданих уповноваженими органами іноземних держав» під час воєнного стану та протягом 6 місяців після його припинення або скасування документи, виготовлені або засвідчені на території іноземних держав установою або спеціально на те уповноваженою особою в межах їх компетенції за установленою формою і скріплені гербовою печаткою, приймаються на території України без спеціального посвідчення (консульської легалізації, проставлення апостиля тощо) у разі, коли станом на 24 лютого 2022 р. такі документи приймалися на території України без спеціального посвідчення.",
    },
    en: {
      legislationTitle:
        "According to the Resolution of the Cabinet of Ministers of Ukraine No. 107 dated February 4, 2023, «Certain Issues Regarding the Acceptance of Documents Issued by Authorized Bodies of Foreign States on the Territory of Ukraine During Martial Law» during martial law and for 6 months after its termination or cancellation, documents that have been issued or certified on the territory of foreign states by an institution or a specially authorized person within their competence in the established form and sealed with an official stamp are accepted on the territory of Ukraine without special certification (consular legalization, apostille, etc.), provided that as of February 24, 2022, such documents were accepted in Ukraine without special certification.",
    },
    ru: {
      legislationTitle:
        "В соответствии с Постановлением КМУ от 4 февраля 2023 года №107 «Некоторые вопросы принятия на территории Украины во время военного положения документов, выданных уполномоченными органами иностранных государств» во время военного положения и в течение 6 месяцев после его прекращения или отмены документы, изготовленные или заверенные на территории иностранных государств учреждением или специально на то уполномоченным лицом в пределах их компетенции по установленной форме и скрепленные гербовой печатью, принимаются на территории Украины без специального удостоверения (консульской легализации, проставления апостиля и т.п.) в случае, когда по состоянию на 24 февраля 2022 г. такие документы принимались на территории Украины без специального удостоверения.",
    },
  },
];
