import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "../../common/theme.css"

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

  // 펄스 효과를 위한 가상 요소
  "::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "28px",
    border: "2px solid rgba(14, 77, 164, 0.6)",
    animation: `${pulseRing} 2s infinite`,
    pointerEvents: "none",
    zIndex: -1,
  },

  "@media": {
    "screen and (max-width: 768px)": {
      bottom: "20px", // 원래 위치로 복원
      left: "50%",
      transform: "translateX(-50%)",
      right: "auto",
      width: "calc(100vw - 40px)", // 뷰포트 기준으로 조정
      maxWidth: "300px", // 최대 너비 약간 줄임
      padding: "0 20px", // 패딩으로 여백 보장

      "::before": {
        borderRadius: "24px",
      },
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
  borderRadius: "28px",
  padding: "16px 24px",
  fontSize: "16px",
  fontWeight: "600",
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
  gap: "16px",
  whiteSpace: "nowrap",
  minWidth: "fit-content",
  position: "relative",
  overflow: "hidden",
  letterSpacing: "0.5px",
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
      padding: "14px 20px",
      fontSize: "15px",
      borderRadius: "24px",
      gap: "14px",
      fontWeight: "600",
      maxWidth: "260px",
      justifyContent: "center",
      minHeight: "52px",
    },
  },
})

// 전화 아이콘 스타일
export const phoneIcon = style({
  fontSize: "20px",
  color: "white",
  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
  flexShrink: 0,

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
  },
})

// 전화번호 텍스트 스타일
export const phoneText = style({
  fontSize: "16px",
  fontWeight: "600",
  color: "white",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  letterSpacing: "0.5px",
  lineHeight: "1.2",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "15px",
      fontWeight: "600",
    },
  },
})

// 전화 텍스트 컨테이너
export const phoneTextContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2px",
})

// 회사명 스타일 (어울림 스카이 강조)
export const companyName = style({
  fontSize: "15px",
  fontWeight: "700",
  color: "white",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  letterSpacing: "0.5px",
  lineHeight: "1.2",
  background: "linear-gradient(135deg, #00E5FF 0%, #1DE9B6 50%, #00E5FF 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      fontWeight: "700",
    },
  },
})

// 전화번호 스타일
export const phoneNumber = style({
  fontSize: "14px",
  fontWeight: "500",
  color: "rgba(255, 255, 255, 0.9)",
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
  letterSpacing: "0.3px",
  lineHeight: "1.2",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "13px",
      fontWeight: "500",
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
  paddingLeft: "4px",
  paddingRight: "14px",
  minWidth: "70px",

  "@media": {
    "screen and (max-width: 768px)": {
      paddingLeft: "2px",
      paddingRight: "12px",
      gap: "2px",
      minWidth: "60px",
    },
  },
})

// 전화 섹션 스타일
export const phoneSection = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  paddingLeft: "8px",

  "@media": {
    "screen and (max-width: 768px)": {
      gap: "10px",
      paddingLeft: "6px",
    },
  },
})

// 상담 텍스트 스타일
export const consultationText = style({
  fontSize: "14px",
  fontWeight: "500",
  color: "white",
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
  letterSpacing: "0.3px",
  lineHeight: "1.1",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "13px",
    },
  },
})
