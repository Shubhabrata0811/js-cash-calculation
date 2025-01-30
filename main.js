import { CashCalculator } from "./lib/CashCalculator.js";

function main (args = Deno.args) {
  console.log("Total: ", CashCalculator.total(...args));
}

main();