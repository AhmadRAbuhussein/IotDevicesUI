import {useEffect, useState} from "react";
import {Alert, Box} from "@mui/material";
import {useFormik} from "formik";
import {TextInput, PasswordInput, ButtonComponent} from "src/components";
import {SignIn, signInInitialValues, signInValidationSchema} from "src/types/signInType";
import {useNavigate} from "react-router-dom";
import {setTokens, setUser} from "src/state/user";
import Cookies from "js-cookie";
import {useSelector, useDispatch} from "react-redux";
import {getIsAuthenticated} from "src/state/selectors";
import {theme} from "src/theme";
import {Person, Https} from "@mui/icons-material";
import { useLoginMutation } from "src/data/auth";
import { jwtDecode } from "jwt-decode";

const SignInPage = () => {
    const [signIn, {isLoading}] = useLoginMutation();
    const [apiError] = useState("");
    const formik = useFormik({
        initialValues: signInInitialValues,
        validationSchema: signInValidationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async (values: SignIn) => {
            const response = await signIn(values);
            if ('data' in response) {
                Cookies.set('token', response.data.access_token);
                dispatch(setTokens({
                    accessToken: response.data.access_token,
                }));

                const decodedToken: any = jwtDecode(response.data.access_token)
                const user = {
                    id: decodedToken.sub,
                    email: decodedToken.email,
                    role: decodedToken.role,
                };
                
                dispatch(setUser({
                    email: user.email,
                    id: user.id,
                    role: user.role
                }));
                navigate("/devices");
            }
        },
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(getIsAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/devices')
        }
    }, [])

    const {values, setFieldValue, errors, handleSubmit} = formik;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
            }}>
            <Box
                sx={{
                    maxWidth: "448px",
                    width: "100%",
                    border: `1px solid ${theme.palette.secondary.lightGray}`,
                    borderRadius: "18px",
                    padding: "2rem",
                }}>
                {apiError && <Alert severity='error'>{apiError}</Alert>}
                <Box sx={{display: "flex", justifyContent: "center", width: "100%", m: 1}}>
                    <Box
                        component="img"
                        sx={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100px",
                        }}
                        alt="nxgen"
                        src={"https://media.licdn.com/dms/image/v2/D4D0BAQFyiwXoBUvMGw/company-logo_200_200/company-logo_200_200/0/1720425913705/nxgen_technology_ag_logo?e=1746662400&v=beta&t=M0B0Ew2Wj_c9tTxuKUwiMFu2rAAGMnAp9lQFA5CzvCQ"}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>

                    <TextInput
                        name="email"
                        value={values.email}
                        onChange={(inputValue) => setFieldValue("email", inputValue)}
                        label=""
                        icon={<Person/>}
                        error={errors?.email}
                        placeholder={'Sign In'}
                        required
                    />
                    <PasswordInput
                        name="password"
                        value={values.password}
                        icon={<Https/>}
                        onChange={(inputValue: string) => {
                            setFieldValue("password", inputValue);
                        }}
                        label=""
                        placeholder={'Password'}
                        error={errors?.password}
                        showIcon
                        required={true}
                    />

                    <ButtonComponent
                        name="signIn"
                        isLoading={isLoading}
                        type="primary"
                        title={'Sign In'}
                        onClick={() => handleSubmit()}
                    />
                </Box>
            </Box>

        </Box>
    );
};

export default SignInPage;
