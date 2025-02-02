
interface ButtonProps {
  title?: string | null
  icon?: React.ReactNode
  onClick: () => any
  type: 'primary' | 'secondary' | 'text' | 'danger'
  disabled?: boolean
  size?: 'small' | 'regular'
  isLoading?: boolean
  customStyle?:React.CSSProperties
  className?:string
  fontSize?: string | number;
  circularProgressSize?: number
  name?: string;
}

export default ButtonProps;
