"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/mock";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  description: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-600 text-white py-24 mt-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xl text-blue-100 mb-4">Our Projects</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Pioneering the Future of Construction
          </h1>
          <p className="text-lg mt-4 text-blue-100">
            Through innovation, technology, and excellence
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tabs
              color="primary"
              aria-label="Project Categories"
              selectedKey={filter}
              onSelectionChange={(key) => setFilter(String(key))}
              className="mb-12 flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <Tab key={category} title={category} />
              ))}
            </Tabs>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    isPressable
                    onPress={() => setSelectedProject(project)}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <CardHeader className="flex flex-col items-start p-4">
                      <div className="flex items-center bg-blue-200/50 py-1 px-2 rounded-lg mb-1">
                        <span className="text-sm font-medium text-blue-900">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">
                        {project.title}
                      </h3>
                    </CardHeader>
                    <CardBody className="px-4 pt-0 pb-4">
                      <p className="text-gray-600 line-clamp-2">
                        {project.description}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onOpenChange={() => setSelectedProject(null)}
            size="2xl"
            scrollBehavior="inside"
          >
            <ModalContent>
              {(onClose) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4 }}
                >
                  <ModalHeader className="flex flex-col gap-1">
                    <h2 className="text-3xl font-semibold text-gray-900">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={16} className="mr-2" />
                      {selectedProject.location}
                    </div>
                  </ModalHeader>

                  <ModalBody>
                    <div className="relative w-full h-80 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </ModalBody>

                  <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </motion.div>
              )}
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
