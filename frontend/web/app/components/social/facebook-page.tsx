"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Facebook,
  Heart,
  MessageCircle,
  Share2,
  Users,
  Calendar,
  MapPin,
  Star,
  Home,
  ThumbsUp,
  Eye,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

interface FacebookPost {
  id: string
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
  timeAgo: string
  type: "property" | "promotion" | "news" | "community"
}

export default function FacebookPage() {
  const [activeTab, setActiveTab] = useState("posts")

  const facebookPosts: FacebookPost[] = [
    {
      id: "1",
      content:
        "🏠 CHÀO MỪNG ĐẾN VỚI IZI HOUSE! 🏠\n\nChúng tôi là nền tảng tìm kiếm bất động sản hàng đầu Việt Nam với hơn 50,000+ tin đăng chất lượng. Tìm ngôi nhà mơ ước của bạn ngay hôm nay!\n\n✨ Tính năng nổi bật:\n🔍 Tìm kiếm thông minh\n🗺️ Bản đồ tương tác\n👥 Tìm roommate\n🎁 Ưu đãi hấp dẫn\n\n#IziHouse #BatDongSan #TimPhong #Vietnam",
      image: "/placeholder.svg?height=400&width=600",
      likes: 2847,
      comments: 156,
      shares: 89,
      timeAgo: "2 giờ",
      type: "community",
    },
    {
      id: "2",
      content:
        "🔥 FLASH SALE 50% - CHỈ CÒN 24H! 🔥\n\nGiảm giá khủng cho gói VIP đăng tin:\n💰 Từ 500k → 250k\n⭐ Hiển thị TOP 3\n🚀 Làm mới tự động\n📞 Hỗ trợ 24/7\n\nNhanh tay đăng ký ngay! Link trong bio 👆\n\n#FlashSale #UuDai #DangTin #VIP",
      image: "/placeholder.svg?height=300&width=600",
      likes: 1923,
      comments: 234,
      shares: 167,
      timeAgo: "5 giờ",
      type: "promotion",
    },
    {
      id: "3",
      content:
        "🏡 TIN NÓNG: Căn hộ cao cấp Quận 1 - GIÁ SỐC! 🏡\n\n📍 Địa chỉ: 123 Nguyễn Huệ, Q1, TP.HCM\n💵 Giá: 8.5 tỷ (có thương lượng)\n📐 Diện tích: 85m²\n🛏️ 2PN + 2WC\n🌟 View sông Sài Gòn tuyệt đẹp\n\nLiên hệ ngay: 0978.379.005\n\n#CanHo #Quan1 #BatDongSan #ViewSong",
      image: "/placeholder.svg?height=350&width=600",
      likes: 3456,
      comments: 445,
      shares: 278,
      timeAgo: "1 ngày",
      type: "property",
    },
    {
      id: "4",
      content:
        "📈 BÁO CÁO THỊ TRƯỜNG BẤT ĐỘNG SẢN THÁNG 12/2024\n\n🔸 Giá thuê căn hộ tăng 5-8% so với cùng kỳ\n🔸 Khu vực Thủ Đức dẫn đầu về lượng giao dịch\n🔸 Phân khúc studio và 1PN được ưa chuộng nhất\n🔸 Dự báo Q1/2025 thị trường sẽ phục hồi mạnh\n\nXem báo cáo đầy đủ tại: izihouse.com/report\n\n#BaoCao #ThiTruong #BatDongSan #2024",
      likes: 892,
      comments: 67,
      shares: 45,
      timeAgo: "2 ngày",
      type: "news",
    },
    {
      id: "5",
      content:
        "🎉 CHÚC MỪNG ANH MINH ĐÃ TÌM ĐƯỢC ROOMMATE LÝ TƯỞNG! 🎉\n\nCảm ơn anh đã tin tưởng sử dụng tính năng Roommate của IZI HOUSE. Chúc 2 bạn có những trải nghiệm sống chung vui vẻ và hạnh phúc!\n\n👥 Bạn cũng đang tìm roommate?\n➡️ Truy cập: izihouse.com/roommate\n\n#Success #Roommate #HappyCustomer #IziHouse",
      image: "/placeholder.svg?height=250&width=600",
      likes: 1567,
      comments: 89,
      shares: 34,
      timeAgo: "3 ngày",
      type: "community",
    },
  ]

  const stats = [
    { label: "Người theo dõi", value: "125,847", icon: <Users className="w-5 h-5" /> },
    { label: "Lượt thích trang", value: "98,234", icon: <Heart className="w-5 h-5" /> },
    { label: "Bài viết tháng này", value: "156", icon: <Calendar className="w-5 h-5" /> },
    { label: "Tương tác trung bình", value: "2,847", icon: <TrendingUp className="w-5 h-5" /> },
  ]

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

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
              <Facebook className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">IZI HOUSE Facebook</h1>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            125k+ followers
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Home className="w-12 h-12 text-blue-600" />
            </div>
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-2">IZI HOUSE</h2>
              <p className="text-xl text-blue-100 mb-4">Trang Facebook chính thức</p>
              <div className="flex items-center justify-center gap-4">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Thích trang
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Nhắn tin
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-blue-600">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white shadow-sm">
              <TabsTrigger value="posts">Bài viết</TabsTrigger>
              <TabsTrigger value="about">Giới thiệu</TabsTrigger>
              <TabsTrigger value="photos">Hình ảnh</TabsTrigger>
              <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
            </TabsList>

            <TabsContent value="posts">
              <div className="max-w-2xl mx-auto space-y-6">
                {facebookPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <Home className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">IZI HOUSE</h3>
                          <p className="text-sm text-gray-600">{post.timeAgo}</p>
                        </div>
                        <Badge
                          className={`ml-auto ${
                            post.type === "promotion"
                              ? "bg-red-600"
                              : post.type === "property"
                                ? "bg-green-600"
                                : post.type === "news"
                                  ? "bg-orange-600"
                                  : "bg-blue-600"
                          }`}
                        >
                          {post.type === "promotion"
                            ? "Khuyến mãi"
                            : post.type === "property"
                              ? "Bất động sản"
                              : post.type === "news"
                                ? "Tin tức"
                                : "Cộng đồng"}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-800 whitespace-pre-line">{post.content}</p>

                      {post.image && (
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post content"
                          className="w-full rounded-lg object-cover max-h-96"
                        />
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{formatNumber(post.likes)}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                            <MessageCircle className="w-4 h-4" />
                            <span>{formatNumber(post.comments)}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                            <Share2 className="w-4 h-4" />
                            <span>{formatNumber(post.shares)}</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Eye className="w-4 h-4" />
                          <span>{formatNumber(post.likes * 3)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Giới thiệu về IZI HOUSE</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Về chúng tôi</h3>
                      <p className="text-gray-600">
                        IZI HOUSE là nền tảng bất động sản hàng đầu Việt Nam, kết nối hàng triệu người tìm kiếm ngôi nhà
                        lý tưởng. Với hơn 50,000+ tin đăng chất lượng và công nghệ AI tiên tiến, chúng tôi cam kết mang
                        đến trải nghiệm tìm kiếm bất động sản tốt nhất.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Địa chỉ
                        </h4>
                        <p className="text-gray-600">123 Nguyễn Huệ, Quận 1, TP.HCM</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Thành lập
                        </h4>
                        <p className="text-gray-600">2020</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Dịch vụ</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {[
                          "Tìm kiếm bất động sản",
                          "Đăng tin miễn phí",
                          "Tìm roommate",
                          "Dịch vụ tiện ích",
                          "Tư vấn đầu tư",
                          "Hỗ trợ 24/7",
                        ].map((service, index) => (
                          <Badge key={index} variant="outline" className="justify-center">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="photos">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=200&text=Photo${index + 1}`}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    <span className="text-3xl font-bold">4.8</span>
                  </div>
                  <p className="text-gray-600">Dựa trên 2,847 đánh giá</p>
                </div>

                {[
                  {
                    name: "Nguyễn Văn A",
                    rating: 5,
                    comment: "Dịch vụ tuyệt vời! Đã tìm được căn hộ ưng ý chỉ trong 1 tuần.",
                    time: "2 ngày trước",
                  },
                  {
                    name: "Trần Thị B",
                    rating: 5,
                    comment: "App rất tiện lợi, giao diện đẹp và dễ sử dụng. Highly recommended!",
                    time: "1 tuần trước",
                  },
                  {
                    name: "Lê Minh C",
                    rating: 4,
                    comment: "Tính năng tìm roommate rất hay, đã kết nối được với bạn cùng phòng phù hợp.",
                    time: "2 tuần trước",
                  },
                ].map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {review.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{review.name}</h4>
                            <div className="flex">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">{review.comment}</p>
                          <p className="text-sm text-gray-500">{review.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
