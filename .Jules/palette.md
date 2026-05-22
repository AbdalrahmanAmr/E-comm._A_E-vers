## 2024-05-22 - Missing ARIA Labels on Icon-Only "Add to Cart" Buttons
**Learning:** Found that the primary "Add to Cart" action on product cards was implemented as an icon-only button without an `aria-label` or `title`. This renders the core conversion action completely inaccessible to screen reader users and lacks visual tooltip guidance for regular users.
**Action:** Always add both `aria-label` (for screen readers) and `title` (for tooltips) to icon-only buttons, specifically leveraging the `translations` object for localized strings.
