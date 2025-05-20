import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

// 애니메이션 정의
const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
})

// 애플 스타일의 부드러운 스크롤 표시기
export const heroSection = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  overflow: "hidden",
  color: vars.colors.white,
  textAlign: "center",
})

export const heroBackgroundImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
  filter: "brightness(0.9) contrast(1.1)", // 배경 이미지에 약간의 필터 효과
  transition: "transform 8s cubic-bezier(0.16, 1, 0.3, 1)", // 슬로우 줌 효과를 위한 트랜지션
  transform: "scale(1.05)", // 배경 이미지 약간 확대
  ":hover": {
    transform: "scale(1)", // 호버 시 원래 크기로
  },
})

export const heroOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)", // 더 세련된 그라디언트 오버레이
  zIndex: -1,
})

export const heroContent = style({
  position: "relative",
  zIndex: 1,
  padding: vars.space.lg,
  maxWidth: "900px", // 콘텐츠 너비 약간 증가
  margin: "0 auto",
  animation: `${fadeIn} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards`, // 콘텐츠 페이드인 효과
})

export const heroTitle = style({
  fontSize: vars.fontSizes.xxxxxxl, // 더 큰 폰트 사이즈
  fontWeight: vars.fontWeights.bold,
  marginBottom: vars.space.lg,
  lineHeight: "1.1", // 더 타이트한 라인 하이트
  color: vars.colors.white,
  textShadow: "2px 2px 20px rgba(0,0,0,0.7)", // 더 강화된 텍스트 쉐도우
  letterSpacing: "-0.03em", // 애플 스타일 타이포그래피
  "@media": {
    "(max-width: 768px)": {
      // vars.breakpoints.md 대신 실제 값 사용 및 올바른 구문 적용
      fontSize: vars.fontSizes.xxxl,
    },
  },
})

export const heroTitleHighlight = style({
  color: vars.colors.secondary, // 새로운 강조색 적용
})

export const heroSubtitle = style({
  fontSize: vars.fontSizes.xl,
  marginBottom: vars.space.xl,
  color: vars.colors.accent, // 밝은 회색 계열 유지
  textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
  "@media": {
    "(max-width: 768px)": {
      // vars.breakpoints.md 대신 실제 값 사용 및 올바른 구문 적용
      fontSize: vars.fontSizes.lg,
    },
  },
})

export const heroButtonContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
  alignItems: "center",
  "@media": {
    "(min-width: 640px)": {
      // vars.breakpoints.sm 대신 실제 값 사용 및 올바른 구문 적용
      flexDirection: "row",
      justifyContent: "center",
    },
  },
})

const baseButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  borderRadius: vars.radii.md,
  transition: "all 0.3s ease-in-out",
  border: "2px solid transparent",
  selectors: {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
})

export const primaryButton = style([
  baseButton,
  {
    backgroundColor: vars.colors.secondary,
    color: vars.colors.white,
    selectors: {
      "&:hover": {
        backgroundColor: vars.colors.primary, // 호버 시 주 색상으로 변경 (예시)
        color: vars.colors.white,
      },
    },
  },
])

export const secondaryButton = style([
  baseButton,
  {
    backgroundColor: "transparent",
    color: vars.colors.white, // 초기 글자색 흰색으로 변경
    borderColor: vars.colors.secondary,
    selectors: {
      "&:hover": {
        backgroundColor: vars.colors.secondary,
        color: vars.colors.white, // 호버 시 글자색 흰색 유지
        borderColor: vars.colors.secondary,
      },
    },
  },
])
