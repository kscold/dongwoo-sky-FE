import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
})

const bounce = keyframes({
  "0%, 20%, 50%, 80%, 100%": {
    transform: "translateY(0)",
  },
  "40%": {
    transform: "translateY(-10px)",
  },
  "60%": {
    transform: "translateY(-5px)",
  },
})

const scroll = keyframes({
  "0%": {
    opacity: 1,
    transform: "translateY(0)",
  },
  "100%": {
    opacity: 0,
    transform: "translateY(6px)",
  },
})

const pulse = keyframes({
  "0%, 80%, 100%": {
    transform: "scale(0)",
  },
  "40%": {
    transform: "scale(1.0)",
  },
})

export const heroSection = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  minHeight: "600px",
  overflow: "hidden",
  color: vars.colors.white,
  textAlign: "center",

  "@media": {
    "(max-width: 768px)": {
      minHeight: "500px",
    },
    "(max-width: 480px)": {
      minHeight: "450px",
    },
  },
})

export const heroBackgroundImage = style({
  position: "absolute",
  top: "-10%",
  left: 0,
  right: 0,
  bottom: "-10%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  zIndex: -2,
  filter: "brightness(0.9) contrast(1.1)",
  transition: "all 0.3s ease-out",
  transform: "scale(1.1)",
  willChange: "transform",

  "@media": {
    "(max-width: 768px)": {
      backgroundAttachment: "scroll",
      top: 0,
      bottom: 0,
      transform: "scale(1.05)",
    },
  },
})

export const heroOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)",
  zIndex: -1,
})

export const heroContent = style({
  position: "relative",
  zIndex: 1,
  padding: vars.space.lg,
  maxWidth: "900px",
  margin: "0 auto",
  animation: `${fadeIn} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh", // 최소 높이 확보
  paddingTop: "4vh", // 상단 여백
  paddingBottom: "6vh", // 하단 여백으로 자연스러운 간격 확보
  "@media": {
    "(max-width: 768px)": {
      padding: vars.space.md,
      maxWidth: "100%",
      paddingTop: "3vh",
      paddingBottom: "8vh", // 모바일에서 더 큰 하단 여백
    },
    "(max-width: 480px)": {
      padding: vars.space.sm,
      paddingTop: "2vh",
      paddingBottom: "10vh", // 더 큰 하단 여백으로 플로팅 버튼과 여유 간격
    },
  },
})

export const heroTextContainer = style({
  textAlign: "center",
  marginBottom: vars.space.xl,
})

export const heroTitle = style({
  fontSize: "3.5rem",
  fontWeight: vars.fontWeights.bold,
  marginBottom: vars.space.lg,
  lineHeight: "1.1",
  color: vars.colors.white,
  textShadow: "2px 2px 20px rgba(0,0,0,0.7)",
  letterSpacing: "-0.03em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.sm,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2.5rem",
      lineHeight: "1.2",
      marginBottom: vars.space.md,
      letterSpacing: "-0.02em",
      gap: vars.space.xs,
    },
    "(max-width: 480px)": {
      fontSize: "2rem",
      lineHeight: "1.3",
      gap: "4px",
    },
  },
})

export const heroPreTitle = style({
  fontSize: "0.7em",
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

export const heroMainTitle = style({
  fontSize: "1.8em",
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.secondary,
  textShadow: "3px 3px 30px rgba(0,0,0,0.8)",
  letterSpacing: "-0.02em",
  display: "block",
  whiteSpace: "nowrap", // 한 줄로 강제
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  "@media": {
    "(max-width: 1200px)": {
      fontSize: "1.6em",
    },
    "(max-width: 1024px)": {
      fontSize: "1.4em",
    },
    "(max-width: 768px)": {
      fontSize: "1.2em",
    },
    "(max-width: 640px)": {
      fontSize: "1.0em",
    },
    "(max-width: 480px)": {
      fontSize: "0.9em",
    },
    "(max-width: 360px)": {
      fontSize: "0.8em",
    },
  },
})

export const heroPostTitle = style({
  fontSize: "0.8em",
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
  fontSize: vars.fontSizes.xxl,
  marginBottom: vars.space.xl,
  color: vars.colors.accent,
  textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
  lineHeight: "1.4",
  maxWidth: "700px",
  margin: `0 auto ${vars.space.xl}`,
  fontWeight: vars.fontWeights.medium,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xl,
      marginBottom: vars.space.lg,
      lineHeight: "1.5",
      padding: `0 ${vars.space.md}`,
      maxWidth: "600px",
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.lg,
      lineHeight: "1.6",
      padding: `0 ${vars.space.sm}`,
      maxWidth: "100%",
      marginBottom: vars.space.md,
    },
  },
})

export const heroDescription = style({
  margin: "1.5rem 0",
  maxWidth: "650px",
  marginLeft: "auto",
  marginRight: "auto",

  "@media": {
    "(max-width: 768px)": {
      margin: "1rem 0",
      maxWidth: "100%",
      padding: `0 ${vars.space.md}`,
    },
  },
})

export const heroDescriptionText = style({
  color: "rgba(255, 255, 255, 0.92)",
  fontSize: "1.125rem",
  lineHeight: "1.7",
  textAlign: "center",
  fontWeight: vars.fontWeights.medium,
  textShadow: "1px 1px 3px rgba(0,0,0,0.4)",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "1rem",
      lineHeight: "1.6",
    },
    "(max-width: 480px)": {
      fontSize: "0.95rem",
    },
  },
})

export const heroButtonContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
  alignItems: "center",
  marginBottom: "2rem", // 인디케이터와의 간격을 더 넉넉하게
  "@media": {
    "(min-width: 640px)": {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: "2.5rem", // 데스크톱에서 더 큰 간격
    },
    "(max-width: 768px)": {
      marginBottom: "1.8rem", // 태블릿에서 적당한 간격
    },
    "(max-width: 480px)": {
      gap: vars.space.sm,
      width: "100%",
      marginBottom: "1.5rem", // 모바일에서 적당한 간격
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  textDecoration: "none",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
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
        backgroundColor: vars.colors.primary,
        color: vars.colors.white,
      },
    },
  },
])

export const secondaryButton = style([
  baseButton,
  {
    backgroundColor: "transparent",
    color: vars.colors.white,
    borderColor: vars.colors.secondary,
    selectors: {
      "&:hover": {
        backgroundColor: vars.colors.secondary,
        color: vars.colors.white,
        borderColor: vars.colors.secondary,
      },
    },
  },
])

export const loadingSpinner = style({
  display: "flex",
  justifyContent: "center",
  gap: "4px",
})

export const loadingSpinnerDot = style({
  width: "8px",
  height: "8px",
  backgroundColor: vars.colors.secondary,
  borderRadius: "50%",
  animation: `${pulse} 1.4s ease-in-out infinite both`,

  selectors: {
    "&:nth-child(1)": {
      animationDelay: "-0.32s",
    },
    "&:nth-child(2)": {
      animationDelay: "-0.16s",
    },
    "&:nth-child(3)": {
      animationDelay: "0s",
    },
  },
})

export const scrollIndicator = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  color: "rgba(255, 255, 255, 1)",
  fontSize: "0.95rem",
  fontWeight: "600",
  animation: `${bounce} 2s infinite`,
  cursor: "pointer",
  transition: "all 0.3s ease",
  zIndex: 1,
  textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
  textAlign: "center",
  width: "auto",
  maxWidth: "200px",
  margin: "0 auto",
  marginTop: "1rem", // 버튼과의 간격을 적절히 조정
  paddingBottom: vars.space.lg, // 하단 여백

  ":hover": {
    color: "rgba(255, 255, 255, 1)",
    transform: "translateY(-4px) scale(1.05)",
    filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))",
  },

  "@media": {
    "(max-width: 1024px)": {
      fontSize: "0.9rem",
      marginTop: "1.2rem", // 태블릿에서 약간 더 큰 간격
      paddingBottom: vars.space.xl,
    },
    "(max-width: 768px)": {
      fontSize: "0.85rem",
      gap: "0.6rem",
      marginTop: "1rem",
      paddingBottom: "2.5rem", // 모바일에서 상담 문의 버튼과의 안전한 간격
    },
    "(max-width: 480px)": {
      fontSize: "0.8rem",
      gap: "0.5rem",
      marginTop: "0.8rem",
      paddingBottom: "3rem", // 좀 더 큰 간격으로 버튼과 절대 겹치지 않게
    },
    "(max-width: 360px)": {
      fontSize: "0.75rem",
      marginTop: "0.6rem",
      paddingBottom: "3.5rem", // 가장 작은 화면에서 최대 간격
    },
  },
})

export const scrollMouse = style({
  width: "26px",
  height: "42px",
  border: "3px solid rgba(255, 255, 255, 1)", // 완전 불투명
  borderRadius: "13px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "8px",
  transition: "all 0.3s ease",
  backgroundColor: "rgba(255, 255, 255, 0.1)", // 살짝 투명한 배경
  boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)", // 글로우 효과
  margin: "0 auto", // 가운데 정렬
  flexShrink: 0, // 크기 축소 방지

  "@media": {
    "(max-width: 768px)": {
      width: "22px",
      height: "36px",
      borderRadius: "11px",
      paddingTop: "6px",
      border: "2px solid rgba(255, 255, 255, 1)",
    },
    "(max-width: 480px)": {
      width: "20px",
      height: "32px",
      borderRadius: "10px",
      paddingTop: "5px",
    },
  },
})

export const scrollWheel = style({
  width: "4px",
  height: "8px",
  backgroundColor: "rgba(255, 255, 255, 1)", // 완전 불투명
  borderRadius: "2px",
  animation: `${scroll} 2s infinite`,
  boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)", // 글로우 효과 강화

  "@media": {
    "(max-width: 768px)": {
      width: "3px",
      height: "6px",
    },
    "(max-width: 480px)": {
      width: "2px",
      height: "5px",
    },
  },
})
