export type DataType = {
  id: string;
  link: string;
  categoryName:
    | "citizenship"
    | "immigration"
    | "status"
    | "citizensRights"
    | "entryExit";
};

export type LawDataTranslation = {
  legislationTitle: string;
};

export type LegislationType = {
  data: DataType;
  uk: LawDataTranslation;
  en: LawDataTranslation;
  ru: LawDataTranslation;
};

export const legislationData: LegislationType[] = [
  {
    data: {
      id: "01",
      link: "https://zakon.rada.gov.ua/laws/show/994_004#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle: "Європейська Конвенція про громадянство 1997 року",
    },
    en: {
      legislationTitle: "European Convention on Nationality, 1997",
    },
    ru: {
      legislationTitle: "Европейская Конвенция о гражданстве 1997 года",
    },
  },
  {
    data: {
      id: "02",
      link: "https://zakon.rada.gov.ua/laws/show/2235-14#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle: "Закон України «Про громадянство України»",
    },
    en: {
      legislationTitle: "Law of Ukraine «On Citizenship of Ukraine»»",
    },
    ru: {
      legislationTitle: "Закон Украины «О гражданстве Украины»",
    },
  },
  {
    data: {
      id: "03",
      link: "https://zakon.rada.gov.ua/laws/show/1636-12#Text",
      categoryName: "immigration",
    },
    uk: {
      legislationTitle: "Закон України «Про громадянство України» 1991 рік",
    },
    en: {
      legislationTitle: "Law of Ukraine «On Citizenship of Ukraine» 1991",
    },
    ru: {
      legislationTitle: "Закон Украины «О гражданстве Украины» 1991 года",
    },
  },
  {
    data: {
      id: "04",
      link: "https://zakon.rada.gov.ua/laws/show/2491-14#Text",
      categoryName: "immigration",
    },
    uk: {
      legislationTitle: "Закон України «Про імміграцію»",
    },
    en: {
      legislationTitle: "Law of Ukraine «On Immigration»",
    },
    ru: {
      legislationTitle: "Закон Украины «Об иммиграции»",
    },
  },
  {
    data: {
      id: "05",
      link: "https://zakon.rada.gov.ua/laws/show/3773-17#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Закон України «Про правовий статус іноземців та осіб без громадянства»",
    },
    en: {
      legislationTitle:
        "Law of Ukraine «On the Legal Status of Foreigners and Stateless Persons»",
    },
    ru: {
      legislationTitle:
        "Закон Украины «О правовом статусе иностранцев и лиц без гражданства»",
    },
  },
  {
    data: {
      id: "06",
      link: "https://zakon.rada.gov.ua/laws/show/1382-15#Text",
      categoryName: "citizensRights",
    },
    uk: {
      legislationTitle:
        "Закон України «Про свободу пересування та вільний вибір місця проживання в Україні»",
    },
    en: {
      legislationTitle:
        "Law of Ukraine «On Freedom of Movement and Free Choice of Place of Residence in Ukraine»",
    },
    ru: {
      legislationTitle:
        "Закон Украины «О свободе передвижения и свободном выборе места проживания в Украине»",
    },
  },
  {
    data: {
      id: "07",
      link: "https://zakon.rada.gov.ua/laws/show/3857-12#Text",
      categoryName: "citizensRights",
    },
    uk: {
      legislationTitle:
        "Закон України «Про порядок виїзду з України і в'їзду в Україну громадян України»",
    },
    en: {
      legislationTitle:
        "Law of Ukraine «On the Procedure for Departure from Ukraine and Entry into Ukraine by Citizens of Ukraine»",
    },
    ru: {
      legislationTitle:
        "Закон Украины «О порядке выезда из Украины и въезда в Украину граждан Украины»",
    },
  },
  {
    data: {
      id: "08",
      link: "https://zakon.rada.gov.ua/laws/show/1710-17#Text",
      categoryName: "entryExit",
    },
    uk: {
      legislationTitle: "Закон України «Про прикордонний контроль» ",
    },
    en: {
      legislationTitle: "Law of Ukraine «On Border Control»",
    },
    ru: {
      legislationTitle: "Закон Украины «О пограничном контроле»",
    },
  },
  {
    data: {
      id: "09",
      link: "https://zakon.rada.gov.ua/laws/show/3671-17#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Закон України «Про біженців та осіб, які потребують додаткового або тимчасового захисту»",
    },
    en: {
      legislationTitle:
        "Law of Ukraine «On Refugees and Persons in Need of Additional or Temporary Protection»",
    },
    ru: {
      legislationTitle:
        "Закон Украины «О беженцах и лицах, нуждающихся в дополнительной или временной защите»",
    },
  },
  {
    data: {
      id: "10",
      link: "https://zakon.rada.gov.ua/laws/show/2947-14#Text",
      categoryName: "citizensRights",
    },
    uk: {
      legislationTitle: "Сімейний кодекс України ",
    },
    en: {
      legislationTitle: "Family Code of Ukraine",
    },
    ru: {
      legislationTitle: "Семейный кодекс Украины",
    },
  },
  {
    data: {
      id: "11",
      link: "https://zakon.rada.gov.ua/laws/show/215/2001#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Указ Президента України «Порядок провадження за заявами і поданнями з питань громадянства України та виконання прийнятих рішень» ",
    },
    en: {
      legislationTitle:
        "Decree of the President of Ukraine «Procedure for Consideration of Applications and Submissions on Citizenship of Ukraine and Execution of Adopted Decisions»",
    },
    ru: {
      legislationTitle:
        "Указ Президента Украины «Порядок производства по заявлениям и представлениям по вопросам гражданства Украины и исполнения принятых решений»",
    },
  },
  {
    data: {
      id: "12",
      link: "https://zakon.rada.gov.ua/laws/show/5067-17#Text",
      categoryName: "citizensRights",
    },
    uk: {
      legislationTitle: "Закон України «Про зайнятість населення»",
    },
    en: {
      legislationTitle: "Law of Ukraine «On Employment of Population»",
    },
    ru: {
      legislationTitle: "Закон Украины «О занятости населения»",
    },
  },
  {
    data: {
      id: "13",
      link: "https://zakon.rada.gov.ua/laws/show/302-2015-%D0%BF#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Про затвердження порядку оформлення, видачі, обміну, пересилання, вилучення, повернення державі, визнання недійсним та знищення паспорта громадянина України» ",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «On Approval of the Procedure for the Issuance, Exchange, Sending, Withdrawal, Return to the State, Recognition as Invalid and Destruction of the Passport of a Citizen of Ukraine»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Об утверждении порядка оформления, выдачи, обмена, пересылки, изъятия, возврата государству, признания недействительным и уничтожения паспорта гражданина Украины»",
    },
  },
  {
    data: {
      id: "14",
      link: "https://zakon.rada.gov.ua/laws/show/265-2022-%D0%BF#n426",
      categoryName: "citizensRights",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок декларування та реєстрації місця проживання (перебування)»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for Declaring and Registering the Place of Residence (Stay)»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок декларирования и регистрации места жительства (пребывания)»",
    },
  },
  {
    data: {
      id: "15",
      link: "https://zakon.rada.gov.ua/laws/show/322-2018-%D0%BF#Text",
      categoryName: "immigration",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок оформлення, видачі, обміну, скасування, пересилання, вилучення, повернення державі, визнання недійсною та знищення посвідки на тимчасове проживання»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for the Issuance, Exchange, Cancellation, Sending, Withdrawal, Return to the State, Recognition as Invalid and Destruction of the Temporary Residence Permit»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок оформления, выдачи, обмена, аннулирования, пересылки, изъятия, возврата государству, признания недействительным и уничтожения вида на временное жительство»",
    },
  },
  {
    data: {
      id: "16",
      link: "https://zakon.rada.gov.ua/laws/show/321-2018-%D0%BF#Text",
      categoryName: "immigration",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок оформлення, видачі, обміну, скасування, пересилання, вилучення, повернення державі, визнання недійсною та знищення посвідки на постійне проживання»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for the Issuance, Exchange, Cancellation, Sending, Withdrawal, Return to the State, Recognition as Invalid and Destruction of the Permanent Residence Permit»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок оформления, выдачи, обмена, аннулирования, пересылки, изъятия, возврата государству, признания недействительным и уничтожения вида на постоянное жительство»",
    },
  },
  {
    data: {
      id: "17",
      link: "https://zakon.rada.gov.ua/laws/show/1983-2002-%D0%BF#n34",
      categoryName: "immigration",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок провадження за заявами про надання дозволу на імміграцію і поданнями про його скасування та виконання прийнятих рішень»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for Consideration of Applications for Immigration Permits and Submissions for Their Cancellation and Execution of Adopted Decisions»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок рассмотрения заявлений о предоставлении разрешения на иммиграцию и представлений о его отмене и выполнения принятых решений»",
    },
  },
  {
    data: {
      id: "18",
      link: "https://zakon.rada.gov.ua/laws/show/118-2017-%D0%BF#Text",
      categoryName: "entryExit",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Правила оформлення віз для в’їзду в Україну і транзитного проїзду через її територію»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Rules for Issuing Visas for Entry into Ukraine and Transit through Its Territory»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Правила оформления виз для въезда в Украину и транзитного проезда через ее территорию»",
    },
  },
  {
    data: {
      id: "19",
      link: "https://zakon.rada.gov.ua/laws/show/152-2014-%D0%BF#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок оформлення, видачі, обміну, пересилання, вилучення, повернення державі, визнання недійсним та знищення паспорта громадянина України для виїзду за кордон»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «On Approval of the Procedure for the Issuance, Exchange, Sending, Withdrawal, Return to the State, Recognition as Invalid and Destruction of the Passport of a Citizen of Ukraine for Traveling Abroad»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок оформления, выдачи, обмена, пересылки, изъятия, возврата государству, признания недействительным и уничтожения паспорта гражданина Украины для выезда за границу»",
    },
  },
  {
    data: {
      id: "20",
      link: "https://zakon.rada.gov.ua/laws/show/1111-2003-%D0%BF#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Правила оформлення і видачі тимчасового посвідчення громадянина України»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Rules for Issuing Temporary Certificates of Citizenship of Ukraine»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Правила оформления и выдачи временного удостоверения гражданина Украины»",
    },
  },
  {
    data: {
      id: "21",
      link: "https://zakon.rada.gov.ua/laws/show/150-2012-%D0%BF#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок продовження строку перебування та тимчасового проживання, продовження та скорочення строку тимчасового перебування іноземців та осіб без громадянства на території України»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for Extending the Period of Stay and Temporary Residence, Extension and Reduction of the Period of Temporary Stay of Foreigners and Stateless Persons on the Territory of Ukraine»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок продления срока пребывания и временного проживания, продления и сокращения срока временного пребывания иностранцев и лиц без гражданства на территории Украины»",
    },
  },
  {
    data: {
      id: "22",
      link: "https://zakon.rada.gov.ua/laws/show/57-95-%D0%BF#Text",
      categoryName: "entryExit",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Правила перетинання державного кордону громадянами України»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Rules for Crossing the State Border by Citizens of Ukraine»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Правила пересечения государственной границы гражданами Украины»",
    },
  },
  {
    data: {
      id: "23",
      link: "https://zakon.rada.gov.ua/laws/show/884-2013-%D0%BF#Text",
      categoryName: "entryExit",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок підтвердження достатнього фінансового забезпечення іноземців та осіб без громадянства для в’їзду в Україну, перебування на території України, транзитного проїзду через територію України і виїзду за її межі та визначення розміру такого забезпечення»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for Confirming Sufficient Financial Security for Foreigners and Stateless Persons to Enter Ukraine, Stay on the Territory of Ukraine, Transit through the Territory of Ukraine and Exit Beyond Its Borders, and Determining the Amount of Such Security»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок подтверждения достаточного финансового обеспечения иностранцев и лиц без гражданства для въезда в Украину, пребывания на территории Украины, транзитного проезда через территорию Украины и выезда за ее пределы и определения размера такого обеспечения»",
    },
  },
  {
    data: {
      id: "24",
      link: "https://zakon.rada.gov.ua/laws/show/68-2023-%D0%BF#n57",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Про затвердження технічного опису, зразка бланка, форм заяв для отримання, внесення змін та продовження строку дії дозволу на застосування праці іноземців та осіб без громадянства в Україні»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «On Approval of the Technical Description, Sample Form, Application Forms for Obtaining, Amending and Extending the Validity of the Permit for the Employment of Foreigners and Stateless Persons in Ukraine»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Об утверждении технического описания, образца бланка, форм заявлений для получения, внесения изменений и продления срока действия разрешения на применение труда иностранцев и лиц без гражданства в Украине»",
    },
  },
  {
    data: {
      id: "25",
      link: "https://zakon.rada.gov.ua/laws/show/285-2017-%D0%BF#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок оформлення та видачі посвідчення особи на повернення в Україну»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for Issuance of Identity Documents for Returning to Ukraine»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок оформления и выдачи удостоверения личности на возвращение в Украину»",
    },
  },
  {
    data: {
      id: "26",
      link: "https://zakon.rada.gov.ua/laws/show/317-2021-%D0%BF#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок розгляду заяв про визнання особою без громадянства»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for Considering Applications for Recognition as Stateless Persons»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок рассмотрения заявлений о признании лицом без гражданства»",
    },
  },
  {
    data: {
      id: "27",
      link: "https://zakon.rada.gov.ua/laws/show/85-2020-%D0%BF#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «Порядок ведення обліку громадян України, які проживають за межами України»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for Maintaining Records of Ukrainian Citizens Residing Abroad»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок ведения учета граждан Украины, которые проживают за пределами Украины»",
    },
  },
  {
    data: {
      id: "28",
      link: "https://zakon.rada.gov.ua/laws/show/2503-12#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Постанова ВРУ «Положення про паспорт громадянина України» ",
    },
    en: {
      legislationTitle:
        "Resolution of the Verkhovna Rada of Ukraine «Regulations on the Passport of a Citizen of Ukraine»",
    },
    ru: {
      legislationTitle:
        "Постановление ВРУ «Положение о паспорте гражданина Украины»",
    },
  },
  {
    data: {
      id: "29",
      link: "https://zakon.rada.gov.ua/laws/show/z1549-12#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Наказ МВС України «Про затвердження зразків документів, які подаються для встановлення належності до громадянства України, прийняття до громадянства України, оформлення набуття громадянства України, припинення громадянства України, скасування рішень про оформлення набуття громадянства України, та журналів обліку»",
    },
    en: {
      legislationTitle:
        "Order of the Ministry of Internal Affairs of Ukraine «On Approval of Samples of Documents Submitted for Establishing Citizenship of Ukraine, Admission to Citizenship of Ukraine, Issuance of Citizenship of Ukraine, Termination of Citizenship of Ukraine, Cancellation of Decisions on Issuance of Citizenship of Ukraine, and Registration Journals»",
    },
    ru: {
      legislationTitle:
        "Приказ МВД Украины «Об утверждении образцов документов, которые подаются для установления принадлежности к гражданству Украины, принятия в гражданство Украины, оформления приобретения гражданства Украины, прекращения гражданства Украины, отмены решений об оформлении приобретения гражданства Украины, и журналов учета»",
    },
  },
  {
    data: {
      id: "30",
      link: "https://zakon.rada.gov.ua/laws/show/z0806-12#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Наказ МВС України «Інструкція про примусове повернення і примусове видворення з України іноземців та осіб без громадянства»",
    },
    en: {
      legislationTitle:
        "Order of the Ministry of Internal Affairs of Ukraine «Instruction on Forced Return and Forced Expulsion from Ukraine of Foreigners and Stateless Persons»",
    },
    ru: {
      legislationTitle:
        "Приказ МВД Украины «Инструкция о принудительном возвращении и принудительном выдворении из Украины иностранцев и лиц без гражданства»",
    },
  },
  {
    data: {
      id: "31",
      link: "https://zakon.rada.gov.ua/laws/show/z1432-17#Text",
      categoryName: "immigration",
    },
    uk: {
      legislationTitle:
        "Наказ МВС України «Про затвердження Вимог до організації роботи з оформлення віз для в’їзду в Україну і транзитного проїзду через її територію 30.10.2017»",
    },
    en: {
      legislationTitle:
        "Order of the Ministry of Internal Affairs of Ukraine «On Approval of the Requirements for Organizing the Work of Issuing Visas for Entry into Ukraine and Transit through Its Territory of October 30, 2017»",
    },
    ru: {
      legislationTitle:
        "Приказ МВД Украины «Об утверждении Требований к организации работы по оформлению виз для въезда в Украину и транзитного проезда через ее территорию от 30.10.2017»",
    },
  },
  {
    data: {
      id: "32",
      link: "https://zakon.rada.gov.ua/laws/show/z1083-12#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Наказ ДПСУ «Інструкція з організації здійснення перевірки документів громадян України, іноземців та осіб без громадянства, які перетинають державний кордон» ",
    },
    en: {
      legislationTitle:
        "Order of the State Border Guard Service of Ukraine «Instruction on Organizing the Verification of Documents of Ukrainian Citizens, Foreigners, and Stateless Persons Crossing the State Border»",
    },
    ru: {
      legislationTitle:
        "Приказ ГПСУ «Инструкция по организации проверки документов граждан Украины, иностранцев и лиц без гражданства, пересекающих государственную границу»",
    },
  },
  {
    data: {
      id: "33",
      link: "https://zakon.rada.gov.ua/laws/show/z0006-20#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Наказ ДПСУ «Інструкція про порядок прийняття органами охорони державного кордону Державної прикордонної служби України рішень про заборону в’їзду в Україну іноземцям та особам без громадянства»",
    },
    en: {
      legislationTitle:
        "Order of the State Border Guard Service of Ukraine «Instruction on the Procedure for Making Decisions by the State Border Guard Service of Ukraine on the Prohibition of Entry into Ukraine for Foreigners and Stateless Persons»",
    },
    ru: {
      legislationTitle:
        "Приказ ГПСУ «Инструкция о порядке принятия органами охраны государственной границы Государственной пограничной службы Украины решений о запрете въезда в Украину иностранцам и лицам без гражданства»",
    },
  },
  {
    data: {
      id: "34",
      link: "https://zakon.rada.gov.ua/laws/show/z1241-16#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Наказ МВС України «Про затвердження Порядку провадження за заявами про оформлення документів для виїзду громадян України за кордон на постійне проживання»",
    },
    en: {
      legislationTitle:
        "Order of the Ministry of Internal Affairs of Ukraine «On Approval of the Procedure for Processing Applications for Documents for Citizens of Ukraine to Travel Abroad for Permanent Residence»",
    },
    ru: {
      legislationTitle:
        "Приказ МВД Украины «Об утверждении Порядка рассмотрения заявлений об оформлении документов для выезда граждан Украины за границу на постоянное проживание»",
    },
  },
  {
    data: {
      id: "35",
      link: "https://zakon.rada.gov.ua/laws/show/z0944-15#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Наказ МВС України «Про затвердження порядку обчислення строку тимчасового перебування в Україні іноземців, які є громадянами держав з безвізовим порядком в’їзду»",
    },
    en: {
      legislationTitle:
        "Order of the Ministry of Internal Affairs of Ukraine «On Approval of the Procedure for Calculating the Period of Temporary Stay in Ukraine for Foreigners Who Are Citizens of Visa-Free Entry Countries»",
    },
    ru: {
      legislationTitle:
        "Приказ МВД Украины «Об утверждении порядка исчисления срока временного пребывания в Украине иностранцев, являющихся гражданами государств с безвизовым порядком въезда»",
    },
  },
  {
    data: {
      id: "36",
      link: "https://zakon.rada.gov.ua/laws/show/z0620-19#Text",
      categoryName: "citizenship",
    },
    uk: {
      legislationTitle:
        "Наказ МВС України «ТИМЧАСОВИЙ ПОРЯДОК оформлення і видачі паспорта громадянина України»",
    },
    en: {
      legislationTitle:
        "Order of the Ministry of Internal Affairs of Ukraine «Temporary Procedure for Issuing and Issuing Passports of a Citizen of Ukraine»",
    },
    ru: {
      legislationTitle:
        "Приказ МВД Украины «Временный порядок оформления и выдачи паспорта гражданина Украины»",
    },
  },
  {
    data: {
      id: "37",
      link: "https://zakon.rada.gov.ua/laws/show/280-2013-п#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Постанова КМУ «ПОРЯДОК надання Державній прикордонній службі та виконання нею доручень уповноважених державних органів щодо осіб, які перетинають державний кордон»",
    },
    en: {
      legislationTitle:
        "Resolution of the Cabinet of Ministers of Ukraine «Procedure for Providing and Implementing Instructions by the State Border Guard Service Regarding Persons Crossing the State Border»",
    },
    ru: {
      legislationTitle:
        "Постановление КМУ «Порядок предоставления Государственной пограничной службе и выполнения ею поручений уполномоченных государственных органов в отношении лиц, пересекающих государственную границу»",
    },
  },
  {
    data: {
      id: "38",
      link: "https://zakon.rada.gov.ua/laws/show/z1091-17#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Наказ МВС «Про затвердження Порядку дій уповноважених службових осіб Державної прикордонної служби України в разі виявлення в пунктах пропуску через державний кордон України та контрольних пунктах в’їзду на тимчасово окуповану територію України та виїзду з неї осіб, стосовно яких надано доручення, та порядку взаємодії органів охорони державного кордону з уповноваженими державними органами, які надали доручення»",
    },
    en: {
      legislationTitle:
        "Order of the Ministry of Internal Affairs of Ukraine «On Approval of the Procedure for the Actions of Authorized Officers of the State Border Guard Service of Ukraine in Case of Detection of Persons Subject to Instructions at Border Crossing Points through the State Border of Ukraine and Control Points for Entry to and Exit from Temporarily Occupied Territory of Ukraine and Interaction with Authorized State Bodies That Provided Instructions»",
    },
    ru: {
      legislationTitle:
        "Приказ МВД «Об утверждении Порядка действий уполномоченных служебных лиц Государственной пограничной службы Украины в случае выявления в пунктах пропуска через государственную границу Украины и контрольных пунктах въезда на временно оккупированную территорию Украины и выезда с нее лиц, в отношении которых предоставлено поручение, и порядка взаимодействия органов охраны государственной границы с уполномоченными государственными органами, которые предоставили поручение»",
    },
  },
  {
    data: {
      id: "39",
      link: "https://zakon.rada.gov.ua/laws/show/z0869-18#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Наказ МВС «Порядок проведення підрозділами органів охорони державного кордону Державної прикордонної служби України процедури здійснення контролю другої лінії іноземців та осіб без громадянства під час в’їзду в Україну»",
    },
    en: {
      legislationTitle:
        "Order of the Ministry of Internal Affairs of Ukraine «Procedure for the Second Line Control of Foreigners and Stateless Persons by Units of the State Border Guard Service of Ukraine during Entry into Ukraine»",
    },
    ru: {
      legislationTitle:
        "Приказ МВД «Порядок проведения подразделениями органов охраны государственной границы Государственной пограничной службы Украины процедуры осуществления контроля второй линии иностранцев и лиц без гражданства при въезде в Украину»",
    },
  },
  {
    data: {
      id: "40",
      link: "https://zakon.rada.gov.ua/laws/show/z1146-11#Text",
      categoryName: "status",
    },
    uk: {
      legislationTitle:
        "Наказ МВС «Правила розгляду заяв та оформлення документів, необхідних для вирішення питання про визнання біженцем або особою, яка потребує додаткового захисту, втрату і позбавлення статусу біженця та додаткового захисту і скасування рішення про визнання особи біженцем або особою, яка потребує додаткового захисту»",
    },
    en: {
      legislationTitle:
        "Order of the Ministry of Internal Affairs of Ukraine «Rules for Considering Applications and Issuing Documents Necessary for Resolving Issues of Recognizing a Person as a Refugee or a Person in Need of Additional Protection, Losing and Depriving Refugee Status and Additional Protection, and Canceling Decisions on Recognizing a Person as a Refugee or a Person in Need of Additional Protection»",
    },
    ru: {
      legislationTitle:
        "Приказ МВД «Правила рассмотрения заявлений и оформления документов, необходимых для решения вопроса о признании беженцем или лицом, нуждающимся в дополнительной защите, утраты и лишения статуса беженца и дополнительной защиты и отмены решения о признании лица беженцем или лицом, нуждающимся в дополнительной защите»",
    },
  },
];
