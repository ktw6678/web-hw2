// data.js : 실습과제 #2 영화 배열 및 객체 데이터 / 김태완(2651020)

// ===== Part A : 10칸 배열 4종 (내 인생 영화 5편 + 박스오피스 5편) =====
const titles = [
  "극장판 치이카와: 인어 섬의 비밀",
  "너의 이름은",
  "엔드 오브 에반게리온",
  "명탐정 코난: 100만 달러의 펜타그램",
  "암살자(들)",
  "박스오피스 1위",
  "박스오피스 2위",
  "박스오피스 3위",
  "박스오피스 4위",
  "박스오피스 5위"
];

const ratings = [8.1, 8.5, 8.3, 7.6, 7.9, 7.3, 7.8, 6.7, 7.5, 7.1];

const years = [2026, 2016, 1997, 2024, 2026, 2026, 2026, 2026, 2026, 2026];

// 내 영화 5편은 0, 박스오피스 5편은 KOBIS 누적 관객 수(숫자)
const audiences = [0, 0, 0, 0, 0, 2150000, 1340000, 780000, 420000, 190000];

// ===== Part B : 영화 객체 배열 10건 (키 8개, Part A와 동일 순서) =====
const movies = [
  {
    title: "극장판 치이카와: 인어 섬의 비밀",
    year: 2026,
    date: "2026-07-24",
    rating: 8.1,
    audience: 0,
    poster: null,
    type: "mine",
    rank: null
  },
  {
    title: "너의 이름은",
    year: 2016,
    date: "2017-01-04",
    rating: 8.5,
    audience: 0,
    poster: "/q719jXXEzOoYaps6babgKnONONX.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "엔드 오브 에반게리온",
    year: 1997,
    date: "1997-07-19",
    rating: 8.3,
    audience: 0,
    poster: "/j6G24dqI4WgUtUNhWjfnI5nVBx1.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "명탐정 코난: 100만 달러의 펜타그램",
    year: 2024,
    date: "2024-07-17",
    rating: 7.6,
    audience: 0,
    poster: null,
    type: "mine",
    rank: null
  },
  {
    title: "암살자(들)",
    year: 2026,
    date: "2026-08-12",
    rating: 7.9,
    audience: 0,
    poster: null,
    type: "mine",
    rank: null
  },
  {
    title: "박스오피스 1위",
    year: 2026,
    date: "2026-10-01",
    rating: 7.3,
    audience: 2150000,
    poster: null,
    type: "boxoffice",
    rank: 1
  },
  {
    title: "박스오피스 2위",
    year: 2026,
    date: "2026-10-05",
    rating: 7.8,
    audience: 1340000,
    poster: null,
    type: "boxoffice",
    rank: 2
  },
  {
    title: "박스오피스 3위",
    year: 2026,
    date: "2026-10-08",
    rating: 6.7,
    audience: 780000,
    poster: null,
    type: "boxoffice",
    rank: 3
  },
  {
    title: "박스오피스 4위",
    year: 2026,
    date: "2026-10-12",
    rating: 7.5,
    audience: 420000,
    poster: null,
    type: "boxoffice",
    rank: 4
  },
  {
    title: "박스오피스 5위",
    year: 2026,
    date: "2026-10-15",
    rating: 7.1,
    audience: 190000,
    poster: null,
    type: "boxoffice",
    rank: 5
  }
];
