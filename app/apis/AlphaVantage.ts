import { Stock } from "../models/Stock";

const ALPHAVANTAGE_API_KEY = "G7LV18LYVZ0Y4LU6";
const API_GLOBAL_QUOTE = "Global Quote";
const API_OPEN_KEY = "02. open";
const API_HIGH_KEY = "03. high";
const API_LOW_KEY = "04. low";
const API_PRICE_KEY = "05. price";
const API_VOL_KEY = "06. volume";
const API_CHANGE_KEY = "09. change";
const API_CHANGE_PCT_KEY = "10. change percent";

export function FetchStockQuote(stock: Stock): 
    { open: number, high: number, low: number, price: number,
        volume: number, change: number, change_pct: number } | null {
    let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.ticker}&apikey=${ALPHAVANTAGE_API_KEY}`;
    let open, high, low, price, volume, change, change_pct;
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                open = result[API_GLOBAL_QUOTE][API_OPEN_KEY];
                high = result[API_GLOBAL_QUOTE][API_HIGH_KEY];
                low = result[API_GLOBAL_QUOTE][API_LOW_KEY];
                price = result[API_GLOBAL_QUOTE][API_PRICE_KEY];
                volume = result[API_GLOBAL_QUOTE][API_VOL_KEY];
                change = result[API_GLOBAL_QUOTE][API_CHANGE_KEY];
                change_pct = result[API_GLOBAL_QUOTE][API_CHANGE_PCT_KEY];

                console.log({ ticker: stock.ticker, open: open, high: high, low: low,
                    price: price, volume: volume, change: change, change_pct: change_pct })

                return { open, high, low, price, volume, change, change_pct };
            },
            (error) => {
                console.error(error);
            }
        )

    return null;
}