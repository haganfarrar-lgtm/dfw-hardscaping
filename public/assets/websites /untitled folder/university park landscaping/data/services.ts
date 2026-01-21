export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  category: 'landscaping' | 'hardscaping' | 'maintenance' | 'specialty';
  icon: string;
  heroImage: string;
  images: string[];
}

export const services: Service[] = [
  // LANDSCAPING SERVICES
  {
    slug: 'landscape-design',
    name: 'Landscape Design',
    shortDescription: 'Custom landscape designs tailored to your property and vision.',
    description: 'Our professional landscape design services transform your outdoor vision into reality. We create custom designs that enhance your property\'s beauty, functionality, and value while considering the unique North Texas climate.',
    features: [
      '3D design renderings',
      'Plant selection for Texas climate',
      'Irrigation planning',
      'Lighting design integration',
      'Phased implementation plans',
      'Budget-conscious options'
    ],
    benefits: [
      'Increase property value by up to 15%',
      'Create outdoor living spaces',
      'Reduce water consumption with smart design',
      'Year-round curb appeal'
    ],
    category: 'landscaping',
    icon: 'Palette',
    heroImage: '/images/services/landscape-design/20211005_095835.jpg.webp',
    images: [
          "/images/services/landscape-design/20211005_095835.jpg.webp",
          "/images/services/landscape-design/Cost-of-Landscape-Design-in-Front-Yard.jpg",
          "/images/services/landscape-design/DSC_1803-landscape-2038969fa6c2d9b279503decfcc00863-6052660cd835c.jpg",
          "/images/services/landscape-design/Frisco-Landscape-Design.jpg",
          "/images/services/landscape-design/How-Much-is-Landscape-Design-in-TX.jpg",
          "/images/services/landscape-design/about.png",
          "/images/services/landscape-design/dallas-texas-sustainable-landscaping-services-scaled.jpg",
          "/images/services/landscape-design/landscape1.jpg"
    ]
  },
  {
    slug: 'planting',
    name: 'Planting Services',
    shortDescription: 'Expert plant installation including trees, shrubs, and flowers.',
    description: 'Our planting services bring life to your landscape with carefully selected plants suited for the North Texas climate. From colorful seasonal flowers to majestic shade trees, we handle it all with expertise.',
    features: [
      'Native Texas plant specialists',
      'Seasonal color rotations',
      'Shade tree installation',
      'Ornamental shrubs',
      'Perennial gardens',
      'Drought-tolerant selections'
    ],
    benefits: [
      'Professional plant selection',
      'Proper planting techniques',
      'Plant health guarantee',
      'Ongoing care guidance'
    ],
    category: 'landscaping',
    icon: 'Flower2',
    heroImage: '/images/services/landscape-design/20211005_095835.jpg.webp',
    images: [
          "/images/services/landscape-design/20211005_095835.jpg.webp",
          "/images/services/landscape-design/Cost-of-Landscape-Design-in-Front-Yard.jpg",
          "/images/services/landscape-design/DSC_1803-landscape-2038969fa6c2d9b279503decfcc00863-6052660cd835c.jpg",
          "/images/services/landscape-design/Frisco-Landscape-Design.jpg",
          "/images/services/landscape-design/How-Much-is-Landscape-Design-in-TX.jpg",
          "/images/services/landscape-design/about.png",
          "/images/services/landscape-design/dallas-texas-sustainable-landscaping-services-scaled.jpg",
          "/images/services/landscape-design/landscape1.jpg"
    ]
  },
  {
    slug: 'tree-planting',
    name: 'Tree Planting',
    shortDescription: 'Professional tree installation for shade, beauty, and property value.',
    description: 'Add natural beauty and value to your property with our professional tree planting services. We select and install trees that thrive in the Texas climate while providing shade and aesthetic appeal for generations.',
    features: [
      'Shade tree specialists',
      'Ornamental tree installation',
      'Proper root ball handling',
      'Soil amendment',
      'Staking and support',
      'Watering establishment plans'
    ],
    benefits: [
      'Reduce cooling costs',
      'Increase property value',
      'Create wildlife habitat',
      'Long-term investment'
    ],
    category: 'landscaping',
    icon: 'TreeDeciduous',
    heroImage: '/images/services/tree-planting/20220828_Planting-finished.jpg',
    images: [
          "/images/services/tree-planting/20220828_Planting-finished.jpg",
          "/images/services/tree-planting/517-N-900-Rd-005_crop-resize.jpg",
          "/images/services/tree-planting/Arbor-Day.jpg",
          "/images/services/tree-planting/planting-trees-johnsons-nursery-ftimg.jpg",
          "/images/services/tree-planting/tree-planting-richmond.jpg"
    ]
  },
  {
    slug: 'sod-installation',
    name: 'Sod Installation',
    shortDescription: 'Instant, beautiful lawns with professional sod installation.',
    description: 'Transform your yard instantly with our professional sod installation services. We use premium-quality sod varieties suited for North Texas, ensuring a lush, green lawn from day one.',
    features: [
      'Premium Bermuda, St. Augustine, Zoysia',
      'Soil preparation and grading',
      'Proper installation techniques',
      'Irrigation coordination',
      'Edge trimming and finishing',
      'Post-installation care guide'
    ],
    benefits: [
      'Instant curb appeal',
      'Erosion prevention',
      'Weed-free start',
      'Immediate use after establishment'
    ],
    category: 'landscaping',
    icon: 'Sprout',
    heroImage: '/images/services/sod-installation/462602370-554657337073058-3239656087942568655-n-673f3c5acc627.webp',
    images: [
          "/images/services/sod-installation/462602370-554657337073058-3239656087942568655-n-673f3c5acc627.webp",
          "/images/services/sod-installation/about01-1024x576.jpg",
          "/images/services/sod-installation/amazing-grace-garden-center-video.jpg",
          "/images/services/sod-installation/sod-faq.webp",
          "/images/services/sod-installation/sod_install_argyle--2048x1365.jpg",
          "/images/services/sod-installation/unnamed.png"
    ]
  },
  {
    slug: 'mulch-installation',
    name: 'Mulch Installation',
    shortDescription: 'Premium mulch for plant health and landscape beauty.',
    description: 'Protect your plants and enhance your landscape with our professional mulch installation. We offer various mulch types to suit your aesthetic preferences and plant needs.',
    features: [
      'Hardwood mulch',
      'Cedar mulch',
      'Colored mulch options',
      'Proper depth application',
      'Weed barrier integration',
      'Bed edge definition'
    ],
    benefits: [
      'Moisture retention',
      'Weed suppression',
      'Temperature regulation',
      'Polished appearance'
    ],
    category: 'landscaping',
    icon: 'Layers',
    heroImage: '/images/services/mulch-installation/Front-Yard-Landscaping-2.jpg',
    images: [
          "/images/services/mulch-installation/Front-Yard-Landscaping-2.jpg",
          "/images/services/mulch-installation/Shrubs-and-Mulching.webp",
          "/images/services/mulch-installation/f5e4b65136c144c520211201-79180-14g9uuk-1024x768.jpg",
          "/images/services/mulch-installation/images-1.jpeg",
          "/images/services/mulch-installation/images-2.jpeg",
          "/images/services/mulch-installation/images.jpeg",
          "/images/services/mulch-installation/khukh-scaled.jpg",
          "/images/services/mulch-installation/mulching.jpg"
    ]
  },
  {
    slug: 'river-rock',
    name: 'River Rock & Gravel',
    shortDescription: 'Decorative rock installations for low-maintenance beauty.',
    description: 'Add texture and low-maintenance beauty to your landscape with river rock and decorative gravel. Perfect for drainage areas, xeriscaping, and accent features throughout your property.',
    features: [
      'Various sizes and colors',
      'Proper base preparation',
      'Landscape fabric installation',
      'Edging and containment',
      'Drainage solutions',
      'Accent and border applications'
    ],
    benefits: [
      'Zero maintenance ground cover',
      'Excellent drainage',
      'Long-lasting beauty',
      'Water conservation'
    ],
    category: 'landscaping',
    icon: 'Circle',
    heroImage: '/images/services/river-rock/1000s.jpg',
    images: [
          "/images/services/river-rock/1000s.jpg",
          "/images/services/river-rock/Design-a-Dry-River-Bed.jpg.webp",
          "/images/services/river-rock/Invigorating-a-Front-Yard-Entrance.jpg.webp",
          "/images/services/river-rock/landscape-design-front-yard-landscaping-houston-tx-77407.jpg",
          "/images/services/river-rock/rock-garden-gravel-walkway-houston-tx-77099.jpeg",
          "/images/services/river-rock/s788803928908410492_p15_i5_w650.webp.jpeg",
          "/images/services/river-rock/unnamed.jpg"
    ]
  },
  {
    slug: 'softscaping',
    name: 'Softscaping',
    shortDescription: 'Complete living landscape elements from lawns to gardens.',
    description: 'Our softscaping services encompass all living elements of your landscape. From lush lawns to vibrant flower beds, we create harmonious outdoor environments that thrive in the Texas climate.',
    features: [
      'Lawn installation and renovation',
      'Flower bed creation',
      'Ground cover installation',
      'Native plant gardens',
      'Ornamental grasses',
      'Seasonal color programs'
    ],
    benefits: [
      'Environmental benefits',
      'Year-round color',
      'Habitat creation',
      'Air quality improvement'
    ],
    category: 'landscaping',
    icon: 'Leaf',
    heroImage: '/images/services/landscape-design/20211005_095835.jpg.webp',
    images: [
          "/images/services/landscape-design/20211005_095835.jpg.webp",
          "/images/services/landscape-design/Cost-of-Landscape-Design-in-Front-Yard.jpg",
          "/images/services/landscape-design/DSC_1803-landscape-2038969fa6c2d9b279503decfcc00863-6052660cd835c.jpg",
          "/images/services/landscape-design/Frisco-Landscape-Design.jpg",
          "/images/services/landscape-design/How-Much-is-Landscape-Design-in-TX.jpg",
          "/images/services/landscape-design/about.png",
          "/images/services/landscape-design/dallas-texas-sustainable-landscaping-services-scaled.jpg",
          "/images/services/landscape-design/landscape1.jpg"
    ]
  },
  {
    slug: 'flower-bed-edging',
    name: 'Flower Bed Edging',
    shortDescription: 'Define your landscape with professional bed edging.',
    description: 'Create clean, defined edges for your flower beds and landscape areas. Our edging services provide structure and polish to any landscape design, keeping everything neat and tidy.',
    features: [
      'Steel edging',
      'Aluminum edging',
      'Plastic edging',
      'Natural stone borders',
      'Brick edging',
      'Concrete curbing'
    ],
    benefits: [
      'Clean, defined lines',
      'Reduced maintenance',
      'Prevents grass intrusion',
      'Professional appearance'
    ],
    category: 'landscaping',
    icon: 'Maximize',
    heroImage: '/images/services/flower-bed-edging/190367414_6566607686698643_8881875869959725016_n.jpg',
    images: [
          "/images/services/flower-bed-edging/190367414_6566607686698643_8881875869959725016_n.jpg",
          "/images/services/flower-bed-edging/193348429_6566607900031955_404621650641529488_n.jpg",
          "/images/services/flower-bed-edging/193892377_6566607846698627_4074080007948971492_n.jpg",
          "/images/services/flower-bed-edging/212315446_6745061922186551_8712056112203627763_n.jpg",
          "/images/services/flower-bed-edging/212979273_6745061808853229_1197778121794462377_n.jpg",
          "/images/services/flower-bed-edging/690bccd301bf6b167960d876_stone-edging3.webp",
          "/images/services/flower-bed-edging/chopped-block-stone-landscape-edging-limetone-double-layer-houston-tx-77099.jpeg"
    ]
  },

  // HARDSCAPING SERVICES
  {
    slug: 'hardscaping',
    name: 'Hardscaping',
    shortDescription: 'Beautiful patios, walkways, and outdoor structures.',
    description: 'Transform your outdoor space with our professional hardscaping services. From elegant patios to functional walkways, we create durable, beautiful hardscape features that extend your living space outdoors.',
    features: [
      'Patios and terraces',
      'Walkways and pathways',
      'Retaining walls',
      'Outdoor kitchens',
      'Fire features',
      'Water features'
    ],
    benefits: [
      'Extend living space',
      'Increase property value',
      'Low maintenance surfaces',
      'Year-round enjoyment'
    ],
    category: 'hardscaping',
    icon: 'LayoutGrid',
    heroImage: '/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp',
    images: [
          "/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp",
          "/images/services/hardscaping/DSC04265-2048x1152-1.jpg",
          "/images/services/hardscaping/Hardscapes-1024x675.jpg",
          "/images/services/hardscaping/garden-walkway-casa-serena-landscape-designs-llc-closed_2825.jpg.webp",
          "/images/services/hardscaping/hardscape-materials.jpg",
          "/images/services/hardscaping/hardscaping-mobile-img.webp",
          "/images/services/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg",
          "/images/services/hardscaping/tx-landscaping-hardscape.jpg"
    ]
  },
  {
    slug: 'pavers',
    name: 'Paver Installation',
    shortDescription: 'Elegant paver patios, driveways, and walkways.',
    description: 'Our paver installation services create stunning outdoor surfaces that combine beauty with durability. Choose from countless colors, patterns, and styles to complement your home.',
    features: [
      'Interlocking pavers',
      'Permeable pavers',
      'Pattern design',
      'Proper base preparation',
      'Polymeric sand finishing',
      'Sealing options'
    ],
    benefits: [
      'Design flexibility',
      'Easy repairs',
      'Weather resistant',
      'Long-lasting beauty'
    ],
    category: 'hardscaping',
    icon: 'Grid3x3',
    heroImage: '/images/services/pavers/Elis-Paver-Patios-2450-Mottman-Rd-SW-Tumwater-98512-Washington-United-States-360-807-4198-paver-installations.jpg',
    images: [
          "/images/services/pavers/Elis-Paver-Patios-2450-Mottman-Rd-SW-Tumwater-98512-Washington-United-States-360-807-4198-paver-installations.jpg",
          "/images/services/pavers/IMG_5541.jpg",
          "/images/services/pavers/Paver-Installation.jpg",
          "/images/services/pavers/PaversTurfRockInstallationBetterLifeLandscapeandDesign.png.webp",
          "/images/services/pavers/blog-post-featured-images-1.png.webp",
          "/images/services/pavers/blue-ridge-landscaping_3471.jpg.webp",
          "/images/services/pavers/building-a-patio-landscaping-network_8897.jpg.webp",
          "/images/services/pavers/front-paver-walkway.webp"
    ]
  },
  {
    slug: 'concrete',
    name: 'Concrete Work',
    shortDescription: 'Durable concrete patios, driveways, and foundations.',
    description: 'Professional concrete services for patios, driveways, walkways, and more. We offer stamped, stained, and decorative concrete options to match any style.',
    features: [
      'Stamped concrete',
      'Stained concrete',
      'Exposed aggregate',
      'Broom finish',
      'Decorative borders',
      'Proper drainage slope'
    ],
    benefits: [
      'Extreme durability',
      'Low maintenance',
      'Custom designs',
      'Cost-effective'
    ],
    category: 'hardscaping',
    icon: 'Square',
    heroImage: '/images/services/concrete/Concrete-Slabs.jpg',
    images: [
          "/images/services/concrete/Concrete-Slabs.jpg",
          "/images/services/concrete/IMG_20181019_142302-2-1-scaled.jpg.webp",
          "/images/services/concrete/concrete-driveway-v0-lw3agm9ukwtc1.jpeg.webp",
          "/images/services/concrete/maxresdefault.jpg",
          "/images/services/concrete/new_driveway_contractor_denver.jpg"
    ]
  },
  {
    slug: 'flagstone',
    name: 'Flagstone Installation',
    shortDescription: 'Natural stone patios and pathways.',
    description: 'Create timeless beauty with natural flagstone installations. Perfect for patios, walkways, and pool areas with an organic, elegant appearance that never goes out of style.',
    features: [
      'Oklahoma flagstone',
      'Arizona flagstone',
      'Pennsylvania bluestone',
      'Dry-laid or mortared',
      'Natural or geometric patterns',
      'Step installation'
    ],
    benefits: [
      'Natural beauty',
      'Unique patterns',
      'Heat resistant',
      'Timeless appeal'
    ],
    category: 'hardscaping',
    icon: 'Pentagon',
    heroImage: '/images/services/flagstone/Artistic-Freeform-Design.jpg.webp',
    images: [
          "/images/services/flagstone/Artistic-Freeform-Design.jpg.webp",
          "/images/services/flagstone/arctic-flagstone-2-400x400.jpg.webp",
          "/images/services/flagstone/back-bay-retreat-jeffrey-gordon-smith-landscape-architecture-imgdc519df60bb67b9f_9-1000-1-95bb770.jpg",
          "/images/services/flagstone/bungalow-jeffrey-gordon-smith-landscape-architecture-img584148530b452138_9-1000-1-183facf.jpg",
          "/images/services/flagstone/casual-walkway-flagstone-sisson-landscapes_4454.jpg.webp",
          "/images/services/flagstone/flagstone-diy.jpg",
          "/images/services/flagstone/path-flagstone.jpg"
    ]
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    shortDescription: 'Functional and beautiful retaining wall solutions.',
    description: 'Our retaining wall services solve grade changes and erosion problems while adding stunning visual appeal to your landscape. We build walls that last for decades using premium materials and expert construction techniques.',
    features: [
      'Segmental block walls',
      'Natural stone walls',
      'Boulder retaining walls',
      'Timber walls',
      'Proper drainage systems',
      'Engineered solutions for tall walls'
    ],
    benefits: [
      'Prevent erosion',
      'Create usable space',
      'Increase property value',
      'Long-lasting durability'
    ],
    category: 'hardscaping',
    icon: 'Layers',
    heroImage: '/images/services/retaining-walls/685eeee1eb2171223828eb77_6805a700ecf98c98940a0a1d_IMG_5921.jpeg',
    images: [
          "/images/services/retaining-walls/685eeee1eb2171223828eb77_6805a700ecf98c98940a0a1d_IMG_5921.jpeg",
          "/images/services/retaining-walls/Elis-Paver-Patios-2450-Mottman-Rd-SW-Tumwater-98512-Washington-United-States-360-807-4198-retaining-walls-1200x675.jpg",
          "/images/services/retaining-walls/Landscape-_-Hardscape-Install-landscape-26082f982738b318f4f451f699996efb-611d32d0a4469.jpg",
          "/images/services/retaining-walls/Milsap-stone-retaining-wall-in-Dallas-Texas-min.jpg",
          "/images/services/retaining-walls/New-retaining-wall-in-Dallas-Texas_Page_1-min.jpg",
          "/images/services/retaining-walls/Replacing-Crossties-with-Milsap-Stone-Retaining-Wall-min.jpg",
          "/images/services/retaining-walls/ennis-texas-retaining-walls.jpg.webp",
          "/images/services/retaining-walls/lawn_plantings_wall.jpg.webp"
    ]
  },
  {
    slug: 'stone-edging',
    name: 'Stone Border & Edging',
    shortDescription: 'Natural stone borders for landscape definition.',
    description: 'Define your landscape with beautiful natural stone borders and edging. Our stone edging adds permanence and elegance to any landscape design.',
    features: [
      'Natural stone selection',
      'Stacked stone borders',
      'Boulder accents',
      'Dry stack or mortared',
      'Color coordination',
      'Custom patterns'
    ],
    benefits: [
      'Permanent solution',
      'Natural appearance',
      'Increases property value',
      'Low maintenance'
    ],
    category: 'hardscaping',
    icon: 'RectangleHorizontal',
    heroImage: '/images/services/flower-bed-edging/190367414_6566607686698643_8881875869959725016_n.jpg',
    images: [
          "/images/services/flower-bed-edging/190367414_6566607686698643_8881875869959725016_n.jpg",
          "/images/services/flower-bed-edging/193348429_6566607900031955_404621650641529488_n.jpg",
          "/images/services/flower-bed-edging/193892377_6566607846698627_4074080007948971492_n.jpg",
          "/images/services/flower-bed-edging/212315446_6745061922186551_8712056112203627763_n.jpg",
          "/images/services/flower-bed-edging/212979273_6745061808853229_1197778121794462377_n.jpg",
          "/images/services/flower-bed-edging/690bccd301bf6b167960d876_stone-edging3.webp",
          "/images/services/flower-bed-edging/chopped-block-stone-landscape-edging-limetone-double-layer-houston-tx-77099.jpeg"
    ]
  },
  {
    slug: 'brick-work',
    name: 'Brick Work',
    shortDescription: 'Classic brick patios, walkways, and borders.',
    description: 'Add timeless elegance with our professional brick work services. From traditional patterns to modern designs, brick creates lasting beauty.',
    features: [
      'Brick patios',
      'Brick walkways',
      'Brick borders',
      'Herringbone patterns',
      'Basket weave designs',
      'Soldier course edging'
    ],
    benefits: [
      'Classic appeal',
      'Durable material',
      'Easy to repair',
      'Increases home value'
    ],
    category: 'hardscaping',
    icon: 'Grid2x2',
    heroImage: '/images/services/brick-work/96d32b16853fe41e161cee39c425b6f3.jpg',
    images: [
          "/images/services/brick-work/96d32b16853fe41e161cee39c425b6f3.jpg",
          "/images/services/brick-work/Alpharetta-Retaining-Wall-Pros-Steps-Stairs-2-landscape.jpg",
          "/images/services/brick-work/Brick-Stone-Wall-2.jpg",
          "/images/services/brick-work/Chiseled-Edge-Treads-Red-Brick-Steps.jpg",
          "/images/services/brick-work/be65fb29418ed748b1d0301a9e52f611.jpg",
          "/images/services/brick-work/low-walls-brick-walls-landscape-aesthetics_4978.jpg",
          "/images/services/brick-work/mm-brick-wall-fronted-by-concrete-paver-walkway.jpg",
          "/images/services/brick-work/terraformafall24-31-1.jpg",
          "/images/services/brick-work/traditional-patio-kandd-landscape-management-img3cf157a80122c9b4_14-4016-1-23396e2.jpg"
    ]
  },
  {
    slug: 'outdoor-masonry',
    name: 'Outdoor Masonry',
    shortDescription: 'Custom stone and brick structures for outdoor living.',
    description: 'Our masonry experts create stunning outdoor structures including kitchens, fireplaces, and sitting walls. Built to last with quality craftsmanship and attention to detail.',
    features: [
      'Outdoor kitchens',
      'Pizza ovens',
      'Seat walls',
      'Columns and pillars',
      'Planters',
      'Mailbox structures'
    ],
    benefits: [
      'Custom designs',
      'Professional craftsmanship',
      'Lifetime durability',
      'Outdoor entertainment'
    ],
    category: 'hardscaping',
    icon: 'Building',
    heroImage: '/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp',
    images: [
          "/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp",
          "/images/services/hardscaping/DSC04265-2048x1152-1.jpg",
          "/images/services/hardscaping/Hardscapes-1024x675.jpg",
          "/images/services/hardscaping/garden-walkway-casa-serena-landscape-designs-llc-closed_2825.jpg.webp",
          "/images/services/hardscaping/hardscape-materials.jpg",
          "/images/services/hardscaping/hardscaping-mobile-img.webp",
          "/images/services/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg",
          "/images/services/hardscaping/tx-landscaping-hardscape.jpg"
    ]
  },
  {
    slug: 'fireplace',
    name: 'Outdoor Fireplaces & Fire Pits',
    shortDescription: 'Custom fire features for year-round enjoyment.',
    description: 'Extend your outdoor living season with a beautiful fireplace or fire pit. We design and build custom fire features that become the heart of your outdoor space.',
    features: [
      'Wood-burning fireplaces',
      'Gas fire pits',
      'Stone construction',
      'Seating integration',
      'Custom designs',
      'Safety features'
    ],
    benefits: [
      'Year-round use',
      'Gathering focal point',
      'Ambiance and warmth',
      'Property value increase'
    ],
    category: 'hardscaping',
    icon: 'Flame',
    heroImage: '/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp',
    images: [
          "/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp",
          "/images/services/hardscaping/DSC04265-2048x1152-1.jpg",
          "/images/services/hardscaping/Hardscapes-1024x675.jpg",
          "/images/services/hardscaping/garden-walkway-casa-serena-landscape-designs-llc-closed_2825.jpg.webp",
          "/images/services/hardscaping/hardscape-materials.jpg",
          "/images/services/hardscaping/hardscaping-mobile-img.webp",
          "/images/services/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg",
          "/images/services/hardscaping/tx-landscaping-hardscape.jpg"
    ]
  },
  {
    slug: 'pergolas',
    name: 'Pergolas & Arbors',
    shortDescription: 'Beautiful shade structures for outdoor living.',
    description: 'Create defined outdoor rooms with custom pergolas and arbors. Our structures provide shade, beauty, and architectural interest to your landscape.',
    features: [
      'Wood pergolas',
      'Aluminum pergolas',
      'Cedar construction',
      'Attached or freestanding',
      'Fan and lighting ready',
      'Custom sizes'
    ],
    benefits: [
      'Shade and comfort',
      'Defined spaces',
      'Vine support',
      'Architectural beauty'
    ],
    category: 'hardscaping',
    icon: 'Home',
    heroImage: '/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp',
    images: [
          "/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp",
          "/images/services/hardscaping/DSC04265-2048x1152-1.jpg",
          "/images/services/hardscaping/Hardscapes-1024x675.jpg",
          "/images/services/hardscaping/garden-walkway-casa-serena-landscape-designs-llc-closed_2825.jpg.webp",
          "/images/services/hardscaping/hardscape-materials.jpg",
          "/images/services/hardscaping/hardscaping-mobile-img.webp",
          "/images/services/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg",
          "/images/services/hardscaping/tx-landscaping-hardscape.jpg"
    ]
  },
  {
    slug: 'fencing',
    name: 'Fencing',
    shortDescription: 'Quality fence installation for privacy and security.',
    description: 'Protect your property and enhance your landscape with professional fence installation. We offer various styles to match your home and meet your needs.',
    features: [
      'Wood privacy fencing',
      'Cedar fencing',
      'Iron fencing',
      'Chain link',
      'Gate installation',
      'Custom designs'
    ],
    benefits: [
      'Privacy and security',
      'Property boundary definition',
      'Pet and child safety',
      'Wind protection'
    ],
    category: 'hardscaping',
    icon: 'Fence',
    heroImage: '/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp',
    images: [
          "/images/services/hardscaping/Backyard-Hardscape-Idea-With-Outdoor-Kitchen.webp",
          "/images/services/hardscaping/DSC04265-2048x1152-1.jpg",
          "/images/services/hardscaping/Hardscapes-1024x675.jpg",
          "/images/services/hardscaping/garden-walkway-casa-serena-landscape-designs-llc-closed_2825.jpg.webp",
          "/images/services/hardscaping/hardscape-materials.jpg",
          "/images/services/hardscaping/hardscaping-mobile-img.webp",
          "/images/services/hardscaping/hardscaping-services-in-colleyville-tx-scaled.jpg",
          "/images/services/hardscaping/tx-landscaping-hardscape.jpg"
    ]
  },

  // SPECIALTY SERVICES
  {
    slug: 'irrigation',
    name: 'Irrigation Systems',
    shortDescription: 'Smart irrigation design, installation, and repair.',
    description: 'Keep your landscape healthy with efficient irrigation systems. We design, install, and maintain sprinkler systems that save water while keeping your lawn lush and green.',
    features: [
      'Smart controller installation',
      'Drip irrigation',
      'Sprinkler systems',
      'Rain sensors',
      'Zone optimization',
      'Seasonal adjustments'
    ],
    benefits: [
      'Water conservation',
      'Consistent coverage',
      'Automated convenience',
      'Healthier plants'
    ],
    category: 'specialty',
    icon: 'Droplets',
    heroImage: '/images/services/irrigation/23488.jpg',
    images: [
          "/images/services/irrigation/23488.jpg",
          "/images/services/irrigation/70818404_10214807352847427_4286676772168138752_n.jpg",
          "/images/services/irrigation/71741710_10214807352607421_6156016096106250240_n.jpg",
          "/images/services/irrigation/75429332_10214807353367440_5289581399907500032_n.jpg",
          "/images/services/irrigation/Fort-Lee-NJ-Sprinkler-Companies-scaled-portrait-1f3c01008ba19841ebc8ce38276d22bc-95yqwh6d4b12.jpeg",
          "/images/services/irrigation/ep49-irrigation-john-working-650x867-1.jpg.webp",
          "/images/services/irrigation/images.jpeg",
          "/images/services/irrigation/irrigation-installation-5.webp"
    ]
  },
  {
    slug: 'drainage',
    name: 'Drainage Solutions',
    shortDescription: 'Solve water problems with proper drainage.',
    description: 'Protect your property from water damage with our drainage solutions. We address standing water, erosion, and foundation concerns with effective drainage systems.',
    features: [
      'French drains',
      'Channel drains',
      'Catch basins',
      'Sump pumps',
      'Grading and sloping',
      'Dry creek beds'
    ],
    benefits: [
      'Prevent flooding',
      'Protect foundation',
      'Eliminate mosquitoes',
      'Preserve landscape'
    ],
    category: 'specialty',
    icon: 'ArrowDownToLine',
    heroImage: '/images/services/drainage/1.jpg',
    images: [
          "/images/services/drainage/1.jpg",
          "/images/services/drainage/801554c2-ad74-4003-aee6-c273cbbd195b1722446523394804655510.jpg.webp",
          "/images/services/drainage/ccpic.jpg",
          "/images/services/drainage/drainage-solutions.jpg.webp",
          "/images/services/drainage/french-drain-abbotsford-768x576-1.jpg",
          "/images/services/drainage/french-drain-houston-tx-77005.jpeg",
          "/images/services/drainage/surface-drain-1484x989.jpg",
          "/images/services/drainage/syq5ra5ul15d1.jpeg",
          "/images/services/drainage/taking-drainage-solutions-after-i-installed-a-french-drain-v0-qmgoahamtdqb1.jpg"
    ]
  },
  {
    slug: 'french-drain',
    name: 'French Drain Installation',
    shortDescription: 'Professional French drain systems for water management.',
    description: 'Our French drain installations effectively redirect water away from problem areas. Protect your home\'s foundation and eliminate standing water with our expert solutions.',
    features: [
      'Proper trench depth',
      'Quality gravel',
      'Perforated pipe',
      'Landscape fabric',
      'Outlet solutions',
      'Foundation protection'
    ],
    benefits: [
      'Foundation protection',
      'Yard drainage',
      'Reduced erosion',
      'Lasting solution'
    ],
    category: 'specialty',
    icon: 'TrendingDown',
    heroImage: '/images/services/french-drain/320.jpeg',
    images: [
          "/images/services/french-drain/320.jpeg",
          "/images/services/french-drain/65a9564e875d257363b8948f_subsurface_french_drain.jpg",
          "/images/services/french-drain/6f21575d-dd45-4776-b677-bcd811d51914-576x1024.jpg",
          "/images/services/french-drain/french-drain-houston-tx-77005.jpeg",
          "/images/services/french-drain/french-drain-trench-ditch-houston-tx.jpeg",
          "/images/services/french-drain/unnamed.jpg"
    ]
  },
  {
    slug: 'outdoor-lighting',
    name: 'Outdoor Lighting',
    shortDescription: 'Professional landscape lighting design and installation.',
    description: 'Illuminate your landscape with professional outdoor lighting. We create stunning nighttime landscapes while improving safety and security around your property.',
    features: [
      'LED lighting',
      'Path lights',
      'Uplighting',
      'Downlighting',
      'Accent lighting',
      'Smart controls'
    ],
    benefits: [
      'Extended enjoyment',
      'Safety and security',
      'Dramatic effects',
      'Energy efficient'
    ],
    category: 'specialty',
    icon: 'Lightbulb',
    heroImage: '/images/services/outdoor-lighting/10710_Meadow_Stable_-_FB-2-min-mobile.jpg.webp',
    images: [
          "/images/services/outdoor-lighting/10710_Meadow_Stable_-_FB-2-min-mobile.jpg.webp",
          "/images/services/outdoor-lighting/1108-Westhaven-Drive-Burlington-3-Original.jpg.webp",
          "/images/services/outdoor-lighting/2021_Swoish_Orange_JE_-34-scaled.jpg",
          "/images/services/outdoor-lighting/95-Old-Ruby-Lane-Puslinch-5-Original-copy-2-1200x801.jpg.webp",
          "/images/services/outdoor-lighting/Featured-Image-Chesterton-IN-Outdoor-Lighting-Company.jpg",
          "/images/services/outdoor-lighting/NSLA2B252816002B25C325972B9002Bpx2529.jpg.webp",
          "/images/services/outdoor-lighting/Smart_Full_Color_Lighting-min_1600x.jpg.webp"
    ]
  },
  {
    slug: 'weed-barrier',
    name: 'Weed Barrier Installation',
    shortDescription: 'Professional weed prevention for low-maintenance landscapes.',
    description: 'Reduce maintenance and keep weeds at bay with professional weed barrier installation. We use quality materials for long-lasting protection.',
    features: [
      'Commercial-grade fabric',
      'Proper installation',
      'Seam overlapping',
      'Securing methods',
      'Integration with mulch/rock',
      'Planting cutouts'
    ],
    benefits: [
      'Reduced weeding',
      'Moisture retention',
      'Cleaner appearance',
      'Long-lasting protection'
    ],
    category: 'specialty',
    icon: 'ShieldCheck',
    heroImage: '/images/services/weed-barrier/30r1piqmhc55sthim5rtzzht09f4.jpeg',
    images: [
          "/images/services/weed-barrier/30r1piqmhc55sthim5rtzzht09f4.jpeg",
          "/images/services/weed-barrier/ultra-thick-plastic-weed-barrier_x700.jpg",
          "/images/services/weed-barrier/wove-fabric-use.jpg.webp"
    ]
  },
  {
    slug: 'gutter-drainage',
    name: 'Gutter & Downspout Drainage',
    shortDescription: 'Proper gutter drainage to protect your foundation.',
    description: 'Redirect gutter water away from your foundation with professional downspout drainage solutions. Prevent erosion and foundation damage.',
    features: [
      'Underground drainage',
      'Pop-up emitters',
      'Downspout extensions',
      'Splash blocks',
      'French drain connection',
      'Rain garden direction'
    ],
    benefits: [
      'Foundation protection',
      'Erosion prevention',
      'Clean appearance',
      'Peace of mind'
    ],
    category: 'specialty',
    icon: 'CloudRain',
    heroImage: '/images/services/gutter-drainage/Landscape-Drainage-North-Dallas-University-Park-03-768x1024.jpg',
    images: [
          "/images/services/gutter-drainage/Landscape-Drainage-North-Dallas-University-Park-03-768x1024.jpg",
          "/images/services/gutter-drainage/french-drain-installation-bastrop-county-texas-french-drain-installation-company-09102024-11.jpg",
          "/images/services/gutter-drainage/images-1.jpeg",
          "/images/services/gutter-drainage/images.jpeg",
          "/images/services/gutter-drainage/landscape-drainage-about-1.jpg",
          "/images/services/gutter-drainage/storm-drainage-drain-pipe-installing-into-trench-drain-with-for-draining-a-rainwater-1024x683.jpg.webp"
    ]
  },
  {
    slug: 'custom-design',
    name: 'Custom Design & Build',
    shortDescription: 'Complete custom outdoor living solutions.',
    description: 'Bring your dream outdoor space to life with our custom design and build services. From concept to completion, we handle every detail.',
    features: [
      'Full design services',
      'Project management',
      'Quality materials',
      'Skilled craftsmen',
      'Warranty included',
      'Financing available'
    ],
    benefits: [
      'Turnkey solution',
      'Single point of contact',
      'Cohesive design',
      'Dream outdoor space'
    ],
    category: 'specialty',
    icon: 'Ruler',
    heroImage: '/images/services/landscape-design/20211005_095835.jpg.webp',
    images: [
          "/images/services/landscape-design/20211005_095835.jpg.webp",
          "/images/services/landscape-design/Cost-of-Landscape-Design-in-Front-Yard.jpg",
          "/images/services/landscape-design/DSC_1803-landscape-2038969fa6c2d9b279503decfcc00863-6052660cd835c.jpg",
          "/images/services/landscape-design/Frisco-Landscape-Design.jpg",
          "/images/services/landscape-design/How-Much-is-Landscape-Design-in-TX.jpg",
          "/images/services/landscape-design/about.png",
          "/images/services/landscape-design/dallas-texas-sustainable-landscaping-services-scaled.jpg",
          "/images/services/landscape-design/landscape1.jpg"
    ]
  },

  // MAINTENANCE SERVICES
  {
    slug: 'leaf-cleanup',
    name: 'Leaf Cleanup',
    shortDescription: 'Seasonal leaf removal for a clean landscape.',
    description: 'Keep your property looking its best with our professional leaf cleanup services. We thoroughly remove leaves and debris from lawns, beds, and hardscapes.',
    features: [
      'Complete leaf removal',
      'Bed cleaning',
      'Gutter cleaning',
      'Hauling included',
      'Fall and spring services',
      'Weekly programs available'
    ],
    benefits: [
      'Lawn health protection',
      'Clean appearance',
      'Pest prevention',
      'Time savings'
    ],
    category: 'maintenance',
    icon: 'Wind',
    heroImage: '/images/services/leaf-cleanup/63f65340edebe87dc7948061_P2.jpg',
    images: [
          "/images/services/leaf-cleanup/63f65340edebe87dc7948061_P2.jpg",
          "/images/services/leaf-cleanup/Fall-Leaf-Cleanup-Cincinnati-Northern-Kentucky.jpg",
          "/images/services/leaf-cleanup/euless-mowing-guys-grass-cleanup.jpg",
          "/images/services/leaf-cleanup/hq720.jpg",
          "/images/services/leaf-cleanup/leaf-removal-Carrollton-GA.jpg.webp"
    ]
  },
  {
    slug: 'landscape-cleanup',
    name: 'Landscape Cleanups',
    shortDescription: 'Complete landscape renovation and cleanup services.',
    description: 'Restore your landscape to its full potential with our comprehensive cleanup services. We tackle overgrown beds, dead plants, and general landscape neglect.',
    features: [
      'Overgrown bed restoration',
      'Dead plant removal',
      'Pruning and trimming',
      'Debris removal',
      'Mulch refresh',
      'Edge restoration'
    ],
    benefits: [
      'Instant transformation',
      'Fresh start',
      'Property value',
      'Easier maintenance'
    ],
    category: 'maintenance',
    icon: 'Sparkles',
    heroImage: '/images/services/landscape-cleanup/DSC_1803-landscape-2038969fa6c2d9b279503decfcc00863-6052660cd835c.jpg',
    images: [
          "/images/services/landscape-cleanup/DSC_1803-landscape-2038969fa6c2d9b279503decfcc00863-6052660cd835c.jpg",
          "/images/services/landscape-cleanup/Untitled-1-1920w.webp",
          "/images/services/landscape-cleanup/crew_pulling_weeds_landscape_beds_green_lawn_.jpg.webp",
          "/images/services/landscape-cleanup/landscape-cleanup-services-in-colleyville-1024x683.jpg",
          "/images/services/landscape-cleanup/mt-prospect-front-yard-bed-cleanup-landscape-design-installation.jpg",
          "/images/services/landscape-cleanup/residential-landscape-designers-fulshear-tx-scaled.jpg.webp"
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map(service => service.slug);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
};

export const getFeaturedServices = (limit: number = 8): Service[] => {
  return services.slice(0, limit);
};



