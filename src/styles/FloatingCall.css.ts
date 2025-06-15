import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "./theme.css"

// 애니메이션 정의
const floatAnimation = keyframes({
  "0%, 100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-10px)" },
})

const heartbeatAnimation = keyframes({
  "0%": { transform: "scale(1)" },
  "14%": { transform: "scale(1.08)" },
  "28%": { transform: "scale(1)" },
  "42%": { transform: "scale(1.08)" },
  "70%": { transform: "scale(1)" },
})

const shimmerAnimation = keyframes({
  "0%": { backgroundPosition: "-200% 0" },
  "100%": { backgroundPosition: "200% 0" },
})

const pulseRing = keyframes({
  "0%": {
    transform: "scale(0.8)",
    opacity: "1",
  },
  "100%": {
    transform: "scale(2.4)",
    opacity: "0",
  },
})

// 기본 컨테이너 스타일
export const floatingContainer = style({
  position: "fixed",
  bottom: "20px",
  zIndex: vars.zIndices.docked, // 10 - 모바일 메뉴보다 낮게 설정
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      bottom: "20px", // 원래 위치로 복원
      left: "50%",
      transform: "translateX(-50%)",
      right: "auto",
      width: "calc(100vw - 40px)", // 뷰포트 기준으로 조정
      maxWidth: "300px", // 최대 너비 약간 줄임
      padding: "0 20px", // 패딩으로 여백 보장
    },
    "screen and (min-width: 769px)": {
      right: "30px",
      width: "auto",
    },
  },
})

// 버튼 래퍼 스타일 (펄스 효과용)
export const buttonWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

// 전화 버튼 스타일
export const phoneButton = style({
  background: `
    linear-gradient(135deg, 
      #0A3875 0%, 
      #0E4DA4 25%, 
      #1565C0 50%, 
      #0E4DA4 75%, 
      #0A3875 100%
    )
  `,
  backgroundSize: "300% 100%",
  color: "white",
  border: "none",
  borderRadius: "30px",
  padding: "20px 26px",
  fontSize: "18px",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: `
    0 10px 30px rgba(14, 77, 164, 0.4),
    0 6px 20px rgba(30, 136, 229, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1)
  `,
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  animation: `${floatAnimation} 4s ease-in-out infinite, ${heartbeatAnimation} 3s ease-in-out infinite`,
  display: "flex",
  alignItems: "center",
  gap: "18px",
  whiteSpace: "nowrap",
  minWidth: "fit-content",
  position: "relative",
  overflow: "hidden",
  letterSpacing: "0.8px",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  fontFamily:
    "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

  ":hover": {
    transform: "translateY(-4px) scale(1.05)",
    boxShadow: `
      0 20px 40px rgba(14, 77, 164, 0.5),
      0 12px 30px rgba(30, 136, 229, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.2)
    `,
    backgroundPosition: "100% 0",
  },

  ":active": {
    transform: "translateY(-2px) scale(1.02)",
  },

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "16px 20px",
      fontSize: "15px",
      borderRadius: "25px",
      gap: "12px",
      fontWeight: "700",
      width: "100%", // 전체 너비 사용
      maxWidth: "280px", // 최대 너비 제한
      justifyContent: "center", // 중앙 정렬
      minHeight: "56px", // 터치하기 좋은 높이
    },
  },
})

// 전화 아이콘 스타일
export const phoneIcon = style({
  fontSize: "26px",
  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
  transform: "rotate(-10deg)",
  transition: "transform 0.3s ease",
  animation: `${shimmerAnimation} 2s ease-in-out infinite`,

  ":hover": {
    transform: "rotate(-5deg) scale(1.1)",
  },

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "22px",
    },
  },
})

// 텍스트 스타일
export const phoneText = style({
  fontFamily:
    "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  letterSpacing: "1.2px",
  fontWeight: "800",
  fontSize: "19px",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
  background: "linear-gradient(45deg, #ffffff, #f0f8ff, #ffffff)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "white",
  position: "relative",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "17px",
      letterSpacing: "1px",
    },
  },
})

// 펄스 링 효과 (버튼 주변 애니메이션)
export const pulseRingEffect = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  borderRadius: "30px",
  border: "2px solid rgba(14, 77, 164, 0.6)",
  animation: `${pulseRing} 2s infinite`,
  pointerEvents: "none",

  "@media": {
    "screen and (max-width: 768px)": {
      borderRadius: "25px",
    },
  },
})

// 상담문의 섹션 스타일
export const consultationSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3px",
  borderRight: "1px solid rgba(255, 255, 255, 0.3)",
  paddingLeft: "12px",
  paddingRight: "32px",
  minWidth: "75px",

  "@media": {
    "screen and (max-width: 768px)": {
      paddingLeft: "10px",
      paddingRight: "24px",
      gap: "2px",
      minWidth: "65px",
    },
  },
})

// 전화 섹션 스타일
export const phoneSection = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",

  "@media": {
    "screen and (max-width: 768px)": {
      gap: "8px",
    },
  },
})

// 상담문의 텍스트 스타일
export const consultationText = style({
  fontFamily:
    "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "12px",
  fontWeight: "800",
  color: "rgba(255, 255, 255, 0.9)",
  textAlign: "center",
  letterSpacing: "1.3px",
  lineHeight: "1.3",
  textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
  whiteSpace: "nowrap",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "11px",
      letterSpacing: "1.1px",
      lineHeight: "1.2",
    },
  },
})
