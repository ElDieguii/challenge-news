/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Container, Tab } from "./styles"

const Tabs = ({ tabChanged }) => {
  const [selectedTab, setSelectedTab] = useState('all')

  useEffect(() => {
    if (selectedTab) {
      tabChanged(selectedTab)
    }
  }, [selectedTab])

  return (
    <Container>
      <Tab onClick={() => { setSelectedTab('all') }} isSelected={selectedTab === 'all'}>
        All
      </Tab>
      <Tab onClick={() => { setSelectedTab('my-faves') }} isSelected={selectedTab === 'my-faves'}>
        My faves
      </Tab>
    </Container>
  )
}

export default Tabs