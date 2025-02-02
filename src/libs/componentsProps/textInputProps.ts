import BaseInputProps from "./baseInputProps";


interface TextInputProps extends BaseInputProps {
    value: string | number | null | undefined
    onChange: (value: string, name?: any) => void
    focused?: boolean
    placeholder?: string
    isDisabled?: boolean
    required?: boolean
    isShrink?: boolean
    className?: string
    icon?: JSX.Element
    capitalizeFirstLetter?: boolean
    customStyle?: React.CSSProperties
    multiline?: boolean
    password?: boolean
    styledError?: boolean
    type?: 'text' | 'number' | 'date' | 'password'
}

export default TextInputProps;
