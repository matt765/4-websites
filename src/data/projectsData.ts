import TailcastImage from "../assets/images/tailcast.png";
import CoinstackImage from "../assets/images/paysafenow.png";
import InnovateImage from "../assets/images/innovate.png";
import FoodhubImage from "../assets/images/foodhub.png";

export const projectsData = [
    {
      title: "PaySafeNow",
      desc: "Website template for innovative online platform providing secure payment solutions.",
      techStack: "Webflow",
      liveLink: "https://paysafenow.vercel.app/",
      image: CoinstackImage,
      isLight: true,
    },
    {
      title: "InnoVate",
      desc: "Website for modern interior design company, created using client-first design rules",
      techStack: "Webflow",
      liveLink: "https://innovate-interior.vercel.app/",
      previewLink:
        "https://preview.webflow.com/preview/innovate-interior?utm_medium=preview_link&utm_source=designer&utm_content=innovate-interior&preview=a7b8553f8c91a11c0d12c3876699a7a4&workflow=preview",
      image: InnovateImage,
    },
    {
      title: "Tailcast",
      desc: "Dark themed website template built on AstroJS, designed for SaaS business.",
      techStack: "Astro, React, Tailwind",
      liveLink: "https://tailcast.vercel.app/",
      codeLink: "https://github.com/matt765/Tailcast",
      image: TailcastImage,
    },
  
    {
      title: "GreenHub",
      desc: "Healthy and organic food restaurant website with lots of images and vivid color palette",
      techStack: "HTML, CSS, JS, Shuffle.dev",
      liveLink: "https://greenhubfoods.vercel.app/",
      image: FoodhubImage,
    },
  ];
  