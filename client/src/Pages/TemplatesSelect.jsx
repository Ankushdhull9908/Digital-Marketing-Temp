import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const templatesData = [
  {
    id: 'kelly-blackwell',
    name: 'Kelly Blackwell',
    category: 'modern',
    description: 'Clean two-column layout perfect for administrative and creative roles.',
    image: 'https://cdn.bettercv.net/bettercv/templates/kelly-blackwell-b49590510526e033878b6680a65cc9e5.png', // Or use local placeholder
  },
  {
    id: 'howard-jones',
    name: 'Howard Jones',
    category: 'executive',
    description: 'Traditional academic style for senior executives, lawyers, or scientists.',
    image: 'https://cdn.bettercv.net/bettercv/templates/howard-jones-c6897c413a167d4f128c688c2f1f008f.png',
  },
  {
    id: 'samantha-williams',
    name: 'Samantha Williams',
    category: 'creative',
    description: 'Photo-friendly layout with a bold header for high-impact presence.',
    image: 'https://cdn.bettercv.net/bettercv/templates/samantha-williams-a10a8d46249e9d6d84f67600b65f042e.png',
  }
];

const categories = [
  { id: 'all', name: 'All Templates', icon: '📂' },
  { id: 'simple', name: 'Simple', icon: '⭐' },
  { id: 'modern', name: 'Modern', icon: '🎨' },
  { id: 'one-column', name: 'One Column', icon: '📄' },
  { id: 'photo', name: 'With Photo', icon: '📷' },
  { id: 'executive', name: 'Professional', icon: '💼' },
  { id: 'ats', name: 'ATS-Friendly', icon: '✅' },
];

const TemplateSelect = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTemplates = activeCategory === 'all'
    ? templatesData
    : templatesData.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-8">
      
      {/* 1. Refined Stepper (Top of Image) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center border-b pb-8 mb-12">
        <div className="flex items-center gap-2 font-semibold">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">1</span>
          Choose template
        </div>
        <div className="hidden md:block h-px w-16 bg-gray-200"></div>
        <div className="flex items-center gap-2 text-gray-400 font-medium">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm">2</span>
          Enter your details
        </div>
        <div className="hidden md:block h-px w-16 bg-gray-200"></div>
        <div className="flex items-center gap-2 text-gray-400 font-medium">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm">3</span>
          Download resume
        </div>
      </div>

      {/* 2. Main Title Section */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 font-['Rajdhani'] mb-5 uppercase tracking-tight">
          RESUME <span className="text-blue-600">Templates</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Simple to use and ready in minutes resume templates — give it a try for free now!
        </p>
        <Link to="" className="btn btn-link text-blue-600 font-bold px-0 gap-1.5 min-h-0 h-auto">
          Choose later 
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* 3. Refined Category Filter Bar */}
      <div className="border-b border-gray-100 pb-2 mb-10 sticky top-0 bg-white z-[60] overflow-x-auto">
        <div className="flex items-center gap-3 lg:justify-center px-2 py-1 min-w-max">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-medium text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Refined Templates Grid (Cards with refined hover and border) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {filteredTemplates.length > 0 ? filteredTemplates.map((template) => (
          <div key={template.id} className="card bg-gray-50/50 hover:bg-white border hover:border-blue-300 shadow-sm hover:shadow-2xl transition-all duration-300 group rounded-3xl overflow-hidden">
            
            <figure className="relative h-[480px] bg-gray-100 p-8 border-b border-gray-100 group-hover:p-6 transition-all duration-500">
              <img 
                src={template.image} 
                alt={template.name} 
                className="w-full h-full object-contain object-top group-hover:scale-[1.03] transition-transform duration-500 shadow-lg rounded-md" 
              />
              {/* Refined Overly/Button (Appears on Hover) */}
              <div className="absolute inset-0 bg-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10">
                <Link 
                  to={`/resume-editor/${template.id}`} 
                  className="btn btn-primary rounded-full px-12 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
                >
                  USE THIS TEMPLATE
                </Link>
              </div>
            </figure>

            <div className="card-body p-8">
              <h2 className="card-title text-2xl font-bold font-['Rajdhani']">
                {template.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-1">
                {template.description}
              </p>
            </div>
          </div>
        )) : (
          <div className="col-span-full text-center py-20 bg-gray-100 rounded-2xl">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-xl text-gray-500 font-medium">No templates found in this category.</p>
          </div>
        )}
      </div>

      {/* 5. Members Note from previous version (Optional) */}
      <div className="mt-20 text-center pb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-gray-100 bg-white rounded-full text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              More templates arriving soon.
          </div>
      </div>
    </div>
  );
};

export default TemplateSelect;