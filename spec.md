# Specification

## Summary
**Goal:** Remove all memory cards from the MemoriesSection so no card content is shown on the page.

**Planned changes:**
- Remove all three memory cards from `MemoriesSection.tsx` (or remove the component entirely from `App.tsx`)
- Ensure no empty whitespace block is left behind where the cards used to be
- Keep page order intact: Hero → ForgivenessPage → LetterSection → Footer

**User-visible outcome:** The "Our Memories" section and its cards are no longer visible on the page; all other sections remain unchanged.
