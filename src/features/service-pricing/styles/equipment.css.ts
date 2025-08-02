import { style } from "@vanilla-extract/css"
import { vars } from "../../../styles/common/theme.css"

export const equipmentSelector = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
  marginBottom: vars.space.lg,
  padding: `0 ${vars.space.md}`,
  maxWidth: "100%",
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: vars.space.sm,
      padding: `0 ${vars.space.sm}`,
    },
  },
})

export const scrollButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  border: "2px solid #e2e8f0",
  background: "white",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)",
  cursor: "pointer",
  fontSize: "1.25rem",
  color: vars.colors.primary,
  transition: "all 0.3s ease",
  zIndex: 10,
  flexShrink: 0,
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)",
    borderColor: vars.colors.primary,
    backgroundColor: "#fafafa",
  },
  ":active": {
    transform: "translateY(0)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      width: "40px",
      height: "40px",
      fontSize: "1rem",
    },
  },
})

export const equipmentScrollContainer = style({
  flex: 1,
  overflow: "hidden",
  borderRadius: "16px",
  position: "relative",
  maxWidth: "100%",
})

export const equipmentList = style({
  display: "flex",
  gap: vars.space.lg,
  overflowX: "auto",
  padding: `${vars.space.md} 0`,
  scrollBehavior: "smooth",
  width: "100%",
  "::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: vars.space.md,
      padding: `${vars.space.sm} 0`,
    },
  },
})

export const equipmentCard = style({
  flexShrink: 0,
  width: "240px",
  background: "white",
  borderRadius: "20px",
  padding: vars.space.lg,
  cursor: "pointer",
  transition: "border-color 0.2s ease",
  border: "2px solid #f1f5f9",
  position: "relative",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "200px",
      padding: vars.space.md,
      borderRadius: "16px",
    },
    "screen and (max-width: 480px)": {
      width: "180px",
    },
  },
})

export const equipmentCardActive = style({
  borderColor: vars.colors.primary,
  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(59, 130, 246, 0.05) 100%)`,
})

export const equipmentImageWrapper = style({
  width: "100%",
  height: "140px",
  borderRadius: "16px",
  overflow: "hidden",
  marginBottom: vars.space.md,
  backgroundColor: "#f8fafc",
  border: "1px solid #f1f5f9",
  position: "relative",
  "@media": {
    "screen and (max-width: 768px)": {
      height: "120px",
      marginBottom: vars.space.sm,
      borderRadius: "12px",
    },
  },
})

export const equipmentImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
})

export const equipmentImagePlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.5rem",
  color: vars.colors.textLight,
})

export const equipmentInfo = style({
  textAlign: "center",
})

export const equipmentName = style({
  fontSize: "1.125rem",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.xs,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
})

export const equipmentPrice = style({
  fontSize: "1rem",
  fontWeight: "600",
  color: vars.colors.primary,
  letterSpacing: "-0.01em",
})

export const scrollIndicator = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.space.sm,
  marginTop: vars.space.lg,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.white,
  borderRadius: "24px",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  width: "fit-content",
  margin: `${vars.space.lg} auto 0`,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
})

export const indicatorDot = style({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: "#cbd5e1",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#94a3b8",
    transform: "scale(1.2)",
  },
})

export const indicatorDotActive = style({
  backgroundColor: vars.colors.primary,
  transform: "scale(1.4)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
})

export const equipmentDetailCard = style({
  backgroundColor: vars.colors.white,
  borderRadius: "24px",
  padding: vars.space.xxl,
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  height: "100%",
  minHeight: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 0.3s ease",
  overflow: "hidden",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow:
      "0 25px 80px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  },
  "@media": {
    "(max-width: 1024px)": {
      minHeight: "auto",
      height: "auto",
    },
    "(max-width: 768px)": {
      padding: vars.space.xl,
      borderRadius: "20px",
    },
  },
})

export const detailTitle = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.xl,
  textAlign: "center",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  flexShrink: 0,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const detailContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xl,
  flex: 1,
  overflow: "hidden",
})

export const detailImageWrapper = style({
  width: "100%",
  height: "240px",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: vars.colors.backgroundLight,
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flexShrink: 0,
  position: "relative",
  "@media": {
    "(max-width: 768px)": {
      height: "200px",
      borderRadius: "12px",
    },
  },
})

export const detailImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const detailImagePlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "4rem",
  color: vars.colors.textLight,
})

export const detailInfo = style({
  textAlign: "center",
  flex: 1,
  overflow: "hidden",
})

export const detailName = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.lg,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const detailDescription = style({
  fontSize: "0.8rem",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.xl,
  fontWeight: "500",
  overflow: "hidden",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const detailSpecs = style({
  textAlign: "left",
  padding: vars.space.xl,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "20px",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flexShrink: 0,
  overflow: "hidden",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})