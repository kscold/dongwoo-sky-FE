import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"







export const content = style({
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "24px",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
})

// export const container = style({
//     padding: "32px",
//     maxWidth: "1200px",
//     margin: "0 auto",
// })

// export const header = style({
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "32px",
//     paddingBottom: "16px",
//     borderBottom: `2px solid ${vars.colors.gray[200]}`,
// })

// export const title = style({
//     fontSize: "32px",
//     fontWeight: "700",
//     color: vars.colors.gray[900],
//     margin: 0,
// })

export const loadingMessage = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "48px",
    fontSize: "16px",
    color: vars.colors.gray[600],
})

export const errorMessage = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "48px",
    fontSize: "16px",
    color: vars.colors.danger,
    backgroundColor: vars.colors.primaryLight,
    borderRadius: "8px",
    border: `1px solid ${vars.colors.border}`,
})

export const emptyMessage = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "48px",
    fontSize: "16px",
    color: vars.colors.gray[500],
})

// export const buttonGroup = style({
//     display: "flex",
//     gap: "8px",
// })

// export const editButton = style({
//     backgroundColor: vars.colors.primary[600],
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     padding: "12px 24px",
//     fontSize: "16px",
//     cursor: "pointer",
//     fontWeight: "500",
//     transition: "all 0.2s ease",
//     ":hover": {
//         backgroundColor: vars.colors.primary[700],
//         transform: "translateY(-1px)",
//     },
// })

// export const saveButton = style({
//     backgroundColor: vars.colors.green[600],
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     padding: "12px 24px",
//     fontSize: "16px",
//     cursor: "pointer",
//     fontWeight: "500",
//     transition: "all 0.2s ease",
//     ":hover": {
//         backgroundColor: vars.colors.green[700],
//         transform: "translateY(-1px)",
//     },
//     ":disabled": {
//         backgroundColor: vars.colors.gray[400],
//         cursor: "not-allowed",
//         transform: "none",
//     },
// })

// export const cancelButton = style({
//     backgroundColor: vars.colors.red[600],
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     padding: "12px 24px",
//     fontSize: "16px",
//     cursor: "pointer",
//     fontWeight: "500",
//     transition: "all 0.2s ease",
//     ":hover": {
//         backgroundColor: vars.colors.red[700],
//         transform: "translateY(-1px)",
//     },
//     ":disabled": {
//         backgroundColor: vars.colors.gray[400],
//         cursor: "not-allowed",
//         transform: "none",
//     },
// })

// export const section = style({
//     backgroundColor: "white",
//     borderRadius: "12px",
//     padding: "24px",
//     marginBottom: "24px",
//     boxShadow: vars.shadows.sm,
//     border: `1px solid ${vars.colors.gray[200]}`,
// })

// export const sectionTitle = style({
//     fontSize: "24px",
//     fontWeight: "600",
//     color: vars.colors.gray[900],
//     marginBottom: "16px",
//     paddingBottom: "8px",
//     borderBottom: `1px solid ${vars.colors.gray[200]}`,
// })

// export const field = style({
//     marginBottom: "16px",
// })

// export const label = style({
//     display: "block",
//     fontSize: "16px",
//     fontWeight: "500",
//     color: vars.colors.gray[700],
//     marginBottom: "8px",
// })

// export const input = style({
//     width: "100%",
//     padding: "12px",
//     border: `2px solid ${vars.colors.gray[300]}`,
//     borderRadius: "8px",
//     fontSize: "16px",
//     backgroundColor: "white",
//     transition: "border-color 0.2s ease",
//     ":focus": {
//         outline: "none",
//         borderColor: vars.colors.primary[500],
//         boxShadow: `0 0 0 3px ${vars.colors.primary[100]}`,
//     },
// })

// export const textarea = style([
//     input,
//     {
//         resize: "vertical",
//         minHeight: "80px",
//     },
// ])

// export const uploadButton = style({
//     backgroundColor: vars.colors.gray[600],
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     padding: "8px 16px",
//     fontSize: "14px",
//     cursor: "pointer",
//     fontWeight: "500",
//     transition: "all 0.2s ease",
//     ":hover": {
//         backgroundColor: vars.colors.primary[600],
//         transform: "translateY(-1px)",
//     },
//     ":disabled": {
//         backgroundColor: vars.colors.gray[400],
//         cursor: "not-allowed",
//         transform: "none",
//     },
// })

// export const value = style({
//     padding: "12px",
//     backgroundColor: vars.colors.gray[50],
//     border: `1px solid ${vars.colors.gray[200]}`,
//     borderRadius: "8px",
//     fontSize: "16px",
//     color: vars.colors.gray[900],
//     lineHeight: "1.5",
// })

// export const link = style({
//     color: vars.colors.primary[600],
//     textDecoration: "none",
//     wordBreak: "break-all",
//     ":hover": {
//         textDecoration: "underline",
//     },
// })

// export const preview = style({
//     border: `2px solid ${vars.colors.gray[200]}`,
//     borderRadius: "12px",
//     overflow: "hidden",
//     boxShadow: vars.shadows.md,
// })

// export const previewHero = style({
//     position: "relative",
//     height: "300px",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
// })

// export const previewOverlay = style({
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.4)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "24px",
// })

// export const previewTitle = style({
//     fontSize: "32px",
//     fontWeight: "700",
//     color: "white",
//     textAlign: "center",
//     marginBottom: "16px",
// })

// export const previewSubtitle = style({
//     fontSize: "20px",
//     fontWeight: "500",
//     color: "white",
//     textAlign: "center",
//     marginBottom: "16px",
// })

// export const previewDescription = style({
//     fontSize: "16px",
//     color: "white",
//     textAlign: "center",
//     marginBottom: "24px",
//     maxWidth: "600px",
// })

// export const previewButton = style({
//     backgroundColor: vars.colors.primary[600],
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     padding: "12px 24px",
//     fontSize: "16px",
//     fontWeight: "500",
//     cursor: "pointer",
// })

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
    paddingBottom: "16px",
    borderBottom: `2px solid ${vars.colors.border}`,
})

export const title = style({
    fontSize: "32px",
    fontWeight: "700",
    color: vars.colors.text,
    margin: 0,
})

export const buttonGroup = style({
    display: "flex",
    gap: "8px",
})

export const editButton = style({
    backgroundColor: vars.colors.primary,
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primaryDark,
        transform: "translateY(-1px)",
    },
})

export const saveButton = style({
    backgroundColor: vars.colors.success,
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primary,
        transform: "translateY(-1px)",
    },
    ":disabled": {
        backgroundColor: vars.colors.disabled,
        cursor: "not-allowed",
        transform: "none",
    },
})

export const cancelButton = style({
    backgroundColor: vars.colors.danger,
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.dangerDark,
        transform: "translateY(-1px)",
    },
    ":disabled": {
        backgroundColor: vars.colors.disabled,
        cursor: "not-allowed",
        transform: "none",
    },
})

export const section = style({
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "24px",
    boxShadow: vars.shadows.sm,
    border: `1px solid ${vars.colors.border}`,
})

export const sectionTitle = style({
    fontSize: "24px",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: "16px",
    paddingBottom: "8px",
    borderBottom: `1px solid ${vars.colors.border}`,
})

export const field = style({
    marginBottom: "16px",
})

export const label = style({
    display: "block",
    fontSize: "16px",
    fontWeight: "500",
    color: vars.colors.textLight,
    marginBottom: "8px",
})

export const input = style({
    width: "100%",
    padding: "12px",
    border: `2px solid ${vars.colors.border}`,
    borderRadius: "8px",
    fontSize: "16px",
    backgroundColor: "white",
    transition: "border-color 0.2s ease",
    ":focus": {
        outline: "none",
        borderColor: vars.colors.primary,
        boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
    },
})

export const textarea = style([
    input,
    {
        resize: "vertical",
        minHeight: "80px",
    },
])

export const uploadButton = style({
    backgroundColor: vars.colors.textLight,
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primary,
        transform: "translateY(-1px)",
    },
    ":disabled": {
        backgroundColor: vars.colors.disabled,
        cursor: "not-allowed",
        transform: "none",
    },
})

export const value = style({
    padding: "12px",
    backgroundColor: vars.colors.backgroundLight,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: "8px",
    fontSize: "16px",
    color: vars.colors.text,
    lineHeight: "1.5",
})

export const link = style({
    color: vars.colors.primary,
    textDecoration: "none",
    wordBreak: "break-all",
    ":hover": {
        textDecoration: "underline",
    },
})

export const preview = style({
    border: `2px solid ${vars.colors.border}`,
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: vars.shadows.md,
})

export const previewHero = style({
    position: "relative",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

export const previewOverlay = style({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
})

export const previewTitle = style({
    fontSize: "32px",
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginBottom: "16px",
})

export const previewSubtitle = style({
    fontSize: "20px",
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    marginBottom: "16px",
})

export const previewDescription = style({
    fontSize: "16px",
    color: "white",
    textAlign: "center",
    marginBottom: "24px",
    maxWidth: "600px",
})

export const previewButton = style({
    backgroundColor: vars.colors.primary,
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
}) 