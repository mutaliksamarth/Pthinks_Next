"use client"
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import PthinksLogo from '../assets/Home/pthinks-logo.webp'
import Link from "next/link";
import Image from "next/image";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({
    services: false,
    training: false,
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  //@ts-ignore
  const toggleExpanded = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      //@ts-ignore
      [item]: !prev[item]
    }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 bg-white/85 backdrop-blur-md p-4">
      <div className="mx-auto w-full">
      <nav className="px-4">
        <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center ">
          <Image className='max-w-[55px] ml-10' src={PthinksLogo} alt="" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex items-center gap-3">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base font-normal">
            Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-8 lg:w-[500px] lg:grid-cols-1">
              <ListItem href="/services/development" title="Software Development">
              Custom software solutions tailored to your needs
              </ListItem>
              <ListItem href="/services/quality" title="Code Quality Analysis">
              Comprehensive code review and optimization
              </ListItem>
            </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base font-normal">
            Training
            </NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px] lg:grid-cols-2">
              <ListItem href="/training/c" title="C Programming">
              Master the fundamentals of C programming
              </ListItem>
              <ListItem href="/training/cpp" title="Modern C++">
              Advanced C++ concepts and best practices
              </ListItem>
              <ListItem href="/training/qt" title="Qt Framework">
              Build cross-platform applications with Qt
              </ListItem>
              <ListItem href="/training/qml" title="QML Development">
              Create fluid user interfaces with QML
              </ListItem>
            </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {['Customers', 'About', 'Team', 'Reach us', 'Careers'].map((item) => (
            <NavigationMenuItem key={item}>
            <Link href={`/${item.toLowerCase()}`}>
              <NavigationMenuLink className="group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-1 text-base font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              {item}
              </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
          ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Sign In Button */}
        <div className="hidden lg:block">
          <Link
          href="/signin"
          className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
          >
          Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden p-1 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
          <X className="h-5 w-5" />
          ) : (
          <Menu className="h-5 w-5" />
          )}
        </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="mt-3 border-t border-gray-200 py-3">
          <div className="space-y-1">
          <div className="space-y-2">
            <button
            onClick={() => toggleExpanded('services')}
            className="flex w-full items-center justify-center py-1 text-base font-medium"
            >
            Services
            <ChevronDown className={`h-5 w-5 transition-transform ${expandedItems.services ? 'rotate-180' : ''}`} />
            </button>
            {expandedItems.services && (
            <div className="pl-4 space-y-1">
              <Link href="/services/development" className="block py-1 text-sm text-gray-600">
              Software Development
              </Link>
              <Link href="/services/quality" className="block py-1 text-sm text-gray-600">
              Code Quality Analysis
              </Link>
            </div>
            )}
          </div>

          <div className="space-y-2">
            <button
            onClick={() => toggleExpanded('training')}
            className="flex w-full items-center justify-center py-1 text-base font-medium"
            >
            Training
            <ChevronDown className={`h-5 w-5 transition-transform ${expandedItems.training ? 'rotate-180' : ''}`} />
            </button>
            {expandedItems.training && (
            <div className="pl-4 space-y-1">
              <Link href="/training/c" className="block py-1 text-sm text-gray-600">
              C Programming
              </Link>
              <Link href="/training/cpp" className="block py-1 text-sm text-gray-600">
              Modern C++
              </Link>
              <Link href="/training/c" className="block py-1 text-sm text-gray-600">
              Qt
              </Link>
              <Link href="/training/c" className="block py-1 text-sm text-gray-600">
              QML
              </Link>
            </div>
            )}
          </div>

          {['Customers', 'About', 'Team', 'Careers'].map((item) => (
            <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="block py-1 text-base font-medium"
            onClick={closeMenu}
            >
            {item}
            </Link>
          ))}

          <Link
            href="/signin"
            className="mt-3 block w-full rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-primary-foreground shadow"
            onClick={closeMenu}
          >
            Sign In
          </Link>
          </div>
        </div>
        </div>
      </nav>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationBar;
