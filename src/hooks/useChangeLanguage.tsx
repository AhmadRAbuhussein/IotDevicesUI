import {useDispatch, useSelector} from "react-redux";
import {getLanguage} from "src/state";
import i18n from "src/i18n";
import {setLanguage} from "src/state/app";

const useChangeLanguage = () => {
    const dispatch = useDispatch()
    const lang: string = useSelector(getLanguage);
    const switchLanguage = async () => {
        const newLang = lang == "en" ? "ar" : "en";
        document.body.dir = newLang === "en" ? "ltr" : "rtl";
        await i18n.changeLanguage(newLang).then();
        dispatch(setLanguage(newLang))
    };
    return {
        switchLanguage,
        lang,
    };
};
export default useChangeLanguage;
