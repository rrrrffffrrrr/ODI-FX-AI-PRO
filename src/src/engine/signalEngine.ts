import { CONFIG } from "../config/config";

export function generateSignal() {
  const signal = {
    market: CONFIG.market,
    timeframe: CONFIG.timeframe, 
    action: "WAIT",
    entry: 0,
    takeProfit: 0,
    stopLoss: 0,
    confidence: 0
  };

  return signal;
}
console.log("Signal Engine Loaded");
