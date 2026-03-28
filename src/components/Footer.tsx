export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="font-display text-4xl tracking-wider text-drp-red mb-6">DR PEPPER</div>
          <p className="text-white/50 max-w-sm">
            The oldest major soft drink in the United States. Still misunderstood. Still perfect.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-drp-red transition-colors">Products</a></li>
            <li><a href="#" className="hover:text-drp-red transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-drp-red transition-colors">Pepper Perks</a></li>
            <li><a href="#" className="hover:text-drp-red transition-colors">Store Locator</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-drp-red transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-drp-red transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-drp-red transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-drp-red transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© {new Date().getFullYear()} Dr Pepper/Seven Up, Inc.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
