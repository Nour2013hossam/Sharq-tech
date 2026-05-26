import React from 'react';
import Hero from '../components/landing/Hero';
import Fields from '../components/landing/Fields';
import Leaderboard from '../components/landing/Leaderboard';
import Members from '../components/landing/Members';
import Competitions from '../components/landing/Competitions';
import Courses from '../components/landing/Courses';
import Gallery from '../components/landing/Gallery';
import Contact from '../components/landing/Contact';

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <Fields />
      <Leaderboard />
      <Members />
      <Competitions />
      <Courses />
      <Gallery />
      <Contact />
    </div>
  );
}
