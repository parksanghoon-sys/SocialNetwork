import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, MenuItem } from '@mui/material';
import { Group } from '@mui/icons-material';


export default function NavBar() {
    return (
        // box 는 div 와 비슷한 구역을 나누는 행위 MUI의 기본 레이아웃 컨테이너.
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
            }}>
                <Container maxWidth='xl'>
                     {/* MUI Toolbar 컴포넌트에 flex 레이아웃을 적용해서 양쪽 끝으로 정렬하는 스타일 */}
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            {/* flex 컨테이너로 만들고 내부 요소 간의 간격을 2 spacing(16px) 만큼 띄움. */}
                            <MenuItem sx={{ display: 'flex', gap: 2 }}>
                                <Group fontSize="large" />
                                <Typography variant="h4" fontWeight='bold'>Reactivities</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                             {/* 
                             | 값            | 설명                                      |
                            | ------------ | --------------------------------------- |
                            | `uppercase`  | 모두 대문자                                  |
                            | `lowercase`  | 모두 소문자                                  |
                            | `capitalize` | 단어 첫 글자만 대문자                            |
                            | `none`       | 변환 없음 (Button 기본 대문자 스타일 끄고 싶을 때 자주 사용) |

                             "uppercase" 는 문자열을 모두 대문자로 바꿈. */}
                            <MenuItem sx={{
                                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                            }}>
                                Activities
                            </MenuItem>
                            <MenuItem sx={{
                                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                            }}>
                                About
                            </MenuItem>
                            <MenuItem sx={{
                                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                            }}>
                                Contact
                            </MenuItem>
                        </Box>
                        <Button 
                            size="large" 
                            variant="contained" 
                            color="warning"                            
                        >
                            Create activity
                        </Button>
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    );
}
