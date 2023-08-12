import { MainWrapper, Title } from "../../global_styles/styles";
import { CountryMembersTitle, IshtirokchilarWrapper, TableContainer } from "./style";
import TableCountryMembers from "./TableCountryMembers";
import language from '../../utils/language.json'
import { useSelector } from "react-redux";


export default function CountryMembersTable() {
    const lang = useSelector(state => state.language)
    return (
        <MainWrapper>
            <CountryMembersTitle>
            <Title>{language.country_menber[lang]}</Title>
            </CountryMembersTitle>
            <TableContainer>
                <TableCountryMembers />
            </TableContainer>
        </MainWrapper>
    )
}