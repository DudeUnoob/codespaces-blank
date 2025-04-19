import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  
  const projects = [
    { 
      id: 1, 
      title: 'Green Valley Community', 
      type: 'residential',
      category: 'Residential Development',
      location: 'Greenville, CA',
      year: '2021',
      description: 'A sustainable residential development featuring solar-powered homes, community gardens, and smart home integration.', 
      details: 'This 50-acre master-planned community includes 200 energy-efficient homes, 5 acres of community gardens, and 10 acres of preserved natural space. The project incorporated advanced stormwater management systems, solar panel integration, and sustainable building materials throughout.',
      challenges: 'Working with challenging terrain while preserving natural watersheds required innovative engineering solutions.',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=2067&q=80',
      images: [
        'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=2067&q=80',
        'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2080&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80'
      ]
    },
    { 
      id: 2, 
      title: 'Riverfront Plaza', 
      type: 'commercial',
      category: 'Commercial Development',
      location: 'Riverside, OR',
      year: '2022',
      description: 'A mixed-use commercial development that revitalized an urban waterfront area with retail, office, and residential spaces.', 
      details: 'This 12-acre development transformed a former industrial site into a vibrant mixed-use destination with 150,000 sq ft of retail space, 200,000 sq ft of office space, and 120 residential units. The project included a quarter-mile riverwalk with public art installations and gathering spaces.',
      challenges: 'Remediating the brownfield site and implementing flood mitigation measures while maintaining access to the waterfront.',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2070&q=80',
      images: [
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=2070&q=80'
      ]
    },
    { 
      id: 3, 
      title: 'Mountain Vista Resort', 
      type: 'hospitality',
      category: 'Hospitality & Tourism',
      location: 'Blue Ridge, CO',
      year: '2020',
      description: 'An eco-friendly mountain resort designed to blend seamlessly with its natural surroundings while offering luxury accommodations.', 
      details: 'This 75-acre resort includes 120 guest accommodations, a 15,000 sq ft spa and wellness center, and 5 miles of hiking trails. The design emphasizes natural materials, energy efficiency, and minimal site disruption, earning LEED Gold certification.',
      challenges: 'Developing on steep mountain terrain while minimizing environmental impact and preserving wildlife corridors.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2070&q=80'
      ]
    },
    { 
      id: 4, 
      title: 'Innovation Tech Park', 
      type: 'commercial',
      category: 'Commercial Development',
      location: 'Techville, WA',
      year: '2023',
      description: 'A modern office complex designed to foster collaboration and innovation among technology companies.', 
      details: 'This 25-acre campus features 350,000 sq ft of flexible office space across 5 buildings, designed with cutting-edge sustainability features and collaborative spaces. The project includes a 2-acre central plaza, bicycle infrastructure, and electric vehicle charging stations.',
      challenges: 'Creating a cohesive campus feel while allowing for phased development and maintaining flexibility for diverse tenant needs.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2069&q=80',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2070&q=80'
      ]
    },
    { 
      id: 5, 
      title: 'Eco-Industrial Zone', 
      type: 'industrial',
      category: 'Industrial Development',
      location: 'Greenport, MI',
      year: '2022',
      description: 'A sustainable manufacturing area designed with circular economy principles and renewable energy integration.', 
      details: 'This 100-acre industrial park includes 500,000 sq ft of manufacturing space and supporting facilities. The development features a 3MW solar array, rainwater harvesting systems, and shared resource recovery facilities that support industrial symbiosis among tenants.',
      challenges: 'Balancing industrial requirements with sustainability goals while creating an attractive environment for manufacturers.',
      image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=2009&q=80',
      images: [
        'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=2009&q=80',
        'https://images.unsplash.com/photo-1549317661-bd32c8017f75?auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=2070&q=80'
      ]
    },
    { 
      id: 6, 
      title: 'Hillside Estates', 
      type: 'residential',
      category: 'Residential Development',
      location: 'Highland Park, AZ',
      year: '2023',
      description: 'A high-end residential community with custom homes designed to maximize views while minimizing environmental impact.', 
      details: 'This 35-acre development includes 45 custom home sites ranging from 0.5 to 1.2 acres. The project preserves 40% of the site as natural open space, with strict architectural guidelines that emphasize sustainable design, energy efficiency, and harmony with the natural landscape.',
      challenges: 'Developing on steep terrain while preserving natural drainage patterns and minimizing visual impact on the hillside.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2071&q=80',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2071&q=80',
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&w=2070&q=80'
      ]
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter)

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }

  const openProjectDetails = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  const openGallery = (e) => {
    e.stopPropagation()
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = (e) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&w=2081&q=80"
            alt="Terra Nova projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl mb-0">
              Explore our portfolio of successful land development projects that demonstrate 
              our commitment to innovation, sustainability, and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <FilterButton 
              active={activeFilter === 'all'} 
              onClick={() => handleFilterClick('all')}
            >
              All Projects
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'residential'} 
              onClick={() => handleFilterClick('residential')}
            >
              Residential
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'commercial'} 
              onClick={() => handleFilterClick('commercial')}
            >
              Commercial
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'industrial'} 
              onClick={() => handleFilterClick('industrial')}
            >
              Industrial
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'hospitality'} 
              onClick={() => handleFilterClick('hospitality')}
            >
              Hospitality
            </FilterButton>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => openProjectDetails(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project Section */}
      <FeaturedProject 
        project={projects[0]} 
        index={1}
        onClick={() => openProjectDetails(projects[0])}
      />
      <FeaturedProject 
        project={projects[1]} 
        index={2}
        reverse
        onClick={() => openProjectDetails(projects[1])}
      />

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how Terra Nova can help turn your vision into reality with our proven expertise and innovative approach.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-700 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Contact Us Today
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetails}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-[40vh] object-cover"
                />
                <button 
                  onClick={closeProjectDetails}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <div className="text-white">
                    <span className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">{selectedProject.category}</span>
                    <h3 className="text-3xl font-bold mt-2">{selectedProject.title}</h3>
                    <p className="text-gray-200 mt-1">{selectedProject.location} • {selectedProject.year}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h4 className="text-2xl font-bold mb-4 text-gray-900">Project Overview</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.details}</p>
                    
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Challenges & Solutions</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.challenges}</p>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-gray-900">Project Gallery</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedProject.images.map((image, index) => (
                          <div 
                            key={index} 
                            className="h-24 rounded-lg overflow-hidden cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentImageIndex(index)
                              setIsGalleryOpen(true)
                            }}
                          >
                            <img 
                              src={image} 
                              alt={`${selectedProject.title} - image ${index + 1}`} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-gray-900">Project Details</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm text-gray-500 font-medium">PROJECT TYPE</h5>
                          <p className="text-gray-900">{selectedProject.category}</p>
                        </div>
                        <div>
                          <h5 className="text-sm text-gray-500 font-medium">LOCATION</h5>
                          <p className="text-gray-900">{selectedProject.location}</p>
                        </div>
                        <div>
                          <h5 className="text-sm text-gray-500 font-medium">YEAR COMPLETED</h5>
                          <p className="text-gray-900">{selectedProject.year}</p>
                        </div>
                        <div>
                          <h5 className="text-sm text-gray-500 font-medium">PROJECT SIZE</h5>
                          <p className="text-gray-900">{selectedProject.id === 1 ? '50 acres' : 
                            selectedProject.id === 2 ? '12 acres' : 
                            selectedProject.id === 3 ? '75 acres' : 
                            selectedProject.id === 4 ? '25 acres' : 
                            selectedProject.id === 5 ? '100 acres' : '35 acres'}</p>
                        </div>
                        <div>
                          <h5 className="text-sm text-gray-500 font-medium">SERVICES PROVIDED</h5>
                          <ul className="text-gray-900">
                            <li>• Land Planning</li>
                            <li>• Site Development</li>
                            {selectedProject.id % 2 === 0 && <li>• Environmental Consulting</li>}
                            {selectedProject.id % 3 === 0 && <li>• Urban Design</li>}
                            <li>• Project Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeGallery}
          >
            <div className="absolute top-4 right-4 flex space-x-2">
              <button 
                onClick={closeGallery}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-[90vw] h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} - image ${currentImageIndex + 1}`} 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {selectedProject.images.map((_, index) => (
                <button 
                  key={index} 
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImageIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FilterButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
        active 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  )
}

function ProjectCard({ project, onClick }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <span>{project.location}</span>
          <span className="mx-2">•</span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors">
          <span>View project details</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

function FeaturedProject({ project, index, reverse, onClick }) {
  return (
    <section className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl cursor-pointer" onClick={onClick}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <span className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                  <p className="text-gray-200 mt-1">{project.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="mb-2 text-sm font-semibold text-blue-600">Featured Project {index}</div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{project.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{project.details}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Project Challenges</h3>
              <p className="text-gray-600">{project.challenges}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-24 h-16 rounded overflow-hidden cursor-pointer" onClick={(e) => {
                e.stopPropagation()
                onClick()
              }}>
                <img src={project.images[1]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-16 rounded overflow-hidden cursor-pointer" onClick={(e) => {
                e.stopPropagation()
                onClick()
              }}>
                <img src={project.images[2]} alt="" className="w-full h-full object-cover" />
              </div>
              <div 
                className="text-blue-600 font-medium flex items-center ml-2 cursor-pointer" 
                onClick={(e) => {
                  e.stopPropagation()
                  onClick()
                }}
              >
                <span>View Gallery</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}