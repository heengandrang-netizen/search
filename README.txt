MHMRWS SEARCH v10.9.4

Added privacy-safe, anonymized project evidence from a user-supplied registered conveyance deed. Personal party names, identifiers, addresses, payment references and exact unit number are excluded from the resident knowledge base.

MHMRWS SEARCH v10.9.4

Added privacy-safe, anonymized project evidence from a user-supplied registered conveyance deed. Personal party names, identifiers, addresses, payment references and exact unit number are excluded from the resident knowledge base.

MHMRWS SEARCH v10.9.4

Added privacy-safe, anonymized project evidence from a user-supplied registered conveyance deed. Personal party names, identifiers, addresses, payment references and exact unit number are excluded from the resident knowledge base.

MHMRWS SEARCH v10.9.3

Release fixes: full-width readable results on tablets, PIN/file-picker authorization race fixed, scanned-PDF OCR upload support, and user-supplied Flat Buyer Agreement evidence added with privacy-safe page summaries.

MHM Intelligence v9.4
- Google-style minimal home screen.
- English + Hindi + Hinglish search support.
- Auto / English / हिन्दी answer-language controls.
- Voice input language follows selected mode.
- Text-to-speech follows answer language.
- Hindi concept aliases improve local smart-search matching.
Note: This package contains the updated index.html UI. Merge with the full v9.3 data files when deploying.

v9.5 BRAND/UI UPDATE
- App renamed to MHM SEARCH.
- Google-inspired white interface and familiar blue/green/yellow/red accent palette.
- Search remains bilingual English/Hindi/Hinglish with voice input and spoken answers.

v9.6
- Adds a separate General Process layer when project-specific evidence is incomplete.
- Handover search now includes a general RWA/project handover process based on RERA Section 17.
- Fire-NOC and Environmental Clearance general verification fallbacks added; same pattern can be extended across topics.
- Supporting evidence/document sections collapse into dropdown-style details to reduce clutter.

v10 HIGHLY SMART SEARCH
Implemented:
1 Universal Answer Engine: MHM-specific facts + general process + conflicts + missing verification + next questions.
2 Evidence Strength Meter with six source-confidence levels.
3 Automatic Contradiction Engine for known numerical/source conflicts.
4 Smart Document Brain builds on OCR classification/date/reference/authority extraction.
6 MHM Master Timeline data layer.
8 Tower Intelligence A-G with site-evidence counts/sizes and safe pending status for exact sanctioned floors.
9 Contextual follow-up question suggestions.
Evidence/proof remains dropdown-based.

v10.1 RESULT LANGUAGE TOGGLE
- Added English | हिन्दी toggle above search results.
- Generated Smart Answer, general process, confidence labels, conflicts, missing-verification labels and follow-up UI can switch language.
- Original document/evidence text is preserved rather than silently altering source wording.
- Translation layer is deliberately separated from source evidence so proof remains faithful to the original document.

v10.2 DEEP WEB RESEARCH
- Added Ayaan Buildtech current MCA-derived corporate profile and charge-satisfaction leads.
- Added secondary RERA-data indication of three extensions through 31-12-2021.
- Added legacy/current unit-and-floor conflict intelligence (770 / 462 / 454; STILT+13 / 15-floor claims).
- Added current resale lead showing a 13-floor building context, explicitly not generalized to all towers.
- Primary RERA/JDA sanctioned plans continue to outrank all portal/marketing/resale data.

v10.3 SMART CONTINUOUS MONITORING
- Added MHM Deep Evidence Watch configuration to the app package.
- External ChatGPT condition-watch checks every 6 hours.
- Expanded identifiers and spelling variants for Max Heights Majestic / Ayaan Buildtech / RAJ/P/2017/150.
- Prioritises RERA attachments, JDA plans, tower A-G configurations, CC/OC, handover, RWA records, Fire/EC/STP/water/electricity approvals, title/encumbrance, complaints/orders, courts, institutional records and credible news.
- Delta logic suppresses duplicates and low-value pages and focuses on new/changed evidence, renewals, contradictions and corrections.
- Existing v10.2 deep-web research, smart search, bilingual result toggle, OCR/document intelligence and evidence dropdowns retained.

v10.3.1 CRITICAL SEARCH FIX
- Fixed blank/no-result search bug.
- Root cause: v9.4+ UI packaging accidentally omitted documents.json, intents.json,
  concepts.json, requirements.json, conflicts.json, gateways.json and approval_registry.json.
  Promise.all therefore failed before KB/search initialization.
- Restored the complete ~676 KB evidence document index and all search dictionaries.
- Fixed related-question buttons calling nonexistent ask(); they now call render().
- Added visible data-load error handling instead of silent failure.
- Retained v10.3 smart monitoring, deep research, bilingual UI and smart-answer layers.

v10.3.2 DEEP BUG AUDIT
CRITICAL fixes:
- Main app JavaScript was inside a <script src=...> tag. Browsers ignore inline code when src is present, so the engine could fail to initialise. Removed src/type from the main script; PDF.js continues to load dynamically only when a PDF is uploaded.
- conflictFor() referenced render-local rawSearch outside its scope, causing ReferenceError during every search. Fixed to normalize the supplied query directly.
- Reduced MutationObserver self-trigger risk in smart-result/language enhancement layers.
- Added search-engine readiness guard.
QA:
- All JSON files parsed successfully.
- All inline JavaScript passes node --check.
- Required search/evidence files are present.

v10.4.1 DEEP TILE/DATA AUDIT
- CRITICAL data regression fixed: v10.4 contained only 4 KB facts. Restored the complete historical knowledge base and merged all newer research. Current total: 68 facts.
- Audited all 12 home tiles. Every tile has a live action.
- Latest Updates now opens monitoring status instead of acting like a weak pseudo-search.
- Smart Answer runs a project-wide evidence summary.
- Documents opens the upload/local-evidence workflow.
- Added defensive no-match handling and cached the MHMRWS logo for offline use.
- All JSON files parse successfully; all inline JavaScript passes syntax validation.

v10.5 DEEP REGRESSION FIX
- Fixed semantic routing for the original legal/RWA questions from this project.
- Added dedicated maintenance-before-CC/OC, handover, unsold-flat maintenance, IFMS, sinking/repair fund and RWA-dissolution knowledge.
- Added Rajasthan Apartment Ownership Act 2019 section 10(3) unsold-flat maintenance rule.
- Specific/longer intent phrases now beat generic words such as builder, CC or handover.
- Added relevance threshold so the engine no longer forces an unrelated answer.
- Fixed search-before-data-load readiness detection.
- Added Golden Question regression suite; all tests pass.
- Answer language control is labelled honestly; original documentary evidence is not silently altered.

v10.6 RESIDENT DEMO RELEASE
- Expanded Golden Question regression suite from 9 to 40 real resident-style questions.
- Added Hinglish, typo and conversational variants across maintenance, sinking fund, handover, RWA dissolution, unsold flats, IFMS, flat count, approvals, completion, floors, RWA, CC/OC, complaints and mortgage/encumbrance.
- 40/40 intent-routing tests pass.
- Added boot-time Search Ready health badge to expose deployment/data-load problems before a demo.
- For offline/PWA use, first load the deployed HTTPS app so its service worker can cache the package; do not demo by opening index.html directly from inside the ZIP.
- Retains v10.5 legal-query safeguards, relevance threshold, evidence separation and monitoring.

v10.6.1 PRODUCTION-USE HARDENING
- Production/PWA release, not demo-only.
- Added proper 192px and 512px MHMRWS install icons.
- Service worker now skip-waits, claims clients and removes stale older caches on activation.
- Core search/evidence runtime remains fully cached for offline use after the first successful HTTPS/PWA load.
- Search Ready badge now also shows online/offline state.
- OCR wording corrected: first image-OCR use requires internet because the OCR engine is loaded externally.
- Text-PDF extraction also uses an external PDF.js module in this build, so PDF upload/extraction requires internet unless that browser already has the module cached. Existing indexed project evidence/search remains offline.
- 40/40 resident Golden Question intent tests retained and passing.
- All JSON/manifest parsing, JavaScript syntax, required files, service-worker core cache list and tile handlers validated.

v10.7 FAST + SMART PRODUCTION UPDATE
- Core saved knowledge/search remains offline after successful PWA installation/cache.
- Faster repeated search via prebuilt fact index.
- Stronger offline navigation fallback and same-origin runtime cache.
- Local query history (last 12) for future quick-reuse support.
- Result evidence is more explicitly classified.
- Internet-only verification is labelled.
- 40/40 resident regression suite retained.
IMPORTANT LIMITATION: new PDF/image OCR is not yet guaranteed fully offline because PDF.js/Tesseract are externally loaded. Bundling those libraries locally is the highest-priority next improvement.

v10.8 EVIDENCE INTELLIGENCE
IMPLEMENTED:
- Reviewed bilingual English/Hindi answer corpus for major resident/legal intents.
- Exact proof/source disclosure layer; it explicitly says when exact page metadata is unavailable rather than inventing a citation.
- Resident feedback: Wrong answer / Outdated / Missing proof.
- Local backup export for uploaded vault, feedback and recent queries.
- Smart document-ingestion governance: extracted uploads remain local searchable drafts and are not silently promoted to verified official facts.
- Existing fast index, offline core search, evidence classification and 40/40 Golden Question regression retained.
IMPORTANT:
- Full first-use offline PDF parsing + image OCR is NOT falsely claimed in this package. The current PDF.js/Tesseract engines are still externally loaded. To make those two functions genuinely first-use offline, their distributable runtime/worker/core/language assets must be bundled into the deployed package. Core search and already indexed evidence remain offline after PWA cache/install.

v10.8.1 ADMIN UPLOAD PIN
- All app-side document uploads are protected by an admin PIN gate.
- The PIN itself is not stored as plaintext in index.html; a SHA-256 comparison is used.
- Successful authorization remains valid for 5 minutes on the current open page, then PIN is required again.
- Direct/programmatic file-selection without a current authorization is rejected.
SECURITY NOTE: This is a static/offline PWA, so client-side PIN protection is an administrative UI barrier, not server-grade security. A determined technical user with access to the deployed source can modify/bypass client code. Strong multi-user security requires server-side authentication/authorization.

v10.8.2 UPLOAD PIN BYPASS FIX
- Fixed the actual Add Document bypass: uploadBtn is now protected and no longer opens fileInput directly.
- openProtectedUpload() now opens the real fileInput only after successful PIN authorization.
- Documents home tile also routes through the same protected wrapper.
- Raw fileInput onchange independently rejects unauthorized selection.
- Static audit confirms exactly one raw fileInput click exists, inside the authorized wrapper.
- PIN remains hash-only; plaintext PIN is absent from app source.
- 40/40 Golden Question regression retained; JavaScript/JSON/service-worker validation passes.

v10.8.3 FINAL DEEP PRODUCTION AUDIT
FIXES
- Upload PIN authorization is now single-use; every new document selection requires PIN again.
- Cancelling the picker expires unused authorization.
- Same file can be selected again after cancel/failure.
- Backup/export is PIN-protected because it can contain uploaded evidence.
- Query-history entry size is capped.
AUDIT PASS
- No plaintext admin PIN.
- Protected upload routes verified.
- 40/40 Golden Question regression.
- JSON, manifest, inline JavaScript and service-worker syntax.
- Required PWA assets and local static references.
- Core offline-cache asset presence.
KNOWN LIMITATION
- First-use PDF/image OCR is not guaranteed fully offline because PDF.js/Tesseract runtime assets remain external. Core search and already-indexed evidence remain offline after PWA caching.

v10.8.5 RUNTIME STARTUP FIX
ROOT CAUSE FIXED:
- runBootDiagnostics() referenced undeclared variable GATEWAYS.
- Gateway data is actually loaded into window.GW.
- This ReferenceError occurred after successful data loading, then propagated into the startup catch block and falsely displayed "Search engine could not initialize."
FIX:
- Diagnostics now reads window.GW.
- Non-critical saved-case UI and boot diagnostics are isolated so they cannot crash the core search startup.
- Service-worker cache bumped to v10.8.5.
- Embedded per-file JSON fallback retained.
- 40/40 Golden Question regression retained.

v10.8.7 SEARCH RESULT FIX
ROOT CAUSE:
- expandBi() was called by render(), smartMatches() and conflictFor(), but the function did not exist.
- Clicking Search therefore raised ReferenceError before ranking/rendering any result.
FIX:
- Added bilingual/Hinglish query expansion.
- Main intent detection and fact scoring now use the expanded query.
- Reduced the overly strict local-result cutoff.
- Added a no-blank result fallback.
- Service-worker cache bumped to v10.8.7.
- Existing 40/40 Golden data regression retained.
