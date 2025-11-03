# 06.Reactivities

소셜네트워크 강의 정리

## Section 2

학습

* 클린아키텍쳐
* dotnet cli 이용하여 구성
* ef를 이용하여 코드 first의 db 설계
* postman을 활용한 api 테스트
* git 형상 등록

---

## Section3

React를 이용한 client 만들기

vite 를 이용 시 보다 빠른 반응의 클라이언트를 가 가능하다

```
npm create vite@latest

y

client : 프로젝트이름

React

TypeScript + SWC 선택: TypeScript를 사용하겟다, 속도빠른버젼

npm run dev 로실행
```

### React 란

UI를 자동으로 다시 그려주는 라이브러리 이다. 즉, 사용자로부터 반응형인 웹 프론트엔드 프레임워크이다.

사용자가 입력을 전달시 React는 `상태 (State)` 가 바뀌면 자동으로 화면을 그려준다

그 **상태(State)**를 관리하는 것이 `useState`이고 그 **변화가 생길 떄 뭔가 실행하는 것**이 `useEffect` 이다.

#### useState - 상태 저장소 만들기

변하는 데이트럴 저장하는 React의 기본 도구이다. 예를 들면 버튼 클릭 횟수, 입력창의 내용, 로그인 여부 같은 것들이다.

**예시**

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count의 초기값은 0

  return (
    <div>
      <p>지금 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
```

**설명**

| 코드                    | 의미                                                |
| ----------------------- | --------------------------------------------------- |
| `useState(0)`         | 초기값이 `0`인 상태를 하나 만든다                 |
| `[count, setCount]`   | `count`는 현재 값,`setCount`는 값을 바꾸는 함수 |
| `setCount(count + 1)` | 상태를 바꾸면 React가 자동으로 화면을 새로 그린다   |

`useState` = **“데이터를 기억하고, 바뀌면 화면도 자동으로 다시 그려주는 기능”**

### useEffect - 변화에 반응하기

**효과를 주는 함수**이다. 즉, 상태가 바뀌거나 컴포넌트가 처음 실행 시에 하고싶은일을 사용한다. 예를 들면 화면이 처음 열릴 때 서버에 데이터 불러오기, 특정 값이 변경 시 콘솔 찍기, 타이머 설정/ 정리하기 등등

**예시1**

```javascript
import { useEffect, useState } from 'react';

function Example() {
  const [name, setName] = useState('홍길동');

  useEffect(() => {
    console.log('이름이 바뀌었어요:', name);
  }, [name]); // name이 바뀔 때마다 실행됨

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

```

**설명**

| 코드                                | 의미                                |
| ----------------------------------- | ----------------------------------- |
| `useEffect(() => {...}, [name])`  | `name`이 바뀔 때마다 이 함수 실행 |
| `[]`(빈 배열)                     | 처음 한 번만 실행됨 (마운트 시)     |
| `[name]`                          | `name`이 바뀔 때마다 실행됨       |
| 없으면 (`useEffect(() => {...})`) | 렌더링될 때마다 실행됨 (비추천)     |

#### 예시로 비교

| 상황            | useState                     | useEffect                   |
| --------------- | ---------------------------- | --------------------------- |
| 값 저장         | ✅ 버튼 클릭 횟수, 입력 내용 | ❌                          |
| 값 바뀔 때 동작 | ❌                           | ✅ 콘솔 출력, 서버 요청     |
| 언제 실행됨     | 직접 `setState()`호출 시   | 상태나 props가 바뀔 때 자동 |

#### 같이 써보는 예시

```javascript
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // cleanup (타이머 정리)
    return () => clearInterval(timer);
  }, []); // 한 번만 실행

  return <p>⏱️ {seconds}초 지남</p>;
}
```

✅ `useState` → 초를 저장

✅ `useEffect` → 타이머를 만들고 컴포넌트가 사라질 때 정리

| Hook          | 역할                    | 실행 시점                     | 예시                   |
| ------------- | ----------------------- | ----------------------------- | ---------------------- |
| `useState`  | 값 저장 + 화면 업데이트 | `setState`로 변경 시        | 클릭 횟수, 입력값      |
| `useEffect` | 부수효과(Effect) 실행   | 마운트, 업데이트, 언마운트 시 | API 호출, 콘솔, 타이머 |

## Section 4 CQRS 및 중재자를 사용하여 CRUD 애플리케이션 만들기

* 클린아키텍쳐 패턴을 활용
  * 종송석의 규칙을 따라야한다
  * 각 단계에 따라 캡슐화가 되어야한다.
  * 공통적인 Entity 가있고 그것을 Usecase 작업단위에서 사용을한다 이건 예를들면 Reposity 패턴을 이용한 CRUD 이고 그다음 Presenters계층에서는 실제 db 그리고 UI 계층으로나뉜다
* CQRS 중재자 패턴을 이용
  * 명령 쿼리 책임분리
* CRUD 작업에 대한 핸들러를 만든다
*
