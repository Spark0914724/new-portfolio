import React from 'react'
import { GraduationCap, Award, BookOpen, Calendar, Trophy, Brain, Code2, TrendingUp } from 'lucide-react'

export const SimpleEducation = () => {
  const educationData = [
    {
      institution: "West Visayas State University - Lapaz",
      degree: "Bachelor of Science in Computer Science",
      major: "Major in Artificial Intelligence",
      gwa: "Cumulative GWA: 1.14/5.00",
      achievement: "Academic Excellence Awardee",
      status: "Currently Enrolled",
      year: "2023-2027",
      progress: 50,
      type: "Formal Education",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      tags: ["Computer Science", "Artificial Intelligence", "Bachelor's Degree"],
      priority: 1
    },
    {
      institution: "Harvard University",
      degree: "Introduction to Computer Science",
      major: "CS50x",
      gwa: "Cumulative Grade: 100/100",
      achievement: "Course Completion Certificate",
      status: "Completed",
      year: "2024",
      progress: 100,
      type: "Online Course",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
      tags: ["Programming", "Algorithms", "Data Structures"],
      priority: 2
    },
    {
      institution: "Harvard University",
      degree: "Introduction to Programming with Python",
      major: "CS50P",
      gwa: "",
      achievement: "In Progress - Advanced Level",
      status: "On-going study",
      year: "2024-Present",
      progress: 75,
      type: "Online Course",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
      tags: ["Python", "Object-Oriented Programming", "Web Development"],
      priority: 3
    },
    {
      institution: "Harvard University",
      degree: "Introduction to Artificial Intelligence with Python",
      major: "CS50AI",
      gwa: "",
      achievement: "In Progress - Machine Learning Focus",
      status: "On-going study",
      year: "2024-Present",
      progress: 60,
      type: "Online Course",
      icon: <Brain className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
      tags: ["Machine Learning", "Neural Networks", "AI Algorithms"],
      priority: 4
    },
    {
      institution: "International Business Machines",
      degree: "AI for Everyone: Master the Basics",
      major: "IBM SkillsBuild",
      gwa: "",
      achievement: "Fundamentals Completed",
      status: "On-going study",
      year: "2024-Present",
      progress: 40,
      type: "Professional Course",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
      tags: ["AI Fundamentals", "Business AI", "IBM Watson"],
      priority: 5
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-pink-50/50 dark:from-orange-950/20 dark:via-red-950/10 dark:to-pink-950/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-36 h-36 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-20 w-44 h-44 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <GraduationCap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Academic Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Pursuing excellence in Computer Science and Artificial Intelligence through formal education and continuous professional development
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">2027</div>
              <div className="text-gray-600 dark:text-gray-400">Expected Graduation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">1.14</div>
              <div className="text-gray-600 dark:text-gray-400">Current GWA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">5</div>
              <div className="text-gray-600 dark:text-gray-400">Courses</div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 lg:gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Timeline Line (for visual connection) */}
                {index < educationData.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 z-0"></div>
                )}
                
                {/* Content Card */}
                <div className={`relative bg-gradient-to-br ${edu.bgColor} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-gray-500/10 dark:hover:shadow-black/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden z-10`}>
                  {/* Header Section with integrated badges */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Course Type Badge */}
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${edu.color} text-white shadow-sm`}>
                      {edu.type}
                    </span>
                    {/* Status Badge */}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      edu.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800' 
                        : edu.status === 'Currently Enrolled'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Main Content Section */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Enhanced Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {edu.icon}
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-300 origin-left`}>
                            {edu.institution}
                          </h3>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight mb-1">
                            {edu.degree}
                          </h4>
                          {edu.major && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{edu.major}</p>
                          )}
                        </div>
                        
                        {/* Year Only */}
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{edu.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{edu.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${edu.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${edu.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {edu.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 text-xs font-medium rounded-lg bg-gradient-to-r ${edu.color} text-white opacity-80 hover:opacity-100 transition-opacity duration-200`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Achievements and Grades */}
                      <div className="space-y-3">
                        {edu.gwa && (
                          <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                            <Trophy className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{edu.gwa}</span>
                          </div>
                        )}

                        {edu.achievement && (
                          <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                            <Award className={`w-5 h-5 flex-shrink-0 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`} />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{edu.achievement}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Summary */}
          <div className="mt-16 bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Learning Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuous growth through diverse educational pathways
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  label: "Formal Education", 
                  value: "1", 
                  color: "from-blue-500 to-indigo-500",
                  icon: "🎓",
                  description: "University degree program"
                },
                { 
                  label: "Online Courses", 
                  value: "4", 
                  color: "from-purple-500 to-pink-500",
                  icon: "💻",
                  description: "Professional certifications"
                },
                { 
                  label: "Completed", 
                  value: "1", 
                  color: "from-green-500 to-emerald-500",
                  icon: "✅",
                  description: "Courses finished"
                },
                { 
                  label: "In Progress", 
                  value: "4", 
                  color: "from-orange-500 to-red-500",
                  icon: "🔄",
                  description: "Active learning"
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
