

interface BaseInputProps{
    value:any
    onChange: (value:never, event: InputEvent) => any
    label?: any
    name?: string
    error?: string
}

export default BaseInputProps;
