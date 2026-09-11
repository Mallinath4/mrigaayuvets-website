import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/siteData';
import '../App.css';

const heroSlides = [
  { image:'/images/hero/hero-1.jpg', title:'Gentle care for every stage of life.', caption:'Wellness, treatment & home visits' },
  { image:'/images/hero/hero-2.jpg', title:'Calm, compassionate pet care.', caption:'A comfortable experience for pets' },
  { image:'/images/hero/hero-3.jpg', title:'Professional care, made simple.', caption:'From routine checks to urgent support' },
  { image:'/images/hero/hero-4.jpg', title:'Healthy pets. Happier families.', caption:'Preventive care & vaccination' }
];

const fallbackDoctors = [
  { name:'Dr. Siddheshwar Khonde', role:'BVSc & AH', image:'/images/siddhu.png', bio:'Small-animal care, preventive medicine and emergency support.' },
  { name:'Dr. Ganesh Jagtap', role:'Internal Medicine Specialist', image:'/images/Ganesh.jpg', bio:'Pet internal medicine, cardiology and long-term wellness.' },
  { name:'Dr. Ankit Chavan', role:'BVSc & AH', image:'/images/Aniket.jpg', bio:'Small-animal treatment and diagnostic support.' }
];

const testimonials = [
  { quote:'The team made our dog feel comfortable from the first minute. The guidance was clear and genuinely caring.', name:'Pet parent', meta:'Mumbai' },
  { quote:'Booking was simple and the home visit saved us a lot of stress. Professional, kind and easy to communicate with.', name:'Pet parent', meta:'Mumbai' },
  { quote:'We got practical advice instead of feeling rushed. It feels like a vet service that truly puts pets first.', name:'Pet parent', meta:'Mumbai' }
];

function Home(){
  const [doctors,setDoctors]=useState(fallbackDoctors);
  const [slide,setSlide]=useState(0);
  const [testimonial,setTestimonial]=useState(0);
  const [changing,setChanging]=useState(false);
  const services=useMemo(()=>Object.values(servicesData).slice(0,9),[]);

  useEffect(()=>{ fetch('/api/doctors').then(r=>r.ok?r.json():null).then(data=>{ if(data?.doctors?.length) setDoctors(data.doctors.slice(0,3).map(d=>({name:d.name,role:d.qualification||'Veterinarian',image:d.image||'/images/siddhu.png',bio:d.bio||`${d.experience||'Experienced'} veterinary care.`}))); }).catch(()=>{}); },[]);
  useEffect(() => {
    heroSlides.forEach(({ image }) => {
      const preload = new Image();
      preload.src = image;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => setSlide(v => (v + 1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, []);
  useEffect(()=>{ const id=setInterval(()=>setTestimonial(v=>(v+1)%testimonials.length),6500); return()=>clearInterval(id); },[]);
  const changeSlide=(next)=>{setChanging(true);setTimeout(()=>{setSlide(next);setChanging(false)},180)};
  const current=heroSlides[slide];
  const currentTestimonial=testimonials[testimonial];

  return <div className="site-page">
    <Helmet><title>MrigAayuvets | Compassionate Veterinary Care in Mumbai</title><meta name="description" content="Compassionate veterinary care for dogs, cats and companion animals in Mumbai. Home visits, vaccination, treatment, grooming, emergency support and more." /></Helmet>
    <Navbar />
    <main>
      <section className="hero-modern"><div className="container hero-grid">
        <div className="hero-copy-wrap"><span className="hero-kicker">🐾 Trusted pet care in Mumbai</span><h1 className="hero-title">Better care for <em>happier pets.</em></h1><p className="hero-copy">Professional veterinary care designed around your pet — from routine wellness and vaccination to treatment, grooming and convenient home visits.</p><div className="hero-actions"><Link className="btn-primary" to="/appointment">Book an appointment <span>→</span></Link><a className="btn-secondary" href="https://wa.me/918208657969?text=Hi%2C%20I%20need%20veterinary%20help%20for%20my%20pet" target="_blank" rel="noreferrer">WhatsApp our team</a></div><div className="hero-note"><span><i>✓</i> Experienced veterinarians</span><span><i>✓</i> Home visit options</span><span><i>✓</i> Emergency support</span></div></div>
        <div className="hero-image-wrap"><img className={`hero-image ${changing?'is-changing':''}`} src={current.image} alt={current.title} width="1600" height="900" fetchpriority="high" onError={(e)=>{e.currentTarget.src="/images/hero/hero-1.jpg";}} /><div className="hero-image-caption"><strong>{current.title}</strong><span>{current.caption}</span></div><div className="hero-dots" aria-label="Hero image controls">{heroSlides.map((_,i)=><button key={i} className={`hero-dot ${i===slide?'active':''}`} onClick={()=>changeSlide(i)} aria-label={`Show slide ${i+1}`} />)}</div></div>
      </div></section>

      <section className="trust-strip"><div className="container trust-grid"><div className="trust-item"><strong>12+</strong><span>Pet care services</span></div><div className="trust-item"><strong>24/7</strong><span>Emergency support</span></div><div className="trust-item"><strong>Home visits</strong><span>Convenient care</span></div><div className="trust-item"><strong>Pet first</strong><span>Gentle approach</span></div></div></section>

      <section className="section"><div className="container"><div className="section-heading center"><span className="eyebrow">Our services</span><h2>Complete care, from everyday wellness to urgent needs</h2><p>Choose the care your pet needs and book directly with our veterinary team.</p></div><div className="service-grid">{services.map(s=><article className="service-card-modern" key={s.id}><img src={s.image} alt={s.title} loading="lazy"/><div className="service-card-body"><h3>{s.title}</h3><p>{s.description}</p><Link className="text-link" to={s.route}>Explore service →</Link></div></article>)}</div><div style={{textAlign:'center',marginTop:30}}><Link className="btn-secondary" to="/services">View all services</Link></div></div></section>

      <section className="section" style={{background:'#fff5f0'}}><div className="container split-section"><div><span className="eyebrow">Why MrigAayuvets</span><div className="section-heading"><h2>Veterinary care that feels personal.</h2><p>Pets are family. Our goal is to make professional care easier to access while keeping every visit calm, practical and focused on your pet.</p></div><ul className="feature-list"><li><b>✓</b><span>Clear guidance for preventive care, nutrition and follow-ups.</span></li><li><b>✓</b><span>Home visit options that reduce travel stress for pets.</span></li><li><b>✓</b><span>Support for routine treatment and urgent concerns.</span></li><li><b>✓</b><span>Simple appointment booking by website, phone or WhatsApp.</span></li></ul><div style={{marginTop:26}}><Link className="btn-primary" to="/about">Meet our team</Link></div></div><img className="about-photo" src="/images/care.jpeg" alt="Veterinarian caring for a pet" loading="lazy"/></div></section>

      <section className="section"><div className="container"><div className="section-heading center"><span className="eyebrow">Our veterinarians</span><h2>Experienced people behind the care</h2><p>Meet the team helping pet parents make confident healthcare decisions.</p></div><div className="doctor-grid">{doctors.map((d,i)=><article className="doctor-card" key={d.name||i}><img src={d.image} alt={d.name} loading="lazy"/><h3>{d.name}</h3><p style={{color:'var(--accent-dark)',fontWeight:700}}>{d.role}</p><p>{d.bio}</p></article>)}</div></div></section>

      <section className="section testimonial-section"><div className="container testimonial-shell"><div><span className="eyebrow">Pet parent stories</span><div className="section-heading"><h2>Care that leaves a good feeling.</h2><p>Small details matter: a calmer visit, clear communication and practical next steps for your pet.</p></div><div className="slider-controls"><button onClick={()=>setTestimonial((testimonial-1+testimonials.length)%testimonials.length)} aria-label="Previous testimonial">←</button><button onClick={()=>setTestimonial((testimonial+1)%testimonials.length)} aria-label="Next testimonial">→</button></div></div><div className="testimonial-card"><div className="quote-mark">“</div><blockquote>{currentTestimonial.quote}</blockquote><div className="testimonial-person"><div><strong>{currentTestimonial.name}</strong><span>{currentTestimonial.meta}</span></div><span>{testimonial+1} / {testimonials.length}</span></div></div></div></section>

      <section className="section" style={{paddingTop:20}}><div className="container"><div className="cta-band"><div><span className="eyebrow" style={{color:'#f5b8a8'}}>Ready when you are</span><h2>Give your pet the care they deserve.</h2><p>Book a consultation or message our team for help choosing the right service.</p></div><div className="hero-actions" style={{marginTop:0}}><Link className="btn-secondary" to="/appointment">Book appointment</Link><a className="btn-secondary" href="tel:+918208657969">Call +91 82086 57969</a></div></div></div></section>
    </main>
    <Footer />
  </div>;
}
export default Home;
