import React from 'react';
import { GraduationCap, Search, Palette, Lock, Rocket, Users, Globe, Link2, Target, Lightbulb, BarChart2, Database, Code, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import GradientText from '../components/GradientText';
import AnimatedSection from '../components/AnimatedSection';
import EducationCard from '../components/about/EducationCard';
import PhilosophyCard from '../components/about/PhilosophyCard';
import DevelopmentCard from '../components/about/DevelopmentCard';
import GoalCard from '../components/about/GoalCard';

const About = () => {
  const education = [
    {
      degree: "Master of Science in Information Science",
      school: "University of Wisconsin-Madison",
      year: "2022",
      gpa: "3.792"
    },
    {
      degree: "Bachelor of Arts in International Studies",
      school: "University of Wisconsin-Madison",
      year: "2020",
      gpa: "3.446"
    }
  ];

  const philosophies = [
    {
      icon: <Search className="w-6 h-6 text-primary-600" />,
      title: "Curiosity drives discovery",
      description: "I always ask \"why?\" and \"what if?\" to uncover deeper insights. My background in International Studies fuels my curiosity about global trends and cross-cultural patterns in data."
    },
    {
      icon: <Palette className="w-6 h-6 text-primary-600" />,
      title: "Simplicity is key",
      description: "I strive to make complex data understandable and actionable for all stakeholders. My goal is to translate technical findings into clear business strategies."
    },
    {
      icon: <Lock className="w-6 h-6 text-primary-600" />,
      title: "Ethics first",
      description: "I am committed to responsible data practices and privacy protection. This commitment is informed by my understanding of global perspectives on data privacy and ethics."
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary-600" />,
      title: "Continuous improvement",
      description: "I believe in learning from every project and constantly refining my methods. This aligns with my passion for lifelong learning and adaptability."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: "Collaboration amplifies impact",
      description: "I thrive in team environments where diverse perspectives lead to innovative solutions. My experience in cross-cultural communication enhances collaboration."
    },
    {
      icon: <Link2 className="w-6 h-6 text-primary-600" />,
      title: "Integration is key",
      description: "I believe in connecting disparate systems and data sources to unlock new insights and efficiencies, creating a more holistic view of business operations."
    }
  ];

  const developmentAreas = [
    {
      icon: <BarChart2 className="w-6 h-6 text-primary-600" />,
      text: "Expanding expertise in data management and ETL processes to handle increasingly complex datasets with efficiency and accuracy."
    },
    {
      icon: <LineChart className="w-6 h-6 text-primary-600" />,
      text: "Deepening knowledge of data visualization techniques to make complex insights more accessible to non-technical stakeholders."
    },
    {
      icon: <Database className="w-6 h-6 text-primary-600" />,
      text: "Enhancing skills in SQL and database management to improve data retrieval and storage efficiencies."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary-600" />,
      text: "Exploring the intersection of data analysis and international business to leverage my unique background in cross-cultural analysis."
    },
    {
      icon: <Code className="w-6 h-6 text-primary-600" />,
      text: "Gradually improving programming skills, particularly in Python, to enhance data analysis capabilities and automation."
    }
  ];

  const shortTermGoals = [
    {
      text: "Complete an advanced course in data integration techniques and ETL processes within the next 6 months"
    },
    {
      text: "Obtain a certification in Tableau or Power BI to enhance data visualization skills"
    },
    {
      text: "Attend two industry conferences in the coming year to network and stay updated on emerging trends"
    }
  ];

  return (
    <PageTransition>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              className="relative w-48 h-48 mx-auto mb-8 group"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-morph group-hover:from-primary-600 group-hover:to-primary-700 transition-colors"></div>
              <img
                src="/profile.jpg"
                alt="Tobin Zolkowski"
                className="relative z-10 rounded-full w-full h-full object-cover ring-4 ring-white dark:ring-slate-800"
              />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold text-slate-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About <GradientText>Me</GradientText>
            </motion.h1>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-16 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <Lightbulb className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Data is more than just numbers – it's a story waiting to be told and a bridge between insights and action. My goal is to empower organizations to harness the full potential of their data for strategic growth.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                I'm Tobin Zolkowski, a passionate data professional with a knack for translating complex data into clear, actionable insights. My journey in the world of data is driven by an insatiable curiosity and a commitment to making data accessible and meaningful for everyone.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-16 border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary-600" />
                Education
              </h3>
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <EducationCard key={index} {...edu} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-16 border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
                My Data <GradientText>Philosophy</GradientText>
              </h3>
              <div className="grid gap-8">
                {philosophies.map((philosophy, index) => (
                  <PhilosophyCard key={index} {...philosophy} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary-600" />
                Professional Development and Future Goals
              </h3>
              
              <div className="space-y-8 mb-12">
                {developmentAreas.map((area, index) => (
                  <DevelopmentCard key={index} {...area} index={index} />
                ))}
              </div>

              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Short-term <GradientText>Goals</GradientText>
              </h4>
              <div className="space-y-4">
                {shortTermGoals.map((goal, index) => (
                  <GoalCard key={index} {...goal} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;