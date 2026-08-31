# CLARION Healthcare AI — Final Layout Freeze

**Status**: OWNER APPROVED / FINAL SOURCE OF TRUTH  
**Last Verified**: 2026-08-31  

---

## 1. Overview & Intent

This document records the exact owner-approved vertical composition and visual parameters for the **Healthcare AI** section (`#healthcare`).

### Design Intent
- **Header Overlap Protection**: The top eyebrow text (`HEALTHCARE INNOVATION · HUMAN-CENTERED WELLNESS`) sits cleanly below the 80px fixed header without clipping or overlap.
- **Top Clearance**: Dedicated top padding (`lg:pt-[128px]` and `scroll-mt-[80px]`) prevents fixed-header collision during viewport navigation or scroll snapping.
- **Internal Spacing Density**: Eyebrow-to-headline, headline-to-cards, and cards-to-journey gaps are tightly balanced (`space-y-3 lg:space-y-[12px]`).
- **Vertical Composition**: The 6-step user journey sits comfortably inside the 100vh viewport without introducing vertical overflow.

---

## 2. Exact Implementation Reference

### Component & File Path
- **File**: `src/components/HealthcareHighlight.jsx`
- **Section ID**: `id="healthcare"`

### Outer Section Wrapper
```jsx
<section
  id="healthcare"
  className="fullscreen-section bg-[#F2FBF7] text-[#142033] relative overflow-hidden border-b border-clarion-line/60 scroll-mt-[80px]"
>
```
- **Scroll Margin Offset**: `scroll-mt-[80px]` (`scroll-margin-top: 80px`)
- **Background**: `bg-[#F2FBF7]` with opacity-20 natural ambient SVG wave overlay
- **Layout Model**: `.fullscreen-section` flex container (`100svh` on desktop)

### Inner Main Container
```jsx
<div className="container-main max-w-7xl lg:max-w-[1320px] relative z-10 space-y-3 lg:space-y-[12px] pt-24 lg:pt-[128px] pb-4 lg:pb-[14px] my-auto">
```
- **Top Padding**: `pt-24 lg:pt-[128px]`
- **Bottom Padding**: `pb-4 lg:pb-[14px]`
- **Vertical Child Gap**: `space-y-3 lg:space-y-[12px]`
- **Alignment**: `my-auto`

### Section Editorial Header Block
```jsx
<div className="flex flex-col md:flex-row md:items-end justify-between gap-3.5 border-b border-emerald-900/10 pb-2 text-left">
  <div className="space-y-0.5 max-w-2xl">
    <span className="inline-flex items-center gap-2 text-emerald-800 font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-emerald-700 pb-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
      HEALTHCARE INNOVATION · HUMAN-CENTERED WELLNESS
    </span>
    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#142033] leading-[1.2] sm:leading-snug tracking-tight pt-0">
      기술의 마지막은, <br />
      <span className="text-[#1265E5]">사람이어야 합니다.</span>
    </h2>
  </div>
```
- **Eyebrow-to-Headline Gap**: `space-y-0.5` with `pt-0` on `<h2>`
- **Header Bottom Padding**: `pb-2`

### Desktop Primary Composition Grid (55% / 45%)
```jsx
<div className="grid lg:grid-cols-12 gap-5 lg:gap-7 items-stretch text-left">
```

#### Left Column: Real Class Photo Hero (55% / 7 cols)
- **Container**: `lg:col-span-7 bg-white rounded-xl p-4 sm:p-4.5 border border-emerald-600/20 shadow-sm flex flex-col justify-between space-y-2.5`
- **Photo Frame Aspect Ratio**: `aspect-[16/9.5]`
- **Image Source**: `/images/healthcare-actual-class.jpg` (`object-cover object-center`)
- **Main Caption**: `실제 그룹수업 현장 · 제자리태극권 & 생활건강PT`
- **Right Tag**: `REAL CLASS EXPERIENCE`

#### Right Column: HanSaengAI Mobile Mockup UI (45% / 5 cols)
- **Container**: `lg:col-span-5 bg-white rounded-xl p-4 sm:p-4.5 border border-emerald-600/20 shadow-sm flex flex-col justify-between space-y-2.5`
- **Logo Symbol**: `/images/brand/hansaeng-ai-symbol.png` (`w-7 h-7 sm:w-[29px] sm:h-[29px]`)
- **4 Screen Items**: `space-y-1.5 text-xs` (`TODAY`, `TODAY'S ROUTINE`, `PROGRESS`, `REASSESSMENT`)

### 6-Step Lifestyle User Journey Rail
```jsx
<div className="bg-white rounded-xl p-3.5 sm:p-4 border border-emerald-600/20 shadow-xs space-y-2.5">
```
- **Card Padding**: `p-3.5 sm:p-4`
- **Internal Gap**: `space-y-2.5`
- **Steps Array**: `01 생활건강 문진` ➔ `02 상태 이해` ➔ `03 생활건강PT` ➔ `04 실천 기록` ➔ `05 재평가` ➔ `06 변화 확인`

---

## 3. Freeze Elements (Do Not Alter)

The following design elements are **FROZEN** under owner approval:
- `HEALTHCARE INNOVATION · HUMAN-CENTERED WELLNESS` eyebrow text
- `기술의 마지막은, 사람이어야 합니다.` main headline
- Actual group class photo (`/images/healthcare-actual-class.jpg`)
- HanSaengAI logo symbol (`/images/brand/hansaeng-ai-symbol.png`, 29px)
- `REAL CLASS EXPERIENCE` badge
- HanSaengAI Mobile UI cards (`TODAY`, `TODAY'S ROUTINE`, `PROGRESS`, `REASSESSMENT`)
- 6-step user journey rail
- All font sizes, card dimensions, aspect ratios, and horizontal grid alignment

---

## 4. Restoration Rule

If the Healthcare AI section layout or vertical spacing is accidentally modified or degraded in future updates:

1. **Do not create a new redesign.**
2. **Use this document's exact values as the absolute Source of Truth.**
3. **Do not modify global Header or external section spacing.**
4. **Restore values strictly within `src/components/HealthcareHighlight.jsx`.**
5. **Do not resize photos, cards, or fonts arbitrarily.**
6. **Re-verify against production URL `https://clarion.ai.kr` after restoration.**
