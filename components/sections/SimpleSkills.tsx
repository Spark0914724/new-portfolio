"use client"
import React, { useState } from 'react'
import { Code, Database, Globe, Palette, Brain, Users, Clock, MessageSquare, Cpu, BarChart3, Star, Award, TrendingUp, Zap, Target, BookOpen } from 'lucide-react'

export const SimpleSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Cpu className="w-6 h-6" />,
      description: "Core programming languages for development",
      skills: [
        { name: "Python", level: 85, experience: "2+ years", specialty: "AI/ML Development" },
        { name: "JavaScript", level: 90, experience: "2+ years", specialty: "Frontend/Backend" },
        { name: "C/C++", level: 80, experience: "1+ years", specialty: "System Programming" },
        { name: "TypeScript", level: 75, experience: "1+ years", specialty: "Type-Safe Development" },
        { name: "R", level: 70, experience: "1 year", specialty: "Data Analysis" }
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      totalSkills: 5,
      avgLevel: 80
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      description: "Machine learning frameworks and AI tools",
      skills: [
        { name: "TensorFlow", level: 80, experience: "1+ years", specialty: "Deep Learning" },
        { name: "PyTorch", level: 75, experience: "1 year", specialty: "Neural Networks" },
        { name: "Scikit-learn", level: 85, experience: "1+ years", specialty: "ML Algorithms" },
        { name: "Pandas", level: 90, experience: "2+ years", specialty: "Data Manipulation" },
        { name: "NumPy", level: 85, experience: "2+ years", specialty: "Numerical Computing" },
        { name: "OpenCV", level: 70, experience: "6 months", specialty: "Computer Vision" }
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      totalSkills: 6,
      avgLevel: 81
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Statistical analysis and data visualization",
      skills: [
        { name: "Data Analysis", level: 85, experience: "2+ years", specialty: "Statistical Insights" },
        { name: "Statistical Modeling", level: 80, experience: "1+ years", specialty: "Predictive Models" },
        { name: "Data Visualization", level: 85, experience: "2+ years", specialty: "Interactive Charts" },
        { name: "Jupyter Notebooks", level: 90, experience: "2+ years", specialty: "Data Exploration" },
        { name: "Matplotlib", level: 80, experience: "1+ years", specialty: "Static Plots" },
        { name: "Seaborn", level: 75, experience: "1 year", specialty: "Statistical Plots" }
      ],
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
      totalSkills: 6,
      avgLevel: 82
    },
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6" />,
      description: "Frontend and backend web technologies",
      skills: [
        { name: "HTML/CSS", level: 95, experience: "3+ years", specialty: "Responsive Design" },
        { name: "React.js", level: 90, experience: "2+ years", specialty: "Component Development" },
        { name: "Next.js", level: 85, experience: "1+ years", specialty: "Full-Stack Apps" },
        { name: "Django", level: 70, experience: "6 months", specialty: "Python Web Framework" },
        { name: "Flask", level: 75, experience: "1 year", specialty: "API Development" }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      totalSkills: 5,
      avgLevel: 83
    },
    {
      title: "Database & Backend",
      icon: <Database className="w-6 h-6" />,
      description: "Database management and server technologies",
      skills: [
        { name: "SQLite", level: 80, experience: "1+ years", specialty: "Embedded Database" },
        { name: "MySQL", level: 75, experience: "1 year", specialty: "Relational Database" },
        { name: "Node.js", level: 80, experience: "1+ years", specialty: "Server Development" },
        { name: "REST APIs", level: 85, experience: "1+ years", specialty: "API Design" }
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
      totalSkills: 4,
      avgLevel: 80
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6" />,
      description: "Design software and productivity tools",
      skills: [
        { name: "Figma", level: 85, experience: "1+ years", specialty: "UI/UX Design" },
        { name: "Canva", level: 90, experience: "2+ years", specialty: "Graphic Design" },
        { name: "Tailwind CSS", level: 90, experience: "1+ years", specialty: "Utility-First CSS" },
        { name: "Notion", level: 95, experience: "2+ years", specialty: "Project Management" }
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
      totalSkills: 4,
      avgLevel: 90
    },
    {
      title: "AI Tools & Platforms",
      icon: <Zap className="w-6 h-6" />,
      description: "AI development platforms and tools",
      skills: [
        { name: "Google Colab", level: 90, experience: "2+ years", specialty: "ML Experimentation" },
        { name: "Kaggle", level: 85, experience: "1+ years", specialty: "Data Competitions" },
        { name: "Hugging Face", level: 75, experience: "6 months", specialty: "Pre-trained Models" },
        { name: "GitHub Copilot", level: 85, experience: "1 year", specialty: "AI-Assisted Coding" },
        { name: "ChatGPT API", level: 80, experience: "6 months", specialty: "LLM Integration" }
      ],
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
      totalSkills: 5,
      avgLevel: 83
    },
    {
      title: "Office & Productivity",
      icon: <Target className="w-6 h-6" />,
      description: "Professional productivity and office tools",
      skills: [
        { name: "Microsoft Office", level: 95, experience: "5+ years", specialty: "Office Suite" },
        { name: "Excel", level: 90, experience: "3+ years", specialty: "Data Analysis" },
        { name: "PowerPoint", level: 95, experience: "5+ years", specialty: "Presentations" },
        { name: "Word", level: 95, experience: "5+ years", specialty: "Document Processing" }
      ],
      color: "from-slate-500 to-gray-500",
      bgColor: "from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20",
      totalSkills: 4,
      avgLevel: 94
    },
    {
      title: "Languages",
      icon: <Globe className="w-6 h-6" />,
      description: "Spoken and written communication languages",
      skills: [
        { name: "Filipino", level: 100, experience: "Native", specialty: "Native Speaker" },
        { name: "English", level: 95, experience: "15+ years", specialty: "Professional Fluency" },
        { name: "Japanese", level: 60, experience: "2 years", specialty: "Basic Conversation" }
      ],
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20",
      totalSkills: 3,
      avgLevel: 85
    }
  ]

  const softSkills = [
    { 
      name: "Time Management", 
      icon: <Clock className="w-5 h-5" />, 
      level: 5, 
      description: "Efficient task prioritization and deadline management with proven track record in meeting tight deadlines",
      color: "from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30",
      experience: "5+ years"
    },
    { 
      name: "Project Management", 
      icon: <Users className="w-5 h-5" />, 
      level: 4, 
      description: "Leading cross-functional teams and coordinating complex project deliverables using agile methodologies",
      color: "from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30",
      experience: "3+ years"
    },
    { 
      name: "Critical Thinking", 
      icon: <Brain className="w-5 h-5" />, 
      level: 5, 
      description: "Strategic problem-solving and analytical decision making in complex technical scenarios",
      color: "from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30",
      experience: "5+ years"
    },
    { 
      name: "Analytical Skills", 
      icon: <Database className="w-5 h-5" />, 
      level: 5, 
      description: "Advanced data interpretation, pattern recognition, and statistical analysis capabilities",
      color: "from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30",
      experience: "4+ years"
    },
    { 
      name: "Communication", 
      icon: <MessageSquare className="w-5 h-5" />, 
      level: 5, 
      description: "Excellent written and verbal communication across technical and non-technical audiences",
      color: "from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30",
      experience: "5+ years"
    },
    { 
      name: "Leadership", 
      icon: <Award className="w-5 h-5" />, 
      level: 4, 
      description: "Proven team motivation, mentoring, and strategic guidance in academic and professional settings",
      color: "from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30",
      experience: "3+ years"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-blue-50/50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-blue-950/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-12 w-36 h-36 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-12 w-44 h-44 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full blur-xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technical skills and professional competencies developed through academic excellence, hands-on projects, and continuous learning
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">9</div>
              <div className="text-gray-600 dark:text-gray-400">Skill Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">40+</div>
              <div className="text-gray-600 dark:text-gray-400">Technical Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">85%</div>
              <div className="text-gray-600 dark:text-gray-400">Avg Proficiency</div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Code className="w-6 h-6" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="group"
                onMouseEnter={() => setSelectedCategory(category.title)}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                <div className={`relative bg-gradient-to-br ${category.bgColor} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-gray-500/10 dark:hover:shadow-black/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden h-full`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {category.icon}
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {category.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.avgLevel}%
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Avg Level
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {skill.experience}
                            </span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                        
                        {/* Specialty Tag */}
                        <div className="flex justify-end">
                          <span className="text-xs px-2 py-1 bg-white/60 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 rounded-full">
                            {skill.specialty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Stats */}
                  <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Skills: {category.totalSkills}</span>
                      <span className="text-gray-600 dark:text-gray-400">Proficiency: {category.avgLevel}%</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Users className="w-6 h-6" />
            Soft Skills & Leadership
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative h-full"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`relative bg-gradient-to-br ${skill.color} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 text-center hover:shadow-xl hover:shadow-gray-500/10 dark:hover:shadow-black/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden h-full flex flex-col`}>
                    {/* Skill Icon */}
                    <div className="mb-4 flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 dark:bg-black/20 text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3 flex-shrink-0">
                      {skill.name}
                    </h4>

                    {/* Skill Description - with fixed height */}
                    <div className="flex-grow flex items-center mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Bottom Section - Fixed height */}
                    <div className="flex-shrink-0 space-y-3">
                      {/* Proficiency Level */}
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-4 h-4 ${
                              starIndex < skill.level
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300 dark:text-gray-600'
                            } transition-colors duration-200`}
                          />
                        ))}
                      </div>

                      {/* Experience Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/30 dark:bg-black/30 text-xs font-medium text-gray-700 dark:text-gray-300">
                        {skill.experience}
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {softSkills.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Core Skills
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {Math.round(softSkills.reduce((acc, skill) => acc + skill.level, 0) / softSkills.length)}★
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Avg Rating
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Skills Summary */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-indigo-200/50 dark:border-indigo-700/50 shadow-2xl shadow-indigo-500/10 dark:shadow-black/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Focused Continuous Learning
                </h4>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                Specializing in <span className="font-semibold text-indigo-600 dark:text-indigo-400">Artificial Intelligence</span> with 
                hands-on experience in machine learning frameworks, deep learning, computer vision, and natural language processing. 
                Currently advancing skills in generative AI, large language models, and AI-driven web applications through 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Harvard and IBM courses</span>.
              </p>
            </div>

            {/* Professional Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-2xl border border-white/50 dark:border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Technical Skills
                </div>
              </div>
              
              <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-2xl border border-white/50 dark:border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {softSkills.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Soft Skills
                </div>
              </div>
              
              <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-2xl border border-white/50 dark:border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  AI Specializations
                </div>
              </div>
              
              <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-2xl border border-white/50 dark:border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  3+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Learning Path */}
            <div className="mt-8 p-6 bg-gradient-to-r from-white/30 to-white/10 dark:from-black/30 dark:to-black/10 rounded-2xl border border-white/30 dark:border-gray-700/30">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  Current Learning Focus
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Generative AI", "Large Language Models", "Computer Vision", "Deep Learning", "MLOps", "AI Ethics"].map((topic, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
