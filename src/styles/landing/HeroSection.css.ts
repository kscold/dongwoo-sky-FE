import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

export const heroPreTitle = style({
  fontSize: "0.7em", // 상대적으로 조금 더 큰 크기
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.accent,
  opacity: 0.9,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "0.65em",
    },
    "(max-width: 480px)": {
      fontSize: "0.6em",
    },
  },
})
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
  "@media": {
    "(max-width: 768px)": {
      padding: vars.space.md,
      maxWidth: "100%",
    },
    "(max-width: 480px)": {
      padding: vars.space.sm,
    },
  },
})

export const heroTitle = style({
  fontSize: "3.5rem", // 더 적절한 크기로 조정 (56px)
  fontWeight: vars.fontWeights.bold,
  marginBottom: vars.space.lg,
  lineHeight: "1.1", // 더 타이트한 라인 하이트
  color: vars.colors.white,
  textShadow: "2px 2px 20px rgba(0,0,0,0.7)", // 더 강화된 텍스트 쉐도우
  letterSpacing: "-0.03em", // 애플 스타일 타이포그래피
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.sm,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2.5rem", // 태블릿에서 적절한 크기 (40px)
      lineHeight: "1.2",
      marginBottom: vars.space.md,
      letterSpacing: "-0.02em",
      gap: vars.space.xs,
    },
    "(max-width: 480px)": {
      fontSize: "2rem", // 모바일에서 읽기 좋은 크기 (32px)
      lineHeight: "1.3",
      gap: "4px",
    },
  },
})

export const heroMainTitle = style({
  fontSize: "1.8em", // 메인 브랜드명을 훨씬 더 크게
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.secondary, // 전체 브랜드명이 민트색 유지
  textShadow: "3px 3px 30px rgba(0,0,0,0.8)",
  letterSpacing: "-0.02em",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.2em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.5em", // 모바일에서도 충분히 큰 크기 유지
    },
    "(max-width: 480px)": {
      fontSize: "1.3em", // 작은 모바일에서도 읽기 좋은 크기
    },
  },
})

// heroSkyText 스타일 제거 (더 이상 사용하지 않음)

export const heroPostTitle = style({
  fontSize: "0.8em", // 더 큰 크기로 증가
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.white,
  opacity: 0.95,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "0.75em",
    },
    "(max-width: 480px)": {
      fontSize: "0.7em",
    },
  },
})

export const heroSubtitle = style({
  fontSize: vars.fontSizes.xxl, // 더 큰 크기로 증가 (xl → xxl)
  marginBottom: vars.space.xl,
  color: vars.colors.accent, // 밝은 회색 계열 유지
  textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
  lineHeight: "1.4",
  maxWidth: "700px", // 최대 너비 증가
  margin: `0 auto ${vars.space.xl}`,
  fontWeight: vars.fontWeights.medium, // 폰트 굵기 추가
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xl, // 모바일에서도 충분한 크기
      marginBottom: vars.space.lg,
      lineHeight: "1.5",
      padding: `0 ${vars.space.md}`,
      maxWidth: "600px",
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.lg, // 작은 모바일에서도 읽기 좋은 크기
      lineHeight: "1.6",
      padding: `0 ${vars.space.sm}`,
      maxWidth: "100%",
      marginBottom: vars.space.md,
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
      flexDirection: "row",
      justifyContent: "center",
    },
    "(max-width: 480px)": {
      gap: vars.space.sm,
      width: "100%",
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
  minWidth: "140px",
  textAlign: "center",
  selectors: {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  "@media": {
    "(max-width: 480px)": {
      padding: `${vars.space.sm} ${vars.space.lg}`,
      fontSize: vars.fontSizes.md,
      minWidth: "120px",
      width: "100%",
      maxWidth: "280px",
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
