import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/theme.css';

export const overlay = style({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
});

export const modal = style({
    background: vars.colors.white,
    padding: vars.space.lg,
    borderRadius: vars.radii.lg,
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

export const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: vars.space.md,
});

export const badge = style({
    background: vars.colors.primary,
    color: vars.colors.white,
    padding: `${vars.space.xs} ${vars.space.sm}`,
    borderRadius: vars.radii.sm,
    fontWeight: 'bold',
});

export const closeBtn = style({
    background: 'transparent',
    border: 'none',
    fontSize: vars.fontSizes.xl,
    cursor: 'pointer',
    color: vars.colors.textLight,
});

export const content = style({
    marginBottom: vars.space.lg,
});

export const title = style({
    fontSize: vars.fontSizes.lg,
    fontWeight: 'bold',
    marginBottom: vars.space.md,
});

export const footer = style({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: vars.space.sm,
});

const buttonBase = style({
    border: 'none',
    padding: `${vars.space.sm} ${vars.space.md}`,
    borderRadius: vars.radii.md,
    cursor: 'pointer',
    fontWeight: 'bold',
});

export const todayBtn = style([
    buttonBase,
    {
        background: vars.colors.gray[100],
        color: vars.colors.text,
    },
]);

export const confirmBtn = style([
    buttonBase,
    {
        background: vars.colors.primary,
        color: vars.colors.white,
    },
]); 