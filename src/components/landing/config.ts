export const WHATSAPP_URL =
  "https://wa.me/5511950741652?text=" +
  encodeURIComponent("Olá! Quero informações sobre as máquinas Logrosoft.");

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
