"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Search,
  MapPin,
  Home,
  Star,
  Heart,
  Phone,
  MessageCircle,
  Grid3X3,
  List,
  Eye,
  Bed,
  Bath,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

interface Room {
  id: string
  title: string
  price: string
  location: string
  area: string
  bedrooms: number
  bathrooms: number
  image: string
  images: string[]
  isHot?: boolean
  isFeatured?: boolean
  isVerified?: boolean
  rating: number
  reviews: number
  views: number
  category: "studio" | "1bedroom" | "ktx" | "loft"
  amenities: string[]
  owner: {
    name: string
    avatar: string
    isVerified: boolean
    responseRate: string
  }
  description: string
  availableFrom: string
}

export default function RoomsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [location, setLocation] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  // Get category from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get("category")
    if (category) {
      setSelectedCategory(category)
    }
  }, [])

  const allRooms: Room[] = [
    {
      id: "1",
      title: "Studio hiện đại gần trường ĐH Bách Khoa",
      price: "4.5 triệu/tháng",
      location: "Quận Thủ Đức, Hồ Chí Minh",
      area: "25 m²",
      bedrooms: 0,
      bathrooms: 1,
      image: "/images/1.jpg",
      images: [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg"
      ],
      isHot: true,
      isVerified: true,
      rating: 4.8,
      reviews: 24,
      views: 1250,
      category: "studio",
      amenities: ["Wifi miễn phí", "Điều hòa", "Tủ lạnh", "Máy giặt chung"],
      owner: {
        name: "Chị Lan Anh",
        avatar: "/placeholder.svg?height=40&width=40",
        isVerified: true,
        responseRate: "98%",
      },
      description: "Studio đầy đủ nội thất, gần trường học, siêu thị, giao thông thuận tiện",
      availableFrom: "01/01/2025",
    },
    {
      id: "2",
      title: "Phòng 1PN đầy đủ nội thất Quận 1",
      price: "8.5 triệu/tháng",
      location: "Quận 1, TP Hồ Chí Minh",
      area: "35 m²",
      bedrooms: 1,
      bathrooms: 1,
      image: "/images/6.jpg",
      images: [
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        "/images/9.jpg",
        "/images/10.jpg",
        "/images/11.jpg"
      ],
      isFeatured: true,
      isVerified: true,
      rating: 4.9,
      reviews: 18,
      views: 890,
      category: "1bedroom",
      amenities: ["Wifi miễn phí", "Điều hòa", "Bếp riêng", "Ban công", "Thang máy"],
      owner: {
        name: "Anh Minh",
        avatar: "/placeholder.svg?height=40&width=40",
        isVerified: true,
        responseRate: "95%",
      },
      description: "Căn hộ 1 phòng ngủ cao cấp tại trung tâm Quận 1, view đẹp",
      availableFrom: "15/01/2025",
    },
    {
      id: "3",
      title: "KTX cao cấp dành cho sinh viên",
      price: "2.3 triệu/tháng",
      location: "Quận Bình Thạnh, TP.HCM",
      area: "15 m²",
      bedrooms: 1,
      bathrooms: 1,
      image: "/images/12.jpg",
      images: [
        "/images/12.jpg",
        "/images/13.jpg",
        "/images/14.jpg",
        "/images/15.jpg",
        "/images/16.jpg"
      ],
      isVerified: false,
      rating: 4.5,
      reviews: 32,
      views: 650,
      category: "ktx",
      amenities: ["Wifi miễn phí", "Điều hòa", "Bảo vệ 24/7", "Giặt ủi"],
      owner: {
        name: "Cô Mai",
        avatar: "/placeholder.svg?height=40&width=40",
        isVerified: false,
        responseRate: "87%",
      },
      description: "KTX hiện đại với đầy đủ tiện nghi, an ninh tốt",
      availableFrom: "Ngay",
    },
    {
      id: "4",
      title: "Phòng gác xép view đẹp Quận 3",
      price: "3.8 triệu/tháng",
      location: "Quận 3, TP.HCM",
      area: "20 m²",
      bedrooms: 1,
      bathrooms: 1,
      image: "/images/17.jpg",
      images: [
        "/images/17.jpg",
        "/images/18.jpg",
        "/images/19.jpg",
        "/images/20.jpg"
      ],
      isHot: true,
      isVerified: true,
      rating: 4.6,
      reviews: 15,
      views: 420,
      category: "loft",
      amenities: ["Wifi miễn phí", "Điều hòa", "Cửa sổ lớn", "Yên tĩnh"],
      owner: {
        name: "Chị Hương",
        avatar: "/placeholder.svg?height=40&width=40",
        isVerified: true,
        responseRate: "92%",
      },
      description: "Phòng gác xép thiết kế độc đáo, không gian thoáng mát",
      availableFrom: "20/01/2025",
    },
    {
      id: "5",
      title: "Studio luxury gần sân bay",
      price: "6.2 triệu/tháng",
      location: "Quận Tân Bình, TP.HCM",
      area: "30 m²",
      bedrooms: 0,
      bathrooms: 1,
      image: "/images/21.jpg",
      images: [
        "/images/21.jpg",
        "/images/22.jpg",
        "/images/23.jpg",
        "/images/24.jpg",
        "/images/25.jpg"
      ],
      isFeatured: true,
      isVerified: true,
      rating: 4.7,
      reviews: 28,
      views: 980,
      category: "studio",
      amenities: ["Wifi miễn phí", "Điều hòa", "Bếp riêng", "Gym", "Hồ bơi"],
      owner: {
        name: "Anh Tuấn",
        avatar: "/placeholder.svg?height=40&width=40",
        isVerified: true,
        responseRate: "99%",
      },
      description: "Studio cao cấp với đầy đủ tiện ích, gần sân bay Tân Sơn Nhất",
      availableFrom: "10/01/2025",
    },
    {
      id: "6",
      title: "Căn hộ 1PN view sông",
      price: "12.0 triệu/tháng",
      location: "Quận 2, TP.HCM",
      area: "45 m²",
      bedrooms: 1,
      bathrooms: 1,
      image: "/images/26.jpg",
      images: [
        "/images/26.jpg",
        "/images/27.jpg",
        "/images/28.jpg",
        "/images/29.jpg",
        "/images/30.jpg",
        "/images/31.jpg"
      ],
      isFeatured: true,
      isVerified: true,
      rating: 4.9,
      reviews: 12,
      views: 1100,
      category: "1bedroom",
      amenities: ["Wifi miễn phí", "Điều hòa", "Ban công view sông", "Thang máy", "Bảo vệ 24/7"],
      owner: {
        name: "Chị Thảo",
        avatar: "/placeholder.svg?height=40&width=40",
        isVerified: true,
        responseRate: "96%",
      },
      description: "Căn hộ cao cấp view sông Sài Gòn, nội thất sang trọng",
      availableFrom: "05/02/2025",
    },
  ]

  const categoryInfo = {
    studio: {
      title: "Phòng Studio",
      description: "Không gian sống hiện đại, tiết kiệm diện tích, phù hợp cho người độc thân",
      count: allRooms.filter((r) => r.category === "studio").length,
    },
    "1bedroom": {
      title: "1 Phòng Ngủ",
      description: "Căn hộ 1 phòng ngủ riêng biệt, thoải mái cho cặp đôi hoặc gia đình nhỏ",
      count: allRooms.filter((r) => r.category === "1bedroom").length,
    },
    ktx: {
      title: "KTX & Sleepbox",
      description: "Giải pháp ở tiết kiệm cho sinh viên và người trẻ mới đi làm",
      count: allRooms.filter((r) => r.category === "ktx").length,
    },
    loft: {
      title: "Phòng Gác Xép",
      description: "Không gian sống độc đáo với thiết kế loft, phù hợp cho người yêu thích sự khác biệt",
      count: allRooms.filter((r) => r.category === "loft").length,
    },
  }

  // Filter and sort rooms
  const filteredRooms = allRooms
    .filter((room) => {
      if (selectedCategory !== "all" && room.category !== selectedCategory) return false
      if (
        searchQuery &&
        !room.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !room.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false
      if (priceRange !== "all") {
        const price = Number.parseFloat(room.price.replace(/[^\d.]/g, ""))
        switch (priceRange) {
          case "under-3":
            if (price >= 3) return false
            break
          case "3-6":
            if (price < 3 || price >= 6) return false
            break
          case "6-10":
            if (price < 6 || price >= 10) return false
            break
          case "over-10":
            if (price < 10) return false
            break
        }
      }
      if (location !== "all") {
        if (!room.location.toLowerCase().includes(location.toLowerCase())) return false
      }
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return Number.parseFloat(a.price.replace(/[^\d.]/g, "")) - Number.parseFloat(b.price.replace(/[^\d.]/g, ""))
        case "price-high":
          return Number.parseFloat(b.price.replace(/[^\d.]/g, "")) - Number.parseFloat(a.price.replace(/[^\d.]/g, ""))
        case "rating":
          return b.rating - a.rating
        case "views":
          return b.views - a.views
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại trang chủ</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">
                {selectedCategory !== "all" && categoryInfo[selectedCategory as keyof typeof categoryInfo]
                  ? categoryInfo[selectedCategory as keyof typeof categoryInfo].title
                  : "Tất cả phòng"}
              </h1>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            {filteredRooms.length} phòng tìm thấy
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      {selectedCategory !== "all" && categoryInfo[selectedCategory as keyof typeof categoryInfo] && (
        <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {categoryInfo[selectedCategory as keyof typeof categoryInfo].title}
            </h2>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              {categoryInfo[selectedCategory as keyof typeof categoryInfo].description}
            </p>
            <div className="flex justify-center gap-8 text-blue-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {categoryInfo[selectedCategory as keyof typeof categoryInfo].count}
                </div>
                <div className="text-sm">Phòng có sẵn</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.7★</div>
                <div className="text-sm">Đánh giá trung bình</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Tìm kiếm theo tên hoặc địa chỉ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Loại phòng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả loại phòng</SelectItem>
                  <SelectItem value="studio">Phòng Studio</SelectItem>
                  <SelectItem value="1bedroom">1 Phòng ngủ</SelectItem>
                  <SelectItem value="ktx">KTX & Sleepbox</SelectItem>
                  <SelectItem value="loft">Phòng gác xép</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Khoảng giá" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả mức giá</SelectItem>
                  <SelectItem value="under-3">Dưới 3 triệu</SelectItem>
                  <SelectItem value="3-6">3 - 6 triệu</SelectItem>
                  <SelectItem value="6-10">6 - 10 triệu</SelectItem>
                  <SelectItem value="over-10">Trên 10 triệu</SelectItem>
                </SelectContent>
              </Select>

              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Khu vực" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả khu vực</SelectItem>
                  <SelectItem value="quận 1">Quận 1</SelectItem>
                  <SelectItem value="quận 2">Quận 2</SelectItem>
                  <SelectItem value="quận 3">Quận 3</SelectItem>
                  <SelectItem value="thủ đức">Quận Thủ Đức</SelectItem>
                  <SelectItem value="bình thạnh">Quận Bình Thạnh</SelectItem>
                  <SelectItem value="tân bình">Quận Tân Bình</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                  <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                  <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
                  <SelectItem value="views">Lượt xem nhiều nhất</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredRooms.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Không tìm thấy phòng nào</h3>
              <p className="text-gray-600">Hãy thử thay đổi bộ lọc để tìm thấy phòng phù hợp</p>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
              {filteredRooms.map((room) => (
                <Card
                  key={room.id}
                  className={`overflow-hidden hover:shadow-lg transition-shadow ${viewMode === "list" ? "flex" : ""}`}
                >
                  <div className={`relative ${viewMode === "list" ? "w-80 flex-shrink-0" : ""}`}>
                    <img
                      src={room.image}
                      alt={room.title}
                      className={`object-cover ${viewMode === "list" ? "w-full h-full" : "w-full h-48"}`}
                      onError={(e) => {
                        if (e.currentTarget.src.indexOf('room-placeholder.jpg') === -1) {
                          e.currentTarget.src = "/images/room-placeholder.jpg";
                        } else {
                          e.currentTarget.src = "/placeholder.jpg";
                        }
                      }}
                    />

                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {room.isHot && <Badge className="bg-red-600 text-white text-xs">HOT</Badge>}
                      {room.isFeatured && <Badge className="bg-yellow-600 text-white text-xs">FEATURED</Badge>}
                    </div>

                    {/* Verified Badge */}
                    {room.isVerified && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-green-600 text-white text-xs flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </Badge>
                      </div>
                    )}

                    {/* Heart Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className={viewMode === "list" ? "flex justify-between h-full" : ""}>
                      <div className={viewMode === "list" ? "flex-1 pr-4" : ""}>
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{room.title}</h3>

                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {room.location}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            {room.area}
                          </span>
                          {room.bedrooms > 0 && (
                            <span className="flex items-center gap-1">
                              <Bed className="w-4 h-4" />
                              {room.bedrooms} PN
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            {room.bathrooms} WC
                          </span>
                        </div>

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {room.amenities.slice(0, 3).map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                          {room.amenities.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{room.amenities.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Rating and Views */}
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{room.rating}</span>
                            <span>({room.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{room.views}</span>
                          </div>
                        </div>

                        {/* Owner Info */}
                        <div className="flex items-center gap-2 mb-3">
                          <img
                            src={room.owner.avatar || "/placeholder.svg"}
                            alt={room.owner.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm text-gray-600">{room.owner.name}</span>
                          {room.owner.isVerified && <CheckCircle className="w-4 h-4 text-green-600" />}
                          <span className="text-xs text-gray-500">• {room.owner.responseRate} phản hồi</span>
                        </div>
                      </div>

                      <div className={viewMode === "list" ? "flex flex-col justify-between items-end" : ""}>
                        <div className={`text-right ${viewMode === "list" ? "mb-4" : "mb-3"}`}>
                          <p className="text-red-600 font-bold text-lg">{room.price}</p>
                          <p className="text-xs text-gray-500">Có thể vào: {room.availableFrom}</p>
                        </div>

                        <div className={`flex gap-2 ${viewMode === "list" ? "flex-col" : ""}`}>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Phone className="w-4 h-4 mr-1" />
                            Gọi
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Chat
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
