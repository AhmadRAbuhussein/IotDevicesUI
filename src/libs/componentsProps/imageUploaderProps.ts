
interface ImageUploaderProps {
    onFilesAccepted: (files: File[] | undefined, fileName?: string) => void,
    dropzoneText?: string,
    acceptedFiles?: Array<string>,
    imageSrc: string
    filesLimit?: number
    title?: string 
}

export default ImageUploaderProps;