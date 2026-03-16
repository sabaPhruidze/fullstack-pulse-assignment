const WORD_OVERRIDES: Record<string, string> = {
  ai: "AI",
  defi: "DEFI",
  rsi: "RSI",
  tvl: "TVL",
};

export const formatAlertType = (value: string) => {
  return value
    .split("_")
    .map((word) => {
      const lower = word.toLowerCase();

      if (WORD_OVERRIDES[lower]) {
        return WORD_OVERRIDES[lower];
      }
      return lower[0].toUpperCase() + lower.slice(1); // first word will be Big and rest small
    })
    .join(" ");
  // samples: ai_core_prediction => AI Core Prediction ; technical_pattern => Technical Pattern
};
