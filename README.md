# EDC Korea 2026 Timetable — 1차 버전

이 폴더는 코딩을 몰라도 그대로 배포할 수 있는 **정적 모바일 웹앱**입니다.

## 들어있는 기능
- 10/3, 10/4 날짜 전환
- 5개 스테이지 필터
- 시간대별 타임테이블
- DJ 검색
- ⭐ 내 일정 저장 (휴대폰 브라우저에 자동 저장)
- DJ 상세 팝업
- 공식 타임테이블 이미지 크게 보기
- PWA 설치 지원
- 모바일 화면 최적화

## 가장 쉬운 공개 방법 — Vercel
1. https://github.com/ 에 가입
2. 새 Repository를 만들고 이 폴더의 파일 전체를 업로드
3. https://vercel.com/ 에 로그인
4. Add New → Project → GitHub 저장소 선택
5. Framework Preset은 자동으로 두고 Deploy
6. 몇 분 후 `xxxxx.vercel.app` 주소가 생깁니다.

## 사진을 실제 DJ 사진으로 바꾸는 방법
현재는 이름 기반 아바타가 표시됩니다. 각 DJ 사진을 직접 사용할 수 있는 이미지 파일을 `assets/artists/`에 넣고,
`index.html`의 `cardHTML()`에서 `dj-photo` 부분을 `<img>`로 바꾸면 됩니다.

## 주의
타임테이블 데이터는 사용자가 제공한 10/3·10/4 이미지에서 옮긴 사용자가 제공한 2026년 10월 3일·4일 타임테이블 이미지에서 옮긴 개인용 팬메이드 데이터입니다.
공개 배포 전에는 공식 EDC 페이지의 최신 Set Times와 다시 대조하세요.
브랜드 로고·아티스트 사진·공식 디자인을 상업적으로 재사용할 때는 권리/사용 조건을 확인하세요.

공식:
https://korea.edc.com/lineup/set-times/
