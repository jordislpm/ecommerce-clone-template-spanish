type Currency = "pesos" | "dop" | "dolares" | "usd";

export function formatPrice(
  amount: number | undefined | string,
  currency: Currency = "dop"
): string {
  let locale: string;
  let currencyCode: string;

  switch (currency) {
    case "dolares":
    case "usd":
      locale = "en-US";
      currencyCode = "USD";
      break;
    case "pesos":
    case "dop":
      locale = "es-DO";
      currencyCode = "DOP";
      break;
    default:
      locale = "en-US";
      currencyCode = "USD";
  }

  // Convertir amount a número
  let numericAmount: number = 0;
  if (typeof amount === "string") {
    numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) {
      numericAmount = 0;
    }
  } else if (typeof amount === "number") {
    numericAmount = amount;
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
  });

  return formatter.format(numericAmount);
}
