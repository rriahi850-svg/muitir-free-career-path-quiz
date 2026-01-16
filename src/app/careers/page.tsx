// app/careers/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Briefcase, Stethoscope, Cpu, Palette, Building, GraduationCap, Wrench, DollarSign, Microscope, Music, Car, Plane, Scale, Leaf, Users, Zap, Home, Truck, Gamepad2 } from 'lucide-react';
// app/careers/page.tsx - Add metadata at the TOP of the file
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '120+ Future-Focused Careers | Career Code Finder',
  description: 'Browse our database of 120+ carefully selected careers with growth potential, automation resistance analysis, and personality alignment. Find your perfect career match.',
  keywords: ['careers', 'jobs', 'career database', 'future careers', 'growth careers', 'automation-proof jobs', 'career matching', 'personality careers'],
  openGraph: {
    title: '110+ Future-Focused Careers Database',
    description: 'Discover careers selected for growth, impact, and future relevance',
    type: 'website',
  },
  alternates: {
    canonical: 'https://studio-136847540-ec6d3.web.app/careers',
  },
};
export default function CareersPage() {
  const careerCategories = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Medical & Healthcare",
      description: "High-impact careers saving lives and improving health outcomes",
      careers: [
        {
          name: "Orthodontist",
          description: "Selected for combining medical expertise with artistic precision in smile design. Orthodontists enjoy exceptional earning potential, strong job security, and the profound satisfaction of transforming patients' confidence through dental alignment. The field offers excellent work-life balance with predictable hours compared to other medical specialties."
        },
        {
          name: "Radiation Therapist",
          description: "Chosen as a specialized healthcare role with direct cancer treatment impact. Radiation therapists operate advanced technology to target tumors while minimizing damage to healthy tissue. The career offers meaningful patient relationships, strong demand due to rising cancer rates, and opportunities to work with cutting-edge medical technology."
        },
        {
          name: "Physician Assistant",
          description: "Featured for optimal balance of medical responsibility and lifestyle flexibility. PAs perform many physician duties with less educational debt and more flexible schedules. With growing healthcare needs and physician shortages, this career offers exceptional job security across multiple specialties and settings."
        },
        {
          name: "Pharmacist",
          description: "Selected for blending healthcare expertise with business acumen. Pharmacists are medication experts working in hospitals, research, and community settings. The aging population ensures steady demand, while evolving roles in immunization, clinical services, and medication therapy management keep the field dynamic and expanding."
        },
        {
          name: "Anesthesiologist",
          description: "Chosen as the highest-earning medical specialty with critical perioperative responsibility. Anesthesiologists manage patient pain and vital functions during surgery, requiring exceptional knowledge of physiology and pharmacology. The field offers intense intellectual challenge, direct patient impact, and premium compensation for managing surgical risks."
        },
        {
          name: "Dentist",
          description: "Featured for entrepreneurial opportunities within healthcare. Dentists can own practices, enjoy predictable hours, and build long-term patient relationships. The career combines technical skill with artistic ability in oral health restoration, offering both financial reward and community health impact."
        },
        {
          name: "General Practitioner",
          description: "Selected as the foundation of primary care with enduring importance. GPs develop deep patient relationships across lifetimes, providing comprehensive care and coordination. Despite healthcare changes, the human need for trusted primary physicians remains constant, offering stable demand and community respect."
        },
        {
          name: "Surgeon",
          description: "Included as the pinnacle of medical specialization with immediate life-saving impact. Surgeons combine diagnostic insight with technical mastery to directly alter health outcomes. While demanding, it offers unparalleled prestige, intellectual challenge, and the profound reward of tangible surgical results."
        },
        {
          name: "Speech-Language Pathologist",
          description: "Chosen for its unique blend of healthcare, education, and communication science. SLPs help patients overcome speech, language, and swallowing disorders across all ages. The field offers diverse settings (schools, hospitals, private practice), strong growth from aging populations, and deep satisfaction from restoring communication abilities."
        },
        {
          name: "Physical Therapist",
          description: "Selected for hands-on rehabilitation with measurable patient progress. PTs help patients recover mobility and function through targeted exercises and manual therapy. The career combines scientific knowledge with interpersonal skills, offers excellent job growth, and provides the satisfaction of seeing tangible recovery milestones."
        },
        {
          name: "Occupational Therapist",
          description: "Featured for helping patients regain life skills and independence. OTs focus on enabling daily activities from self-care to work tasks. The field offers creativity in adaptive solutions, strong demand in aging and pediatric populations, and meaningful impact on quality of life beyond basic mobility."
        },
        {
          name: "Registered Dietitian",
          description: "Chosen for preventive healthcare through nutritional science. RDs translate complex nutrition research into practical eating plans for health conditions and wellness. With rising chronic diseases and preventive care focus, this career offers growing demand in hospitals, sports, corporate wellness, and private practice."
        },
        {
          name: "Paramedic",
          description: "Selected for high-adrenaline emergency medicine outside hospital walls. Paramedics make critical decisions under pressure during medical crises. The career offers rapid skill development, community hero status, and serves as excellent preparation for further medical education with unparalleled emergency experience."
        },
        {
          name: "Emergency Room Doctor",
          description: "Featured for frontline emergency medicine with constant variety and challenge. ER physicians diagnose and stabilize diverse urgent conditions, requiring broad medical knowledge and calm under pressure. The field offers shift-work flexibility, avoidance of long-term patient management, and the excitement of never knowing what will come through the doors."
        },
        {
          name: "Medical Scientist",
          description: "Chosen for advancing medical knowledge through research and discovery. Medical scientists conduct studies to understand diseases and develop treatments. The career offers intellectual freedom, contribution to medical progress, and opportunities in academia, pharmaceuticals, and government research institutions."
        },
        {
          name: "Genetic Counselor",
          description: "Selected as a growing specialty at the intersection of genetics and patient care. Genetic counselors interpret DNA test results and explain hereditary risks to families. The field combines cutting-edge science with compassionate communication, offering strong growth as genetic testing becomes mainstream in personalized medicine."
        },
        {
          name: "Biomedical Engineer",
          description: "Featured for engineering medical solutions from prosthetics to imaging systems. Biomedical engineers bridge technology and healthcare, designing devices that improve diagnosis and treatment. The career offers innovation opportunities, strong industry growth, and satisfaction from creating products that directly enhance patient care."
        },
        {
          name: "Geriatric Care Manager",
          description: "Chosen for specialization in aging population services. Geriatric managers coordinate care for elderly clients, navigating healthcare systems and family dynamics. With global population aging, this career offers strong demand growth, entrepreneurial opportunities, and meaningful support during life transitions."
        },
        {
          name: "Psychiatrist",
          description: "Selected as the medical leader in mental health treatment. Psychiatrists combine therapy with medication management for comprehensive mental healthcare. The field addresses growing mental health awareness, offers diverse practice models, and provides profound satisfaction from guiding patients through recovery journeys."
        },
        {
          name: "Psychologist",
          description: "Featured for deep understanding of human behavior and therapeutic intervention. Psychologists provide talk therapy, assessment, and behavioral change strategies without medication prescription. The career offers private practice autonomy, research opportunities, and the reward of facilitating meaningful personal growth and healing."
        }
      ]
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Technology & Engineering",
      description: "Future-proof careers building digital and physical infrastructure",
      careers: [
        {
          name: "Software Architect",
          description: "Selected as the strategic leader in technology development. Software architects design system blueprints that scale, choosing technologies and patterns for long-term success. The role commands premium salaries while avoiding constant coding churn, offering increasing importance as digital transformation accelerates across industries."
        },
        {
          name: "Data Scientist",
          description: "Chosen as the 'sexiest job of the 21st century' for transforming data into billion-dollar insights. Data scientists blend statistics, programming, and business acumen to uncover patterns and predict trends. The field offers exceptional growth as organizations become data-driven, with applications from marketing to scientific research."
        },
        {
          name: "Machine Learning Engineer",
          description: "Featured for building intelligent systems that learn and adapt autonomously. ML engineers implement algorithms that power recommendations, predictions, and automation. This cutting-edge field offers premium compensation, continuous learning opportunities, and the excitement of working on AI that transforms industries."
        },
        {
          name: "Cybersecurity Analyst",
          description: "Selected for critical protection in our increasingly digital world. Cybersecurity professionals defend systems against evolving threats, requiring constant learning and strategic thinking. The field offers near-zero unemployment, competitive salaries, and the intellectual challenge of outsmarting adversaries in high-stakes digital warfare."
        },
        {
          name: "Cloud Architect",
          description: "Chosen for designing scalable infrastructure in the cloud computing revolution. Cloud architects migrate and optimize systems on platforms like AWS and Azure. With most companies moving to cloud, this specialization offers strong demand, premium rates, and opportunities to work with cutting-edge distributed technologies."
        },
        {
          name: "Robotics Technician",
          description: "Featured as a hands-on future-proof career at the automation forefront. Robotics technicians maintain and program robots transforming manufacturing, logistics, and healthcare. The career combines mechanical, electrical, and software skills with excellent pay growth as automation expands across industries."
        },
        {
          name: "Blockchain Developer",
          description: "Selected for building decentralized applications beyond cryptocurrency. Blockchain developers create secure, transparent systems for finance, supply chain, and digital identity. This emerging field offers early-adopter advantages, premium compensation, and opportunities to shape foundational web3 infrastructure."
        },
        {
          name: "IoT Specialist",
          description: "Chosen for connecting physical devices to the internet ecosystem. IoT specialists design systems where sensors, appliances, and machines communicate data. The field offers growth as smart homes, cities, and industries expand, blending hardware and software skills in an interconnected world."
        },
        {
          name: "3D Printing Specialist",
          description: "Featured for additive manufacturing innovation across industries. 3D printing specialists create prototypes, custom parts, and even biological tissues using layer-by-layer fabrication. This disruptive technology offers opportunities in manufacturing, healthcare, aerospace, and creative design with rapid skill evolution."
        },
        {
          name: "Web Developer",
          description: "Selected as the foundation of digital presence with constant demand. Web developers build and maintain websites and applications that businesses need to operate online. The field offers diverse specializations (front-end, back-end, full-stack), remote work flexibility, and continuous learning with evolving technologies."
        },
        {
          name: "Video Game Designer",
          description: "Chosen for blending creativity with technology in interactive entertainment. Game designers craft player experiences, mechanics, and narratives for diverse gaming platforms. The field offers creative fulfillment, strong industry growth, and opportunities to work on everything from indie projects to AAA titles with global reach."
        },
        {
          name: "Smart City Planner",
          description: "Featured for integrating technology into urban infrastructure and services. Smart city planners design connected transportation, energy, and public service systems using data and IoT. This emerging field offers opportunities to shape sustainable urban futures as cities worldwide invest in digital transformation."
        },
        {
          name: "Data Center Technician",
          description: "Selected for maintaining critical internet infrastructure that powers digital life. Data center technicians ensure servers, networks, and cooling systems operate 24/7. The career offers technical depth, essential industry role, and strong demand growth as cloud computing and streaming services expand globally."
        },
        {
          name: "Civil Engineer",
          description: "Chosen for designing physical infrastructure that shapes communities for decades. Civil engineers plan roads, bridges, water systems, and buildings with safety and sustainability. The field offers tangible project completion satisfaction, essential public service role, and opportunities in both public and private sectors."
        },
        {
          name: "Mechanical Engineer",
          description: "Featured for designing mechanical systems and devices across all industries. Mechanical engineers create everything from tiny medical devices to massive power plants, applying physics and materials science. The career offers diverse applications, strong fundamentals transferable across sectors, and opportunities in innovation and manufacturing."
        },
        {
          name: "Electrical Engineer",
          description: "Selected for working with electrical systems from microchips to power grids. Electrical engineers design circuits, control systems, and power distribution essential to modern life. The field offers specialization in growing areas like renewable energy, electric vehicles, and embedded systems with strong industry demand."
        },
        {
          name: "Chemical Engineer",
          description: "Chosen for transforming raw materials into valuable products through chemical processes. Chemical engineers design factories for pharmaceuticals, fuels, plastics, and foods. The career offers high earning potential, opportunities in sustainability and biotechnology, and application across diverse manufacturing sectors."
        },
        {
          name: "Petroleum Engineer",
          description: "Featured for maximizing energy extraction while transitioning to sustainable practices. Petroleum engineers design methods to safely extract oil and gas, with skills transferable to geothermal and carbon capture. The field offers premium compensation, global opportunities, and evolving roles in energy transition technologies."
        },
        {
          name: "Biomedical Engineer",
          description: "Selected again for its dual listing due to technology/healthcare overlap. Biomedical engineers create medical devices, imaging systems, and tissue engineering solutions. The career offers innovation at the life sciences interface, strong industry growth, and satisfaction from developing technology that directly improves healthcare outcomes."
        },
        {
          name: "Wind Turbine Technician",
          description: "Chosen as a hands-on green energy career with strong growth prospects. Wind techs maintain and repair turbines that generate renewable electricity. The field offers good pay with minimal formal education, outdoor work, and alignment with global transition to sustainable energy infrastructure development."
        }
      ]
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Business & Finance",
      description: "Strategic careers driving economic growth and organizational success",
      careers: [
        {
          name: "Investment Banker",
          description: "Selected as the pinnacle of finance for deal execution and strategic advisory. Investment bankers orchestrate mergers, acquisitions, and capital raising for corporations and governments. The career offers unparalleled financial training, premium compensation, and serves as a gateway to private equity, venture capital, and corporate leadership roles."
        },
        {
          name: "Chief Executive Officer",
          description: "Chosen as the ultimate leadership position with full organizational accountability. CEOs set vision, make strategic decisions, and drive company performance. While reaching this level requires exceptional career progression, it offers maximum compensation, decision-making authority, and opportunity to shape industries and cultures."
        },
        {
          name: "Management Consultant",
          description: "Featured for solving diverse business problems across industries and functions. Consultants analyze organizations and recommend improvements in strategy, operations, and organization. The career offers rapid skill development, exposure to executive thinking, and serves as a springboard to leadership positions in multiple sectors."
        },
        {
          name: "Financial Manager",
          description: "Selected for overseeing organizational financial health and strategic planning. Financial managers direct investment activities, develop long-term goals, and prepare financial reports. The career offers stability, strong demand across all industries, and progression to CFO roles with significant influence on business decisions."
        },
        {
          name: "Actuary",
          description: "Chosen for applying mathematics to assess risk in insurance and finance. Actuaries analyze statistical data to calculate probabilities of events and their financial consequences. The field offers exceptional job security, high salaries with relatively low stress, and structured professional certification progression."
        },
        {
          name: "Human Resources Manager",
          description: "Featured for shaping organizational culture and talent strategy. HR managers recruit, develop, and retain employees while ensuring compliance and positive work environments. The career offers people-focused leadership, growing strategic importance in talent-driven economies, and opportunities across all industries."
        },
        {
          name: "Real Estate Developer",
          description: "Selected for creating physical assets that transform communities and generate wealth. Developers coordinate land acquisition, financing, design, and construction of residential and commercial properties. The career offers entrepreneurial satisfaction, tangible project completion, and opportunities in urban revitalization and sustainable development."
        },
        {
          name: "Supply Chain Manager",
          description: "Chosen for optimizing product flow from raw materials to end consumers. Supply chain managers coordinate procurement, logistics, inventory, and distribution globally. The field offers growing importance post-pandemic, application across all physical goods industries, and opportunities to drive efficiency and sustainability."
        },
        {
          name: "Stock Trader",
          description: "Featured for capital markets participation with potential for significant returns. Traders buy and sell securities, analyzing markets and executing strategies. The career offers performance-based compensation, fast-paced environment, and opportunities in proprietary trading, hedge funds, and investment firms."
        },
        {
          name: "High-Frequency Trader",
          description: "Selected for algorithmic trading at microsecond speeds using quantitative models. HFTs develop systems to execute thousands of trades daily based on market microstructure. The field offers exceptional compensation for quantitative talent, cutting-edge technology application, and intellectual challenge in highly competitive markets."
        },
        {
          name: "Insurance Sales Agent",
          description: "Chosen for helping clients manage risk while building entrepreneurial sales careers. Insurance agents assess needs and sell policies for life, health, property, and casualty coverage. The career offers commission-based earning potential, client relationship building, and opportunities to own agencies or specialize in complex risk solutions."
        },
        {
          name: "Digital Marketing Manager",
          description: "Featured for driving business growth through online channels and data analytics. Digital marketers manage SEO, social media, email campaigns, and advertising to reach target audiences. The field offers creativity with measurable results, strong demand as commerce shifts online, and opportunities to work across industries."
        },
        {
          name: "Accountant",
          description: "Selected as the financial information foundation for all organizations. Accountants prepare financial statements, ensure compliance, and analyze costs and revenues. The career offers stability, diverse industry options, clear certification path (CPA), and progression to financial leadership positions."
        },
        {
          name: "Auditor",
          description: "Chosen for ensuring financial accuracy and compliance through systematic examination. Auditors review financial records and internal controls to verify proper reporting and identify risks. The field offers structured career progression in public accounting firms, opportunities for specialization, and essential role in financial transparency."
        },
        {
          name: "Recruiter",
          description: "Featured for connecting talent with opportunity in the human capital marketplace. Recruiters match candidates with jobs, developing expertise in specific industries or functions. The career offers relationship-building satisfaction, performance-based compensation, and growing importance in competitive talent markets."
        },
        {
          name: "Cryptocurrency Trader",
          description: "Selected for participating in emerging digital asset markets with 24/7 global trading. Crypto traders analyze blockchain projects, market trends, and technical indicators in volatile markets. The field offers frontier market opportunities, self-directed career paths, and potential for significant returns during adoption phases."
        },
        {
          name: "Personal Financial Advisor",
          description: "Chosen for helping individuals achieve financial goals through planning and investment. Financial advisors analyze client situations and recommend strategies for retirement, education, and wealth management. The career offers entrepreneurial freedom, client relationship depth, and growing demand as populations age and wealth transfers occur."
        },
        {
          name: "Sales Director",
          description: "Featured for revenue leadership and team management in competitive markets. Sales directors develop strategies, coach teams, and drive business growth through client relationships. The career offers performance-based compensation, leadership development, and critical role in organizational success across all industries."
        },
        {
          name: "E-commerce Strategist",
          description: "Selected for driving online retail growth through platform optimization and digital experience. E-commerce strategists analyze customer journeys, conversion metrics, and omnichannel integration. The field offers growing importance as retail shifts online, blending marketing, technology, and data analytics skills."
        },
        {
          name: "Innovation Manager",
          description: "Chosen for fostering creativity and new product development within organizations. Innovation managers design processes, facilitate ideation, and shepherd concepts from idea to implementation. The career offers creative problem-solving, cross-functional collaboration, and growing importance in competitive, fast-changing markets."
        },
        {
          name: "Quantitative Analyst",
          description: "Featured for applying advanced mathematics to financial modeling and decision-making. Quants develop algorithms for pricing derivatives, risk management, and trading strategies. The field offers premium compensation for mathematical talent, intellectual challenge, and opportunities in finance, tech, and research."
        }
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative & Design",
      description: "Innovative careers expressing ideas and shaping visual experiences",
      careers: [
        {
          name: "Architect",
          description: "Selected for blending artistic vision with practical engineering in physical space creation. Architects design buildings that shape communities, balancing aesthetics, function, and sustainability. The career offers creative fulfillment, tangible legacy in built environment, and opportunities across residential, commercial, and public projects."
        },
        {
          name: "UX/UI Designer",
          description: "Chosen as the bridge between technology and human psychology in digital experiences. UX/UI designers research user needs and create interfaces that are intuitive, accessible, and delightful. The field offers strong demand as all companies become digital, blending creativity with analytical thinking and user empathy."
        },
        {
          name: "Art Director",
          description: "Featured for visual leadership across media from advertising to publishing. Art directors establish visual style, guide creative teams, and ensure brand consistency. The career offers creative authority, diverse project types, and opportunities to shape visual culture in agencies, corporations, and media companies."
        },
        {
          name: "Industrial Designer",
          description: "Selected for creating physical products that balance form, function, and manufacturability. Industrial designers develop everything from consumer electronics to furniture, considering user experience and production constraints. The field offers tangible creation satisfaction, opportunities in sustainable design, and application across industries."
        },
        {
          name: "Film/Video Editor",
          description: "Chosen for storytelling through visual sequencing and pacing in moving images. Editors assemble footage, add effects, and create narrative flow for films, shows, and online content. The career offers creative collaboration, technical skill application, and growing opportunities in streaming content and digital media."
        },
        {
          name: "Animator",
          description: "Featured for bringing characters and stories to life through motion graphics. Animators create movement in 2D, 3D, or stop-motion for entertainment, advertising, and education. The field offers creative expression, strong industry growth in gaming and streaming, and opportunities from feature films to explainer videos."
        },
        {
          name: "Photographer",
          description: "Selected for capturing moments and creating visual narratives through lens and light. Photographers specialize in portraits, commercial, journalism, or artistic work, developing unique visual styles. The career offers creative freedom, entrepreneurial opportunities, and timeless skill application across changing technologies."
        },
        {
          name: "Fashion Designer",
          description: "Chosen for expressing culture and identity through clothing and accessory creation. Fashion designers research trends, sketch concepts, and develop collections for markets from haute couture to mass retail. The field offers creative entrepreneurship, global industry participation, and opportunities in sustainable fashion innovation."
        },
        {
          name: "Musician",
          description: "Featured for emotional expression and cultural contribution through sound creation. Musicians compose, perform, and record music across genres and platforms. The career offers artistic fulfillment, diverse revenue streams from live performance to streaming, and opportunities in education, therapy, and media composition."
        },
        {
          name: "Writer/Author",
          description: "Selected for communication mastery and storytelling across formats from books to screenplays. Writers craft narratives, arguments, and information for audiences through words. The career offers creative autonomy, timeless skill relevance, and opportunities in traditional publishing, digital media, and content marketing."
        },
        {
          name: "Actor",
          description: "Chosen for embodying characters and telling stories through performance. Actors interpret scripts for stage, screen, and voice work, developing emotional range and technical skill. The field offers creative expression, potential for cultural impact, and opportunities expanding with streaming content and global media distribution."
        },
        {
          name: "Broadcast News Analyst",
          description: "Featured for informing public discourse through media presentation and analysis. News analysts research, write, and deliver news content across television, radio, and digital platforms. The career offers intellectual engagement, public influence, and evolving opportunities in podcasting and digital journalism formats."
        },
        {
          name: "Interior Designer",
          description: "Selected for creating functional and aesthetic indoor environments that enhance living and working. Interior designers plan spaces, select materials, and coordinate furnishings for residential and commercial clients. The field offers creative problem-solving, client collaboration satisfaction, and growing interest in wellness-focused design."
        },
        {
          name: "Fine Artist/Sculptor",
          description: "Chosen for pure creative expression and cultural contribution through visual art. Fine artists develop personal vision through painting, sculpture, installation, or new media. The career offers maximum creative freedom, potential for cultural legacy, and opportunities in galleries, commissions, and public art projects."
        },
        {
          name: "Creative Director",
          description: "Featured as the strategic leader overseeing creative vision and execution across media. Creative directors guide brand identity, campaign concepts, and artistic teams in agencies and companies. The career offers creative leadership, significant influence on brand perception, and satisfaction from guiding teams to compelling work."
        },
        {
          name: "Streamer / Content Creator",
          description: "Selected for building audiences and communities through live video and online personality. Streamers entertain, educate, or connect with viewers on platforms like Twitch and YouTube. The field offers entrepreneurial content creation, direct audience relationships, and monetization through subscriptions, sponsorships, and merchandise."
        },
        {
          name: "Stand-up Comedian",
          description: "Chosen for social commentary and entertainment through live performance and timing mastery. Comedians write and deliver original material, developing unique voices and audience connection. The career offers creative freedom, immediate feedback loops, and opportunities expanding with specials streaming globally and podcast networks."
        },
        {
          name: "Film Director",
          description: "Featured for overall creative vision and leadership in cinematic storytelling. Directors interpret scripts, guide performances, and make artistic decisions from pre-production through post. The career offers maximum creative control in visual media, cultural influence potential, and opportunities in feature films, series, and commercials."
        },
        {
          name: "Singer",
          description: "Selected for vocal expression and emotional connection through musical performance. Singers interpret songs across genres, developing technique and stage presence. The field offers artistic fulfillment, diverse performance venues from clubs to stadiums, and opportunities in recording, session work, and vocal coaching."
        },
        {
          name: "Professional Public Speaker",
          description: "Chosen for inspiring and educating audiences through presentation mastery. Professional speakers develop expertise niches and deliver keynotes, workshops, and training. The career offers intellectual leadership, entrepreneurial business models, and opportunities expanding with virtual events and organizational development needs."
        },
        {
          name: "Technical Writer",
          description: "Featured for translating complex information into clear documentation and instructions. Technical writers create manuals, guides, and help content for software, products, and processes. The field offers strong demand in technology sectors, intellectual challenge in simplification, and opportunities in user experience and knowledge management."
        }
      ]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Skilled Trades & Technical",
      description: "Hands-on careers building, maintaining, and repairing essential systems",
      careers: [
        {
          name: "Construction Manager",
          description: "Selected for overseeing building projects from planning through completion. Construction managers coordinate workers, materials, schedules, and budgets for residential and commercial projects. The career offers tangible project completion satisfaction, strong demand in growing markets, and opportunities to earn while learning through apprenticeship paths."
        },
        {
          name: "Elevator Installer/Repairer",
          description: "Chosen as a specialized trade with premium pay and limited competition. Elevator technicians install, maintain, and repair vertical transportation systems in buildings. The field offers strong union benefits, essential service role in urban environments, and technical depth with mechanical, electrical, and computerized systems."
        },
        {
          name: "Electrical Powerline Installer",
          description: "Featured for maintaining critical energy infrastructure that powers modern life. Powerline workers install and repair electrical distribution systems, often at height or in challenging conditions. The career offers good compensation with overtime, essential public utility role, and strong job security as grids modernize and expand."
        },
        {
          name: "HVAC Technician",
          description: "Selected for climate control systems essential to comfort in homes and businesses. HVAC technicians install and maintain heating, ventilation, and air conditioning equipment. The field offers year-round demand, opportunities for specialization in commercial or residential, and growing importance in energy efficiency and indoor air quality."
        },
        {
          name: "Wind Turbine Technician",
          description: "Chosen as a hands-on green energy career with strong growth in renewable sector. Wind techs maintain and repair turbines that generate electricity, working at height with specialized equipment. The career offers good pay with associate degree training, outdoor work satisfaction, and alignment with global energy transition trends."
        },
        {
          name: "Commercial Diver",
          description: "Featured for underwater work in construction, inspection, and salvage operations. Commercial divers perform tasks below surface using specialized breathing apparatus and tools. The field offers adventure alternative to office jobs, premium pay for hazardous work, and opportunities in offshore energy, civil engineering, and scientific research."
        },
        {
          name: "Structural Iron Worker",
          description: "Selected for building steel frameworks of buildings, bridges, and industrial facilities. Iron workers erect and connect structural components, often working at significant heights. The career offers good union wages, tangible creation of major infrastructure, and pride in physically demanding skilled craftsmanship."
        },
        {
          name: "Firefighter",
          description: "Chosen for emergency response and community protection through fire suppression and rescue. Firefighters train extensively for varied emergencies from fires to medical calls. The career offers team camaraderie, public service satisfaction, shift schedule flexibility, and pension benefits in municipal service roles."
        },
        {
          name: "Automotive Service Technician",
          description: "Featured for diagnosing and repairing increasingly computerized vehicles. Auto techs maintain cars, trucks, and specialty vehicles using both mechanical and digital skills. The field offers steady demand as vehicle ownership continues, opportunities for specialization in electric/hybrid systems, and potential for shop ownership."
        },
        {
          name: "Carpenter",
          description: "Selected for woodworking and building construction from framing to finish work. Carpenters measure, cut, and assemble structural and decorative wood components. The career offers creative satisfaction in material transformation, diverse project types, and opportunities in custom furniture, historic restoration, or general construction."
        },
        {
          name: "Landscaper/Groundskeeper",
          description: "Chosen for creating and maintaining outdoor spaces that enhance property value and enjoyment. Landscapers design, install, and care for plants, hardscapes, and irrigation systems. The field offers outdoor work satisfaction, creative design opportunities, and growing interest in sustainable landscaping and edible gardens."
        },
        {
          name: "Master Watchmaker",
          description: "Featured for precision craftsmanship in mechanical timepiece repair and restoration. Watchmakers service intricate movements, combining micro-mechanical skill with artistic finishing. The career offers niche specialization with limited competition, connection to horological history, and opportunities in luxury goods service sector."
        },
        {
          name: "Barber/Cosmetologist",
          description: "Selected for personal grooming services and client relationship building. Barbers and cosmetologists cut, style, and treat hair while developing loyal clientele. The career offers entrepreneurial freedom through booth rental or salon ownership, creative expression, and consistent demand for personal care services."
        },
        {
          name: "Professional Cook / Chef",
          description: "Chosen for culinary creation and hospitality through food preparation and kitchen leadership. Chefs develop menus, manage inventory, and oversee food quality in restaurants and institutions. The field offers creative satisfaction through flavor composition, opportunities for celebrity in food media, and global cuisine exploration."
        },
        {
          name: "Butler / Head of Household",
          description: "Featured for high-end household management and executive support in private service. Butlers oversee property maintenance, staff coordination, and formal entertaining for affluent households. The career offers premium compensation in luxury sector, opportunity for international travel with employers, and diverse skill application."
        },
        {
          name: "Referee",
          description: "Selected for officiating sports competitions and ensuring fair play according to rules. Referees make split-second decisions in fast-paced games across various sports levels. The career offers sports participation without athletic pressure, opportunities from youth to professional leagues, and physical activity combined with mental focus."
        }
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education & Public Service",
      description: "Careers shaping minds, communities, and societal structures",
      careers: [
        {
          name: "University Professor",
          description: "Selected for intellectual leadership through teaching, research, and publication. Professors develop expertise in academic disciplines while mentoring students and advancing knowledge. The career offers intellectual autonomy, lifelong learning environment, sabbatical opportunities, and potential for significant impact through education and discovery."
        },
        {
          name: "Guidance Counselor",
          description: "Chosen for supporting student development and educational/career planning. Guidance counselors help students navigate academic choices, personal challenges, and post-secondary options. The field offers meaningful impact on young lives, school schedule benefits, and growing importance in mental health support within educational settings."
        },
        {
          name: "Police Officer",
          description: "Featured for community protection and law enforcement through public service. Police officers maintain order, prevent crime, and respond to emergencies while building community trust. The career offers pension benefits, varied daily challenges, opportunities for specialization, and satisfaction from public safety contribution."
        },
        {
          name: "Military Officer",
          description: "Selected for leadership development and national service in structured hierarchy. Military officers command units, manage operations, and develop strategic planning skills. The career offers accelerated responsibility, comprehensive benefits, retirement options, and leadership training transferable to civilian sectors post-service."
        },
        {
          name: "Politician",
          description: "Chosen for public leadership and policy influence through elected office. Politicians represent constituencies, develop legislation, and shape governance decisions. The career offers maximum civic impact potential, platform for issue advocacy, and opportunities to drive systemic change at local, state, or national levels."
        },
        {
          name: "Professional Judge",
          description: "Featured for judicial authority in interpreting and applying laws through court proceedings. Judges oversee trials, make rulings on evidence and procedure, and in some cases determine sentences. The career offers intellectual challenge in legal analysis, public service prestige, and opportunities to shape jurisprudence through decisions."
        },
        {
          name: "Non-Profit Program Manager",
          description: "Selected for mission-driven work addressing social issues through organized initiatives. Non-profit managers develop and implement programs that deliver services, advocacy, or education. The field offers purpose alignment, diverse issue areas from environment to poverty, and satisfaction from measurable community impact."
        },
        {
          name: "Thought Leader",
          description: "Chosen for influencing ideas and practices through expertise sharing and content creation. Thought leaders develop original perspectives, build followings, and shape conversations in their fields. The career offers intellectual entrepreneurship, platform building opportunities, and income streams from speaking, writing, and consulting."
        },
        {
          name: "Professional Coach (Sports)",
          description: "Featured for athlete development and competitive strategy in team or individual sports. Coaches design training programs, analyze performance, and motivate players toward goals. The career offers sports passion channeling, leadership development, and opportunities from youth leagues to professional organizations with competitive excitement."
        },
        {
          name: "Curator",
          description: "Selected for cultural stewardship through museum collection management and exhibition design. Curators research artifacts, develop thematic displays, and interpret cultural heritage for public education. The field offers intellectual engagement with history/art, creative exhibition design, and opportunities in specialized collection areas."
        },
        {
          name: "Archaeologist",
          description: "Chosen for uncovering human history through excavation and analysis of material remains. Archaeologists conduct fieldwork, laboratory analysis, and interpretation of past cultures. The career offers adventure in discovery, intellectual puzzle-solving, and opportunities in cultural resource management, academia, and museum work."
        },
        {
          name: "Zoologist",
          description: "Featured for animal behavior study and wildlife conservation through scientific research. Zoologists observe species in natural or captive settings, contributing to understanding of biodiversity and ecosystems. The field offers passion for animals channeled into science, opportunities for fieldwork, and growing importance in conservation biology."
        },
        {
          name: "Urban Farming Specialist",
          description: "Selected for local food production innovation in city environments through controlled agriculture. Urban farming specialists design and operate hydroponic, aquaponic, or vertical farming systems. The career offers sustainability focus, entrepreneurial opportunities in local food movement, and application of technology to agriculture challenges."
        },
        {
          name: "Vertical Farm Manager",
          description: "Chosen for high-tech agriculture in controlled indoor environments maximizing yield per square foot. Vertical farm managers oversee stacked growing systems with LED lighting and climate control. The field offers innovation at food production-technology intersection, opportunities in urban sustainability, and growing interest in local resilient food systems."
        }
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Specialized & Emerging Fields",
      description: "Niche and forward-looking careers with distinctive opportunities",
      careers: [
        {
          name: "Airline Pilot",
          description: "Selected for technical mastery combined with global travel and structured career progression. Pilots operate aircraft with precision, enjoying exceptional compensation, travel benefits, and the satisfaction of safely transporting people worldwide. With mandatory retirement ages and growing air travel, the field offers strong long-term stability despite rigorous training requirements."
        },
        {
          name: "Astrophysicist/Astronomer",
          description: "Chosen for pursuing humanity's most fundamental questions about the universe through observation and theory. Astrophysicists develop advanced analytical and computational skills while contributing to cosmic understanding. The career offers profound intellectual satisfaction, opportunities in research and space agencies, and skills transferable to data science and technology sectors."
        },
        {
          name: "Biostatistician",
          description: "Featured for applying statistical methods to medical and biological research questions. Biostatisticians design studies, analyze health data, and interpret results for drug development and public health. The field offers strong demand in pharmaceutical and research sectors, intellectual challenge in complex data, and contribution to medical advances."
        },
        {
          name: "Epidemiologist",
          description: "Selected for disease pattern study and public health protection through population-level analysis. Epidemiologists investigate outbreaks, identify risk factors, and design prevention strategies. The career gained prominence during COVID-19, offers opportunities in government and global health, and applies scientific methods to population wellbeing."
        },
        {
          name: "Geoscientist",
          description: "Chosen for Earth system study including geology, hydrology, and atmospheric science. Geoscientists analyze natural resources, environmental processes, and planetary history. The field offers outdoor fieldwork opportunities, application to energy and environmental challenges, and diverse sectors from oil/gas to climate science."
        },
        {
          name: "Information Systems Manager",
          description: "Featured for technology infrastructure leadership aligning IT with organizational goals. IS managers oversee networks, databases, and systems while developing strategic technology plans. The career offers blend of technical and business skills, essential role in digital organizations, and progression to CIO positions with broad impact."
        },
        {
          name: "Flight Attendant",
          description: "Selected for customer service in aviation with travel benefits and flexible schedules. Flight attendants ensure passenger safety and comfort while experiencing diverse destinations. The career offers airline industry benefits, interpersonal skill development, and opportunities for international cultural exposure during layovers."
        },
        {
          name: "Athletic Trainer",
          description: "Chosen for sports medicine specialization preventing and treating athletic injuries. Athletic trainers develop conditioning programs, provide emergency care, and guide rehabilitation. The field offers sports environment immersion, opportunities from schools to professional teams, and satisfaction from helping athletes perform safely."
        },
        {
          name: "Esports Pro Gamer",
          description: "Featured for competitive video gaming at professional level with sponsorship and streaming income. Esports athletes train intensively, compete in tournaments, and build personal brands. The career offers passion monetization, opportunities in growing billion-dollar industry, and transition paths to coaching, streaming, or team management."
        },
        {
          name: "Forensic Analyst",
          description: "Selected for scientific investigation supporting legal proceedings through evidence analysis. Forensic analysts examine physical, digital, or biological evidence using specialized laboratory techniques. The field offers puzzle-solving satisfaction, application of science to justice system, and opportunities in law enforcement and private labs."
        },
        {
          name: "Professional Athlete",
          description: "Chosen for elite physical performance and competition at highest sports levels. Professional athletes train extensively to compete in their sports, potentially earning significant income from contracts and endorsements. The career offers passion pursuit at highest level, physical excellence development, and opportunities for public influence through platform."
        },
        {
          name: "Attorney",
          description: "Featured for legal representation and advocacy through mastery of law and argumentation. Attorneys advise clients, prepare documents, and argue cases in various practice areas. The career offers intellectual challenge in complex systems, potential for high earnings, and opportunities to advocate for justice and client interests."
        },
        {
          name: "Executive Assistant",
          description: "Selected for high-level administrative support and organizational coordination for executives. Executive assistants manage calendars, communications, and projects while anticipating needs. The career offers insight into business leadership, opportunities for advancement, and satisfaction from enabling organizational efficiency at high levels."
        },
        {
          name: "Quality Assurance Analyst",
          description: "Chosen for ensuring product and service quality through systematic testing and process improvement. QA analysts develop test plans, identify defects, and recommend improvements across industries. The field offers detail-oriented problem-solving, essential role in customer satisfaction, and opportunities in software, manufacturing, and services."
        },
        {
          name: "Customer Success Manager",
          description: "Featured for client relationship management ensuring product adoption and satisfaction. CSMs onboard customers, drive usage, and retain accounts through proactive support. The career offers blend of relationship-building and analytics, growing importance in subscription business models, and opportunities across SaaS and service industries."
        },
        {
          name: "Entrepreneur",
          description: "Selected for value creation through business founding and growth beyond traditional employment. Entrepreneurs identify opportunities, assemble resources, and build organizations addressing market needs. The career offers maximum autonomy, potential for significant wealth creation, and satisfaction from building something meaningful from vision."
        }
      ]
    }
  ];

return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 gap-6 md:gap-0">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                120+ Future-Focused Careers
              </h1>
            </div>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl">
              Discover carefully selected careers with strong growth potential, satisfying work, 
              and alignment with personality-driven success.
            </p>
            <p className="text-sm md:text-base text-muted-foreground/80 mt-2">
              Each career is chosen based on market demand, automation resistance, and meaningful impact potential.
            </p>
          </div>
          <div className="order-1 md:order-2 ">
            <div className="md:hidden">
    <Button 
      asChild 
      variant="outline" 
      size="icon"
      className="rounded-full border-primary/30 w-12 h-12"
    >
      <Link href="/">
        <ArrowLeft className="h-5 w-5" />
        <span className="sr-only">Back to Home</span>
      </Link>
    </Button>
  </div>
  <div className="hidden md:block">
    <Button 
      asChild 
      variant="outline" 
      className="rounded-full border-primary/30"
    >
      <Link href="/">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
    </Button>
    </div>
          </div>
        </div>
        <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">120+</div>
              <div className="text-sm text-muted-foreground">Career Profiles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">8</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Personality Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Future-Focused</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Growth Potential</div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">What Makes These Careers "Best"</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Growth & Demand
                </h3>
                <p className="text-sm text-muted-foreground">
                  Selected based on strong market projections, demographic trends, 
                  and resistance to economic cycles and automation disruption.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Meaning & Impact
                </h3>
                <p className="text-sm text-muted-foreground">
                  Chosen for work that provides tangible results, helps others, 
                  advances knowledge, or creates lasting value beyond financial compensation.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Personality Alignment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Each career matches specific personality codes (C/P/S/N) and 
                  passion patterns for optimal satisfaction and natural talent utilization.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-16">
          {careerCategories.map((category, index) => (
            <section key={index} className="scroll-mt-20">
              <div className="flex items-center gap-3 mb-8 sticky top-4 bg-background/80 backdrop-blur-sm py-4 z-10">
                <div className="p-2 rounded-lg bg-primary/20">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.title}</h2>
                  <p className="text-muted-foreground mt-1">{category.description}</p>
                  <div className="text-sm text-muted-foreground/70 mt-2">
                    {category.careers.length} career profiles
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.careers.map((career, careerIndex) => (
                  <div 
                    key={careerIndex} 
                    className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {career.name}
                      </h3>
                    
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {career.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border/30">
                      <div className="flex items-center justify-between">
                      
                        <Button 
                          asChild 
                          variant="ghost" 
                          size="sm" 
                          className="rounded-full text-primary hover:text-primary"
                        >
                          <Link href="/quiz">
                            Find Your Match
                            <ArrowLeft className="ml-2 h-3 w-3 rotate-180" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
