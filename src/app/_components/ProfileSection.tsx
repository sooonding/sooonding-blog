import { Card, CardContent } from "@/common/components/ui/card";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/sooonding",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sooonding",
  },
  {
    icon: Mail,
    href: "mailto:sooonding@gmail.com",
  },
];

export default function ProfileSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-1">
              <div className="h-30 w-30 overflow-hidden rounded-full">
                <Image
                  src="/images/profile.jpeg"
                  alt="프로필 이미지"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold">sooonding</h3>
            <p className="text-muted-foreground text-sm">
              going on make gradual improvements in realizing interactive
              performance 🦾
            </p>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-muted-foreground text-xs font-bold">
              Find me on
            </p>
            {socialLinks.map((item, index) => (
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1"
                key={index}
              >
                {item.href.includes("mail") && (
                  <span className="text-muted-foreground text-xs font-bold">
                    and
                  </span>
                )}
                <item.icon className="h-4 w-4 transition-all hover:text-indigo-600" />
              </Link>
            ))}
          </div>

          <p className="bg-primary/10 rounded p-2 text-center text-sm">
            꿈나무 ✨
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
