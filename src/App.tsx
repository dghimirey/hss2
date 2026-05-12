/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

// Lazy load sections below the fold
const About = lazy(() => import('./sections/About'));
const Academics = lazy(() => import('./sections/Academics'));
const Faculty = lazy(() => import('./sections/Faculty'));
const Facilities = lazy(() => import('./sections/Facilities'));
const Gallery = lazy(() => import('./sections/Gallery'));
const NoticeNews = lazy(() => import('./sections/NoticeNews'));

const Contact = lazy(() => import('./sections/Contact'));

function LoadingSection() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Artistic Background Blobs */}
      <div className="fixed top-[-100px] right-[-100px] w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<LoadingSection />}>
            <About />
            <Academics />
            <Faculty />
            <Facilities />
            <Gallery />
            <NoticeNews />

            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}

