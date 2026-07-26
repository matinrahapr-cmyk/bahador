import type { SVGProps } from "react";
const Icon = ({ children, ...props }: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
export const ArrowLeft = (p: SVGProps<SVGSVGElement>) => <Icon {...p}><path d="M19 12H5m7 7-7-7 7-7"/></Icon>;
export const Phone = (p: SVGProps<SVGSVGElement>) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></Icon>;
export const Search = (p: SVGProps<SVGSVGElement>) => <Icon {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></Icon>;
export const Menu = (p: SVGProps<SVGSVGElement>) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>;
export const Check = (p: SVGProps<SVGSVGElement>) => <Icon {...p}><path d="m20 6-11 11-5-5"/></Icon>;
export const Calculator = (p: SVGProps<SVGSVGElement>) => <Icon {...p}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01"/></Icon>;
