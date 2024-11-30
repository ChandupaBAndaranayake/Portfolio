"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs"

const services = [
  {
    num: '01',
    title: 'Systems Engineer',
    description: 'Expert in building, configuring, and maintaining systems, ensuring high availability and efficiency. Proficient in Linux system administration and automation, with hands-on experience in monitoring and troubleshooting complex environments.',
    href: ""
  },
  {
    num: '02',
    title: 'Network Engineer',
    description: 'Skilled in configuring and maintaining network devices, including routers, switches, and firewalls. Expertise in DNS, DHCP server configurations, and network security, with foundational knowledge in CCNA and RHCSA.',
    href: ""
  },
  {
    num: '03',
    title: 'DevOps',
    description: 'Adept at implementing CI/CD pipelines, system monitoring, and containerized application deployment using tools like Docker, Kubernetes, and Jenkins. Proficient in cloud services such as Google Cloud and Azure, emphasizing automation and scalability.',
    href: ""
  },
  {
    num: '04',
    title: 'TechOps',
    description: 'Specializes in operational support for infrastructure and applications, including server provisioning, software updates, and disaster recovery planning. Experienced in using Nagios for distributed system monitoring and ensuring seamless IT operations.',
    href: ""
  },

]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut"
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=> {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45" 
                    href={service.href}
                  >
                    <BsArrowDownRight className="reset text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )

          })}


        </motion.div>
      </div>
    </section>
  )
}

export default Services
