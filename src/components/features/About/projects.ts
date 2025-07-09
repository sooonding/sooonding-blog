export interface Achievement {
  title: string;
  items: string[];
}

export interface ProjectExperience {
  projectName: string;
  projectLink?: string;
  position: string;
  period: string;
  techStack: string[];
  achievements: Achievement[];
}

export interface CompanyExperience {
  companyName?: string;
  companyLink?: string;
  projects: ProjectExperience[];
}

export const experiences: CompanyExperience[] = [
  {
    companyName: "HelloDigital",
    companyLink: "https://hellodigital.kr",
    projects: [
      {
        projectName: "바슈롬 통합 어드민",
        position: "PM, Frontend Engineer",
        period: "2023.12 ~ 2024.11",
        techStack: [
          "Next.js",
          "Redux-Toolkit",
          "Redux-Saga",
          "Antd",
          "React-hook-form",
          "Emotion",
        ],
        achievements: [
          {
            title: "통합 관리자 시스템 구축 및 운영 효율 개선 주도",
            items: [
              "브랜드 운영 효율 향상을 위한 관리자 시스템 기획 및 화면 기획 주도",
              "기존에 부서별로 분산되어 있던 어드민 시스템을 통합하여, 운영자가 공통된 인터페이스에서 업무를 처리할 수 있도록 설계",
            ],
          },
          {
            title: "프로젝트 초기 셋업 및 구조 설계",
            items: [
              "아토믹 디자인 시스템을 도입하여 atoms, molecules, templates, pages 단위로 컴포넌트를 체계적으로 구조화하여 코드 재사용성 30% 향상",
              "공통 UI 컴포넌트 구축으로 일관된 디자인 시스템 확립",
            ],
          },
          {
            title: "기술 스펙 정리 및 개발 협업 체계 구축",
            items: [
              "사용자 인터뷰 피드백을 기준으로 한 기획서를 작성하고, 개발자와의 협업을 통해 구현 정확도 및 일정 예측성 향상",
              "기획 우선순위에 대한 개발자와 디자이너 간 충돌이 발생했으나, 기능 영향도와 사용자 기대치를 근거로 논리적으로 중재하여 일정 내 핵심 기능 구현을 이끌어냄",
            ],
          },
          {
            title: "운영 효율 및 리소스 최적화 성과 도출",
            items: [
              "분산되어 있던 3개의 도메인을 단일 통합 어드민으로 변경하여 크로스 체크 과정 제거 및 업무 프로세스 간소화 달성",
              "커스텀 훅 개발로 비즈니스 로직 중복 제거 및 코드 재사용성 향상",
            ],
          },
        ],
      },
      {
        projectName: "Hubspot 알림톡",
        projectLink:
          "https://hsuxd.notion.site/SMS-07690dcf72c348b597f6d15753905f71",
        position: "PM, Frontend Engineer",
        period: "2023.07 ~ 2023.11",
        techStack: ["TypeScript", "Pug", "Hubspot", "Prisma", "Nest.js"],
        achievements: [
          {
            title: "HubSpot 환경 내 메시지 발송 기능 기획 및 운영 체계 구축",
            items: [
              "카카오 외부 API를 통한 HubSpot CRM 내 사용자 조건 기반 메시지 자동 발송 기능 기획 및 운영 체계 설계",
              "카카오 알림톡/친구톡, SMS/LMS/MMS 등 다양한 메시지 유형을 지원하는 통합 발송 시스템 구축",
              "예약 발송, 대량 발송, 조건별 시나리오 대응이 가능한 운영 플로우 정의 및 기술 설계",
            ],
          },
          {
            title: "기술 검토 및 초기 인프라 제안",
            items: [
              "외부 메시징 API 서비스사 기술 비교 및 연동 API 구현",
              "NestJS 도입 제안, 백엔드 프레임워크 기술 결정 과정에 참여",
            ],
          },
          {
            title: "API 연동 구현 및 운영 유지보수 담당",
            items: [
              "프론트엔드 리소스 이탈로 인한 공백 대응: 직접 API 연동 및 오류 처리, 서비스 중단 없이 운영,개선 지속",
              "HubSpot의 고객 정보 및 파이프라인 조건에 따라 자동 발송 가능하도록 연동",
              "Hubspot contact 발송 성공률 모니터링 및 지속적인 안정성 확보",
            ],
          },
          {
            title: "성과 및 결과",
            items: [
              "알림톡 도입 후 마케팅 메시지 도달률 약 60% → 85% 개선, 반응률 증가로 고객사 문의 약 1.7배 상승",
              "실사용 기반 피드백 유입으로 계약된 서비스사 수 2배 이상 증가, 성과 기반 개선 효과 입증",
              "안정적인 메시지 발송 운영체계 구축으로 연간 고객 이탈률 감소 기여",
            ],
          },
        ],
      },
      {
        projectName: "lensly",
        position: "PM",
        projectLink: "https://lensly.co.kr",
        period: "2023.07 ~ 2023.11",
        techStack: ["Figma", "Whimsical", "Notion", "ClickUp"],
        achievements: [
          {
            title: "신규 제품 출시를 위한 페이지 기획",
            items: [
              "브랜드 방향성과 사용자 소비 트렌드를 분석해 콘텐츠 전략 수립",
              "사용자 유형별 니즈 분석 → 시나리오 기반 UX 흐름 및 콘텐츠 구성안 작성",
              "킥오프 단계에서 퍼소나 분석 및 브랜드 가치 전달 전략 발표",
            ],
          },
          {
            title: "부서 간 협업 주도 및 일정 조율",
            items: [
              "ClickUp 기반 프로젝트 관리 체계 구축, 디자인/개발 등 유관 부서와의 협업 주도",
              "전사 일정 조율 및 QA 관리, 피드백 반복을 통해 최종 구현물 완성도 확보",
            ],
          },
          {
            title: "성과 및 결과",
            items: [
              "홈페이지 런칭 이후 신규 제품군 관련 문의량 약 2배 증가, 마케팅팀 리드 유입 수치 상승",
              "콘텐츠 중심 설계 방식이 브랜드 핵심 메시지 전달에 효과적으로 작용, 내부 긍정 피드백 확보",
              "이후 추가 개발 프로젝트 수주 및 추가 계약건 달성",
            ],
          },
        ],
      },
      {
        projectName: "lensly Admin",
        position: "PM",
        period: "2023.07 ~ 2023.11",
        techStack: [
          "Next.js",
          "Redux-Toolkit",
          "Redux-Saga",
          "Antd",
          "Whimsical",
          "Notion",
          "ClickUp",
        ],
        achievements: [
          {
            title:
              "신규 제품 페이지 백오피스 시스템 기획 및 개발 유지보수 수행",
            items: [
              "렌즐리 어드민 내 예약 기반 운영 시스템 기획",
              "외부 ECP 시스템과의 연동 방식 고객사 협의 및 데이터 흐름 구조 설계",
              "프로젝트 전체 일정과 역할 분배를 리드하며 PM 역할 수행",
            ],
          },
          {
            title: "기획–디자인–개발 간 협업 효율화 주도",
            items: [
              "Whimsical을 활용한 와이어프레임 및 커뮤니케이션 자료 제작",
              "기능 설명, 플로우 정리 등 비개발자도 이해 가능한 설계 문서로 소통 간극 최소화",
            ],
          },
          {
            title: "출시 후 유지보수 및 기능 개선 관리",
            items: [
              "초기 버전 출시 이후 유입된 피드백 기반으로 프론트엔드 기능 추가 및 보완 개발",
            ],
          },
        ],
      },
    ],
  },
  {
    companyName: "디비디랩",
    projects: [
      {
        projectName: "우쥬 & Diby 통합 어드민",
        position: "Frontend Engineer",
        period: "2022.08 ~ 2022.10",
        techStack: [
          "Next.js",
          "Redux-Toolkit",
          "Redux-Saga",
          "React-hook-form",
          "Emotion",
        ],
        achievements: [
          {
            title: "통합 어드민 개발 프로젝트에 프론트엔드 개발 참여",
            items: [
              "설문 리스트 조회 페이지 및 상세 응답 확인 페이지 개발, 화면 일관성 및 코드 재사용성을 고려한 구조 설계에 기여",
            ],
          },
          {
            title: "Redux-Saga 기반 비동기 로직 구성 및 API 연동 작업 수행",
            items: [
              "복잡한 상태 흐름 및 API 요청/응답 처리 구조를 Redux-Saga 기반으로 설계",
              "각 서비스의 백엔드 API 연동 로직 통합 및 예외 처리 구현",
            ],
          },
        ],
      },
    ],
  },
  {
    companyName: "헬로디지털",
    projects: [
      {
        projectName: "DigitalWork for SMS",
        position: "Frontend Engineer",
        period: "2021.10 ~ 2022.02",
        techStack: [
          "JavaScript",
          "jQuery",
          "pug",
          "node.js",
          "pm2",
          "HubspotAPI",
          "NaverSENS",
        ],
        achievements: [
          {
            title: "HubSpot 마케팅 자동화를 위한 SMS 앱 개발 및 배포",
            items: [
              "마케팅 자동화 플랫폼 내에서 SMS, LMS, MMS 메시지를 전송할 수 있도록 독립 실행형 앱 구축",
              "외부 메시지 전송 서비스(Naver SENS)를 연동하여 MMS, LMS, 예약 문자 등 다양한 전송 방식 구현",
              "Node.js 기반 전송 API 서버 및 Pug 템플릿 적용",
            ],
          },
          {
            title: "Node.js 기반 전송 API 서버 및 Pug 템플릿 적용",
            items: [
              "HTML 기반 메시지 구성을 위해 Pug 템플릿 엔진 도입",
              "사용자 입력값 기반으로 다양한 메시지 형태의 콘텐츠 구성 기능 제공",
              "PM2를 활용한 무중단 운영 환경 구성 및 배포",
            ],
          },
        ],
      },
      {
        projectName: "하이닉스 뉴스룸",
        projectLink: "https://newsroom.hynix.com",
        position: "Frontend Engineer",
        period: "2021.08 ~ 2021.12",
        techStack: [
          "JavaScript",
          "jQuery",
          "HTML",
          "CSS",
          "aws-LightSail",
          "node.js",
          "Hubl",
        ],
        achievements: [
          {
            title: "HubSpot CMS의 HubL을 활용한 뉴스룸 사이트 구축",
            items: [
              "HubL(HubSpot 전용 템플릿 엔진)을 활용해 화면 레이아웃 구성 및 코드 모듈화",
              "Jinja 기반 템플릿 구조를 활용하여 기사, 썸네일, 태그 등 콘텐츠 유형별 구조 설계",
              "유형별 템플릿 분리로 CMS 내 콘텐츠 운영 효율성 강화",
            ],
          },
          {
            title: "	Node.js 기반 외부 API 연동 서버 개발",
            items: [
              "외부 API 데이터를 HubSpot과 연동 가능하도록 가공",
              "AWS Lightsail 인프라를 활용한 API 서버 배포 및 운영 환경 구성",
              "배포 자동화 및 간단한 모니터링 환경 구축으로 운영 편의성 확보",
            ],
          },
        ],
      },
      {
        projectName: "파일 아카이브",
        position: "Frontend Engineer",
        period: "2021.04 ~ 2022.02",
        techStack: ["React", "Context API", "Fabric.js", "Antd"],
        achievements: [
          {
            title:
              "파일 업로드, 검색, 열람 및 공유 기능을 갖춘 사내 웹 서비스 개발 담당",
            items: [
              "내부 문서 자료를 효과적으로 저장·관리할 수 있는 웹 기반 아카이브 시스템 구축",
              "다양한 파일 유형을 검색·열람·공유할 수 있는 UI 기능 개발",
              "파일/폴더/검색 등 상태가 컴포넌트 간 깊게 공유되어야 하는 구조에서 prop drilling 이슈를 해결하기 위해 Context API 도입",
              "다양한 디바이스 환경에서 접근 가능한 반응형 레이아웃 설계",
              "Fabric.js를 활용해 PDF 내 메모, 하이라이트 기능 등 인터랙티브 요소 구현",
            ],
          },
        ],
      },
      {
        projectName: "코오롱 하우스 비전(WEB&APP)",
        position: "Frontend Engineer",
        period: "2020.11 ~ 2021.06",
        techStack: ["React", "React-Native", "JavaScript", "CoreUI"],
        achievements: [
          {
            title:
              "입주민 관리용 어드민 시스템 개발 및 모바일 App 유지보수·기능 개선",
            items: [
              "관리자 전용 웹 어드민과 입주민 대상 모바일 앱 양쪽의 기능 안정성 확보 및 품질 개선",
              "정기 릴리즈를 포함한 운영 체계 관리",
            ],
          },
          {
            title: "React 기반 어드민 화면 구성 고도화 및 구조 설계 참여",
            items: [
              "CoreUI 기반으로 어드민 페이지 UI 구성 및 초기 프로젝트 구조 정립",
              "모바일 앱 내 메인 화면 및 메뉴 구조 개선",
            ],
          },
          {
            title: "React Native CLI를 활용한 앱 기능 개선 및 버그 대응",
            items: [
              "사용자 피드백 기반으로 주요 기능 오류 수정 및 UI 흐름 개선",
              "앱스토어(iOS) 정기 배포 프로세스를 통해 안정적인 운영 관리",
            ],
          },
        ],
      },
    ],
  },
];
