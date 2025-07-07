import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const noticeSection = style({
    padding: `${vars.space.xxl} ${vars.space.md}`,
    backgroundColor: vars.colors.backgroundLight,
})

export const header = style({
    textAlign: "center",
    marginBottom: vars.space.xl,
})

export const title = style({
    fontSize: vars.fontSizes.xxxl,
    fontWeight: vars.fontWeights.bold,
    marginBottom: vars.space.sm,
})

export const description = style({
    fontSize: vars.fontSizes.lg,
    color: vars.colors.textLight,
    marginBottom: vars.space.xl,
})

export const noticeList = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: vars.space.lg,
    listStyle: "none",
    padding: 0,
    maxWidth: "1200px",
    margin: "0 auto",
})

export const noticeItem = style({
    backgroundColor: vars.colors.white,
    borderRadius: vars.radii.lg,
    padding: vars.space.lg,
    boxShadow: vars.shadows.sm,
    transition: `transform 0.2s, box-shadow 0.2s`,
    ":hover": {
        transform: "translateY(-4px)",
        boxShadow: vars.shadows.md,
    },
})

export const noticeLink = style({
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    height: "100%",
})

export const noticeTitle = style({
    fontSize: vars.fontSizes.lg,
    fontWeight: vars.fontWeights.semibold,
    marginBottom: vars.space.md,
    flexGrow: 1,
})

export const noticeDate = style({
    color: vars.colors.textLight,
    fontSize: vars.fontSizes.sm,
    textAlign: "right",
}) 