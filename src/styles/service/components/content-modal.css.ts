import { style, keyframes } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

// 애니메이션 정의
const fadeInScale = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0.8) translateY(-20px)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1) translateY(0)",
  },
})

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(8px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  padding: vars.space.md,
  "@media": {
    "screen and (max-width: 768px)": {
      padding: vars.space.md,
      alignItems: "center", // 모바일에서도 중앙 정렬
    },
    "screen and (max-width: 480px)": {
      padding: vars.space.sm,
      alignItems: "center",
    },
  },
})

export const modal = style({
  background: vars.colors.white,
  padding: vars.space.lg,
  borderRadius: vars.radii.lg,
  width: "90%",
  maxWidth: "600px", // 이미지를 위해 조금 더 크게
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  maxHeight: "85vh",
  overflowY: "auto",
  position: "relative",
  animation: `${fadeInScale} 0.3s ease-out`,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "90%",
      maxWidth: "450px",
      padding: vars.space.lg,
      borderRadius: vars.radii.lg,
      maxHeight: "80vh",
      margin: "0 auto",
    },
    "screen and (max-width: 480px)": {
      width: "95%",
      maxWidth: "400px",
      padding: vars.space.md,
      borderRadius: vars.radii.md,
      maxHeight: "85vh",
      margin: "0 auto",
    },
    "screen and (max-width: 375px)": {
      width: "98%",
      maxWidth: "350px",
      padding: vars.space.sm,
      borderRadius: vars.radii.sm,
      maxHeight: "90vh",
      margin: "0 auto",
    },
  },
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.md,
  paddingBottom: vars.space.sm,
  borderBottom: `1px solid ${vars.colors.gray[200]}`,
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: vars.space.sm,
      paddingBottom: vars.space.xs,
    },
  },
})

export const badge = style({
  background: vars.colors.primary,
  color: vars.colors.white,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  fontWeight: "bold",
  fontSize: vars.fontSizes.sm,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
      padding: `${vars.space.xs} ${vars.space.xs}`,
    },
  },
})

export const closeBtn = style({
  background: "transparent",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  color: vars.colors.textLight,
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.radii.md,
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.gray[100],
    color: vars.colors.text,
    transform: "scale(1.1)",
  },
  ":active": {
    transform: "scale(0.95)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
      width: "44px",
      height: "44px",
      backgroundColor: vars.colors.gray[50],
      color: vars.colors.text,
    },
    "screen and (max-width: 480px)": {
      fontSize: "32px",
      width: "48px",
      height: "48px",
      backgroundColor: vars.colors.gray[100],
      color: vars.colors.textStrong,
    },
  },
})

export const content = style({
  marginBottom: vars.space.lg,
  paddingTop: vars.space.sm,
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: vars.space.md,
      paddingTop: vars.space.xs,
    },
  },
})

export const title = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: "bold",
  marginBottom: vars.space.md,
  lineHeight: "1.4",
  color: vars.colors.textStrong,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.lg,
      marginBottom: vars.space.sm,
      lineHeight: "1.3",
    },
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.md,
    },
  },
})

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space.sm,
  paddingTop: vars.space.md,
  borderTop: `1px solid ${vars.colors.gray[200]}`,
  marginTop: vars.space.md,
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: vars.space.xs,
      paddingTop: vars.space.sm,
      marginTop: vars.space.sm,
      borderTop: "none",
    },
  },
})

const buttonBase = style({
  border: "none",
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: vars.fontSizes.md,
  transition: "all 0.2s ease",
  minHeight: "44px",
  ":active": {
    transform: "scale(0.98)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `${vars.space.xs} ${vars.space.sm}`,
      fontSize: vars.fontSizes.xs,
      minHeight: "32px",
      width: "auto",
      borderRadius: vars.radii.sm,
      fontWeight: "500",
    },
    "screen and (max-width: 480px)": {
      padding: `${vars.space.xs} ${vars.space.sm}`,
      fontSize: "11px",
      minHeight: "28px",
      fontWeight: "500",
    },
  },
})

export const todayBtn = style([
  buttonBase,
  {
    background: vars.colors.gray[100],
    color: vars.colors.text,
    border: `1px solid ${vars.colors.gray[300]}`,
    ":hover": {
      backgroundColor: vars.colors.gray[200],
      transform: "translateY(-1px)",
    },
    "@media": {
      "screen and (max-width: 768px)": {
        backgroundColor: vars.colors.gray[100],
        border: `1px solid ${vars.colors.gray[300]}`,
        color: vars.colors.textLight,
        ":hover": {
          backgroundColor: vars.colors.gray[200],
        },
      },
    },
  },
])

export const confirmBtn = style([
  buttonBase,
  {
    background: vars.colors.primary,
    color: vars.colors.white,
    ":hover": {
      backgroundColor: vars.colors.primaryDark,
      transform: "translateY(-1px)",
    },
    "@media": {
      "screen and (max-width: 768px)": {
        backgroundColor: vars.colors.primary,
        ":hover": {
          backgroundColor: vars.colors.primaryDark,
        },
      },
    },
  },
])

// 모달 콘텐츠 텍스트 스타일
export const contentText = style({
  fontSize: vars.fontSizes.md,
  lineHeight: "1.6",
  color: vars.colors.text,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.md,
      lineHeight: "1.5",
    },
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.sm,
      lineHeight: "1.4",
    },
  },
})

// 첨부파일 섹션 스타일 - 깔끔하고 심플하게
export const attachmentsSection = style({
  marginTop: vars.space.lg,
  padding: vars.space.md,
  backgroundColor: "white",
  borderRadius: vars.radii.md,
  
  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: vars.space.md,
      padding: vars.space.sm,
    },
  },
})

// 이미지 첨부파일 스타일 - 깔끔하고 심플하게
export const imageAttachments = style({
  marginBottom: vars.space.lg,
})

export const imageGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: vars.space.md,
  "@media": {
    "screen and (min-width: 480px)": {
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    },
  },
})

export const imageAttachment = style({
  borderRadius: vars.radii.md,
  overflow: "hidden",
  backgroundColor: "white",
  border: `1px solid ${vars.colors.border}`,
})

export const attachmentImage = style({
  width: "100%",
  height: "auto",
  maxHeight: "200px",
  objectFit: "cover",
  display: "block",
  
  "@media": {
    "screen and (max-width: 768px)": {
      maxHeight: "150px",
    },
  },
})

export const imageErrorFallback = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "150px",
  backgroundColor: vars.colors.backgroundLight,
  color: vars.colors.textLight,
  fontSize: vars.fontSizes.sm,
})

// 문서 첨부파일 스타일 - 깔끔하고 심플하게
export const documentAttachments = style({
  marginTop: vars.space.lg,
})

export const documentAttachmentsTitle = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.sm,
  
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
    },
  },
})

export const documentsList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

export const documentLink = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: vars.space.sm,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.sm,
  textDecoration: "none",
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  transition: "background-color 0.2s ease",
  
  ":hover": {
    backgroundColor: vars.colors.background,
  },
  
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `${vars.space.xs} ${vars.space.sm}`,
    },
  },
})

export const fileIcon = style({
  fontSize: "16px",
  minWidth: "16px",
  
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      minWidth: "14px",
    },
  },
})

export const fileName = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
    },
  },
})

export const downloadIcon = style({
  fontSize: "14px",
  opacity: 0.7,
  
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "12px",
    },
  },
})

// 모달 이미지 스타일 추가
export const imageContainer = style({
  marginBottom: vars.space.lg,
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: vars.space.md,
    },
  },
})

export const imageWrapper = style({
  marginBottom: vars.space.md,
  borderRadius: vars.radii.md,
  overflow: "hidden",
  backgroundColor: vars.colors.backgroundLight,
  border: `1px solid ${vars.colors.border}`,
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: vars.space.sm,
    },
  },
})

export const modalImage = style({
  width: "100%",
  height: "auto",
  maxHeight: "400px",
  objectFit: "contain",
  display: "block",
  backgroundColor: "white",
  "@media": {
    "screen and (max-width: 768px)": {
      maxHeight: "300px",
    },
    "screen and (max-width: 480px)": {
      maxHeight: "250px",
    },
  },
})

export const imageCaption = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  padding: vars.space.sm,
  backgroundColor: vars.colors.backgroundLight,
  textAlign: "center",
  fontWeight: vars.fontWeights.medium,
  borderTop: `1px solid ${vars.colors.border}`,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
      padding: vars.space.xs,
    },
  },
})

export const attachmentContainer = style({
  marginTop: vars.space.lg,
  padding: vars.space.md,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.border}`,
  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: vars.space.md,
      padding: vars.space.sm,
    },
  },
})

export const attachmentTitle = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.sm,
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.sm,
      marginBottom: vars.space.xs,
    },
  },
})

export const attachmentList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  "@media": {
    "screen and (max-width: 768px)": {
      gap: vars.space.xs,
    },
  },
})

export const attachmentItem = style({
  margin: 0,
})

export const attachmentLink = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: vars.space.sm,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.sm,
  textDecoration: "none",
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  transition: "all 0.2s ease",
  
  ":hover": {
    backgroundColor: vars.colors.background,
    transform: "translateY(-1px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  
  "@media": {
    "screen and (max-width: 768px)": {
      padding: vars.space.xs,
      gap: vars.space.xs,
    },
  },
})

export const attachmentIcon = style({
  fontSize: "16px",
  minWidth: "16px",
  color: vars.colors.primary,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      minWidth: "14px",
    },
  },
})

export const attachmentName = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
    },
  },
})
