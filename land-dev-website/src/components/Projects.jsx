import { motion } from 'framer-motion'

export function Projects() {
  const projects = [
    { id: 1, title: 'Green Valley Community', description: 'Sustainable residential development', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=2067&q=80' },
    { id: 2, title: 'Downtown Revitalization', description: 'Urban renewal project', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2070&q=80' },
    { id: 3, title: 'Lakeside Resort', description: 'Luxury vacation destination', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80' },
    { id: 4, title: 'Tech Park', description: 'Modern office complex', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2069&q=80' },
    { id: 5, title: 'Eco-Industrial Zone', description: 'Sustainable manufacturing area', image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=2009&q=80' },
    { id: 6, title: 'Hillside Estates', description: 'High-end residential community', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2071&q=80' },
  ]

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300"
        >
          Learn more
        </a>
      </div>
    </motion.div>
  )
}