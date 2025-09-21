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
      "Documentação do Currículo",
      "Anexo de Documentos PDF",
      "Criação de Sessões Personalizadas",
      "Criação de subsessões",
      "Exportação do Currículo em PDF",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A versão completa do curriculo, com suporte ilimitado a função de exportação em PDF e importação automática do Lattes.",
    price: "R$14,99",
    priceIntervalName: "14 dias",
    stripe_price_id: "",
    stripe_product_id: "",
    features: [
      "Tudo no plano Grátis",
      "Exportações em PDF ilimitadas",
      "Importação automática do Lattes",
      "Suporte prioritário",
    ],
  }
]
