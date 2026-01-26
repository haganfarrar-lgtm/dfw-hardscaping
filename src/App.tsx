import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  MapPin, 
  CheckCircle2, 
  Phone,
  ArrowRight,
  Instagram,
  Facebook,
  Mail,
  Menu,
  X,
  Star,
  Users,
  ChevronDown,
  MessageSquare,
  HardHat,
  Hammer,
  Layout
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- SEO Component ---

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

const SEO = ({ title, description, canonical, schema }: SEOProps) => {
  const fullTitle = `${title} | DFW Hardscaping`;
  const url = canonical || `https://dfwhardscaping.com${window.location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://dfwhardscaping.com/assets/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

const HeaderFont = "font-['Outfit'] font-black tracking-tight";

// --- Data ---

const ALL_SERVICES = [
  { 
    id: "pavers-flagstone",
    title: "Pavers & Flagstone", 
    image: "/assets/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg",
    desc: "Expertly installed stone patios, walkways, and driveways using premium pavers and natural flagstone.",
    longDesc: "Elevate your outdoor space with the timeless elegance of stone. We specialize in precision-laid paver patterns and artistic flagstone work that creates a solid, beautiful foundation for your yard. Our installations are engineered with reinforced bases to withstand the North Texas climate, ensuring a lifetime of durability and style.",
    features: ["Interlocking Pavers", "Natural Flagstone", "Artistic Patterns", "Reinforced Bases", "Polymeric Sand Finishing"],
    process: [
      { title: "Site Prep", desc: "Deep excavation and multi-layer aggregate base compaction for stability." },
      { title: "Stone Setting", desc: "Hand-selection and precision placement of each stone or paver." },
      { title: "Sealing", desc: "Professional grade sealing to enhance color and protect against the elements." }
    ]
  },
  { 
    id: "masonry-walls",
    title: "Masonry & Retaining Walls", 
    image: "/assets/brick work/mm-brick-wall-fronted-by-concrete-paver-walkway.jpg",
    desc: "Structural stone walls, brick work, and decorative masonry built for both beauty and erosion control.",
    longDesc: "Our master masons build structural elements that define your property. From heavy-duty retaining walls that manage slope and erosion to decorative brick and stone features, we combine engineering with craftsmanship. We use premium local stone and high-strength mortar to ensure your walls stand firm for decades.",
    features: ["Retaining Walls", "Decorative Columns", "Brick Masonry", "Stone Veneer", "Erosion Control"],
    process: [
      { title: "Engineering", desc: "Calculating load and drainage requirements for structural integrity." },
      { title: "Foundation", desc: "Pouring steel-reinforced concrete footings for every wall." },
      { title: "Masonry Build", desc: "Expert stone stacking and mortar work by master craftsmen." }
    ]
  },
  { 
    id: "outdoor-kitchens",
    title: "Outdoor Kitchens & Fire", 
    image: "/assets/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp",
    desc: "Custom built-in grills, outdoor kitchens, and stone fireplaces for the ultimate hosting experience.",
    longDesc: "Transform your backyard into a five-star resort. We design and build bespoke outdoor kitchens, wood-burning fireplaces, and modern gas fire pits. Using heat-resistant masonry and premium appliances, we create functional luxury that allows you to cook, dine, and relax outdoors year-round.",
    features: ["Built-in Grills", "Stone Fireplaces", "Pizza Ovens", "Gas Fire Pits", "Custom Cabinetry"],
    process: [
      { title: "Utility Run", desc: "Professional installation of gas, water, and electrical lines." },
      { title: "Frame Build", desc: "Building the structural core with non-combustible masonry materials." },
      { title: "Finish Work", desc: "Applying stone veneer, countertops, and installing appliances." }
    ]
  },
  { 
    id: "pergolas-living",
    title: "Pergolas & Outdoor Living", 
    image: "/assets/hardscaping/DSC04265-2048x1152-1.jpg",
    desc: "Custom cedar pergolas, pavilions, and covered structures to provide shade and architectural depth.",
    longDesc: "Create a shaded sanctuary in your DFW backyard. Our custom-built pergolas and pavilions are crafted from premium Western Red Cedar and professional-grade hardware. Whether you want a traditional open-air pergola or a fully roofed pavilion with lighting and fans, we build structures that harmonize with your hardscape.",
    features: ["Cedar Pergolas", "Solid Roof Pavilions", "Integrated Lighting", "Custom Stain", "Architectural Timber"],
    process: [
      { title: "Post Setting", desc: "Deep-set concrete piers to ensure your structure stays level and secure." },
      { title: "Timber Build", desc: "Precision joinery and heavy-timber construction by expert builders." },
      { title: "Final Finish", desc: "Applying protective stains and integrated electrical components." }
    ]
  },
  { 
    id: "rock-gravel",
    title: "River Rock & Gravel", 
    image: "/assets/river rock/landscape-design-front-yard-landscaping-houston-tx-77407.jpg",
    desc: "Modern dry river beds, decorative gravel paths, and low-maintenance rock gardens.",
    longDesc: "Harness the natural beauty of the earth. We design sophisticated landscapes using river rock, decorative gravel, and large boulders. These features provide excellent drainage, reduce maintenance, and add a high-end modern aesthetic to any DFW property. Perfect for xeriscaping or adding texture to traditional beds.",
    features: ["Dry River Beds", "Decomposed Granite", "Mexican Beach Pebble", "Feature Boulders", "Weed Barrier Prep"],
    process: [
      { title: "Excavation", desc: "Removing organic matter and establishing proper drainage pitch." },
      { title: "Barrier Lay", desc: "Installing commercial-grade geotextile fabric to prevent weed growth." },
      { title: "Rock Install", desc: "Artistic placement of stones and gravel for a natural, finished look." }
    ]
  },
  { 
    id: "landscaping",
    title: "Professional Landscaping", 
    image: "/assets/landscape design/dallas-texas-sustainable-landscaping-services-scaled.jpg",
    desc: "Expert softscaping and planting plans designed to complement your new hardscape structures.",
    longDesc: "No hardscape is complete without the right greenery. We provide professional planting services that bring life and color to your stone structures. We select 'Texas Tough' plants that thrive in our local climate, ensuring your landscape looks as good in July as it does in April. From privacy screens to seasonal color, we do it all.",
    features: ["Native Plant Selection", "Privacy Screens", "Irrigation Tuning", "Mulch Installation", "Seasonal Color"],
    process: [
      { title: "Soil Prep", desc: "Tilling and amending the soil with organic compost and nutrients." },
      { title: "Planting", desc: "Expert placement according to sunlight and growth requirements." },
      { title: "Mulching", desc: "Applying premium mulch to retain moisture and finish the aesthetic." }
    ]
  }
];

const SERVICE_AREAS = [
  { name: "DFW", slug: "dfw" },
  { name: "Fort Worth", slug: "fort-worth" },
  { name: "Dallas", slug: "dallas" },
  { name: "Arlington", slug: "arlington" },
  { name: "Plano", slug: "plano" },
  { name: "Irving", slug: "irving" },
  { name: "Garland", slug: "garland" },
  { name: "Grand Prairie", slug: "grand-prairie" },
  { name: "McKinney", slug: "mckinney" },
  { name: "Frisco", slug: "frisco" },
  { name: "Carrollton", slug: "carrollton" },
  { name: "Denton", slug: "denton" },
  { name: "Richardson", slug: "richardson" },
  { name: "Lewisville", slug: "lewisville" },
  { name: "Addison", slug: "addison" },
  { name: "Allen", slug: "allen" },
  { name: "Southlake", slug: "southlake" },
  { name: "Colleyville", slug: "colleyville" },
  { name: "Grapevine", slug: "grapevine" },
  { name: "Coppell", slug: "coppell" },
  { name: "Flower Mound", slug: "flower-mound" },
  { name: "Keller", slug: "keller" },
  { name: "Haslet", slug: "haslet" },
  { name: "Roanoke", slug: "roanoke" },
  { name: "Argyle", slug: "argyle" },
  { name: "Mansfield", slug: "mansfield" },
  { name: "Burleson", slug: "burleson" },
  { name: "Crowley", slug: "crowley" },
  { name: "Aledo", slug: "aledo" },
  { name: "Weatherford", slug: "weatherford" },
  { name: "Granbury", slug: "granbury" },
  { name: "Cleburne", slug: "cleburne" },
  { name: "Joshua", slug: "joshua" },
  { name: "Kennedale", slug: "kennedale" },
  { name: "Everman", slug: "everman" },
  { name: "Saginaw", slug: "saginaw" },
  { name: "Lake Worth", slug: "lake-worth" },
  { name: "Azle", slug: "azle" },
  { name: "Springtown", slug: "springtown" },
  { name: "Justin", slug: "justin" },
  { name: "North Richland Hills", slug: "north-richland-hills" },
  { name: "Haltom City", slug: "haltom-city" },
  { name: "Richland Hills", slug: "richland-hills" },
  { name: "Bedford", slug: "bedford" },
  { name: "Euless", slug: "euless" },
  { name: "Hurst", slug: "hurst" },
  { name: "The Colony", slug: "the-colony" },
  { name: "Little Elm", slug: "little-elm" },
  { name: "Corinth", slug: "corinth" },
  { name: "Highland Village", slug: "highland-village" },
  { name: "Trophy Club", slug: "trophy-club" }
];

const FAQS = [
  {
    q: "Do you offer free hardscaping estimates in DFW?",
    a: "Yes! We provide free on-site consultations and detailed project estimates for all hardscaping and outdoor living projects across the DFW metroplex."
  },
  {
    q: "How long does a typical paver patio installation take?",
    a: "Most standard patio projects take 3-5 days. Larger projects involving outdoor kitchens, pergolas, or complex masonry can take 2-3 weeks depending on the scope."
  },
  {
    q: "Will my pavers shift or crack over time?",
    a: "Not with us. We use professional-grade aggregate bases and polymeric sand that allows for natural flexibility while preventing shifting and weed growth. We build to a 'commercial-plus' residential standard."
  },
  {
    q: "Can you build outdoor kitchens under existing patio covers?",
    a: "Yes, we can integrate custom outdoor kitchens into your existing layout or build a brand-new pavilion to house your new cooking space."
  },
  {
    q: "What type of stone is best for DFW weather?",
    a: "We recommend natural flagstone, premium concrete pavers, and Milsap stone for retaining walls. These materials are 'Texas Proven' to handle intense heat and heavy rain."
  },
  {
    q: "Do you handle the city permits for pergolas and pavilions?",
    a: "Yes, we manage the entire permitting process for any structural builds, ensuring your new outdoor living space is fully compliant with local DFW building codes."
  },
  {
    q: "What is the difference between flagstone and pavers?",
    a: "Flagstone is a natural, irregularly shaped stone that offers a rustic look. Pavers are manufactured stones that offer more uniform patterns and a modern aesthetic. We install both with expert precision."
  },
  {
    q: "Do you install drainage with your hardscapes?",
    a: "Absolutely. Every hardscape project we design includes a comprehensive drainage plan to ensure water moves away from your home and your new stone work."
  },
  {
    q: "How do I maintain my new stone patio?",
    a: "We recommend a professional cleaning and sealing every 2-3 years to keep the colors vibrant and protect the stone from stains and UV damage."
  },
  {
    q: "How do we get started?",
    a: "Simply fill out our lead form below or call us at 682-244-4610 to schedule your hardscaping consultation!"
  }
];

const TESTIMONIALS = [
  {
    name: "Mark T.",
    location: "Southlake",
    text: "The outdoor kitchen and fireplace DFW Hardscaping built for us is incredible. Their attention to detail on the masonry work was better than I ever expected.",
    stars: 5
  },
  {
    name: "Sarah L.",
    location: "Plano",
    text: "Professional from start to finish. Our new paver patio and cedar pergola have completely transformed our backyard into our favorite room in the house.",
    stars: 5
  },
  {
    name: "David R.",
    location: "Fort Worth",
    text: "They solved a massive erosion issue with a beautiful tiered retaining wall system. It's structural, but it looks like a piece of art.",
    stars: 5
  }
];

const RECENT_PROJECTS = [
  { title: "Modern Paver Estate", category: "Hardscaping", image: "/assets/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg" },
  { title: "Luxury Outdoor Kitchen", category: "Outdoor Living", image: "/assets/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp" },
  { title: "Tiered Stone Walls", category: "Masonry", image: "/assets/brick work/mm-brick-wall-fronted-by-concrete-paver-walkway.jpg" },
  { title: "Cedar Pavilion Build", category: "Structures", image: "/assets/hardscaping/DSC04265-2048x1152-1.jpg" },
  { title: "Dry River Bed Design", category: "Rock Work", image: "/assets/river rock/landscape-design-front-yard-landscaping-houston-tx-77407.jpg" },
  { title: "Flagstone Pool Deck", category: "Patios", image: "/assets/hardscaping/hardscaping-mobile-img.webp" }
];

// --- Scroll to Top Component ---
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

// --- Service Areas Page ---

const ServiceAreasPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 "
    >
      <SEO 
        title="Service Areas | Hardscaping Coverage Across North Texas"
        description="DFW Hardscaping serves over 50 cities across Dallas-Fort Worth. View our full service area including Southlake, Plano, Frisco, Fort Worth, and more."
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-slate-700 font-bold uppercase tracking-widest text-sm mb-4 block">Our Metroplex Reach</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">Service Areas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We provide elite hardscaping and outdoor living construction to DFW and over 50 surrounding cities across the North Texas area.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SERVICE_AREAS.map((area) => (
            <motion.div
              key={area.slug}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to={`/location/${area.slug}`}
                className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-slate-600 hover:-translate-y-1 transition-all flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-600 transition-colors">
                  <MapPin className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-slate-700 transition-colors">{area.name}</h3>
                <span className="text-xs font-bold text-gray-400 uppercase mt-2 group-hover:text-slate-600 transition-colors">View Services</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Local SEO Content Block */}
        <div className="mt-24 bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-black mb-6">Searching for a Top-Rated Hardscaping Company in DFW?</h2>
          <p className="text-gray-600 leading-relaxed font-medium mb-6">
            If you're looking for professional DFW hardscaping companies, you've come to the right place. We are a premier outdoor living company in DFW, TX, serving residential and commercial clients with high-end stone work, masonry, and custom structures.
          </p>
          <p className="text-gray-600 leading-relaxed font-medium">
            Our team specialized in durable, engineered builds that handle the unique soil and climate conditions of North Texas. Whether you need a paver patio in Plano or a retaining wall in Fort Worth, we are the experts you can trust for quality that lasts.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3 group">
            <div className="bg-slate-600 p-2.5 rounded-full group-hover:rotate-12 transition-all shadow-lg border-2 border-white">
              <Hammer className="text-white w-7 h-7" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn("text-3xl tracking-tight text-gray-900 uppercase", HeaderFont)}>DFW</span>
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-600 uppercase ml-0.5">Hardscaping</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-10 text-[13px] font-black uppercase tracking-widest">
            <Link to="/" onClick={handleHomeClick} className="text-gray-500 hover:text-slate-600 transition-colors">Home</Link>
            <a href="/#services" className="text-gray-500 hover:text-slate-600 transition-colors">Services</a>
            <Link to="/service-areas" onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-slate-600 transition-colors">Areas</Link>
            <a href="/#gallery" className="text-gray-500 hover:text-slate-600 transition-colors">Portfolio</a>
            <a href="/#about" className="text-gray-500 hover:text-slate-600 transition-colors">About</a>
            <div className="flex items-center gap-6 pl-6 border-l border-gray-100">
              <a href="tel:682-244-4610" className="text-gray-900 font-black flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-600" /> 682-244-4610
              </a>
              <a href="/#contact" className="px-8 py-3 bg-slate-600 text-white rounded-lg hover:bg-gray-900 transition-all shadow-xl shadow-slate-100">
                Get Quote
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="p-6 space-y-6 font-black uppercase tracking-widest text-sm">
              <Link to="/" onClick={handleHomeClick} className="block text-gray-900">Home</Link>
              <a href="/#services" onClick={() => setIsOpen(false)} className="block text-gray-900">Services</a>
              <Link to="/service-areas" onClick={() => setIsOpen(false)} className="block text-gray-900">Service Areas</Link>
              <a href="/#gallery" onClick={() => setIsOpen(false)} className="block text-gray-900">Portfolio</a>
              <a href="/#about" onClick={() => setIsOpen(false)} className="block text-gray-900">About Us</a>
              <a href="tel:682-244-4610" className="block text-slate-600 text-lg">682-244-4610</a>
              <a href="/#contact" onClick={() => setIsOpen(false)} className="block w-full py-4 bg-slate-600 text-white rounded-xl text-center">
                Get A Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-48 pb-24 px-4 overflow-visible">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 lg:max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-black tracking-[0.2em] text-slate-700 uppercase bg-slate-100 rounded-md">
            <Star className="w-3 h-3 fill-slate-700" /> Premium DFW Hardscaping
          </div>
          <h1 className={cn("text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-8xl mb-10 leading-[1.1] text-gray-900 uppercase tracking-tighter", HeaderFont)}>
            Structural <br />
            <span className="text-slate-600 italic">Elegance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mb-12 font-medium leading-relaxed">
            DFW's destination for elite hardscaping and custom outdoor living construction. From master masonry to bespoke patios, we build the foundations of outdoor luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-12 py-6 bg-gray-900 text-white rounded-xl font-black uppercase tracking-widest hover:bg-slate-600 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-2xl">
              Get Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#gallery" className="px-12 py-6 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-black uppercase tracking-widest hover: transition-all shadow-sm">
              Our Projects
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-10 items-center opacity-50 font-black uppercase tracking-tighter text-sm">
            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-slate-600"/> 500+ Built</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-slate-600"/> Licensed</div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-slate-600"/> 5.0 Rating</div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-0"
        >
          <div className="absolute inset-0 bg-slate-600 translate-x-4 translate-y-4 rounded-[2.5rem]"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[650px]">
            <img 
              src="/assets/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg" 
              alt="Luxury stone paver patio and outdoor living space by DFW Hardscaping" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const AboutUs = () => (
  <section id="about" className="py-32 bg-white overflow-visible">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/hardscaping/hardscaping-mobile-img.webp" className="rounded-3xl shadow-xl h-80 w-full object-cover mt-12" alt="Professional hardscaping installation in Dallas-Fort Worth" />
            <img src="/assets/brick work/Brick-Stone-Wall-2.jpg" className="rounded-3xl shadow-xl h-80 w-full object-cover" alt="Structural stone masonry and brick wall construction" />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <span className="text-slate-600 font-black uppercase tracking-[0.3em] text-sm mb-6 block">Our Legacy</span>
          <h2 className={cn("text-6xl md:text-7xl text-gray-900 mb-8 leading-tight uppercase tracking-tighter", HeaderFont)}>Professional <br/><span className="text-slate-600">Hardscaping</span></h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
            DFW Hardscaping specializes in the structural backbone of your outdoor environment. We don't just lay stone; we engineer exterior spaces that stand the test of time. Our team understands the specific soil challenges of the DFW area.
          </p>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
            Every project we take on is built to the highest quality standards. From massive stone retaining walls to intricate outdoor kitchens, we are DFW's choice for professional hardscaping.
          </p>
          <div className="flex gap-12">
            <div>
              <div className="text-5xl font-black text-gray-900 mb-2 italic">10+</div>
              <div className="text-xs font-black text-slate-600 uppercase tracking-widest">Years Expertise</div>
            </div>
            <div>
              <div className="text-5xl font-black text-gray-900 mb-2 italic">100%</div>
              <div className="text-xs font-black text-slate-600 uppercase tracking-widest">Built To Spec</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const RecentWork = () => (
  <section id="gallery" className="py-32 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="text-slate-500 font-black uppercase tracking-[0.3em] text-sm mb-6 block">Our Portfolio</span>
          <h2 className={cn("text-6xl md:text-8xl uppercase tracking-tighter", HeaderFont)}>Recent Projects</h2>
        </div>
        <button className="px-10 py-5 border-2 border-white/20 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all">
          View Full Gallery
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {RECENT_PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[500px] overflow-hidden rounded-2xl transition-all duration-500"
          >
            <img 
              src={project.image} 
              alt={`${project.title} - ${project.category} project by DFW Hardscaping`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent p-10 flex flex-col justify-end">
              <span className="text-slate-500 font-black text-xs uppercase tracking-widest mb-3">{project.category}</span>
              <h4 className="text-3xl font-black uppercase tracking-tighter leading-none">{project.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-20 uppercase tracking-tighter">Client Reviews</h2>
      <div className="grid md:grid-cols-3 gap-12 text-left">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-l-4 border-slate-600 pl-10 py-4"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(t.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-slate-600 text-slate-600" />
              ))}
            </div>
            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8 italic">"{t.text}"</p>
            <div>
              <h4 className="font-black text-gray-900 text-lg uppercase tracking-widest">{t.name}</h4>
              <span className="text-slate-600 font-black text-xs uppercase">{t.location}, TX</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-gray-900 p-12 lg:p-20 text-white">
            <h2 className="text-5xl font-black mb-10 leading-none uppercase tracking-tighter">Start Your <br/><span className="text-slate-600">Project</span></h2>
            <p className="text-gray-400 text-lg font-medium mb-12 leading-relaxed">
              Contact our design team to schedule your on-site consultation.
            </p>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <Phone className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Call Us</div>
                  <a href="tel:682-244-4610" className="text-2xl font-black hover:text-slate-500 transition-colors tracking-tighter">682-244-4610</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <MapPin className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Headquarters</div>
                  <div className="text-2xl font-black tracking-tighter">DFW, Texas</div>
                </div>
              </div>
            </div>
            <div className="mt-20 flex gap-6">
              <Instagram className="w-6 h-6 text-gray-500 hover:text-slate-600 transition-colors cursor-pointer" />
              <Facebook className="w-6 h-6 text-gray-500 hover:text-slate-600 transition-colors cursor-pointer" />
            </div>
          </div>
          <div className="lg:col-span-3 p-0 h-[800px] lg:h-auto border-l border-gray-100">
            {/* GHL Form Integration */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/xgr1yi6Zi3imt2o7urjD"
              style={{ width: '100%', height: '100%', border: 'none' }}
              id="inline-xgr1yi6Zi3imt2o7urjD" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivated"
              data-deactivation-value=""
              data-form-name="DFW Hardscaping Lead Form"
              data-height="800"
              data-layout-iframe-id="inline-xgr1yi6Zi3imt2o7urjD"
              data-form-id="xgr1yi6Zi3imt2o7urjD"
              title="DFW Hardscaping Lead Form"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { icon: MessageSquare, title: "Consultation", desc: "On-site meeting to discuss your vision, budget, and site potential." },
    { icon: Layout, title: "Hardscape Plan", desc: "Detailed technical design and stone selection for your new space." },
    { icon: HardHat, title: "Masonry Build", desc: "Professional construction with expert masons and clean crews." },
    { icon: CheckCircle2, title: "Final Walk", desc: "Ensuring every joint and stone meets our 'built to spec' standard." }
  ];

  return (
    <section className="py-32  overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-20 uppercase tracking-tighter italic">Our Project Workflow</h2>
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="w-24 h-24 bg-gray-900 text-slate-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:bg-slate-600 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                <step.icon size={40} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-widest italic">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-bold">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">DFW Hardscaping FAQ</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className=" rounded-2xl overflow-hidden border border-gray-100">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 py-8 flex items-center justify-between text-left hover: transition-colors"
              >
                <span className="font-black text-lg text-gray-900 uppercase tracking-widest">{faq.q}</span>
                <ChevronDown className={cn("w-6 h-6 text-slate-600 transition-transform", activeIndex === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 font-bold leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-xl mb-24">
          <span className="text-slate-500 font-black uppercase tracking-[0.3em] text-sm mb-6 block">Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">Hardscape <br/>Expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ALL_SERVICES.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img src={s.image} alt={`${s.title} - Professional hardscaping service in DFW`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-bold">{s.desc}</p>
                <Link 
                  to={`/location/dfw/${s.id}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-black uppercase text-[10px] tracking-widest rounded-lg hover:bg-slate-600 transition-colors"
                >
                  View Detail <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-slate-600 font-black uppercase tracking-[0.3em] text-sm mb-6 block">Locations</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">DFW & Beyond</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SERVICE_AREAS.slice(0, 20).map((area) => (
            <motion.div
              key={area.slug}
              whileHover={{ y: -5 }}
            >
              <Link 
                to={`/location/${area.slug}`}
                className="p-6  rounded-xl font-black text-gray-900 uppercase tracking-tighter text-sm hover:bg-slate-600 hover:text-white transition-all text-center block shadow-sm border border-gray-100"
              >
                {area.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/service-areas" className="font-black uppercase tracking-widest text-xs text-slate-600 border-b-2 border-slate-600 pb-1 hover:text-gray-900 hover:border-gray-900 transition-colors">
            See All 50+ Cities
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- Dynamic Location Page ---

const LocationPage = () => {
  const { city } = useParams();
  const location = SERVICE_AREAS.find(a => a.slug === city);
  const cityName = location?.name || city?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `DFW Hardscaping ${cityName}`,
    "description": `Top-rated hardscaping contractor in ${cityName}, TX. Specialist in patios, walls, and outdoor living.`,
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "telephone": "682-244-4610",
    "url": `https://dfwhardscaping.com/location/${city}`,
    "image": "https://dfwhardscaping.com/assets/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": "TX",
      "addressCountry": "US"
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40"
    >
      <SEO 
        title={`Hardscaping Contractor in ${cityName}, TX | Custom Stone Work`}
        description={`Searching for hardscaping in ${cityName}? DFW Hardscaping builds professional stone patios, retaining walls, and outdoor kitchens in ${cityName}, TX. Free estimates.`}
        schema={citySchema}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-black tracking-[0.2em] text-slate-700 uppercase bg-slate-100 rounded-md">
              Serving {cityName}, TX
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] uppercase tracking-tighter">
              Hardscape Experts <br/><span className="text-slate-600">{cityName}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
              Professional structural exterior construction and site development services for residential properties in {cityName}.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {["Structural Masonry", "Precision Engineering", "Precision Builds", "Local Experts"].map(t => (
                <div key={t} className="flex items-center gap-4 font-black text-gray-900 uppercase text-xs tracking-widest italic border-l-2 border-slate-600 pl-4">
                  {t}
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-block px-12 py-6 bg-gray-900 text-white rounded-xl font-black uppercase tracking-widest hover:bg-slate-600 transition-all shadow-2xl">
              Request {cityName} Consultation
            </a>
          </motion.div>
        </div>

        <div className="mb-32">
          <h2 className="text-5xl font-black mb-16 text-center uppercase tracking-tighter italic">Hardscape Solutions for {cityName}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ALL_SERVICES.map((s, i) => (
              <Link to={`/location/${city}/${s.id}`} key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all group h-full flex flex-col"
                >
                  <div className="h-72 overflow-hidden">
                    <img src={s.image} alt={`${s.title} in ${cityName}, TX - Expert hardscaping installation`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="p-10 flex-grow">
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-widest italic">{s.title}</h3>
                    <p className="text-gray-500 text-sm font-bold mb-8 leading-relaxed">{s.desc}</p>
                    <div className="text-slate-600 font-black text-xs uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all">
                      View Service Specs <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ContactSection />
    </motion.div>
  );
};

// --- SEO Content Generator Component ---

const ServiceSEOContent = ({ serviceId, cityName }: { serviceId: string, cityName: string }) => {
  const content: Record<string, React.ReactNode> = {
    "pavers-flagstone": (
      <div className="prose prose-lg max-w-none text-gray-600 font-bold leading-relaxed space-y-8 text-justify">
        <h2 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic text-left">Professional Pavers & Flagstone in {cityName}, TX Near Me</h2>
        <p>
          Elevating your property with professional **paver installation in {cityName}, TX** is a journey that blends architectural precision with natural beauty. At DFW Hardscaping, we recognize that {cityName} residents expect nothing less than excellence. Our specialized masonry services are crafted to meet the unique challenges of the North Texas environment while reflecting the sophisticated aesthetic of our local communities.
        </p>
        <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-widest italic text-left">Why Professional Masonry Matters in {cityName}</h3>
        <p>
          Searching for a **hardscaping company near me** often yields many results, but true stone work requires a deep understanding of site orientation, soil composition, and drainage. In {cityName}, where outdoor living is a way of life, our designs focus on creating functional "outdoor rooms" that extend your living space. We utilize advanced 3D rendering to help you visualize your new oasis before we ever move a single stone.
        </p>
        <p>
          Our material palettes are carefully curated for longevity and beauty. We prioritize high-grade pavers and natural Oklahoma flagstone that can withstand the intense summer heat and unpredictable winters of the DFW area. From formal entryways to rustic backyard retreats, every element is chosen with purpose. When you partner with DFW Hardscaping as your **landscaper in {cityName}**, you're investing in a landscape that will mature beautifully and add significant value to your estate.
        </p>
      </div>
    ),
    "masonry-walls": (
      <div className="prose prose-lg max-w-none text-gray-600 font-bold leading-relaxed space-y-8 text-justify">
        <h2 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic text-left">Structural Retaining Walls & Masonry in {cityName}, TX</h2>
        <p>
          Hardscaping is the foundation of a world-class outdoor environment. For **retaining walls in {cityName}, TX**, discerning homeowners trust DFW Hardscaping to deliver structural beauty that stands the test of time. From professional paver patios and flagstone walkways to engineered retaining walls and professional outdoor kitchens, we specialize in high-end masonry that redefines your backyard experience.
        </p>
        <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-widest italic text-left">Engineering for the North Texas Clay</h3>
        <p>
          One of the primary challenges for any **hardscaper in {cityName}** is the expansive black clay soil. Without a professional base, masonry will quickly shift and crack. At DFW Hardscaping, we never cut corners. Our installation process involves deep excavation, high-grade geotextiles, and multi-layered compacted aggregate bases. This "over-engineered" approach ensures your stone work remains perfectly level through every season.
        </p>
      </div>
    ),
    "outdoor-kitchens": (
      <div className="prose prose-lg max-w-none text-gray-600 font-bold leading-relaxed space-y-8 text-justify">
        <h2 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic text-left">Elite Outdoor Kitchens & Fireplaces in {cityName}, TX</h2>
        <p>
          Your outdoor space should be an extension of your home's luxury. For **outdoor kitchens in {cityName}, TX**, we design and build functional features like fire pits, fireplaces, and fully equipped outdoor kitchens that make your backyard the ultimate destination for entertaining. Every masonry project is also planned with lighting and drainage integration in mind, providing a seamless and high-performing result.
        </p>
        <p>
          Wood-burning fireplaces and modern gas fire pits are often a necessity in {cityName} for year-round enjoyment. We turn these functional elements into beautiful design features using premium materials like Milsap stone or architectural wall blocks. If you are looking for a **hardscaping company in {cityName}** that specializes in serious structural work, DFW Hardscaping is your choice for "built to spec" excellence.
        </p>
      </div>
    ),
    "pergolas-living": (
      <div className="prose prose-lg max-w-none text-gray-600 font-bold leading-relaxed space-y-8 text-justify">
        <h2 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic text-left">Custom Pergolas & Covered Living in {cityName}, TX</h2>
        <p>
          Illuminate the beauty of your property with professional **outdoor structures in {cityName}, TX**. At DFW Hardscaping, we believe that a great landscape should be enjoyed in comfort. Our cedar pergolas and pavilions are designed to enhance your property value while providing much-needed shade from the Texas sun.
        </p>
        <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-widest italic text-left">The Art of Outdoor Living</h3>
        <p>
          Searching for a **pergola builder near me**? Elite structures are about more than just "shade"; it's about artfully placing columns and beams to create depth and architectural interest. We use premium Western Red Cedar and professional-grade stains to ensure your structure withstands the {cityName} climate without warping or failing. As a leading **hardscaping company in {cityName}**, we take pride in delivering structures that become the star of the neighborhood.
        </p>
      </div>
    ),
    "rock-gravel": (
      <div className="prose prose-lg max-w-none text-gray-600 font-bold leading-relaxed space-y-8 text-justify">
        <h2 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic text-left">River Rock & Decorative Gravel in {cityName}, TX</h2>
        <p>
          Achieve a modern, low-maintenance look with professional **rock landscaping in {cityName}, TX**. For homeowners who want sophisticated results, DFW Hardscaping provides dry river bed and gravel garden services that go far beyond just dumping rock. As a premier **hardscaping company in {cityName}**, we understand that the success of your rock work depends entirely on the preparation of the site.
        </p>
        <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-widest italic text-left">The Groundwork for a Modern Landscape</h3>
        <p>
          When you search for **river rock near me**, you need a team that understands the {cityName} ecosystem. Our process starts with the full removal of old weeds and grass, establishment of proper drainage pitch, and the installation of commercial-grade weed barriers. This ensures your new rock feature stays clean and functional for years.
        </p>
      </div>
    ),
    "landscaping": (
      <div className="prose prose-lg max-w-none text-gray-600 font-bold leading-relaxed space-y-8 text-justify">
        <h2 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic text-left">Professional Landscape Integration in {cityName}, TX</h2>
        <p>
          Plants are the most valuable living assets on your property. For **landscaping in {cityName}, TX**, DFW Hardscaping offers expert selection and planting techniques that ensure your softscape complements your new stone work. As a trusted **hardscaping company in {cityName}**, we specialize in specimen-grade plantings that provide immediate scale, shade, and character to your landscape.
        </p>
        <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-widest italic text-left">Choosing the Right Species for {cityName}</h3>
        <p>
          Not all plants are suited for the North Texas climate. When searching for a **landscaper near me**, it's critical to work with experts who know which species will thrive in {cityName}'s soil. we recommend native species that are "Texas Proven." Our team handles everything from delivery to professional planting, including proper fertilization and root-health management.
        </p>
      </div>
    )
  };

  return content[serviceId] || <div className="p-12 text-center  rounded-3xl font-bold text-gray-400 uppercase tracking-widest">Build specs coming soon for {cityName}...</div>;
};

// --- Dynamic Service Location Page ---

const ServiceLocationPage = () => {
  const { city, serviceId } = useParams();
  const service = ALL_SERVICES.find(s => s.id === serviceId);
  const location = SERVICE_AREAS.find(a => a.slug === city);
  const cityName = location?.name || city?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'DFW';

  if (!service || !serviceId) return <div>Service not found</div>;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.title} in ${cityName}, TX`,
    "description": service.desc,
    "provider": {
      "@type": "LocalBusiness",
      "name": "DFW Hardscaping",
      "telephone": "682-244-4610",
      "url": "https://dfwhardscaping.com"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32"
    >
      <SEO 
        title={`${service.title} in ${cityName}, TX | Professional Installation`}
        description={`Elite ${service.title.toLowerCase()} installation in ${cityName}, TX. Our master masons build durable, high-end ${service.title.toLowerCase()} to suit your ${cityName} estate.`}
        schema={serviceSchema}
      />
      <div className="max-w-7xl mx-auto px-4">
        <Link to={`/location/${city}`} className="inline-flex items-center gap-3 text-slate-600 font-black uppercase text-xs tracking-widest mb-12 hover:gap-5 transition-all">
          <ArrowRight className="w-5 h-5 rotate-180" /> Back to {cityName}
        </Link>
        
        <div className="grid lg:grid-cols-3 gap-24 items-start mb-32">
          <div className="lg:col-span-2">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black mb-12 leading-[0.9] uppercase tracking-tighter"
            >
              {service.title} <br/>
              <span className="text-slate-600">in {cityName}, TX</span>
            </motion.h1>
            
            <div className="mt-16">
              <ServiceSEOContent serviceId={serviceId} cityName={cityName} />
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-16">
              {service.features.map(f => (
                <div key={f} className="flex items-center gap-4 text-xs font-black text-gray-900 uppercase tracking-widest  p-6 rounded-2xl border border-gray-100 italic">
                  <CheckCircle2 className="text-slate-600 w-5 h-5" /> {f}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-10 lg:sticky lg:top-40">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl   transition-all duration-700">
              <img src={service.image} className="w-full h-full object-cover" alt={`${service.title} professional installation in ${cityName}, TX by DFW Hardscaping`} />
            </div>

            <div className="bg-gray-900 p-12 rounded-[3rem] shadow-2xl text-white">
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Site Consultation</h3>
              <p className="text-gray-400 font-bold mb-10 leading-relaxed">Schedule your {cityName} build specs today.</p>
              <a href="#contact" className="w-full py-6 bg-slate-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-4 shadow-xl">
                Get My Estimate <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "DFW Hardscaping",
    "image": "https://dfwhardscaping.com/assets/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg",
    "@id": "https://dfwhardscaping.com",
    "url": "https://dfwhardscaping.com",
    "telephone": "682-244-4610",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DFW Metroplex",
      "addressLocality": "Dallas-Fort Worth",
      "addressRegion": "TX",
      "postalCode": "76101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7767,
      "longitude": -96.7970
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/dfwhardscaping",
      "https://www.instagram.com/dfwhardscaping"
    ]
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 selection:bg-slate-100 selection:text-slate-900 font-sans tracking-tight">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SEO 
                  title="DFW Hardscaping | Elite Stone & Outdoor Living Construction"
                  description="Premium hardscaping in Dallas-Fort Worth. Specialized in stone patios, retaining walls, outdoor kitchens, and custom pergolas. Built to spec since 2014."
                  schema={homeSchema}
                />
                <Hero />
                <Process />
                <AboutUs />
                <Services />
                <FAQSection />
                <RecentWork />
                
                <section className="py-32 bg-gray-900 text-white border-y border-white/5">
                  <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
                    <div>
                      <div className="text-6xl font-black text-slate-600 mb-4 italic leading-none">500+</div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Local Builds</div>
                    </div>
                    <div>
                      <div className="text-6xl font-black text-slate-600 mb-4 italic leading-none">10+</div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Service Years</div>
                    </div>
                    <div>
                      <div className="text-6xl font-black text-slate-600 mb-4 italic leading-none">100%</div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Quality Verified</div>
                    </div>
                    <div>
                      <div className="text-6xl font-black text-slate-600 mb-4 italic leading-none">DFW</div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Hardscape Experts</div>
                    </div>
                  </div>
                </section>

                <Testimonials />
                <ServiceAreas />
                
                <ContactSection />
              </motion.div>
            } />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/location/:city" element={<LocationPage />} />
            <Route path="/location/:city/:serviceId" element={<ServiceLocationPage />} />
          </Routes>
        </AnimatePresence>
        
        <footer className="bg-gray-900 text-white py-32 px-4 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-20">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-4 mb-10 group">
                <div className="bg-slate-600 p-2.5 rounded-full border-2 border-white/20">
                  <Hammer className="text-white w-8 h-8" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-3xl font-black tracking-tighter text-white uppercase">DFW</span>
                  <span className="text-[11px] font-black tracking-[0.3em] text-slate-600 uppercase ml-0.5">Hardscaping</span>
                </div>
              </Link>
              <p className="text-gray-400 max-w-sm mb-12 font-bold text-lg leading-relaxed">
                Elite hardscaping and structural outdoor living for North Texas since 2014.
              </p>
              <div className="flex gap-8">
                {[Instagram, Facebook, Mail].map((Icon, i) => (
                  <div key={i} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-slate-600 transition-all cursor-pointer border border-white/10 group">
                    <Icon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors"/>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.3em] text-slate-600 mb-10">Directory</h4>
              <ul className="space-y-6 text-gray-400 font-black uppercase tracking-widest text-[11px]">
                <li><Link to="/" className="hover:text-white transition-colors">Home Base</Link></li>
                <li><a href="/#services" className="hover:text-white transition-colors">Capabilities</a></li>
                <li><Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
                <li><a href="/#gallery" className="hover:text-white transition-colors">The Work</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Get Estimate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.3em] text-slate-600 mb-10">Dispatch</h4>
              <ul className="space-y-8 text-gray-400 font-black uppercase text-xs tracking-widest">
                <li className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <Phone size={20} className="text-slate-600" />
                  </div>
                  <a href="tel:682-244-4610" className="hover:text-white transition-colors italic">682-244-4610</a>
                </li>
                <li className="flex items-center gap-5 text-[11px]">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <MapPin size={20} className="text-slate-600" />
                  </div>
                  DFW Metroplex
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 text-center text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">
            <p>&copy; {new Date().getFullYear()} DFW Hardscaping. Built To Spec.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
