import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FlagImg } from '../../global_styles/styles';
import { participants } from '../../utils/API_urls';
import { GuestsDataUrl } from './requests';
import { MembersFlagCountry } from './style';
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


export default function TableGuests() {

  const lang = useSelector(state => state.language)

    const [rows, setRows] = React.useState([])
React.useEffect(() => {
    GuestsDataUrl(participants + `?guest=False`, (response) => {
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
            <StyledTableCell align="left">{language.name_user[lang]}</StyledTableCell>
            <StyledTableCell align="left">{language.sporttype[lang]}</StyledTableCell>
            <StyledTableCell align="left">{language.date_of_registration[lang]}</StyledTableCell>
            <StyledTableCell align="left">{language.country[lang]}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.full_name}</StyledTableCell>
              <StyledTableCell align="left">{row.sport}</StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>
              <StyledTableCell align="left"><MembersFlagCountry><FlagImg><img src={row.flag} alt="Image" /></FlagImg><span>{row.country}</span></MembersFlagCountry></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

