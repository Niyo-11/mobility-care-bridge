
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Heart, Star } from 'lucide-react';

const Impact = () => {
  const stats = [
    { number: '3+', label: 'People Helped', icon: Users, color: 'emerald' },
    { number: '5+', label: 'Mobility Aids Supplied', icon: Heart, color: 'rose' },
    { number: '3+', label: 'Active Partners', icon: Star, color: 'blue' },
    { number: '95%', label: 'Recipient Satisfaction', icon: TrendingUp, color: 'violet' }
  ];

  const highlights = [
    { name: 'Regional clinic network', location: 'Nigeria & Rwanda', item: 'Verified healthcare partners listing and vetting mobility products' },
    { name: 'Community outreach', location: 'Kigali', item: 'Pilot deliveries of affordable wheelchairs and walking aids' },
    { name: 'Merchant onboarding', location: 'Lagos', item: 'First verified suppliers onboarded to the CareBridge marketplace' },
    { name: 'Quality checks', location: 'Multi-site', item: 'Safety and condition standards applied before items reach buyers' },
    { name: 'Logistics partners', location: 'Regional', item: 'Coordinated distribution to underserved areas' },
    { name: 'Product catalog growth', location: 'Online', item: 'Curated categories for wheelchairs, prosthetics, and daily living aids' }
  ];

  const testimonial = {
    quote: "Getting a wheelchair through CareBridge's marketplace and partners changed my daily life. I can move independently again and feel part of my community.",
    author: "Maria, customer",
    location: "Kigali, RW"
  };

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600',
      rose: 'bg-rose-100 text-rose-600',
      blue: 'bg-blue-100 text-blue-600',
      violet: 'bg-violet-100 text-violet-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            CareBridge connects verified sellers and healthcare partners with people who need safe, affordable mobility aids—see how we are growing together.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 rounded-2xl ${getColorClasses(stat.color)} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-10 w-10" />
                </div>
                <h3 className="text-4xl font-bold text-slate-800 mb-2">{stat.number}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-10 w-10 text-emerald-600" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-lg text-slate-600">
                <p className="font-semibold">{testimonial.author}</p>
                <p>{testimonial.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Partners & program highlights
            </h2>
            <p className="text-xl text-slate-600">
              A marketplace model built on trust, verification, and transparent delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((row, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{row.name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{row.location}</p>
                    <p className="text-slate-600 text-sm">{row.item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our growing impact
            </h2>
            <p className="text-xl text-slate-600">
              From first listings to today—we continue to expand reach and partnerships
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold">
                2025
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Marketplace & verification focus</h3>
                <p className="text-slate-600">Emphasis on verified sellers, healthcare alignment, and safe distribution</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                2024
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Expanded partner network</h3>
                <p className="text-slate-600">More clinics and logistics collaborators in Nigeria and Rwanda</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold">
                2023
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Program launch</h3>
                <p className="text-slate-600">First mobility aids supplied through coordinated partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Shop or partner with us
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Explore verified products on the marketplace, or apply to sell as a verified supplier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/marketplace" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Go to marketplace
            </Link>
            <Link 
              to="/merchant-application" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
