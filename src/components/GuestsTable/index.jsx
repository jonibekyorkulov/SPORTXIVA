import { MainWrapper, Title } from "../../global_styles/styles";
import { GuestsTitle, TableContainer } from "./style";
import TableGuests from "./TableGuests";
import { useSelector } from "react-redux";
import language from '../../utils/language.json'


export default function GuestsTable() {

    const lang = useSelector(state=>state.language)

    return (
    <MainWrapper>
        <GuestsTitle>
          <Title>{language.foreign_guests[lang]}</Title>
        </GuestsTitle>
        <TableContainer>
            <TableGuests />
        </TableContainer>
    </MainWrapper>
    )
}