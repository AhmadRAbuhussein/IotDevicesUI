
export type SelectItem = {
  value: string | undefined
  label: string | undefined
}
interface MultiSelectProps {
  name: string
  onChange: (value:Array<string | undefined>, name?:string) => void
  value: string | undefined
  isDisabled?: boolean
  label: string
  id: string
  items: Array<SelectItem>
  error?: string
  placeholder?: string
  icon?: JSX.Element
  required?: boolean
}

export default MultiSelectProps;
