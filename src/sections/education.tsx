import {
  AccordionComponent,
  AccordionItem,
} from "@/components/ui/icon-accordion";

const education: AccordionItem[] = [
  {
    id: "1",
    icon: "GraduationCap",
    title: "KJ Somaiya Institute of Technology",
    subtitle: "B.Tech in Information Technology | Aug.2021 - Jun.2025",
    content: (
      <>
        <ul className="list-disc text-sm md:text-base space-y-1">
          <li className="marker:text-muted-foreground text-foreground">
            CGPA: <b>8.93</b>
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Location: Mumbai, India
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "2",
    icon: "University",
    title: "Mithibai College, Chauhan Institute of Science",
    subtitle: "HSC Science | Jul.2019 — Jun.2021",
    content: (
      <>
        <ul className="list-disc text-sm md:text-base space-y-1">
          <li className="marker:text-muted-foreground text-foreground">
            Grade: <b>87.9%</b>
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Location: Mumbai, India
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "3",
    icon: "LibraryBig",
    title: "Maneckji Cooper Education Trust School",
    subtitle: "ICSE Board | Jul.2007 - Jun.2019",
    content: (
      <>
        <ul className="list-disc text-sm md:text-base space-y-1">
          <li className="marker:text-muted-foreground text-foreground">
            Grade: <b>89.33.%</b>
          </li>
          <li className="marker:text-muted-foreground text-foreground">
            Location: Mumbai, India
          </li>
        </ul>
      </>
    ),
  },
];

export function Education() {
  return (
    <section className="space-y-0" id="education">
      <h2 className="text-2xl md:text-3xl font-semibold border-y px-4 md:px-6">
        Education
      </h2>
      <div className="">
        <AccordionComponent items={education} />
      </div>
    </section>
  );
}
