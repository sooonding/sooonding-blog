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
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-muted-foreground leading-relaxed">
          {/* 기존 자기소개 내용 유지 */}
          기술과 사람을 연결하는 일에 관심을 가지고, 협업과 성장을 중심으로
          커리어를 쌓아가고 있습니다. <b>Next.js와 TypeScript</b> 기반의
          프론트엔드 개발 경험을 바탕으로, 사용자 중심의 UI/UX 설계와 안정적인
          웹 애플리케이션 구축에 집중해왔습니다. <br />
          동시에{" "}
          <b>사내 교육 서비스 및 플랫폼 기획을 주도하며 PM 역할도 병행하며</b>,
          팀 간 원활한 협업을 위한 커뮤니케이션에도 적극적으로 기여해왔습니다.
          사용자 피드백을 바탕으로 기능 개선을 반복하고, 개발자와 디자이너
          사이의 목표와 우선순위를 조율하는 실전 경험을 통해 기획–개발–운영
          전반을 이해하게 되었습니다. 기술과 비즈니스, 사용자 간의 간극을 좁히는
          데 강점을 가지고 있으며, 앞으로도 함께 성장할 수 있는 팀에서 의미 있는
          협업과 기술적 성장을 지속해 나가고자 합니다.
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
