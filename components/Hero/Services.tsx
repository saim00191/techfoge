// "use client"

// import type React from "react"
// import { useCallback, useEffect, useRef, useState } from "react"

// // Service icons as inline SVG components for better performance
// const CodeIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <polyline points="16,18 22,12 16,6" />
//     <polyline points="8,6 2,12 8,18" />
//   </svg>
// )

// const GlobeIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="10" />
//     <line x1="2" y1="12" x2="22" y2="12" />
//     <path d="M12,2 C14.5,6 14.5,18 12,22 C9.5,18 9.5,6 12,2 Z" />
//   </svg>
// )

// const SmartphoneIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
//     <line x1="12" y1="18" x2="12.01" y2="18" />
//   </svg>
// )

// const WordpressIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//     <path d="M7,7 L17,7" />
//     <path d="M7,12 L17,12" />
//     <path d="M7,17 L17,17" />
//   </svg>
// )

// const SearchIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="11" cy="11" r="8" />
//     <path d="M21,21 L16.65,16.65" />
//   </svg>
// )

// const VideoIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <polygon points="23,7 16,12 23,17 23,7" />
//     <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
//   </svg>
// )

// const PaletteIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="13.5" cy="6.5" r=".5" />
//     <circle cx="17.5" cy="10.5" r=".5" />
//     <circle cx="8.5" cy="7.5" r=".5" />
//     <circle cx="6.5" cy="12.5" r=".5" />
//     <path d="M12,2 C13.5,2 22,8.5 22,15.5 C22,18.5 19.5,21 16.5,21 C15.5,21 14.5,20.5 14,19.5 C13.5,18.5 13.5,17.5 14,16.5 C14.5,15.5 15,14.5 15,13.5 C15,12.5 14.5,12 13.5,12 L12,12 C6.5,12 2,8.5 2,5 C2,3.5 3.5,2 5,2 L12,2 Z" />
//   </svg>
// )

// const ShoppingCartIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="9" cy="21" r="1" />
//     <circle cx="20" cy="21" r="1" />
//     <path d="M1,1 L5,1 L7,13 L19,13" />
//     <path d="M7,13 L5.68,4.68 C5.47,3.68 4.62,3 3.58,3 L1,3" />
//   </svg>
// )

// const BotIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
//     <circle cx="12" cy="5" r="2" />
//     <path d="M12,7 L12,11" />
//     <line x1="8" y1="16" x2="8" y2="16" />
//     <line x1="16" y1="16" x2="16" y2="16" />
//   </svg>
// )

// const WrenchIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path d="M14.7,6.3 C16.1,7.7 16.1,10 14.7,11.4 L11.4,14.7 C10,16.1 7.7,16.1 6.3,14.7 C4.9,13.3 4.9,11 6.3,9.6 L9.6,6.3 C11,4.9 13.3,4.9 14.7,6.3 Z" />
//     <path d="M15.5,6.5 L20.5,1.5" />
//     <path d="M7,17 L9,19" />
//   </svg>
// )

// const services = [
//   {
//     icon: CodeIcon,
//     name: "Custom Software Development",
//     id: "custom-software",
//     description: "Tailored software solutions built to your exact specifications",
//     color: "#FF6B6B",
//   },
//   {
//     icon: GlobeIcon,
//     name: "Web Development",
//     id: "web-dev",
//     description: "Modern, responsive websites that drive results",
//     color: "#4ECDC4",
//   },
//   {
//     icon: SmartphoneIcon,
//     name: "Mobile App Development",
//     id: "mobile-dev",
//     description: "Native and cross-platform mobile applications",
//     color: "#45B7D1",
//   },
//   {
//     icon: WordpressIcon,
//     name: "WordPress Development",
//     id: "wordpress",
//     description: "Custom WordPress themes and plugin development",
//     color: "#96CEB4",
//   },
//   {
//     icon: SearchIcon,
//     name: "SEO",
//     id: "seo",
//     description: "Search engine optimization to boost your visibility",
//     color: "#FFEAA7",
//   },
//   {
//     icon: VideoIcon,
//     name: "Video Editing",
//     id: "video-editing",
//     description: "Professional video editing and post-production",
//     color: "#DDA0DD",
//   },
//   {
//     icon: PaletteIcon,
//     name: "Graphic Designing",
//     id: "graphic-design",
//     description: "Creative visual designs that capture attention",
//     color: "#98D8C8",
//   },
//   {
//     icon: ShoppingCartIcon,
//     name: "E-Commerce Development",
//     id: "ecommerce",
//     description: "Complete e-commerce solutions for online success",
//     color: "#F7DC6F",
//   },
//   {
//     icon: BotIcon,
//     name: "AI Solutions",
//     id: "ai-solutions",
//     description: "Cutting-edge AI integration and automation",
//     color: "#BB8FCE",
//   },
//   {
//     icon: WrenchIcon,
//     name: "Maintenance & Technical Support",
//     id: "maintenance",
//     description: "Ongoing support and maintenance services",
//     color: "#85C1E9",
//   },
// ]

// // Triple the services for seamless infinite loop
// const extendedServices = [...services, ...services, ...services]

// export default function ServicesCarousel() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [isPaused, setIsPaused] = useState(false)
//   const [selectedService, setSelectedService] = useState<string | null>(null)
//   const [hoveredService, setHoveredService] = useState<string | null>(null)
//   const [currentTransform, setCurrentTransform] = useState(0)

//   const sectionRef = useRef<HTMLElement>(null)
//   const carouselRef = useRef<HTMLDivElement>(null)
//   const animationRef = useRef<number>()
//   const startTimeRef = useRef<number>(Date.now())
//   const pausedAtRef = useRef<number>(0)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   // Enhanced smooth animation with pause/resume functionality
//   useEffect(() => {
//     if (!isVisible) return

//     const animate = () => {
//       if (!isPaused) {
//         const now = Date.now()
//         const elapsed = now - startTimeRef.current

//         // Calculate the transform value (moving left)
//         // Complete cycle in 30 seconds, moving through 33.333% (one third of the tripled content)
//         const progress = (elapsed / 30000) % 1
//         const transform = -(progress * 33.333)

//         setCurrentTransform(transform)

//         if (carouselRef.current) {
//           carouselRef.current.style.transform = `translate3d(${transform}%, 0, 0)`
//         }
//       }

//       animationRef.current = requestAnimationFrame(animate)
//     }

//     animationRef.current = requestAnimationFrame(animate)

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current)
//       }
//     }
//   }, [isVisible, isPaused])

//   const handleServiceClick = useCallback(
//     (service: (typeof services)[0]) => {
//       setSelectedService(selectedService === service.id ? null : service.id)
//       // Add haptic feedback for mobile devices
//       if ("vibrate" in navigator) {
//         navigator.vibrate(50)
//       }
//     },
//     [selectedService],
//   )

//   const handleKeyDown = (event: React.KeyboardEvent, service: (typeof services)[0]) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault()
//       handleServiceClick(service)
//     }
//   }

//   const handleMouseEnter = useCallback(
//     (serviceId: string) => {
//       if (!isPaused) {
//         // Store the current position when pausing
//         pausedAtRef.current = Date.now()
//       }
//       setIsPaused(true)
//       setHoveredService(serviceId)
//     },
//     [isPaused],
//   )

//   const handleMouseLeave = useCallback(() => {
//     if (isPaused) {
//       // Calculate how long we were paused and adjust the start time
//       const pauseDuration = Date.now() - pausedAtRef.current
//       startTimeRef.current += pauseDuration
//     }
//     setIsPaused(false)
//     setHoveredService(null)
//   }, [isPaused])

//   return (
//     <div className="w-full" style={{ backgroundColor: "#020A15" }}>
//       {/* Enhanced Custom Styles */}
//       <style jsx>{`
//         @keyframes wave {
//           0%, 100% {
//             transform: translateX(-100%);
//           }
//           50% {
//             transform: translateX(100%);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.4;
//           }
//           50% {
//             opacity: 1;
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes glow {
//           0%, 100% {
//             box-shadow: 0 0 20px #00D1FF40;
//           }
//           50% {
//             box-shadow: 0 0 40px #00D1FF80, 0 0 60px #00D1FF40;
//           }
//         }

//         .animate-wave {
//           animation: wave 2s ease-in-out infinite;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-glow {
//           animation: glow 2s ease-in-out infinite;
//         }

//         .will-change-transform {
//           will-change: transform;
//         }

//         /* Interactive card effects */
//         .service-card {
//           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//         }

//         .service-card:hover {
//           transform: scale(1.08) translateY(-8px);
//         }

//         .service-card.selected {
//           transform: scale(1.1) translateY(-12px);
//           box-shadow: 0 20px 40px #00D1FF60, 0 0 0 2px #00D1FF;
//         }

//         /* Enhanced scrollbar */
//         ::-webkit-scrollbar {
//           width: 8px;
//           height: 8px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #020a15;
//           border-radius: 4px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(45deg, #00d1ff, #0099cc);
//           border-radius: 4px;
//           transition: all 0.3s ease;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(45deg, #00d1ff, #00b8e6);
//           box-shadow: 0 0 12px #00d1ff60;
//         }

//         /* Reduce motion for accessibility */
//         @media (prefers-reduced-motion: reduce) {
//           * {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }

//         /* Enhanced touch interactions */
//         @media (hover: none) and (pointer: coarse) {
//           .service-card:hover {
//             transform: none;
//           }

//           .service-card:active {
//             transform: scale(1.05) translateY(-4px);
//           }
//         }
//       `}</style>

//       <section
//         ref={sectionRef}
//         className="relative w-full py-20 px-4 overflow-hidden"
//         style={{ backgroundColor: "#020A15" }}
//         aria-labelledby="services-heading"
//       >
//         {/* Enhanced background effects */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5" />
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00D1FF]/5 rounded-full blur-2xl animate-float" />

//         <div className="relative ">
//           {/* Enhanced Animated Header */}
//           <div
//             className={`text-center mb-16 transition-all duration-1000 ease-out ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             <h1
//               id="services-heading"
//               className="text-5xl md:text-6xl font-bold text-white mb-4 animate-float"
//               style={{ fontFamily: "Poppins, sans-serif" }}
//             >
//               Services We Offer
//             </h1>
//             <p className="text-xl md:text-2xl mb-6" style={{ color: "#00D1FF", fontFamily: "Poppins, sans-serif" }}>
//               Empowering businesses through digital excellence
//             </p>

//             {/* Enhanced animated underline */}
//             <div className="relative w-32 h-1 mx-auto">
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent animate-pulse" />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] to-transparent animate-wave" />
//             </div>
//           </div>

//           {/* Enhanced Carousel Container */}
//           <div className="relative">
//             {/* Enhanced gradient overlays */}
//             <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-[#020A15] via-[#020A15]/90 to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#020A15] via-[#020A15]/90 to-transparent z-10 pointer-events-none" />

//             {/* Enhanced Carousel Track */}
//             <div
//               ref={carouselRef}
//               className={`flex gap-6 md:gap-8 transition-all duration-1000 ease-out will-change-transform ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//               }`}
//               role="region"
//               aria-label="Interactive services carousel"
//               style={{
//                 transform: `translate3d(${currentTransform}%, 0, 0)`,
//               }}
//             >
//               {extendedServices.map((service, index) => {
//                 const IconComponent = service.icon
//                 const delay = (index % services.length) * 100
//                 const isSelected = selectedService === service.id
//                 const isHovered = hoveredService === service.id

//                 return (
//                   <div
//                     key={`${service.id}-${index}`}
//                     className={`flex-shrink-0 group cursor-pointer transition-all duration-1000 ease-out will-change-transform ${
//                       isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                     }`}
//                     style={{
//                       transitionDelay: `${delay}ms`,
//                     }}
//                     tabIndex={0}
//                     role="button"
//                     aria-label={`Learn more about ${service.name}`}
//                     aria-pressed={isSelected}
//                     onKeyDown={(e) => handleKeyDown(e, service)}
//                     onClick={() => handleServiceClick(service)}
//                     onMouseEnter={() => handleMouseEnter(service.id)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     {/* Enhanced Service Card */}
//                     <div
//                       className={`service-card relative w-48 md:w-56 h-64 md:h-72 rounded-2xl bg-gradient-to-br from-[#00D1FF]/10 to-[#00D1FF]/5 border border-[#00D1FF]/20 backdrop-blur-sm ${
//                         isSelected ? "selected animate-glow" : ""
//                       } ${isHovered ? "animate-float" : ""}`}
//                     >
//                       {/* Enhanced glow effect */}
//                       <div
//                         className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D1FF]/20 to-transparent transition-opacity duration-300 ${
//                           isHovered || isSelected ? "opacity-100" : "opacity-0"
//                         }`}
//                       />

//                       {/* Animated border */}
//                       {isSelected && (
//                         <div className="absolute inset-0 rounded-2xl border-2 border-[#00D1FF] animate-pulse" />
//                       )}

//                       {/* Card Content */}
//                       <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
//                         {/* Enhanced Icon Container */}
//                         <div
//                           className={`mb-6 p-4 rounded-full bg-gradient-to-br from-[#00D1FF]/20 to-[#00D1FF]/10 border border-[#00D1FF]/30 transition-all duration-300 ${
//                             isHovered || isSelected ? "border-[#00D1FF]/80 scale-110" : ""
//                           }`}
//                         >
//                           <IconComponent
//                             className={`w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ${
//                               isHovered || isSelected ? "text-white scale-110" : "text-[#00D1FF]"
//                             }`}
//                           />
//                         </div>

//                         {/* Service Name */}
//                         <h3
//                           className={`text-lg md:text-xl font-bold leading-tight transition-all duration-300 ${
//                             isHovered || isSelected ? "text-[#00D1FF] scale-105" : "text-white"
//                           }`}
//                           style={{ fontFamily: "Poppins, sans-serif" }}
//                         >
//                           {service.name}
//                         </h3>

//                         {/* Enhanced accent line */}
//                         <div
//                           className={`mt-4 h-0.5 bg-gradient-to-r from-transparent to-transparent transition-all duration-300 ${
//                             isHovered || isSelected ? "w-16 via-[#00D1FF] animate-pulse" : "w-12 via-[#00D1FF]/50"
//                           }`}
//                         />

//                         {/* Service description (shows on selection) */}
//                         {isSelected && (
//                           <p
//                             className="mt-3 text-sm text-[#D1D5DB] opacity-0 animate-pulse"
//                             style={{
//                               fontFamily: "Poppins, sans-serif",
//                               animation: "fadeIn 0.5s ease-in-out 0.2s forwards",
//                             }}
//                           >
//                             {service.description}
//                           </p>
//                         )}
//                       </div>

//                       {/* Enhanced corner accent */}
//                       <div
//                         className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
//                           isHovered || isSelected
//                             ? "bg-[#00D1FF] shadow-[0_0_12px_#00D1FF] scale-150"
//                             : "bg-[#00D1FF]/60"
//                         }`}
//                       />

//                       {/* Interactive pulse effect */}
//                       {isHovered && (
//                         <div className="absolute inset-0 rounded-2xl border border-[#00D1FF]/50 animate-ping" />
//                       )}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Enhanced Bottom CTA */}
//           <div
//             className={`text-center mt-16 transition-all duration-1000 ease-out ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "800ms" }}
//           >
//             <p className="text-[#D1D5DB] text-lg mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
//               Ready to transform your business with cutting-edge technology?
//             </p>
//             <button
//               className="px-8 py-3 bg-gradient-to-r from-[#00D1FF] to-[#00D1FF]/80 text-[#020A15] font-bold rounded-full hover:shadow-[0_0_30px_#00D1FF80] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#020A15] animate-float"
//               style={{ fontFamily: "Poppins, sans-serif" }}
//               onClick={() => {
//                 console.log("Get Started clicked")
//                 if ("vibrate" in navigator) {
//                   navigator.vibrate([100, 50, 100])
//                 }
//               }}
//             >
//               Get Started Today
//             </button>
//           </div>

//           {/* Service counter and status */}
//           <div className="text-center mt-8">
//             <p className="text-[#00D1FF]/60 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
//               {selectedService
//                 ? `Selected: ${services.find((s) => s.id === selectedService)?.name}`
//                 : `${services.length} Services Available`}
//             </p>
//             {isPaused && (
//               <p className="text-[#00D1FF]/40 text-xs mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
//                 Carousel paused - hover away to resume
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Add fadeIn animation */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   )
// }







// "use client"

// import type React from "react"
// import { useCallback, useEffect, useRef, useState } from "react"

// // Service icons as inline SVG components
// const CodeIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <polyline points="16,18 22,12 16,6" />
//     <polyline points="8,6 2,12 8,18" />
//   </svg>
// )

// const GlobeIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="10" />
//     <line x1="2" y1="12" x2="22" y2="12" />
//     <path d="M12,2 C14.5,6 14.5,18 12,22 C9.5,18 9.5,6 12,2 Z" />
//   </svg>
// )

// const SmartphoneIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
//     <line x1="12" y1="18" x2="12.01" y2="18" />
//   </svg>
// )

// const WordpressIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//     <path d="M7,7 L17,7" />
//     <path d="M7,12 L17,12" />
//     <path d="M7,17 L17,17" />
//   </svg>
// )

// const SearchIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="11" cy="11" r="8" />
//     <path d="M21,21 L16.65,16.65" />
//   </svg>
// )

// const VideoIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <polygon points="23,7 16,12 23,17 23,7" />
//     <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
//   </svg>
// )

// const PaletteIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="13.5" cy="6.5" r=".5" />
//     <circle cx="17.5" cy="10.5" r=".5" />
//     <circle cx="8.5" cy="7.5" r=".5" />
//     <circle cx="6.5" cy="12.5" r=".5" />
//     <path d="M12,2 C13.5,2 22,8.5 22,15.5 C22,18.5 19.5,21 16.5,21 C15.5,21 14.5,20.5 14,19.5 C13.5,18.5 13.5,17.5 14,16.5 C14.5,15.5 15,14.5 15,13.5 C15,12.5 14.5,12 13.5,12 L12,12 C6.5,12 2,8.5 2,5 C2,3.5 3.5,2 5,2 L12,2 Z" />
//   </svg>
// )

// const ShoppingCartIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="9" cy="21" r="1" />
//     <circle cx="20" cy="21" r="1" />
//     <path d="M1,1 L5,1 L7,13 L19,13" />
//     <path d="M7,13 L5.68,4.68 C5.47,3.68 4.62,3 3.58,3 L1,3" />
//   </svg>
// )

// const BotIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
//     <circle cx="12" cy="5" r="2" />
//     <path d="M12,7 L12,11" />
//     <line x1="8" y1="16" x2="8" y2="16" />
//     <line x1="16" y1="16" x2="16" y2="16" />
//   </svg>
// )

// const WrenchIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path d="M14.7,6.3 C16.1,7.7 16.1,10 14.7,11.4 L11.4,14.7 C10,16.1 7.7,16.1 6.3,14.7 C4.9,13.3 4.9,11 6.3,9.6 L9.6,6.3 C11,4.9 13.3,4.9 14.7,6.3 Z" />
//     <path d="M15.5,6.5 L20.5,1.5" />
//     <path d="M7,17 L9,19" />
//   </svg>
// )

// const services = [
//   {
//     icon: CodeIcon,
//     name: "Custom Software Development",
//     id: "custom-software",
//     description: "Tailored software solutions built to your exact specifications",
//     code: "DEV_001",
//   },
//   {
//     icon: GlobeIcon,
//     name: "Web Development",
//     id: "web-dev",
//     description: "Modern, responsive websites that drive results",
//     code: "WEB_002",
//   },
//   {
//     icon: SmartphoneIcon,
//     name: "Mobile App Development",
//     id: "mobile-dev",
//     description: "Native and cross-platform mobile applications",
//     code: "MOB_003",
//   },
//   {
//     icon: WordpressIcon,
//     name: "WordPress Development",
//     id: "wordpress",
//     description: "Custom WordPress themes and plugin development",
//     code: "WP_004",
//   },
//   {
//     icon: SearchIcon,
//     name: "SEO Optimization",
//     id: "seo",
//     description: "Search engine optimization to boost your visibility",
//     code: "SEO_005",
//   },
//   {
//     icon: VideoIcon,
//     name: "Video Editing",
//     id: "video-editing",
//     description: "Professional video editing and post-production",
//     code: "VID_006",
//   },
//   {
//     icon: PaletteIcon,
//     name: "Graphic Design",
//     id: "graphic-design",
//     description: "Creative visual designs that capture attention",
//     code: "GFX_007",
//   },
//   {
//     icon: ShoppingCartIcon,
//     name: "E-Commerce Solutions",
//     id: "ecommerce",
//     description: "Complete e-commerce solutions for online success",
//     code: "ECM_008",
//   },
//   {
//     icon: BotIcon,
//     name: "AI Integration",
//     id: "ai-solutions",
//     description: "Cutting-edge AI integration and automation",
//     code: "AI_009",
//   },
//   {
//     icon: WrenchIcon,
//     name: "Technical Support",
//     id: "maintenance",
//     description: "Ongoing support and maintenance services",
//     code: "SUP_010",
//   },
// ]

// // Triple the services for seamless infinite loop
// const extendedServices = [...services, ...services, ...services]

// export default function ServicesCarousel() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [isPaused, setIsPaused] = useState(false)
//   const [selectedService, setSelectedService] = useState<string | null>(null)
//   const [hoveredService, setHoveredService] = useState<string | null>(null)
//   const [currentTransform, setCurrentTransform] = useState(0)

//   const sectionRef = useRef<HTMLElement>(null)
//   const carouselRef = useRef<HTMLDivElement>(null)
//   const animationRef = useRef<number>()
//   const startTimeRef = useRef<number>(Date.now())
//   const pausedAtRef = useRef<number>(0)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   // Smooth animation with pause/resume functionality
//   useEffect(() => {
//     if (!isVisible) return

//     const animate = () => {
//       if (!isPaused) {
//         const now = Date.now()
//         const elapsed = now - startTimeRef.current

//         // Complete cycle in 30 seconds
//         const progress = (elapsed / 30000) % 1
//         const transform = -(progress * 33.333)

//         setCurrentTransform(transform)

//         if (carouselRef.current) {
//           carouselRef.current.style.transform = `translate3d(${transform}%, 0, 0)`
//         }
//       }

//       animationRef.current = requestAnimationFrame(animate)
//     }

//     animationRef.current = requestAnimationFrame(animate)

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current)
//       }
//     }
//   }, [isVisible, isPaused])

//   const handleServiceClick = useCallback(
//     (service: (typeof services)[0]) => {
//       setSelectedService(selectedService === service.id ? null : service.id)
//       if ("vibrate" in navigator) {
//         navigator.vibrate(50)
//       }
//     },
//     [selectedService],
//   )

//   const handleKeyDown = (event: React.KeyboardEvent, service: (typeof services)[0]) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault()
//       handleServiceClick(service)
//     }
//   }

//   const handleMouseEnter = useCallback(
//     (serviceId: string) => {
//       if (!isPaused) {
//         pausedAtRef.current = Date.now()
//       }
//       setIsPaused(true)
//       setHoveredService(serviceId)
//     },
//     [isPaused],
//   )

//   const handleMouseLeave = useCallback(() => {
//     if (isPaused) {
//       const pauseDuration = Date.now() - pausedAtRef.current
//       startTimeRef.current += pauseDuration
//     }
//     setIsPaused(false)
//     setHoveredService(null)
//   }, [isPaused])

//   return (
//     <div className="w-full min-h-screen" style={{ backgroundColor: "#020A15" }}>
//       {/* Custom Cyberpunk Styles */}
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&family=Poppins:wght@400;600;700;800&display=swap');

//         @keyframes hologram-flicker {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.8; }
//           75% { opacity: 0.9; }
//         }

//         @keyframes neon-pulse {
//           0%, 100% { 
//             filter: drop-shadow(0 0 5px #00D1FF) drop-shadow(0 0 10px #00D1FF) drop-shadow(0 0 15px #00D1FF);
//           }
//           50% { 
//             filter: drop-shadow(0 0 10px #00D1FF) drop-shadow(0 0 20px #00D1FF) drop-shadow(0 0 30px #00D1FF);
//           }
//         }

//         @keyframes cyber-scan {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         @keyframes holographic-border {
//           0% { border-color: #00D1FF; }
//           25% { border-color: #00A8CC; }
//           50% { border-color: #0080A0; }
//           75% { border-color: #00A8CC; }
//           100% { border-color: #00D1FF; }
//         }

//         @keyframes data-stream {
//           0% { background-position: 0% 0%; }
//           100% { background-position: 100% 100%; }
//         }

//         @keyframes float-cyber {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-15px) rotate(1deg); }
//           66% { transform: translateY(-5px) rotate(-1deg); }
//         }

//         .hologram-flicker {
//           animation: hologram-flicker 3s ease-in-out infinite;
//         }

//         .neon-pulse {
//           animation: neon-pulse 2s ease-in-out infinite;
//         }

//         .cyber-scan {
//           position: relative;
//           overflow: hidden;
//         }

//         .cyber-scan::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, #00D1FF, transparent);
//           animation: cyber-scan 3s ease-in-out infinite;
//         }

//         .holographic-border {
//           animation: holographic-border 4s ease-in-out infinite;
//         }

//         .data-stream {
//           background: linear-gradient(45deg, transparent 30%, #00D1FF20 50%, transparent 70%);
//           background-size: 200% 200%;
//           animation: data-stream 3s linear infinite;
//         }

//         .float-cyber {
//           animation: float-cyber 6s ease-in-out infinite;
//         }

//         .service-card {
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           transform-style: preserve-3d;
//           position: relative;
//         }

//         .service-card:hover {
//           transform: translateY(-10px) scale(1.02);
//         }

//         .service-card.selected {
//           transform: translateY(-15px) scale(1.05);
//         }

//         .service-card::before {
//           content: '';
//           position: absolute;
//           inset: -2px;
//           background: linear-gradient(45deg, #00D1FF, transparent, #00D1FF);
//           border-radius: inherit;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           z-index: -1;
//         }

//         .service-card:hover::before,
//         .service-card.selected::before {
//           opacity: 1;
//         }

//         .glitch-text {
//           position: relative;
//         }

//         .glitch-text::before,
//         .glitch-text::after {
//           content: attr(data-text);
//           position: absolute;
//           top: 0;
//           left: 0;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }

//         .glitch-text:hover::before {
//           opacity: 0.1;
//           color: #00D1FF;
//           transform: translate(-2px, -2px);
//           animation: hologram-flicker 0.5s ease-in-out;
//         }

//         .glitch-text:hover::after {
//           opacity: 0.1;
//           color: #FF0080;
//           transform: translate(2px, 2px);
//           animation: hologram-flicker 0.7s ease-in-out;
//         }

//         /* Reduce motion for accessibility */
//         @media (prefers-reduced-motion: reduce) {
//           * {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>

//       <section
//         ref={sectionRef}
//         className="relative w-full py-24 px-4 overflow-hidden"
//         aria-labelledby="services-heading"
//       >
//         {/* Cyberpunk Background Elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Grid Pattern */}
//           <div
//             className="absolute inset-0 opacity-10"
//             style={{
//               backgroundImage: `
//                 linear-gradient(#00D1FF 1px, transparent 1px),
//                 linear-gradient(90deg, #00D1FF 1px, transparent 1px)
//               `,
//               backgroundSize: "50px 50px",
//             }}
//           />

//           {/* Floating Holographic Elements */}
//           <div className="absolute top-20 left-10 w-64 h-64 border border-[#00D1FF] rounded-full opacity-20 float-cyber" />
//           <div
//             className="absolute bottom-20 right-10 w-48 h-48 border border-[#00D1FF] opacity-15 float-cyber"
//             style={{ animationDelay: "2s", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
//           />
//           <div
//             className="absolute top-1/2 left-1/4 w-32 h-32 border border-[#00D1FF] opacity-10 float-cyber"
//             style={{ animationDelay: "4s", transform: "rotate(45deg)" }}
//           />

//           {/* Scanning Lines */}
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-50 cyber-scan" />
//           <div
//             className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-30 cyber-scan"
//             style={{ animationDelay: "1.5s" }}
//           />
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           {/* Cyberpunk Header */}
//           <div
//             className={`text-center mb-20 transition-all duration-1000 ease-out ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             {/* Status Badge */}
//             <div className="inline-block mb-8">
//               <div className="px-6 py-2 border border-[#00D1FF] bg-[#00D1FF]/10 backdrop-blur-sm holographic-border">
//                 <span
//                   className="text-[#00D1FF] text-sm font-bold tracking-wider"
//                   style={{ fontFamily: "Rajdhani, sans-serif" }}
//                 >
//                   [ SERVICES_MATRIX.EXE ]
//                 </span>
//               </div>
//             </div>

//             {/* Main Title */}
//             <h1
//               id="services-heading"
//               className="glitch-text text-7xl md:text-8xl font-black text-white mb-6 neon-pulse"
//               style={{ fontFamily: "Orbitron, sans-serif" }}
//               data-text="DIGITAL ARSENAL"
//             >
//               DIGITAL ARSENAL
//             </h1>

//             {/* Subtitle */}
//             <p
//               className="text-2xl md:text-3xl text-[#00D1FF] font-bold mb-8 hologram-flicker"
//               style={{ fontFamily: "Rajdhani, sans-serif" }}
//             >
//               {">"} CYBERNETIC SOLUTIONS FOR THE FUTURE {"<"}
//             </p>

//             {/* Animated Divider */}
//             <div className="flex justify-center items-center gap-4">
//               <div className="w-16 h-0.5 bg-[#00D1FF] neon-pulse" />
//               <div className="w-3 h-3 border border-[#00D1FF] rotate-45 neon-pulse" />
//               <div className="w-16 h-0.5 bg-[#00D1FF] neon-pulse" />
//             </div>
//           </div>

//           {/* Carousel Container */}
//           <div className="relative">
//             {/* Holographic Overlays */}
//             <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020A15] via-[#020A15]/90 to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020A15] via-[#020A15]/90 to-transparent z-10 pointer-events-none" />

//             {/* Carousel Track */}
//             <div
//               ref={carouselRef}
//               className={`flex gap-8 transition-all duration-1000 ease-out ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//               }`}
//               role="region"
//               aria-label="Interactive services carousel"
//               style={{
//                 transform: `translate3d(${currentTransform}%, 0, 0)`,
//               }}
//             >
//               {extendedServices.map((service, index) => {
//                 const IconComponent = service.icon
//                 const delay = (index % services.length) * 150
//                 const isSelected = selectedService === service.id
//                 const isHovered = hoveredService === service.id

//                 return (
//                   <div
//                     key={`${service.id}-${index}`}
//                     className={`flex-shrink-0 group cursor-pointer transition-all duration-1000 ease-out ${
//                       isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                     }`}
//                     style={{
//                       transitionDelay: `${delay}ms`,
//                     }}
//                     tabIndex={0}
//                     role="button"
//                     aria-label={`Learn more about ${service.name}`}
//                     aria-pressed={isSelected}
//                     onKeyDown={(e) => handleKeyDown(e, service)}
//                     onClick={() => handleServiceClick(service)}
//                     onMouseEnter={() => handleMouseEnter(service.id)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     {/* Cyberpunk Service Card */}
//                     <div
//                       className={`service-card relative w-72 h-96 bg-[#020A15] border-2 border-[#00D1FF]/30 backdrop-blur-sm overflow-hidden ${
//                         isSelected ? "selected holographic-border" : ""
//                       } ${isHovered ? "holographic-border" : ""}`}
//                       style={{
//                         clipPath:
//                           "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
//                       }}
//                     >
//                       {/* Data Stream Background */}
//                       <div className="absolute inset-0 data-stream opacity-20" />

//                       {/* Holographic Glow */}
//                       {(isHovered || isSelected) && (
//                         <div className="absolute inset-0 bg-[#00D1FF]/5 hologram-flicker" />
//                       )}

//                       {/* Corner Accents */}
//                       <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#00D1FF]" />
//                       <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#00D1FF]" />

//                       {/* Service Code */}
//                       <div className="absolute top-4 left-4">
//                         <span
//                           className="text-[#00D1FF] text-xs font-bold tracking-wider opacity-60"
//                           style={{ fontFamily: "Rajdhani, sans-serif" }}
//                         >
//                           {service.code}
//                         </span>
//                       </div>

//                       {/* Card Content */}
//                       <div className="relative h-full flex flex-col items-center justify-center p-8 text-center z-10">
//                         {/* Holographic Icon Container */}
//                         <div
//                           className={`mb-8 p-6 border-2 border-[#00D1FF]/50 bg-[#00D1FF]/10 backdrop-blur-sm transition-all duration-300 ${
//                             isHovered || isSelected ? "neon-pulse scale-110" : ""
//                           }`}
//                           style={{
//                             clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
//                           }}
//                         >
//                           <IconComponent className="w-12 h-12 text-[#00D1FF]" />
//                         </div>

//                         {/* Service Name */}
//                         <h3
//                           className="text-xl font-bold text-white mb-4 leading-tight tracking-wide"
//                           style={{ fontFamily: "Poppins, sans-serif" }}
//                         >
//                           {service.name}
//                         </h3>

//                         {/* Cyber Accent Line */}
//                         <div className="flex items-center gap-2 mb-6">
//                           <div className="w-2 h-2 bg-[#00D1FF] rotate-45" />
//                           <div
//                             className={`h-0.5 bg-[#00D1FF] transition-all duration-500 ${
//                               isHovered || isSelected ? "w-24 neon-pulse" : "w-16"
//                             }`}
//                           />
//                           <div className="w-2 h-2 bg-[#00D1FF] rotate-45" />
//                         </div>

//                         {/* Service Description */}
//                         <div
//                           className={`transition-all duration-500 overflow-hidden ${
//                             isSelected ? "opacity-100 max-h-32" : "opacity-0 max-h-0"
//                           }`}
//                         >
//                           <p
//                             className="text-[#00D1FF]/80 text-sm leading-relaxed font-medium"
//                             style={{ fontFamily: "Rajdhani, sans-serif" }}
//                           >
//                             {service.description}
//                           </p>
//                         </div>

//                         {/* Status Indicator */}
//                         <div className="absolute bottom-4 right-4">
//                           <div
//                             className={`w-3 h-3 bg-[#00D1FF] transition-all duration-300 ${
//                               isHovered || isSelected ? "neon-pulse scale-150" : "opacity-60"
//                             }`}
//                             style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
//                           />
//                         </div>
//                       </div>

//                       {/* Scanning Effect */}
//                       {isHovered && (
//                         <div className="absolute inset-0 border-2 border-[#00D1FF] opacity-50 hologram-flicker" />
//                       )}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Cyberpunk CTA Section */}
//           <div
//             className={`text-center mt-24 transition-all duration-1000 ease-out ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "1000ms" }}
//           >
//             <p
//               className="text-[#00D1FF]/80 text-xl mb-8 font-bold tracking-wide"
//               style={{ fontFamily: "Rajdhani, sans-serif" }}
//             >
//               {">"} INITIALIZE_COLLABORATION.PROTOCOL {"<"}
//             </p>

//             <button
//               className="group relative px-12 py-4 bg-[#020A15] border-2 border-[#00D1FF] text-[#00D1FF] font-bold tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none neon-pulse cyber-scan"
//               style={{
//                 fontFamily: "Orbitron, sans-serif",
//                 clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
//               }}
//               onClick={() => {
//                 console.log("Cyberpunk CTA clicked")
//                 if ("vibrate" in navigator) {
//                   navigator.vibrate([100, 50, 100])
//                 }
//               }}
//             >
//               <span className="relative z-10">ENGAGE PROTOCOL</span>
//               <div className="absolute inset-0 bg-[#00D1FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//           </div>

//           {/* System Status */}
//           <div className="text-center mt-12">
//             <div
//               className="inline-flex items-center gap-4 px-8 py-3 bg-[#020A15] border border-[#00D1FF]/30 backdrop-blur-sm"
//               style={{
//                 clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
//               }}
//             >
//               <div className={`w-2 h-2 bg-[#00D1FF] ${isPaused ? "opacity-50" : "neon-pulse"}`} />
//               <span
//                 className="text-[#00D1FF]/80 text-sm font-bold tracking-wider"
//                 style={{ fontFamily: "Rajdhani, sans-serif" }}
//               >
//                 {selectedService
//                   ? `ACTIVE: ${services.find((s) => s.id === selectedService)?.name?.toUpperCase()}`
//                   : `SYSTEMS_ONLINE: ${services.length} MODULES_LOADED`}
//               </span>
//               <div className="w-2 h-2 bg-[#00D1FF] rotate-45" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }







"use client"

import type React from "react"
import { useCallback, useEffect, useRef, useState, useMemo } from "react"

// Enhanced service icons with better accessibility
const ServiceIcon = ({
  type,
  className = "w-12 h-12",
  "aria-hidden": ariaHidden = true,
}: {
  type: string
  className?: string
  "aria-hidden"?: boolean
}) => {
  const icons = {
    code: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <polyline points="16,18 22,12 16,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8,6 2,12 8,18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    globe: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" />
        <path d="M12,2 C14.5,6 14.5,18 12,22 C9.5,18 9.5,6 12,2 Z" strokeWidth="2" />
      </svg>
    ),
    smartphone: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    wordpress: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
        <path d="M7,7 L17,7" strokeWidth="2" strokeLinecap="round" />
        <path d="M7,12 L17,12" strokeWidth="2" strokeLinecap="round" />
        <path d="M7,17 L17,17" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    search: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <path d="M21,21 L16.65,16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    video: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <polygon points="23,7 16,12 23,17 23,7" strokeWidth="2" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" strokeWidth="2" />
      </svg>
    ),
    palette: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path
          d="M12,2 C13.5,2 22,8.5 22,15.5 C22,18.5 19.5,21 16.5,21 C15.5,21 14.5,20.5 14,19.5 C13.5,18.5 13.5,17.5 14,16.5 C14.5,15.5 15,14.5 15,13.5 C15,12.5 14.5,12 13.5,12 L12,12 C6.5,12 2,8.5 2,5 C2,3.5 3.5,2 5,2 L12,2 Z"
          strokeWidth="2"
        />
      </svg>
    ),
    cart: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <circle cx="9" cy="21" r="1" strokeWidth="2" />
        <circle cx="20" cy="21" r="1" strokeWidth="2" />
        <path d="M1,1 L5,1 L7,13 L19,13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M7,13 L5.68,4.68 C5.47,3.68 4.62,3 3.58,3 L1,3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bot: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <rect x="3" y="11" width="18" height="10" rx="2" ry="2" strokeWidth="2" />
        <circle cx="12" cy="5" r="2" strokeWidth="2" />
        <path d="M12,7 L12,11" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="16" x2="8" y2="16" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="16" x2="16" y2="16" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    wrench: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
        <path
          d="M14.7,6.3 C16.1,7.7 16.1,10 14.7,11.4 L11.4,14.7 C10,16.1 7.7,16.1 6.3,14.7 C4.9,13.3 4.9,11 6.3,9.6 L9.6,6.3 C11,4.9 13.3,4.9 14.7,6.3 Z"
          strokeWidth="2"
        />
        <path d="M15.5,6.5 L20.5,1.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7,17 L9,19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return icons[type as keyof typeof icons] || icons.code
}

// Enhanced services data with more details
const services = [
  {
    id: "custom-software",
    name: "Custom Software Development",
    icon: "code",
    description: "Tailored software solutions built to your exact specifications with cutting-edge technologies",
    features: ["Custom Architecture", "Scalable Solutions", "Modern Tech Stack"],
    color: "#FF6B6B",
    category: "Development",
  },
  {
    id: "web-dev",
    name: "Web Development",
    icon: "globe",
    description: "Modern, responsive websites that drive results and enhance user experience",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    color: "#4ECDC4",
    category: "Development",
  },
  {
    id: "mobile-dev",
    name: "Mobile App Development",
    icon: "smartphone",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"],
    color: "#45B7D1",
    category: "Development",
  },
  {
    id: "wordpress",
    name: "WordPress Development",
    icon: "wordpress",
    description: "Custom WordPress themes and plugin development for powerful websites",
    features: ["Custom Themes", "Plugin Development", "CMS Integration"],
    color: "#96CEB4",
    category: "CMS",
  },
  {
    id: "seo",
    name: "SEO Optimization",
    icon: "search",
    description: "Search engine optimization to boost your visibility and organic traffic",
    features: ["Keyword Research", "Technical SEO", "Content Strategy"],
    color: "#FFEAA7",
    category: "Marketing",
  },
  {
    id: "video-editing",
    name: "Video Production",
    icon: "video",
    description: "Professional video editing and post-production services",
    features: ["Professional Editing", "Motion Graphics", "Color Grading"],
    color: "#DDA0DD",
    category: "Creative",
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    icon: "palette",
    description: "Creative visual designs that capture attention and communicate your brand",
    features: ["Brand Identity", "Print Design", "Digital Graphics"],
    color: "#98D8C8",
    category: "Creative",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Solutions",
    icon: "cart",
    description: "Complete e-commerce solutions for online success and growth",
    features: ["Online Stores", "Payment Integration", "Inventory Management"],
    color: "#F7DC6F",
    category: "Business",
  },
  {
    id: "ai-solutions",
    name: "AI Integration",
    icon: "bot",
    description: "Cutting-edge AI integration and automation for business efficiency",
    features: ["Machine Learning", "Process Automation", "Data Analytics"],
    color: "#BB8FCE",
    category: "Technology",
  },
  {
    id: "maintenance",
    name: "Technical Support",
    icon: "wrench",
    description: "Ongoing support and maintenance services to keep your systems running",
    features: ["24/7 Support", "Regular Updates", "Performance Monitoring"],
    color: "#85C1E9",
    category: "Support",
  },
]

// Performance optimization: memoize extended services
const useExtendedServices = () => {
  return useMemo(() => [...services, ...services, ...services], [])
}

// Enhanced animation hook with better performance
const useCarouselAnimation = (isVisible: boolean, isPaused: boolean) => {
  const [currentTransform, setCurrentTransform] = useState(0)
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>(Date.now())
  const pausedAtRef = useRef<number>(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isVisible) return

    const animate = () => {
      if (!isPaused) {
        const now = Date.now()
        const elapsed = now - startTimeRef.current
        // Smooth 40-second cycle for better viewing
        const progress = (elapsed / 40000) % 1
        const transform = -(progress * 33.333)

        setCurrentTransform(transform)

        if (carouselRef.current) {
          carouselRef.current.style.transform = `translate3d(${transform}%, 0, 0)`
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, isPaused])

  const handlePause = useCallback(() => {
    pausedAtRef.current = Date.now()
  }, [])

  const handleResume = useCallback(() => {
    const pauseDuration = Date.now() - pausedAtRef.current
    startTimeRef.current += pauseDuration
  }, [])

  return { currentTransform, carouselRef, handlePause, handleResume }
}

// Enhanced intersection observer hook
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold, rootMargin: "50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, hasAnimated])

  return { isVisible, ref }
}

export default function EnhancedServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [focusedService, setFocusedService] = useState<string | null>(null)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  const { isVisible, ref: sectionRef } = useIntersectionObserver(0.1)
  const { carouselRef, handlePause, handleResume } = useCarouselAnimation(isVisible, isPaused)
  const extendedServices = useExtendedServices()

  // Enhanced service interaction handlers
  const handleServiceClick = useCallback(
    (service: (typeof services)[0]) => {
      setSelectedService((prev) => (prev === service.id ? null : service.id))

      // Haptic feedback for supported devices
      if ("vibrate" in navigator) {
        navigator.vibrate(50)
      }

      // Announce to screen readers
      const announcement =
        selectedService === service.id
          ? `${service.name} deselected`
          : `${service.name} selected. ${service.description}`

      const announcer = document.createElement("div")
      announcer.setAttribute("aria-live", "polite")
      announcer.setAttribute("aria-atomic", "true")
      announcer.className = "sr-only"
      announcer.textContent = announcement
      document.body.appendChild(announcer)
      setTimeout(() => document.body.removeChild(announcer), 1000)
    },
    [selectedService],
  )

  const handleMouseEnter = useCallback(
    (serviceId: string) => {
      if (!isPaused) {
        handlePause()
      }
      setIsPaused(true)
      setHoveredService(serviceId)
    },
    [isPaused, handlePause],
  )

  const handleMouseLeave = useCallback(() => {
    if (isPaused) {
      handleResume()
    }
    setIsPaused(false)
    setHoveredService(null)
  }, [isPaused, handleResume])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, service: (typeof services)[0]) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        handleServiceClick(service)
      } else if (event.key === "Escape") {
        setSelectedService(null)
        setFocusedService(null)
      }
    },
    [handleServiceClick],
  )

  const handleFocus = useCallback((serviceId: string) => {
    setFocusedService(serviceId)
  }, [])

  const handleBlur = useCallback(() => {
    setFocusedService(null)
  }, [])

  // Speed control handlers
  const handleSpeedChange = useCallback((speed: number) => {
    setAnimationSpeed(speed)
  }, [])

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#020A15" }}>
      {/* Enhanced CSS with better performance and accessibility */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 20px #00D1FF40; }
          50% { opacity: 1; box-shadow: 0 0 40px #00D1FF80, 0 0 60px #00D1FF40; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-wave { animation: wave 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-slide-in-up { animation: slideInUp 0.6s ease-out forwards; }
        .animate-shimmer { 
          background: linear-gradient(90deg, transparent, #00D1FF40, transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .will-change-transform { will-change: transform; }
        .will-change-opacity { will-change: opacity; }
        
        .service-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-origin: center;
        }
        
        .service-card:hover {
          transform: scale(1.08) translateY(-8px);
        }
        
        .service-card.selected {
          transform: scale(1.1) translateY(-12px);
          box-shadow: 0 20px 40px #00D1FF60, 0 0 0 2px #00D1FF;
        }
        
        .service-card.focused {
          outline: 2px solid #00D1FF;
          outline-offset: 4px;
        }
        
        /* Enhanced scrollbar */
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #020a15; border-radius: 4px; }
        ::-webkit-scrollbar-thumb { 
          background: linear-gradient(45deg, #00d1ff, #0099cc);
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #00d1ff, #00b8e6);
          box-shadow: 0 0 12px #00d1ff60;
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        @media (hover: none) and (pointer: coarse) {
          .service-card:hover { transform: none; }
          .service-card:active { transform: scale(1.05) translateY(-4px); }
        }
        
        /* Screen reader only content */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        /* Focus management */
        .focus-trap:focus {
          outline: 2px solid #00D1FF;
          outline-offset: 2px;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full py-20 px-4 overflow-hidden"
        style={{ backgroundColor: "#020A15" }}
        aria-labelledby="services-heading"
        role="region"
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00D1FF]/5 rounded-full blur-2xl animate-float" />
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00D1FF]/3 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced header with better animations */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1
              id="services-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-float"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Services We{" "}
              <span className="bg-gradient-to-r from-[#00D1FF] to-[#00B8E6] bg-clip-text text-transparent">Offer</span>
            </h1>

            <p
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#D1D5DB", fontFamily: "Poppins, sans-serif" }}
            >
              Empowering businesses through <span className="text-[#00D1FF] font-semibold">digital excellence</span> and
              innovative solutions
            </p>

            {/* Enhanced animated underline */}
            <div className="relative w-32 h-1 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent animate-pulse-glow" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] to-transparent animate-wave" />
            </div>

            {/* Service statistics */}
            <div className="flex justify-center items-center gap-8 text-sm text-[#00D1FF]/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
                <span>{services.length} Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-4 py-2 bg-[#00D1FF]/20 text-[#00D1FF] rounded-full hover:bg-[#00D1FF]/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#020A15]"
              aria-label={isPaused ? "Resume carousel" : "Pause carousel"}
            >
              {isPaused ? "▶️ Resume" : "⏸️ Pause"}
            </button>

            <div className="text-[#00D1FF]/60 text-sm">
              {selectedService
                ? `Selected: ${services.find((s) => s.id === selectedService)?.name}`
                : "Hover to explore services"}
            </div>
          </div>

          {/* Enhanced carousel container */}
          <div className="relative">
            {/* Enhanced carousel track */}
            <div
              ref={carouselRef}
              className={`flex gap-6 md:gap-8 transition-all duration-1000 ease-out will-change-transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              role="region"
              aria-label="Interactive services carousel"
              aria-live="polite"
            >
              {extendedServices.map((service, index) => {
                const delay = (index % services.length) * 100
                const isSelected = selectedService === service.id
                const isHovered = hoveredService === service.id
                const isFocused = focusedService === service.id

                return (
                  <div
                    key={`${service.id}-${index}`}
                    className={`flex-shrink-0 group cursor-pointer transition-all duration-1000 ease-out will-change-transform ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    <div
                      className={`service-card relative w-48 md:w-56 lg:w-64 h-64 md:h-72 lg:h-80 rounded-2xl bg-gradient-to-br from-[#00D1FF]/10 to-[#00D1FF]/5 border border-[#00D1FF]/20 backdrop-blur-sm ${
                        isSelected ? "selected animate-pulse-glow" : ""
                      } ${isFocused ? "focused" : ""} ${isHovered ? "animate-float" : ""}`}
                      tabIndex={0}
                      role="button"
                      aria-label={`Learn more about ${service.name}. ${service.description}`}
                      aria-pressed={isSelected}
                      aria-describedby={`service-${service.id}-details`}
                      onKeyDown={(e) => handleKeyDown(e, service)}
                      onClick={() => handleServiceClick(service)}
                      onMouseEnter={() => handleMouseEnter(service.id)}
                      onMouseLeave={handleMouseLeave}
                      onFocus={() => handleFocus(service.id)}
                      onBlur={handleBlur}
                    >
                      {/* Enhanced glow effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D1FF]/20 to-transparent transition-opacity duration-300 ${
                          isHovered || isSelected || isFocused ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      {/* Animated border for selected state */}
                      {isSelected && (
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#00D1FF] animate-pulse" />
                      )}

                      {/* Card content */}
                      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                        {/* Enhanced icon container */}
                        <div
                          className={`mb-6 p-4 rounded-full bg-gradient-to-br from-[#00D1FF]/20 to-[#00D1FF]/10 border border-[#00D1FF]/30 transition-all duration-300 ${
                            isHovered || isSelected || isFocused ? "border-[#00D1FF]/80 scale-110" : ""
                          }`}
                        >
                          <ServiceIcon
                            type={service.icon}
                            className={`w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ${
                              isHovered || isSelected || isFocused ? "text-white scale-110" : "text-[#00D1FF]"
                            }`}
                            aria-hidden={true}
                          />
                        </div>

                        {/* Service name */}
                        <h3
                          className={`text-lg md:text-xl font-bold leading-tight mb-2 transition-all duration-300 ${
                            isHovered || isSelected || isFocused ? "text-[#00D1FF] scale-105" : "text-white"
                          }`}
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {service.name}
                        </h3>

                        {/* Service category */}
                        <div className="text-xs text-[#00D1FF]/60 mb-3 px-2 py-1 rounded-full bg-[#00D1FF]/10">
                          {service.category}
                        </div>

                        {/* Enhanced accent line */}
                        <div
                          className={`h-0.5 bg-gradient-to-r from-transparent to-transparent transition-all duration-300 ${
                            isHovered || isSelected || isFocused
                              ? "w-16 via-[#00D1FF] animate-shimmer"
                              : "w-12 via-[#00D1FF]/50"
                          }`}
                        />

                        {/* Service description (shows on selection) */}
                        {isSelected && (
                          <div className="mt-4 animate-slide-in-up">
                            <p
                              className="text-sm text-[#D1D5DB] mb-3 leading-relaxed"
                              style={{ fontFamily: "Poppins, sans-serif" }}
                              id={`service-${service.id}-details`}
                            >
                              {service.description}
                            </p>

                            {/* Service features */}
                            <div className="flex flex-wrap gap-1 justify-center">
                              {service.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-[#00D1FF]/20 text-[#00D1FF] rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Enhanced corner accent */}
                      <div
                        className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                          isHovered || isSelected || isFocused
                            ? "bg-[#00D1FF] shadow-[0_0_12px_#00D1FF] scale-150"
                            : "bg-[#00D1FF]/60"
                        }`}
                      />

                      {/* Interactive pulse effect */}
                      {(isHovered || isFocused) && (
                        <div className="absolute inset-0 rounded-2xl border border-[#00D1FF]/50 animate-pulse" />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Enhanced bottom CTA section */}
          <div
            className={`text-center mt-16 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-[#D1D5DB] text-lg mb-8 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                Ready to transform your business with cutting-edge technology?{" "}
                <span className="text-[#00D1FF]">Let's build something amazing together.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="px-8 py-4 bg-gradient-to-r from-[#00D1FF] to-[#00D1FF]/80 text-[#020A15] font-bold rounded-full hover:shadow-[0_0_30px_#00D1FF80] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#020A15] animate-float focus-trap"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  onClick={() => {
                    console.log("Get Started clicked")
                    if ("vibrate" in navigator) {
                      navigator.vibrate([100, 50, 100])
                    }
                  }}
                >
                  Get Started Today
                </button>

                <button
                  className="px-8 py-4 border-2 border-[#00D1FF] text-[#00D1FF] font-bold rounded-full hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#020A15] focus-trap"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced status indicators */}
          <div className="text-center mt-8 space-y-2">
            <div className="flex justify-center items-center gap-6 text-[#00D1FF]/60 text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isPaused ? "bg-yellow-500" : "bg-green-500"} animate-pulse`} />
                <span>{isPaused ? "Paused" : "Active"}</span>
              </div>

              {selectedService && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
                  <span>Service Selected</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00D1FF]/40 rounded-full animate-pulse" />
                <span>Scroll to explore</span>
              </div>
            </div>

            {/* Accessibility note */}
            <p className="text-[#00D1FF]/40 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
              Use keyboard navigation or screen reader for full accessibility
            </p>
          </div>
        </div>

        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#00D1FF] text-[#020A15] px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
      </section>
    </div>
  )
}
