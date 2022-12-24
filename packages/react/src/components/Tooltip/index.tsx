import { ReactNode } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import * as S from './styles'

export interface TooltipComponentProps {
  content: string
  children: ReactNode
}

export function TooltipComponent({ content, children }: TooltipComponentProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <S.TooltipContent sideOffset={5}>
            {content}
            <S.TooltipArrow />
          </S.TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

TooltipComponent.displayName = 'Tooltip'
