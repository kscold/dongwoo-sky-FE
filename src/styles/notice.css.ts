import { style } from "@vanilla-extract/css"
import { vars } from "./common/theme.css"

export const container = style({
    padding: "32px 16px",
    maxWidth: "800px",
    margin: "0 auto",
})

export const header = style({
    marginBottom: "32px",
    textAlign: "center",
})

export const title = style({
    fontSize: "32px",
    fontWeight: "700",
    color: vars.colors.text,
    marginBottom: "16px",
    lineHeight: 1.3,
})

export const meta = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    fontSize: "14px",
    color: vars.colors.textLight,
    marginBottom: "24px",
})

export const date = style({
    fontWeight: "500",
})

export const views = style({
    display: "flex",
    alignItems: "center",
    gap: "4px",
})

export const content = style({
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: vars.shadows.sm,
    border: `1px solid ${vars.colors.border}`,
    marginBottom: "32px",
})

export const contentBody = style({
    fontSize: "16px",
    lineHeight: 1.8,
    color: vars.colors.text,
})

export const backButton = style({
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: vars.colors.primary,
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "12px 24px",
    backgroundColor: "white",
    border: `1px solid ${vars.colors.primary}`,
    borderRadius: "8px",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primary,
        color: "white",
        transform: "translateY(-1px)",
    },
})

export const backIcon = style({
    width: "16px",
    height: "16px",
})

export const loading = style({
    textAlign: "center",
    padding: "64px",
    color: vars.colors.textLight,
    fontSize: "16px",
})

export const error = style({
    textAlign: "center",
    padding: "64px",
    color: vars.colors.danger,
    backgroundColor: vars.colors.primaryLight,
    borderRadius: "8px",
    border: `1px solid ${vars.colors.border}`,
})

export const notFound = style({
    textAlign: "center",
    padding: "64px",
    color: vars.colors.textLight,
})

export const notFoundIcon = style({
    fontSize: "48px",
    marginBottom: "16px",
    opacity: 0.5,
})

export const notFoundText = style({
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "8px",
})

export const notFoundSubtext = style({
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "24px",
})

// 빌드 오류 해결을 위한 추가 스타일들
export const noticeHeader = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: vars.space.xl,
    paddingBottom: vars.space.lg,
    borderBottom: `2px solid ${vars.colors.border}`,
})

export const noticeDetail = style({
    backgroundColor: vars.colors.white,
    borderRadius: vars.radii.lg,
    padding: vars.space.xl,
    boxShadow: vars.shadows.sm,
    border: `1px solid ${vars.colors.border}`,
})

export const detailTitle = style({
    fontSize: vars.fontSizes.xxxl,
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.textStrong,
    marginBottom: vars.space.md,
    lineHeight: vars.lineHeights.heading,
})

export const detailInfo = style({
    display: "flex",
    gap: vars.space.lg,
    marginBottom: vars.space.xl,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.textLight,
})

export const detailContent = style({
    fontSize: vars.fontSizes.md,
    lineHeight: vars.lineHeights.relaxed,
    color: vars.colors.text,
    marginBottom: vars.space.xl,
})

export const attachmentsSection = style({
    marginTop: vars.space.xl,
    paddingTop: vars.space.xl,
    borderTop: `1px solid ${vars.colors.borderLight}`,
})

export const attachmentsTitle = style({
    fontSize: vars.fontSizes.lg,
    fontWeight: vars.fontWeights.semibold,
    color: vars.colors.textStrong,
    marginBottom: vars.space.md,
})

export const attachmentsList = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.sm,
})

export const attachmentItem = style({
    display: "flex",
    alignItems: "center",
    gap: vars.space.sm,
    padding: vars.space.sm,
    backgroundColor: vars.colors.backgroundLight,
    borderRadius: vars.radii.md,
    border: `1px solid ${vars.colors.borderLight}`,
})

export const attachmentLink = style({
    color: vars.colors.primary,
    textDecoration: "none",
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    
    ":hover": {
        textDecoration: "underline",
    },
}) 