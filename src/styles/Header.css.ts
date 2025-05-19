import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

export const headerContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space.md} ${vars.space.lg}`,
  backgroundColor: vars.colors.white,
  borderBottom: `1px solid ${vars.colors.accent}`,
  position: "sticky",
  top: 0,
  zIndex: vars.zIndices.sticky,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md}`,
    },
  },
})

export const logoContainer = style({
  display: "flex",
  alignItems: "center",
})

export const logoLink = style({
  textDecoration: "none",
  display: "inline-block",
})

export const logoText = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary,
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
      display: "none", // 모바일에서는 숨김 (햄버거 메뉴로 대체 예정)
    },
  },
})

export const navLink = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      color: vars.colors.primary,
    },
  },
})

export const activeLink = style({
  color: vars.colors.primary,
  fontWeight: vars.fontWeights.bold,
  textDecoration: "underline",
  textUnderlineOffset: "4px",
})

export const ctaButtonContainer = style({
  marginLeft: vars.space.md,
  "@media": {
    "(max-width: 768px)": {
      marginLeft: vars.space.xs,
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

// 모바일 메뉴 버튼 스타일
export const mobileMenuButton = style({
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  zIndex: 2000, // 상당히 높은 값으로 설정
  padding: vars.space.xs,
  margin: `0 ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  color: vars.colors.primary,
  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.accent,
    },
    "&:active": {
      backgroundColor: vars.colors.primaryLight,
    },
  },
})

export const mobileNavOverlay = style({
  display: "none",
  "@media": {
    "(max-width: 768px)": {
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.7)", // 배경 더 어둡게 조정
      opacity: 0,
      pointerEvents: "none",
      backdropFilter: "blur(5px)", // 블러 효과 강화
      WebkitBackdropFilter: "blur(5px)", // Safari 지원
      transition: "all 0.3s ease-in-out",
      zIndex: 1000, // z-index 조정
    },
  },
})

export const mobileNavOverlayOpen = style({
  opacity: 1,
  pointerEvents: "auto",
})

export const mobileNav = style({
  display: "none",
  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      top: 0,
      right: 0,
      width: "80vw", // 적절한 너비로 조정
      maxWidth: "320px", // 최대 너비 조정
      height: "100vh",
      background: vars.colors.white,
      boxShadow: "-5px 0 25px rgba(0,0,0,0.2)", // 그림자 강화
      transform: "translateX(100%)",
      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)", // 부드러운 애니메이션
      zIndex: 2000, // z-index 조정
      padding: "0", // 패딩 제거하고 내부 컨텐츠에서 조절
      overflowY: "auto", // 컨텐츠가 많을 경우 스크롤 가능하도록
    },
  },
})

export const mobileNavOpen = style({
  transform: "translateX(0)",
})

export const mobileNavClose = style({
  position: "absolute",
  top: vars.space.md,
  right: vars.space.md,
  background: "none",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: vars.colors.text,
  backgroundColor: "rgba(255,255,255,0.9)",
  boxShadow: vars.shadows.sm,
  zIndex: 2200,
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      color: vars.colors.primary,
      backgroundColor: vars.colors.white,
      boxShadow: vars.shadows.md,
      transform: "scale(1.05)",
    },
  },
})

export const mobileNavLinks = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: `${vars.space.xxl} ${vars.space.lg} ${vars.space.xl}`,
  gap: vars.space.lg, // 간격 더 넓게
  marginTop: vars.space.xl, // 상단 여백 추가
})

export const mobileNavLink = style({
  fontSize: vars.fontSizes.xl, // 더 크게
  color: vars.colors.textStrong, // 더 진한 텍스트 색상
  textDecoration: "none",
  fontWeight: vars.fontWeights.semibold, // 더 두껑게
  padding: `${vars.space.md} ${vars.space.md}`, // 패딩 넓게
  margin: `${vars.space.xs} 0`,
  borderRadius: vars.radii.md, // 둥근 모서리
  display: "flex",
  alignItems: "center",
  position: "relative",
  transition: "all 0.2s ease-in-out",
  backgroundColor: vars.colors.white,
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)", // 미세한 그림자 추가
  borderLeft: "4px solid transparent", // 왼쪽 테두리 두껑게
  selectors: {
    "&:hover": {
      color: vars.colors.primary,
      backgroundColor: vars.colors.primaryLight,
      borderLeftColor: vars.colors.primary, // 호버 시 테두리 색상 변경
      transform: "translateX(5px)", // 약간 오른쪽으로 이동 효과
      boxShadow: "0 3px 6px rgba(0,0,0,0.1)", // 그림자 강화
    },
  },
})

// active 클래스가 잘 작동하게 처리
// 별도의 activeLink 클래스를 생성하여 모바일 상태에서도 활성화 스타일을 적용할 수 있도록 함
export const mobileActiveLink = style({
  color: vars.colors.primary,
  borderLeftColor: vars.colors.primary,
  backgroundColor: vars.colors.primaryLight,
  fontWeight: vars.fontWeights.bold,
  transform: "translateX(5px)",
  boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
})
