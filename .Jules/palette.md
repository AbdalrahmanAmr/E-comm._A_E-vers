## 2024-05-18 - Missing ARIA labels and Focus states on Icon-only Action Buttons
**Learning:** Icon-only action buttons (like "Add to Cart") often lack accessible names (aria-label) and clear keyboard focus indicators, degrading the experience for screen reader users and those navigating via keyboard.
**Action:** When implementing or modifying icon-only action buttons across the app, always provide localized `aria-label` and `title` attributes, and ensure robust keyboard focus indicators using Tailwind's `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600` classes.
