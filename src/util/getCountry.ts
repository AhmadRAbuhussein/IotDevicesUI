import {Countries} from "src/consts/countries";

export const getCountry=(countryCode:string)=>{
    const country=Countries.find(country=>countryCode==country.value)

    return country?.label ?? '-'
}
