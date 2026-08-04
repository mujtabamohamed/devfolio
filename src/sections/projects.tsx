"use client";

import {
  FileText,
  MapPin,
  MessageCircle,
  ScanEye,
  Wheat,
  LinkIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Project = {
  id: string;
  // icon: React.ReactNode;
  duration: string;
  name: string;
  link: string;
  desc: string;
  // features: string[];
  // tags: string[];
  gif?: string;
  image?: string;
  mediaType: "gif" | "image" | "placeholder";
};

const projects: Project[] = [
  {
    id: "1",
    // icon: <FileText className="w-6 h-6" />,
    name: "Magic Mirror AI",
    duration: "Nov.2025 - Dec.2025",
    link: "https://magicmirrorai.vercel.app/",
    desc: "See clothes on you, not on models",
    // features: [
    //   "Built an AI-powered web app to convert PDFs into interactive chats using Next.js, Firebase, and OpenAI.",
    //   "Enabled context-aware PDF conversations with advanced AI chat capabilities for better user interaction.",
    //   "Designed an optimized pricing page, improving user engagement and conversion rates.",
    // ],
    // tags: ["Next.js", "Firebase", "OpenAI", "LangChain", "Pinecone"],
    image: "/projects/Magic Mirror.png",
    mediaType: "image",
  },
  {
    id: "2",
    // icon: <FileText className="w-6 h-6" />,
    name: "Chat PDF",
    duration: "Oct.2024 - Nov.2024",
    link: "https://github.com/mujtabamohamed/Chat-PDF",
    desc: "Turn your PDF into interactive chats using AI",
    // features: [
    //   "Built an AI-powered web app to convert PDFs into interactive chats using Next.js, Firebase, and OpenAI.",
    //   "Enabled context-aware PDF conversations with advanced AI chat capabilities for better user interaction.",
    //   "Designed an optimized pricing page, improving user engagement and conversion rates.",
    // ],
    // tags: ["Next.js", "Firebase", "OpenAI", "LangChain", "Pinecone"],
    image: "/projects/Chatify.png",
    mediaType: "image",
  },
  {
    id: "3",
    // icon: <Wheat className="w-6 h-6" />,
    name: "Crop Yield Prediction",
    duration: "Aug.2024 - Apr.2025",
    link: "https://drive.google.com/file/d/1-lG_j7QXAFO0akSI-VzJivG6-eTqPEzU/view?usp=sharing",
    desc: "Crop yield prediction using Sentinel-2 imagery and Machine Learning",
    // features: [
    //   "Automated the download, processing, and analysis of 100+ Sentinel-2 satellite image sets (2016–2024), generating monthly NDVI/NDWI indices for crop monitoring.",
    //   "Integrated 9+ years of weather and yield data, aggregating 100+ monthly statistics and enabling data-driven agricultural insights.",
    //   "Trained and evaluated machine learning models (Decision Tree, Random Forest) for crop yield prediction, achieving accuracy of 87.4%.",
    // ],
    // tags: ["QGIS", "Python", "Sentinel-2 Satellite Images"],
    image: "/projects/Crop Yield Prediction.png",
    mediaType: "image",
  },

  {
    id: "4",
    // icon: <ScanEye className="w-6 h-6" />,
    name: "Attention",
    duration: "Feb.2023 - Apr.2023",
    link: "https://github.com/mujtabamohamed/attention",
    desc: "Face recognition attendance system.",
    // features: [
    //   "Developed a face recognition attendance system using Python and OpenCV, achieving 90% accuracy in attendance tracking.",
    //   "Integrated machine learning algorithms to improve face detection and recognition accuracy.",
    //   "Designed a user-friendly interface for easy administration and monitoring of attendance records.",
    // ],
    // tags: ["Python", "OpenCV", "Firebase"],
    image: "/projects/Attention.png",
    mediaType: "image",
  },
  {
    id: "5",
    // icon: <MessageCircle className="w-6 h-6" />,
    name: "ChatWave",
    duration: "Feb.2023 - Apr.2023",
    link: "https://github.com/mujtabamohamed/chat-wave",
    desc: "A real-time chat application",
    // features: [
    //   "Built ChatWave, a real-time chat application enabling instant messaging between users",
    //   "Integrated WebSockets via Socket.io to support live, two-way messaging and updates.",
    //   "Persisted chat data in MongoDB, ensuring scalability and flexible document storage.",
    // ],
    // tags: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"],
    image: "/projects/Chatwave.png",
    mediaType: "image",
  },
  {
    id: "6",
    // icon: <MapPin className="w-6 h-6" />,
    name: "Localize",
    duration: "Feb.2023 - Apr.2023",
    link: "https://github.com/mujtabamohamed/localize",
    desc: "Location based advertising",
    // features: [
    //   "Developed a travel advisor web app using React.js, Node.js, integrating RapidAPI for real-time travel data and Google Maps API for accurate location-based services.",
    //   "Created dynamic search functionality to provide users with personalized travel recommendations.",
    //   "Incorporated nearby restaurants, hotels, and attractions, improving user experience",
    // ],
    // tags: ["React.js", "Node.js", "RapidAPI", "Google Maps API"],
    image: "/projects/Localize.png",
    mediaType: "image",
  },
  // {
  //   id: "6",
  //   // icon: <MessageCircle className="w-6 h-6" />,
  //   name: "Hola",
  //   duration: "Feb.2024 - Feb.2024",
  //   link: "https://github.com/mujtabamohamed/discord_translation_bot",
  //   desc: "Discord bot that translates messages into multiple languages",
  //   // features: [
  //   //   "Built ChatWave, a real-time chat application enabling instant messaging between users",
  //   //   "Integrated WebSockets via Socket.io to support live, two-way messaging and updates.",
  //   //   "Persisted chat data in MongoDB, ensuring scalability and flexible document storage.",
  //   // ],
  //   // tags: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"],
  //   image: "/projects/Hola.png",
  //   mediaType: "image",
  // },
];

export function Projects() {
  const renderMedia = (project: Project) => {
    if (project.mediaType === "gif" && project.gif) {
      return (
        <Image
          src={project.gif}
          alt={`${project.name} demo`}
          fill
          className="object-cover"
          unoptimized
        />
      );
    } else if (project.mediaType === "image" && project.image) {
      return (
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      );
    } else {
      return (
        <div className="absolute inset-0 bg-transparent flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-sm opacity-80">Project Demo</p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="space-y-0" id="projects">
      <h2 className="text-2xl md:text-3xl font-semibold border-y px-4 md:px-6">
        Projects
      </h2>

      <div
        className="relative grid md:grid-cols-2 
        lg:grid-cols-2 sm:border-b md:before:content-[''] 
        md:before:absolute md:before:inset-y-0 
        md:before:w-px md:before:bg-muted-foreground/10 md:before:left-1/2 
        md:before:transform md:before:-translate-x-[10px] 
        md:before:pointer-events-none md:after:content-[''] 
        md:after:absolute md:after:inset-y-0 md:after:w-px 
        md:after:bg-muted-foreground/10 md:after:left-1/2 
        md:after:transform md:after:translate-x-[10px] 
        md:after:pointer-events-none "
      >
        {projects.map((project, index) => (
          <div key={project.id} className="contents">
            <Link href={project.link} target="_blank" className="contents">
              <article className="group bg-transparent overflow-hidden mt-4 border-b sm:border-b-0 cursor-pointer md:col-span-1">
                <div className="relative px-4 sm:px-3">
                  {/* Media Preview Container */}
                  <div className="aspect-video border rounded-lg bg-transparent overflow-hidden relative">
                    {renderMedia(project)}
                  </div>
                </div>

                <div className="px-5 sm:px-8 py-4 ">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg sm:text-xl mb-1 truncate">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Key Features */}
                  {/* {project.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}  */}

                  {/* Tech Stack Tags */}
                  {/* <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="rounded-md border bg-muted px-2 py-1 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div> */}
                </div>
              </article>
            </Link>

            {index !== projects.length - 1 && index % 2 === 1 && (
              <div className="hidden md:flex flex-col col-span-full gap-5">
                <div className="h-px w-full bg-border"></div>
                <div className="h-px w-full bg-border"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
