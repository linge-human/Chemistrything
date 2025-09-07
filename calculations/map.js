// Map of calculation functionId to the rendering function
import { molarityBlock } from './molarity.js';
import { stoichiometryBlock } from './stoichiometry.js';
import { phBlock } from './ph.js';
import { molarMassBlock } from './molarMass.js';
import { percentCompBlock } from './percentComp.js';
import { solubilityBlock } from './solubility.js';
// Add import lines for other calculations as you implement them

export const calculationComponents = {
  'molarity': molarityBlock,
  'mole': stoichiometryBlock, // placeholder, real implementation may differ
  'mass': stoichiometryBlock, // placeholder
  'yield': stoichiometryBlock, // placeholder
  'ph': phBlock,
  'molar-mass': molarMassBlock,
  'percent-comp': percentCompBlock,
  'ion': () => {}, // implement as needed
  'solubility-check': solubilityBlock,
  'temp': () => {}, // implement as needed
  'gas-laws': () => {}, // implement as needed
};
