import { Grid2} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
// ActivityDashboard는 반드시 아래형태의 Props를 받는다는 의미
// props는 구성요소에 전달되는 데이터
// activities라는 이름의 배열을 받는다
// Props는 ActivityDashboard의 입력 계약(타입 스펙)이다.
type Props = {
    activities: Activity[];
}
export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList activities={activities}/>
            </Grid2>
            <Grid2 size={5}>
                {activities[0] && <ActivityDetail activity={activities[0]}/>}
            </Grid2>
        </Grid2>
    )
}
