import React from 'react'
import { Users, Crown, Award, Target, Calendar, TrendingUp } from 'lucide-react'

export const SimpleLeadership = () => {
  const leadership = [
    {
      organization: "WVSU - SparkHub",
      position: "Chief Executive Officer",
      period: "June 2025 - Present",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Coordinated the execution of the first-ever ExeCom Sensitivity Training",
        "Partnered with Sakdag PH for outreach activities",
        "Co-led the event WESTnovation Challenge 2025"
      ],
      tags: ["Leadership", "Event Management", "Partnership", "Training"],
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      status: "Current"
    },
    {
      organization: "WVSU - SparkHub",
      position: "Chief Research and Development Officer",
      period: "August 2024 - June 2025",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Managed and led the development of the College Fundays Realtime Digital Point System Tracker (ReDiPoST) - a web-based platform to manage and display live sporting event results during campus competitions",
        "Mentored 1 team during SPARKrientation and Acquiantance Party",
        "Co-managed and led 2 events (Training Odyssey 2025, and Seed Spark 2025)"
      ],
      tags: ["Software Development", "Web Development", "Mentoring", "Project Management"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      status: "Completed"
    },
    {
      organization: "WVSU - SparkHub",
      position: "Research and Development Committee Member",
      period: "November 2023 - August 2024",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Facilitated 2 events (GameOn 2023, and BuzzEx 2024)"
      ],
      tags: ["Event Management", "Facilitation", "Gaming"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      status: "Completed"
    },
    {
      organization: "WVSU - CIPHER",
      position: "Vice Chairperson for Internal Affairs",
      period: "July 2024 - July 2025",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Co-founded the establishment of the organization",
        "Co-authored the Constitution and By-Laws"
      ],
      tags: ["Co-Founder", "Legal Documentation", "Internal Affairs", "Governance"],
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      status: "Completed"
    },
    {
      organization: "WVSU - Association of DOST Scholars",
      position: "Board Member",
      period: "August 2024 - August 2025",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Handled the tracking of finance expenses of the whole organization throughout the academic year"
      ],
      tags: ["Finance Management", "Budget Tracking", "Board Governance"],
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
      iconColor: "text-rose-600 dark:text-rose-400",
      status: "Completed"
    },
    {
      organization: "WVSU - Cyb:Org",
      position: "Logistics Procurement Board Member",
      period: "August 2024 - July 2025",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Taught local community youths about AI and its implications during SK-na All"
      ],
      tags: ["AI Education", "Community Outreach", "Logistics", "Youth Mentoring"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20",
      iconColor: "text-teal-600 dark:text-teal-400",
      status: "Completed"
    },
    {
      organization: "WVSU - Cyb:Org",
      position: "Logistics Procurement Committee Member",
      period: "September 2023 - July 2024",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Facilitated the Korean delegates during the Jeju National University Internship Program"
      ],
      tags: ["International Relations", "Cultural Exchange", "Logistics", "Facilitation"],
      color: "from-sky-500 to-blue-500",
      bgColor: "from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20",
      iconColor: "text-sky-600 dark:text-sky-400",
      status: "Completed"
    },
    {
      organization: "WVSU - BSCS A Batch 2027",
      position: "Class Assistant Secretary",
      period: "August 2024 - Present",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Currently serving as Assistant Secretary for Batch 2027"
      ],
      tags: ["Administration", "Documentation", "Class Leadership"],
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      status: "Current"
    },
    {
      organization: "WVSU - BSCS A Batch 2027",
      position: "Class Chairperson",
      period: "August 2023 - August 2024",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Handled an average of 2 class projects for University-wide events (National Statistics Month Infographics Contest 2023 - 2nd place, and Heath and Fitness Day Advocacy 2023 - 3rd place)",
        "Headed the creation of the program-wide uniform shirts in collaboration with the program seniors and other section"
      ],
      tags: ["Project Management", "Competition Winner", "Collaboration", "Design"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      status: "Completed"
    },
    {
      organization: "WVSU - University Students' Alliance (USA)",
      position: "Auditor at the College of ICT Department",
      period: "August 2023 - July 2024",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Spearheaded the awareness project - DIGIcation: A Digital Literacy Awareness Seminar, to far-flung communities around Iloilo City",
        "Volunteered at an average of 5 community outreached projects within Iloilo City (Zarraga Childrens Village Charity, Villa Clean-up Drive, Voters' Awareness Seminar, and such)"
      ],
      tags: ["Digital Literacy", "Community Outreach", "Auditing", "Social Impact"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      status: "Completed"
    },
    {
      organization: "WVSU - College of Information and Communication Technology (CICT)",
      position: "Auditor at the 1st Year Curriculum",
      period: "September 2023 - August 2024",
      location: "WVSU - Lapaz, Iloilo",
      achievements: [
        "Facilitated the 1st year students participation in sports during the CICT Fundays 2023"
      ],
      tags: ["Student Engagement", "Sports Facilitation", "Auditing"],
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
      iconColor: "text-violet-600 dark:text-violet-400",
      status: "Completed"
    }
  ]

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-amber-50/50 via-yellow-50/30 to-orange-50/50 dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-orange-950/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 left-1/3 w-28 h-28 bg-gradient-to-br from-orange-400/8 to-red-400/8 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Leadership Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Leadership & Organizations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Leading initiatives, building communities, and driving innovation through various leadership roles and organizational commitments.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">6</div>
              <div className="text-gray-600 dark:text-gray-400">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">11</div>
              <div className="text-gray-600 dark:text-gray-400">Leadership Roles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">2</div>
              <div className="text-gray-600 dark:text-gray-400">Current Positions</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {leadership.map((role, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${role.bgColor} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-gray-500/10 dark:hover:shadow-black/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${role.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {(index === 0 || index === 1 || index === 2) && <Crown className="w-5 h-5 text-white" />}
                  {(index === 3 || index === 4) && <Users className="w-5 h-5 text-white" />}
                  {(index === 5 || index === 6) && <Award className="w-5 h-5 text-white" />}
                  {(index === 7 || index === 8) && <Target className="w-5 h-5 text-white" />}
                  {(index === 9 || index === 10) && <Users className="w-5 h-5 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-lg font-bold bg-gradient-to-r ${role.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                      {role.position}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      role.status === 'Current' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                    }`}>
                      {role.status}
                    </span>
                  </div>
                  <p className="text-gray-900 dark:text-white font-semibold text-base mb-2">
                    {role.organization}
                  </p>
                  <div className="flex items-center gap-2 mb-2 text-xs text-gray-600 dark:text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>{role.period}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {role.location}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {role.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 text-xs font-medium rounded-md bg-gradient-to-r ${role.color} text-white opacity-80 hover:opacity-100 transition-opacity duration-200`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Key Achievements:
                </h4>
                <ul className="space-y-3">
                  {role.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg border border-white/40 dark:border-gray-700/40"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-sm`}></div>
                      <span className="leading-relaxed font-medium">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Leadership Impact Summary */}
        <div className="bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
              Leadership Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Driving change through collaborative leadership and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                label: "Organizations", 
                value: "6", 
                color: "from-amber-500 to-orange-500",
                icon: "🏢",
                description: "Different organizations served"
              },
              { 
                label: "Leadership Roles", 
                value: "11", 
                color: "from-blue-500 to-indigo-500",
                icon: "👥",
                description: "Executive positions held"
              },
              { 
                label: "Events Led", 
                value: "10+", 
                color: "from-green-500 to-emerald-500",
                icon: "🎯",
                description: "Successful events organized"
              },
              { 
                label: "Years Active", 
                value: "2+", 
                color: "from-purple-500 to-violet-500",
                icon: "📅",
                description: "Years of continuous service"
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
    </section>
  )
}
