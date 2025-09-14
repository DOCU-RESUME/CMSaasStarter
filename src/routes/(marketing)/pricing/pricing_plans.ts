export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Grátis",
    description: "Um plano gratuito para você começar!",
    price: "$0",
    priceIntervalName: "por mês",
    stripe_price_id: null,
    features: [
      "Importação do Lattes",
      "Documentação do Currículo",
      "Exportação do Currículo em PDF",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A versão completa do curriculo, com suporte ilimitado a função de exportação em PDF e importação automática do Lattes.",
    price: "R$49.90",
    priceIntervalName: "por mês",
    stripe_price_id: "price_1S714RInNRQXSAqDsEZMXCVQ",
    stripe_product_id: "prod_T37JY67fD9FU4O",
    features: [
      "Tudo no plano Grátis",
      "Exportações em PDF ilimitadas",
      "Importação automática do Lattes",
      "Suporte prioritário",
    ],
  },
  // {
  //   id: "enterprise",
  //   name: "Enterprise",
  //   description:
  //     "A plan to test the upgrade experience. Try buying this with the test credit card 4242424242424242.",
  //   price: "$15",
  //   priceIntervalName: "per month",
  //   stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
  //   stripe_product_id: "prod_OXj20YNpHYOXi7",
  //   features: [
  //     "Everything in Pro",
  //     "Try the 'upgrade plan' UX",
  //     "Still actually free!",
  //   ],
  // },
]
