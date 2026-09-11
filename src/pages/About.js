import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fallbackDoctors = [
  {
    name: 'Dr. Siddheshwar Khonde',
    role: 'BVSc & AH',
    experience: 'Veterinary practitioner focused on small-animal and emergency care.',
    image: '/images/doctors/doctor-1.jpg',
    tags: ['Small Animal Care', '5+ Years']
  },
  {
    name: 'Dr. Ganesh Jagtap',
    role: 'BVSc & AH',
    experience: 'Veterinarian focused on internal medicine, cardiology and preventive care.',
    image: '/images/doctors/doctor-2.jpg',
    tags: ['Internal Medicine', '5+ Years']
  },
  {
    name: 'Dr. Ankit Chavan',
    role: 'BVSc & AH',
    experience: 'Small-animal practitioner with an interest in veterinary pathology.',
    image: '/images/doctors/doctor-3.jpg',
    tags: ['Pathology', '2+ Years']
  }
];

const values = [
  { icon: '✦', title: 'Compassion', text: 'Gentle handling and thoughtful care for every pet.' },
  { icon: '✓', title: 'Integrity', text: 'Clear advice, transparent communication and responsible care.' },
  { icon: '◆', title: 'Excellence', text: 'Evidence-led veterinary care with attention to detail.' },
  { icon: '✚', title: 'Innovation', text: 'Modern tools and convenient home-based veterinary services.' }
];

const steps = [
  { number: '01', title: 'Book a visit', text: 'Choose a convenient appointment time online or contact our team.', image: '/images/book1.png' },
  { number: '02', title: 'We come to you', text: 'A veterinarian visits your home with the essentials for assessment and care.', image: '/images/home.jpeg' },
  { number: '03', title: 'Care & follow-up', text: 'Get a clear treatment plan, practical guidance and follow-up support.', image: '/images/multi.jpeg' }
];

const services = [
  ['Vaccination & Immunization', '/images/vaccine.png', '/services/vaccination'],
  ['Emergency Pet Care', '/images/emergancy.png', '/services/emergency-care'],
  ['Surgery & Procedures', '/images/surgery.png', '/services/general-treatment'],
  ['Nutrition & Diet Plans', '/images/nutrication.png', '/services/nutrition-guidance'],
  ['Wellness Checkups', '/images/vaccine.png', '/services/general-treatment'],
  ['Dental Care', '/images/surgery.png', '/services/dental-care'],
  ['Laboratory Tests', '/images/nutrication.png', '/services/xray-imaging'],
  ['Home Visit Services', '/images/home.jpeg', '/services']
];

function About() {
  const [doctors, setDoctors] = useState(fallbackDoctors);
  const [loadingDoctors, setLoadingDoctors] = useState(true);
  const [activeDoctor, setActiveDoctor] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let mounted = true;
    const loadDoctors = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 7000);
        const response = await fetch('/api/doctors', { signal: controller.signal });
        clearTimeout(timeout);
        if (!response.ok) throw new Error(`Unable to load doctors (${response.status})`);
        const data = await response.json();
        const apiDoctors = Array.isArray(data.doctors) ? data.doctors : [];
        if (mounted && apiDoctors.length) {
          setDoctors(apiDoctors.map((doc, index) => ({
            name: doc.name,
            role: doc.qualification || 'Veterinarian',
            experience: doc.bio || 'Experienced veterinary professional dedicated to compassionate pet care.',
            image: doc.image || doc.photo || fallbackDoctors[index % fallbackDoctors.length].image,
            tags: [doc.specialization || 'Pet Care', doc.experience ? `${doc.experience}+ Years` : 'Experienced']
          })));
        } else if (mounted) {
          console.warn('No active doctors returned by /api/doctors. Showing local profiles.');
          setDoctors(fallbackDoctors);
        }
      } catch (error) {
        console.warn('Using fallback doctor profiles:', error);
      } finally {
        if (mounted) setLoadingDoctors(false);
      }
    };
    loadDoctors();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (doctors.length < 2) return undefined;
    const timer = setInterval(() => {
      setActiveDoctor((value) => (value + 1) % doctors.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [doctors.length]);

  useEffect(() => {
    const elements = document.querySelectorAll('.about-reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loadingDoctors]);

  const visibleDoctors = useMemo(() => {
    if (doctors.length <= 3) return doctors;
    return [0, 1, 2].map(offset => doctors[(activeDoctor + offset) % doctors.length]);
  }, [doctors, activeDoctor]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: 'MrigAayuvets',
    description: 'Compassionate veterinary care and convenient home visits for pets in Mumbai.',
    url: 'https://mrigaayuvets.in/about',
    telephone: '+918208657969',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    }
  };

  return (
    <div className="site-page about-page bg-[#fbfaf9] text-[#29252b]">
      <Helmet>
        <title>About MrigAayuvets | Compassionate Veterinary Care in Mumbai</title>
        <meta name="description" content="Learn about MrigAayuvets, our veterinary team, values and convenient home-visit pet care in Mumbai." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <link rel="canonical" href="https://mrigaayuvets.in/about" />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#31243b] text-white">
        <div className="absolute -top-28 -right-20 h-80 w-80 rounded-full bg-[#ef7567]/25 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#8e70a7]/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-24">
          <div className="about-reveal">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[.16em] text-white/90 backdrop-blur">
              ABOUT MRIGAAYUVETS
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              Better care for pets.{' '}
              <span className="text-[#ff9a8d]">Closer to home.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              We bring professional, compassionate veterinary care to your doorstep, helping pets feel safer and families feel supported.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/appointment" className="about-primary-btn">
                Book an appointment <span>→</span>
              </Link>
              <Link to="/services" className="about-secondary-btn">
                Explore our services
              </Link>
            </div>
          </div>

          <div className="about-reveal relative mx-auto w-full max-w-xl lg:justify-self-end">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-2 shadow-[0_24px_70px_rgba(0,0,0,.28)]">
              <img
                src="/images/slide6.jpeg"
                alt="Veterinary care at MrigAayuvets"
                className="h-[290px] w-full rounded-[1.6rem] object-cover sm:h-[390px] lg:h-[450px]"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 text-[#31243b] shadow-[0_18px_45px_rgba(0,0,0,.2)] sm:left-8">
              <div className="text-2xl font-black">4.9 ★</div>
              <div className="mt-0.5 text-xs font-semibold text-gray-500">Pet parent rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto -mt-7 max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-black/[.05] bg-white shadow-[0_18px_55px_rgba(49,36,59,.12)] sm:grid-cols-4">
          {[
            ['5000+', 'Pets cared for'],
            ['5+', 'Years experience'],
            ['24/7', 'Emergency support'],
            ['Home', 'Vet visits']
          ].map(([number, label], index) => (
            <div key={label} className={`px-4 py-6 text-center sm:px-6 sm:py-7 ${index < 3 ? 'border-b border-black/[.06] sm:border-b-0 sm:border-r' : 'border-b-0'}`}>
              <div className="text-2xl font-black text-[#31243b] sm:text-3xl">{number}</div>
              <div className="mt-1 text-xs font-semibold text-gray-500 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="about-reveal overflow-hidden rounded-[2rem] bg-[#f0e9f3] p-3 shadow-[0_18px_50px_rgba(49,36,59,.10)]">
            <img src="/images/home.jpeg" alt="MrigAayuvets home veterinary visit" className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[430px]" loading="lazy" />
          </div>
          <div className="about-reveal">
            <span className="about-kicker">OUR STORY</span>
            <h2 className="about-heading">Veterinary care designed around your pet.</h2>
            <p className="about-copy">
              At MrigAayuvets, we believe veterinary care should be professional without feeling intimidating. Our home-visit approach helps reduce travel and clinic stress while giving pet parents clear, practical guidance.
            </p>
            <p className="about-copy">
              From preventive care and vaccination to treatment, nutrition and urgent support, our team focuses on what your pet needs at every stage of life.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {['Experienced veterinary team', 'Convenient home visits', 'Clear treatment guidance', 'Pet-first approach'].map(item => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-black/[.06] bg-white p-4 shadow-[0_8px_25px_rgba(49,36,59,.06)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fbe1dc] font-bold text-[#d65f55]">✓</span>
                  <span className="text-sm font-bold text-[#3b3440]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f2edf4] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="about-reveal mx-auto max-w-2xl text-center">
            <span className="about-kicker">WHAT GUIDES US</span>
            <h2 className="about-heading">The values behind every visit.</h2>
            <p className="about-copy">A calm experience, honest communication and thoughtful veterinary care.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article key={value.title} className="about-reveal group rounded-[1.6rem] border border-black/[.05] bg-white p-6 shadow-[0_12px_35px_rgba(49,36,59,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(49,36,59,.13)]" style={{ transitionDelay: `${index * 70}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fbe1dc] text-xl font-black text-[#d65f55] transition group-hover:rotate-6">{value.icon}</div>
                <h3 className="mt-5 text-xl font-extrabold text-[#31243b]">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="about-reveal text-center">
          <span className="about-kicker">HOW IT WORKS</span>
          <h2 className="about-heading">Simple care from booking to follow-up.</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.number} className="about-reveal relative overflow-hidden rounded-[1.7rem] border border-black/[.06] bg-white shadow-[0_14px_40px_rgba(49,36,59,.08)]" style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="h-52 overflow-hidden bg-[#eee7f1]">
                <img src={step.image} alt={step.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-xs font-black tracking-[.18em] text-[#d65f55]">{step.number}</span>
                <h3 className="mt-2 text-xl font-extrabold text-[#31243b]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-[#31243b] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {[
            ['Our mission', 'Make quality veterinary care more comfortable and accessible by bringing thoughtful pet care closer to families.'],
            ['Our vision', 'Build a trusted veterinary experience where pets receive expert care without unnecessary stress.']
          ].map(([title, text], index) => (
            <div key={title} className="about-reveal rounded-[1.8rem] border border-white/10 bg-white/[.07] p-7 backdrop-blur sm:p-9" style={{ transitionDelay: `${index * 100}ms` }}>
              <span className="text-2xl text-[#ff9a8d]">{index === 0 ? '✦' : '◎'}</span>
              <h3 className="mt-5 text-2xl font-black sm:text-3xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#fbfaf9] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="about-reveal text-center">
            <span className="about-kicker">WHAT WE DO</span>
            <h2 className="about-heading">Care for the moments that matter.</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {services.map(([name, image, path], index) => (
              <Link key={name} to={path} className="about-reveal group rounded-[1.4rem] border border-black/[.06] bg-white p-4 text-center shadow-[0_10px_30px_rgba(49,36,59,.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_38px_rgba(49,36,59,.12)] sm:p-6" style={{ transitionDelay: `${(index % 4) * 60}ms` }}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f4edf5] sm:h-20 sm:w-20">
                  <img src={image} alt="" className="h-10 w-10 object-contain sm:h-12 sm:w-12" loading="lazy" />
                </div>
                <h3 className="mt-4 text-sm font-extrabold leading-5 text-[#31243b] sm:text-base">{name}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link to="/services" className="about-primary-btn">View all services <span>→</span></Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="about-kicker">OUR TEAM</span>
              <h2 className="about-heading">Meet the people caring for your pets.</h2>
            </div>
            <div className="text-sm text-gray-500">{loadingDoctors ? 'Loading team…' : `${doctors.length} veterinary professionals`}</div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {visibleDoctors.map((doctor, index) => (
              <article key={`${doctor.name}-${index}`} className="team-card overflow-hidden rounded-[1.7rem] border border-black/[.06] bg-[#fbfaf9] shadow-[0_14px_40px_rgba(49,36,59,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(49,36,59,.13)]">
                <div className="team-photo-frame relative overflow-hidden bg-[#eee7f1]">
                  <img
                    src={doctor.image || fallbackDoctors[index % fallbackDoctors.length].image}
                    alt={doctor.name}
                    className="team-doctor-image transition duration-500 hover:scale-[1.02]"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackDoctors[index % fallbackDoctors.length].image;
                    }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#31243b] shadow">{doctor.role}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-[#31243b] team-doctor-name">{doctor.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{doctor.experience}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {doctor.tags.map(tag => <span key={tag} className="rounded-full bg-[#fbe1dc] px-3 py-1 text-xs font-bold text-[#a84942]">{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {doctors.length > 3 && (
            <div className="mt-7 flex items-center justify-center gap-2">
              {doctors.map((_, index) => (
                <button key={index} onClick={() => setActiveDoctor(index)} aria-label={`Show team slide ${index + 1}`} className={`h-2.5 rounded-full transition-all ${activeDoctor === index ? 'w-8 bg-[#d65f55]' : 'w-2.5 bg-gray-300'}`} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="about-reveal mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 overflow-hidden rounded-[2rem] bg-[#f5dfdc] p-7 shadow-[0_18px_55px_rgba(49,36,59,.10)] sm:p-10 md:flex-row md:items-center">
          <div>
            <span className="about-kicker">READY WHEN YOU ARE</span>
            <h2 className="mt-2 max-w-2xl text-2xl font-black tracking-tight text-[#31243b] sm:text-3xl">Give your pet a calmer way to receive veterinary care.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#625660]">Book a convenient home visit or speak with our team about your pet's needs.</p>
          </div>
          <Link to="/appointment" className="about-primary-btn shrink-0">Book appointment <span>→</span></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
