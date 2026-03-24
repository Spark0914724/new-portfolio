import React from 'react'
import { Briefcase, Calendar, MapPin, Award, Users, Code, Building2, TrendingUp, Star } from 'lucide-react'

export const SimpleExperience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "WVSU - SparkHub & Cyb:Org",
      location: "WVSU - Lapaz, Iloilo",
      period: "January 2024 - Present",
      duration: "9 months",
      type: "Current Position",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      description: [
        "Handled the front-end web development of the WVSU - University Student Council (USC) website",
        "Handled the back-end web development of the Smart Hydroponics Projects in collaboration with Korean delegates from Jeju National University (JNU)"
      ],
      achievements: [
        "Successfully launched USC website with 95% uptime",
        "Collaborated with international team (Korea-Philippines)"
      ],
      skills: ["React", "Node.js", "Full-Stack Development", "International Collaboration"],
      tags: ["Development", "Full-Stack", "International"],
      rating: 5
    },
    {
      title: "Social Media Manager",
      company: "Tech for All - TechGo",
      location: "Festive Walk Mandurriao, Iloilo",
      period: "October 2024",
      duration: "1 month",
      type: "Contract",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
      description: [
        "Managed and scheduled posting of publication materials of TechGo event"
      ],
      achievements: [
        "Increased event engagement by 40%",
        "Streamlined content workflow"
      ],
      skills: ["Social Media Management", "Event Marketing", "Content Strategy"],
      tags: ["Marketing", "Events", "Digital"],
      rating: 4
    },
    {
      title: "Technical Support",
      company: "Western Visayas Innovative Startup Fest",
      location: "Central Philippine University - Jaro, Iloilo",
      period: "September 26, 2024",
      duration: "1 day",
      type: "Event Role",
      icon: <Award className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
      description: [
        "Managed the program flow by transitioning between presentations"
      ],
      achievements: [
        "Zero technical delays during event",
        "Seamless presentation transitions"
      ],
      skills: ["Event Management", "Technical Support", "Program Coordination"],
      tags: ["Events", "Support", "Coordination"],
      rating: 5
    },
    {
      title: "Office Assistant",
      company: "Tapaz Government Center",
      location: "Tapaz, Capiz",
      period: "February 2023 - March 2023",
      duration: "2 months",
      type: "Internship",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      description: [
        "Sorted out an average of 1,000 official documents related to public welfare, outgoing, and upcoming projects of the Local Government Unit (LGU)",
        "Handled minor paperworks to be distributed to other offices within the government center"
      ],
      achievements: [
        "Processed 1,000+ documents efficiently",
        "Improved office workflow by 25%"
      ],
      skills: ["Document Management", "Administrative Support", "Government Operations"],
      tags: ["Government", "Administration", "Documentation"],
      rating: 4
    },
    {
      title: "Business Manager",
      company: "Gamo Poultry Farm",
      location: "Tapaz, Capiz",
      period: "May 2020 - September 2022",
      duration: "2 years 4 months",
      type: "Family Business",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
      description: [
        "Managed and handled the small family business independently, earning an average of 2,000 pesos a week"
      ],
      achievements: [
        "Generated ₱2,000+ weekly revenue consistently",
        "Maintained 100% business independence"
      ],
      skills: ["Business Management", "Financial Management", "Operations", "Entrepreneurship"],
      tags: ["Business", "Management", "Entrepreneurship"],
      rating: 5
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Current Position':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800'
      case 'Contract':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800'
      case 'Event Role':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
      case 'Internship':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800'
      case 'Family Business':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400 border-pink-200 dark:border-pink-800'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200 dark:border-gray-800'
    }
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-gradient-to-br from-emerald-400/8 to-green-400/8 rounded-full blur-xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Diverse professional experience spanning web development, social media management, technical support, and business operations across various industries
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">5</div>
              <div className="text-gray-600 dark:text-gray-400">Positions Held</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">1</div>
              <div className="text-gray-600 dark:text-gray-400">Active Role</div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative h-full">
                <div className={`relative bg-gradient-to-br ${exp.bgColor} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-gray-500/10 dark:hover:shadow-black/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden h-full flex flex-col`}>
                  {/* Header with badges */}
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white shadow-sm`}>
                      {exp.type}
                    </span>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < exp.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Main Content Section */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Enhanced Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {exp.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-300 origin-left`}>
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight mb-2">
                        {exp.company}
                      </h4>
                      
                      {/* Location and Duration */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="leading-tight">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-lg bg-gradient-to-r ${exp.color} text-white opacity-80 hover:opacity-100 transition-opacity duration-200`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4 flex-grow">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-3">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-3 leading-relaxed p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-sm`}></div>
                          <span className="font-medium">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-3 leading-relaxed p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                          <Award className={`w-4 h-4 flex-shrink-0 mt-0.5 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`} />
                          <span className="font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="mt-auto">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Technologies & Skills:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building expertise across diverse industries and technologies
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  label: "Web Development", 
                  value: "2+", 
                  color: "from-blue-500 to-indigo-500",
                  icon: "💻",
                  description: "Years of experience"
                },
                { 
                  label: "Business Management", 
                  value: "2.5+", 
                  color: "from-pink-500 to-rose-500",
                  icon: "📈",
                  description: "Years managing operations"
                },
                { 
                  label: "Event Support", 
                  value: "5+", 
                  color: "from-emerald-500 to-green-500",
                  icon: "🎯",
                  description: "Events supported"
                },
                { 
                  label: "Current Role", 
                  value: "9+", 
                  color: "from-green-500 to-emerald-500",
                  icon: "⚡",
                  description: "Months active"
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
