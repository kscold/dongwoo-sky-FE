import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

export const container = style({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: vars.space.xl,
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

export const header = style({
    textAlign: "center",
    marginBottom: vars.space.xl,
})

export const title = style({
    fontSize: vars.fontSizes.xxxl,
    fontWeight: vars.fontWeights.bold,
    marginBottom: vars.space.lg,
})

export const subtitle = style({
    fontSize: vars.fontSizes.lg,
    color: vars.colors.textLight,
    marginBottom: vars.space.lg,
})

export const backButton = style({
    color: vars.colors.primary,
    textDecoration: "none",
})

export const grid = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: vars.space.lg,
})

export const card = style({
    backgroundColor: vars.colors.white,
    borderRadius: vars.radii.lg,
    boxShadow: vars.shadows.sm,
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    transition: "transform 0.2s",
    ":hover": {
        transform: "translateY(-2px)",
    },
})

export const imageContainer = style({
    height: "200px",
    overflow: "hidden",
})

export const image = style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
})

export const imagePlaceholder = style({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: vars.colors.gray[100],
    fontSize: vars.fontSizes.xxxl,
})

export const content = style({
    padding: vars.space.lg,
})

export const cardTitle = style({
    fontSize: vars.fontSizes.lg,
    fontWeight: vars.fontWeights.semibold,
    marginBottom: vars.space.md,
})

export const meta = style({
    marginBottom: vars.space.md,
})

export const metaItem = style({
    display: "block",
    fontSize: vars.fontSizes.sm,
    color: vars.colors.textLight,
    marginBottom: vars.space.xs,
})

export const description = style({
    fontSize: vars.fontSizes.md,
    color: vars.colors.textLight,
    lineHeight: 1.6,
    marginBottom: vars.space.md,
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

export const pagination = style({
    display: "flex",
    justifyContent: "center",
    gap: vars.space.md,
    marginTop: vars.space.xl,
})

export const pageButton = style({
    padding: `${vars.space.sm} ${vars.space.md}`,
    backgroundColor: vars.colors.white,
    border: `1px solid ${vars.colors.gray[300]}`,
    borderRadius: vars.radii.md,
    cursor: "pointer",
    ":disabled": {
        opacity: 0.5,
    },
})

export const pageNumbers = style({
    display: "flex",
    gap: vars.space.xs,
})

export const pageNumber = style({
    padding: `${vars.space.sm} ${vars.space.md}`,
    backgroundColor: vars.colors.white,
    border: `1px solid ${vars.colors.gray[300]}`,
    borderRadius: vars.radii.md,
    cursor: "pointer",
})

export const active = style({
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
    borderColor: vars.colors.primary,
})

export const emptyState = style({
    textAlign: "center",
    padding: vars.space.xl,
})

export const emptyStateTitle = style({
    fontSize: vars.fontSizes.lg,
    fontWeight: vars.fontWeights.semibold,
    marginBottom: vars.space.md,
})

export const emptyStateText = style({
    fontSize: vars.fontSizes.md,
    color: vars.colors.textLight,
}) 