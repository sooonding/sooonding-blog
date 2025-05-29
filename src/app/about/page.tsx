import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import AboutCard from "./_components/AboutCard";
import { ISkill, work_experience } from "@/components/features/About/skill";

export default function About() {
  return (
    <div className="container space-y-12 py-8">
      {/* 프로필 섹션 */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <Image
            src="/images/imoji.png"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">전성진</h1>
            <Link
              href="mailto:sooonding@gmail.com"
              className="hover:text-primary flex items-center gap-2 text-sm text-gray-400"
            >
              <Mail size={16} />
              sooonding@gmail.com
            </Link>
            <Link
              href="https://github.com/sooonding"
              className="hover:text-primary flex items-center gap-2 text-sm text-gray-400"
            >
              <Github size={16} />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/yourlinkedin"
              className="hover:text-primary flex items-center gap-2 text-sm text-gray-400"
            >
              <Linkedin size={16} />
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* About Me 섹션 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Hola!</h2>
        <p className="text-muted-foreground leading-relaxed">
          {/* 기존 자기소개 내용 유지 */}
          기획과 개발 사이에서 흐름을 설계하고, 사용자와 기술 사이를 연결해온
          프론트엔드 개발자입니다.
          <br />
          <br />
          3년 이상 Next.js와 React 생태계에서 프론트엔드 개발 경험을 쌓으며,
          단순한 화면 구현을 넘어 기획·개발·운영 전반을 조율하는 역할을
          해왔습니다.
          <br />
          <br />
          특히 기획자와 개발자 간의 간극을 좁히고, 사용자 중심의 제품 개선을
          이끄는 데 강점을 갖고 있습니다.
          <br />
          <br />
          직전 프로젝트에서는 PM과 개발을 병행하며, 스프린트 구조 도입,
          커뮤니케이션 체계 정비, 데일리 미팅 정착 등을 통해 팀 생산성 30% 향상,
          사용자 피드백 기반 기능 개선을 주도해 제품 완성도와 운영 효율을 동시에
          끌어올렸습니다.
          <br />
          <br />
          현재는 DevRel과 교육 PM 등, 개발자와 개발자가 되려는 사람 모두를
          지원하는 역할에 관심을 넓히고 있으며, 개인 블로그와 예제 코드 공유를
          통해 커뮤니티와 지식을 나누고 있습니다.
        </p>
      </section>

      {/* Work Experience 섹션 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Work</h2>
        {work_experience.map((work: ISkill) => (
          <AboutCard key={work.id} {...work} />
        ))}
      </section>

      {/* Experience 섹션 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">활동명</h3>
            <p className="text-gray-300">활동 설명</p>
          </div>
        </div>
      </section>
    </div>
  );
}
