import type { StoryObj, Meta } from '@storybook/react'
import { ToastComponent, ToastComponentProps } from '@ignite-ui/react'

export default {
  title: 'Feedback/Toast',
  component: ToastComponent,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastComponentProps>

export const Primary: StoryObj<ToastComponentProps> = {}
