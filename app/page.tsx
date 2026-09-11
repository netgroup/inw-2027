import Image from 'next/image';
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';

const pendingItems = [
  { number: '01', title: 'Call for contributions', description: 'Submission topics, format and important dates will be announced shortly.' },
  { number: '02', title: 'Registration', description: 'Registration details and participation fees will be published here.' },
  { number: '03', title: 'Programme', description: 'Talks, sessions and social activities will follow as the programme takes shape.' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image className="heroImage" src="/inw-2027-hero.png" alt="An illustrated winter panorama inspired by the Brenta Dolomites" fill priority sizes="100vw" />
        <div className="heroShade" />
        <header className="siteHeader wrap">
          <a className="brand" href="#top" aria-label="INW 2027 home"><span>INW</span><span className="brandYear">2027</span></a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a><a href="#updates">Updates</a><a href="#venue">Venue</a>
            <a className="pastLink" href="https://inw.di.unito.it/" target="_blank" rel="noreferrer">2026 edition <ArrowUpRight aria-hidden="true" size={15} /></a>
          </nav>
        </header>
        <div className="heroContent wrap">
          <p className="eyebrow">23rd Italian Networking Workshop</p>
          <h1>Ideas connect<br />in the mountains.</h1>
          <div className="heroFacts" aria-label="Event details">
            <p><CalendarDays aria-hidden="true" />19—21 January 2027</p>
            <p><MapPin aria-hidden="true" />Madonna di Campiglio, Italy</p>
          </div>
        </div>
        <div className="heroFooter wrap"><p>Tuesday to Thursday</p><p>Hotel Carlo Magno</p></div>
      </section>

      <section className="intro wrap" id="about">
        <p className="sectionLabel">Save the date</p>
        <div className="introGrid">
          <h2>Three days for Italy’s networking research community.</h2>
          <div className="introCopy">
            <p>The 23rd Italian Networking Workshop brings together researchers, PhD students and professionals to share work in progress, exchange ideas and start new collaborations in an informal setting.</p>
            <p>INW 2027 will be hosted by the organizing committee from the University of Rome Tor Vergata. Further information will be published on this website as it becomes available.</p>
          </div>
        </div>
      </section>

      <section className="updates" id="updates"><div className="wrap">
        <div className="sectionHeading"><p className="sectionLabel">Coming shortly</p><h2>What’s next</h2></div>
        <div className="updateGrid">{pendingItems.map((item) => (
          <article className="updateCard" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="status">To be announced</span></article>
        ))}</div>
      </div></section>

      <section className="venue wrap" id="venue">
        <div className="venueTitle"><p className="sectionLabel">Workshop venue</p><h2>Hotel Carlo Magno</h2><p>Madonna di Campiglio · Trentino, Italy</p></div>
        <div className="dateBlock" aria-label="Workshop dates"><span>JAN</span><strong>19—21</strong><span>2027</span></div>
        <p className="venueNote">Venue, accommodation and travel information will be added shortly.</p>
      </section>

      <footer><div className="wrap footerInner"><a className="brand footerBrand" href="#top"><span>INW</span><span className="brandYear">2027</span></a><p>Italian Networking Workshop</p><p>Organized by Roma Tor Vergata</p></div></footer>
    </main>
  );
}
