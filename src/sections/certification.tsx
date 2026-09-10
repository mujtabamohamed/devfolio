import {
  AccordionComponent,
  AccordionItem,
} from "@/components/ui/icon-accordion";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const certifications: AccordionItem[] = [
  {
    id: "1",
    icon: "Atom",
    title: "The Complete 2023 Web Development Bootcamp",
    subtitle: "Dr. Angela Yu | Nov.2023",
    content: (
      <>
        <Image
          src={"/certificates/WebDev23.png"}
          alt="Certificate"
          width={500}
          height={500}
          className="w-full h-auto flex items-center justify-center rounded-md md:rounded-lg"
        />
      </>
    ),
  },
  {
    id: "2",
    icon: "Brain",
    title: "Google Cloud Computing Foundations and Generative AI",
    subtitle: "Google Cloud | Oct.2023",
    content: (
      <>
        <Image
          src={"/certificates/GC-GenAI23.png"}
          alt="Certificate"
          width={500}
          height={500}
          className="w-full h-auto flex items-center justify-center rounded-md md:rounded-lg"
        />
      </>
    ),
  },
  {
    id: "3",
    icon: "Cloud",
    title: "Innovating with Data and Google Cloud",
    subtitle: "Google Cloud | Nov.2023",
    content: (
      <>
        <Image
          src={"/certificates/GC-Data23.png"}
          alt="Certificate"
          width={500}
          height={500}
          className="w-full h-auto flex items-center justify-center rounded-md md:rounded-lg"
        />
      </>
    ),
  },
  {
    id: "4",
    icon: "TabletSmartphone",
    title: "The Complete Flutter Development Bootcamp with Dart",
    subtitle: "Dr. Angela Yu | Apr.2024",
    content: (
      <>
        <Image
          src={"/certificates/Flutter24.png"}
          alt="Certificate"
          width={500}
          height={500}
          className="w-full h-auto flex items-center justify-center rounded-md md:rounded-lg"
        />
      </>
    ),
  },
  {
    id: "5",
    icon: "Database",
    title: "Introduction to Tableau",
    subtitle: "Simpli Learn | Oct.2023",
    content: (
      <>
        <Image
          src={"/certificates/Tableau24.png"}
          alt="Certificate"
          width={500}
          height={500}
          className="w-full h-auto flex items-center justify-center rounded-md md:rounded-lg"
        />
      </>
    ),
  },
];

export function Certification() {
  return (
    <section className="space-y-0 pb-8" id="certifications">
      <Separator />
      <h2 className="text-2xl md:text-3xl font-semibold px-4 md:px-6">
        Cerifications
      </h2>
      <Separator />
      <div className="">
        <AccordionComponent items={certifications} />
      </div>
      <Separator />
    </section>
  );
}
