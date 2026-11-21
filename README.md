# 실습과제 #2: 영화 데이터를 자바스크립트로

- 이름/학번 : 김태완 / 2651020
- 사이트 주소 : https://아이디.github.io/web-hw2/
- 사용한 API: TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 YYYY-MM-DD)

## 구현 항목 체크
- [x] 1. Part A: `data.js`에 10개 요소를 담은 배열 4개 선언 및 `app.js`에서 `A1`~`A5` 통계 콘솔 출력 (`console-a.png`)
- [x] 2. Part B 함수 7개: 8개 속성을 가진 영화 객체 10건 구성, 7개 핵심 함수 구현 및 원본 배열 보존 검증
- [x] 3. Part C 응답 구조: `tmdb.js`에 `now_playing` 전체 응답 반영, `getList`·`averageBy` 연동 및 `C1`~`C4`·상위 5편 표 출력 (`console-c.png`)
- [x] 4. 출력: 콘솔 캡처 이미지 2장 저장 및 페이지 `<pre id="out">` 영역에 요약 3줄 한 번에 렌더링
- [x] 5. 코드 품질: 함수 상단 `입력 ⇒ 출력` 주석 표기, `const`/`let`만 사용, `average`에서 `averageBy` 재사용
- [x] 6. 제출 형식: Public 저장소 `web-hw2` 루트 구성, GitHub Pages 배포 확인, 코드 내 API 키 미포함
- [x] 보너스: `reduce` 기반 평균 산출, `formatDate` 요일 포맷팅, `fetch`로 `tmdb.json` 비동기 파싱 (`bonus.png`)

## 자가 테스트 표

| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | `formatNumber("1234567")` | `'1,234,567'` | |
| 2 | `average(movies).toFixed(1)` | `'7.7'` | |
| 3 | `best(movies).title` | `'너의 이름은'` | |
| 4 | `sortBy(movies, "rating", true)[0].title` | `'너의 이름은'` | |
| 5 | `filterByRating(movies, 8).length` | `3` | |
| 6 | `search(movies, "인터 ").length` | `0` | |
| 7 | `yearsSince("2014-11-06")` | `12` | |
| 8 | 4번 실행 뒤 `movies[0].title` | `'극장판 치이카와: 인어 섬의 비밀'` | |

## 어려웠던 점 3가지와 해결
1. **전역 변수 이름 충돌 방지**: Part A의 반복문 통계 변수와 Part B의 함수·전역 객체 이름이 겹치면 스크립트 전체 실행이 중단되는 문제를 겪었습니다. Part A에 쓰이는 변수는 모두 끝에 `A`를 붙이고, 최고 평점 영화 객체도 `top` 대신 `bestMovie`로 명명해 스코프 충돌을 해결했습니다.
2. **가변적인 정렬 기준과 원본 데이터 보호**: `sortBy` 함수 하나로 문자열(`title`)과 숫자(`rating`, `audience`, `year`)를 동시에 정렬하려니 타입 오류가 발생했습니다. `typeof` 연산자로 문자열 여부를 먼저 판별해 `localeCompare`와 뺄셈 연산을 분기하고, `[...list]`로 배열을 복제해 원본 `movies` 순서를 보호했습니다.
3. **로컬 환경에서의 `fetch` 보안 제약 해결**: HTML 파일을 탐색기에서 직접 열면 `file://` 프로토콜 때문에 `tmdb.json`을 불러오지 못하는 CORS/보안 오류가 발생했습니다. VS Code의 Live Server 확장 프로그램과 GitHub Pages 배포 주소에서 테스트해 정상 동작을 확인했습니다.

## 참고한 자료
- 웹개발기초 8~11장 강의안 및 실습 자료 (배열, 반복문, 함수, 객체, 내장 객체)
- MDN Web Docs: `Array.prototype.filter()`, `Array.prototype.reduce()`, `Array.prototype.sort()`, `Date.prototype.getFullYear()`, `Fetch API`

## 생성형 AI 사용 내역
- 질문 요지 : 김태완(2651020) 인적사항과 영화 5편을 반영한 실습과제 #2 전체 JavaScript/HTML 코드 및 독립적으로 재구성한 README 초안 작성 요청
- 답변 요약 : Part A·B·C와 보너스 기능이 포함된 4개 소스 파일 코드와 자가 테스트 표·회고가 담긴 `README.md` 양식을 제공받음
- 채택 여부 : 채택 (본인 KOBIS·TMDB 조회 데이터로 교체하고 브라우저 콘솔에서 1~8번 테스트 결과를 검증한 뒤 최종 제출용으로 활용)
