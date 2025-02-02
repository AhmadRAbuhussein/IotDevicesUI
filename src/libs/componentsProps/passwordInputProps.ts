import BaseInputProps from "./baseInputProps";


interface PasswordInputProps extends BaseInputProps {
    value: string
    onChange: (value:string, name?:any) => void
    showIcon?: boolean
    required?:boolean
    placeholder?: string
    icon?:JSX.Element
}

export default PasswordInputProps;
