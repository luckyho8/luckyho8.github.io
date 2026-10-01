# luckyho8.github.io — 포트폴리오 사이트 브리프

## 프로젝트 개요
- 목적: 3D 애니메이터 / Unity 실무자 포트폴리오. 채용 담당자에게 이메일로 링크를 보낼 용도.
- 형태: 단일 페이지 정적 사이트. 프레임워크 없이 HTML + CSS + vanilla JS.
- 호스팅: GitHub Pages (저장소 `luckyho8/luckyho8.github.io`, main 브랜치 root 배포).
- 최종 주소: https://luckyho8.github.io
- 작업 원본 폴더: `E:\_luckyho8` (플레이어블 3개 + `videos/` 폴더). 이 저장소로 정리해서 옮길 것.

## 포지셔닝
- 이 사이트가 증명해야 할 한 문장: **"Unity에 능숙한 3D 애니메이터"**. 상대 회사가 원하는 건 Unity 실무 능력이고, 애니메이션은 기본 전제.
- DoubleU Games 2016년부터 재직 중(10년). 다수 프로젝트의 애니메이션·연출 담당. 최근에는 Unity + Claude 바이브코딩으로 기획·개발·출시까지 직접 진행.
- 개발팀과 Unity 기준으로 직접 소통 가능하다는 점을 About에서 명시.
- 톤: 담백. 자랑하는 문구 대신 사실(담당 범위, 결과물 링크)로 말하기.

## 디자인 방향
- 다크 배경, 담백한 톤. 사이트 자체는 조용하고 플레이어블이 튀게.
- 폰 프레임 뒤에만 은은한 글로우. 배경 애니메이션·파티클 등 움직이는 장식 금지.
- 레퍼런스 레이아웃: https://onepagelove.com/rafael-derolez-2026 (왼쪽 텍스트 열 + 오른쪽 폰 프레임 가로 나열). 이 구조를 다크 버전으로.
- 타이포는 산세리프 하나(Pretendard 또는 Inter, CDN 가능), 강조색 하나만.
- 반응형 필수. 모바일에서는 폰 프레임이 세로로 쌓임.

## 폴더 구조
```
/
├── index.html
├── CLAUDE.md
├── playables/
│   ├── BallSort_Lv79_AppLovin.html
│   ├── GermyPop_Lv5_AppLovin.html
│   ├── Wood_Lv6_AppLovin.html
│   └── Wool_Lv1_AppLovin_build.html
├── videos/
│   ├── ballsort.mp4
│   ├── germypop.mp4
│   └── bisonblast.mp4
├── images/          (1차엔 비워둠. 썸네일·프로필은 추후)
└── assets/
    ├── style.css
    └── main.js
```
- 파일명은 소문자·공백 없음으로 통일 (플레이어블 HTML 파일명은 원본 유지해도 됨).

## 페이지 구성 (위에서부터)

### 1. Hero
- 이름: **이춘호**
- 한 줄 소개 (후보, 최종 문구는 사용자 확인): `3D Animator · Unity · DoubleU Games 2016–`
- 메인 비주얼: **Leon Out 트레일러** YouTube 임베드 (https://youtu.be/D0AmGTX-dyI). 라벨: "현재 서비스 중 · 애니메이션 연출 담당".
- 스토어 링크: https://play.google.com/store/apps/details?id=com.doubleugames.ngfe.lo&hl=ko
- 짧은 설명: 애니메이션 연출 담당. 서비스 중이며 계속 개발 진행 중.
- 히어로 하단에 "Playables ↓" 정도의 스크롤 유도.

### 2. Playables (AppLovin 대응 단일 HTML)
폰 프레임 4개 가로 배치 (1280px 이하 2열, 900px 이하 1열). 각 카드: 폰 프레임(iframe) / 게임명 / 담당 범위 / 스토어 링크 / 홍보영상(있는 경우).

| # | 게임 | 플레이어블 파일 | 영상 | 스토어 | 담당 / 설명 |
|---|---|---|---|---|---|
| 1 | **Ball Sort** | `BallSort_Lv79_AppLovin.html` | `videos/ballsort.mp4` | https://play.google.com/store/apps/details?id=com.doubleugames.ballsort.vms&hl=ko | 첫 바이브코딩 프로젝트. 기획·스테이지 레벨디자인부터 개발·출시까지 전 과정 단독 진행. AppLovin 요구사항에 맞는 단일 HTML 플레이어블까지 완성. 홍보영상은 AI 생성 쇼츠 + 플레이 영상 결합. |
| 2 | **Germy Pop** | `GermyPop_Lv5_AppLovin.html` | `videos/germypop.mp4` | https://play.google.com/store/apps/details?id=com.doubleugames.ngfe.grp2.gp&hl=ko | 두 번째 바이브코딩 프로젝트. 연출·애니메이션 작업 + Claude 바이브코딩으로 개발. 플레이어블은 인게임과 거의 동일, CTA까지 완성. 홍보영상은 AI 생성 쇼츠 + 플레이 영상 결합. |
| 3 | **Wood Blast** | `Wood_Lv6_AppLovin.html` | 없음 | https://play.google.com/store/apps/details?id=com.doubleugames.ng.grp2.wbe | 팀 프로젝트. 팀 내 유일한 플레이어블 제작 가능 인력으로 플레이어블 단독 제작. Luna 7.2 사용, 인게임과 거의 동일하게 구현. |
| 4 | **Wool N Blast** | `Wool_Lv1_AppLovin_build.html` | YouTube https://youtu.be/ADwlIGUQO6o (제3자 업로드 게임플레이, "플레이 영상" 라벨) | https://play.google.com/store/apps/details?id=com.doubleugames.ng.grp2.wnb | 팀 프로젝트. 인게임 연출용 애니메이션 제작 + 플레이어블 단독 제작. Luna 사용, 인게임과 거의 동일하게 구현. |

- Hero에 Leon Out 트레일러가 있으므로 이 섹션이 첫 스크롤에 바로 보여야 함. 폰 프레임 3개는 뷰포트 진입 시 iframe 로드.

### 3. DoubleU Games Projects (2016 – 현재)
Leon Out과 플레이어블 3종 외 나머지 프로젝트. 카드 또는 한 줄 리스트.

| 게임 | 상태 | 담당 | 영상 | 스토어 |
|---|---|---|---|---|
| **Bison Blast** | 서비스 중 | 애니메이션·연출, 바이브코딩 진행. 플레이어블 없음. | `videos/bisonblast.mp4` (AI 생성 쇼츠 + 플레이 영상 결합 홍보영상) | https://play.google.com/store/apps/details?id=com.doubleugames.ng.bf&hl=ko |
| **Undead Nation: Last Shelter** | 서비스 종료 (Facebook 정식 런칭) | DoubleU 첫 프로젝트. Unity. 애니메이션·연출 전 과정 제작. | https://www.youtube.com/watch?v=F8B4dc8Tn_o (제3자 업로드 게임플레이, "Gameplay (archived)" 라벨) | — |
| **Undead World: Hero Survival** | 서비스 종료 (소프트 런칭) | Unity. 애니메이션·연출 담당. | https://youtu.be/KtJeXPXEG2A | — |
| **Divine Match** | 서비스 종료 | DoubleU 첫 모바일 프로젝트 (Match-3). 애니메이션·연출 담당. | https://youtu.be/XAOucDezQxA (제3자 업로드, "Gameplay (archived)" 라벨) | — |

### 4. About / Career
짧은 소개 2~3줄 + 텍스트 타임라인. 영상 첨부 없음.

소개 문구 방향 (초안, 사용자 확인):
- 2006년부터 3D 애니메이션. 영상·VFX → 게임 → DoubleU Games 10년.
- Unity 환경에서 애니메이션·연출을 직접 구현하며 개발팀과 Unity 기준으로 소통.
- 최근에는 Unity + Claude 바이브코딩으로 기획부터 개발·출시·플레이어블·홍보영상까지 단독 진행.

타임라인 (DoubleU 이전, 텍스트만):
| 기간 | 소속 | 내용 | 툴 |
|---|---|---|---|
| 2006 | 마피아산업디자인 전문학원 | Maya 과정 | Maya |
| 2006.06 – 2007.06 | lst.애니메이션 | SBS 방영 「크리스탈요정 지스쿼드」 | Maya |
| 2007.07 – 2007.09 | 올리브스튜디오 | 「빌드3」 VFX, 영화·뮤직비디오 애니메이션 | 3ds Max |
| 2007.10 – 2010.07 | 엠게임 | 신규2·워베인 서비스, 캐릭터 애니메이션 세팅 R&D | 3ds Max |
| 2010.08 – 2014.02 | 웹젠 | A1.5 제노사이드, A2 아크로드2 서비스, 캐릭터 애니메이션 | 3ds Max |
| 2014.02 – 2014.04 | 웹젠엔플레이 아트센터 | Mu2 및 신규 MST 몬스터 애니메이션 세팅 | 3ds Max |
| 2014.05 – 2015.04 | 스타트업 | 「군단을 부탁해」(가제) 캐릭터 세팅·애니·이펙트 | 3ds Max, Unity 4.6 |
| 2015.06 – 2016.06 | 펍지 (구 블루홀지노) | 데빌리언 모바일, 애니 파트장 | 3ds Max, Unity 5.2.4 |
| 2016.06 – 현재 | **DoubleU Games** | Undead Nation, Undead World, Divine Match, Leon Out, Bison Blast, Ball Sort, Germy Pop, Wood Blast | Unity, 3ds Max, Claude |

- 회사명 표기(펍지/블루홀지노 등)는 사용자에게 최종 확인.

### 5. Contact
- 이메일: luckyho8@naver.com
- GitHub: https://github.com/luckyho8
- 그 외 링크(ArtStation, LinkedIn 등): TODO — 있으면 추가
- 휴대폰 번호는 노출하지 않음 (사용자 결정, 이력서에만 기재).

## 기술 요구사항

### 플레이어블 임베드
- 각 플레이어블은 `<iframe>`으로 로드. 폰 프레임은 CSS로 그림 (9:16 비율, 둥근 모서리, 노치 또는 다이내믹 아일랜드 정도의 디테일).
- iframe에 `allow="autoplay"` 허용, `sandbox`는 걸지 말 것 (플레이어블 내부 스크립트가 막힘).
- **MRAID 스텁 필수**: AppLovin 플레이어블은 `mraid` 객체를 참조하고 CTA에서 `mraid.open(url)`을 호출함. 웹에는 mraid가 없으므로 각 플레이어블 HTML 최상단(첫 `<script>`보다 앞)에 아래 스텁을 삽입. 원본은 E:\_luckyho8에 남아 있으므로 `playables/` 안의 사본은 수정해도 됨.

```html
<script>
if (typeof window.mraid === 'undefined') {
  window.mraid = {
    getState: () => 'default',
    isViewable: () => true,
    addEventListener: (ev, fn) => { if (ev === 'ready' || ev === 'viewableChange') setTimeout(() => fn(true), 0); },
    removeEventListener: () => {},
    open: (url) => window.open(url, '_blank'),
    close: () => {},
    useCustomClose: () => {},
    expand: () => {},
    getScreenSize: () => ({ width: window.innerWidth, height: window.innerHeight }),
    getMaxSize: () => ({ width: window.innerWidth, height: window.innerHeight }),
    getVersion: () => '2.0',
  };
}
</script>
```
- Wood Blast는 Luna 7.2 export물이라 mraid 사용 방식이 다를 수 있음. 세 파일 모두 열어서 실제로 호출하는 mraid 메서드를 grep 후, 스텁에 빠진 게 있으면 추가.
- 실제 삽입된 스텁은 위 예시를 확장한 버전: `getMraidAdData` 추가, 리스너 보관, 페이지 전용 `mraid._setViewable(bool)` 추가. main.js가 폰 프레임이 화면 밖(30% 미만 노출)·탭 숨김·영상 모달 열림일 때 false를 보내 Luna가 `luna:pause`로 멈추게 함 (게임 로직 수정 없음).
- Wool N Blast는 로드 즉시 시작·BGM 재생되므로 `data-click-to-start`: "Tap to Play" 클릭 시에만 iframe 로드.
- 3개 iframe 동시 로드는 무거우므로 뷰포트 진입 시(IntersectionObserver) 로드.
- 각 폰 프레임에 "Restart" 버튼 (iframe src 재할당).

### 영상
- 로컬 mp4 재인코딩 명령 예시 (ffmpeg 필요):
  ```
  ffmpeg -i Ballsort.mp4 -c:v libx264 -crf 26 -preset slow -vf "scale=-2:1080" -c:a aac -b:a 128k -movflags +faststart videos/ballsort.mp4
  ```
  원본: ballsort 85 MB / germypop 45 MB / bisonblast 32 MB → 각 10~15 MB 이하 목표. 세로 영상이면 scale 유지.
- GitHub 파일당 100 MB 제한, Pages 저장소 1 GB 이하 — 지킬 것.
- YouTube 영상은 `youtube-nocookie.com` 임베드, `loading="lazy"`.

### 기타
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- OG 태그 (title, description; og:image는 images/ 준비되면).
- 외부 의존성 최소화. 폰트 외 CDN 스크립트 사용하지 않기. 예외: 방문 통계용 GoatCounter 스크립트(`gc.zgo.at/count.js`, `</body>` 직전) — 사용자 결정.
- favicon 간단히 하나.
- 한/영 병기 여부는 사용자 확인 (기본: 한국어 본문, 게임명·라벨은 영문).

## 작업 순서 (1차)
1. `E:\_luckyho8`에서 이 저장소로 파일 이동/정리, 폴더 구조 맞추기.
2. 영상 3개 재인코딩.
3. 플레이어블 3개에 mraid 스텁 삽입, 브라우저에서 단독 열어 동작 확인.
4. index.html + style.css + main.js 작성.
5. 로컬 확인 (`python -m http.server` — file:// 로 열면 iframe·video가 제대로 안 뜰 수 있음).
6. 커밋·푸시 → https://luckyho8.github.io 에서 확인.
7. TODO 항목(한 줄 소개 최종 문구, 추가 링크)은 사용자에게 물어서 채우기.

## 하지 말 것
- React/Vue/빌드 도구 도입.
- 배경 애니메이션, 커서 효과, 스크롤 하이재킹.
- 플레이어블 내부 게임 로직 수정 (스텁 삽입 외).
- 옛 쇼릴 영상(2015 이전) 임베드하지 않기 — DoubleU 이전 경력은 텍스트 타임라인만. 예외: About 소개 문단에 게임사 입사 당시 포트폴리오(https://youtu.be/_IH1l6OJHy8) 텍스트 링크 하나만 둠 (사용자 결정).
