import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/content';
import { MapPin, Clock, Maximize2, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectsPortfolioProps {
  onOpenConsultation: (projectName?: string) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Living Room', 'Modular Kitchen', 'Bedroom', 'Commercial', 'Turnkey'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0C0D0C] text-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151715] border border-[#E5E1D8]/10 text-[10px] font-bold text-[#2D4F3C] uppercase tracking-[0.3em]">
              <span>Portfolio & Case Studies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E5E1D8] tracking-tight">
              Spaces Designed in Patna
            </h2>
            <p className="text-base text-[#E5E1D8]/70 font-light leading-relaxed">
              Explore a curated selection of our completed residential and commercial projects across Boring Road, Patliputra, Bailey Road, and beyond.
            </p>
          </div>

          <div className="text-right hidden sm:block">
            <p className="text-3xl font-serif font-bold text-[#D9D2C5]">380+</p>
            <p className="text-[10px] text-[#E5E1D8]/50 uppercase tracking-[0.2em]">Homes Delivered Since 2019</p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#E5E1D8] text-[#0C0D0C] shadow-sm font-bold'
                  : 'bg-[#151715] text-[#E5E1D8]/60 hover:text-[#E5E1D8] hover:bg-[#1A1D1A] border border-[#E5E1D8]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#151715] rounded-2xl overflow-hidden border border-[#E5E1D8]/10 hover:border-[#2D4F3C] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-72 w-full overflow-hidden bg-[#0C0D0C]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151715] via-black/30 to-transparent" />
                
                {/* Category & Year Tag */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#0C0D0C]/90 backdrop-blur-xs text-[#E5E1D8] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border border-[#E5E1D8]/10">
                    {project.category}
                  </span>
                  <span className="bg-[#0C0D0C]/90 text-[#2D4F3C] border border-[#2D4F3C]/40 text-[10px] font-mono font-bold px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>

                {/* Quick inspect button */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0C0D0C]/80 border border-[#E5E1D8]/20 text-[#E5E1D8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom title & area */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-normal leading-tight text-[#E5E1D8] group-hover:text-[#D9D2C5] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-[#E5E1D8]/70 mt-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2D4F3C]" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Summary */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#E5E1D8]/65 line-clamp-2 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="pt-2 border-t border-[#E5E1D8]/10 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-[#E5E1D8]/80 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#2D4F3C]" />
                    <span>Completed in {project.duration}</span>
                  </span>

                  <span className="font-bold text-[11px] uppercase tracking-wider text-[#2D4F3C] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#E5E1D8]/70 mb-3 font-light">
            Want to see how your flat in Patna can look like this?
          </p>
          <button
            onClick={() => onOpenConsultation("Portfolio Inquiry")}
            className="inline-flex items-center gap-2 bg-[#E5E1D8] hover:bg-[#D9D2C5] text-[#0C0D0C] text-[11px] uppercase tracking-[0.18em] font-bold px-7 py-3.5 rounded shadow-sm transition-colors"
          >
            <span>Request a Free Design Walkthrough for Your Flat</span>
            <ArrowRight className="w-4 h-4 text-[#0C0D0C]" />
          </button>
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#151715] text-[#E5E1D8] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E5E1D8]/20 relative max-h-[92vh] flex flex-col">
            
            {/* Modal Image */}
            <div className="relative h-72 sm:h-80 w-full shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151715] via-black/40 to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0C0D0C]/80 border border-[#E5E1D8]/20 text-white flex items-center justify-center hover:bg-[#0C0D0C] transition-colors"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#2D4F3C] text-[#E5E1D8] px-2.5 py-0.5 rounded">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-[#E5E1D8]/70">Completed in {selectedProject.duration} ({selectedProject.year})</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#E5E1D8]">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Project Meta Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-[#0C0D0C] border border-[#E5E1D8]/10 rounded-lg text-xs">
                <div>
                  <p className="text-[#E5E1D8]/50 text-[10px] uppercase font-bold tracking-wider">Location</p>
                  <p className="font-bold text-[#E5E1D8] mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#2D4F3C]" /> {selectedProject.location}
                  </p>
                </div>
                <div>
                  <p className="text-[#E5E1D8]/50 text-[10px] uppercase font-bold tracking-wider">Carpet Area</p>
                  <p className="font-bold text-[#E5E1D8] mt-0.5">{selectedProject.area}</p>
                </div>
                <div>
                  <p className="text-[#E5E1D8]/50 text-[10px] uppercase font-bold tracking-wider">Execution Speed</p>
                  <p className="font-bold text-[#E5E1D8] mt-0.5">{selectedProject.duration}</p>
                </div>
                <div>
                  <p className="text-[#E5E1D8]/50 text-[10px] uppercase font-bold tracking-wider">Design Studio</p>
                  <p className="font-bold text-[#E5E1D8] mt-0.5">Boring Road</p>
                </div>
              </div>

              {/* Narrative */}
              <div>
                <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#2D4F3C] mb-2">Design Brief & Narrative</h4>
                <p className="text-sm text-[#E5E1D8]/70 leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#D9D2C5] mb-3">Architectural Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#E5E1D8]/85 p-2.5 rounded bg-[#0C0D0C] border border-[#E5E1D8]/10">
                      <CheckCircle2 className="w-4 h-4 text-[#2D4F3C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded bg-[#0C0D0C] border border-[#E5E1D8]/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#E5E1D8]">
                  <Sparkles className="w-4 h-4 text-[#2D4F3C]" />
                  <span>Executed with 100% factory-machined BWP Marine Plywood & Blum fittings.</span>
                </div>
              </div>

            </div>

            {/* Modal Action Buttons */}
            <div className="p-4 bg-[#0C0D0C] border-t border-[#E5E1D8]/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-semibold text-[#E5E1D8]/60 hover:text-[#E5E1D8]"
              >
                Back to Gallery
              </button>

              <button
                onClick={() => {
                  const pTitle = selectedProject.title;
                  setSelectedProject(null);
                  onOpenConsultation(`Project Style: ${pTitle}`);
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0C0D0C] bg-[#E5E1D8] hover:bg-[#D9D2C5] rounded shadow-xs"
              >
                Plan a Similar Interior for My Home
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
