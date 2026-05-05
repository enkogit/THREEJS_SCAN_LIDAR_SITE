export default function Testimonials() {
  const testimonials = [
    {
      quote: "Scanetica delivered the most accurate digital twin we've ever received. Their terrestrial LiDAR work on our Alberta refinery was flawless and saved us weeks of manual surveying.",
      name: "Jordan Hale",
      title: "Director of Digital Transformation",
      company: "Forge Refining"
    },
    {
      quote: "The drone LiDAR scan of our open-pit mine in Arizona gave us incredible detail under heavy vegetation. Their team was professional, fast, and the data integrated perfectly into our existing BIM workflow.",
      name: "Priya Lennox",
      title: "Chief Engineer",
      company: "Vanguard Mining"
    },
    {
      quote: "We used Scanetica for a complex highway interchange in Chicago. The combination of drone and terrestrial scanning gave us everything we needed for design and stakeholder presentations.",
      name: "Marcus Quill",
      title: "Senior Project Lead",
      company: "Nexus Development"
    },
    {
      quote: "Their digital twin of our new pharmaceutical facility in Ontario is now the single source of truth for operations, maintenance, and future expansions. Outstanding quality and support.",
      name: "Amara Voss",
      title: "Head of Operations",
      company: "Atlas Meridian Group"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="text-[#00F0FF] text-sm tracking-[4px] font-medium mb-4">REAL RESULTS. REAL CLIENTS.</div>
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white">What Our Clients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-zinc-950 border border-white/10 rounded-2xl p-7 flex flex-col hover:border-[#00F0FF]/40 transition-all duration-300 group"
          >
            <div className="text-4xl text-[#00F0FF] mb-6 group-hover:scale-110 transition-transform">“</div>
            
            <p className="text-[15px] text-[#E0E7FF] leading-relaxed flex-1 line-clamp-6">
              {testimonial.quote}
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="font-semibold text-white text-base">{testimonial.name}</div>
              <div className="text-[#C8D0FF] text-sm mt-0.5">{testimonial.title}</div>
              <div className="text-xs text-white/50 mt-1 tracking-wide">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}