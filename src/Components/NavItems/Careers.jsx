import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Heart,
  Laptop,
  Coffee,
  GraduationCap,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const CareersPage = () => {
  const [openPosition, setOpenPosition] = useState(null);

  const positions = [
    {
      title: "Senior Frontend Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      department: "Engineering",
      description: "We're looking for an experienced frontend developer to join our team and help build amazing user experiences.",
      requirements: [
        "5+ years of experience with React and modern JavaScript",
        "Experience with responsive design and CSS frameworks",
        "Strong understanding of web performance optimization",
        "Experience with state management (Redux, Context API)",
      ],
      responsibilities: [
        "Build scalable and maintainable frontend applications",
        "Collaborate with designers and backend developers",
        "Mentor junior developers",
        "Contribute to technical architecture decisions",
      ]
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      department: "Design",
      description: "Join our design team to create beautiful and intuitive user interfaces for our products.",
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in Figma and design tools",
        "Strong portfolio demonstrating user-centered design",
        "Experience with design systems",
      ],
      responsibilities: [
        "Create user-centered designs and prototypes",
        "Conduct user research and usability testing",
        "Collaborate with product and engineering teams",
        "Maintain and evolve our design system",
      ]
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130k - $170k",
      department: "Product",
      description: "We're seeking a product manager to drive the vision and execution of our core products.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical and problem-solving skills",
        "Excellent communication and leadership abilities",
        "Experience with agile methodologies",
      ],
      responsibilities: [
        "Define product strategy and roadmap",
        "Work closely with engineering and design teams",
        "Gather and analyze user feedback",
        "Drive product launches and iterations",
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family."
    },
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: "Remote Work",
      description: "Flexible work arrangements with home office setup assistance."
    },
    {
      icon: <Coffee className="w-8 h-8 text-blue-600" />,
      title: "Work-Life Balance",
      description: "Unlimited PTO, flexible hours, and mental health days."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Learning & Development",
      description: "Annual learning stipend and regular workshops for skill development."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with us and be part of an innovative team shaping the future of technology.
          </p>
        </div>

        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setOpenPosition(openPosition === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    {openPosition === index ? 
                      <ChevronUp className="w-6 h-6 text-gray-400" /> :
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    }
                  </div>
                </div>
                
                {openPosition === index && (
                  <div className="px-6 pb-6">
                    <hr className="mb-6" />
                    <p className="text-gray-600 mb-6">{position.description}</p>
                    
                    <h4 className="font-semibold text-lg mb-3">Requirements:</h4>
                    <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold text-lg mb-3">Responsibilities:</h4>
                    <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                      {position.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
            Send Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;