export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container-max section-padding text-center">
        <h1 className="font-dm-serif text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          About <span className="gradient-text">Oga Obinna</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance animate-fade-in-up animation-delay-200">
          The journey of East Africa's most dynamic entertainer, from humble beginnings to becoming a household name
          across the region.
        </p>
      </div>
    </section>
  )
}
