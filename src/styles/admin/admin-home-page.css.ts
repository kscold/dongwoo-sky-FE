import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const container = style({
    padding: vars.space.lg,
    maxWidth: "1200px",
    margin: "0 auto",
})

export const header = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: vars.space.xl,
    paddingBottom: vars.space.md,
    borderBottom: `1px solid ${vars.colors.border}`,
})

export const title = style({
    fontSize: vars.fontSizes.xxl,
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.text,
    marginBottom: vars.space.md,
})

export const subtitle = style({
    fontSize: vars.fontSizes.md,
    color: vars.colors.textLight,
    marginBottom: vars.space.lg,
})

export const buttonGroup = style({
    display: "flex",
    gap: vars.space.sm,
})

export const editButton = style({
    padding: `${vars.space.sm} ${vars.space.md}`,
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
    border: "none",
    borderRadius: vars.radii.md,
    cursor: "pointer",
    fontSize: vars.fontSizes.sm,
    fontWeight: "500",
    transition: "background-color 0.2s ease",

    ":hover": {
        backgroundColor: vars.colors.primaryDark,
    },

    ":disabled": {
        backgroundColor: vars.colors.disabled,
        cursor: "not-allowed",
    },
})

export const saveButton = style({
    padding: `${vars.space.sm} ${vars.space.md}`,
    backgroundColor: vars.colors.success,
    color: vars.colors.white,
    border: "none",
    borderRadius: vars.radii.md,
    cursor: "pointer",
    fontSize: vars.fontSizes.sm,
    fontWeight: "500",
    transition: "background-color 0.2s ease",

    ":hover": {
        backgroundColor: vars.colors.primaryDark,
    },

    ":disabled": {
        backgroundColor: vars.colors.disabled,
        cursor: "not-allowed",
    },
})

export const cancelButton = style({
    padding: `${vars.space.sm} ${vars.space.md}`,
    backgroundColor: vars.colors.secondary,
    color: vars.colors.text,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.md,
    cursor: "pointer",
    fontSize: vars.fontSizes.sm,
    fontWeight: "500",
    transition: "background-color 0.2s ease",

    ":hover": {
        backgroundColor: vars.colors.backgroundLight,
    },

    ":disabled": {
        backgroundColor: vars.colors.disabled,
        cursor: "not-allowed",
    },
})

export const section = style({
    marginBottom: vars.space.xl,
    padding: vars.space.lg,
    backgroundColor: vars.colors.white,
    borderRadius: vars.radii.lg,
    boxShadow: vars.shadows.sm,
})

export const sectionTitle = style({
    fontSize: vars.fontSizes.lg,
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: vars.space.md,
    paddingBottom: vars.space.sm,
    borderBottom: `1px solid ${vars.colors.border}`,
})

export const field = style({
    marginBottom: vars.space.md,
})

export const label = style({
    display: "block",
    fontSize: vars.fontSizes.sm,
    fontWeight: "500",
    color: vars.colors.text,
    marginBottom: vars.space.xs,
})

export const input = style({
    width: "100%",
    padding: vars.space.sm,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.md,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.text,
    backgroundColor: vars.colors.white,

    ":focus": {
        outline: "none",
        borderColor: vars.colors.primary,
        boxShadow: `0 0 0 2px ${vars.colors.primaryTransparent}`,
    },
})

export const textarea = style({
    width: "100%",
    padding: vars.space.sm,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.md,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.text,
    backgroundColor: vars.colors.white,
    resize: "vertical",
    minHeight: "80px",

    ":focus": {
        outline: "none",
        borderColor: vars.colors.primary,
        boxShadow: `0 0 0 2px ${vars.colors.primaryTransparent}`,
    },
})

export const value = style({
    padding: vars.space.sm,
    backgroundColor: vars.colors.background,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.md,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.text,
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
})

export const uploadButton = style({
    padding: `${vars.space.sm} ${vars.space.md}`,
    backgroundColor: vars.colors.secondary,
    color: vars.colors.text,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.md,
    cursor: "pointer",
    fontSize: vars.fontSizes.sm,
    fontWeight: "500",
    transition: "background-color 0.2s ease",

    ":hover": {
        backgroundColor: vars.colors.backgroundLight,
    },

    ":disabled": {
        backgroundColor: vars.colors.disabled,
        cursor: "not-allowed",
    },
})

export const link = style({
    color: vars.colors.primary,
    textDecoration: "none",

    ":hover": {
        textDecoration: "underline",
    },
})

export const loadingMessage = style({
    textAlign: "center",
    padding: vars.space.xl,
    fontSize: vars.fontSizes.md,
    color: vars.colors.textLight,
})

export const errorMessage = style({
    textAlign: "center",
    padding: vars.space.xl,
    fontSize: vars.fontSizes.md,
    color: vars.colors.danger,
    backgroundColor: vars.colors.primaryLight,
    borderRadius: vars.radii.md,
    border: `1px solid ${vars.colors.danger}`,
})

export const emptyMessage = style({
    textAlign: "center",
    padding: vars.space.xl,
    fontSize: vars.fontSizes.md,
    color: vars.colors.textLight,
    backgroundColor: vars.colors.background,
    borderRadius: vars.radii.md,
    border: `1px solid ${vars.colors.border}`,
})

export const preview = style({
    marginTop: vars.space.md,
    borderRadius: vars.radii.lg,
    overflow: "hidden",
    boxShadow: vars.shadows.md,
})

export const previewHero = style({
    position: "relative",
    height: "500px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
    backgroundColor: "#1a1a1a",
})

export const previewOverlay = style({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: vars.space.xl,
    textAlign: "center",
})

export const previewTitle = style({
    fontSize: vars.fontSizes.xl,
    fontWeight: vars.fontWeights.semibold,
    color: vars.colors.gray[800],
    marginBottom: vars.space.md,
    textAlign: "center",
})

export const previewSubtitle = style({
    fontSize: vars.fontSizes.lg,
    color: vars.colors.white,
    marginBottom: vars.space.sm,
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
})

export const previewDescription = style({
    fontSize: vars.fontSizes.md,
    color: vars.colors.white,
    marginBottom: vars.space.lg,
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
    maxWidth: "600px",
})

export const previewButton = style({
    padding: "16px 28px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: "translateY(0)",

    ":hover": {
        transform: "translateY(-2px)",
    },
})

export const primaryPreviewButton = style([
    previewButton,
    {
        backgroundColor: "#00C2B8",
        color: "white",
        border: "none",
        boxShadow: "0 4px 20px rgba(0, 194, 184, 0.3)",

        ":hover": {
            boxShadow: "0 6px 25px rgba(0, 194, 184, 0.4)",
        },
    },
])

export const secondaryPreviewButton = style([
    previewButton,
    {
        backgroundColor: "transparent",
        color: "white",
        border: "2px solid #00C2B8",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",

        ":hover": {
            backgroundColor: "rgba(0, 194, 184, 0.1)",
        },
    },
])

export const previewSection = style({
    marginTop: vars.space.xl,
    padding: vars.space.lg,
    backgroundColor: vars.colors.gray[50],
    borderRadius: vars.radii.lg,
    border: `1px solid ${vars.colors.gray[200]}`,
})

export const previewContainer = style({
    borderRadius: vars.radii.lg,
    overflow: "hidden",
    boxShadow: vars.shadows.md,
    marginBottom: vars.space.md,
})

export const heroPreview = style({
    position: "relative",
    height: "500px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

export const heroContent = style({
    position: "relative",
    zIndex: 2,
    padding: vars.space.xl,
    textAlign: "center",
    color: vars.colors.white,
    maxWidth: "800px",
})

export const heroPreviewTitle = style({
    fontSize: "2rem",
    fontWeight: vars.fontWeights.bold,
    lineHeight: 1.2,
    marginBottom: vars.space.md,
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
})

export const heroPreviewSubtitle = style({
    fontSize: vars.fontSizes.lg,
    color: "#64FFDA",
    marginBottom: vars.space.sm,
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
    lineHeight: 1.4,
})

export const heroPreviewDescription = style({
    fontSize: vars.fontSizes.md,
    color: "rgba(255, 255, 255, 0.92)",
    marginBottom: vars.space.lg,
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
    lineHeight: 1.6,
})

export const heroButtons = style({
    display: "flex",
    gap: vars.space.md,
    justifyContent: "center",
    flexWrap: "wrap",
})

export const imageIndicators = style({
    position: "absolute",
    bottom: vars.space.md,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: vars.space.xs,
    zIndex: 3,
})

export const indicator = style({
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transition: "all 0.3s ease",
})

export const active = style({
    backgroundColor: "#00C2B8",
})

export const previewNote = style({
    padding: vars.space.md,
    backgroundColor: vars.colors.gray[50],
    borderRadius: vars.radii.md,
    border: `1px solid ${vars.colors.gray[200]}`,
}) 