# CM2 Documentation

CM2 프로젝트의 공식 문서 사이트입니다.

## 시작하기

### 사전 요구사항

- Node.js 16.14 이상
- npm 6.14.4 이상

### 설치

```bash
# 저장소 클론
git clone https://github.com/G-CM2/CM2-DOCS.git
cd CM2-DOCS

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm start
```

이 명령은 개발 서버를 시작하고 브라우저에서 `http://localhost:3000`으로 접속할 수 있습니다.

### 빌드

```bash
npm run build
```

이 명령은 정적 파일을 `build` 디렉토리에 생성합니다.

## 문서 작성 가이드

1. `docs` 디렉토리에 새로운 마크다운 파일을 생성합니다.
2. `sidebars.js` 파일에 새로운 문서를 추가합니다.
3. 변경사항을 커밋하고 Pull Request를 생성합니다.

## 라이센스

이 프로젝트는 [라이센스] 하에 배포됩니다.
