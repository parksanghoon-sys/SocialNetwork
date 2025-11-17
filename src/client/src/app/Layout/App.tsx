import { Container, CssBaseline, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  // 구성요소라 로드될때 일어나는 일
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])
  // 구성요소에서 가져올 데이터터를 기억하는 기능이 javascript에는 없기 떄문에 무언가를 기억하려면 반응 기능에 연결해야한다 
  // 이때 후크를 useState라고한다 그럼 react 내에 저장이 가능하다  
  return (
    <>
      <CssBaseline />
      <NavBar />
        {/* | 값      | 최대 너비(px) |
        | ------ | --------- |
        | xs     | 444       |
        | sm     | 600       |
        | md     | 900       |
        | lg     | 1200      |
        | **xl** | **1536**  | 

        mt: 3 → margin-top (위쪽 마진) = 3 스페이싱 단위
        MUI 기본 spacing 은 1 = 8px 이므로:
        */}

      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>

    </>
  )
}

export default App
