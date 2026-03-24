import React from 'react'
import { User, GraduationCap, MapPin, Calendar, Code, Brain, Award, Target, BookOpen, Sparkles } from 'lucide-react'

export const SimpleAboutEnhanced = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-emerald-50/50 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-emerald-950/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-br from-violet-400/8 to-indigo-400/8 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-1/4 w-36 h-36 bg-gradient-to-br from-cyan-400/8 to-blue-400/8 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Personal Profile</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Passionate about creating innovative solutions through technology, specializing in AI, machine learning, and full-stack development
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
            <div className="text-center p-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-purple-200/50 dark:border-purple-700/50">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-1">CS Student</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Major</div>
            </div>
            <div className="text-center p-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-1">AI Focus</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Specialization</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Personal Introduction */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-12">
            <div className="flex items-start gap-6">
              <div className="hidden sm:block">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm Kirk Henrich C. Gamo, a passionate <strong className="text-blue-600 dark:text-blue-400">Computer Science Student</strong> and 
                  <strong className="text-purple-600 dark:text-purple-400"> AI Enthusiast</strong> from Iloilo City, Philippines. 
                  I am currently pursuing my Bachelor of Science in Computer Science at West Visayas State University, 
                  majoring in Artificial Intelligence.
                </p>
                
                <p>
                  My journey in technology began with a deep curiosity about how artificial intelligence can transform 
                  our world. Through my academic pursuits and hands-on projects, I've developed expertise in 
                  <strong className="text-indigo-600 dark:text-indigo-400"> web development</strong>, <strong className="text-cyan-600 dark:text-cyan-400">AI/ML technologies</strong>, and <strong className="text-rose-600 dark:text-rose-400">project management</strong>. 
                  I've had the privilege of leading various student organizations and contributing to innovative projects 
                  that bridge technology and community impact.
                </p>
                
                <p>
                  As I work towards my degree, I'm expanding my knowledge through advanced courses from Harvard University and IBM, 
                  focusing on computer science fundamentals, Python programming, and AI applications. I'm always 
                  eager to take on new challenges and collaborate on projects that make a meaningful difference while 
                  preparing for my career in technology.
                </p>
              </div>
            </div>
          </div>

          {/* Key Information Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Personal Information */}
            <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Info</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800/50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Iloilo City, Philippines</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Based in</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-800/50 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">West Visayas State University</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">BS Computer Science</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800/50 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Currently Enrolled</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Academic Status</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialization & Interests */}
            <div className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Specialization</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800/50 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Artificial Intelligence</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Major Focus Area</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-teal-800/50 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Web Development</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Development</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-800/50 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Project Management</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Leadership & Organization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Goals */}

          <div className="bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-800/60 dark:to-gray-900/60 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Future Goals & Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building towards a career in AI and technology with meaningful impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Career Goals Card */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-6 rounded-2xl hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Career Aspirations</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pursuing opportunities in AI research, machine learning engineering, and innovative technology solutions that can make a positive impact on society.</p>
              </div>

              {/* Skills Development Card */}
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-6 rounded-2xl hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Continuous Growth</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Committed to staying at the forefront of AI and web development technologies through continuous learning and hands-on project experience.</p>
              </div>
            </div>

            {/* Additional Learning */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-200/50 dark:border-indigo-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Continuous Learning</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Expanding knowledge through advanced courses from <strong>Harvard University</strong> and <strong>IBM</strong>, 
                focusing on computer science fundamentals, Python programming, and AI applications to stay at the forefront of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
