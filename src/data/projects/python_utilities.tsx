import React from 'react';
import { BookOpen, FolderOpen } from 'lucide-react';
import { Project } from '../../types/project';

export const pythonUtilityProjects: Project[] = [
  {
    title: "Python Exercises",
    description: "Solved various Python programming exercises to improve coding skills and understanding of core concepts.",
    tags: ["Python", "Programming Fundamentals"],
    icon: <BookOpen className="w-6 h-6" />,
    category: "Python Programming and Utilities",
    highlights: [
      "Covered functions and modules",
      "Implemented file I/O operations",
      "Explored inheritance concepts",
      "Documented solutions and learnings"
    ],
    links: {
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/python_exercises"
    }
  },
  {
    title: "File Organizer",
    description: "Developed a GUI application for automatically sorting files in a specified folder by file type.",
    tags: ["Python", "Tkinter", "Pathlib", "Shutil", "Logging"],
    icon: <FolderOpen className="w-6 h-6" />,
    category: "Python Programming and Utilities",
    highlights: [
      "Dynamic file handling by extension",
      "Visual file selection with checkboxes",
      "Duplicate file handling options",
      "User-friendly interface with logging"
    ],
    links: {
      github: "https://github.com/tzolkowski96/tzolkowski96/tree/main/file_organizer"
    }
  }
];