## 2024-05-28 - Localized ARIA Labels for Icon-Only Buttons
**Learning:** In internationalized (i18n) applications, it is critical that icon-only buttons (like "Add to Cart") not only have an `aria-label` and `title` for screen readers and tooltips, but that these strings are dynamically localized using the application's translation context.
**Action:** Always fetch the current language context (e.g., `const t = translations[language];`) and apply the translated string to `aria-label` and `title` attributes for all icon-only interactive elements, accompanied by robust keyboard focus rings.
