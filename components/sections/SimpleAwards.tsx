"use client"
import React, { useState } from 'react'
import { Trophy, Medal, Award, Star, Calendar, MapPin, Users, Target, TrendingUp, Sparkles } from 'lucide-react'

export const SimpleAwards = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredAward, setHoveredAward] = useState<number | null>(null)
  const awards = [
    {
      title: "2025 AI Fest Hackathon",
      placement: "Top 3",
      year: "2025",
      month: "February",
      type: "Competition",
      level: "Regional",
      participants: "80+ teams",
      icon: <Trophy className="w-6 h-6" />,
      description: "Developed an innovative AI-powered solution that placed in the top 3 among 80+ competing teams",
      skills: ["Artificial Intelligence", "Machine Learning", "Python", "Team Leadership"],
      organizer: "AI Philippines",
      impact: "Showcased cutting-edge AI innovation",
      color: "from-yellow-400 to-amber-500",
      bgColor: "from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20"
    },
    {
      title: "WVSU-CICT Parangal 2025",
      placement: "Gold Award",
      year: "2025",
      month: "March", 
      type: "Academic Excellence",
      level: "University",
      participants: "500+ students",
      icon: <Medal className="w-6 h-6" />,
      description: "Recognized for outstanding academic performance with highest distinction in Computer Science program",
      skills: ["Computer Science", "Academic Excellence", "Research", "Leadership"],
      organizer: "WVSU",
      impact: "GPA: 3.9/4.0 - Top 5% of class",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      title: "WVSU-CICT Parangal 2024",
      placement: "Gold Award",
      year: "2024",
      month: "March",
      type: "Academic Excellence", 
      level: "University",
      participants: "450+ students",
      icon: <Medal className="w-6 h-6" />,
      description: "Consecutive gold award recognition for exceptional academic achievements and consistent performance",
      skills: ["Computer Science", "Programming", "Mathematics", "Problem Solving"],
      organizer: "WVSU",
      impact: "Maintained top academic standing",
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
    },
    {
      title: "Solve: Solutions Challenge Visayas",
      placement: "Top 10",
      year: "2024",
      month: "October",
      type: "Competition",
      level: "Regional",
      participants: "150+ teams",
      icon: <Trophy className="w-6 h-6" />,
      description: "Placed in top 10 of prestigious regional hackathon focused on innovative technology solutions",
      skills: ["Innovation", "Problem Solving", "Web Development", "Teamwork"],
      organizer: "Visayas Tech Alliance",
      impact: "Developed scalable tech solution",
      color: "from-purple-400 to-pink-500", 
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      title: "Senior High School Highest Honors",
      placement: "Summa Cum Laude",
      year: "2023",
      month: "May",
      type: "Academic Excellence",
      level: "School",
      participants: "200+ graduates",
      icon: <Award className="w-6 h-6" />,
      description: "Achieved the highest academic distinction with perfect attendance and exemplary performance",
      skills: ["Academic Excellence", "Leadership", "Mathematics", "Sciences"],
      organizer: "Tapaz National High School",
      impact: "GPA: 98.5/100 - Class Rank #1",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      title: "Senior High School Valedictorian",
      placement: "Class Rank #1",
      year: "2023",
      month: "May",
      type: "Academic Excellence",
      level: "School",
      participants: "200+ graduates",
      icon: <Award className="w-6 h-6" />,
      description: "Recognized as valedictorian with the highest GPA in the graduating class and outstanding leadership",
      skills: ["Public Speaking", "Leadership", "Academic Research", "Mentoring"],
      organizer: "Tapaz National High School",
      impact: "Delivered graduation speech to 500+ audience",
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
    },
    {
      title: "Mathematician of the Year",
      placement: "Outstanding Achievement",
      year: "2023",
      month: "April",
      type: "Academic Recognition", 
      level: "School",
      participants: "500+ students",
      icon: <Star className="w-6 h-6" />,
      description: "Recognized for exceptional performance in advanced mathematics and problem-solving competitions",
      skills: ["Advanced Mathematics", "Problem Solving", "Analytical Thinking", "Competition"],
      organizer: "Mathematics Department",
      impact: "Perfect scores in all mathematics subjects",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    },
    {
      title: "UPV Math Circle Inter-school Quiz Bee",
      placement: "5th Place",
      year: "2023",
      month: "March",
      type: "Competition",
      level: "Inter-University",
      participants: "50+ schools",
      icon: <Trophy className="w-6 h-6" />,
      description: "Competed against the best mathematics students from universities across the Visayas region",
      skills: ["Mathematics Competition", "Quick Thinking", "Pressure Management", "Strategy"],
      organizer: "University of the Philippines Visayas",
      impact: "Represented school with distinction",
      color: "from-teal-400 to-blue-500",
      bgColor: "from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20"
    },
    {
      title: "Municipal Outstanding Student Award",
      placement: "Excellence Recognition",
      year: "2023", 
      month: "June",
      type: "Community Recognition",
      level: "Municipal",
      participants: "Municipal-wide",
      icon: <Award className="w-6 h-6" />,
      description: "Municipal recognition for academic excellence, leadership, and significant community contribution",
      skills: ["Community Service", "Leadership", "Academic Excellence", "Public Service"],
      organizer: "Municipality of Tapaz",
      impact: "Inspiring local students to excel",
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    }
  ]

  const categories = [
    { name: "All", count: awards.length, icon: <Sparkles className="w-4 h-4" />, color: "from-gray-500 to-gray-600" },
    { name: "Competition", count: awards.filter(a => a.type === "Competition").length, icon: <Trophy className="w-4 h-4" />, color: "from-yellow-500 to-amber-500" },
    { name: "Academic Excellence", count: awards.filter(a => a.type === "Academic Excellence").length, icon: <Medal className="w-4 h-4" />, color: "from-blue-500 to-cyan-500" },
    { name: "Academic Recognition", count: awards.filter(a => a.type === "Academic Recognition").length, icon: <Star className="w-4 h-4" />, color: "from-purple-500 to-violet-500" },
    { name: "Community Recognition", count: awards.filter(a => a.type === "Community Recognition").length, icon: <Award className="w-4 h-4" />, color: "from-green-500 to-emerald-500" }
  ]

  const filteredAwards = selectedCategory && selectedCategory !== "All" 
    ? awards.filter(award => award.type === selectedCategory)
    : awards

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Competition':
        return 'from-yellow-400 to-amber-500'
      case 'Academic Excellence':
        return 'from-blue-400 to-cyan-500'
      case 'Academic Recognition':
        return 'from-purple-400 to-violet-500'
      case 'Community Recognition':
        return 'from-green-400 to-emerald-500'
      default:
        return 'from-gray-400 to-gray-500'
    }
  }

  const getPlacementColor = (placement: string) => {
    if (placement.includes("1") || placement.includes("Gold") || placement.includes("Valedictorian")) {
      return "text-yellow-600 dark:text-yellow-400"
    } else if (placement.includes("2") || placement.includes("Silver") || placement.includes("Top 3")) {
      return "text-gray-600 dark:text-gray-400"
    } else if (placement.includes("3") || placement.includes("Bronze") || placement.includes("Top 5")) {
      return "text-amber-600 dark:text-amber-400"
    }
    return "text-blue-600 dark:text-blue-400"
  }

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-amber-50/50 via-yellow-50/30 to-orange-50/50 dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-orange-950/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-amber-400/15 to-yellow-400/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Recognition & Achievements</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
            Honors & Awards
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Recognition for academic excellence, competitive achievements, and community contributions spanning multiple years of dedication and hard work
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">{awards.length}</div>
              <div className="text-gray-600 dark:text-gray-400">Total Awards</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">4</div>
              <div className="text-gray-600 dark:text-gray-400">Academic Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">4</div>
              <div className="text-gray-600 dark:text-gray-400">Competitions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">3</div>
              <div className="text-gray-600 dark:text-gray-400">Years Active</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 border ${
                  selectedCategory === category.name || (!selectedCategory && category.name === "All")
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-transparent`
                    : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border-gray-200/50 dark:border-gray-700/50'
                }`}
              >
                <div className={`transition-transform duration-300 ${
                  selectedCategory === category.name || (!selectedCategory && category.name === "All") 
                    ? 'group-hover:scale-110' 
                    : 'group-hover:scale-110'
                }`}>
                  {category.icon}
                </div>
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  selectedCategory === category.name || (!selectedCategory && category.name === "All")
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Awards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredAwards.map((award, index) => (
              <div 
                key={index}
                className="group"
                onMouseEnter={() => setHoveredAward(index)}
                onMouseLeave={() => setHoveredAward(null)}
              >
                <div className={`relative bg-gradient-to-br ${award.bgColor} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-gray-500/10 dark:hover:shadow-black/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden h-full`}>
                  {/* Award Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${award.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {award.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">
                        {award.year}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {award.month}
                      </div>
                    </div>
                  </div>

                  {/* Award Title and Placement */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {award.title}
                    </h3>
                    <div className={`text-lg font-semibold ${getPlacementColor(award.placement)} mb-3`}>
                      {award.placement}
                    </div>
                  </div>

                  {/* Award Meta Information */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Target className="w-4 h-4" />
                      <span>{award.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{award.participants}</span>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${award.color} text-white text-sm font-medium mb-4 shadow-md`}>
                    {award.type}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {award.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {award.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/50 dark:border-gray-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                    {award.skills.length > 3 && (
                      <span className="px-3 py-1 bg-gray-200/60 dark:bg-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                        +{award.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Impact and Organizer */}
                  <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Organizer:</span> {award.organizer}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{award.impact}</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-800/60 dark:to-gray-900/60 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Achievement Timeline</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A journey of continuous excellence spanning academic achievements, competitive success, and community recognition
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Medal className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  2023-2025
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Consistent academic excellence and leadership recognition across multiple institutions
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Trophy className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-2">
                  4 Major
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Competition placements showcasing technical skills and innovative problem-solving
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  Community
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Recognition for community contribution and inspiring the next generation of students
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
