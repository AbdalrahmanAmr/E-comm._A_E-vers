## 2024-05-23 - Add visual feedback to cart buttons
**Learning:** Found that the "Add to Cart" buttons in `ProductCard` were icon-only and lacked both an `aria-label` and visual feedback upon clicking, which could leave users confused about whether an action succeeded.
**Action:** Always add immediate visual feedback (e.g., swapping icon to `Check` and color to green temporarily) and proper `aria-label` text using the app's `translations` dictionary for all icon-only interactive elements.
