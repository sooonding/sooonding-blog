export interface ISkill {
  id: number;
  job_title: string;
  job_role: string;
  job_start_date: string;
  job_end_date: string;
  job_skills: string[];
  job_description?: Array<string | { title: string; subItems: string[] }>;
}

export const work_experience: ISkill[] = [
  {
    id: 1,
    job_title: "Hello Digital",
    job_role: "PM,프론트엔드 개발자",
    job_start_date: "2022.10",
    job_end_date: "2024.12",
    job_skills: ["React", "TypeScript", "Next.js"],
    job_description: [
      "브랜드/서비스 운영을 위한 어드민 시스템 및 신규 서비스 기획 전반을 담당",
      "기획부터 화면 설계, 개발 협업, 고객사 커뮤니케이션 및 피드백 반영까지 제품 전 주기 관리 수행",
      {
        title: "팀 내 애자일 프로세스 기반 문화 정착 주도",
        subItems: [
          "데일리 스탠드업, 격주 팀 회의, 1~2주 단위 스프린트 운영",
          "기획 일정 및 우선순위 조율을 통한 협업 체계 확립",
        ],
      },
      "기획 리딩 및 부서 간 커뮤니케이션을 통해 기획-개발 사이클 정착 및 운영 효율화, 반복 가능한 업데이트 과정 구축",
      "어드민 기능 개발 및 운영 유지보수에도 직접 참여, 실사용자 요구사항 반영 및 개선 주도",
    ],
  },
  {
    id: 2,
    job_title: "디비디랩",
    job_role: "프론트엔드 개발자",
    job_start_date: "2022.08",
    job_end_date: "2022.10",
    job_skills: ["React", "TypeScript", "Next.js"],
    job_description: [
      "우쥬 & Diby 통합 어드민 개발 프로젝트에 프론트엔드 개발자로 참여",
      "Redux-Saga 기반 비동기 처리 로직 구성 및 API 연동 작업 수행",
      "디자이너 및 백엔드 개발자와 협업하여 요구사항 조율 및 UI 구현",
    ],
  },

  {
    id: 3,
    job_title: "Hello Digital",
    job_role: "프론트엔드 개발자",
    job_start_date: "2020.06",
    job_end_date: "2022.03",
    job_skills: ["React", "TypeScript", "Next.js"],
    job_description: [
      "React, Next.js, Node.js, React Native 기반 웹 및 앱 프론트엔드 개발 및 유지보수",
      "기획자·디자이너·백엔드 개발자와의 협업을 통한 요구사항 반영 및 UI 기능 구현",
      "주요 서비스의 운영 중 발생하는 이슈 대응 및 리팩토링 수행",
      "다양한 프로젝트의 신규 개발 및 기능 유지보수 작업을 병행, 일정 조율과 품질 유지에 기여",
    ],
  },
];
