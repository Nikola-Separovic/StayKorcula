# StayKorčula Refactoring Plan

## Overview
Transforming Villa Aquamare single-villa website into StayKorčula multi-property booking platform.

## Phase 1: Data Structure ✅ (COMPLETED)
- [x] Created `app/[locale]/data/config.ts` - Site configuration
- [x] Created `app/[locale]/data/contact.ts` - Centralized contact info
- [x] Created `app/[locale]/data/properties.ts` - All property data
- [x] Created `app/[locale]/data/services.ts` - All service data
- [x] Created utility functions (slugify, formatPhone, resolveLocale)

## Phase 2: i18n System (IN PROGRESS)
- [ ] Create new `app/[locale]/lib/i18n/dict.ts` with proper types
- [ ] Update i18n utilities
- [ ] Add validation message translations

## Phase 3: Component Restructure
- [ ] Create `app/[locale]/components/ui/` folder
  - [ ] Button.tsx
  - [ ] Input.tsx
  - [ ] Card.tsx
  - [ ] Modal.tsx
  - [ ] SectionWrapper.tsx
- [ ] Create `app/[locale]/components/sections/` folder
  - [ ] Move Hero, Gallery, Rooms, etc.
  - [ ] Make them accept dynamic props
- [ ] Create `app/[locale]/components/layout/` folder
  - [ ] Move Header, Footer, LanguageSwitch

## Phase 4: Dynamic Pages
- [ ] Create `app/[locale]/(site)/accommodations/page.tsx` - Listing page
- [ ] Create `app/[locale]/(site)/accommodations/[slug]/page.tsx` - Property page
- [ ] Create `app/[locale]/(site)/services/page.tsx` - Services listing
- [ ] Create `app/[locale]/(site)/services/[slug]/page.tsx` - Service page

## Phase 5: New Landing Page
- [ ] Create new StayKorčula homepage
- [ ] Add property previews
- [ ] Add services preview
- [ ] Update navigation

## Phase 6: API Routes & Schema
- [ ] Update `/api/contact` with localized emails
- [ ] Update `/api/availability`
- [ ] Create dynamic schema generators

## Phase 7: Cleanup
- [ ] Remove hardcoded values
- [ ] Fix phone number inconsistencies
- [ ] Convert to Server Components where possible
- [ ] Update Footer to use dictionary

## Phase 8: Documentation
- [ ] Create structure overview
- [ ] Add guides for adding properties/services
- [ ] Document translation system

