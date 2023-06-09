const products = [
  {
    id: 0,
    name: "Филе бедра цыпленка",
    image: "https://i.ibb.co/gJs85Td/image.png",
    description:
      "Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
    price: 400,
    weight: 700,
    specifications: [
      {
        property: "Масса",
        value: "0,7 кг. (595-805 г.)."
      },
      {
        property: "Срок годности",
        value: "6 суток"
      },
      {
        property: "Порода",
        value: "Кобб 500ю"
      },
      {
        property: "Место происхождения",
        value: "Тверская область"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "135 ккал./565 кДж"
      },
      {
        property: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
      }
    ]
  },
  {
    id: 1,
    name: "Филе бедра гуся",
    image: "https://i.ibb.co/86q2q4N/image.png",
    description:
      "Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
    price: 272,
    weight: 700,
    specifications: [
      {
        property: "Масса",
        value: "0,6 кг. (495-705 г.)."
      },
      {
        property: "Срок годности",
        value: "5 суток"
      },
      {
        property: "Порода",
        value: "Кобб 200ю"
      },
      {
        property: "Место происхождения",
        value: "Тверская область"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "335 ккалю./765 кДж"
      },
      {
        property: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 18,7 г., углеводы - 0 г.; на 100 г."
      }
    ]
  },
  {
    id: 2,
    name: "Мякоть бедра говяжья",
    image: "https://i.ibb.co/gJs85Td/image.png",
    description:
      "Мякоть бедра - это жестковатое мясо, но очень диетическое и прекрасно подходит для поклонников здорового питания. Мясо можно запечь или потушить с овощами. Все бычки на ферме Эдуарда Васильева выращиваются на натуральном корме",
    price: 200,
    weight: 700,
    specifications: [
      {
        property: "Масса",
        value: "0,6 кг. (495-705 г.)."
      },
      {
        property: "Срок годности",
        value: "5 суток"
      },
      {
        property: "Порода",
        value: "Кобб 0254"
      },
      {
        property: "Место происхождения",
        value: "Кемеровская область"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "400 ккалю./765 кДж"
      },
      {
        property: "Пищевая ценность",
        value: "белки - 23,8 г., жиры - 10,7 г., углеводы - 0 г.; на 100 г."
      }
    ]
  },
  {
    id: 3,
    name: "Грудка цыпленка на кости",
    image: "https://i.ibb.co/rdQkKbq/orig.jpg",
    description:
      "Мясо грудки считается самым диетическим. Грудку можно отваривать, тушить с овощами, запекать под сыром, обжаривать в соусе. Курицы на ферме Рошаля живут на свободном выгуле и питаются качественным сбалансированным комбикормом, поэтому их мясо мягкое и натуральное.",
    price: 500,
    weight: 700,
    specifications: [
      {
        property: "Масса",
        value: "0,6 кг. (495-705 г.)."
      },
      {
        property: "Срок годности",
        value: "5 суток"
      },
      {
        property: "Порода",
        value: "123 апро"
      },
      {
        property: "Место происхождения",
        value: "Омская область"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "405 ккалю./852 кДж"
      },
      {
        property: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 18,7 г., углеводы - 0 г.; на 100 г."
      }
    ]
  },
  {
    id: 4,
    name: "Голень цыпленка",
    image: "https://i.ibb.co/QrSvKCs/item-3401666-1.jpg",
    description:
      "Куриная голень - полезный и вкусный продукт. Голени вкусно и пожарить, и запечь с пряностями в духовке. Курицы на ферме Рошаля живут на свободном выгуле и питаются качественным сбалансированным комбикормом, поэтому их мясо мягкое и натуральное",
    price: 158,
    weight: 700,
    specifications: [
      {
        property: "Масса",
        value: "0,6 кг. (495-705 г.)."
      },
      {
        property: "Срок годности",
        value: "5 суток"
      },
      {
        property: "Порода",
        value: "жорн чыпыв"
      },
      {
        property: "Место происхождения",
        value: "Московская область"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "205 ккалю./520 кДж"
      },
      {
        property: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 18,7 г., углеводы - 0 г.; на 100 г."
      }
    ]
  }
];

export default products;
