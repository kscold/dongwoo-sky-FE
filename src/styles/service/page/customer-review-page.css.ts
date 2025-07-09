import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

export const container = style({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: vars.space.xl,
})

export const header = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: vars.space.xl,
    paddingBottom: vars.space.lg,
    borderBottom: `2px solid ${vars.colors.border}`,
})

export const loadingState = style({
    textAlign: "center",
    padding: vars.space.xl,
})

export const errorState = style({
    textAlign: "center",
    padding: vars.space.xl,
    color: vars.colors.danger,
})

export const backButton = style({
    color: vars.colors.primary,
    textDecoration: "none",
    marginBottom: vars.space.lg,
})

export const title = style({
    fontSize: vars.fontSizes.xxxl,
    fontWeight: vars.fontWeights.bold,
    marginBottom: vars.space.lg,
})

export const ratingSection = style({
    marginBottom: vars.space.lg,
})

export const stars = style({
    fontSize: vars.fontSizes.lg,
    color: "#fbbf24",
})

export const ratingText = style({
    fontSize: vars.fontSizes.sm,
    color: vars.colors.textLight,
})

export const meta = style({
    marginBottom: vars.space.lg,
})

export const customerInfo = style({
    marginBottom: vars.space.md,
})

export const customer = style({
    fontWeight: vars.fontWeights.medium,
})

export const company = style({
    color: vars.colors.textLight,
})

export const details = style({
    marginBottom: vars.space.md,
})

export const detail = style({
    display: "inline-block",
    marginRight: vars.space.md,
    color: vars.colors.textLight,
})

export const stats = style({
    display: "flex",
    gap: vars.space.md,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.textLight,
})

export const stat = style({
    display: "flex",
    alignItems: "center",
})

export const date = style({
    fontSize: vars.fontSizes.sm,
    color: vars.colors.textLight,
})

export const imageGallery = style({
    marginBottom: vars.space.xl,
})

export const mainImage = style({
    marginBottom: vars.space.md,
})

export const image = style({
    width: "100%",
    height: "auto",
    borderRadius: vars.radii.md,
})

export const thumbnails = style({
    display: "flex",
    gap: vars.space.md,
    flexWrap: "wrap",
})

export const thumbnail = style({
    borderRadius: vars.radii.md,
    cursor: "pointer",
})

export const content = style({
    marginBottom: vars.space.xl,
})

export const contentBody = style({
    fontSize: vars.fontSizes.md,
    lineHeight: 1.6,
})

export const actions = style({
    display: "flex",
    gap: vars.space.md,
    justifyContent: "center",
})

export const helpfulButton = style({
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
    border: "none",
    padding: `${vars.space.sm} ${vars.space.lg}`,
    borderRadius: vars.radii.md,
    cursor: "pointer",
})

export const backToListButton = style({
    backgroundColor: vars.colors.gray[200],
    color: vars.colors.text,
    textDecoration: "none",
    padding: `${vars.space.sm} ${vars.space.lg}`,
    borderRadius: vars.radii.md,
}) 