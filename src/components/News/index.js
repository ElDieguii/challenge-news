import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Dropdown from '../Dropdown/index';
import Tabs from "../Tabs";
import New from "./New";
import { NewsContainer, Container, LoadingText } from "./styles";

const News = () => {
  const [newsLoading, setNewsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null)
  const [activeTab, setActiveTab] = useState('all');



  const handleGetNews = async (option, page) => {
    const { data } = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${option}&page=${page}`);
    if (option !== selectedOption) {
      setNews(data.hits)
    } else {
      setNews((prevNews) => [...prevNews, ...data.hits]);
    }
    setCurrentPage(data.page);
    setTotalPages(data.nbPages);
  };

  const tabChanged = (tab) => {
    setActiveTab(tab);
  };

  const checkIsFav = (row) => {
    return JSON.parse(localStorage.getItem('favs')).filter(fav => fav.objectID === row.objectID).length !== 0
  }

  const handleGetFirstNews = async (option, page) => {
    setNewsLoading(true);
    await handleGetNews(option, page)
    setNewsLoading(false);

  }


  useEffect(() => {
    const prevSelectedOption = localStorage.getItem('selectedOption')
    if (prevSelectedOption) {
      setSelectedOption(prevSelectedOption)
      handleGetFirstNews(prevSelectedOption, 0)
    }
  }, [])

  const generateTab = () => {
    switch (activeTab) {
      case 'all':
        return (
          <NewsContainer>
            {news.map((row, index) => {
              if (index === news.length - 1) {
                return <New content={row} aRef={lastNewsRef} isFavorite={checkIsFav(row)} />

              } else {
                return <New content={row} isFavorite={checkIsFav(row)} />
              }
            })}
          </NewsContainer>
        );
      case 'my-faves':
        return (
          <NewsContainer>
            {JSON.parse(localStorage.getItem('favs')).map((row) => (
              <New content={row} isFavorite={true} />
            ))}
          </NewsContainer>
        );
      default:
        return (
          <NewsContainer>
            {news.map((row, index) => {
              if (index === news.length - 1) {
                return <New content={row} aRef={lastNewsRef} />;
              } else {
                return <New content={row} />;
              }
            })}
          </NewsContainer>
        );
    }
  };

  const observer = useRef();
  const lastNewsRef = useRef();

  useEffect(() => {

    if (newsLoading || currentPage >= totalPages) return;

    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        setIsLoading(true);
        await handleGetNews(selectedOption, currentPage + 1);
        setIsLoading(false);
      }
    });

    if (lastNewsRef.current) {
      observer.current.observe(lastNewsRef.current);
    }

    return () => observer.current.disconnect();
  }, [newsLoading, currentPage, totalPages]);


  const handleSetOption = (option) => {
    localStorage.setItem('selectedOption', option)
    setSelectedOption(option)
  }

  return (
    <Container>
      <Tabs tabChanged={tabChanged} />
      {activeTab === 'all' && (
        <Dropdown preselectedOption={selectedOption} setOption={handleSetOption} handleGetNews={(option) => handleGetFirstNews(option, 0)} />
      )}
      {newsLoading ? (
        <LoadingText>Cargando noticias de {selectedOption}...</LoadingText>
      ) : (
        <>
          {generateTab()}
          {isLoading && <LoadingText>Cargando más noticias</LoadingText>}
        </>
      )}
    </Container>
  );
};

export default News;
