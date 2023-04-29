import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Dropdown from '../Dropdown/index'
import Tabs from "../Tabs"
import New from "./New"
import { NewsContainer, Container, LoadingText } from "./styles"

const News = () => {
  const [newsLoading, setNewsLoading] = useState(false)
  const [news, setNews] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const [activeTab, setActiveTab] = useState('all')

  const handleGetNews = async (option) => {
    setNewsLoading(true)
    const { data } = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${option}&page=0`)
    setNews(data.hits)
    setCurrentPage(data.page)
    setTotalPages(data.nbPages)
    setNewsLoading(false)
  }



  const tabChanged = (tab) => {
    setActiveTab(tab)
  }

  const generateTab = () => {
    switch (activeTab) {
      case 'all':
        return (
          <NewsContainer >
            {news.map(row => (
              <New content={row} />
            ))}
          </NewsContainer>
        )
      case 'my-faves':
        return (
          <NewsContainer>
            {JSON.parse(localStorage.getItem('favs')).map(row => (
              <New content={row} isFavorite={true} />
            ))}
          </NewsContainer>
        )
      default:
        return (
          <NewsContainer>
            {news.map(row => (
              <New content={row} />
            ))}
          </NewsContainer>
        )
    }
  }

  return (
    <Container>
      <Tabs tabChanged={tabChanged} />
      {activeTab === 'all' &&
        <Dropdown
          handleGetNews={(option) => handleGetNews(option)}
        />
      }
      {
        newsLoading ?
          <LoadingText>Cargando noticias ...</LoadingText>
          :
          generateTab()
      }
    </Container>
  )
}

export default News