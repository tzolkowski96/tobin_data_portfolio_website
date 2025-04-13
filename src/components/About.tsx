import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, Languages, AlignCenterVertical as Certificate, Calendar, MapPin, ExternalLink } from 'lucide-react';
import ProfessionalJourney from './ProfessionalJourney';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-6">
            I am a passionate data professional with a strong foundation in data analysis, machine learning, and ETL processes. With experience across healthcare, telecoms, and higher education, I thrive on transforming complex data into actionable insights.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 sm:p-6 h-full transform transition-transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <BookOpen size={22} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Master of Science - MS, Information Science</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">University of Wisconsin-Madison</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm flex items-center mt-1">
                  <Calendar size={12} className="mr-1" /> August 2020 - December 2022
                </p>
              </li>
              <li className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Bachelor of Arts - BA, International Studies</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">University of Wisconsin-Madison</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm flex items-center mt-1">
                  <Calendar size={12} className="mr-1" /> August 2018 - May 2020
                </p>
              </li>
              <li className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Communication Science (2 years)</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Rochester Institute of Technology</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm flex items-center mt-1">
                  <Calendar size={12} className="mr-1" /> August 2016 - May 2018
                </p>
              </li>
              <li className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">High School Diploma</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Jakarta Intercultural School</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm flex items-center mt-1">
                  <Calendar size={12} className="mr-1" /> August 2012 - May 2016
                </p>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-5 sm:p-6 h-full transform transition-transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-500 dark:to-indigo-600 text-white p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Award size={22} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Key Highlights</h3>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0">🔬</span>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Strong foundation in data analysis and machine learning</p>
              </li>
              <li className="flex items-start bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0">🐍</span>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Growing proficiency in Python, SQL, and data visualization</p>
              </li>
              <li className="flex items-start bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0">📊</span>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Completed several impactful data-driven projects</p>
              </li>
              <li className="flex items-start bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0">💡</span>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Experience across healthcare, telecoms, and higher education</p>
              </li>
              <li className="flex items-start bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0">🔧</span>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Developing skills in data pipelines and ETL processes</p>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1 bg-green-50 dark:bg-green-900/20 rounded-xl p-5 sm:p-6 h-full transform transition-transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 text-white p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Briefcase size={22} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Professional Interests</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
              I am a passionate data professional with a strong foundation in data analysis and machine learning. I am open to a variety of roles including:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white dark:bg-gray-800 px-3 py-2 sm:px-4 rounded-lg shadow-sm text-gray-800 dark:text-white font-medium transform transition-transform hover:translate-x-2 text-sm sm:text-base">Data Analyst</div>
              <div className="bg-white dark:bg-gray-800 px-3 py-2 sm:px-4 rounded-lg shadow-sm text-gray-800 dark:text-white font-medium transform transition-transform hover:translate-x-2 text-sm sm:text-base">Data Engineer</div>
              <div className="bg-white dark:bg-gray-800 px-3 py-2 sm:px-4 rounded-lg shadow-sm text-gray-800 dark:text-white font-medium transform transition-transform hover:translate-x-2 text-sm sm:text-base">Integration Engineer</div>
              <div className="bg-white dark:bg-gray-800 px-3 py-2 sm:px-4 rounded-lg shadow-sm text-gray-800 dark:text-white font-medium transform transition-transform hover:translate-x-2 text-sm sm:text-base">Data Manager</div>
              <div className="bg-white dark:bg-gray-800 px-3 py-2 sm:px-4 rounded-lg shadow-sm text-gray-800 dark:text-white font-medium transform transition-transform hover:translate-x-2 text-sm sm:text-base">Healthcare Analyst</div>
              <div className="bg-white dark:bg-gray-800 px-3 py-2 sm:px-4 rounded-lg shadow-sm text-gray-800 dark:text-white font-medium transform transition-transform hover:translate-x-2 text-sm sm:text-base">Data Specialist</div>
              <div className="bg-white dark:bg-gray-800 px-3 py-2 sm:px-4 rounded-lg shadow-sm text-gray-800 dark:text-white font-medium transform transition-transform hover:translate-x-2 text-sm sm:text-base col-span-2">Administrative/Management Roles</div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transform transition-transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 text-white p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Certificate size={22} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Certifications</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Google Advanced Data Analytics</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Coursera, 2023</p>
                <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">ID: A8Z4GGXNDYQY</p>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/A8Z4GGXNDYQY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-xs sm:text-sm flex items-center py-1"
                  >
                    View Certificate <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </li>
              <li className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Data Analyst in Tableau Track</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">DataCamp, 2022-2023</p>
                <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">ID: 91a2d7ba601b5a8f</p>
                  <a 
                    href="https://www.datacamp.com/completed/statement-of-accomplishment/track/91a2d7ba601b5a8fe3cfe1d0b59fb1ac0b78afa8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-xs sm:text-sm flex items-center py-1"
                  >
                    View Certificate <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </li>
              <li className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Data Analyst in SQL Track</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">DataCamp, 2022-2023</p>
                <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">ID: d33a33e25d3aca10</p>
                  <a 
                    href="https://www.datacamp.com/completed/statement-of-accomplishment/track/d33a33e25d3aca10ae9433080651ae16f35cb32d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-xs sm:text-sm flex items-center py-1"
                  >
                    View Certificate <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transform transition-transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 text-white p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Languages size={22} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Languages</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">English</span>
                  <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2 py-1 rounded text-xs sm:text-sm">Fluent</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 h-1.5 sm:h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">American Sign Language (ASL)</span>
                  <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2 py-1 rounded text-xs sm:text-sm">Native</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 h-1.5 sm:h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">French & Spanish</span>
                  <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2 py-1 rounded text-xs sm:text-sm">Conversational</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 h-1.5 sm:h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Italian</span>
                  <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2 py-1 rounded text-xs sm:text-sm">Basic</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 h-1.5 sm:h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <ProfessionalJourney />
      </div>
    </section>
  );
};

export default About;