import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-stone-50 px-4">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl">🌳</span>
        </div>
        
        <h1 className="font-display text-6xl font-bold text-forest-950 mb-4">404</h1>
        <h2 className="font-display text-2xl font-semibold text-forest-800 mb-4">Page Not Found</h2>
        
        <p className="text-stone-600 mb-8">
          Oops! The page you're looking for seems to have wandered off into the garden. 
          Let's get you back on the right path.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link 
            href="/cities/southlake"
            className="btn-outline flex items-center justify-center gap-2"
          >
            <Search size={18} />
            View Services
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-200">
          <p className="text-sm text-stone-500 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/cities/southlake" className="text-forest-700 hover:text-forest-600 text-sm">
              Southlake Services
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/cities/keller" className="text-forest-700 hover:text-forest-600 text-sm">
              Keller Services
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/blog" className="text-forest-700 hover:text-forest-600 text-sm">
              Blog
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/#contact" className="text-forest-700 hover:text-forest-600 text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



