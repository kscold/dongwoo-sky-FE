import { style, keyframes, createVar } from "@vanilla-extract/css"
import { vars } from "./theme.css"

// 애플 스타일 미니멀리즘을 위한 추가 변수
const headerBlur = createVar()
const headerShadow = createVar()
const accentColor = createVar()
const scrollProgress = createVar()

// 스크롤 진행률 애니메이션
const progressGradient = keyframes({
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0% 50%" },
})

export const headerContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space.md} ${vars.space.lg}`,
  backgroundColor: vars.colors.glass,
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  borderBottom: `1px solid ${vars.colors.glassBorder}`,
  position: "sticky",
  top: 0,
  zIndex: vars.zIndices.sticky,
  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  boxShadow: vars.shadows.glass,
  vars: {
    [headerBlur]: "16px",
    [headerShadow]: vars.shadows.glass,
    [accentColor]: vars.colors.glassBorder,
    [scrollProgress]: "0%",
  },
  "::after": {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    height: "2px",
    width: scrollProgress,
    background: `linear-gradient(90deg, ${vars.colors.primary}, ${vars.colors.secondary})`,
    backgroundSize: "200% 200%",
    animation: `${progressGradient} 3s ease infinite`,
    opacity: 0.9,
  },
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md}`,
      gap: vars.space.sm, // 요소들 간 간격 추가
    },
  },
})

export const logoContainer = style({
  display: "flex",
  alignItems: "center",
})

export const logoLink = style({
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.xs,
  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
  selectors: {
    "&:hover": {
      opacity: 0.9,
      transform: "translateY(-1px) scale(1.03)",
      filter: "brightness(1.05)",
    },
  },
})

export const logoText = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary,
  letterSpacing: "-0.03em",
  transition: "color 0.2s ease",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.lg,
    },
  },
})

export const navContainer = style({
  display: "flex",
  gap: vars.space.lg,
  alignItems: "center",
  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
})

export const navLink = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  textDecoration: "none",
  transition: "all 0.2s ease-in-out",
  position: "relative",
  padding: `${vars.space.xs} ${vars.space.sm}`,
  selectors: {
    "&:hover": {
      color: vars.colors.primary,
    },
    "&:hover::after": {
      width: "100%",
      opacity: 1,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-2px",
      left: "0",
      width: "0%",
      height: "2px",
      backgroundColor: vars.colors.primary,
      transition: "width 0.3s ease, opacity 0.3s ease",
      opacity: 0,
    },
  },
})

export const activeLink = style({
  color: vars.colors.primary,
  fontWeight: vars.fontWeights.bold,
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-2px",
      left: "0",
      width: "100%",
      height: "2px",
      backgroundColor: vars.colors.primary,
      opacity: 1,
    },
  },
})

export const ctaButtonContainer = style({
  marginLeft: vars.space.md,
  "@media": {
    "(max-width: 768px)": {
      marginLeft: 0,
      order: 2, // 햄버거 버튼보다 먼저 배치
      flexShrink: 0, // flex에서 축소되지 않도록
    },
  },
})

export const ctaButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  borderRadius: vars.radii.md,
  border: "none",
  cursor: "pointer",
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  transition: "opacity 0.2s ease-in-out, background-color 0.2s ease-in-out",
  whiteSpace: "nowrap",
  selectors: {
    "&:hover": {
      opacity: 0.9,
      backgroundColor: vars.colors.primaryDark,
    },
  },
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
      padding: `${vars.space.xs} ${vars.space.sm}`,
      minWidth: "auto",
      width: "auto",
    },
  },
})
