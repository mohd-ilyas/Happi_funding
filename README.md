# Happi Funding — React (Phase 1)

**Phase 1 — HTML to React migration.** This is a straight port of `reference/original.html` into a componentized React app. Visual appearance, copy, layout, and interactive behavior were preserved as closely as possible — this is not a redesign.

## Technology stack
- React 19 + Vite
- Tailwind CSS (via CDN script, same as the original) + Font Awesome 6.4 (via CDN, same as the original)
- Plain React state (`useState`) for all view/menu/modal logic — no router, no global state library, matching the original's single-page view-swap behavior

## Installation
```bash
npm install
```

## Development
```bash
npm run dev
```

## Production build
```bash
npm run build
npm run preview   # serve the built output locally
```

## Project structure
```
src/
├── components/    Header, Logo, ProfileMenu, BurgerMenu, Footer, Modal,
│                   ModalContent, CampaignCard, CampaignGrid, ProgressBar,
│                   ImageSlider, ReportCard
├── pages/         Home, Explore, Trending, Latest, StartCampaign,
│                   TermsConditions, Help, CampaignDetails
├── data/          campaigns.js — the 6 original campaigns, values copied verbatim
├── utils/         percent.js — the raised/goal % calculation
├── App.jsx        top-level state: current page, campaign list, selected
│                   campaign, modal state, burger-menu state
└── main.jsx
```

## How the original HTML was migrated
The original was a single `cf.html` file using vanilla JS `innerHTML` templating
(`switchPage()`, `renderCard()`, `openModal()`, etc.) driven by global functions
and `document.getElementById`. Each of those functions was translated into React
state + handlers rather than copied as-is:

| Original | React equivalent |
|---|---|
| `switchPage(page)` | `App`'s `page` state + conditional render of page components |
| `renderCard(campaign)` | `CampaignCard` component |
| `toggleProfileMenu()` + outside-click listener | `ProfileMenu`'s local `open` state + `useEffect` click listener |
| `toggleBurgerMenu()` | `App`'s `burgerOpen` state, passed to `BurgerMenu` |
| `openModal(title, subtitle)` / `closeModal()` / `alertBox(msg)` | `App`'s `modal` state (`{open, title, subtitle}`) rendered through `Modal` + `ModalContent` (title-based branching, same as the original's if/else chain) |
| `nextSlide` / `prevSlide` / `setSlide` | `ImageSlider`'s local `currentSlide` state |
| `toggleLearnMore()` | `CampaignDetails`' local `learnMore` boolean |
| `handleCampaignSubmit(e)` | `App`'s `submitCampaign()`, called from `StartCampaign`'s controlled form |

Campaign data (all 6 campaigns, exact field values) was copied verbatim into
`src/data/campaigns.js`. The "Latest" page renders the same content as "Home",
matching the original's `page === 'home' || page === 'latest'` branch.

## Known limitations / intentional deviations
- **Thumbnail highlight on the campaign detail slideshow.** In the original, the
  active-thumbnail border is only set once at initial render — clicking a
  thumbnail or the next/prev arrows updates the main image but does **not**
  move the highlighted border (a side effect of it never re-rendering that
  markup). The React version drives the border from `currentSlide` state, so
  the active thumbnail highlight *does* update as you navigate. Flagging this
  per the "conflict handling" guidance rather than silently matching or fixing
  it — happy to make it byte-for-byte inert instead if you'd rather match the
  original bug.
- No automated pixel/screenshot diffing was run against the original across
  breakpoints (no browser/screenshot tooling was available in this session).
  The exact same Tailwind utility classes and CDN version are reused
  throughout, so rendering should match, but a manual side-by-side check in a
  browser is recommended before calling this "verified."
- `npm run build` and a local dev-server boot were both run successfully with
  no console/build errors (see validation below), but no automated
  functional/click-through test suite was run.

## Validation
```
npm install:  PASS
npm run build: PASS (no errors, 38 modules transformed)
Runtime (dev server boot + HTTP 200 on /): PASS
Console errors: not directly observable from this environment (no browser)
Responsive check: not run (no screenshot tooling) — same Tailwind classes/breakpoints preserved
Functional parity: reviewed line-by-line against reference/original.html; not click-tested in a real browser
Visual parity: same Tailwind CDN + Font Awesome CDN + exact class names reused; not screenshot-diffed
```

## Future phases (not implemented here)
Per the sign-up/sign-in flow spec, the following belong to later phases and
were deliberately **not** built in this migration:
- Individual (India) signup: phone + OTP, Gmail + OTP recovery, DOB/age, city/state/country
- Donation vs. Fundraising-campaign account paths
- Profile KYC for campaign creators: selfie/face KYC via Cashfree, address (with
  Google Maps lat/long + pincode), Aadhaar + PAN + file uploads, bank account
  details, repeat phone/Gmail verification before campaign launch
- Any backend, database, payments, or admin dashboard
