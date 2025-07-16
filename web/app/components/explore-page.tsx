"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Home, Heart, X, Info, Share2, ArrowLeft, ChevronLeft, ChevronRight, Bed, Square } from "lucide-react"
import Link from "next/link"

interface Property {
  id: string
  title: string
  address: string
  price: string
  area: string
  bedrooms: number
  bathrooms: number
  images: string[]
  description: string
  amenities: string[]
  type: string
}

export default function ExplorePage() {
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const properties: Property[] = [
    {
      id: "1",
      title: "Căn hộ hiện đại trung tâm",
      address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
      price: "8.0tr/tháng",
      area: "65m²",
      bedrooms: 2,
      bathrooms: 1,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description: "Căn hộ 2 phòng ngủ hiện đại, đầy đủ nội thất, view đẹp",
      amenities: ["Wifi", "Điều hòa", "Tủ lạnh", "Máy giặt"],
      type: "Căn hộ",
    },
    {
      id: "2",
      title: "Phòng trọ cao cấp Quận 3",
      address: "456 Võ Văn Tần, Quận 3, TP.HCM",
      price: "5.5tr/tháng",
      area: "35m²",
      bedrooms: 1,
      bathrooms: 1,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description: "Phòng trọ cao cấp, an ninh tốt, gần trường đại học",
      amenities: ["Wifi", "Điều hòa", "Bảo vệ 24/7"],
      type: "Phòng trọ",
    },
    {
      id: "3",
      title: "Studio sang trọng Quận 7",
      address: "789 Nguyễn Thị Thập, Quận 7, TP.HCM",
      price: "12.0tr/tháng",
      area: "45m²",
      bedrooms: 1,
      bathrooms: 1,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description: "Studio hiện đại, view sông Sài Gòn, đầy đủ tiện nghi",
      amenities: ["Wifi", "Điều hòa", "Bếp", "Gym", "Hồ bơi"],
      type: "Studio",
    },
  ]

  const currentProperty = properties[currentPropertyIndex]

  const handleNextImage = () => {
    if (currentImageIndex < currentProperty.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const handleLike = () => {
    setIsAnimating(true)
    setTimeout(() => {
      nextProperty()
      setIsAnimating(false)
    }, 300)
  }

  const handleDislike = () => {
    setIsAnimating(true)
    setTimeout(() => {
      nextProperty()
      setIsAnimating(false)
    }, 300)
  }

  const nextProperty = () => {
    if (currentPropertyIndex < properties.length - 1) {
      setCurrentPropertyIndex(currentPropertyIndex + 1)
      setCurrentImageIndex(0)
    } else {
      // Reset to first property when reaching the end
      setCurrentPropertyIndex(0)
      setCurrentImageIndex(0)
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentProperty.title,
        text: `${currentProperty.title} - ${currentProperty.price}`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Đã sao chép link!")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Khám phá</h1>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            {currentPropertyIndex + 1} / {properties.length}
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-sm mx-auto">
          <Card
            className={`overflow-hidden shadow-2xl transition-all duration-300 ${
              isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            {/* Image Section */}
            <div className="relative h-96 bg-gray-200">
              <img
                src={currentProperty.images[currentImageIndex] || "/placeholder.svg"}
                alt={currentProperty.title}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {currentProperty.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    disabled={currentImageIndex === currentProperty.images.length - 1}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full disabled:opacity-30"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {currentProperty.images.length}
              </div>

              {/* Property Type Badge */}
              <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{currentProperty.type}</Badge>

              {/* Decorative grass border */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-400 to-green-300 opacity-80">
                <div className="flex items-end justify-center h-full">
                  <div className="text-green-800 text-xs">🌿🌸🌿🌸🌿🌸🌿🌸🌿</div>
                </div>
              </div>
            </div>

            {/* Property Info */}
            <CardContent className="p-6 space-y-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{currentProperty.title}</h2>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{currentProperty.address}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-700">
                  <span className="font-semibold text-red-600 text-lg">{currentProperty.price}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{currentProperty.area}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{currentProperty.bedrooms} PN</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                  onClick={() => alert("Xem thông tin chi tiết")}
                >
                  <Info className="w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                  onClick={handleShare}
                >
                  <Share2 className="w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                  onClick={handleDislike}
                >
                  <X className="w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
                  onClick={handleLike}
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Property Description */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm mb-3">{currentProperty.description}</p>
                <div className="flex flex-wrap gap-2">
                  {currentProperty.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Swipe Instructions */}
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>Vuốt hoặc sử dụng các nút để khám phá thêm</p>
          </div>
        </div>
      </main>
    </div>
  )
}
