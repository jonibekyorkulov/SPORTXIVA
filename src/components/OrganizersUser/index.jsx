import { MainWrapper, Title } from "../../global_styles/styles";
import { WelcomeContainer } from "../Welcome/styles";
import { OrgUsersUrl } from "./requests";
import { OrganizersContainer, OrganizersPhoto, OrganizersTitle, OrganizersUserinfo, OrganizersUserName } from "./style";
import * as React from 'react';
import { organizers } from "../../utils/API_urls";
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";

export default function OrganizersUser() {
  const lang = useSelector(state => state.language)

    const [rows, setRows] = React.useState([])
    React.useEffect(() => {
        OrgUsersUrl(organizers, (response) => {
            setRows(response.data)
        }, (error) => {
            console.log(error)
        })
        }, [])
    return (
    <MainWrapper>
        <OrganizersTitle>
          <Title>{language.Organizers[lang]}</Title>
        </OrganizersTitle>
        <WelcomeContainer>
            {/* <OrganizersContainer>
                {
                    rows.map((elem, index) => {
                        return (
                            <OrganizersPhoto key={index}>
                                <img  src={elem.image} alt="photo_1" />
                                <OrganizersUserName>{elem.full_name}</OrganizersUserName>
                                <OrganizersUserinfo>{elem.title}</OrganizersUserinfo>
                            </OrganizersPhoto>
                        )
                    })
                }
            </OrganizersContainer> */}
            <List sx={{ width: '100%', bgcolor: 'background.paper', mb: "100px" }}>
                {
                    rows.map((elem, index) => {
                        return (
                            <>
                                <ListItem alignItems="flex-start" key={index}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={elem.image} style={{width:"100px", height: "100px", marginRight:"10px", marginBottom: "15px"}} />
                                </ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography variant="h5" sx={{ pb: 2, pt:2 }}>{elem[`full_name_${lang}`]}</Typography>}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {elem.title}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider  component="li" sx={{ mb: "50px" }} />
                            </>
                        )
                    })
                }
            </List>
        </WelcomeContainer>

    </MainWrapper>
    )
}