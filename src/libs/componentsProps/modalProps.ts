
interface ModalProps {
  children: JSX.Element
  isOpen: boolean
  onClose: () => void
  primaryButtonTitle?: string
  primaryButtonAction?: () => void
  primaryButtonIsDisabled?: boolean
  secondaryButtonTitle?: string
  secondaryButtonAction?: () => void
  secondaryButtonIsDisabled?: boolean
  title?: string
  primaryButtonVariant?:'primary' | 'secondary' | 'text' | 'danger'
  secondaryButtonVariant?:'primary' | 'secondary' | 'text' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean;
  modalStyle?: React.CSSProperties
}

export default ModalProps;
