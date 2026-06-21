/* Cranky's FARM — inline icon set (Lucide-style, 2px round stroke).
   Loaded as a babel script; exports to window for sibling scripts. */
const S = ({ children, fill = 'none', sw = 2, ...p }) => (
  <svg viewBox="0 0 24 24" fill={fill} stroke={fill === 'none' ? 'currentColor' : 'none'}
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...p}>{children}</svg>
);

const HeartIcon = (p) => <S fill="currentColor" {...p}><path d="M12 21s-7.5-4.7-10-9.3C.4 8.4 2 4.9 5.3 4.6 7.4 4.4 9 5.6 12 8.2c3-2.6 4.6-3.8 6.7-3.6C22 4.9 23.6 8.4 22 11.7 19.5 16.3 12 21 12 21Z"/></S>;
const PawIcon = (p) => <S fill="currentColor" {...p}><circle cx="6" cy="10" r="1.9"/><circle cx="10.3" cy="6.6" r="1.9"/><circle cx="15.7" cy="6.6" r="1.9"/><circle cx="18" cy="10" r="1.9"/><path d="M12 11c2.5 0 5 2.2 5 4.6 0 1.8-1.6 2.4-3 2.4-1 0-1.6-.4-2-.4s-1 .4-2 .4c-1.4 0-3-.6-3-2.4C7 13.2 9.5 11 12 11Z"/></S>;
const ArrowRight = (p) => <S sw={2.4} {...p}><path d="M5 12h14M13 6l6 6-6 6"/></S>;
const MenuIcon = (p) => <S sw={2.2} {...p}><path d="M4 7h16M4 12h16M4 17h16"/></S>;
const CloseIcon = (p) => <S sw={2.3} {...p}><path d="M6 6l12 12M18 6 6 18"/></S>;
const MailIcon = (p) => <S {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></S>;
const MapPin = (p) => <S {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></S>;
const Calendar = (p) => <S {...p}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></S>;
const Sprout = (p) => <S {...p}><path d="M7 20h10M12 20v-8M12 12C12 8 9 6 4 6c0 4 3 6 8 6ZM12 12c0-3 2-5 6-5 0 3-2 5-6 5Z"/></S>;
const Quote = (p) => <S fill="currentColor" {...p}><path d="M7 7C5 8 4 10 4 13v4h6v-7H6c.2-1.4 1-2.3 2-3Zm10 0c-2 1-3 3-3 6v4h6v-7h-4c.2-1.4 1-2.3 2-3Z"/></S>;
const Facebook = (p) => <S fill="currentColor" {...p}><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z"/></S>;
const Instagram = (p) => <S {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></S>;
const ShieldHeart = (p) => <S {...p}><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z"/><path d="M12 15s-3-1.8-3-3.8c0-1 .8-1.7 1.7-1.7.7 0 1.1.4 1.3.7.2-.3.6-.7 1.3-.7.9 0 1.7.7 1.7 1.7C15 13.2 12 15 12 15Z"/></S>;
const Home = (p) => <S {...p}><path d="M4 11l8-6 8 6M6 10v9h12v-9"/></S>;
const Check = (p) => <S sw={3} {...p}><path d="M5 12l5 5L20 7"/></S>;

Object.assign(window, {
  HeartIcon, PawIcon, ArrowRight, MenuIcon, CloseIcon, MailIcon, MapPin,
  Calendar, Sprout, Quote, Facebook, Instagram, ShieldHeart, Home, Check,
});
