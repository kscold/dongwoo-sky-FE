import { style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

// 모바일 메뉴 버튼 - 확실히 보이도록 강화된 스타일
export const mobileMenuButton = style({
  display: "none",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  zIndex: 1500,
  padding: "8px",
  margin: "0 8px",
  borderRadius: "8px",
  color: vars.colors.primary,
  position: "relative",
  minWidth: "48px",
  minHeight: "48px",
  flexShrink: 0,
  fontSize: "24px",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",

  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex !important",
      order: 3,
    },
  },

  ":hover": {
    backgroundColor: "rgba(14, 77, 164, 0.1)",
    transform: "scale(1.05)",
  },

  ":active": {
    backgroundColor: "rgba(14, 77, 164, 0.2)",
    transform: "scale(0.95)",
  },
})

// 오버레이
export const mobileNavOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  zIndex: 1300,
  opacity: 0,
  visibility: "hidden",
  pointerEvents: "none",
  transition: "all 0.3s ease-in-out",
  display: "none",

  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
    },
  },
})

export const mobileNavOverlayOpen = style({
  opacity: 1,
  visibility: "visible",
  pointerEvents: "auto",
})

// 모바일 사이드바
export const mobileNav = style({
  position: "fixed",
  top: 0,
  right: 0,
  width: "85vw",
  maxWidth: "320px",
  height: "100vh",
  backgroundColor: "white",
  boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.3)",
  zIndex: 1400,
  overflowY: "auto",
  transform: "translateX(100%)",
  WebkitTransform: "translateX(100%)",
  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  display: "none",

  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
})

export const mobileNavOpen = style({
  transform: "translateX(0)",
  WebkitTransform: "translateX(0)",
})

// 사이드바 헤더
export const sidebarHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  borderBottom: "1px solid rgba(230, 230, 230, 0.8)",
  backgroundColor: "white",
  position: "sticky",
  top: 0,
  zIndex: 10,
})

export const sidebarLogo = style({
  fontSize: "20px",
  fontWeight: "bold",
  color: vars.colors.primary,
  letterSpacing: "-0.03em",
})

export const sidebarCloseButton = style({
  background: "none",
  border: "none",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#666",
  fontSize: "20px",
  transition: "all 0.2s ease",

  ":hover": {
    color: vars.colors.primary,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    transform: "rotate(90deg)",
  },
})

// 사이드바 콘텐츠
export const sidebarContent = style({
  padding: "16px 24px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  gap: "8px",
})

export const sidebarSectionTitle = style({
  fontSize: "14px",
  color: "#666",
  marginBottom: "8px",
  paddingLeft: "4px",
  fontWeight: "500",
})

// 네비게이션 링크들
export const sidebarNavLinks = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginBottom: "32px",
})

export const sidebarNavLink = style({
  display: "block",
  fontSize: "18px",
  color: "#333",
  fontWeight: "500",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "12px",
  transition: "all 0.2s ease",
  borderLeft: "3px solid transparent",

  ":hover": {
    color: vars.colors.primary,
    backgroundColor: "#f8fafc",
    borderLeftColor: vars.colors.primary,
    transform: "translateX(4px)",
  },
})

export const sidebarNavLinkActive = style({
  color: vars.colors.primary,
  backgroundColor: "#f0f8ff",
  fontWeight: "bold",
  borderLeftColor: vars.colors.primary,
})

// 구분선
export const divider = style({
  height: "1px",
  backgroundColor: "rgba(230, 230, 230, 0.8)",
  margin: "16px 0",
  width: "100%",
})

// CTA 버튼
export const sidebarCTAButton = style({
  marginTop: "auto",
  width: "100%",
  padding: "16px 24px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  backgroundColor: vars.colors.primary,
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  transition: "all 0.2s ease",
  boxShadow: "0 4px 12px rgba(14, 77, 164, 0.25)",

  ":hover": {
    backgroundColor: "#083472",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 16px rgba(14, 77, 164, 0.35)",
  },
})
