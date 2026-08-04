import { Cpu, Globe, Code } from "lucide-react";
import {
  AccordionComponent,
  AccordionItem,
} from "@/components/ui/icon-accordion";

const experiences: AccordionItem[] = [
  {
    id: "1",
    icon: "Cpu",
    title: "WeCommit",
    subtitle: "Full-Stack Developer | Nov.2024 - Jun.2025",
    content: (
      <>
        <ul className="list-disc text-xs md:text-base space-y-3">
          <li className="marker:text-muted-foreground text-foreground">
            Developed a Hotel API leveraging Serp API to scrape 10,000+ hotels,
            integrated Places API for address validation, and stored data in a
            structured database.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Automated CSV data ingestion with OpenAI GPT, achieving 95% accuracy
            in hotel name extraction and fuzzy matching.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Built a FastAPI-based Twitter bot to fetch hotel data, generate
            images, and post tweets, achieving a 90% engagement rate within the
            first month.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["Python", "FastAPI", "MySQL", "Next.js"].map((tech) => (
            <span
              key={tech}
              className="rounded-md border bg-card px-2 py-0.5 text-xs lg:text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "2",
    icon: "Globe",
    title: "iNetBase",
    subtitle: "Web Developer | Jan.2024 - March.2024",
    content: (
      <>
        <ul className="list-disc text-xs md:text-base space-y-3">
          <li className="marker:text-muted-foreground text-foreground">
            Implemented new features and updates into existing web platforms
            using React.js, Node.js and Express.js.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Optimized company websites, improving loading times and increasing
            user retention.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Managed hosting for 10+ web development projects, ensuring seamless
            deployment and minimal downtime.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="rounded-md border bg-card px-2 py-0.5 text-xs lg:text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "3",
    icon: "Code",
    title: "KJ Somaiya Institute of Technology",
    subtitle: "MERN Stack Developer  |  May.2023 - Jun.2023",
    content: (
      <>
        <ul className="list-disc text-xs md:text-base space-y-3">
          <li className="marker:text-muted-foreground text-foreground">
            Designed and developed an Internship Portal using React.js, Node.js,
            and Express.js, enabling 500+ students to apply for internships
            efficiently.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Integrated a MongoDB, optimizing data storage and retrieval for
            scalability.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Superheaded a 5-member team, streamlining coordination and improving
            project turnaround time.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="rounded-md border bg-card px-2 py-0.5 text-xs lg:text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    ),
  },
];

export function Experience() {
  return (
    <section className="space-y-0" id="experience">
      <h2 className="text-2xl md:text-3xl font-semibold border-y px-4 md:px-6">
        Experience
      </h2>
      <div className="">
        <AccordionComponent items={experiences} />
      </div>
    </section>
  );
}
