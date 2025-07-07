import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

export const container = style({
    padding: vars.space.xl,
    backgroundColor: vars.colors.white,
    borderRadius: vars.radii.lg,
    boxShadow: vars.shadows.lg,
})

export const header = style({
    paddingBottom: vars.space.lg,
    borderBottom: `1px solid ${vars.colors.border}`,
    marginBottom: vars.space.lg,
})

export const title = style({
    fontSize: vars.fontSizes.xxl,
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.textStrong,
})

export const formGroup = style({
    marginBottom: vars.space.lg,
})

export const label = style({
    display: "block",
    marginBottom: vars.space.sm,
    fontWeight: vars.fontWeights.medium,
})

export const input = style({
    width: "100%",
    padding: vars.space.md,
    borderRadius: vars.radii.md,
    border: `1px solid ${vars.colors.border}`,
})

export const description = style({
    fontSize: vars.fontSizes.sm,
    color: vars.colors.danger,
    marginTop: vars.space.sm,
})

export const modalActions = style({
    display: "flex",
    justifyContent: "flex-end",
    gap: vars.space.md,
    marginTop: vars.space.xl,
})

export const saveButton = style({
    padding: `${vars.space.sm} ${vars.space.lg}`,
    backgroundColor: vars.colors.primary,
    color: "white",
    border: "none",
    borderRadius: vars.radii.md,
    cursor: "pointer",
})

export const profileContainer = style({
    // ... existing code ...
}) 