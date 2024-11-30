"use client";
import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

// GitHub configuration
const GITHUB_USERNAME = "ChandupaBAndaranayake";

async function fetchRepositories() {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  try {
    const { data: rateLimit } = await octokit.request("GET /rate_limit");
    const remainingRequests = rateLimit.resources.core.remaining;

    if (remainingRequests === 0) {
      console.warn(
        "GitHub API rate limit exceeded. Please wait before making more requests."
      );
      return [];
    }

    const { data: repos } = await octokit.request("GET /users/{username}/repos", {
      username: GITHUB_USERNAME,
      type: "all",
      sort: "updated",
    });

    return repos.filter((repo) => repo.stargazers_count > 0);
  } catch (error) {
    console.error("Failed to fetch repositories", error);
    return [];
  }
}

async function fetchRepositoryLanguages(repoName) {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  try {
    const { data: languages } = await octokit.request(
      "GET /repos/{owner}/{repo}/languages",
      {
        owner: GITHUB_USERNAME,
        repo: repoName,
      }
    );

    return Object.keys(languages);
  } catch (error) {
    console.error(`Failed to fetch languages for ${repoName}`, error);
    return [];
  }
}

async function fetchRepositoryImage(repoName) {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  try {
    const { data: contents } = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/images",
      {
        owner: GITHUB_USERNAME,
        repo: repoName,
      }
    );

    if (Array.isArray(contents) && contents.length > 0 && contents[0].download_url) {
      const response = await fetch(contents[0].download_url);
      const blob = await response.blob();
      const base64 = await blobToBase64(blob);
      return base64;
    }

    return null;
  } catch (error) {
    console.error(`Failed to fetch image for ${repoName}`, error);
    return null;
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export default function WorkPage() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const repositories = await fetchRepositories();
        const projectsData = await Promise.all(
          repositories.map(async (repo, index) => {
            const languages = await fetchRepositoryLanguages(repo.name);
            const image = await fetchRepositoryImage(repo.name);

            return {
              num: String(index + 1).padStart(2, "0"),
              title: repo.name,
              description: repo.description || "No description available",
              image: image || "/fallback-image.jpg",
              languages,
              github: repo.html_url,
            };
          })
        );

        setProjects(projectsData);
        setProject(projectsData[0]); // Set the first project by default
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveIndex(currentIndex);
    setProject(projects[currentIndex]);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-white text-2xl">Loading projects...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        {project && (
          <div
            key={project.num}
            className="flex flex-col xl:flex-row xl:gap-[30px] mb-5"
          >
            {/* Left Section */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                  {project.title}
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.languages.map((language, index) => (
                    <li key={index} className="text-xl text-accent">
                      {language}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link
                    href={`https://chandupabandaranayake.github.io/${project.title}/`}
                    target="_blank"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={100}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
                initialSlide={activeIndex}
                loop={false}
              >
                {projects.map((projectItem, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={projectItem.image}
                          fill
                          className="object-cover"
                          alt={projectItem.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns 
                  containerStyles={"flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"} 
                  btnStyles={"bg-accent hover:bg-accent-hover text-primary text-[50px] w-[80px] flex justify-center items-center transition-all"}
                />
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}