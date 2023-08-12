import { MainWrapper, Title } from "../../global_styles/styles";
import { MembersTitle, TableContainerMembers } from "./style";
import TableGuests from "./TableMembers";
import language from '../../utils/language.json'
import { useSelector } from "react-redux";



export default function MembersTable() {

    const lang = useSelector(state => state.language)

    return (
        <MainWrapper>
            <MembersTitle>
                <Title>{language.participants[lang]}</Title>
            </MembersTitle>
            <TableContainerMembers>
                <TableGuests />
            </TableContainerMembers>
        </MainWrapper>
    )
}