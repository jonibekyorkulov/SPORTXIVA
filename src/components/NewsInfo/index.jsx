import React, { useEffect, useState } from 'react'
import { MainWrapper } from '../../global_styles/styles'
import { RegisterTitle } from '../Register/styles'
import {InfoWrapper, NewsInfoImg, NewsInfoImgText, NewsInfoText } from './styles'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
export default function NewsInfo() {
  const { state } = useLocation()
  console.log(state);
  const [NewsInfo, setNewsInfo] = useState(state)
  const lang = useSelector(state => state.language)
  
  return (
    <InfoWrapper>
      <MainWrapper>
      <RegisterTitle>
          <h1>{NewsInfo[`name_${lang}`]}</h1>
      </RegisterTitle>
         <NewsInfoImgText>
          <NewsInfoImg src={NewsInfo?.image || NewsInfo?.photo} alt="" />
          <NewsInfoText>{NewsInfo[`description_${lang}`]}</NewsInfoText>  
         </NewsInfoImgText>
      </MainWrapper>
    </InfoWrapper>
  )
}
