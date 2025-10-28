import { useEffect, useState } from "react"

function App() {  
  const [activities, setActivities] = useState<Activity[]>([]);
  // 구성요소라 로드될때 일어나는 일
  useEffect(() => 
  {
    fetch('https://localhost:5001/api/activities')
    .then(response => response.json())
    .then(data => setActivities(data))    
  }, [])
// 구성요소에서 가져올 데이터터를 기억하는 기능이 javascript에는 없기 떄문에 무언가를 기억하려면 반응 기능에 연결해야한다 
// 이때 후크를 useState라고한다 그럼 react 내에 저장이 가능하다  
  return (    
    <div>    
      <h3 className="app" style={{color :'red'}}>Reactivities</h3>    
      <ul>
        {activities.map((activity) =>(
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
