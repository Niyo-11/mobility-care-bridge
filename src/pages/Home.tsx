
import { Link } from 'react-router-dom';
import { ArrowRight, Users, CheckCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hopeInnovation from '@/assets/children.jpg';
import mobilityAidUser from '@/assets/disabled_ppl.jpg';
import healthcareProfessional from '@/assets/mobility_aids.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Bridging the Gap in{' '}
                <span className="text-emerald-600">Access to Mobility Aids</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                We connect generous donors with people in need, ensuring that mobility aids like wheelchairs, 
                crutches, and foot supports reach those who need them most. Every donation creates independence 
                and dignity for someone in our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4">
                  <Link to="/donate">
                    Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4">
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
                <img 
                  src={healthcareProfessional} 
                  alt="Healthcare professional helping patient with mobility aid"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">125+</h3>
              <p className="text-slate-600">People Helped</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">200+</h3>
              <p className="text-slate-600">Aids Donated</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-rose-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">50+</h3>
              <p className="text-slate-600">Active Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                Our Mission is Simple
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                We believe that mobility should never be a barrier to living a full life. Through our network 
                of generous donors, skilled repair partners, and trusted NGOs, we ensure that quality mobility 
                aids reach the people who need them most.
              </p>
              <Button asChild size="lg" variant="outline" className="border-slate-300">
                <Link to="/impact">
                  See Our Impact <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={mobilityAidUser} 
                  alt="Person using mobility aid with independence"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src={hopeInnovation} 
                  alt="Innovation and hope in mobility aid solutions"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Building Stronger Communities
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Every donation creates a ripple effect of positive change. When someone regains their mobility, 
                they can participate more fully in their community, maintain their independence, and continue 
                contributing to society.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our network of partners ensures that each mobility aid finds its way to someone who truly needs it, 
                creating lasting impact that extends far beyond the initial donation.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/partners">
                  Meet Our Partners <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
