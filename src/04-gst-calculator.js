/**
 * 🧾 GST Calculator - Tax Lagao Bhai!
 *
 * Bunty apni dukaan ke liye GST calculator bana raha hai. Customer ko bill
 * dena hai jisme base price, GST amount, aur total clearly dikhna chahiye.
 * GST rate category ke hisaab se change hota hai.
 *
 * GST Rates (by category string, case-insensitive):
 *   - "essential"   => 0% GST  (dal, chawal, atta, etc.)
 *   - "food"        => 5% GST  (packaged food, restaurant below Rs 7500)
 *   - "standard"    => 12% GST (processed food, business class tickets)
 *   - "electronics" => 18% GST (phones, laptops, etc.)
 *   - "luxury"      => 28% GST (cars, aerated drinks, tobacco)
 *   - Any other category => return null
 *
 * Rules:
 *   - Calculate: gstAmount = amount * rate / 100
 *   - Calculate: totalAmount = amount + gstAmount
 *   - Round gstAmount aur totalAmount to 2 decimal places using
 *     parseFloat(value.toFixed(2))
 *   - Return object: { baseAmount, gstRate, gstAmount, totalAmount }
 *   - category ko lowercase mein compare karo (case-insensitive)
 *   - Hint: Use toFixed(), parseFloat(), Number.isFinite(), toLowerCase()
 *
 * Validation:
 *   - Agar amount positive finite number nahi hai, return null
 *   - Agar category string nahi hai, return null
 *   - Agar category unknown hai, return null
 *
 * @param {number} amount - Base amount before tax
 * @param {string} category - Product category
 * @returns {{ baseAmount: number, gstRate: number, gstAmount: number, totalAmount: number } | null}
 *
 * @example
 *   calculateGST(1000, "electronics")
 *   // => { baseAmount: 1000, gstRate: 18, gstAmount: 180, totalAmount: 1180 }
 *
 *   calculateGST(500, "essential")
 *   // => { baseAmount: 500, gstRate: 0, gstAmount: 0, totalAmount: 500 }
 */
export function calculateGST(amount, category) {
  // Your code here
  const cats = ["essential", "food", "standard", "electronics", "luxury"]
  if (typeof(category) !== "string" || amount <= 0 || typeof(amount) !== "number") return null
  if (!Number.isFinite(amount) || amount == NaN) return null
  if (!cats.includes(category.toLowerCase())) return null
  category = category.toLowerCase()
  if (category.toLowerCase() == cats[0]) {
    const gstAmount = 0
    const totalAmt = gstAmount + amount
    return {baseAmount: amount, gstRate: 0, gstAmount: gstAmount, totalAmount: totalAmt}
  }
  else if (category.toLowerCase() == cats[1]) {
    const gstAmount = parseFloat(((amount * 5)/100).toFixed(2))
    const totalAmt = gstAmount + amount
    return {baseAmount: amount, gstRate: 5, gstAmount: gstAmount, totalAmount: totalAmt}
  }
  else if (category.toLowerCase() == cats[2]) {
    const gstAmount = parseFloat(((amount * 12)/100).toFixed(2))
    const totalAmt = gstAmount + amount
    return {baseAmount: amount, gstRate: 12, gstAmount: gstAmount, totalAmount: totalAmt}
  }
  else if (category.toLowerCase() == cats[3]) {
    const gstAmount = parseFloat(((amount * 18)/100).toFixed(2))
    const totalAmt = gstAmount + amount
    return {baseAmount: amount, gstRate: 18, gstAmount: gstAmount, totalAmount: totalAmt}
  }
  else {
    const gstAmount = parseFloat(((amount * 28)/100).toFixed(2))
    const totalAmt = gstAmount + amount
    return {baseAmount: amount, gstRate: 28, gstAmount: gstAmount, totalAmount: totalAmt}
  }
}
