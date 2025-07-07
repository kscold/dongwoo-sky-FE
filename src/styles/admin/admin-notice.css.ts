import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const container = style({
    padding: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
})

export const header = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
})

export const title = style({
    fontSize: "32px",
    fontWeight: "700",
    color: vars.colors.text,
    margin: 0,
})

export const createButton = style({
    backgroundColor: vars.colors.primary,
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primaryDark,
        transform: "translateY(-1px)",
    },
})

export const noticeList = style({
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: vars.shadows.sm,
    overflow: "hidden",
    border: `1px solid ${vars.colors.border}`,
})

export const noticeItem = style({
    padding: "24px",
    borderBottom: `1px solid ${vars.colors.border}`,
    transition: "background-color 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.backgroundLight,
    },
    ":last-child": {
        borderBottom: "none",
    },
})

export const noticeHeader = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "12px",
})

export const noticeTitle = style({
    fontSize: "18px",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: "8px",
    lineHeight: 1.4,
})

export const noticeContent = style({
    fontSize: "14px",
    color: vars.colors.textLight,
    lineHeight: 1.6,
    marginBottom: "16px",
})

export const noticeMeta = style({
    display: "flex",
    alignItems: "center",
    gap: "16px",
    fontSize: "12px",
    color: vars.colors.textLight,
})

export const noticeDate = style({
    fontWeight: "500",
})

export const noticeStatus = style({
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
})

export const publishedStatus = style([
    noticeStatus,
    {
        backgroundColor: vars.colors.primaryLight,
        color: vars.colors.primary,
    },
])

export const draftStatus = style([
    noticeStatus,
    {
        backgroundColor: vars.colors.accent,
        color: vars.colors.textLight,
    },
])

export const noticeActions = style({
    display: "flex",
    gap: "8px",
    marginTop: "16px",
})

export const editButton = style({
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "500",
    color: vars.colors.primary,
    backgroundColor: "transparent",
    border: `1px solid ${vars.colors.primary}`,
    borderRadius: "6px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primary,
        color: "white",
    },
})

export const deleteButton = style({
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "500",
    color: vars.colors.danger,
    backgroundColor: "transparent",
    border: `1px solid ${vars.colors.danger}`,
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.danger,
        color: "white",
    },
})

export const emptyState = style({
    textAlign: "center",
    padding: "64px 32px",
    color: vars.colors.textLight,
})

export const emptyStateIcon = style({
    fontSize: "48px",
    marginBottom: "16px",
    opacity: 0.5,
})

export const emptyStateText = style({
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "8px",
})

export const emptyStateSubtext = style({
    fontSize: "14px",
    opacity: 0.7,
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

// Form styles
export const form = style({
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: vars.shadows.sm,
    border: `1px solid ${vars.colors.border}`,
})

export const formGroup = style({
    marginBottom: "16px",
})

export const label = style({
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: vars.colors.text,
    marginBottom: "6px",
})

export const input = style({
    width: "100%",
    padding: "12px",
    border: `1px solid ${vars.colors.border}`,
    borderRadius: "6px",
    fontSize: "14px",
    boxSizing: "border-box",
    ":focus": {
        outline: "none",
        borderColor: vars.colors.primary,
        boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
    },
})

export const textarea = style([
    input,
    {
        minHeight: "120px",
        resize: "vertical",
    },
])

export const checkbox = style({
    marginRight: "8px",
})

export const buttonGroup = style({
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
    marginTop: "24px",
})

export const saveButton = style({
    backgroundColor: vars.colors.primary,
    color: "white",
    padding: "12px 24px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    ":hover": {
        backgroundColor: vars.colors.primaryDark,
    },
})

export const cancelButton = style({
    backgroundColor: vars.colors.textLight,
    color: "white",
    padding: "12px 24px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    ":hover": {
        backgroundColor: vars.colors.text,
    },
}) 