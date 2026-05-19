## 2024-05-19 - Accessibility of Icon-Only Buttons
**Learning:** Icon-only buttons lacking `aria-label` or `title` attributes create poor user experiences for screen reader users and users navigating by keyboard or voice.
**Action:** Always add descriptive `aria-label` and `title` attributes (using localized strings when available) to icon-only buttons. Additionally, ensure adequate keyboard focus visibility (`focus-visible:ring-2`, etc.) to assist non-mouse users.
