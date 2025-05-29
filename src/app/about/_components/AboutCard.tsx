import { Badge } from "@/common/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";
import { ISkill } from "@/components/features/About/skill";
import { formatDateWithDot } from "@/lib/date";

export default function AboutCard(props: ISkill) {
  const {
    job_title,
    job_role,
    job_start_date,
    job_end_date,
    job_skills,
    job_description,
  } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3 className="text-xl font-semibold">{job_title}</h3>
        </CardTitle>
        <CardDescription>
          <p className="dark:text-gray-400">{`${job_role} (${formatDateWithDot(job_start_date)} ~ ${formatDateWithDot(job_end_date)})`}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {job_description?.map((item, index) =>
          typeof item === "string" ? (
            <li key={index} className="mb-2 text-gray-500">
              {item}
            </li>
          ) : (
            <div key={index} className="mb-2">
              <p className="text-gray-500">{item.title}</p>
              <ul className="mt-2 ml-4">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="text-gray-500">
                    • {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          {job_skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="px-2 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
