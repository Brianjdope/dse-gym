import { useState, useEffect } from 'react'

const facilities = [
  { name: 'Weight Room', icon: '🏋️', capacity: 50, current: 32, status: 'moderate' },
  { name: 'Cardio Zone', icon: '🏃', capacity: 30, current: 8, status: 'low' },
  { name: 'Basketball Court', icon: '🏀', capacity: 20, current: 18, status: 'high' },
  { name: 'Swimming Pool', icon: '🏊', capacity: 25, current: 12, status: 'moderate' },
  { name: 'Group Fitness', icon: '🧘', capacity: 20, current: 20, status: 'full' },
  { name: 'Rock Wall', icon: '🧗', capacity: 10, current: 3, status: 'low' },
]

const hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM']
const heatData = [15, 22, 35, 42, 38, 30, 45, 48, 40, 35, 42, 50, 48, 44, 38, 28, 15]

function getStatusColor(status) {
  switch (status) {
    case 'low': return 'bg-emerald-500'
    case 'moderate': return 'bg-amber-500'
    case 'high': return 'bg-orange-500'
    case 'full': return 'bg-red-500'
    default: return 'bg-gray-500'
  }
}

function getStatusBg(status) {
  switch (status) {
    case 'low': return 'bg-emerald-500/10 border-emerald-500/30'
    case 'moderate': return 'bg-amber-500/10 border-amber-500/30'
    case 'high': return 'bg-orange-500/10 border-orange-500/30'
    case 'full': return 'bg-red-500/10 border-red-500/30'
    default: return 'bg-gray-500/10 border-gray-500/30'
  }
}

function getHeatColor(value) {
  if (value < 20) return 'bg-emerald-400'
  if (value < 35) return 'bg-amber-400'
  if (value < 45) return 'bg-orange-400'
  return 'bg-red-400'
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>DSE Gym</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Problem', 'Features', 'Dashboard', 'About'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
              {item}
            </a>
          ))}
          <a href="#dashboard" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
            View Live Status
          </a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t px-6 py-4 space-y-3">
          {['Problem', 'Features', 'Dashboard', 'About'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block text-gray-600 hover:text-primary font-medium">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-dark to-secondary">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[128px]" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-white/80 text-sm">Live tracking available now</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your DSE Gym,<br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Smarter.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Real-time facility tracking, smart reservations, and crowd insights so you never waste a trip to the gym again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#dashboard" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/25">
            See Live Availability
          </a>
          <a href="#features" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl text-lg font-semibold transition-all backdrop-blur-sm">
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[['64%', 'Avg Occupancy'], ['6', 'Facilities'], ['500+', 'Daily Users']].map(([num, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-white">{num}</div>
              <div className="text-white/50 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Overcrowding hurts everyone
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            When the gym is packed and machines are taken, students skip their workout entirely — impacting both physical and mental health.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Peak Hour Chaos',
              desc: 'During peak hours, machines are fully occupied and wait times can exceed 20 minutes per station.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              ),
              title: 'Wasted Trips',
              desc: 'Students walk to the gym only to find it packed, wasting valuable time they could spend studying or resting.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Health Impact',
              desc: 'Repeated frustration deters students from working out, directly impacting their physical and emotional well-being.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Know before you go
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            A smarter gym experience powered by real-time data, so every visit counts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: '📊',
              title: 'Live Occupancy Tracking',
              desc: 'See exactly how many people are using each facility in real-time — from the weight room to the pool.',
              color: 'from-emerald-500/20 to-emerald-500/5',
            },
            {
              icon: '📅',
              title: 'Smart Reservations',
              desc: 'Book your gym slot in advance. Our system counts reservations so you know how crowded it will be.',
              color: 'from-blue-500/20 to-blue-500/5',
            },
            {
              icon: '🔔',
              title: 'Push Notifications',
              desc: 'Get alerts when your favorite facility opens up, plus reminders for upcoming reservations.',
              color: 'from-amber-500/20 to-amber-500/5',
            },
            {
              icon: '📈',
              title: 'Peak Hour Insights',
              desc: 'View historical patterns to find the best times to work out when crowds are lowest.',
              color: 'from-purple-500/20 to-purple-500/5',
            },
          ].map((item) => (
            <div key={item.title} className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 border border-white/50 hover:shadow-lg transition-all`}>
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Dashboard() {
  const [selectedFacility, setSelectedFacility] = useState(null)

  return (
    <section id="dashboard" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Live Dashboard</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Facility status at a glance
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Real-time availability across all DSE facilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {facilities.map((f) => (
            <button
              key={f.name}
              onClick={() => setSelectedFacility(selectedFacility === f.name ? null : f.name)}
              className={`text-left rounded-2xl p-6 border transition-all hover:shadow-md ${
                selectedFacility === f.name ? 'ring-2 ring-primary border-primary/30 bg-primary/5' : `${getStatusBg(f.status)}`
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{f.icon}</span>
                <span className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${
                  f.status === 'low' ? 'text-emerald-600' :
                  f.status === 'moderate' ? 'text-amber-600' :
                  f.status === 'high' ? 'text-orange-600' : 'text-red-600'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${getStatusColor(f.status)} ${f.status !== 'full' ? 'animate-pulse' : ''}`} />
                  {f.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{f.name}</h3>
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-500">{f.current} / {f.capacity}</span>
                  <span className="font-semibold text-gray-700">{Math.round((f.current / f.capacity) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${getStatusColor(f.status)} h-2.5 rounded-full transition-all duration-500`}
                    style={{ width: `${(f.current / f.capacity) * 100}%` }}
                  />
                </div>
              </div>
              {selectedFacility === f.name && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Best times today:</p>
                  <div className="flex gap-2">
                    {['6-8 AM', '2-4 PM'].map(t => (
                      <span key={t} className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Today's Crowd Heatmap</h3>
          <div className="flex items-end gap-1.5 h-40">
            {heatData.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full ${getHeatColor(val)} rounded-t-md transition-all hover:opacity-80`}
                  style={{ height: `${(val / 50) * 100}%` }}
                  title={`${hours[i]}: ${val} people`}
                />
                <span className="text-[10px] text-gray-400 hidden sm:block">{hours[i]}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-6">
            {[['Low', 'bg-emerald-400'], ['Moderate', 'bg-amber-400'], ['Busy', 'bg-orange-400'], ['Peak', 'bg-red-400']].map(([label, color]) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-sm ${color}`} />
                <span className="text-xs text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">About</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
          Built for Stevens students
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          DSE Gym is a concept designed to improve the fitness experience at Stevens Institute of Technology. By leveraging real-time data and smart booking, we aim to reduce overcrowding and help every student make the most of their gym time.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { num: '93%', label: 'of students own compatible smartphones' },
            { num: '2x', label: 'more likely to work out with low crowds' },
            { num: '15min', label: 'average time saved per gym visit' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl font-bold text-primary">{stat.num}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-secondary text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-white font-bold">DSE Gym</span>
          </div>
          <p className="text-sm">Stevens Institute of Technology &mdash; DSE Fitness Center</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} DSE Gym Tracker</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Dashboard />
      <About />
      <Footer />
    </div>
  )
}

export default App
