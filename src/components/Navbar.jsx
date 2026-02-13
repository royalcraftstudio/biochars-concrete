import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'ปัญหา', href: '#problems' },
    { label: 'บทนำ', href: '#introduction' },
    { label: 'ประโยชน์', href: '#benefits' },
    { label: 'ขั้นตอน', href: '#operation' },
    { label: 'ผลการทดลอง', href: '#results' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
            งานวิจัยคอนกรีตไบโอชาร์
          </h1>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;