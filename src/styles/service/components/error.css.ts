import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

export const errorContainer = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: vars.space.xxl,
    backgroundColor: "#fff0f0",
    borderRadius: vars.radii.lg,
    border: `1px solid ${vars.colors.danger}`,
    color: vars.colors.danger,
    textAlign: "center",
    margin: vars.space.lg,
})

export const errorTitle = style({
    fontSize: vars.fontSizes.xxl,
    fontWeight: vars.fontWeights.bold,
    marginBottom: vars.space.md,
})

export const errorMessage = style({
    fontSize: vars.fontSizes.md,
    marginBottom: vars.space.lg,
    maxWidth: "600px",
})

export const errorActions = style({
    display: "flex",
    gap: vars.space.md,
})

export const button = style({
    padding: `${vars.space.sm} ${vars.space.lg}`,
    backgroundColor: vars.colors.primary,
    color: "white",
    border: "none",
    borderRadius: vars.radii.md,
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.2s",

    ":hover": {
        backgroundColor: vars.colors.primaryDark,
    },
}) 