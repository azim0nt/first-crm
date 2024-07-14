import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ruJSON from './locale/ru.json'
import uzJSON from './locale/uz.json'
i18n.use(initReactI18next).init({
    resources: {
        ru: { ...ruJSON },
        uz: {...uzJSON },
    },
    lng: "ru",
    fallbackLng: "ru",
});
export default i18n;