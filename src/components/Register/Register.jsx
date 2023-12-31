import React from 'react'
import { RegisterGuest, RegisterImage, RegisterTitle, PhotoContaner, RegisterRight, RegisterContainer, RegisterRightInputs, RegisterRightBtn, RegWrapper } from './styles'
import { MainWrapper } from '../../global_styles/styles'
import CountrySelect from '../CountrySelect/CountrySelect'
import Checkbox from '@mui/material/Checkbox';
import { Button, TextField } from '@mui/material'
import SportSelector from '../CountrySelect/SportSelector'
import GenderSelector from '../CountrySelect/GenderSelector'
import { useState } from 'react'
import { registr } from '../../utils/API_urls'
import { setRegister } from './requests'
import { useNavigate } from "react-router-dom"
import BasicDatePicker from './BasicDatePicker'
import { useSelector } from 'react-redux';
import language from '../../utils/language.json'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Register() {

  const navigate = useNavigate();
  const lang = useSelector(state => state.language)

  const [images, setImages] = useState(null)
  const [countId, setCountId] = useState(null)
  const [countId1, setCountId1] = useState(null)
  const [jins, setJins] = useState(null)
  const [name1, setName1] = useState(null)
  const [name2, setName2] = useState(null)
  const [sana, setSana] = useState(null)
  const [guest, setGuest] = useState(false)

  const setReg = () => {
    setRegister(registr, {
      country: countId1,
      birthday: sana,
      first_name: name1,
      last_name: name2,
      gender: jins,
      sport: countId,
      guest: guest
    }, (response) => {
      if (response.data?.id) {
        if(guest){
          navigate('/guests');
        }else{
          navigate('/members');
        }
      }
    }, (error) => {
      console.log(error)
    })
  }

  const getImages = (_images) => {
    setImages(_images[0])
  }

  return (
    <RegWrapper>
      <MainWrapper>
        <RegisterTitle>
          <h1>{language.Registr[lang]}</h1>
        </RegisterTitle>
        <RegisterContainer>
          <RegisterImage>
            {images ? <img src={images.photo_1} alt="Kurash rasmlari" /> : <></>}
          </RegisterImage>
          <RegisterRight>
            <RegisterRightInputs>
              <div>
                <p style={{ margin: '10px 0' }}>{language.country[lang]}</p>
                <CountrySelect setCountId1={(id) => { setCountId1(id) }} title={`${language.choose[lang]}`} />
              </div>
              <div>
                <p style={{ margin: '10px 0 2px 0' }}>{language.Datebirth[lang]}</p>
                <BasicDatePicker setFunction={(val) => {setSana(val)}}/>
              </div>
            </RegisterRightInputs>
            <RegisterRightInputs>
              <div>
                <p style={{ margin: '0 0 10px 0' }}>{language.Name[lang]}</p>
                <TextField sx={{width: '300px'}} id="outlined-basic" label={`${language.Name[lang]}`} variant="outlined" onChange={(event) => { setName1(event?.target?.value) }}/>
              </div>
              <div>
                <p style={{ margin: '0 0 10px 0' }}>{language.Surname[lang]}</p>
                <TextField sx={{width: '300px'}} id="outlined-basic" label={`${language.Surname[lang]}`} variant="outlined" onChange={(event) => { setName2(event?.target?.value) }}/>
              </div>
            </RegisterRightInputs>
            <RegisterRightInputs>
              <div>
                <p style={{ margin: '10px 0' }}>{language.sporttype[lang]}</p>
                {!guest?<SportSelector title={`${language.choose[lang]}`} setCountId={(id) => { setCountId(id) }} getImages={getImages} />:<></>}
              </div>

              <div>
                <p style={{ margin: '10px 0' }}>{language.gender[lang]}</p>
                <GenderSelector title={`${language.choose[lang]}`} setJins={(id) => { setJins(id) }} />
              </div>

            </RegisterRightInputs>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", margin: "40px 0" }}>
              <Checkbox 
                {...label}
                onChange={e => {
                  setGuest(e.target.checked);
                }} 
              />
              <RegisterGuest style={{ color: "#0093DD" }}>{language.RegistrationGuest[lang]}</RegisterGuest>
            </div>
            <RegisterRightBtn>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "20px 35px",
                  boxShadow: "none",
                  textTransform: "none",
                  fontFamily: "Nunito Sans",
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal',
                  borderRadius: "12px"
                }}
                onClick={setReg}
              >
                {language.Registr[lang]}
              </Button>
              <a target="_blank" href={images?.file}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "20px 35px",
                  boxShadow: "none",
                  textTransform: "none",
                  fontFamily: "Nunito Sans",
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal',
                  borderRadius: "12px"
                }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 23.3625C17.8 23.3625 17.6125 23.3313 17.4375 23.2688C17.2625 23.2063 17.1 23.1 16.95 22.95L11.55 17.55C11.25 17.25 11.1063 16.9 11.1188 16.5C11.1313 16.1 11.275 15.75 11.55 15.45C11.85 15.15 12.2063 14.9938 12.6188 14.9813C13.0313 14.9688 13.3875 15.1125 13.6875 15.4125L16.5 18.225V7.5C16.5 7.075 16.6438 6.71875 16.9313 6.43125C17.2188 6.14375 17.575 6 18 6C18.425 6 18.7813 6.14375 19.0688 6.43125C19.3563 6.71875 19.5 7.075 19.5 7.5V18.225L22.3125 15.4125C22.6125 15.1125 22.9688 14.9688 23.3813 14.9813C23.7938 14.9938 24.15 15.15 24.45 15.45C24.725 15.75 24.8688 16.1 24.8813 16.5C24.8938 16.9 24.75 17.25 24.45 17.55L19.05 22.95C18.9 23.1 18.7375 23.2063 18.5625 23.2688C18.3875 23.3313 18.2 23.3625 18 23.3625ZM9 30C8.175 30 7.46875 29.7063 6.88125 29.1188C6.29375 28.5312 6 27.825 6 27V24C6 23.575 6.14375 23.2188 6.43125 22.9313C6.71875 22.6438 7.075 22.5 7.5 22.5C7.925 22.5 8.28125 22.6438 8.56875 22.9313C8.85625 23.2188 9 23.575 9 24V27H27V24C27 23.575 27.1438 23.2188 27.4313 22.9313C27.7188 22.6438 28.075 22.5 28.5 22.5C28.925 22.5 29.2812 22.6438 29.5688 22.9313C29.8563 23.2188 30 23.575 30 24V27C30 27.825 29.7063 28.5312 29.1188 29.1188C28.5312 29.7063 27.825 30 27 30H9Z" fill="white" />
                </svg>
                {language.download[lang]}
              </Button>
              </a>
            </RegisterRightBtn>
          </RegisterRight>

        </RegisterContainer>
        <PhotoContaner>
          <RegisterTitle>
            <h1>{language.PhotoGallery[lang]}</h1>
          </RegisterTitle>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {images ? <img style={{ width: "400px", borderRadius: '10px' }} src={images.photo_2} alt="photo_1" /> : <></>}
            {images ? <img style={{ width: "400px", borderRadius: '10px' }} src={images.photo_3} alt="photo_1" /> : <></>}
            {images ? <img style={{ width: "400px", borderRadius: '10px' }} src={images.photo_4} alt="photo_1" /> : <></>}
          </div>
        </PhotoContaner>
      </MainWrapper>
    </RegWrapper>
  )
}
