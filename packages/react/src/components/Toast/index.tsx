import { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import * as Toast from '@radix-ui/react-toast'
import * as S from './styles'

export interface ToastComponentProps
  extends ComponentProps<typeof S.ToastContainer> {
  title: string
  description: string
}

export function ToastComponent({
  title,
  description,
  ...rest
}: ToastComponentProps) {
  return (
    <Toast.Provider swipeDirection="right">
      <S.ToastContainer {...rest}>
        <S.ToastTitle>{title}</S.ToastTitle>

        <S.ToastDescription asChild>
          <time>{description}</time>
        </S.ToastDescription>

        <S.ToastAction altText="close toast" asChild>
          <button>
            <X size={20} />
          </button>
        </S.ToastAction>
      </S.ToastContainer>

      <S.ToastViewport />
    </Toast.Provider>
  )
}

ToastComponent.displayName = 'Toast'
