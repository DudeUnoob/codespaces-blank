import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2070&q=80"
            alt="Land development services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-0">
              Comprehensive land development solutions tailored to your unique project needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Full-Service Land Development</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Terra Nova, we offer a comprehensive range of services to guide your project from 
                initial concept through successful implementation. Our integrated approach ensures 
                seamless coordination and exceptional results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <ServiceDetail
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              }
              title="Land Planning"
              description="Strategic land planning is the foundation of successful development. Our team analyzes site conditions, regulatory requirements, and market dynamics to create optimal land use plans that maximize value while ensuring compliance."
              features={[
                "Site Analysis & Feasibility Studies",
                "Master Planning & Conceptual Design",
                "Zoning Analysis & Entitlement Strategy",
                "Environmental Assessment",
                "Infrastructure Planning"
              ]}
              delay={0}
            />

            <ServiceDetail
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="Site Development"
              description="We transform planning concepts into buildable sites with our comprehensive site development services. Our team coordinates all aspects of site preparation, infrastructure installation, and construction management."
              features={[
                "Grading & Earthwork Planning",
                "Stormwater Management Systems",
                "Utility Infrastructure Design",
                "Roadway & Access Planning",
                "Construction Documentation"
              ]}
              delay={0.1}
            />

            <ServiceDetail
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Environmental Consulting"
              description="Our environmental consulting services help you navigate complex regulations while implementing sustainable practices that enhance your project's long-term value and minimize environmental impact."
              features={[
                "Environmental Impact Assessments",
                "Wetland Delineation & Permitting",
                "Habitat Conservation Planning",
                "Sustainable Design Integration",
                "Regulatory Compliance Management"
              ]}
              delay={0.2}
            />

            <ServiceDetail
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Project Management"
              description="Our comprehensive project management services ensure your development proceeds smoothly from concept to completion. We coordinate all aspects of your project, maintaining quality, schedule, and budget controls."
              features={[
                "Schedule Development & Management",
                "Budget Oversight & Cost Control",
                "Contractor Selection & Coordination",
                "Quality Assurance & Compliance",
                "Risk Management & Issue Resolution"
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Specialized Services</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a range of specialized services to address specific project needs and challenges
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <SpecializedService
              title="Urban Design"
              description="Creating vibrant, functional urban spaces that enhance community connection and economic vitality."
              delay={0}
            />
            <SpecializedService
              title="Feasibility Studies"
              description="In-depth analysis of project viability, market conditions, and potential challenges to inform your investment decisions."
              delay={0.1}
            />
            <SpecializedService
              title="Permitting & Approvals"
              description="Expert navigation of complex regulatory processes to secure necessary approvals and permits for your project."
              delay={0.2}
            />
            <SpecializedService
              title="Infrastructure Design"
              description="Comprehensive design of transportation, utility, and public facility infrastructure to support your development."
              delay={0.3}
            />
            <SpecializedService
              title="GIS & Mapping Services"
              description="Advanced geographic information system solutions for spatial analysis, visualization, and decision support."
              delay={0.4}
            />
            <SpecializedService
              title="Public Engagement"
              description="Strategic community outreach and stakeholder engagement to build support for your development vision."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
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
                Contact us today to discuss your land development needs and discover how our services can help you achieve your goals.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceDetail({ icon, title, description, features, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col h-full"
    >
      <div className="text-blue-600 mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="mt-auto">
        <h4 className="font-semibold text-gray-800 mb-4">Key Services:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function SpecializedService({ title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}