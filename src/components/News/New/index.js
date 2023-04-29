import { Container, Content, CreatedAt, FavContainer, FavIcon, Title } from "./styles"
import favSvg from '../../../assets/fav_full_button.svg'
import notFavSvg from '../../../assets/fav_button.svg'
import clockSvg from '../../../assets/clock.svg'
import { useState } from "react"


const New = ({ content, aRef = null, isFavorite }) => {
  const [isFav, setIsFav] = useState(false)

  const getHoursPosted = () => {
    const created_at = new Date(content.created_at);
    const actual_time = new Date();
    const hoursPassedBy = Math.floor((actual_time - created_at) / (1000 * 60 * 60));
    return hoursPassedBy
  }


  const handleIsFave = (fav) => {
    let favs = JSON.parse(localStorage.getItem('favs'))
    if (favs) {
      let exists = favs.find(fav => fav.objectID === content.objectID);
      if (!exists) {
        favs.push(content);
      }
      else {
        let index = favs.findIndex(fav => fav.objectID === content.objectID);
        favs.splice(index, 1);
      }
      localStorage.setItem('favs', JSON.stringify(favs))
    } else {
      localStorage.setItem('favs', JSON.stringify([content]))
    }
    setIsFav(fav)
  }

  const handleRedirect = () => {
    window.open(content.story_url, '_blank').focus();

  }
  return (
    <Container key={content.objectID} ref={aRef}>
      <Content onClick={handleRedirect}>
        <CreatedAt><img src={clockSvg} alt="Mi SVG" />{getHoursPosted()} hours ago by {content.author}</CreatedAt>
        <Title>{content.story_title}</Title>
      </Content>
      <FavContainer>
        {
          isFav || isFavorite ?
            <FavIcon onClick={() => handleIsFave(false)} src={favSvg} alt="fav_svg" />
            :
            <FavIcon onClick={() => handleIsFave(true)} src={notFavSvg} alt="no_fav_svg" />
        }
      </FavContainer>
    </Container>
  )
}

export default New