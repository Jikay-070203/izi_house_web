"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Home,
  Percent,
  Gift,
  Star,
  Clock,
  Zap,
  Crown,
  FlameIcon as Fire,
  Tag,
  Calendar,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Timer,
  Target,
} from "lucide-react"
import Link from "next/link"

interface PromotionPackage {
  id: string
  name: string
  originalPrice: number
  discountedPrice: number
  discountPercent: number
  duration: string
  features: string[]
  isHot?: boolean
  isBestValue?: boolean
  description: string
  validUntil: string
  category: "basic" | "premium" | "vip"
  color: string
}

export default function PromotionsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 42,
  })

  const promotionPackages: PromotionPackage[] = [
    {
      id: "flash-sale-vip",
      name: "Flash Sale VIP",
      originalPrice: 500000,
      discountedPrice: 250000,
      discountPercent: 50,
      duration: "30 ngày",
      features: [
        "Tin đăng hiển thị ưu tiên TOP 3",
        "Làm mới tin tự động mỗi ngày",
        "Hỗ trợ 24/7 qua hotline riêng",
        "Badge VIP nổi bật",
        "Thống kê chi tiết lượt xem",
        "Đăng không giới hạn số tin",
      ],
      isHot: true,
      isBestValue: true,
      description: "Gói VIP cao cấp nhất với ưu đãi khủng chỉ trong 24h!",
      validUntil: "31/12/2024",
      category: "vip",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "new-year-premium",
      name: "Tết 2025 Premium",
      originalPrice: 300000,
      discountedPrice: 180000,
      discountPercent: 40,
      duration: "30 ngày",
      features: [
        "Tin đăng hiển thị ưu tiên TOP 10",
        "Làm mới tin 2 lần/ngày",
        "Hỗ trợ trong giờ hành chính",
        "Badge Premium",
        "Thống kê cơ bản",
        "Đăng tối đa 20 tin",
      ],
      isHot: true,
      description: "Ưu đãi đặc biệt mừng năm mới 2025",
      validUntil: "15/01/2025",
      category: "premium",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "student-basic",
      name: "Ưu đãi Sinh viên",
      originalPrice: 150000,
      discountedPrice: 75000,
      discountPercent: 50,
      duration: "30 ngày",
      features: [
        "Tin đăng hiển thị bình thường",
        "Làm mới tin 1 lần/ngày",
        "Hỗ trợ qua email",
        "Đăng tối đa 5 tin",
        "Thống kê cơ bản",
      ],
      description: "Gói đặc biệt dành cho sinh viên với giá siêu ưu đãi",
      validUntil: "28/02/2025",
      category: "basic",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "weekend-premium",
      name: "Weekend Premium",
      originalPrice: 300000,
      discountedPrice: 210000,
      discountPercent: 30,
      duration: "30 ngày",
      features: [
        "Tin đăng hiển thị ưu tiên TOP 10",
        "Làm mới tin 2 lần/ngày",
        "Hỗ trợ cuối tuần",
        "Badge Premium",
        "Thống kê chi tiết",
        "Đăng tối đa 15 tin",
      ],
      description: "Ưu đãi cuối tuần cho gói Premium",
      validUntil: "05/01/2025",
      category: "premium",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "first-time-vip",
      name: "Lần đầu dùng VIP",
      originalPrice: 500000,
      discountedPrice: 350000,
      discountPercent: 30,
      duration: "30 ngày",
      features: [
        "Tin đăng hiển thị ưu tiên TOP 5",
        "Làm mới tin tự động",
        "Hỗ trợ 24/7",
        "Badge VIP",
        "Thống kê nâng cao",
        "Đăng không giới hạn",
        "Tư vấn miễn phí",
      ],
      description: "Ưu đãi đặc biệt cho khách hàng lần đầu sử dụng gói VIP",
      validUntil: "31/01/2025",
      category: "vip",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "loyalty-basic",
      name: "Khách hàng thân thiết",
      originalPrice: 150000,
      discountedPrice: 105000,
      discountPercent: 30,
      duration: "30 ngày",
      features: [
        "Tin đăng hiển thị bình thường",
        "Làm mới tin 1 lần/ngày",
        "Hỗ trợ ưu tiên",
        "Đăng tối đa 8 tin",
        "Thống kê cơ bản",
      ],
      description: "Ưu đãi dành cho khách hàng đã sử dụng dịch vụ",
      validUntil: "31/03/2025",
      category: "basic",
      color: "from-teal-500 to-green-500",
    },
  ]

  const filteredPackages =
    activeTab === "all" ? promotionPackages : promotionPackages.filter((pkg) => pkg.category === activeTab)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  const handlePurchase = (packageId: string) => {
    alert(`Đăng ký gói ${packageId} thành công! Chúng tôi sẽ liên hệ với bạn trong 5 phút.`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-red-600 hover:text-red-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại trang chủ</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-red-600" />
              <h1 className="text-xl font-semibold text-gray-900">Chương trình ưu đãi</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-red-600 text-white animate-pulse">
              <Fire className="w-3 h-3 mr-1" />
              HOT SALE
            </Badge>
          </div>
        </div>
      </header>

      {/* Flash Sale Countdown */}
      <section className="py-8 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Fire className="w-8 h-8 text-yellow-300 animate-bounce" />
            <h2 className="text-3xl font-bold text-white">FLASH SALE 50% - CHỈ CÒN</h2>
            <Fire className="w-8 h-8 text-yellow-300 animate-bounce" />
          </div>

          <div className="flex justify-center gap-4 mb-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold text-white">{value.toString().padStart(2, "0")}</div>
                <div className="text-sm text-red-100 uppercase">
                  {unit === "days" ? "Ngày" : unit === "hours" ? "Giờ" : unit === "minutes" ? "Phút" : "Giây"}
                </div>
              </div>
            ))}
          </div>

          <p className="text-red-100 text-lg">⚡ Ưu đãi khủng nhất năm - Nhanh tay kẻo lỡ! ⚡</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">15,000+</div>
              <div className="text-gray-600">Khách hàng đã mua gói</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">300%</div>
              <div className="text-gray-600">Tăng hiệu quả đăng tin</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Đánh giá từ khách hàng</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">24h</div>
              <div className="text-gray-600">Kích hoạt nhanh chóng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Gói ưu đãi đăng tin</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chọn gói phù hợp để tin đăng của bạn được nhiều người xem nhất với mức giá ưu đãi nhất
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white shadow-sm">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Tất cả
              </TabsTrigger>
              <TabsTrigger value="basic" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Cơ bản
              </TabsTrigger>
              <TabsTrigger value="premium" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Premium
              </TabsTrigger>
              <TabsTrigger value="vip" className="flex items-center gap-2">
                <Crown className="w-4 h-4" />
                VIP
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <Card
                    key={pkg.id}
                    className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                      pkg.isBestValue ? "ring-2 ring-red-500 scale-105" : ""
                    }`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${pkg.color}`}></div>

                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {pkg.isHot && (
                        <Badge className="bg-red-600 text-white animate-pulse">
                          <Fire className="w-3 h-3 mr-1" />
                          HOT
                        </Badge>
                      )}
                      {pkg.isBestValue && (
                        <Badge className="bg-yellow-500 text-white">
                          <Crown className="w-3 h-3 mr-1" />
                          BEST
                        </Badge>
                      )}
                    </div>

                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{pkg.discountPercent}%
                      </div>
                    </div>

                    <CardHeader className="pt-12 pb-4">
                      <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                      <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                      {/* Pricing */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-3xl font-bold text-red-600">{formatPrice(pkg.discountedPrice)}</span>
                          <span className="text-gray-500">/{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 line-through">{formatPrice(pkg.originalPrice)}</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Tiết kiệm {formatPrice(pkg.originalPrice - pkg.discountedPrice)}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Tính năng bao gồm:</h4>
                        <ul className="space-y-1">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Valid Until */}
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                        <Calendar className="w-4 h-4" />
                        <span>Có hiệu lực đến: {pkg.validUntil}</span>
                      </div>

                      {/* Action Button */}
                      <Button
                        className={`w-full bg-gradient-to-r ${pkg.color} text-white hover:opacity-90 transition-opacity`}
                        onClick={() => handlePurchase(pkg.id)}
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Mua ngay - Tiết kiệm {pkg.discountPercent}%
                      </Button>

                      {/* Urgency Text */}
                      {pkg.isHot && (
                        <div className="text-center text-red-600 text-sm font-medium">
                          <Timer className="w-4 h-4 inline mr-1" />
                          Chỉ còn ít suất - Nhanh tay!
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Tại sao nên chọn gói ưu đãi của chúng tôi?</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Hiệu quả cao</h4>
              <p className="text-blue-100">Tin đăng được xem nhiều hơn 300% so với đăng tin thường</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Giá ưu đãi nhất</h4>
              <p className="text-blue-100">Giảm giá lên đến 50% so với giá gốc, tiết kiệm tối đa chi phí</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Kích hoạt nhanh</h4>
              <p className="text-blue-100">Gói được kích hoạt ngay sau khi thanh toán, không chờ đợi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Đừng bỏ lỡ cơ hội vàng!</h3>
          <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
            Hàng nghìn khách hàng đã tin tưởng và đạt được hiệu quả cao với các gói ưu đãi của chúng tôi
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Gift className="w-5 h-5 mr-2" />
              Xem tất cả ưu đãi
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg bg-transparent"
            >
              <Tag className="w-5 h-5 mr-2" />
              Liên hệ tư vấn
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
