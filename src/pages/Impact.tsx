
import { TrendingUp, Users, Heart, Star } from 'lucide-react';

const Impact = () => {
  const stats = [
    { number: '125', label: 'People Helped', icon: Users, color: 'emerald' },
    { number: '200', label: 'Mobility Aids Donated', icon: Heart, color: 'rose' },
    { number: '50', label: 'Active Partners', icon: Star, color: 'blue' },
    { number: '95%', label: 'Recipient Satisfaction', icon: TrendingUp, color: 'violet' }
  ];

  const donors = [
    { name: 'Sarah Chen', location: 'San Francisco', item: 'Donated a wheelchair after her father\'s recovery' },
    { name: 'Michael Rodriguez', location: 'Austin', item: 'Contributed walking aids and crutches' },
    { name: 'Elena Petrov', location: 'Portland', item: 'Donated mobility scooter in excellent condition' },
    { name: 'David Kim', location: 'Seattle', item: 'Shared multiple walking aids from clinic closure' },
    { name: 'Lisa Thompson', location: 'Denver', item: 'Donated bath safety equipment collection' },
    { name: 'Anonymous Donor', location: 'Phoenix', item: 'Major contribution of rehabilitation equipment' }
  ];

  const testimonial = {
    quote: "Receiving the wheelchair through MobilityBridge changed everything for me. I can now get to work independently and take my children to the park. This program gave me back my freedom.",
    author: "Maria, Wheelchair Recipient",
    location: "Oakland, CA"
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
            See how your donations and our community partnerships are transforming lives 
            and building a more accessible world for everyone.
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

      {/* Donor Recognition */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Thank You to Our Amazing Donors
            </h2>
            <p className="text-xl text-slate-600">
              Every donation, big or small, makes a real difference in someone's life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donors.map((donor, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{donor.name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{donor.location}</p>
                    <p className="text-slate-600 text-sm">{donor.item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Growing Impact
            </h2>
            <p className="text-xl text-slate-600">
              From our first donation to today, we continue to expand our reach
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold">
                2024 Q1
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Reached 125 recipients</h3>
                <p className="text-slate-600">Milestone achievement in community impact</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                2023 Q4
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Expanded repair network</h3>
                <p className="text-slate-600">Added 3 new specialized repair partners</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold">
                2023 Q3
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Program launch</h3>
                <p className="text-slate-600">First mobility aid donation successfully completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of Our Growing Impact
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Your donation could be the next success story that changes someone's life forever.
          </p>
          <a 
            href="/donate" 
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Start Your Impact Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Impact;
