# Specification

## Summary
**Goal:** Add a new “Website Designed By” card section to the existing footer that highlights the designer, includes an Instagram contact CTA, and preserves all current footer content/credits.

**Planned changes:**
- Update `frontend/src/components/layout/Footer.tsx` to include a new footer card titled “Website Designed By” with a soft light-grey or subtle gradient background, matching the site’s clean premium style without overpowering the footer.
- Implement responsive layout: desktop/tablet shows a circular designer photo on the left with text on the right; mobile stacks the photo and text cleanly.
- Render the exact provided content (name, title, full description paragraph, CTA line, and the bottom dedication line) with appropriate typography where the dedication line is visually secondary.
- Add a “Contact Me on Instagram” button with an Instagram icon, subtle hover/focus animation, and a link opening in a new tab to `https://instagram.com/aditya.sharma.30` with safe rel attributes.
- Add and reference a static designer photo asset under `frontend/public/assets/generated`, displayed as a circular portrait with appropriate sizing and an informative alt attribute.
- Keep the existing footer bottom credit line “Made by Aditya Sharma” and the existing copyright line with the caffeine.ai referral link unchanged.

**User-visible outcome:** The footer includes a new premium “Website Designed By” designer card with a circular portrait, the provided designer bio text, and a working Instagram contact button, while all existing footer sections and credits remain intact.
