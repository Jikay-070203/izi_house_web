"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Home,
  Wifi,
  Truck,
  Sparkles,
  Star,
  Clock,
  Shield,
  Phone,
  MessageCircle,
  Check,
  Users,
  Award,
  Zap,
  Smartphone,
} from "lucide-react"
import Link from "next/link"

interface Service {
  id: string
  name: string
  price: string
  originalPrice?: string
  duration: string
  rating: number
  reviews: number
  features: string[]
  isPopular?: boolean
  description: string
  category: "wifi" | "moving" | "cleaning"
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all")

  const services: Service[] = [
    // WiFi Services
    {
      id: "wifi-premium",
      name: "Wifi Cao Tốc Premium",
      price: "200k",
      originalPrice: "250k",
      duration: "/tháng",
      rating: 4.8,
      reviews: 1250,
      features: ["100Mbps tốc độ", "Không giới hạn data", "Hỗ trợ 24/7", "Miễn phí lắp đặt"],
      isPopular: true,
      description: "Gói wifi cao cấp với tốc độ ổn định, phù hợp cho công việc và giải trí",
      category: "wifi",
    },
    {
      id: "wifi-basic",
      name: "Wifi Cơ Bản",
      price: "120k",
      duration: "/tháng",
      rating: 4.5,
      reviews: 890,
      features: ["50Mbps tốc độ", "500GB/tháng", "Hỗ trợ giờ hành chính", "Lắp đặt 50k"],
      description: "Gói wifi tiết kiệm cho nhu cầu sử dụng cơ bản hàng ngày",
      category: "wifi",
    },
    // Moving Services
    {
      id: "moving-express",
      name: "Vận Chuyển Express",
      price: "500k",
      originalPrice: "600k",
      duration: "/lần",
      rating: 4.9,
      reviews: 650,
      features: ["1-2 giờ hoàn thành", "Bảo hiểm đồ đạc", "Đội ngũ chuyên nghiệp", "Xe tải chuyên dụng"],
      isPopular: true,
      description: "Dịch vụ chuyển phòng nhanh chóng với đội ngũ chuyên nghiệp",
      category: "moving",
    },
    {
      id: "moving-economy",
      name: "Vận Chuyển Tiết Kiệm",
      price: "300k",
      duration: "/lần",
      rating: 4.3,
      reviews: 420,
      features: ["2-4 giờ hoàn thành", "Giá cố định", "Hỗ trợ đóng gói", "Trong nội thành"],
      description: "Lựa chọn tiết kiệm cho việc chuyển phòng trong khu vực",
      category: "moving",
    },
    // Cleaning Services
    {
      id: "cleaning-premium",
      name: "Dọn Phòng Premium",
      price: "150k",
      duration: "/lần",
      rating: 4.7,
      reviews: 980,
      features: ["2-3 giờ làm việc", "Dọn dẹp toàn diện", "Dụng cụ chuyên nghiệp", "Bảo đảm chất lượng"],
      description: "Dịch vụ dọn phòng chuyên nghiệp với chất lượng cao nhất",
      category: "cleaning",
    },
    {
      id: "cleaning-basic",
      name: "Dọn Phòng Cơ Bản",
      price: "80k",
      duration: "/lần",
      rating: 4.4,
      reviews: 750,
      features: ["1-2 giờ làm việc", "Dọn dẹp cơ bản", "Giá cả phải chăng", "Đặt lịch linh hoạt"],
      description: "Dịch vụ dọn phòng cơ bản với giá cả hợp lý",
      category: "cleaning",
    },
    {
      id: "cleaning-monthly",
      name: "Dọn Phòng Định Kỳ",
      price: "500k",
      originalPrice: "600k",
      duration: "/tháng",
      rating: 4.6,
      reviews: 340,
      features: ["4 lần/tháng", "Ưu tiên đặt lịch", "Giảm giá 20%", "Nhân viên cố định"],
      isPopular: true,
      description: "Gói dọn phòng định kỳ tiết kiệm cho khách hàng thường xuyên",
      category: "cleaning",
    },
  ]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "50,000+", label: "Khách hàng tin tưởng" },
    { icon: <Award className="w-6 h-6" />, number: "4.8/5", label: "Đánh giá trung bình" },
    { icon: <Zap className="w-6 h-6" />, number: "24/7", label: "Hỗ trợ khách hàng" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại trang chủ</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Tiện ích & Dịch vụ</h1>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            Dịch vụ chất lượng cao
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Tiện ích & Dịch vụ IZI HOUSE</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Trải nghiệm cuộc sống tiện nghi với các dịch vụ chất lượng cao, giá cả hợp lý
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-blue-200">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Danh sách dịch vụ</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp đa dạng các dịch vụ để cuộc sống của bạn trở nên thuận tiện và thoải mái hơn
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white shadow-sm">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Tất cả
              </TabsTrigger>
              <TabsTrigger value="wifi" className="flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                Wifi
              </TabsTrigger>
              <TabsTrigger value="moving" className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                Vận chuyển
              </TabsTrigger>
              <TabsTrigger value="cleaning" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Dọn phòng
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                    {service.isPopular && (
                      <Badge className="absolute top-4 right-4 bg-red-600 text-white z-10">Phổ biến</Badge>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        {service.category === "wifi" && <Wifi className="w-5 h-5 text-blue-600" />}
                        {service.category === "moving" && <Truck className="w-5 h-5 text-green-600" />}
                        {service.category === "cleaning" && <Sparkles className="w-5 h-5 text-purple-600" />}
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}</span>
                        </div>
                        <span className="text-gray-500">({service.reviews} đánh giá)</span>
                      </div>

                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-red-600">{service.price}</span>
                        <span className="text-gray-600">{service.duration}</span>
                        {service.originalPrice && (
                          <span className="text-gray-400 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-600" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Phone className="w-4 h-4 mr-2" />
                          Đặt dịch vụ
                        </Button>
                        <Button variant="outline" size="icon" className="bg-transparent">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn IZI HOUSE?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm dịch vụ tốt nhất với chất lượng đảm bảo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Đảm bảo chất lượng</h4>
              <p className="text-gray-600">
                Tất cả dịch vụ đều được kiểm tra chất lượng nghiêm ngặt và có chế độ bảo hành
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Nhanh chóng tiện lợi</h4>
              <p className="text-gray-600">Đặt dịch vụ dễ dàng qua app, nhận phản hồi nhanh chóng trong 15 phút</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Giá cả hợp lý</h4>
              <p className="text-gray-600">Cam kết giá cả minh bạch, cạnh tranh nhất thị trường với nhiều ưu đãi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Tải app để trải nghiệm dịch vụ</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Đặt dịch vụ nhanh chóng, theo dõi tiến độ real-time và nhận nhiều ưu đãi hấp dẫn
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-black text-white hover:bg-gray-800">
              <Smartphone className="w-4 h-4 mr-2" />
              App Store
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              <Smartphone className="w-4 h-4 mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
