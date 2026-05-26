## 2023-10-27 - Accessible Icon-Only Buttons
**Learning:** Found a pattern where "Add to Cart" and similar icon-only buttons lacked proper `aria-label` and `title` attributes for screen readers and tooltips. They also lacked strong visual focus indicators for keyboard users.
**Action:** Always provide localized `aria-label` and `title` attributes for icon-only buttons. Ensure robust keyboard focus indicators using Tailwind's `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2` to make keyboard navigation clear and accessible.
