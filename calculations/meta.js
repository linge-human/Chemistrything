// Calculation categories and function metadata (matches original structure)
export const calculationCategories = [
  { name: "Stoichiometry", id: "stoich" },
  { name: "Solutions", id: "solutions" },
  { name: "Atomic Structure", id: "atomic" },
  { name: "Conversions", id: "conversions" },
  { name: "General", id: "general" }
];

export const calculationFunctions = [
  // Stoichiometry
  { category: "stoich", name: "Mole Calculation", id: "mole" },
  { category: "stoich", name: "Mass Calculation", id: "mass" },
  { category: "stoich", name: "Percent Yield", id: "yield" },

  // Solutions
  { category: "solutions", name: "Molarity", id: "molarity" },
  { category: "solutions", name: "Dilution", id: "dilution" },
  { category: "solutions", name: "pH Calculation", id: "ph" },

  // Atomic Structure
  { category: "atomic", name: "Molar Mass", id: "molar-mass" },
  { category: "atomic", name: "Percent Composition", id: "percent-comp" },
  { category: "atomic", name: "Ion Charge", id: "ion" },
  { category: "atomic", name: "Solubility Check", id: "solubility-check" },

  // Conversions
  { category: "conversions", name: "Temperature", id: "temp" },

  // General
  { category: "general", name: "Gas Laws", id: "gas-laws" }
];
