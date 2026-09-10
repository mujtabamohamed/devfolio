import {
  AccordionComponent,
  AccordionItem,
} from "@/components/ui/icon-accordion";
import { Separator } from "@/components/ui/separator";

const experiences: AccordionItem[] = [
  {
    id: "1",
    image: "/experience/accenture.png",
    title: "Accenture",
    current: true,
    subtitle: "SAP Basis Administrator | Nov.2025 - Present | Mumbai, India",
    content: (
      <>
        <ul className="list-disc text-xs md:text-base space-y-3">
          <li className="marker:text-muted-foreground text-foreground">
            Developed foundational expertise in enterprise system administration
            and infrastructure support through structured SAP Basis training,
            directly applicable to maintaining and supporting mission-critical,
            production systems
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Reduced manual ticket routing time by building a Python script that
            uses an AI Agent to classify and auto-route support tickets to the
            relevant team, improving SLA adherence.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Improved reporting accuracy by designing a standardized
            categorization framework for production support tickets, enabling
            faster root-cause analysis across the team.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Maintained 100% on-time SLA delivery across access and
            role-modification requests by resolving second-line SAP Security
            support tickets in a live production environment
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["SAP Basis", "SAP Security", "GRC", "Role Management"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-md border bg-card px-2 py-0.5 text-xs lg:text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </>
    ),
  },
  {
    id: "2",
    image: "/experience/wecommit.jpeg",
    title: "WeCommit",
    subtitle:
      "Pyhton Developer | Nov.2024 - May.2025 | Seoul, South Korea (Remote)",
    content: (
      <>
        <ul className="list-disc text-xs md:text-base space-y-3">
          <li className="marker:text-muted-foreground text-foreground">
            Scaled a hotel data pipeline to 10,000+ records by building a
            Python-based API using Serp API for scraping and Places API for
            address validation, storing in a structured database.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Achieved 95% accuracy in automated hotel name extraction and fuzzy
            matching by integrating OpenAI’s GPT into a CSV data-ingestion
            pipeline, eliminating need for manual data cleaning.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Delivered a real-time SNS pipeline, by building a FastAPI-based
            Twitter bot that fetched hotel data, generated images, and posted
            listings automatically
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
    id: "3",
    image: "/experience/inetbase.png",
    title: "iNetBase",
    subtitle: "Full Stack Developer | Jan.2024 - March.2024 | Mumbai, India",
    content: (
      <>
        <ul className="list-disc text-xs md:text-base space-y-3">
          <li className="marker:text-muted-foreground text-foreground">
            Improved page load times and user retention by optimizing existing
            TypeScript and React.js web platforms for 10+ client projects.
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Maintained zero-downtime deployment across 10+ hosted web-apps by
            managing hosting infrastructure and deployment.
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
    id: "4",
    image: "/experience/kjsit.png",
    title: "KJ Somaiya Institute of Technology",
    subtitle: "MERN Stack Developer  |  May.2023 - Jun.2023 | Mumbai, India",
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
      <Separator />
      <h2 className="text-2xl md:text-3xl font-semibold px-4 md:px-6">
        Experience
      </h2>
      <Separator />
      <div className="">
        <AccordionComponent items={experiences} />
      </div>
      <Separator />
    </section>
  );
}
