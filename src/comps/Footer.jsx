import { Leaf } from "lucide-react"
import { AnimatedIcon } from "./AnimatedIcon"

export const Footer = () => {
  return (
    <footer className="w-full bg-black/10 border-t border-white/10 text-md text-gray-400 py-6 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="flex items-center gap-2">
          <AnimatedIcon icon={Leaf} variant="rustle" size={16} className="text-[#8A8635]" />
          © {new Date().getFullYear()} Tanya Paul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
