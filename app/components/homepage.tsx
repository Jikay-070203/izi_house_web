"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Search,
  MapPin,
  Home,
  Star,
  Heart,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Instagram,
  Smartphone,
  Download,
  Bell,
  Gift,
  Percent,
  Calendar,
  Tag,
  User
} from "lucide-react"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSession } from "next-auth/react"
import Image from "next/image"

interface PropertyListing {
  id: string
  title: string
  price: string
  location: string
  area: string
  bedrooms: number
  image: string
  images: string[]
  isHot?: boolean
  isFeatured?: boolean
  isVerified?: boolean
  rating: number
  reviews: number
  category: "studio" | "1bedroom" | "ktx" | "loft" | "cao-cap" | "1phongngu" | "2phongngu"
  amenities: string[]
  description?: string 
}

interface Project {
  id: string
  name: string
  location: string
  description: string
  image: string
  rating: number
}

interface Notification {
  id: string
  title: string
  message: string
  type: "promotion" | "program" | "news"
  time: string
  isRead: boolean
  icon: React.ReactNode
}

export default function Homepage() {
  const { data: session, status } = useSession()
  const [searchTab, setSearchTab] = useState("mua-ban")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [randomImages, setRandomImages] = useState<string[]>([])
  const [unreadCount, setUnreadCount] = useState<number>(3)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])
  const [selectedPromoIndex, setSelectedPromoIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedPromoIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const promotions = [
    {
      id: 1,
      title: "Ưu đãi đặc biệt",
      description: "Phòng trọ tại quận 1 với đầy đủ tiện nghi, giá tốt nhất thị trường.",
      image: "/banner/izi_house.png",
      buttonText: "Xem chi tiết",
      buttonLink: "https://www.facebook.com/profile.php?id=61577216990159",
      target: "_blank"
    },
    {
      id: 2,
      title: "Trải nghiệm mẫu miễn phí",
      description: "Đặt lịch xem nhà và nhận ngay voucher 1 triệu đồng khi ký hợp đồng trong tháng này.",
      image: "/banner/goi_dang_tin.png",
      buttonText: "Xem ưu đãi",
      buttonLink: "/promotions",
      target: "_self"
    },
    {
      id: 3,
      title: "Nhận báo giá ưu đãi",
      description: "Đăng ký nhận báo giá ưu đãi đặc biệt dành riêng cho khách hàng mới.",
      image: "/banner/wifi.png",
      buttonText: "Đăng ký ngay",
      buttonLink: "https://fpt.vn/goi-gia-dinh-sieu-tien-ich?utm_source=bannerfptvn",
      target: "_blank"
    },
    {
      id: 4,
      title: "Nhận báo giá ưu đãi",
      description: "Đăng ký nhận báo giá ưu đãi đặc biệt dành riêng cho khách hàng mới.",
      image: "/banner/van_chuyen.png",
      buttonText: "Đăng ký ngay",
      buttonLink: "https://thanhhungvn.vn/",
      target: "_blank"
    },
  ]

  const allProperties: PropertyListing[] = [
    {
      id: "1",
      title: "Chung cư cao cấp Quận 1 - View sông Sài Gòn",
      price: "12 triệu/tháng",
      location: "Quận 1, TP.HCM",
      area: "45 m²",
      bedrooms: 1,
      image: "/rooms/1.jpg",
      images: [
        "/rooms/1.jpg",
        "/rooms/2.jpg",
        "/rooms/3.jpg",
        "/rooms/4.jpg",
        "/rooms/5.jpg"
      ],
      isHot: true,
      isFeatured: true,
      isVerified: true,
      rating: 4.9,
      reviews: 36,
      category: "cao-cap",
      amenities: ["Wifi tốc độ cao", "Điều hòa", "Tủ lạnh", "Máy giặt riêng"]
    },
    {
      id: "2",
      title: "Căn hộ full nội thất Quận 7",
      price: "7.5 triệu/tháng",
      location: "Quận 7, TP.HCM",
      area: "35 m²",
      bedrooms: 1,
      image: "/rooms/20.jpg",
      images: [
        "/rooms/20.jpg",
        "/rooms/21.jpg",
        "/rooms/22.jpg",
        "/rooms/23.jpg"
      ],
      isHot: true,
      isFeatured: true,
      isVerified: true,
      rating: 4.8,
      reviews: 42,
      category: "1phongngu",
      amenities: ["Wifi", "Điều hòa", "Tủ lạnh", "Máy giặt riêng"]
    },
    {
      id: "3",
      title: "Studio hiện đại gần ĐH Bách Khoa",
      price: "4.8 triệu/tháng",
      location: "Quận Thủ Đức, TP.HCM",
      area: "25 m²",
      bedrooms: 0,
      image: "/rooms/10.jpg",
      images: [
        "/rooms/10.jpg",
        "/rooms/11.jpg",
        "/rooms/12.jpg",
        "/rooms/13.jpg"
      ],
      isHot: true,
      isVerified: true,
      rating: 4.7,
      reviews: 28,
      category: "studio",
      amenities: ["Wifi miễn phí", "Điều hòa", "Tủ lạnh"]
    },
    {
      id: "4",
      title: "Căn hộ mới xây gần sân bay Tân Sơn Nhất",
      price: "5.2 triệu/tháng",
      location: "Quận Tân Bình, TP.HCM",
      area: "28 m²",
      bedrooms: 1,
      image: "/rooms/30.jpg",
      images: [
        "/rooms/30.jpg",
        "/rooms/31.jpg",
        "/rooms/32.jpg",
        "/rooms/33.jpg"
      ],
      isHot: true,
      isVerified: true,
      rating: 4.6,
      reviews: 19,
      category: "1phongngu",
      amenities: ["Wifi", "Điều hòa", "Tủ lạnh", "Máy giặt chung"]
    },
    {
      id: "5",
      title: "Căn hộ mini view đẹp Quận 2",
      price: "6.8 triệu/tháng",
      location: "Quận 2, TP.HCM",
      area: "32 m²",
      bedrooms: 1,
      image: "/rooms/40.jpg",
      images: [
        "/rooms/40.jpg",
        "/rooms/41.jpg",
        "/rooms/42.jpg",
        "/rooms/43.jpg"
      ],
      isHot: true,
      isFeatured: true,
      isVerified: true,
      rating: 4.9,
      reviews: 31,
      category: "1phongngu",
      amenities: ["Wifi", "Điều hòa", "Tủ lạnh", "Máy giặt riêng", "Ban công"]
    },
    {
      id: "6",
      title: "Chung cư mini gần ĐH Kinh Tế",
      price: "3.9 triệu/tháng",
      location: "Quận 3, TP.HCM",
      area: "20 m²",
      bedrooms: 0,
      image: "/rooms/50.jpg",
      images: [
        "/rooms/50.jpg",
        "/rooms/51.jpg",
        "/rooms/52.jpg"
      ],
      isHot: true,
      isVerified: true,
      rating: 4.5,
      reviews: 22,
      category: "studio",
      amenities: ["Wifi", "Điều hòa", "Tủ lạnh nhỏ"]
    }
  ]

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  // Lọc các phòng nổi bật (isFeatured = true)
  const featuredProperties = allProperties.filter(property => property.isFeatured).slice(0, 4)
  
  // Lọc các phòng đang hot (isHot = true)
  const hotProperties = allProperties.filter(property => property.isHot).slice(0, 4)

  const categoryInfo = {
    studio: {
      title: "Phòng Studio",
      description: "Không gian sống hiện đại, tiết kiệm diện tích",
      count: allProperties.filter((p) => p.category === "studio").length,
      priceRange: "4.5 - 6.2 triệu/tháng",
    },
    "1bedroom": {
      title: "1 Phòng Ngủ",
      description: "Căn hộ 1 phòng ngủ riêng biệt, thoải mái",
      count: allProperties.filter((p) => p.category === "1bedroom").length,
      priceRange: "8.5 - 12.0 triệu/tháng",
    },
    ktx: {
      title: "KTX & Sleepbox",
      description: "Giải pháp ở tiết kiệm cho sinh viên và người trẻ",
      count: allProperties.filter((p) => p.category === "ktx").length,
      priceRange: "1.8 - 2.3 triệu/tháng",
    },
    loft: {
      title: "Phòng Gác Xép",
      description: "Không gian sống độc đáo với thiết kế loft",
      count: allProperties.filter((p) => p.category === "loft").length,
      priceRange: "3.8 - 5.5 triệu/tháng",
    },
    "cao-cap": {
      title: "Cao Cấp",
      description: "Căn hộ cao cấp với tiện ích đầy đủ",
      count: allProperties.filter((p) => p.category === "cao-cap").length,
      priceRange: "12.0 - 15.0 triệu/tháng",
    },
    "1phongngu": {
      title: "1 Phòng Ngủ",
      description: "Căn hộ 1 phòng ngủ riêng biệt, thoải mái",
      count: allProperties.filter((p) => p.category === "1phongngu").length,
      priceRange: "7.5 - 12.0 triệu/tháng",
    },
    "2phongngu": {
      title: "2 Phòng Ngủ",
      description: "Căn hộ 2 phòng ngủ riêng biệt, thoải mái",
      count: allProperties.filter((p) => p.category === "2phongngu").length,
      priceRange: "15.0 - 20.0 triệu/tháng",
    },
  }

  const filteredProperties =
    selectedCategory === "all"
      ? allProperties.slice(0, 3)
      : allProperties.filter((p) => p.category === selectedCategory).slice(0, 3)

  // Hàm lấy ảnh ngẫu nhiên
  const getRandomImage = (index: number): string => {
    const randomIndex = Math.floor(Math.random() * 152) + 1;
    return `/rooms/${randomIndex}.jpg`;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xl ring-2 ring-[#20db9b] ring-offset-2 transition-transform duration-300 hover:rotate-3 hover:scale-105">
                <Image
                    src="/logo/logo.png"
                    alt="IZI HOUSE Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
              </div>

              <span
                className="text-3xl font-extrabold bg-gradient-to-r from-[#00ffcc] to-[#0033cc] bg-clip-text text-transparent 
                drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
              >
                IZI HOUSE
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="/about" 
                className="relative px-3 py-2 text-gray-700 font-medium group transition-colors duration-300"
              >
                <span className="relative z-10">GIỚI THIỆU</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#20db9b] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/promotions" 
                className="relative px-3 py-2 text-gray-700 font-medium group transition-colors duration-300"
              >
                <span className="relative z-10">CHƯƠNG TRÌNH ƯU ĐÃI</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#20db9b] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/services" 
                className="relative px-3 py-2 text-gray-700 font-medium group transition-colors duration-300"
              >
                <span className="relative z-10">TIỆN ÍCH</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#20db9b] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/roommate" 
                className="relative px-3 py-2 text-gray-700 font-medium group transition-colors duration-300"
              >
                <span className="relative z-10">BẠN CÙNG PHÒNG</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#20db9b] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/news" 
                className="relative px-3 py-2 text-gray-700 font-medium group transition-colors duration-300"
              >
                <span className="relative z-10">TIN TỨC</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#20db9b] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {status === 'authenticated' && (
                <Link 
                  href="/post" 
                  className="px-4 py-2 bg-white text-[#20db9b] font-medium rounded-md border-2 border-[#20db9b] hover:bg-[#20db9b] hover:text-white transition-colors duration-300"
                >
                  ĐĂNG TIN
                </Link>
              )}
            </nav>

            <div className="flex items-center gap-4">
              {!session && (
                <>
                  <Link 
                    href="/register" 
                    className="px-4 py-2 text-[#20db9b] font-medium rounded-md border border-[#20db9b] hover:bg-[#f0fdf9] transition-colors duration-300"
                  >
                    ĐĂNG KÍ
                  </Link>
                  <Link 
                    href="/login" 
                    className="px-4 py-2 bg-[#20db9b] text-white font-medium rounded-md hover:bg-[#1ac78a] transition-colors duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                  >
                    ĐĂNG NHẬP
                  </Link>
                </>
              )}
              {session && (
                <Link 
                  href="/profile" 
                  className="px-4 py-2 text-gray-700 font-medium hover:text-[#20db9b] transition-colors duration-300"
                >
                  {session.user?.name || 'Tài khoản'}
                </Link>
              )}
              {/* Notification Bell */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-600 text-white text-xs">
                        {unreadCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80" align="end">
                  <div className="flex items-center justify-between p-2">
                    <DropdownMenuLabel>Thông báo</DropdownMenuLabel>
                    {unreadCount > 0 && (
                      <Button variant="ghost" size="sm" onClick={() => setUnreadCount(0)} className="text-xs text-blue-600">
                        Đánh dấu đã đọc
                      </Button>
                    )}
                  </div>
                  <DropdownMenuSeparator />

                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <DropdownMenuItem
                        key={notification.id}
                        className="p-3 cursor-pointer hover:bg-gray-50"
                      >
                        <div className="flex gap-3 w-full">
                          <div className="flex-shrink-0 mt-1">{notification.icon}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <h4
                                className={`text-sm font-medium ${notification.isRead ? "text-gray-600" : "text-gray-900"
                                  }`}
                              >
                                {notification.title}
                              </h4>
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                              )}
                            </div>
                            <p
                              className={`text-xs mt-1 line-clamp-2 ${notification.isRead ? "text-gray-500" : "text-gray-700"
                                }`}
                            >
                              {notification.message}
                            </p>
                            <span className="text-xs text-gray-400 mt-1">{notification.time}</span>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-center text-blue-600 font-medium">
                    Xem tất cả thông báo
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/profile">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Promotional Carousel Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Chương trình ưu đãi</h2>
            <div className="flex items-center space-x-2">
              {}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
              <div className="flex">
                {promotions.map((promo) => (
                  <div key={promo.id} className="flex-[0_0_100%] min-w-0 relative">
                    <div className="relative h-[500px] md:h-[600px]">
                      <Image
                        src={promo.image}
                        alt={promo.title}
                        width={1200}
                        height={600}
                        className="w-full h-full object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                        <div className="container mx-auto h-full flex items-center">
                          <div className="max-w-2xl text-white px-8">
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
                              {promo.title}
                            </h3>
                            <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fadeIn animation-delay-200">
                              {promo.description}
                            </p>
                            <Link
                              href={promo.buttonLink}
                              target={promo.target || "_self"}
                              rel={promo.target === "_blank" ? "noopener noreferrer" : undefined}
                              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105"
                            >
                              {promo.buttonText}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedPromoIndex ? 'w-8 bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animation-delay-200 {
            animation-delay: 200ms;
          }
        `}</style>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-400 to-blue-600 py-12 md:py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Tabs value={searchTab} onValueChange={setSearchTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 gap-1 mb-4 md:mb-6 bg-white/90 p-1 rounded-lg">
                <TabsTrigger 
                  value="mua-ban" 
                  className="text-xs sm:text-sm font-medium px-1 py-2 sm:px-2 sm:py-2 whitespace-nowrap"
                >
                  TÌM KIẾM
                </TabsTrigger>
                <Link href="/map" className="w-full">
                  <TabsTrigger 
                    value="cho-thue" 
                    className="w-full text-xs sm:text-sm font-medium px-1 py-2 sm:px-2 sm:py-2 whitespace-nowrap"
                  >
                    BẢN ĐỒ
                  </TabsTrigger>
                </Link>
                <Link href="/explore" className="w-full">
                  <TabsTrigger 
                    value="du-an" 
                    className="w-full text-xs sm:text-sm font-medium px-1 py-2 sm:px-2 sm:py-2 whitespace-nowrap"
                  >
                    KHÁM PHÁ
                  </TabsTrigger>
                </Link>
              </TabsList>

              <TabsContent value={searchTab}>
                <Card className="bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Loại hình" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nha-dat">Nhà đất</SelectItem>
                          <SelectItem value="can-ho">Căn hộ</SelectItem>
                          <SelectItem value="dat-nen">Đất nền</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Địa điểm" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                          <SelectItem value="hn">Hà Nội</SelectItem>
                          <SelectItem value="dn">Đà Nẵng</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Giá bán" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="duoi-1ty">Dưới 1 tỷ</SelectItem>
                          <SelectItem value="1-3ty">1 - 3 tỷ</SelectItem>
                          <SelectItem value="3-5ty">3 - 5 tỷ</SelectItem>
                          <SelectItem value="tren-5ty">Trên 5 tỷ</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Diện tích" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="duoi-50">Dưới 50m²</SelectItem>
                          <SelectItem value="50-100">50 - 100m²</SelectItem>
                          <SelectItem value="100-200">100 - 200m²</SelectItem>
                          <SelectItem value="tren-200">Trên 200m²</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Hướng nhà" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dong">Đông</SelectItem>
                          <SelectItem value="tay">Tây</SelectItem>
                          <SelectItem value="nam">Nam</SelectItem>
                          <SelectItem value="bac">Bắc</SelectItem>
                        </SelectContent>
                      </Select>

                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Search className="w-4 h-4 mr-2" />
                        Tìm kiếm
                      </Button>
                    </div>

                    <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                      CHATBOT
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Phòng nổi bật */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Phòng HOT</h2>
              <p className="text-gray-600">Những phòng trọ, căn hộ được ưa chuộng nhất</p>
            </div>
            <Link href="/rooms?filter=featured" className="text-primary hover:underline font-medium flex items-center">
              Xem tất cả
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property, index) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={getRandomImage(index)}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  {property.isHot && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      HOT
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <button className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{property.title}</h3>
                    <div className="flex items-center bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      <Star className="w-3 h-3 fill-current mr-1" />
                      <span>{property.rating}</span>
                    </div>
                  </div>
                  <p className="text-primary font-bold text-lg mb-2">{property.price}</p>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-2 border-t">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span>{property.rating}</span>
                      <span className="mx-1">•</span>
                      <span>{property.reviews} đánh giá</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-2">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Phòng HOT</h2>
              <p className="text-sm md:text-base text-gray-600">Những phòng trọ, căn hộ được ưa chuộng nhất</p>
            </div>
            <Link 
              href="/rooms?filter=featured" 
              className="text-sm md:text-base text-primary hover:underline font-medium flex items-center mt-2 sm:mt-0"
            >
              Xem tất cả
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProperties.map((property, index) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                  <Image
                    src={getRandomImage(index)}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 4} // Only prioritize first 4 images
                  />
                  {property.isHot && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      HOT
                    </div>
                  )}
                  <button 
                    className="absolute top-2 right-2 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                    aria-label="Thêm vào yêu thích"
                  >
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                  </button>
                </div>
                <CardContent className="p-3 md:p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1 md:mb-2">
                    <h3 className="font-medium text-sm md:text-base text-gray-900 line-clamp-2">
                      {property.title}
                    </h3>
                    <div className="flex items-center bg-primary/10 text-primary text-xs px-2 py-0.5 md:px-2 md:py-1 rounded whitespace-nowrap">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-current mr-0.5 md:mr-1" />
                      <span>{property.rating}</span>
                    </div>
                  </div>
                  <p className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">{property.price}</p>
                  <div className="flex items-center text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 flex-shrink-0" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mt-auto pt-2 border-t">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current mr-1" />
                      <span>{property.rating}</span>
                      <span className="mx-1">•</span>
                      <span>{property.reviews} đánh giá</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Phòng Ghép</h2>
            <Link href="/roommate" className="text-blue-600 hover:underline flex items-center">
              Xem thêm
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={getRandomImage(index)}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {project.rating}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section - Phòng mới */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Phòng mới</h2>
            <Link href="/rooms?filter=new" className="text-blue-600 hover:underline flex items-center">
              Xem thêm
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.slice(0, 4).map((property, index) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={getRandomImage(index)}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {property.isHot && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      HOT
                    </div>
                  )}
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                      {property.title}
                    </h3>
                    <div className="flex items-center bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      <Star className="w-3 h-3 fill-current mr-1" />
                      <span>{property.rating}</span>
                    </div>
                  </div>
                  <p className="text-primary font-bold text-lg mb-2">{property.price}</p>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-2 border-t">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span>{property.rating}</span>
                      <span className="mx-1">•</span>
                      <span>{property.reviews} đánh giá</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Phòng theo khu vực</h2>
            <span className="text-blue-600 cursor-pointer">Xem thêm »</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src={getRandomImage(0)} 
                  alt="TP.HCM" 
                  width={800}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">TP.HCM</h3>
                  <p className="text-sm opacity-90">25,445 tin đăng</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Hà Nội", count: "15,234 tin đăng" },
                { name: "Đà Nẵng", count: "8,567 tin đăng" },
                { name: "Cần Thơ", count: "5,432 tin đăng" },
                { name: "Khánh Hòa", count: "4,321 tin đăng" },
              ].map((city, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-32">
                    <Image
                      src={getRandomImage(index)}
                      alt={city.name}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <h4 className="font-semibold">{city.name}</h4>
                      <p className="text-xs opacity-90">{city.count}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left content */}
            <div className="text-white max-w-xl text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">TẢI ỨNG DỤNG IZI HOUSE</h3>
              <p className="text-lg mb-6 text-blue-100">Tìm kiếm và đặt phòng trọ nhanh chóng, tiện lợi mọi lúc mọi nơi</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <div className="mr-3">
                    <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.835 6.42a8.12 8.12 0 0 1-2.2.6 3.93 3.93 0 0 0 1.77-2.2 8.5 8.5 0 0 1-2.56 1 4.1 4.1 0 0 0-7 3.72 11.64 11.64 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.28 5.52 4.22 4.22 0 0 1-1.85-.5v.05a4.1 4.1 0 0 0 3.3 4 3.9 3.9 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85 8.3 8.3 0 0 1-5.1 1.75 7.9 7.9 0 0 1-1-.06 11.57 11.57 0 0 0 6.29 1.85c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.36 0-.54a8.7 8.7 0 0 0 2-2.22z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Tải xuống trên</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.46 6.42a8.12 8.12 0 0 1-2.2.6 3.93 3.93 0 0 0 1.77-2.2 8.5 8.5 0 0 1-2.56 1 4.1 4.1 0 0 0-7 3.72 11.64 11.64 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.28 5.52 4.22 4.22 0 0 1-1.85-.5v.05a4.1 4.1 0 0 0 3.3 4 3.9 3.9 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85 8.3 8.3 0 0 1-5.1 1.75 7.9 7.9 0 0 1-1-.06 11.57 11.57 0 0 0 6.29 1.85c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.36 0-.54a8.7 8.7 0 0 0 2-2.22z" fill="white"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Tải xuống trên</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right QR Code section */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="bg-white p-4 rounded-xl shadow-lg mb-4">
                <Image
                  src="/QR/QR.png"
                  alt="QR Code để tải ứng dụng IZI HOUSE"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22160%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22160%22%20height%3D%22160%22%20fill%3D%22%23f3f4f6%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22%239ca3af%22%3EQR%20Code%3C%2Ftext%3E%3C%2Fsvg%3E';
                  }}
                />
              </div>
              <div className="text-center lg:text-left text-white">
                <p className="font-semibold mb-1">Quét mã QR để tải ứng dụng</p>
                <p className="text-blue-200 text-sm">Hỗ trợ iOS & Android</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-20 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Về IZI HOUSE</h3>
              <p className="text-gray-400 text-sm mb-4">
                Nền tảng kết nối chủ nhà và người tìm phòng hàng đầu Việt Nam.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white text-sm">Về chúng tôi</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white text-sm">Liên hệ</a></li>
                <li><a href="/help" className="text-gray-400 hover:text-white text-sm">Trợ giúp</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-400 hover:text-white text-sm">Câu hỏi thường gặp</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white text-sm">Điều khoản sử dụng</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white text-sm">Chính sách bảo mật</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Đăng ký nhận tin</h3>
              <p className="text-gray-400 text-sm mb-4">Nhận thông tin mới nhất về các ưu đãi độc quyền</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Nhập email của bạn" 
                  className="bg-gray-800 text-white text-sm rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium">
                  Gửi
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image 
                src="/logo/logo.png" 
                alt="IZI HOUSE" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-gray-400 text-sm"> 2025 IZI HOUSE. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Điều khoản</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Bảo mật</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 md:hidden">
        <div className="flex justify-around items-center h-16">
          <Link href="/" className="flex flex-col items-center justify-center text-primary">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Trang chủ</span>
          </Link>
          <Link href="/map" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary">
            <MapPin className="w-6 h-6" />
            <span className="text-xs mt-1">Bản đồ</span>
          </Link>
          <Link href="/favorites" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary">
            <Heart className="w-6 h-6" />
            <span className="text-xs mt-1">Yêu thích</span>
          </Link>
          <Link href="/account" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary">
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Tài khoản</span>
          </Link>
        </div>
      </div>

      {/* Add bottom padding to main content to account for fixed mobile nav */}
      <div className="pb-16 md:pb-0">
        {/* All your existing content goes here */}
      </div>
    </div>
  )
}
