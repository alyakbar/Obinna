export function MediaHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float animation-delay-200"></div>
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <div className="w-4 h-4 mr-2 bg-white/70 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            Premium Content Hub
          </div>

          <h1 className="hero-title text-white mb-6 leading-tight">
            Media <span className="gradient-text-gold">Gallery</span>
          </h1>

          <p className="body-text text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our premium content library featuring The Obinna Show, exclusive interviews, behind-the-scenes
            moments, and cultural programming that defines East African entertainment.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500K+</div>
              <div className="text-sm text-white/70">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-sm text-white/70">Episodes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50M+</div>
              <div className="text-sm text-white/70">Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">4</div>
              <div className="text-sm text-white/70">Show Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
