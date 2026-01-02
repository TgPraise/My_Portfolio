import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import project1 from "../assets/netchill-screenshot.jpg";
import project2 from "../assets/carplug-screenshot.png";
import project3 from "../assets/Pirate-gang-screenshot.png";
import project4 from "../assets/backend-screenshot.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movie Websites",
      description: "A dynamic movies trailer platform featuring real-time insights, audience tracking, and advanced content analytics — built with modern web technologies for a seamless viewing experience",
      image: project1,
      technologies: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://tech-camp-javascript-movies.onrender.com/",
      githubUrl: "https://github.com/TgPraise/tech-camp-javascript-movies",
      featured: true
    },
    {
      id: 2,
      title: "Cars shopping web",
      description: "A full-featured car retailing platform with secure online payments, real-time order tracking, cars listings, and a seamless experience across all devices.",
      image: project2,
      technologies: ["HTML", "Tailwind CSS", "CSS", "Javascript", "Python"],
      liveUrl: "https://carplug.onrender.com/",
      githubUrl: "https://github.com/TgPraise/Carplug-repository",
      featured: true
    },
    {
      id: 3,
      title: "Pirate Gang",
      description: "Pirate Gang is a Web3 growth and marketing platform that helps crypto projects boost visibility, build communities, and drive engagement through strategic campaigns.",
      image: project3,
      technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
      liveUrl: "https://pirate-gang.onrender.com/",
      githubUrl: "https://github.com/TgPraise/Pirate-Gang.git",
      featured: false
    },
    {
      id: 4,
      title: "Ecommerce Backend",
      description: "This fastAPI-Powered e-commerce backend hosted on Render. it provides restful endpoints for managing products, users, carts, and orders, with interactive API documentation available via swagger UI",
      image: project4,
      technologies: ["Python", "FastAPI", "PostgresQL"],
      liveUrl: "https://fastapi-ecommerce-s885.onrender.com/docs",
      githubUrl: "https://github.com/TgPraise/fastapi-Ecommerce.git",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured{" "}
              Projects
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`relative overflow-hidden lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-4' : ''}`}>
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent lg:bg-linear-to-r"></div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white border-0 px-3 py-1">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className={`p-8 lg:p-12 flex flex-col justify-center lg:col-span-3 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-300">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            className="bg-white/10 hover:bg-white/20 text-gray-300 border border-white/20 transition-colors px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 shadow-lg shadow-blue-500/20 transition-all duration-200"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                          Live Demo
                        </Button>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          className="group w-full sm:w-auto bg-transparent border-2 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30 font-medium px-6 transition-all duration-200"
                        >
                          <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          View Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Button 
            className="group bg-transparent border-2 border-blue-600 text-blue-500 hover:bg-blue-600/10 font-medium px-8 py-6 text-base rounded-md transition-all duration-200"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;