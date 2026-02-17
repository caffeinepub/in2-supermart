# Specification

## Summary
**Goal:** Build a modern, responsive multi-page marketing website for IN2 Supermart with local-SEO, strong contact CTAs, and admin-managed offers/deals.

**Planned changes:**
- Create responsive pages and routes: Home, About Us, Categories, Offers & Deals, Visit Store / Contact; add mobile/desktop navigation and footer with address + quick links.
- Implement Home sections: hero with tagline “Fresh Groceries. Smart Prices. Near You.”, offers highlights, daily essentials, featured categories, category quick links, trust indicators, and a “Why Choose Us” section.
- Build Categories page with six category cards (visual + short description): Fruits & Vegetables, Dairy & Bakery, Packaged Foods, Household Essentials, Beverages & Snacks, Personal Care.
- Build Offers & Deals page with Weekly Promotions and Today’s Special Discounts sections, and offer cards including title/description/validity period (or placeholder).
- Build Visit Store / Contact page with Google Maps iframe embed, exact address text, store hours (“Open daily, closes at 10 PM”), directions prompt, and phone placeholder.
- Add site-wide CTAs: floating WhatsApp link (placeholder number) and click-to-call tel: link; ensure they don’t obstruct content on mobile.
- Add offers management: Motoko backend CRUD + data model for offers (title, description, discount/label, start/end date, active flag), public fetch of active offers, and an admin UI to manage offers.
- Protect admin actions using Internet Identity and an allowlist of admin principals (initially a single placeholder).
- Add SEO structure: per-page titles/meta descriptions, proper heading hierarchy, LocalBusiness/GroceryStore structured data with store name/address, and include target keywords in copy/metadata.
- Optimize performance: responsive/optimized static images, lazy-load non-critical images, minimize layout shift, and keep animations lightweight.

**User-visible outcome:** Visitors can browse a polished IN2 Supermart website, view categories and current offers, find the store on a map and contact via WhatsApp or phone; authorized admins can log in to create/update/deactivate offers that immediately appear on the Offers page.
