
import { Building2, Stethoscope, Wrench, Users } from 'lucide-react';

const Partners = () => {
  const partnerCategories = [
    {
      title: 'NGO Partners',
      description: 'Organizations that verify recipients and ensure mobility aids reach those most in need',
      icon: Users,
      color: 'emerald',
      partners: [
        { name: 'Community Care Foundation', role: 'Recipient verification and outreach' },
        { name: 'Accessible Living Network', role: 'Community needs assessment' },
        { name: 'Hope & Mobility Initiative', role: 'Rural area distribution' },
        { name: 'Independence First Alliance', role: 'Urban community programs' }
      ]
    },
    {
      title: 'Healthcare Partners',
      description: 'Clinics and healthcare providers that assess items and recommend appropriate aids',
      icon: Stethoscope,
      color: 'blue',
      partners: [
        { name: 'Central Rehabilitation Clinic', role: 'Medical assessments and fittings' },
        { name: 'Community Health Center', role: 'Patient consultations' },
        { name: 'Physical Therapy Associates', role: 'Mobility aid recommendations' },
        { name: 'Regional Medical Network', role: 'Safety standards verification' }
      ]
    },
    {
      title: 'Repair Partners',
      description: 'Skilled technicians who restore mobility aids to excellent working condition',
      icon: Wrench,
      color: 'amber',
      partners: [
        { name: 'Precision Mobility Repairs', role: 'Wheelchair and scooter restoration' },
        { name: 'MedEquip Solutions', role: 'Electronic mobility aid repairs' },
        { name: 'Caring Hands Workshop', role: 'Walking aid and brace repairs' },
        { name: 'Technical Care Services', role: 'Quality control and testing' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        icon: 'bg-emerald-100 text-emerald-600',
        text: 'text-emerald-700'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-100 text-blue-600',
        text: 'text-blue-700'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        icon: 'bg-amber-100 text-amber-600',
        text: 'text-amber-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Trusted Partners
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We work with a network of dedicated NGOs, healthcare providers, and repair specialists 
            to ensure every mobility aid reaches the right person in perfect condition.
          </p>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 text-center">
            <Building2 className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Built on Trust & Expertise</h2>
            <p className="text-lg text-slate-600">
              Every organization in our network has been carefully vetted to ensure they share our 
              commitment to quality, safety, and serving those who need mobility aids most.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {partnerCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color);
              
              return (
                <div key={categoryIndex}>
                  <div className="text-center mb-12">
                    <div className={`w-16 h-16 rounded-full ${colorClasses.icon} flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">{category.title}</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">{category.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner, index) => (
                      <div 
                        key={index} 
                        className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${colorClasses.border} border`}
                      >
                        <div className={`w-12 h-12 rounded-lg ${colorClasses.bg} flex items-center justify-center mb-4`}>
                          <span className={`text-sm font-bold ${colorClasses.text}`}>
                            {partner.name.split(' ').map(word => word[0]).join('').substring(0, 2)}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{partner.name}</h3>
                        <p className="text-slate-600 text-sm">{partner.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Interested in Partnering?</h2>
          <p className="text-xl text-slate-600 mb-8">
            We're always looking for organizations that share our mission of making mobility aids 
            accessible to everyone who needs them.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partners;
