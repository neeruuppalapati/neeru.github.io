// /js/fitness.js
// Fills the fitness log table from js/fitness-entries.js, newest first.
import { entries } from './fitness-entries.js';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

// "2026-09-04" -> "9/4"
const formatDate = (iso) => {
  const [, month, day] = iso.split('-').map(Number);
  return `${month}/${day}`;
};

const renderFitnessLog = () => {
  const tbody = document.getElementById('fitness-body');
  if (!tbody) return;

  const valid = entries.filter((entry) => {
    const ok = ISO_DATE.test(entry.date);
    if (!ok) console.warn('fitness-entries.js: date must be YYYY-MM-DD, skipping', entry);
    return ok;
  });

  // ISO dates sort correctly as strings. Newest first; ties keep list order.
  const sorted = valid.slice().sort((a, b) => b.date.localeCompare(a.date));

  tbody.innerHTML = '';
  for (const { date, activity, duration } of sorted) {
    const row = document.createElement('tr');
    for (const text of [formatDate(date), activity, duration]) {
      const cell = document.createElement('td');
      cell.textContent = text;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderFitnessLog);
} else {
  renderFitnessLog();
}
