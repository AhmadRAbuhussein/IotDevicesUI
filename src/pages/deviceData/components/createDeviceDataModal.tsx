import {Modal, TextInput} from "src/components";
import {useState} from "react";
import {Box} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import { CreateDeviceDataModel } from "src/types/deviceData";

type Props = {
    onClose: () => void
    onCreate: (values: CreateDeviceDataModel | undefined) => void
    isLoading: boolean;
}
const CreateDeviceDataSchema = Yup.object().shape({
    temperature: Yup.string().required('this field is required'),
    humidity: Yup.string().required('this field is required'),
    pressure: Yup.string().required('this field is required'),
})


const CreateDeviceDataModal = (props: Props) => {
    const [validateOnChange, setValidateOnChange] = useState(false)
    const formik = useFormik({
        initialValues: {
            temperature: 0,
            humidity: 0,
            pressure: 0
        },
        validateOnBlur: false,
        validateOnChange: validateOnChange,
        validationSchema: CreateDeviceDataSchema,
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
                <TextInput className={'width:100px'} label={'Temperature'} value={formik?.values.temperature ?? ''}
                           onChange={(e) => formik.setFieldValue('temperature', Number(e))}
                           error={formik.errors.temperature}
                />
            </Box>
            <Box width={'350px'} display={'flex'}>
                <TextInput className={'width:100px'} label={'Humidity'} value={formik?.values.humidity ?? ''}
                           onChange={(e) => formik.setFieldValue('humidity', Number(e))}
                           error={formik.errors.temperature}
                />
            </Box>
            <Box width={'350px'} display={'flex'}>
                <TextInput className={'width:100px'} label={'Pressure'} value={formik?.values.pressure ?? ''}
                           onChange={(e) => formik.setFieldValue('pressure', Number(e))}
                           error={formik.errors.temperature}
                />
            </Box>
        </Box>
    </Modal>

}
export default CreateDeviceDataModal;
