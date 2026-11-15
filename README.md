# 트렌디기프트 링크 페이지

## 처음 배포
1. 압축 풀기 → 폴더에서 `npm install`
2. `npm run dev` → http://localhost:3000 에서 확인
3. GitHub에 새 저장소 만들어 push → vercel.com 에서 Import → Deploy

## 제품 링크 넣기 / 새 게시물 추가
- `data/posts.json` 만 수정
- `url` 칸에 브랜드 커넥트에서 발급한 링크를 그대로 붙여넣기 (https로 시작해야 버튼이 켜짐)
- 새 게시물은 배열에 항목 하나 추가 (날짜 최신순으로 자동 정렬)
- 썸네일은 `public/thumbs/` 에 넣고 `image` 에 `/thumbs/파일명.png`
- 저장 후 `git add . && git commit -m "11/17 게시물" && git push` 하면 Vercel이 자동 배포

## 게시물 바로가기
페이지주소/#게시물id  (예: /#1115-anniversary) → 스토리 링크 스티커에 쓰면 해당 게시물로 바로 이동
