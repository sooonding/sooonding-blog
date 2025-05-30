import { Badge } from "@/common/components/ui/badge";
import { Separator } from "@/common/components/ui/separator";
import { experiences } from "@/components/features/About/projects";
import Link from "next/link";

export default function AboutProjects() {
  return (
    <div className="container py-8">
      <div className="space-y-12">
        {experiences.map((company, companyIndex) => (
          <div key={company.companyName}>
            {/* 프로젝트 목록 */}
            <div className="space-y-8">
              {company.projects.map((project) => (
                <section key={project.projectName} className="space-y-5">
                  {/* 프로젝트 정보 */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        {project.projectLink ? (
                          <Link
                            href={project.projectLink}
                            className="group inline-flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h2 className="group-hover:text-primary text-2xl font-bold transition-colors">
                              {project.projectName}
                            </h2>
                            <span className="text-muted-foreground group-hover:text-primary">
                              ↗
                            </span>
                          </Link>
                        ) : (
                          <h2 className="text-2xl font-bold">
                            {project.projectName}
                          </h2>
                        )}
                        <div className="text-muted-foreground">
                          <span>{project.position}</span>
                        </div>
                      </div>
                      <time className="text-muted-foreground text-sm">
                        {project.period}
                      </time>
                    </div>

                    {/* 기술 스택 */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* 성과 목록 */}
                  <div className="space-y-5">
                    {project.achievements.map(
                      (achievement, achievementIndex) => (
                        <div key={achievementIndex} className="space-y-2">
                          <h3 className="text-lg font-semibold">
                            {achievement.title}
                          </h3>
                          <ul className="text-muted-foreground list-disc space-y-2 pl-4">
                            {achievement.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ),
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* 마지막 회사가 아닐 경우에만 구분선 추가 */}
            {companyIndex < experiences.length - 1 && (
              <Separator className="my-12" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
