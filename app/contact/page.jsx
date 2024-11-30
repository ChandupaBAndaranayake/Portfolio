"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
 } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 770 788 785",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "chandupachiranjewa@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description: "No. 71/06 Padukka Road Horana(12400) SriLanka",
  },
]


const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_emo9sko"; // Replace with your EmailJS service ID
    const templateID = "template_a8nwofu"; // Replace with your EmailJS template ID
    const userID = "gMbsacaj3NFJnj1P1"; // Replace with your EmailJS user ID

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          alert("Message sent successfully!");
          console.alert("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Failed to send the message.");
          console.error("FAILED...", error);
        }
      );
  };

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
      className="py-6"
    >
       <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit} 
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60"> 
                I am always open to exploring new opportunities and collaborations. If you have a project or initiative you'd like to discuss, please don't hesitate to get in touch. Let's work together to achieve exceptional results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  name="firstname" 
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input 
                  name="lastname" 
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input 
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input 
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Systems Engineer</SelectItem>
                    <SelectItem value="cst">Network Engineer</SelectItem>
                    <SelectItem value="mst">DevOps</SelectItem>
                    <SelectItem value="lst">TechOps</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message" 
                className="h-[200px]"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li 
                   key={index}
                   className="flex items-center gap-6"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
       </div>
    </motion.div>
  )
}

export default Contact
