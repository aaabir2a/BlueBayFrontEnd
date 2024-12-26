import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const companyLinks = [
  { title: "HOME", href: "/Home" },
  { title: "About", href: "/About" },
  { title: "Services", href: "/Services" },
  { title: "Portfolio", href: "/Portfolio" },
  { title: "Why Choose Us", href: "/why-choose-us" },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#001B44] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="BlueBayIT Logo"
                width={150}
                height={50}
                
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Happen active county. Winding for the morning am shyness evident
              to poor. Garrets because elderly new.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BD Contact Info */}

          <div>
            <h3 className="text-xl font-bold mb-6">Dhaka Office</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  250/6Road No: 06, Smriti Dhara, Japani Bazar,Shonirakhra,
                  Jatra Bari,Dhaka-1236, Bangladesh.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>admin@bluebayit.com</div>
                  <div>support@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>+8801861650206</div>
                </div>
              </li>
            </ul>
          </div>

          {/* UK Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">UK Office</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  80-82 Nelson Street London E1 2DY United Kingdom
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>admin@bluebayit.com</div>
                  <div>support@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>+447539045858</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-gray-400 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          {/* Left Section */}
          <p className="text-sm text-center sm:text-left">
            © 2024{" "}
            <span className="text-white font-semibold">Bluebay IT Limited</span>
            . All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="mt-4 sm:mt-0 flex justify-center gap-4">
            {[
              { Icon: Facebook, link: "#" },
              { Icon: Twitter, link: "#" },
              { Icon: Linkedin, link: "#" },
              { Icon: Mail, link: "#" },
            ].map((social, index) => {
              const { Icon, link } = social;
              return (
                <a
                  href={link}
                  key={index}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-all transform hover:scale-110 text-gray-400 hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
