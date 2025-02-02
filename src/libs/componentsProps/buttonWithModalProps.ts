
interface ButtonWithModalProps {
  isOpen: boolean
  onClose: () => void
  actionButtonTitle: string;
  actionButtonAction: (values?: any) => void
  primaryButtonTitle: string
  primaryButtonAction: () => void
  primaryButtonIsDisabled?: boolean
  secondaryButtonTitle?: string
  secondaryButtonAction?: () => void
  secondaryButtonIsDisabled?: boolean
  modalTitle: string
  modalDescription: string
  actionButtonType?: 'primary' | 'secondary' | 'text'
  customStyle?:React.CSSProperties,
  className?:string

}

export default ButtonWithModalProps;
