export const Footer = () => {
  return (
    <footer className="w-full bg-black/10 border-t border-white/10 text-md text-gray-400 py-6 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>
          © {new Date().getFullYear()} Tanya Paul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
