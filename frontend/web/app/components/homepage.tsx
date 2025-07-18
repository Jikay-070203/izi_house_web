"use client"

import type React from "react"

import { useState } from "react"
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
} from "lucide-react"
import Link from "next/link"

interface PropertyListing {
  id: string
  title: string
  price: string
  location: string
  area: string
  bedrooms: number
  image: string
  isHot?: boolean
  category: "studio" | "1bedroom" | "ktx" | "loft" | "apartment" | "house"
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
  const [searchTab, setSearchTab] = useState("mua-ban")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Ưu đãi đặc biệt",
      message: "Giảm giá 30% cho căn hộ cao cấp - Chỉ còn 3 ngày!",
      type: "promotion",
      time: "2 giờ trước",
      isRead: false,
      icon: <Percent className="w-4 h-4 text-red-500" />,
    },
    {
      id: "2",
      title: "Chương trình mới",
      message: "Ra mắt gói VIP cho người đăng tin - Miễn phí 1 tháng đầu",
      type: "program",
      time: "5 giờ trước",
      isRead: false,
      icon: <Gift className="w-4 h-4 text-blue-500" />,
    },
    {
      id: "3",
      title: "Sự kiện đặc biệt",
      message: "Triển lãm bất động sản 2025 - Đăng ký tham gia ngay",
      type: "program",
      time: "1 ngày trước",
      isRead: true,
      icon: <Calendar className="w-4 h-4 text-green-500" />,
    },
    {
      id: "4",
      title: "Flash Sale",
      message: "Giảm 50% phí đăng tin VIP trong 24h - Nhanh tay!",
      type: "promotion",
      time: "2 ngày trước",
      isRead: true,
      icon: <Tag className="w-4 h-4 text-orange-500" />,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.isRead).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
  }

  const allProperties: PropertyListing[] = [
    {
      id: "1",
      title: "Studio hiện đại gần trường ĐH Bách Khoa",
      price: "4.5 triệu/tháng",
      location: "Quận Thủ Đức, Hồ Chí Minh",
      area: "25 m²",
      bedrooms: 0,
      image: "/images/1.jpg",
      isHot: true,
      category: "studio",
    },
    {
      id: "2",
      title: "Phòng 1PN đầy đủ nội thất Quận 1",
      price: "8.5 triệu/tháng",
      location: "Quận 1, TP Hồ Chí Minh",
      area: "35 m²",
      bedrooms: 1,
      image: "/images/6.jpg",
      category: "1bedroom",
    },
    {
      id: "3",
      title: "KTX cao cấp dành cho sinh viên",
      price: "2.3 triệu/tháng",
      location: "Quận Bình Thạnh, TP.HCM",
      area: "15 m²",
      bedrooms: 1,
      image: "/images/12.jpg",
      category: "ktx",
    },
    {
      id: "4",
      title: "Phòng gác xép view đẹp Quận 3",
      price: "3.8 triệu/tháng",
      location: "Quận 3, TP.HCM",
      area: "20 m²",
      bedrooms: 1,
      image: "/images/17.jpg",
      category: "loft",
    },
    {
      id: "5",
      title: "Studio luxury gần sân bay",
      price: "6.2 triệu/tháng",
      location: "Quận Tân Bình, TP.HCM",
      area: "30 m²",
      bedrooms: 0,
      image: "/images/21.jpg",
      isHot: true,
      category: "studio",
    },
    {
      id: "6",
      title: "Căn hộ 1PN view sông",
      price: "12.0 triệu/tháng",
      location: "Quận 2, TP.HCM",
      area: "45 m²",
      bedrooms: 1,
      image: "/images/26.jpg",
      category: "1bedroom",
    },
    {
      id: "7",
      title: "Sleepbox hiện đại 24/7",
      price: "1.8 triệu/tháng",
      location: "Quận 7, TP.HCM",
      area: "12 m²",
      bedrooms: 1,
      image: "/images/31.jpg",
      category: "ktx",
    },
    {
      id: "8",
      title: "Loft space sáng tạo",
      price: "5.5 triệu/tháng",
      location: "Quận 1, TP.HCM",
      area: "28 m²",
      bedrooms: 1,
      image: "/images/36.jpg",
      category: "loft",
    },
  ]

  const projects: Project[] = [
    {
      id: "1",
      name: "Saigon Ville",
      location: "Quận 9, Hồ Chí Minh",
      description: "Khu đô thị Saigon Ville Bình Trưng Đông với hạ tầng hiện đại",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Phước Đông New City",
      location: "Nha Trang, Khánh Hòa",
      description: "Dự án đô thị ven biển hiện đại",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
    },
    {
      id: "3",
      name: "Masteri Grand Gia Hưng",
      location: "Quận 9, Hồ Chí Minh",
      description: "Căn hộ cao cấp với tiện ích đầy đủ",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
    },
    {
      id: "4",
      name: "SunBay Park Long",
      location: "Phan Rang, Ninh Thuận",
      description: "Khu nghỉ dưỡng ven biển",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.6,
    },
  ]

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
  }

  const filteredProperties =
    selectedCategory === "all"
      ? allProperties.slice(0, 3)
      : allProperties.filter((p) => p.category === selectedCategory).slice(0, 3)

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-600">IZI HOUSE</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/promotions" className="text-gray-700 hover:text-blue-600 font-medium">
                CHƯƠNG TRÌNH ƯU ĐÃI
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                TIỆN ÍCH
              </Link>
              <Link href="/roommate" className="text-gray-700 hover:text-blue-600 font-medium">
                ROOMMATE
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-blue-600 font-medium">
                TIN TỨC
              </Link>

              <Link href="/post" className="text-gray-700 hover:text-blue-600 font-medium">
                ĐĂNG TIN
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
                ĐĂNG NHẬP
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/register" className="text-sm text-gray-600 hover:text-blue-600">
                ĐĂNG KÍ
              </Link>

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
                      <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs text-blue-600">
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
                        onClick={() => markAsRead(notification.id)}
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
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Chương trình ưu đãi</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="relative h-80 bg-gradient-to-r from-blue-100 to-green-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KzlDsmcWOohqkPnPT796gJkt2Roiyi.png"
                  alt="Chương trình ưu đãi"
                  className="w-full h-full object-cover"
                />

                {/* Overlay content - Cân đối lại */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                  <div className="flex items-center justify-center h-full px-8">
                    <div className="text-white text-center max-w-2xl">
                      <h3 className="text-4xl font-bold mb-6">Ưu đãi đặc biệt</h3>
                      <p className="text-xl mb-8 leading-relaxed">
                        Giảm giá lên đến 30% cho các căn hộ cao cấp. Cơ hội sở hữu ngôi nhà mơ ước với mức giá tốt nhất.
                      </p>
                      <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg">
                        Xem chi tiết
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center mt-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-400 to-blue-600 py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Tabs value={searchTab} onValueChange={setSearchTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-white/90">
                <TabsTrigger value="mua-ban" className="text-sm font-medium">
                  TÌM KIẾM
                </TabsTrigger>
                <Link href="/map">
                  <TabsTrigger value="cho-thue" className="text-sm font-medium">
                    MAP BẢN ĐỒ
                  </TabsTrigger>
                </Link>
                <Link href="/explore">
                  <TabsTrigger value="du-an" className="text-sm font-medium">
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

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Bất động sản dành cho bạn</h2>
            <div className="flex gap-4">
              <Button
                variant={selectedCategory === "studio" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategorySelect("studio")}
                className={selectedCategory === "studio" ? "bg-blue-600 text-white" : ""}
              >
                PHÒNG STUDIO
              </Button>
              <Button
                variant={selectedCategory === "1bedroom" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategorySelect("1bedroom")}
                className={selectedCategory === "1bedroom" ? "bg-blue-600 text-white" : ""}
              >
                1 PHÒNG NGỦ
              </Button>
              <Button
                variant={selectedCategory === "ktx" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategorySelect("ktx")}
                className={selectedCategory === "ktx" ? "bg-blue-600 text-white" : ""}
              >
                KTX &amp; SLEEPBOX
              </Button>
              <Button
                variant={selectedCategory === "loft" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategorySelect("loft")}
                className={selectedCategory === "loft" ? "bg-blue-600 text-white" : ""}
              >
                PHÒNG GÁC XẾP
              </Button>
              <Link href={`/rooms${selectedCategory !== "all" ? `?category=${selectedCategory}` : ""}`}>
                <span className="text-blue-600 cursor-pointer hover:text-blue-700 font-medium">Xem thêm »</span>
              </Link>
            </div>
          </div>

          {/* Category Info */}
          {selectedCategory !== "all" && categoryInfo[selectedCategory as keyof typeof categoryInfo] && (
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {categoryInfo[selectedCategory as keyof typeof categoryInfo].title}
                  </h3>
                  <p className="text-blue-700 mb-2">
                    {categoryInfo[selectedCategory as keyof typeof categoryInfo].description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-blue-600">
                    <span>📊 {categoryInfo[selectedCategory as keyof typeof categoryInfo].count} phòng có sẵn</span>
                    <span>💰 {categoryInfo[selectedCategory as keyof typeof categoryInfo].priceRange}</span>
                  </div>
                </div>
                <Link href={`/rooms?category=${selectedCategory}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700">Xem tất cả</Button>
                </Link>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  {property.isHot && <Badge className="absolute top-2 left-2 bg-red-600">HOT</Badge>}
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{property.title}</h3>
                  <p className="text-red-600 font-bold text-lg mb-2">{property.price}</p>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{property.area}</span>
                    {property.bedrooms > 0 && <span>{property.bedrooms} phòng ngủ</span>}
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
            <h2 className="text-2xl font-bold text-gray-900">Phòng nổi bật</h2>
            <span className="text-blue-600 cursor-pointer">Xem thêm »</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {project.rating}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
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
            <h2 className="text-2xl font-bold text-gray-900">Bất động sản theo khu vực</h2>
            <span className="text-blue-600 cursor-pointer">Xem thêm »</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img src="/placeholder.svg?height=300&width=600" alt="TP.HCM" className="w-full h-full object-cover" />
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
                    <img
                      src="/placeholder.svg?height=150&width=300"
                      alt={city.name}
                      className="w-full h-full object-cover"
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

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Nội bật</h2>
            <span className="text-blue-600 cursor-pointer">Xem thêm »</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden">
                <img src="/placeholder.svg?height=200&width=300" alt="Tin tức" className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    Điện Biên Phủ, phường 21, Bình Thạnh - 4 TRIỆU Full nội thất
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    Danh sách chung cư các cấp tại Nội sảng trong và ngoài nước...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">TÌM KIẾM - LỰA CHỌN BẤT ĐỘNG SAN</h3>

                <p className="mb-6">IZI HOUSE - Find your room, your way With trust and ease</p>
                <div className="flex gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <Smartphone className="w-4 h-4 mr-2" />
                    App Store
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <Download className="w-4 h-4 mr-2" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white p-4 rounded-lg">
                <img src="/placeholder.svg?height=150&width=150" alt="QR Code" className="w-32 h-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">VỀ IZI HOUSE</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-white">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Tuyển dụng
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Quy chế hoạt động
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">TÀI KHOẢN</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Đăng ký
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Đăng nhập
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Quên mật khẩu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">LIÊN HỆ</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Hotline: 0978379005
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email: info@homedy.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">KẾT NỐI VỚI CHÚNG TÔI</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 izihouse.com. Tất cả bản quyền thuộc về izi house.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
