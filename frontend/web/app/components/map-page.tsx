"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  MapPin,
  Home,
  Heart,
  Filter,
  Maximize2,
  Minimize2,
  Navigation,
  Phone,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

interface Property {
  id: string
  title: string
  address: string
  price: string
  area: string
  bedrooms: number
  bathrooms: number
  lat: number
  lng: number
  image: string
  type: string
  isHot?: boolean
}

export default function MapPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [priceFilter, setPriceFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const properties: Property[] = [
    {
      id: "1",
      title: "Căn hộ hiện đại trung tâm",
      address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
      price: "8.0tr/tháng",
      area: "65m²",
      bedrooms: 2,
      bathrooms: 1,
      lat: 10.7769,
      lng: 106.7009,
      image: "/placeholder.svg?height=200&width=300",
      type: "Căn hộ",
      isHot: true,
    },
    {
      id: "2",
      title: "Phòng trọ cao cấp Quận 3",
      address: "456 Võ Văn Tần, Quận 3, TP.HCM",
      price: "5.5tr/tháng",
      area: "35m²",
      bedrooms: 1,
      bathrooms: 1,
      lat: 10.7829,
      lng: 106.6934,
      image: "/placeholder.svg?height=200&width=300",
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
      lat: 10.7411,
      lng: 106.72,
      image: "/placeholder.svg?height=200&width=300",
      type: "Studio",
    },
    {
      id: "4",
      title: "Nhà phố Quận 2",
      address: "321 Đường Số 1, Quận 2, TP.HCM",
      price: "15.0tr/tháng",
      area: "120m²",
      bedrooms: 3,
      bathrooms: 2,
      lat: 10.7971,
      lng: 106.7243,
      image: "/placeholder.svg?height=200&width=300",
      type: "Nhà phố",
    },
    {
      id: "5",
      title: "Căn hộ view sông Quận 4",
      address: "654 Tôn Đản, Quận 4, TP.HCM",
      price: "9.5tr/tháng",
      area: "70m²",
      bedrooms: 2,
      bathrooms: 1,
      lat: 10.7574,
      lng: 106.7037,
      image: "/placeholder.svg?height=200&width=300",
      type: "Căn hộ",
    },
  ]

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "duoi-5tr" && Number.parseFloat(property.price) < 5) ||
      (priceFilter === "5-10tr" && Number.parseFloat(property.price) >= 5 && Number.parseFloat(property.price) <= 10) ||
      (priceFilter === "tren-10tr" && Number.parseFloat(property.price) > 10)
    const matchesType = typeFilter === "all" || property.type === typeFilter

    return matchesSearch && matchesPrice && matchesType
  })

  // Simulate map initialization
  useEffect(() => {
    // In a real app, you would initialize Google Maps or another map service here
    console.log("Map initialized with properties:", filteredProperties)
  }, [filteredProperties])

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property)
  }

  const handleGetDirections = (property: Property) => {
    // Open Google Maps with directions
    const url = `https://www.google.com/maps/dir/?api=1&destination=${property.lat},${property.lng}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Bản đồ</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => setIsFullscreen(!isFullscreen)}>
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              {isFullscreen ? "Thu nhỏ" : "Toàn màn hình"}
            </Button>
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              {filteredProperties.length} kết quả
            </Badge>
          </div>
        </div>
      </header>

      <div className={`flex ${isFullscreen ? "h-screen" : "h-[calc(100vh-80px)]"}`}>
        {/* Sidebar - Filters & Property List */}
        {!isFullscreen && (
          <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
            {/* Search & Filters */}
            <div className="p-4 border-b border-gray-200 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Tìm kiếm theo tên hoặc địa chỉ..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Giá thuê" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="duoi-5tr">Dưới 5tr</SelectItem>
                    <SelectItem value="5-10tr">5tr - 10tr</SelectItem>
                    <SelectItem value="tren-10tr">Trên 10tr</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Loại hình" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="Căn hộ">Căn hộ</SelectItem>
                    <SelectItem value="Phòng trọ">Phòng trọ</SelectItem>
                    <SelectItem value="Studio">Studio</SelectItem>
                    <SelectItem value="Nhà phố">Nhà phố</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Property List */}
            <div className="p-4 space-y-4">
              <h3 className="font-semibold text-gray-900">Danh sách bất động sản</h3>
              {filteredProperties.map((property) => (
                <Card
                  key={property.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedProperty?.id === property.id ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => handlePropertyClick(property)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{property.title}</h4>
                          {property.isHot && <Badge className="bg-red-600 text-white text-xs ml-2">HOT</Badge>}
                        </div>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-1">{property.address}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-semibold text-red-600 text-sm">{property.price}</span>
                          <span className="text-xs text-gray-500">
                            {property.area} • {property.bedrooms}PN
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </aside>
        )}

        {/* Map Container */}
        <div className="flex-1 relative">
          {/* Simulated Map */}
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="border border-gray-300"></div>
                ))}
              </div>
            </div>

            {/* Street Lines */}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#94a3b8" strokeWidth="3" />
              <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#94a3b8" strokeWidth="3" />
              <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#94a3b8" strokeWidth="3" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#94a3b8" strokeWidth="3" />
              <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#94a3b8" strokeWidth="3" />
            </svg>

            {/* Property Markers */}
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-110 ${
                  selectedProperty?.id === property.id ? "scale-125 z-20" : "z-10"
                }`}
                style={{
                  left: `${20 + ((index * 15) % 60)}%`,
                  top: `${25 + ((index * 20) % 50)}%`,
                }}
                onClick={() => handlePropertyClick(property)}
              >
                <div className={`relative ${selectedProperty?.id === property.id ? "animate-bounce" : ""}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ${
                      property.isHot ? "bg-red-600" : "bg-blue-600"
                    }`}
                  >
                    <Home className="w-4 h-4" />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
                    <div className="bg-white px-2 py-1 rounded shadow-md text-xs font-medium whitespace-nowrap">
                      {property.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <Button variant="outline" size="icon" className="bg-white shadow-md">
                <Navigation className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white shadow-md">
                <Filter className="w-4 h-4" />
              </Button>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
              <h4 className="font-medium text-sm mb-2">Chú thích</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span>Bất động sản thường</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  <span>Bất động sản HOT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Property Detail Popup */}
          {selectedProperty && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-80 max-w-[calc(100%-2rem)]">
              <Card className="shadow-xl">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <img
                      src={selectedProperty.image || "/placeholder.svg"}
                      alt={selectedProperty.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{selectedProperty.title}</h3>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-red-500">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center text-gray-600 text-xs mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="line-clamp-1">{selectedProperty.address}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-red-600">{selectedProperty.price}</span>
                        <span className="text-xs text-gray-500">
                          {selectedProperty.area} • {selectedProperty.bedrooms}PN
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleGetDirections(selectedProperty)}
                    >
                      <Navigation className="w-4 h-4 mr-1" />
                      Chỉ đường
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Phone className="w-4 h-4 mr-1" />
                      Gọi
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
