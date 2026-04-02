import { type IncomingHeaders } from "@fastr/headers";

const crawlers = [
  "googlebot",
  "bingbot",
  "duckduckbot",
  "applebot",
  "linkedinbot",
  "twitterbot",
  "facebookexternalhit",
  "slurp",
  "baiduspider",
  "ia_archiver",
];

export function isBot(headers: IncomingHeaders): boolean {
  const ua = (headers.get("UserAgent") ?? "").toLowerCase();
  return crawlers.some((bot) => ua.includes(bot));
}
