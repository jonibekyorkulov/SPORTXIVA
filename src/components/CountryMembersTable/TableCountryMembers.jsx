import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FlagImg } from '../../global_styles/styles';
import { CountryMembersFlagCountry } from './style';
import { participant_count } from '../../utils/API_urls';
import { GuestsDataUrl } from './requests';
import language from '../../utils/language.json'
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#1F1F1F',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '20px',
    color: '#1F1F1F',
    fontStyle: 'normal',
    lineHeight: 'normal',
    padding: '25px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#F3F3F3",
    borderRadius: '15px'
  },
}));

export default function TableCountryMembers() {

    const lang = useSelector(state => state.language)
    const [rows, setRows] = React.useState([])
React.useEffect(() => {
    GuestsDataUrl(participant_count, (response) => {
        console.log(response.data);
        setRows(response.data)
    }, (error) => {
        console.log(error)
    })
    }, [])

  return (
    <TableContainer>
      <Table sx={{ minWidth: '100%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="left">{language.country[lang]}</StyledTableCell>
            <StyledTableCell align="left">{language.number_of_participants[lang]}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="left"><CountryMembersFlagCountry><FlagImg><img src={row.country__flag} alt="Image" /></FlagImg><span>{row.country__name}</span></CountryMembersFlagCountry></StyledTableCell>
              <StyledTableCell align="left">{row.members_count}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

