import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Award, Book, Star, Code, Brain, Lightbulb, School, Rocket, Heart } from 'lucide-react';

interface TimelineEvent {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  story: string;
  learnings: string[];
  growth: string[];
  icon: JSX.Element;
  color: string;
}

const ProfessionalJourney: React.FC = () => {
  const timeline: TimelineEvent[] = [
    {
      id: 1,
      title: "Data Analyst",
      company: "Medical and Molecular Genetics",
      location: "Madison, Wisconsin",
      date: "July 2023 - Present",
      story: "My journey into genetic research data has been both challenging and rewarding. Coming from a diverse background, I've found that my previous experiences in different domains have given me a unique perspective on handling complex biomedical data. Each day brings new learning opportunities as I work with researchers to transform complex datasets into meaningful insights.",
      learnings: [
        "Developing deeper understanding of ETL processes in scientific research",
        "Learning to bridge the gap between technical and clinical perspectives",
        "Growing expertise in handling sensitive healthcare data",
        "Building collaborative relationships with research teams"
      ],
      growth: [
        "Expanding knowledge of genetic research methodologies",
        "Improving communication skills with scientific stakeholders",
        "Developing more robust data quality protocols",
        "Learning to balance technical accuracy with practical utility"
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: "blue"
    },
    {
      id: 2,
      title: "Business Data Analyst Intern",
      company: "Telkomsel",
      location: "Jakarta, Indonesia",
      date: "July 2022 - September 2022",
      story: "This internship marked my first experience applying data analysis in a large-scale business environment. The telecommunications industry's massive data volumes challenged me to think differently about data processing and analysis. Working with marketing teams helped me understand how data insights directly impact business decisions.",
      learnings: [
        "First exposure to big data analytics in a corporate setting",
        "Understanding business impact of data-driven decisions",
        "Learning to work with cross-functional teams",
        "Experiencing real-world application of marketing analytics"
      ],
      growth: [
        "Developed confidence in presenting technical findings to non-technical stakeholders",
        "Learned to balance analytical depth with business practicality",
        "Improved ability to handle large-scale data processing",
        "Enhanced collaboration skills in a corporate environment"
      ],
      icon: <Star className="w-6 h-6" />,
      color: "purple"
    },
    {
      id: 3,
      title: "Data Manager Intern",
      company: "University of Wisconsin-Madison",
      location: "Madison, Wisconsin",
      date: "June 2021 - August 2021",
      story: "My role in academic information management opened my eyes to the importance of structured data governance. Working in an educational setting taught me how proper data management directly impacts institutional effectiveness. This experience laid the foundation for my understanding of data quality and accessibility.",
      learnings: [
        "Understanding the importance of data governance",
        "Learning to create comprehensive documentation",
        "Developing standardization protocols",
        "Working with diverse stakeholder groups"
      ],
      growth: [
        "Built foundation in data management principles",
        "Improved organizational and documentation skills",
        "Developed better understanding of user needs",
        "Learned to implement systematic approaches to data handling"
      ],
      icon: <Book className="w-6 h-6" />,
      color: "green"
    },
    {
      id: 4,
      title: "IT Support Assistant",
      company: "University of Wisconsin-Madison",
      location: "Madison, Wisconsin",
      date: "September 2019 - April 2021",
      story: "Starting in IT support was my gateway into the technical world. Working with assistive technologies taught me the human side of technology and the importance of accessibility. This role sparked my interest in data and automation, as I saw how technology could make meaningful differences in people's lives.",
      learnings: [
        "Understanding diverse user needs and accessibility requirements",
        "Basic database management and optimization",
        "Process automation fundamentals",
        "Technical problem-solving skills"
      ],
      growth: [
        "Developed strong technical troubleshooting abilities",
        "Improved empathy and communication with users",
        "Built foundation in database concepts",
        "Discovered passion for process improvement"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "amber"
    }
  ];

  const journeyStory = [
    {
      id: 'beginnings',
      title: 'The Unexpected Beginning',
      icon: <School size={24} />,
      color: 'blue',
      content: "When people ask how I got into data science, I always smile because my path was anything but traditional. I didn't start with a computer science degree or coding bootcamps. My academic journey began at Rochester Institute of Technology studying Communication Science. After two years there, life took me in a different direction, and I transferred to the University of Wisconsin-Madison where I completed my Bachelor's in International Studies."
    },
    {
      id: 'discovery',
      title: 'Discovering Data',
      icon: <Brain size={24} />,
      color: 'purple',
      content: "During those undergraduate years, I discovered something unexpected: I loved working with data. It started small—some basic analysis for class projects, experimenting with Excel to organize research findings. What began as a practical skill became a genuine passion. The way data could tell stories and reveal insights fascinated me."
    },
    {
      id: 'growth',
      title: 'Professional Evolution',
      icon: <Rocket size={24} />,
      color: 'emerald',
      content: "After graduating, I found myself gravitating toward roles that let me work with data, even if that wasn't in the job description. I remember staying late after work teaching myself SQL queries just because I wanted to understand our database better. Each small success fueled my curiosity. This growing interest led me back to UW-Madison for a Master's in Information Science. That program was transformative—it gave structure to the skills I'd been cobbling together and exposed me to new technologies."
    },
    {
      id: 'projects',
      title: 'Learning Through Projects',
      icon: <Code size={24} />,
      color: 'amber',
      content: "The real growth happened through projects—each one a stepping stone in my technical evolution. My employee churn prediction project taught me the importance of feature engineering and the satisfaction of achieving 98% accuracy with my models. The Portuguese Students Higher Education Analysis opened my eyes to how data could influence educational strategies. One project that particularly challenged me was the Crypto Market Insights dashboard. I spent weeks building a complete data pipeline—from web scraping with Selenium to automated Excel report generation."
    },
    {
      id: 'engineering',
      title: 'The Engineering Path',
      icon: <Lightbulb size={24} />,
      color: 'rose',
      content: "My transition toward data engineering happened organically. While working on the Traffic Accident Analytics Engine project, I realized I was more excited about building the data processing pipeline than performing the actual analysis. There was something deeply satisfying about designing systems that could handle 7.7 million accident records efficiently. SQL has become one of my favorite languages. What started as simple SELECT statements evolved into a fascination with the elegance of CTEs and window functions."
    },
    {
      id: 'perspective',
      title: 'A Unique Perspective',
      icon: <Heart size={24} />,
      color: 'indigo',
      content: "I've found that my 'outsider' background actually gives me an advantage. When analyzing UFood's customer data, my communication training helped me translate clustering results into actionable marketing strategies that resonated with business stakeholders. I still embrace AI tools to augment my learning—not to replace understanding, but to help me grow faster. Looking back, I wouldn't change my unconventional path. It's given me perspective and a unique approach to problem-solving. Every step, even the detours, contributed something valuable to where I am today—a data professional who bridges technical expertise with human understanding."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-6 sm:mb-8 flex items-center">
        <Briefcase className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
        My Professional Journey
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Timeline line - adjusted for mobile */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-amber-600 dark:from-blue-400 dark:via-purple-400 dark:to-amber-400"></div>

        {/* Timeline events */}
        {timeline.map((event, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={event.id}
              ref={ref}
              variants={itemVariants}
              className={`relative pl-8 sm:pl-16 pb-12 ${index !== timeline.length - 1 ? 'mb-8' : ''}`}
            >
              {/* Timeline dot - adjusted for mobile */}
              <div className={`absolute left-[13px] sm:left-[29px] w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-${event.color}-600 dark:bg-${event.color}-400 transform -translate-x-1/2`}>
                <div className={`absolute w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-${event.color}-600/20 dark:bg-${event.color}-400/20 -left-1.5 sm:-left-2 -top-1.5 sm:-top-2 animate-ping`}></div>
              </div>

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-${event.color}-600 dark:border-${event.color}-400`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                      {event.icon}
                      <span className="ml-2">{event.title}</span>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{event.company}</p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4 sm:gap-1">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <MapPin size={14} className="mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base italic">
                  "{event.story}"
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
                      <Book className="w-4 h-4 mr-2" />
                      Key Learnings
                    </h5>
                    <ul className="space-y-2">
                      {event.learnings.map((learning, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-2 h-2 mt-1.5 mr-2 bg-${event.color}-600 dark:bg-${event.color}-400 rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Professional Growth
                    </h5>
                    <ul className="space-y-2">
                      {event.growth.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-2 h-2 mt-1.5 mr-2 bg-${event.color}-600 dark:bg-${event.color}-400 rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* My Journey in Tech */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-4 sm:p-8 shadow-lg"
      >
        <div className="max-w-4xl mx-auto">
          <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
            <Code className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            My Journey in Tech
          </h4>

          <div className="space-y-8">
            {journeyStory.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <div className={`bg-${section.color}-100 dark:bg-${section.color}-900/30 p-3 rounded-lg text-${section.color}-600 dark:text-${section.color}-400 flex-shrink-0`}>
                  {section.icon}
                </div>
                <div>
                  <h5 className="text-lg font-medium text-gray-800 dark:text-white mb-2">{section.title}</h5>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-4 sm:p-6 bg-white dark:bg-gray-900/50 rounded-lg shadow-inner"
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base italic">
                "The journey continues with each new project. I'm currently expanding my skills in Tableau and Excel for more business-focused applications while deepening my PostgreSQL expertise. That's what I love about this field—there's always something new to discover, always another level of mastery to achieve, and always a new problem waiting to be solved with data."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfessionalJourney;