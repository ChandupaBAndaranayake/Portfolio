"use client";

import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
 } from '@radix-ui/react-tooltip';

 import { ScrollArea } from "@/components/ui/scroll-area";
 import { motion } from 'framer-motion';

const icons = [
  { 
    Component: SiIcons.SiMongodb, 
    name: 'MongoDB', 
    category: 'Database' 
  },
  { 
    Component: SiIcons.SiMysql, 
    name: 'MySQL', 
    category: 'Database' 
  },
  { 
    Component: SiIcons.SiOracle, 
    name: 'Oracle', 
    category: 'Database' 
  },
  { 
    Component: SiIcons.SiPostgresql, 
    name: 'PostgreSQL', 
    category: 'Database' 
  },
  { 
    Component: SiIcons.SiRedis, 
    name: 'Redis', 
    category: 'Database' 
  },
  { 
    Component: FaIcons.FaPython, 
    name: 'Python', 
    category: 'Programming' 
  },
  { 
    Component: FaIcons.FaJava, 
    name: 'Java', 
    category: 'Programming' 
  },
  { 
    Component: SiIcons.SiGo, 
    name: 'Go-lang', 
    category: 'Programming' 
  },
  { 
    Component: SiIcons.SiLinux, 
    name: 'Linux', 
    category: 'DevOps' 
  },
  { 
    Component: SiIcons.SiGnubash, 
    name: 'Bash', 
    category: 'DevOps' 
  },
  { 
    Component: SiIcons.SiJupyter, 
    name: 'Jupyter Notebook', 
    category: 'Programming' 
  },
  { 
    Component: SiIcons.SiTensorflow, 
    name: 'TensorFlow', 
    category: 'Programming' 
  },
  { 
    Component: FaIcons.FaDocker, 
    name: 'Docker', 
    category: 'DevOps' 
  },
  { 
    Component: SiIcons.SiKubernetes, 
    name: 'Kubernetes', 
    category: 'DevOps' 
  },
  { 
    Component: SiIcons.SiGit, 
    name: 'Git', 
    category: 'DevOps' 
  },
  { 
    Component: SiIcons.SiJenkins, 
    name: 'Jenkins', 
    category: 'DevOps' 
  },
  { 
    Component: FaIcons.FaReact, 
    name: 'React.js', 
    category: 'Programming' 
  },
  { 
    Component: SiIcons.SiNextdotjs, 
    name: 'Next.js', 
    category: 'Programming' 
  },
  { 
    Component: SiIcons.SiTailwindcss, 
    name: 'Tailwind CSS', 
    category: 'Programming' 
  },
  { 
    Component: FaIcons.FaHtml5, 
    name: 'HTML', 
    category: 'Programming' 
  },
  { 
    Component: FaIcons.FaCss3Alt, 
    name: 'CSS', 
    category: 'Programming' 
  },
  { 
    Component: FaIcons.FaJs, 
    name: 'JavaScript', 
    category: 'Programming' 
  },
  { 
    Component: SiIcons.SiArduino, 
    name: 'Arduino', 
    category: 'Programming' 
  },
  { 
    Component: SiIcons.SiRaspberrypi, 
    name: 'Raspberry Pi', 
    category: 'Programming' 
  },
  { 
    Component: SiIcons.SiCplusplus, 
    name: 'C++', 
    category: 'Programming' 
  },
  { 
    Component: SiIcons.SiC, 
    name: 'C', 
    category: 'Programming' 
  },
];

const about = {
  title: "About me",
  description:"Computer Systems and Network Engineering student passionate about tech and cybersecurity, focused on innovation and strengthening digital systems.",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Chandupa Chiranjeewa Bandaranayake",
    },
    {
      fieldname: "Phone",
      fieldValue: "(+94) 770 788 785",
    },
    {
      fieldname: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldname: "Discord",
      fieldValue: "punky7",
    },
    {
      fieldname: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldname: "Freelance",
      fieldValue: "Available :)",
    },
    {
      fieldname: "Languages",
      fieldValue: "English,Sinhala",
    },
    {
      fieldname: "Email",
      fieldValue: "chandupachiranjewa@gmail.com",
    },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Hands-on experience in computer systems, networking, and cybersecurity, with a focus on emerging technologies and strengthening digital infrastructures.",
  items: [
    {
      company: "Epyco Records",
      position: "Full Stack Developer",
      duration: "2022 - present"
    },
    {
      company: "ECO Smart Bin",
      position: "IOT + Webapplication Developer",
      duration: "2023"
    },
    {
      company: "PepperCare AI",
      position: "IOT Dev, GCP, Machine learning, ReactVite",
      duration: "2024"
    },
    {
      company: "ATMEGA328P Firemware",
      position: "Embedded system Developer",
      duration: "2024"
    },
    {
      company: "Vehicle Rental system",
      position: "java, JDBC, MySQL, XAMPP",
      duration: "2023"
    },
  ]
};

const education = {
  icon: '/assets/resume/badge.svg',
  title: 'Certifications',
  description: "Skilled in networking and cybersecurity, currently pursuing CCNA (Routing & Switching), Network Security, and RHCSA certifications. Focused on enhancing expertise in network infrastructure and system administration",
  items: [
    {
      insitution: "SriLanka Institute of Information Technology",
      degree: "Computer Systems and Network Engineering",
      duration: "2022 - present",
    },
    {
      insitution: "KobeKloud",
      degree: "Docker Training Course",
      duration: "2023",
    },
    {
      insitution: "Udemy",
      degree: "Kubernetes: Getting Started",
      duration: "2023",
    },
    {
      insitution: "Cisco Academy",
      degree: "CCNAv7: introduction to Networks",
      duration: "2023",
    },
    {
      insitution: "Cisco Academy",
      degree: "Network Security",
      duration: "Reading...",
    },
    {
      insitution: "Cisco Academy",
      degree: "CCNAv7: RSW Essentials",
      duration: "Reading...",
    },
    {
      insitution: "Red Hat",
      degree: "RHCSA (EX200)",
      duration: "Reading...",
    },
    {
      insitution: "coursera",
      degree: "The Fundamentals of RDMA Programming",
      duration: "Reading...",
    },
    {
      insitution: "coursera",
      degree: "The Fundamentals of RDMA Programming",
      duration: "Reading...",
    },
  ]
};

const skills = {
  title: "My skills",
  description: "Proficient in networking, system administration, and cybersecurity, with hands-on experience in network setup, security protocols, and server management. Actively pursuing advanced certifications in CCNA, Network Security, and RHCSA to further strengthen technical expertise.",
  skilllist: icons.map(({ Component, name, category }) => ({
    icon: Component
    ? <Component />
    : null,
    name,
  })),
};


const Resume = () => {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn"
          },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
      <div className='container mx-auto'>
        <Tabs
          defaultValue="experience"
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience </TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[350px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.insitution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <p className='max-w-[1000px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ScrollArea className="h-[330px]">
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                    {skills.skilllist.map((skill, index) => {
                      return <li
                        key={index}
                      >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[900px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index)=> {
                    return (
                      <li 
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldname}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                     </li>
                    )
                  })}
                </ul>
              </div>
              
            </TabsContent>

          </div>
        </Tabs>
      </div> 
    </motion.div>
  )
};

export default Resume;
