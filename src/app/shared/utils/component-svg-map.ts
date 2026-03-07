/**
 * Inline SVG preview illustrations for every component card.
 * All SVGs use `currentColor` so they inherit the primary colour from the
 * `.card-preview` container – zero images, zero external dependencies.
 * ViewBox: 200 × 90  (landscape 2.2:1)
 */
export const COMPONENT_SVG_MAP: Record<string, string> = {
  /* ── A ── */
  accordion: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="5"  width="180" height="22" rx="6" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <line x1="22" y1="16" x2="120" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    <path d="M168 11 L174 16 L168 21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="14" y="27"  width="172" height="14" rx="3" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-opacity=".3" stroke-width="1" stroke-dasharray="4 2"/>
    <line x1="22" y1="34" x2="100" y2="34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <rect x="10" y="47" width="180" height="20" rx="6" stroke="currentColor" stroke-width="1.5"/>
    <line x1="22" y1="57" x2="115" y2="57" stroke="currentColor" stroke-width="2"   stroke-linecap="round" opacity=".5"/>
    <path d="M165 52 L171 57 L165 62" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="10" y="73" width="180" height="13" rx="6" stroke="currentColor" stroke-width="1.5" opacity=".35"/>
    <line x1="22" y1="79" x2="105" y2="79" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
  </svg>`,

  anchor: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="14" x2="16" y2="14" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    <line x1="22" y1="14" x2="175" y2="14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="10" y1="30" x2="16" y2="30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity=".5"/>
    <line x1="22" y1="30" x2="145" y2="30" stroke="currentColor" stroke-width="2"   stroke-linecap="round" opacity=".55"/>
    <line x1="10" y1="45" x2="16" y2="45" stroke="currentColor" stroke-width="2"   stroke-linecap="round" opacity=".4"/>
    <line x1="22" y1="45" x2="160" y2="45" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".45"/>
    <line x1="10" y1="60" x2="16" y2="60" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".3"/>
    <line x1="22" y1="60" x2="100" y2="60" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
    <line x1="10" y1="75" x2="16" y2="75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".2"/>
    <line x1="22" y1="75" x2="130" y2="75" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity=".25"/>
  </svg>`,

  aside: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5"  y="5"  width="55" height="80" rx="8" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <rect x="70" y="5"  width="125" height="80" rx="8" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.2"/>
    <line x1="15" y1="22" x2="50" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
    <line x1="15" y1="34" x2="50" y2="34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <rect x="10" y="44" width="45" height="10" rx="4" fill="currentColor" fill-opacity=".2"/>
    <line x1="15" y1="66" x2="50" y2="66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <line x1="82" y1="22" x2="180" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="82" y1="38" x2="160" y2="38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
    <line x1="82" y1="52" x2="170" y2="52" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
  </svg>`,

  avatar: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="36" r="24" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="2"/>
    <circle cx="100" cy="30" r="9"  fill="currentColor" fill-opacity=".5"/>
    <path d="M75 62 Q75 52 100 52 Q125 52 125 62" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity=".15" stroke-linecap="round"/>
    <line x1="30" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".2"/>
    <line x1="60" y1="87" x2="140" y2="87" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".15"/>
  </svg>`,

  'avatar-group': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="44"  cy="45" r="22" fill="currentColor" fill-opacity=".18" stroke="white" stroke-width="2.5"/>
    <circle cx="44"  cy="39" r="8"  fill="currentColor" fill-opacity=".5"/>
    <circle cx="80"  cy="45" r="22" fill="currentColor" fill-opacity=".14" stroke="white" stroke-width="2.5"/>
    <circle cx="80"  cy="39" r="8"  fill="currentColor" fill-opacity=".4"/>
    <circle cx="116" cy="45" r="22" fill="currentColor" fill-opacity=".10" stroke="white" stroke-width="2.5"/>
    <circle cx="116" cy="39" r="8"  fill="currentColor" fill-opacity=".3"/>
    <circle cx="152" cy="45" r="22" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="145" y1="45" x2="159" y2="45" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="152" y1="38" x2="152" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  /* ── B ── */
  badge: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="18" width="52" height="52" rx="12" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="80" cy="18" r="13" fill="currentColor"/>
    <line x1="75" y1="18" x2="85" y2="18" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="80" y1="13" x2="80" y2="23" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="105" y="20" width="68" height="38" rx="10" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="173" cy="20" r="12" fill="currentColor" fill-opacity=".8"/>
    <line x1="168" y1="20" x2="178" y2="20" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  'bar-chart': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="10" x2="15" y2="78" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="15" y1="78" x2="192" y2="78" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <rect x="26"  y="42" width="20" height="36" rx="4" fill="currentColor" fill-opacity=".45"/>
    <rect x="56"  y="22" width="20" height="56" rx="4" fill="currentColor"/>
    <rect x="86"  y="34" width="20" height="44" rx="4" fill="currentColor" fill-opacity=".7"/>
    <rect x="116" y="50" width="20" height="28" rx="4" fill="currentColor" fill-opacity=".4"/>
    <rect x="146" y="28" width="20" height="50" rx="4" fill="currentColor" fill-opacity=".85"/>
    <rect x="172" y="56" width="16" height="22" rx="4" fill="currentColor" fill-opacity=".3"/>
  </svg>`,

  breadcrumb: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10"  y="35" width="34" height="20" rx="6" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.2"/>
    <path d="M50 42 L56 45 L50 48" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="62"  y="35" width="42" height="20" rx="6" fill="currentColor" fill-opacity=".1"  stroke="currentColor" stroke-width="1.2"/>
    <path d="M110 42 L116 45 L110 48" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="122" y="35" width="68" height="20" rx="6" fill="currentColor" fill-opacity=".2"  stroke="currentColor" stroke-width="1.5"/>
  </svg>`,

  button: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15"  y="26" width="75" height="38" rx="10" fill="currentColor"/>
    <line x1="30" y1="45" x2="75" y2="45" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="110" y="26" width="75" height="38" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="125" y1="45" x2="170" y2="45" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  /* ── C ── */
  card: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="6"  width="180" height="78" rx="12" fill="currentColor" fill-opacity=".07" stroke="currentColor" stroke-width="1.5"/>
    <rect x="10" y="6"  width="180" height="30" rx="12" fill="currentColor" fill-opacity=".14"/>
    <rect x="10" y="28" width="180" height="8"  fill="currentColor" fill-opacity=".14"/>
    <line x1="26" y1="50" x2="148" y2="50" stroke="currentColor" stroke-width="2"   stroke-linecap="round" opacity=".6"/>
    <line x1="26" y1="62" x2="120" y2="62" stroke="currentColor" stroke-width="2"   stroke-linecap="round" opacity=".4"/>
    <line x1="26" y1="74" x2="88"  y2="74" stroke="currentColor" stroke-width="2"   stroke-linecap="round" opacity=".25"/>
  </svg>`,

  'cascade-select': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6"   y="30" width="56" height="30" rx="7" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <line x1="16" y1="45" x2="50"  y2="45" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>
    <path d="M54 41 L58 45 L54 49" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="68"  y="20" width="56" height="50" rx="7" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5"/>
    <line x1="78" y1="34" x2="113" y2="34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="78" y1="45" x2="113" y2="45" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="78" y1="56" x2="113" y2="56" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <rect x="134" y="35" width="58" height="20" rx="6" fill="currentColor" fill-opacity=".18" stroke="currentColor" stroke-width="1.5"/>
    <line x1="144" y1="45" x2="180" y2="45" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>
  </svg>`,

  chart: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 75 L55 45 L95 55 L135 25 L175 35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 75 L55 45 L95 55 L135 25 L175 35 L175 75 Z" fill="currentColor" fill-opacity=".12"/>
    <line x1="15" y1="10" x2="15" y2="80" stroke="currentColor" stroke-width="1" opacity=".3"/>
    <line x1="15" y1="80" x2="190" y2="80" stroke="currentColor" stroke-width="1" opacity=".3"/>
    <circle cx="55"  cy="45" r="4" fill="currentColor"/>
    <circle cx="95"  cy="55" r="4" fill="currentColor"/>
    <circle cx="135" cy="25" r="4" fill="currentColor"/>
    <circle cx="175" cy="35" r="4" fill="currentColor"/>
  </svg>`,

  checkbox: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="10" width="22" height="22" rx="5" fill="currentColor"/>
    <polyline points="23,21 27,27 40,16" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="48" y1="21" x2="128" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".5"/>
    <rect x="18" y="40" width="22" height="22" rx="5" stroke="currentColor" stroke-width="2" fill="none"/>
    <line x1="48" y1="51" x2="148" y2="51" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".5"/>
    <rect x="18" y="68" width="22" height="20" rx="5" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity=".3"/>
    <line x1="48" y1="78" x2="108" y2="78" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".5"/>
  </svg>`,

  chip: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10"  y="30" width="64" height="30" rx="15" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.5"/>
    <line x1="24" y1="45" x2="56"  y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
    <line x1="62" y1="39" x2="68"  y2="51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="68" y1="39" x2="62"  y2="51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <rect x="82"  y="30" width="58" height="30" rx="15" fill="currentColor" fill-opacity=".1"  stroke="currentColor" stroke-width="1.5"/>
    <line x1="96" y1="45" x2="128" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <rect x="148" y="30" width="44" height="30" rx="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 2"/>
    <line x1="158" y1="45" x2="182" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
  </svg>`,

  'context-menu': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="38" y="5"  width="124" height="80" rx="10" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="52" cy="22" r="5"  fill="currentColor" opacity=".4"/>
    <line x1="62" y1="22" x2="150" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>
    <line x1="38" y1="35" x2="162" y2="35" stroke="currentColor" stroke-width="0.8" opacity=".2"/>
    <circle cx="52" cy="48" r="5"  fill="currentColor" opacity=".3"/>
    <line x1="62" y1="48" x2="148" y2="48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".55"/>
    <line x1="38" y1="61" x2="162" y2="61" stroke="currentColor" stroke-width="0.8" opacity=".2"/>
    <circle cx="52" cy="74" r="5"  fill="currentColor" opacity=".2"/>
    <line x1="62" y1="74" x2="138" y2="74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
  </svg>`,

  /* ── D ── */
  'dialog-box': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5"  y="5"  width="190" height="80" rx="8" fill="currentColor" fill-opacity=".04" stroke="currentColor" stroke-width=".6" opacity=".4"/>
    <rect x="20" y="10" width="160" height="70" rx="10" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.5"/>
    <rect x="20" y="10" width="160" height="24" rx="10" fill="currentColor" fill-opacity=".2"/>
    <rect x="20" y="26" width="160" height="8"  fill="currentColor" fill-opacity=".2"/>
    <line x1="34" y1="48" x2="146" y2="48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="34" y1="58" x2="122" y2="58" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
    <rect x="112" y="66" width="30" height="9" rx="4" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5"/>
    <rect x="148" y="66" width="30" height="9" rx="4" fill="currentColor" opacity=".7"/>
  </svg>`,

  divider: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="20" x2="185" y2="20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="15" y1="36" x2="185" y2="36" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>
    <line x1="15" y1="52" x2="185" y2="52" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="6 3" opacity=".5"/>
    <line x1="15" y1="68" x2="88"  y2="68" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
    <circle cx="100" cy="68" r="6" fill="currentColor" opacity=".3"/>
    <line x1="112" y1="68" x2="185" y2="68" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
  </svg>`,

  dock: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="56" width="180" height="28" rx="14" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="40"  cy="70" r="11" fill="currentColor" fill-opacity=".3"/>
    <circle cx="72"  cy="70" r="11" fill="currentColor" fill-opacity=".5"/>
    <circle cx="104" cy="70" r="11" fill="currentColor" fill-opacity=".25"/>
    <circle cx="136" cy="70" r="11" fill="currentColor" fill-opacity=".4"/>
    <circle cx="168" cy="70" r="11" fill="currentColor" fill-opacity=".2"/>
    <circle cx="72"  cy="51" r="4"  fill="currentColor" opacity=".5"/>
    <line x1="10" y1="14" x2="190" y2="14" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity=".15"/>
    <line x1="10" y1="26" x2="140" y2="26" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity=".1"/>
  </svg>`,

  dropdown: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="12" width="144" height="26" rx="8" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.5"/>
    <line x1="42" y1="25" x2="150" y2="25" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".5"/>
    <path d="M156 20 L161 25 L156 30" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(90 161 25) translate(-2 0)"/>
    <rect x="28" y="42" width="144" height="43" rx="8" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2"/>
    <line x1="42" y1="54" x2="138" y2="54" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
    <line x1="42" y1="65" x2="124" y2="65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>
    <line x1="42" y1="76" x2="105" y2="76" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
  </svg>`,

  /* ── H ── */
  'horizontal-nav': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="180" height="34" rx="10" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.5"/>
    <rect x="18" y="18" width="28"  height="18" rx="5" fill="currentColor" fill-opacity=".3"/>
    <line x1="56" y1="27" x2="92"  y2="27" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>
    <line x1="100" y1="27" x2="132" y2="27" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>
    <line x1="140" y1="27" x2="168" y2="27" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <line x1="10" y1="58" x2="190" y2="58" stroke="currentColor" stroke-width="1"   stroke-linecap="round" opacity=".15"/>
    <line x1="10" y1="70" x2="130" y2="70" stroke="currentColor" stroke-width="1"   stroke-linecap="round" opacity=".1"/>
    <line x1="10" y1="82" x2="100" y2="82" stroke="currentColor" stroke-width="1"   stroke-linecap="round" opacity=".1"/>
  </svg>`,

  /* ── K ── */
  knob: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="45" r="36" fill="currentColor" fill-opacity=".1"  stroke="currentColor" stroke-width="2"/>
    <circle cx="100" cy="45" r="24" fill="currentColor" fill-opacity=".18" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="100" cy="45" r="10" fill="currentColor" fill-opacity=".5"/>
    <line x1="100" y1="21" x2="100" y2="35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity=".35"/>
    <line x1="100" y1="35" x2="114" y2="27" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  /* ── L ── */
  'layout-manager': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10"  y="8"  width="85" height="74" rx="8" fill="currentColor" fill-opacity=".1"  stroke="currentColor" stroke-width="1.5"/>
    <rect x="105" y="8"  width="85" height="34" rx="8" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <rect x="105" y="48" width="85" height="34" rx="8" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5"/>
    <line x1="22" y1="28" x2="84"  y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="22" y1="40" x2="72"  y2="40" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <line x1="117" y1="25" x2="178" y2="25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="117" y1="65" x2="178" y2="65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
  </svg>`,

  /* ── M ── */
  'meter-group': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="10"  width="170" height="14" rx="7" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1"/>
    <rect x="15" y="10"  width="120" height="14" rx="7" fill="currentColor" fill-opacity=".7"/>
    <rect x="15" y="32" width="170" height="14" rx="7" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1"/>
    <rect x="15" y="32"  width="80"  height="14" rx="7" fill="currentColor" fill-opacity=".5"/>
    <rect x="15" y="54"  width="170" height="14" rx="7" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1"/>
    <rect x="15" y="54"  width="148" height="14" rx="7" fill="currentColor" fill-opacity=".85"/>
    <rect x="15" y="76"  width="170" height="8"  rx="4" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1"/>
    <rect x="15" y="76"  width="55"  height="8"  rx="4" fill="currentColor" fill-opacity=".4"/>
  </svg>`,

  /* ── N ── */
  'nav-bar': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5"  y="5"  width="190" height="30" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.2"/>
    <rect x="12" y="11" width="28"  height="18" rx="4" fill="currentColor" fill-opacity=".4"/>
    <line x1="50" y1="20" x2="84"  y2="20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>
    <line x1="92" y1="20" x2="120" y2="20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>
    <line x1="128" y1="20" x2="154" y2="20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <rect x="162" y="14" width="30" height="16" rx="6" fill="currentColor"/>
    <line x1="12" y1="50" x2="130" y2="50" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".2"/>
    <line x1="12" y1="62" x2="100" y2="62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".15"/>
  </svg>`,

  /* ── P ── */
  pagination: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8"  y="33" width="24" height="24" rx="7" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <path d="M22 42 L18 45 L22 48" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>
    <rect x="38" y="33" width="24" height="24" rx="7" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5"/>
    <line x1="46" y1="45" x2="54" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <rect x="68" y="33" width="24" height="24" rx="7" fill="currentColor"/>
    <line x1="76" y1="45" x2="84" y2="45" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <rect x="98"  y="33" width="24" height="24" rx="7" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5"/>
    <line x1="106" y1="45" x2="114" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <rect x="128" y="33" width="24" height="24" rx="7" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <line x1="136" y1="45" x2="144" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <rect x="158" y="33" width="24" height="24" rx="7" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <path d="M162 42 L166 45 L162 48" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>
  </svg>`,

  panel: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8"  width="180" height="74" rx="10" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.5"/>
    <rect x="10" y="8"  width="180" height="24" rx="10" fill="currentColor" fill-opacity=".15"/>
    <rect x="10" y="24" width="180" height="8"  fill="currentColor" fill-opacity=".15"/>
    <line x1="22" y1="20" x2="120" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    <path d="M168 16 L173 20 L168 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" transform="rotate(90 173 20)"/>
    <line x1="22" y1="46" x2="150" y2="46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="22" y1="58" x2="120" y2="58" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
    <line x1="22" y1="70" x2="80"  y2="70" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".2"/>
  </svg>`,

  'pattern-input': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="20" x2="84" y2="20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <rect x="15" y="28" width="170" height="34" rx="9" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="38"  cy="45" r="6" fill="currentColor" opacity=".7"/>
    <circle cx="60"  cy="45" r="6" fill="currentColor" opacity=".7"/>
    <circle cx="82"  cy="45" r="6" fill="currentColor" opacity=".7"/>
    <circle cx="104" cy="45" r="6" fill="currentColor" opacity=".5"/>
    <circle cx="126" cy="45" r="6" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <circle cx="148" cy="45" r="6" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".35"/>
    <circle cx="168" cy="45" r="6" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".3"/>
  </svg>`,

  picklist: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5"   y="5"  width="72" height="80" rx="8" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.5"/>
    <rect x="123" y="5"  width="72" height="80" rx="8" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.5"/>
    <line x1="15" y1="22" x2="67"  y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
    <line x1="15" y1="34" x2="67"  y2="34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <rect x="5"   y="44" width="72" height="14" rx="4" fill="currentColor" fill-opacity=".2"/>
    <line x1="15" y1="51" x2="67"  y2="51" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="65" x2="50"  y2="65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <path d="M84 36 L96 45 L84 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M116 36 L104 45 L116 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".4"/>
    <line x1="133" y1="22" x2="185" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="133" y1="34" x2="185" y2="34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="133" y1="65" x2="185" y2="65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
  </svg>`,

  pill: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12"  y="30" width="70" height="30" rx="15" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.5"/>
    <line x1="24" y1="45" x2="72"  y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
    <rect x="92"  y="30" width="50" height="30" rx="15" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <line x1="104" y1="45" x2="132" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <rect x="152" y="33" width="38" height="24" rx="12" fill="currentColor" fill-opacity=".3"/>
    <line x1="161" y1="45" x2="181" y2="45" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  popover: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="38" y="5"  width="124" height="60" rx="10" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <rect x="38" y="5"  width="124" height="20" rx="10" fill="currentColor" fill-opacity=".2"/>
    <rect x="38" y="17" width="124" height="8"  fill="currentColor" fill-opacity=".2"/>
    <line x1="52" y1="36" x2="148" y2="36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="52" y1="48" x2="132" y2="48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <path d="M90 65 L100 76 L110 65" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="100" cy="83" r="6" fill="currentColor" fill-opacity=".5" stroke="currentColor" stroke-width="1.5"/>
  </svg>`,

  /* ── R ── */
  'range-slider': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="38"  y1="25" x2="38"  y2="35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="80"  y1="25" x2="80"  y2="35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="118" y1="22" x2="118" y2="32" stroke="currentColor" stroke-width="2"   stroke-linecap="round" opacity=".8"/>
    <line x1="158" y1="25" x2="158" y2="35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <rect x="15" y="42" width="170" height="6" rx="3" fill="currentColor" fill-opacity=".2"/>
    <rect x="15" y="42" width="103" height="6" rx="3" fill="currentColor"/>
    <circle cx="118" cy="45" r="13" fill="currentColor" stroke="white" stroke-width="2.5"/>
    <line x1="15" y1="65" x2="108" y2="65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".25"/>
    <line x1="15" y1="76" x2="70"  y2="76" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".18"/>
  </svg>`,

  rating: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22,14 26,26 39,26 29,33 33,45 22,37 11,45 15,33 5,26 18,26"   fill="currentColor"/>
    <polygon points="58,14 62,26 75,26 65,33 69,45 58,37 47,45 51,33 41,26 54,26"  fill="currentColor"/>
    <polygon points="94,14 98,26 111,26 101,33 105,45 94,37 83,45 87,33 77,26 90,26" fill="currentColor"/>
    <polygon points="130,14 134,26 147,26 137,33 141,45 130,37 119,45 123,33 113,26 126,26" fill="currentColor"/>
    <polygon points="166,14 170,26 183,26 173,33 177,45 166,37 155,45 159,33 149,26 162,26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <line x1="12" y1="66" x2="188" y2="66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".2"/>
    <line x1="32" y1="76" x2="112" y2="76" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".15"/>
  </svg>`,

  /* ── S ── */
  'scroll-top': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="18" x2="185" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".25"/>
    <circle cx="100" cy="57" r="26" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="2"/>
    <path d="M89 61 L100 49 L111 61" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="100" y1="49" x2="100" y2="66" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  skeleton: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10"  width="40"  height="40" rx="20" fill="currentColor" fill-opacity=".15"/>
    <rect x="60" y="12"  width="130" height="12" rx="6"  fill="currentColor" fill-opacity=".15"/>
    <rect x="60" y="30"  width="100" height="12" rx="6"  fill="currentColor" fill-opacity=".12"/>
    <rect x="10" y="60"  width="180" height="10" rx="5"  fill="currentColor" fill-opacity=".12"/>
    <rect x="10" y="76"  width="140" height="10" rx="5"  fill="currentColor" fill-opacity=".1"/>
  </svg>`,

  'smart-menu': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="5"  width="180" height="28" rx="8" fill="currentColor" fill-opacity=".1"  stroke="currentColor" stroke-width="1.5"/>
    <rect x="18" y="12" width="22"  height="14" rx="4" fill="currentColor" fill-opacity=".35"/>
    <line x1="50" y1="19" x2="92"  y2="19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>
    <line x1="100" y1="19" x2="138" y2="19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>
    <rect x="58" y="38" width="84" height="48" rx="8" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.2"/>
    <line x1="68" y1="50" x2="132" y2="50" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
    <line x1="68" y1="62" x2="120" y2="62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>
    <line x1="68" y1="74" x2="108" y2="74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
  </svg>`,

  'smart-stepper': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28"  cy="45" r="14" fill="currentColor"/>
    <polyline points="21,45 26,51 36,39" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="42"  y1="45" x2="76" y2="45" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="90"  cy="45" r="14" fill="currentColor" fill-opacity=".85"/>
    <line x1="83"  y1="45" x2="97" y2="45" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="90"  y1="38" x2="90" y2="52" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="104" y1="45" x2="138" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3" opacity=".5"/>
    <circle cx="152" cy="45" r="14" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <line x1="166" y1="45" x2="186" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3" opacity=".3"/>
  </svg>`,

  snackbar: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="20" x2="190" y2="20" stroke="currentColor" stroke-width="1" opacity=".1"/>
    <line x1="10" y1="34" x2="130" y2="34" stroke="currentColor" stroke-width="1" opacity=".1"/>
    <rect x="10" y="52"  width="180" height="30" rx="10" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="28" cy="67" r="7"   fill="currentColor" opacity=".5"/>
    <line x1="42" y1="67" x2="118" y2="67" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    <rect x="138" y="60" width="40" height="14" rx="6" fill="currentColor"/>
    <line x1="149" y1="67" x2="167" y2="67" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  'speed-dial': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="157" cy="68" r="19" fill="currentColor"/>
    <line x1="149" y1="68" x2="165" y2="68" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="157" y1="60" x2="157" y2="76" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="110" cy="52" r="14" fill="currentColor" fill-opacity=".4" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="72"  cy="35" r="11" fill="currentColor" fill-opacity=".3" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="46"  cy="20" r="9"  fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="1.5"/>
    <line x1="119" y1="56" x2="145" y2="64" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2" opacity=".4"/>
    <line x1="81"  y1="40" x2="100" y2="48" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2" opacity=".3"/>
  </svg>`,

  speedometer: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80 A80 80 0 0 1 180 80" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none" opacity=".2"/>
    <path d="M20 80 A80 80 0 0 1 100 18" stroke="currentColor" stroke-width="9" stroke-linecap="round" fill="none" opacity=".5"/>
    <path d="M100 18 A80 80 0 0 1 180 80" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none" opacity=".15"/>
    <line x1="100" y1="80" x2="132" y2="34" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="100" cy="80" r="7" fill="currentColor"/>
    <line x1="20"  y1="82" x2="20"  y2="74" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <line x1="100" y1="16" x2="100" y2="24" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <line x1="180" y1="82" x2="180" y2="74" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
  </svg>`,

  'split-button': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18"  y="30" width="120" height="30" rx="10 0 0 10" fill="currentColor"/>
    <line x1="32" y1="45" x2="124" y2="45" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <rect x="138" y="30" width="44"  height="30" rx="0 10 10 0" fill="currentColor" fill-opacity=".75"/>
    <line x1="138" y1="30" x2="138" y2="60" stroke="white" stroke-width="1.5" opacity=".6"/>
    <path d="M152 41 L160 45 L152 49" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(90 160 45)"/>
    <rect x="18"  y="30" width="164" height="30" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  </svg>`,

  stack: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="60" width="140" height="22" rx="8" fill="currentColor" fill-opacity=".1"  stroke="currentColor" stroke-width="1.2"/>
    <rect x="20" y="48" width="160" height="22" rx="8" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.3"/>
    <rect x="10" y="36" width="180" height="22" rx="8" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.4"/>
    <line x1="24" y1="45" x2="100" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="24" y1="57" x2="90"  y2="57" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="44" y1="70" x2="100" y2="70" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
  </svg>`,

  stepper: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28"  cy="35" r="14" fill="currentColor"/>
    <polyline points="21,35 26,41 36,29" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="42"  y1="35" x2="74"  y2="35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="88"  cy="35" r="14" fill="currentColor" fill-opacity=".85"/>
    <line x1="81"  y1="35" x2="95"  y2="35" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="88"  y1="28" x2="88"  y2="42" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="102" y1="35" x2="134" y2="35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3" opacity=".5"/>
    <circle cx="148" cy="35" r="14" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <line x1="162" y1="35" x2="186" y2="35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3" opacity=".3"/>
  </svg>`,

  switch: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="28"  y="30" width="66" height="30" rx="15" fill="currentColor"/>
    <circle cx="79" cy="45" r="13" fill="white"/>
    <rect x="110" y="30" width="66" height="30" rx="15" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5"/>
    <circle cx="125" cy="45" r="13" fill="currentColor" fill-opacity=".3"/>
    <line x1="28"  y1="78" x2="78" y2="78" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".2"/>
  </svg>`,

  /* ── T ── */
  tabs: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8"   y="10" width="46" height="26" rx="8" fill="currentColor"/>
    <line x1="17" y1="23" x2="45"  y2="23" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <rect x="60"  y="10" width="38" height="26" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5"/>
    <line x1="69" y1="23" x2="89"  y2="23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <rect x="104" y="10" width="38" height="26" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <line x1="113" y1="23" x2="133" y2="23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <rect x="148" y="10" width="44" height="26" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".35"/>
    <line x1="157" y1="23" x2="182" y2="23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
    <rect x="8"   y="36" width="184" height="46" rx="0 0 10 10" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.5"/>
    <line x1="22" y1="54" x2="140" y2="54" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="22" y1="66" x2="110" y2="66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
  </svg>`,

  tag: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10"  y="30" width="55" height="30" rx="6" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.5"/>
    <line x1="20" y1="45" x2="55"  y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
    <rect x="75"  y="30" width="50" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <line x1="85" y1="45" x2="115" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <rect x="135" y="30" width="55" height="30" rx="6" fill="currentColor" fill-opacity=".3"/>
    <line x1="145" y1="45" x2="180" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>
  </svg>`,

  timeline: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="38" y1="10" x2="38" y2="86" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2" opacity=".3"/>
    <circle cx="38" cy="18" r="7" fill="currentColor"/>
    <line x1="50" y1="18" x2="148" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    <line x1="50" y1="27" x2="125" y2="27" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <circle cx="38" cy="50" r="7" fill="currentColor" fill-opacity=".5"/>
    <line x1="50" y1="50" x2="162" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".55"/>
    <line x1="50" y1="59" x2="135" y2="59" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <circle cx="38" cy="78" r="7" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <line x1="50" y1="78" x2="155" y2="78" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
  </svg>`,

  timer: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="87"  y1="10" x2="113" y2="10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="10" x2="100" y2="16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="100" cy="52" r="36" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="2"/>
    <circle cx="100" cy="52" r="3"  fill="currentColor"/>
    <line x1="100" y1="49" x2="100" y2="24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="49" x2="120" y2="60" stroke="currentColor" stroke-width="2"   stroke-linecap="round" opacity=".7"/>
  </svg>`,

  'top-bar': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5"  y="5"  width="190" height="32" rx="8" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.5"/>
    <rect x="14" y="13" width="28"  height="16" rx="4" fill="currentColor" fill-opacity=".5"/>
    <line x1="52" y1="21" x2="100" y2="21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".5"/>
    <line x1="108" y1="21" x2="148" y2="21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <circle cx="162" cy="21" r="8" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5"/>
    <circle cx="180" cy="21" r="8" fill="currentColor" fill-opacity=".5"/>
    <line x1="10" y1="52" x2="130" y2="52" stroke="currentColor" stroke-width="1"   stroke-linecap="round" opacity=".12"/>
    <line x1="10" y1="64" x2="90"  y2="64" stroke="currentColor" stroke-width="1"   stroke-linecap="round" opacity=".1"/>
    <line x1="10" y1="76" x2="150" y2="76" stroke="currentColor" stroke-width="1"   stroke-linecap="round" opacity=".08"/>
  </svg>`,

  'transfer-list': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5"   y="5"  width="72" height="80" rx="8" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.5"/>
    <rect x="123" y="5"  width="72" height="80" rx="8" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.5"/>
    <line x1="15" y1="22" x2="67"  y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
    <line x1="15" y1="34" x2="67"  y2="34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <rect x="5"   y="44" width="72" height="14" rx="4" fill="currentColor" fill-opacity=".2"/>
    <line x1="15" y1="51" x2="67"  y2="51" stroke="currentColor" stroke-width="2"   stroke-linecap="round"/>
    <line x1="15" y1="65" x2="50"  y2="65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <path d="M84 36 L96 45 L84 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M116 36 L104 45 L116 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".4"/>
    <line x1="133" y1="22" x2="185" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="133" y1="34" x2="185" y2="34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="133" y1="65" x2="185" y2="65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
  </svg>`,

  'tree-list': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="6"  width="105" height="16" rx="5" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.2"/>
    <path d="M28 22 L28 40 L40 40" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".5"/>
    <rect x="40" y="32" width="85"  height="14" rx="4" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.2"/>
    <path d="M28 40 L28 58 L40 58" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".5"/>
    <rect x="40" y="50" width="75"  height="14" rx="4" stroke="currentColor" stroke-width="1.2" opacity=".5"/>
    <path d="M58 64 L58 72 L70 72"  stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" opacity=".4"/>
    <rect x="70" y="66" width="58"  height="12" rx="4" stroke="currentColor" stroke-width="1.2" opacity=".4"/>
  </svg>`,

  /* ── Set-* pages (demo wrappers) ── */
  carousel: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="10" width="140" height="62" rx="10" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <path d="M18 36 L9 45 L18 54" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M182 36 L191 45 L182 54" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="88"  cy="82" r="5" fill="currentColor"/>
    <circle cx="100" cy="82" r="5" fill="currentColor" fill-opacity=".4"/>
    <circle cx="112" cy="82" r="5" fill="currentColor" fill-opacity=".3"/>
    <line x1="50" y1="34" x2="150" y2="34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="60" y1="48" x2="140" y2="48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
  </svg>`,

  'code-editor': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5"  y="5"  width="190" height="80" rx="10" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.5"/>
    <rect x="5"  y="5"  width="190" height="20" rx="10" fill="currentColor" fill-opacity=".18"/>
    <rect x="5"  y="17" width="190" height="8"  fill="currentColor" fill-opacity=".18"/>
    <circle cx="18" cy="15" r="4" fill="currentColor" opacity=".4"/>
    <circle cx="30" cy="15" r="4" fill="currentColor" opacity=".3"/>
    <circle cx="42" cy="15" r="4" fill="currentColor" opacity=".2"/>
    <path d="M20 36 L30 45 L20 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
    <path d="M45 36 L35 45 L45 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>
    <line x1="56" y1="32" x2="148" y2="32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="56" y1="44" x2="118" y2="44" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <line x1="56" y1="56" x2="132" y2="56" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
    <line x1="20" y1="68" x2="100" y2="68" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".25"/>
  </svg>`,

  dashboard: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5"  y="5"  width="88" height="38" rx="8" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.3"/>
    <rect x="103" y="5" width="92" height="38" rx="8" fill="currentColor" fill-opacity=".1"  stroke="currentColor" stroke-width="1.3"/>
    <rect x="5"  y="52" width="56" height="33" rx="8" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.3"/>
    <rect x="71" y="52" width="124" height="33" rx="8" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.3"/>
    <line x1="15" y1="22" x2="80"  y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="113" y1="22" x2="185" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="15" y1="64" x2="52"  y2="64" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="81" y1="64" x2="185" y2="64" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
  </svg>`,

  'button-toggle': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="30" width="180" height="30" rx="10" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5"/>
    <rect x="10" y="30" width="60"  height="30" rx="10" fill="currentColor"/>
    <line x1="21" y1="45" x2="59"  y2="45" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <line x1="80" y1="45" x2="102" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="116" y1="45" x2="138" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>
    <line x1="152" y1="45" x2="175" y2="45" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="70"  y1="30" x2="70"  y2="60" stroke="currentColor" stroke-width=".8" opacity=".3"/>
    <line x1="110" y1="30" x2="110" y2="60" stroke="currentColor" stroke-width=".8" opacity=".3"/>
    <line x1="150" y1="30" x2="150" y2="60" stroke="currentColor" stroke-width=".8" opacity=".3"/>
  </svg>`,

  'advanced-data-table': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5"  y="5"  width="190" height="80" rx="8" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.2"/>
    <rect x="5"  y="5"  width="190" height="18" rx="8" fill="currentColor" fill-opacity=".18"/>
    <rect x="5"  y="15" width="190" height="8"  fill="currentColor" fill-opacity=".18"/>
    <line x1="53"  y1="5" x2="53"  y2="85" stroke="currentColor" stroke-width=".8" opacity=".2"/>
    <line x1="101" y1="5" x2="101" y2="85" stroke="currentColor" stroke-width=".8" opacity=".2"/>
    <line x1="149" y1="5" x2="149" y2="85" stroke="currentColor" stroke-width=".8" opacity=".2"/>
    <line x1="5"  y1="33" x2="195" y2="33" stroke="currentColor" stroke-width=".8" opacity=".15"/>
    <line x1="5"  y1="50" x2="195" y2="50" stroke="currentColor" stroke-width=".8" opacity=".15"/>
    <line x1="5"  y1="67" x2="195" y2="67" stroke="currentColor" stroke-width=".8" opacity=".15"/>
    <line x1="14" y1="14" x2="42"  y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>
    <line x1="62" y1="14" x2="90"  y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
    <line x1="110" y1="14" x2="138" y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="158" y1="14" x2="186" y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="14" y1="42" x2="42"  y2="42" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".5"/>
    <line x1="62" y1="42" x2="88"  y2="42" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".4"/>
    <line x1="14" y1="58" x2="40"  y2="58" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".4"/>
    <line x1="62" y1="58" x2="92"  y2="58" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".35"/>
    <line x1="14" y1="75" x2="44"  y2="75" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".35"/>
  </svg>`,

  'animate-on-scroll': `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="20" width="150" height="50" rx="10" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
    <path d="M50 55 L100 30 L150 55" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".4"/>
    <rect x="40" y="30"  width="120" height="30" rx="8" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.5"/>
    <line x1="55" y1="42" x2="145" y2="42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <line x1="65" y1="52" x2="130" y2="52" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/>
    <path d="M88 8 L100 3 L112 8 L100 18 Z" fill="currentColor" fill-opacity=".3"/>
  </svg>`,

  /* ── Fallback ── */
  default: `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="10" width="160" height="70" rx="12" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.5"/>
    <rect x="20" y="10" width="160" height="26" rx="12" fill="currentColor" fill-opacity=".18"/>
    <rect x="20" y="28" width="160" height="8"  fill="currentColor" fill-opacity=".18"/>
    <circle cx="40" cy="23" r="7" fill="currentColor" fill-opacity=".5"/>
    <line x1="54" y1="23" x2="130" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".6"/>
    <line x1="32" y1="50" x2="140" y2="50" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
    <line x1="32" y1="62" x2="110" y2="62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
    <line x1="32" y1="72" x2="80"  y2="72" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".2"/>
  </svg>`,
};

/** Aliases so set-* route IDs resolve correctly */
COMPONENT_SVG_MAP['set-carousel'] = COMPONENT_SVG_MAP['carousel'];
COMPONENT_SVG_MAP['set-code-editor'] = COMPONENT_SVG_MAP['code-editor'];
COMPONENT_SVG_MAP['set-dashboard'] = COMPONENT_SVG_MAP['dashboard'];
COMPONENT_SVG_MAP['set-button-toggle'] = COMPONENT_SVG_MAP['button-toggle'];
COMPONENT_SVG_MAP['set-checkbox'] = COMPONENT_SVG_MAP['checkbox'];
COMPONENT_SVG_MAP['set-card'] = COMPONENT_SVG_MAP['card'];
COMPONENT_SVG_MAP['set-avatar'] = COMPONENT_SVG_MAP['avatar'];
COMPONENT_SVG_MAP['set-avatar-group'] = COMPONENT_SVG_MAP['avatar-group'];
COMPONENT_SVG_MAP['set-context-menu'] = COMPONENT_SVG_MAP['context-menu'];
COMPONENT_SVG_MAP['set-anchor'] = COMPONENT_SVG_MAP['anchor'];
COMPONENT_SVG_MAP['set-animate-on-scroll'] = COMPONENT_SVG_MAP['animate-on-scroll'];



