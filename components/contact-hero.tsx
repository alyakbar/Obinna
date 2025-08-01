export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-dm-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto text-balance animate-fade-in-up animation-delay-200">
          Ready to elevate your event with premium entertainment? Let's discuss your requirements and create something
          amazing together.
        </p>
      </div>
    </section>
  )
}
