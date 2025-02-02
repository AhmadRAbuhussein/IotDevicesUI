interface DatePickerProps {
    label: string
    inputFormat?: string
    handleChange: (value: string) => any
    value: Date | undefined | string
    error?: string
    disabled?: boolean
    required?: boolean
    min?: Date
    max?: Date
    placeholder?: string
    customStyle?:React.CSSProperties

}

  export default DatePickerProps;
