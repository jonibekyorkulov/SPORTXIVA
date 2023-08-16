import React, { useEffect, useState } from 'react'
import { RegisterTitle } from '../Register/styles'
import { MainWrapper } from '../../global_styles/styles'
import { WelcomeContainer } from '../Welcome/styles'
import img1 from '../../imgs/osh.png'
import { NewsContainer, NewsImgCard, NewsRight, NewsWalksLink, NewsWalksSlickImageWrapper, NewsWalksSlickInfo, NewsWalksSlickItem, NewsWalksSlickTitle, NewsWelcomeContainer, NewsWrapper } from './styles'
import { getNews } from './request'
import { news } from '../../utils/API_urls'
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'

export default function News() {
  const [News, setNews] = useState([])

  const lang = useSelector(state => state.language)

  useEffect(() => {
    getNews(news, (response) => {
      setNews(response.data)
    }, (error) => {
      console.log(error)
    })
  }, [])
  return (
    <NewsWrapper>
      <MainWrapper>
        <RegisterTitle>
          <h1>{language.news_page[lang]}</h1>
        </RegisterTitle>
        <NewsContainer>
          <NewsImgCard >
            {
              News.length > 0 && <img src={News[News.length-1]?.image} alt="" />
            }
          </NewsImgCard>
          <NewsRight>
            <h1>{News[News.length-1]?.[`name_${lang}`]}</h1>
              <div style={{width: "600px", overflow: "hidden"}}>{News[News.length-1]?.[`description_${lang}`]}</div>
          </NewsRight>
        </NewsContainer>

        <NewsWelcomeContainer>
          {
           News.length > 0 && News.map(item => {
              return (
                <NewsWalksSlickItem key={item.id}>
                  <NewsWalksSlickImageWrapper>
                    <img src={item?.image} alt="Uzbekistan_Airways" />
                  </NewsWalksSlickImageWrapper>
                  <NewsWalksSlickTitle>{item?.[`name_${lang}`]}</NewsWalksSlickTitle>
                  <NewsWalksSlickInfo>
                    {item?.[`description_${lang}`]?.slice(0,158)}...
                  </NewsWalksSlickInfo>
                  <NewsWalksLink to={`/info`} state={item}>{language.more[lang]}</NewsWalksLink>
                </NewsWalksSlickItem>
              )
            })
          }
        </NewsWelcomeContainer>
      </MainWrapper>
    </NewsWrapper>
  )
}
