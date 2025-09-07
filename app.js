// Import calculation modules
import { calculationFunctions, calculationCategories } from './calculations/meta.js';
import { calculationComponents } from './calculations/map.js';

const workspace = document.getElementById('workspace');
const categoriesDiv = document.getElementById('categories');
const functionsDiv = document.getElementById('functions');
const clearAllBtn = document.getElementById('clearAll');

let selectedCategory = calculationCategories[0].id;
let calculationBlocks = [];

// --- UI GENERATION ---

function renderCategories() {
  categoriesDiv.innerHTML = '';
  calculationCategories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.name;
    btn.className = `category-btn px-3 py-2 rounded mb-2 w-full text-left font-medium ${selectedCategory === cat.id ? 'active' : ''}`;
    btn.onclick = () => {
      selectedCategory = cat.id;
      renderCategories();
      renderFunctions();
    };
    categoriesDiv.appendChild(btn);
  });
}

function renderFunctions() {
  functionsDiv.innerHTML = '<h3 class="font-semibold mb-2">Add Calculation</h3>';
  calculationFunctions.filter(f => f.category === selectedCategory)
    .forEach(fn => {
      const btn = document.createElement('button');
      btn.textContent = fn.name;
      btn.className = 'block w-full mb-2 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 rounded';
      btn.onclick = () => addCalculationBlock(fn.id);
      functionsDiv.appendChild(btn);
    });
}

function renderWorkspace() {
  workspace.innerHTML = '';
  calculationBlocks.forEach(block => {
    const blockDiv = document.createElement('div');
    blockDiv.className = 'block-card fade-in relative';
    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '✕';
    closeBtn.className = 'close-btn absolute top-3 right-4';
    closeBtn.onclick = () => removeCalculationBlock(block.id);
    blockDiv.appendChild(closeBtn);

    // Title
    const fn = calculationFunctions.find(f => f.id === block.functionId);
    blockDiv.innerHTML += `<h4 class="font-semibold text-indigo-700 mb-3">${fn ? fn.name : block.functionId}</h4>`;

    // Calculation body
    const container = document.createElement('div');
    calculationComponents[block.functionId](container, block.inputs || {}, res => {
      block.inputs = res.inputs;
      block.result = res.result;
      renderWorkspace(); // Re-render to update results
    }, block.result);
    blockDiv.appendChild(container);

    workspace.appendChild(blockDiv);
  });
}

// --- LOGIC ---

function addCalculationBlock(functionId) {
  calculationBlocks.push({ id: Date.now() + Math.random(), functionId, inputs: {}, result: {} });
  renderWorkspace();
}
function removeCalculationBlock(blockId) {
  calculationBlocks = calculationBlocks.filter(b => b.id !== blockId);
  renderWorkspace();
}
clearAllBtn.onclick = () => {
  calculationBlocks = [];
  renderWorkspace();
};

// --- INIT ---
renderCategories();
renderFunctions();
renderWorkspace();
