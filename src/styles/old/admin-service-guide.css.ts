import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

// Page Container
export const pageContainer = style({
    padding: vars.space.xl,
    backgroundColor: vars.colors.backgroundLight,
    minHeight: "100vh",
})

// Back Link
export const backLink = style({
    display: "inline-flex",
    alignItems: "center",
    gap: vars.space.sm,
    color: vars.colors.text,
    textDecoration: "none",
    marginBottom: vars.space.md,
    fontSize: vars.fontSizes.sm,
    transition: "color 0.2s",
    ":hover": {
        color: vars.colors.primary,
    },
})

export const backLinkIcon = style({
    width: "16px",
    height: "16px",
})

// Page Header
export const header = style({
    marginBottom: vars.space.xxl,
    paddingBottom: vars.space.lg,
    borderBottom: `1px solid ${vars.colors.border}`,
})

export const title = style({
    fontSize: vars.fontSizes.xxxl,
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.textStrong,
})

export const description = style({
    marginTop: vars.space.sm,
    fontSize: vars.fontSizes.md,
    color: vars.colors.text,
})

// Card
export const card = style({
    backgroundColor: vars.colors.white,
    borderRadius: vars.radii.xl,
    boxShadow: vars.shadows.lg,
    marginBottom: vars.space.xl,
    overflow: "hidden",
})

export const cardHeader = style({
    padding: vars.space.lg,
    borderBottom: `1px solid ${vars.colors.border}`,
})

export const cardTitle = style({
    fontSize: vars.fontSizes.xl,
    fontWeight: vars.fontWeights.semibold,
    color: vars.colors.textStrong,
})

export const cardDescription = style({
    marginTop: vars.space.xs,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.text,
})

export const cardBody = style({
    padding: vars.space.lg,
})

export const cardFooter = style({
    padding: `${vars.space.sm} ${vars.space.lg}`,
    backgroundColor: vars.colors.background,
    borderTop: `1px solid ${vars.colors.border}`,
    textAlign: "right",
})

// Form Elements
export const formGroup = style({
    marginBottom: vars.space.lg,
})

export const label = style({
    display: "block",
    marginBottom: vars.space.sm,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.textStrong,
})

const inputBase = style({
    width: "100%",
    padding: vars.space.md,
    borderRadius: vars.radii.md,
    border: `1px solid ${vars.colors.border}`,
    backgroundColor: vars.colors.background,
    fontSize: vars.fontSizes.md,
    color: vars.colors.text,
    transition: "border-color 0.2s, box-shadow 0.2s",
    ":focus": {
        outline: "none",
        borderColor: vars.colors.primary,
        boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
    },
})

export const input = style([inputBase])
export const textarea = style([inputBase, { minHeight: "80px", resize: "vertical" }])
export const inputGroup = style({ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: vars.space.sm });

// Field Groups for Dynamic Arrays
export const fieldGroupContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.md,
})

export const fieldGroup = style({
    display: "flex",
    alignItems: "center",
    gap: vars.space.md,
    padding: vars.space.md,
    borderRadius: vars.radii.lg,
    backgroundColor: vars.colors.backgroundLight,
    border: `1px solid ${vars.colors.border}`,
})

// Buttons
const baseButton = style({
    border: "none",
    borderRadius: vars.radii.md,
    fontWeight: vars.fontWeights.medium,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: vars.space.sm,
})

export const addButton = style([
    baseButton,
    {
        padding: `${vars.space.sm} ${vars.space.md}`,
        backgroundColor: vars.colors.secondary,
        color: vars.colors.white,
        ":hover": {
            backgroundColor: vars.colors.primaryDark,
        },
    },
])

export const iconButton = style([
    baseButton,
    {
        padding: vars.space.sm,
        backgroundColor: "transparent",
        color: vars.colors.text,
        ":hover": {
            backgroundColor: vars.colors.border,
            color: vars.colors.danger,
        },
    },
])

export const saveButton = style([
    baseButton,
    {
        padding: `${vars.space.md} ${vars.space.xl}`,
        fontSize: vars.fontSizes.md,
        backgroundColor: vars.colors.primary,
        color: vars.colors.white,
        ":hover": {
            backgroundColor: vars.colors.primaryDark,
        },
        ":disabled": {
            backgroundColor: vars.colors.disabled,
            cursor: "not-allowed",
        },
    },
])

export const formActions = style({
    display: "flex",
    justifyContent: "flex-end",
    marginTop: vars.space.xl,
})

// Icon Select
export const iconSelectContainer = style({
    position: "relative",
    width: "220px",
    flexShrink: 0,
})

export const iconSelectButton = style([
    inputBase,
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
    },
])

export const iconSelectList = style({
    position: "absolute",
    width: "100%",
    top: `calc(100% + ${vars.space.xs})`,
    left: 0,
    backgroundColor: vars.colors.white,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.md,
    maxHeight: "250px",
    overflowY: "auto",
    zIndex: vars.zIndices.dropdown,
    listStyle: "none",
    padding: vars.space.xs,
    margin: 0,
    boxShadow: vars.shadows.lg,
})

export const iconSelectItem = style({
    display: "flex",
    alignItems: "center",
    gap: vars.space.sm,
    padding: vars.space.sm,
    borderRadius: vars.radii.sm,
    cursor: "pointer",
    ":hover": {
        backgroundColor: vars.colors.background,
    },
})

export const icon = style({
    width: "20px",
    height: "20px",
    color: vars.colors.text,
})

export const chevron = style({
    width: "18px",
    height: "18px",
    color: vars.colors.textLight,
    transition: "transform 0.2s",
})

export const chevronOpen = style({
    transform: "rotate(180deg)",
}) 