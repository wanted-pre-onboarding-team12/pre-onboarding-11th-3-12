## 원티드 프리온보딩 프론트엔드 인턴십 - 3주차 과제

Facebook의 React 레포지토리의 이슈 목록과 상세 내용을 조회할 수 있는 웹사이트 구축

- [**`배포링크`**](http://onbording-3-12.s3-website.ap-northeast-2.amazonaws.com/)
- [**`과제 수행 여부 & Stack/Library`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki)

<br>
<br>

## 📌 프로젝트 시작

```
npm install
npm start
```

<br>
<br>

## 📌 Best Practice

개인과제수행 → DIscussion에 목차별 본인 코드 공유 → 회의를 통해 투표&자세한 토론 → Best Practice 결정

<br>

- [**`Best Practice 선정 회의`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/Best-Practice#best-practice-%EC%84%A0%EC%A0%95-%ED%9A%8C%EC%9D%98)

- [**`Context API를 활용한 API 연동`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/Best-Practice#context-api%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-api-%EC%97%B0%EB%8F%99)

- [**`인피니티 스크롤`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/Best-Practice#%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0-%EC%8A%A4%ED%81%AC%EB%A1%A4)

- [**`Router/에러 화면 처리`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/Best-Practice#router--%EC%97%90%EB%9F%AC-%ED%99%94%EB%A9%B4-%EC%B2%98%EB%A6%AC)

- [**`DetailPage 구현`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/Best-Practice#detailpage-%EA%B5%AC%ED%98%84)

- [**`디테일 페이지 마크다운 -> 마크업으로 변환`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/Best-Practice#%EB%94%94%ED%85%8C%EC%9D%BC-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4---%EB%A7%88%ED%81%AC%EC%97%85%EC%9C%BC%EB%A1%9C-%EB%B3%80%ED%99%98)

<br>
<br>

## 📌 데모 영상

## Home

> `/` 경로에서 Github REST API를 활용하여 특정 Github Repository Issues들을 List 형태로 나열합니다. <br>
> OPEN 상태의 이슈 중 코멘트가 많은 순으로 정렬합니다.<br>
> 각 행에는 '이슈번호, 이슈제목, 작성자, 코멘트수'를 표시합니다.<br>
> 다섯번째 셀마다 광고 이미지를 출력합니다.<br>

<br>

| 데모영상                                                                                                                                              | 구현 기능                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/assets/111216062/29cd1c00-a1cb-42e7-bfc1-06a832798ee0"/> | - 이슈 목록 가져오기 : `Query parameters`와 header에 Github에서 발급받은 access token을 담아서 요청하고 데이터를 응답받습니다. <br><br> - open 상태의 이슈 중 코멘트가 많은 순으로 정렬 : `Query parameters`에 `?sort=comments`으로 요청 시 내림차순으로 응답받습니다. <br><br>open 상태는 `state default : open`으로 설정하지 않아도 됩니다. <br><br> - 다섯번째 셀마다 광고 이지미 출력 : List를 나열하는 부분에서 조건문으로 구현했습니다. |

<br><br>

## Detail

> `/detail:issueNumber` 경로로 이동 후 이슈의 상세 내용을 표시합니다. <br>
> '`이슈번호`, `이슈제목`, `작성자`, `작성일`, `코멘트 수`, `작성자 프로필이미지`, `본문`'을 표시합니다.

<br>

| 데모영상                                                                                                                                              | 구현 기능                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/assets/111216062/373fb363-6a99-46f8-beb8-7fd4b5c8c6a3"/> | - 각 데이터들을 표시하기 : `useParams`를 활용하여 issue번호를 받고 `axios`, `context API`통해 데이터를 응답받습니다. <br><br> - `Markdown` 형식 본문 표시하기 : `react-markdown`라이브러리를 이용해서 구현했습니다. |

<br><br>

## Not found

> `Route`에서 지정되지 않은 경로로 이동했을 때 에러화면을 표시합니다. <br>

<br>

| 데모영상                                                                                                                                              | 구현 기능                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| <img width=600 src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/assets/111216062/508ccb63-064c-4e2a-8d2f-76b30d832acc"/> | - 에러화면 표시하는 방식: `routet`를 생성하는 컴포넌트에서 `<Route path="/*" element={<NotFoundPage />} />`코드로 에러페이지를 표시합니다. |

<br><br>

## Loading

> 데이터 요청 중 `Loading UI`를 표시합니다. <br>

<br>

| 데모영상                                                                                                                                              | 구현 기능                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/assets/111216062/e5dcb3e8-f405-41a2-a418-0eba96df3e1c"/> | - `Loading UI` 구현 : API를 호출하는 함수 안에서 `setState(true)`로 시작하고 <br> API요청이 완료 되면 `setState(false)`로 바뀌는 시점을 이용하여 구현했습니다. |

<br>

<br>
<br>

## 📌 원티드 프리온보딩 12팀 개발 문화

- [**`팀원`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-12%ED%8C%80#team)

- [**`과제 진행 방식`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-12%ED%8C%80#%EA%B3%BC%EC%A0%9C-%EC%A7%84%ED%96%89-%EB%B0%A9%EC%8B%9D)

- [**`Git Flow`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-12%ED%8C%80#git-flow)

- [**`커뮤니케이션 툴`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-12%ED%8C%80#%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98-%ED%88%B4)

- [**`폴더구조 & 파일 명명 & 커밋 컨벤션`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/wiki/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-12%ED%8C%80#%EC%BB%A8%EB%B2%A4%EC%85%98)
