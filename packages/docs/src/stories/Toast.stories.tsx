import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Button, ToastComponent, ToastComponentProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Feedback/Toast',
  component: ToastComponent,
} as Meta<ToastComponentProps>

export const Primary: StoryObj<ToastComponentProps> = {
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <Button onClick={() => setOpen(true)}>
            Finalizar <ArrowRight weight="bold" />
          </Button>

          {Story({
            args: {
              title: 'Agendamento realizado',
              description: 'Quarta-feira, 23 de Outubro às 16h',
              open,
              onOpenChange: setOpen,
            },
          })}
        </>
      )
    },
  ],
}
