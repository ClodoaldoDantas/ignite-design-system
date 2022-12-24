import type { StoryObj, Meta } from '@storybook/react'
import { Text, TooltipComponent, TooltipComponentProps } from '@ignite-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: TooltipComponent,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  args: {
    content: '26 de Outubro - Disponível',
    children: <Text as="span">26</Text>,
  },
} as Meta<TooltipComponentProps>

export const Primary: StoryObj<TooltipComponentProps> = {}
