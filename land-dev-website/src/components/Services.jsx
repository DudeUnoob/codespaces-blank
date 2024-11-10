import { motion } from 'framer-motion'

export function Services() {
  const services = [
    { id: 1, title: 'Land Planning', description: 'Comprehensive land use planning and zoning analysis.', icon: '📊' },
    { id: 2, title: 'Site Development', description: 'Full-service site preparation and infrastructure installation.', icon: '🏗️' },
    { id: 3, title: 'Environmental Consulting', description: 'Expert advice on sustainable and eco-friendly development practices.', icon: '🌿' },
    { id: 4, title: 'Project Management', description: 'End-to-end project oversight and coordination.', icon: '📈' },
    { id: 5, title: 'Feasibility Studies', description: 'In-depth analysis of project viability and potential challenges.', icon: '🔍' },
    { id: 6, title: 'Urban Design', description: 'Innovative urban planning and community development solutions.', icon: '🏙️' },
  ]

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  )
}