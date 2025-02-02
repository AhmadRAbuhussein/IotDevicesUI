
type DropDownItem = {
    value: string | undefined
    label: string | undefined
  }
interface DropDownProps {
    options: Array<DropDownItem>
    label?: string
    value: string | undefined
    onChange: (value: any) => void
    error?: string|any
    placeholder?: string
    required?: boolean
}
export default DropDownProps
