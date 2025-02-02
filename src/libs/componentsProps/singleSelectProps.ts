
export type SelectItem = {
  value: string | number;
  label: string | undefined;
}
interface SingleSelectProps {
  name: string
  onChange: (value: string | number, name?:string) => void
  value: string | number | undefined
  isDisabled?: boolean
  label: string
  id?: string
  items: Array<SelectItem>
  error?: string
  placeholder?: string
  icon?: JSX.Element
  required?: boolean
}

export default SingleSelectProps;
