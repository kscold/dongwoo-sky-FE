import { style } from "@vanilla-extract/css"
import { vars } from "./common/theme.css"

export const container = style({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: vars.colors.backgroundLight,
    padding: "20px",
})

export const loginCard = style({
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "48px",
    boxShadow: vars.shadows.lg,
    border: `1px solid ${vars.colors.border}`,
    width: "100%",
    maxWidth: "400px",
})

export const logo = style({
    textAlign: "center",
    marginBottom: "32px",
})

export const logoText = style({
    fontSize: "32px",
    fontWeight: "700",
    color: vars.colors.primary,
    marginBottom: "8px",
})

export const logoSubtext = style({
    fontSize: "16px",
    color: vars.colors.textLight,
})

export const title = style({
    fontSize: "24px",
    fontWeight: "600",
    color: vars.colors.text,
    textAlign: "center",
    marginBottom: "32px",
})

export const form = style({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
})

export const formGroup = style({
    display: "flex",
    flexDirection: "column",
})

export const label = style({
    fontSize: "14px",
    fontWeight: "500",
    color: vars.colors.text,
    marginBottom: "8px",
})

export const input = style({
    width: "100%",
    padding: "14px 16px",
    border: `2px solid ${vars.colors.border}`,
    borderRadius: "8px",
    fontSize: "16px",
    backgroundColor: "white",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
    ":focus": {
        outline: "none",
        borderColor: vars.colors.primary,
        boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
    },
})

export const submitButton = style({
    width: "100%",
    backgroundColor: vars.colors.primary,
    color: "white",
    padding: "16px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginTop: "8px",
    ":hover": {
        backgroundColor: vars.colors.primaryDark,
        transform: "translateY(-1px)",
    },
    ":disabled": {
        backgroundColor: vars.colors.disabled,
        cursor: "not-allowed",
        transform: "none",
    },
})

export const errorMessage = style({
    backgroundColor: vars.colors.primaryLight,
    color: vars.colors.danger,
    padding: "12px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    border: `1px solid ${vars.colors.border}`,
    marginBottom: "16px",
})

export const successMessage = style({
    backgroundColor: vars.colors.primaryLight,
    color: vars.colors.success,
    padding: "12px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    border: `1px solid ${vars.colors.border}`,
    marginBottom: "16px",
})

export const loading = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: vars.colors.textLight,
    fontSize: "14px",
})

export const loadingSpinner = style({
    width: "16px",
    height: "16px",
    border: `2px solid ${vars.colors.border}`,
    borderTop: `2px solid ${vars.colors.primary}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
})

export const forgotPassword = style({
    textAlign: "center",
    marginTop: "24px",
})

export const forgotPasswordLink = style({
    color: vars.colors.primary,
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    ":hover": {
        textDecoration: "underline",
    },
})

export const footer = style({
    textAlign: "center",
    marginTop: "32px",
    padding: "16px 0",
    borderTop: `1px solid ${vars.colors.border}`,
})

export const footerText = style({
    fontSize: "12px",
    color: vars.colors.textLight,
}) 