import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const container = style({
    padding: "32px",
    maxWidth: "1400px",
    margin: "0 auto",
})

export const header = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
    paddingBottom: "16px",
    borderBottom: `2px solid ${vars.colors.border}`,
})

export const title = style({
    fontSize: "32px",
    fontWeight: "700",
    color: vars.colors.text,
    margin: 0,
})

export const actions = style({
    display: "flex",
    gap: "16px",
})

export const createButton = style({
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: "600",
    color: "white",
    backgroundColor: vars.colors.primary,
    border: "none",
    borderRadius: "8px",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primaryDark,
        transform: "translateY(-2px)",
    },
})

export const previewSection = style({
    marginBottom: "48px",
    padding: "32px",
    backgroundColor: vars.colors.backgroundLight,
    borderRadius: "12px",
    border: `1px solid ${vars.colors.border}`,
})

export const sectionTitle = style({
    fontSize: "24px",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: "8px",
})

export const sectionDescription = style({
    fontSize: "16px",
    color: vars.colors.textLight,
    marginBottom: "24px",
})

export const previewGrid = style({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    "@media": {
        "(max-width: 768px)": {
            gridTemplateColumns: "1fr",
        },
    },
})

export const previewCard = style({
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "8px",
    border: `1px solid ${vars.colors.border}`,
})

export const previewCardTitle = style({
    fontSize: "20px",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: "16px",
})

export const previewList = style({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
})

export const previewItem = style({
    padding: "16px",
    backgroundColor: vars.colors.backgroundLight,
    borderRadius: "6px",
    border: `1px solid ${vars.colors.border}`,
})

export const previewItemTitle = style({
    fontSize: "16px",
    fontWeight: "500",
    color: vars.colors.text,
    marginBottom: "8px",
    lineHeight: 1.4,
})

export const previewItemMeta = style({
    fontSize: "14px",
    color: vars.colors.textLight,
    marginBottom: "4px",
})

export const previewItemStats = style({
    fontSize: "12px",
    color: vars.colors.textLight,
    fontWeight: "500",
})

export const tabNavigation = style({
    display: "flex",
    gap: "1px",
    marginBottom: "32px",
    backgroundColor: vars.colors.border,
    borderRadius: "8px",
    padding: "4px",
})

export const tabButton = style({
    flex: 1,
    padding: "12px 16px",
    fontSize: "16px",
    fontWeight: "500",
    color: vars.colors.textLight,
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ":hover": {
        color: vars.colors.text,
        backgroundColor: "white",
    },
})

export const tabButtonActive = style({
    color: vars.colors.primary,
    backgroundColor: "white",
    boxShadow: vars.shadows.sm,
})

export const contentSection = style({
    minHeight: "400px",
})

export const contentHeader = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
})

export const addButton = style({
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "500",
    color: vars.colors.primary,
    backgroundColor: "transparent",
    border: `1px solid ${vars.colors.primary}`,
    borderRadius: "6px",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primary,
        color: "white",
    },
})

export const contentGrid = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "24px",
})

export const contentCard = style({
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: vars.shadows.sm,
    border: `1px solid ${vars.colors.border}`,
    transition: "all 0.2s ease",
    ":hover": {
        boxShadow: vars.shadows.md,
        transform: "translateY(-2px)",
    },
})

export const contentCardImage = style({
    width: "100%",
    height: "200px",
    objectFit: "cover",
})

export const contentCardBody = style({
    padding: "16px",
})

export const contentCardTitle = style({
    fontSize: "18px",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: "8px",
    lineHeight: 1.4,
})

export const contentCardMeta = style({
    fontSize: "14px",
    color: vars.colors.textLight,
    marginBottom: "8px",
})

export const contentCardStats = style({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: vars.colors.textLight,
    fontWeight: "500",
})

export const contentCardActions = style({
    display: "flex",
    gap: "8px",
    marginTop: "16px",
})

export const editButton = style({
    padding: "6px 12px",
    fontSize: "12px",
    fontWeight: "500",
    color: vars.colors.primary,
    backgroundColor: "transparent",
    border: `1px solid ${vars.colors.primary}`,
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primary,
        color: "white",
    },
})

export const deleteButton = style({
    padding: "6px 12px",
    fontSize: "12px",
    fontWeight: "500",
    color: vars.colors.danger,
    backgroundColor: "transparent",
    border: `1px solid ${vars.colors.danger}`,
    borderRadius: "4px",
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

export const loadingState = style({
    textAlign: "center",
    padding: "64px 32px",
    color: vars.colors.textLight,
})

export const errorState = style({
    textAlign: "center",
    padding: "64px 32px",
    color: vars.colors.danger,
    backgroundColor: vars.colors.primaryLight,
    borderRadius: "8px",
    border: `1px solid ${vars.colors.border}`,
}) 