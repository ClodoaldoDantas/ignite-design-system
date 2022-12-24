import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 32,
  right: 32,
  width: 360,
  margin: 0,
  zIndex: 999,
  maxWidth: '100vw',
  outline: 'none',
  listStyle: 'none',
})

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  padding: '$3 $5',
  border: '1px solid $gray600',
  borderRadius: 6,

  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'flex-start',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$white',
  marginBottom: 4,
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '$gray200',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
