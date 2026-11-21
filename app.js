// app.js : 영화 데이터 통계 계산 및 탐색 함수 / 김태완(2651020)

// ===== Part A =====
let ratingTotalA = 0;
let maxA = 0;
let overEightCountA = 0;
let dec2020A = 0;
let dec2010A = 0;
let dec2000A = 0;
let decOldA = 0;
let hitMoviesA = "";

for (let i = 0; i < titles.length; i++) {
  ratingTotalA += ratings[i];

  if (ratings[i] > ratings[maxA]) {
    maxA = i;
  }

  if (ratings[i] >= 8) {
    overEightCountA++;
  }

  const decade = years[i] - (years[i] % 10);
  switch (decade) {
    case 2020:
      dec2020A++;
      break;
    case 2010:
      dec2010A++;
      break;
    case 2000:
      dec2000A++;
      break;
    default:
      decOldA++;
      break;
  }

  if (audiences[i] >= 1000000) {
    hitMoviesA += hitMoviesA === "" ? titles[i] : " " + titles[i];
  }
}

if (hitMoviesA === "") {
  hitMoviesA = "없음";
}

console.log("A1 평균 평점:", ratingTotalA / ratings.length);
console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);
console.log("A3 8점 이상:", overEightCountA + "편");
console.log(`A4 2020년대 ${dec2020A}편, 2010년대 ${dec2010A}편, 2000년대 ${dec2000A}편, 그 이전 ${decOldA}편`);
console.log("A5 관객 100만 이상:", hitMoviesA);


// ===== Part B =====

// average : 영화 객체 배열 ⇒ 평균 평점(숫자)
function average(list) {
  return averageBy(list, "rating");
}

// best : 영화 객체 배열 ⇒ 최고 평점 영화 객체
function best(list) {
  let highest = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i].rating > highest.rating) {
      highest = list[i];
    }
  }
  return highest;
}

// filterByRating : 영화 객체 배열, 최소 평점(숫자) ⇒ 기준 이상 영화 새 배열
function filterByRating(list, min) {
  return list.filter(movie => movie.rating >= min);
}

// sortBy : 영화 객체 배열, 기준 키(문자열), 내림차순 여부(불리언) ⇒ 정렬된 새 배열
function sortBy(list, key, desc) {
  const sign = desc ? -1 : 1;
  return [...list].sort((a, b) => {
    if (typeof a[key] === "string") {
      return a[key].localeCompare(b[key]) * sign;
    }
    return (a[key] - b[key]) * sign;
  });
}

// search : 영화 객체 배열, 검색어(문자열) ⇒ 제목에 검색어가 포함된 새 배열
function search(list, keyword) {
  const term = keyword.trim().toLowerCase();
  return list.filter(movie => movie.title.toLowerCase().includes(term));
}

// formatNumber : 숫자 또는 숫자 문자열 ⇒ 천 단위 쉼표가 적용된 문자열
function formatNumber(n) {
  return Number(n).toLocaleString("ko-KR");
}

// yearsSince : 날짜 문자열("YYYY-MM-DD") ⇒ 올해 기준 경과 연수(숫자)
function yearsSince(dateStr) {
  return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

const bestMovie = best(movies);
const mostViewedMovie = sortBy(movies, "audience", true)[0];

const row1 = `전체 ${movies.length}편, 평균 평점 ${average(movies).toFixed(1)}점`;
const row2 = `최고 평점 ${bestMovie.title} (${bestMovie.rating}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)`;
const row3 = `관객 1위 ${mostViewedMovie.title} (누적 ${formatNumber(mostViewedMovie.audience)}명)`;

document.getElementById("out").textContent = `${row1}\n${row2}\n${row3}`;


// ===== Part C =====

// getList : TMDB 응답 객체 ⇒ 상영 영화 배열
function getList(data) {
  return data.results;
}

// averageBy : 객체 배열, 숫자 속성 키(문자열) ⇒ 해당 속성의 평균(숫자)
function averageBy(list, key) {
  if (list.length === 0) return 0;
  const totalValue = list.reduce((acc, obj) => acc + obj[key], 0);
  return totalValue / list.length;
}

const nowPlaying = getList(TMDB);

console.log(
  `C1 page ${TMDB.page}, total_pages ${TMDB.total_pages}, total_results ${TMDB.total_results}, 이번 응답 ${nowPlaying.length}편`
);
console.log("C2 상영작 평균 평점:", averageBy(nowPlaying, "vote_average").toFixed(1));
console.table(
  sortBy(nowPlaying, "vote_average", true).slice(0, 5),
  ["title", "release_date", "vote_average"]
);

const keywordForC = "코난";
console.log(`C4 '${keywordForC}' 검색:`, search(nowPlaying, keywordForC).length + "편");


// ===== Step 5. 보너스 =====

// formatDate : 날짜 문자열("YYYY-MM-DD") ⇒ "YYYY년 M월 D일 (요일)" 형식 문자열
function formatDate(dateStr) {
  const dt = new Date(dateStr);
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  return `${dt.getFullYear()}년 ${dt.getMonth() + 1}월 ${dt.getDate()}일 (${dayNames[dt.getDay()]})`;
}

console.log("보너스 formatDate:", formatDate("2014-11-06"));

// loadJson : tmdb.json 파일 비동기 읽기 ⇒ 콘솔에 평점 상위 5편 표 출력
async function loadJson() {
  try {
    const res = await fetch("tmdb.json");
    const data = await res.json();
    console.table(
      sortBy(getList(data), "vote_average", true).slice(0, 5),
      ["title", "vote_average"]
    );
  } catch (err) {
    console.warn("tmdb.json 로드 확인 필요(Live Server 또는 GitHub Pages 환경):", err.message);
  }
}

loadJson();
