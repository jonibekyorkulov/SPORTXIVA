import React, { useState } from 'react'
import { FooterBottom, FooterCommentForm, FooterContainer, FooterImageWrapper, FooterLeft, FooterReight, FooterReightLink, FooterReightNav, FooterWrapper } from './styles'
import { MainWrapper } from '../../global_styles/styles'
import { Button } from '@mui/material'
import { countCommet, getMap } from './requests'
import { footer_map, ideaguests } from '../../utils/API_urls'
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'

export default function Footer() {
    const lang = useSelector(state => state.language)

    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [text, setText] = useState('')

    const clickHandler = () => {
        countCommet(ideaguests, {
            first_name,
            last_name,
            text
        },(response) => {
            alert("Fikringiz uchun rahmat!!!")
        }, (error) => {
            console.log(error)
        })
    }

    const [map, setFooterMap] = React.useState([])
    React.useEffect(() => {
        getMap(footer_map, (response) => {
            setFooterMap(response.data[0])
        }, (error) => {
            console.log(error)
        })
        }, [])

  return (
    <FooterWrapper>
        <MainWrapper>
            <FooterContainer>
                <FooterLeft>
                    <h5>{language.feedback[lang]}</h5>
                    <FooterCommentForm>
                        <input type="text" placeholder={`${language.your_name[lang]}`} onChange={(event)=> {setFirst_name(event.target.value)}}/>
                        <input type="text" placeholder={`${language.your_email[lang]}`} onChange={(event)=> {setLast_name(event.target.value)}}/>
                        <textarea onChange={(event)=> {setText(event.target.value)}}></textarea>
                    </FooterCommentForm>
                    <Button
                        sx={{
                            color: "#fff",
                            borderColor: "#fff",
                            textTransform: "capitalize",
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                            padding: '15px 60px',
                            borderRadius: '12px',
                            '&:hover': {
                                borderColor: "#fff",
                            }
                        }}
                        onClick={clickHandler}
                        variant="outlined"
                    >
                        {language.Send[lang]}
                    </Button>
                </FooterLeft>
                <FooterReight>
                    <FooterReightNav>
                        <FooterReightLink>{language.home_page[lang]}</FooterReightLink>
                        <FooterReightLink>{language.news_page[lang]}</FooterReightLink>
                        <FooterReightLink>{language.Events[lang]}</FooterReightLink>
                        <FooterReightLink>{language.Organizers[lang]}</FooterReightLink>
                    </FooterReightNav>
                    <FooterImageWrapper>
                        <img src={map.photo} alt="footer image" />
                    </FooterImageWrapper>
                </FooterReight>
            </FooterContainer>
            <FooterBottom>
                <p>{language.MinistryUzbekistan[lang]}</p>
            </FooterBottom>
        </MainWrapper>
    </FooterWrapper>
  )
}
