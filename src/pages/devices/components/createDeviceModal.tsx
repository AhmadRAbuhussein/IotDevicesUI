import {Modal, TextInput} from "src/components";
import {useState} from "react";
import {Box} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useTranslation} from "react-i18next";
import { CreateDeviceDataModel } from "src/types/deviceData";
import { CreateDeviceModel } from "src/types/devices";

type Props = {
    onClose: () => void
    onCreate: (values: CreateDeviceModel | undefined) => void
    isLoading: boolean;
}
const CreateDeviceSchema = Yup.object().shape({
    name: Yup.string().required('this field is required'),
})


const CreateDeviceModal = (props: Props) => {
    const {t} = useTranslation('translation')
    const [validateOnChange, setValidateOnChange] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validateOnBlur: false,
        validateOnChange: validateOnChange,
        validationSchema: CreateDeviceSchema,
        onSubmit: (values) => {
            props.onCreate(values)
        }
    })
    return <Modal isLoading={props.isLoading} onClose={() => props.onClose()} isOpen={true}
                  primaryButtonTitle={'Create'}
                  title={'Create'}
                  secondaryButtonTitle={'Cancel'} secondaryButtonAction={() => props.onClose()}
                  primaryButtonAction={() => {
                      formik.handleSubmit();
                      setValidateOnChange(true)
                  }}>
        <Box width={"100%"} display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Box width={'350px'} display={'flex'}>
                <TextInput className={'width:100px'} label={'Name'} value={formik?.values.name ?? ''}
                           onChange={(e) => formik.setFieldValue('name', e)}
                           error={formik.errors.name}
                />
            </Box>
        </Box>
    </Modal>

}
export default CreateDeviceModal
