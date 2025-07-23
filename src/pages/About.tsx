
import { CheckCircle, Search, Wrench, Heart } from 'lucide-react';

const About = () => {
  const steps = [
    {
      icon: Heart,
      title: 'Collect Donations',
      description: 'We accept mobility aids from generous donors, including items that need minor repairs.',
      color: 'rose'
    },
    {
      icon: Search,
      title: 'Assess & Verify',
      description: 'Our partner NGOs and clinics carefully assess each item to ensure safety and functionality.',
      color: 'blue'
    },
    {
      icon: Wrench,
      title: 'Repair & Restore',
      description: 'Skilled repair shops restore items to excellent condition, ensuring they meet safety standards.',
      color: 'emerald'
    },
    {
      icon: CheckCircle,
      title: 'Deliver to Those in Need',
      description: 'We connect restored mobility aids with people who need them through our trusted partner network.',
      color: 'violet'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      rose: 'bg-rose-100 text-rose-600',
      blue: 'bg-blue-100 text-blue-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      violet: 'bg-violet-100 text-violet-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Care Bridge
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We're dedicated to ensuring that financial barriers never prevent someone from accessing 
            the mobility aids they need to live independently and with dignity.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">The Problem We're Solving</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                Mobility aids like wheelchairs, crutches, and walking supports can cost hundreds or even 
                thousands of dollars. For many people with disabilities or mobility challenges, these 
                essential tools are simply unaffordable.
              </p>
              <p>
                Meanwhile, many generous people have mobility aids sitting unused in their homes after 
                recovery, or they have items that need minor repairs but are otherwise perfectly functional.
              </p>
              <p className="font-semibold text-emerald-700">
                Care Bridge connects these two groups, creating a bridge between generosity and need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              How We Make It Happen
            </h2>
            <p className="text-xl text-slate-600">
              Our four-step process ensures every mobility aid reaches someone who truly needs it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 rounded-full ${getColorClasses(step.color)} flex items-center justify-center mb-4`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
            Why This Matters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Independence</h3>
                  <p className="text-slate-600">Mobility aids restore independence and dignity, allowing people to participate fully in their communities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Sustainability</h3>
                  <p className="text-slate-600">We reduce waste by giving new life to mobility aids that might otherwise be discarded.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-rose-100 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Community</h3>
                  <p className="text-slate-600">We build stronger communities by connecting people who want to help with those who need support.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-violet-100 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Quality</h3>
                  <p className="text-slate-600">Every item is carefully assessed and repaired to ensure it meets the highest safety standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
