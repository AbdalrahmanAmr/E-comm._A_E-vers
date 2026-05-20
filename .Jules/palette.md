## 2024-05-18 - Missing ARIA Labels & Focus States on Icon-Only Buttons
**Learning:** Found a critical accessibility pattern where icon-only buttons (like "Add to Cart" in ProductCard) were missing `aria-label`, `title` for tooltips, and explicit keyboard focus indicators (`focus-visible`).
**Action:** Always verify icon-only buttons have localized `aria-label`, helpful `title` tooltips, and `focus-visible` classes for keyboard users.
