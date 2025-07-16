"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Newspaper,
  TrendingUp,
  TrendingDown,
  Calendar,
  Eye,
  Clock,
  User,
  Search,
  Mail,
  BarChart3,
  Home,
  MapPin,
  DollarSign,
  Percent,
  Users,
  Building,
  ArrowRight,
  BookOpen,
  FileText,
  Star,
} from "lucide-react"
import Link from "next/link"

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  views: number
  category: "market" | "news" | "blog" | "analysis"
  image: string
  tags: string[]
  featured?: boolean
}

interface MarketData {
  metric: string
  value: string
  change: number
  trend: "up" | "down" | "stable"
  description: string
}

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("market")
  const [searchQuery, setSearchQuery] = useState("")

  const marketData: MarketData[] = [
    {
      metric: "Giá thuê trung bình",
      value: "8.5 triệu/tháng",
      change: 5.2,
      trend: "up",
      description: "Tăng 5.2% so với tháng trước",
    },
    {
      metric: "Lượng tin đăng mới",
      value: "12,450 tin",
      change: 8.7,
      trend: "up",
      description: "Tăng 8.7% so với cùng kỳ năm trước",
    },
    {
      metric: "Thời gian thuê trung bình",
      value: "15 ngày",
      change: -12.3,
      trend: "down",
      description: "Giảm 12.3% - Thị trường sôi động hơn",
    },
    {
      metric: "Tỷ lệ lấp đầy",
      value: "87%",
      change: 3.1,
      trend: "up",
      description: "Tăng 3.1% - Nhu cầu thuê cao",
    },
  ]

  const newsArticles: NewsArticle[] = [
    {
      id: "1",
      title: "Thị trường cho thuê căn hộ TP.HCM: Giá tăng mạnh trong quý IV/2024",
      excerpt:
        "Theo báo cáo mới nhất, giá thuê căn hộ tại TP.HCM đã tăng trung bình 8-12% trong quý IV/2024, với khu vực Thủ Đức dẫn đầu về mức tăng giá.",
      content: "Nội dung chi tiết bài báo...",
      author: "Nguyễn Minh Anh",
      publishDate: "2024-12-28",
      readTime: "5 phút",
      views: 15420,
      category: "market",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Thị trường", "TP.HCM", "Giá thuê", "Quý IV"],
      featured: true,
    },
    {
      id: "2",
      title: "Xu hướng tìm kiếm nhà ở của Gen Z: Ưu tiên tiện ích và công nghệ",
      excerpt:
        "Khảo sát mới cho thấy thế hệ Gen Z ưu tiên các yếu tố như wifi tốc độ cao, không gian làm việc và các tiện ích hiện đại khi tìm kiếm chỗ ở.",
      content: "Nội dung chi tiết bài báo...",
      author: "Trần Thị Hương",
      publishDate: "2024-12-27",
      readTime: "7 phút",
      views: 8930,
      category: "analysis",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Gen Z", "Xu hướng", "Công nghệ", "Tiện ích"],
    },
    {
      id: "3",
      title: "5 điều cần biết khi thuê phòng trọ lần đầu",
      excerpt:
        "Hướng dẫn chi tiết dành cho những người lần đầu thuê phòng trọ, từ việc tìm kiếm, thương lượng giá cả đến ký hợp đồng an toàn.",
      content: "Nội dung chi tiết bài viết...",
      author: "Lê Văn Đức",
      publishDate: "2024-12-26",
      readTime: "10 phút",
      views: 12560,
      category: "blog",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Hướng dẫn", "Phòng trọ", "Lần đầu", "Tips"],
    },
    {
      id: "4",
      title: "Dự báo thị trường bất động sản 2025: Cơ hội và thách thức",
      excerpt:
        "Các chuyên gia dự báo thị trường bất động sản 2025 sẽ có nhiều biến động, với cơ hội lớn ở phân khúc căn hộ cho thuê và nhà ở xã hội.",
      content: "Nội dung chi tiết bài báo...",
      author: "Phạm Minh Tuấn",
      publishDate: "2024-12-25",
      readTime: "12 phút",
      views: 18750,
      category: "analysis",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Dự báo", "2025", "Thị trường", "Phân tích"],
      featured: true,
    },
    {
      id: "5",
      title: "Roommate matching: Xu hướng mới của giới trẻ thành thị",
      excerpt:
        "Việc tìm kiếm bạn cùng phòng thông qua các ứng dụng công nghệ đang trở thành xu hướng phổ biến, giúp tiết kiệm chi phí và tạo kết nối xã hội.",
      content: "Nội dung chi tiết bài viết...",
      author: "Hoàng Thị Mai",
      publishDate: "2024-12-24",
      readTime: "6 phút",
      views: 9840,
      category: "blog",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Roommate", "Công nghệ", "Giới trẻ", "Xu hướng"],
    },
    {
      id: "6",
      title: "Chính sách mới về thuế cho thuê nhà: Những điều cần lưu ý",
      excerpt:
        "Chính phủ vừa ban hành quy định mới về thuế cho thuê nhà, ảnh hưởng đến cả chủ nhà và người thuê. Cùng tìm hiểu chi tiết.",
      content: "Nội dung chi tiết bài báo...",
      author: "Vũ Thanh Long",
      publishDate: "2024-12-23",
      readTime: "8 phút",
      views: 14320,
      category: "news",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Chính sách", "Thuế", "Cho thuê", "Quy định"],
    },
    {
      id: "7",
      title: "Kinh nghiệm đầu tư căn hộ cho thuê: Từ A đến Z",
      excerpt:
        "Hướng dẫn toàn diện về đầu tư căn hộ cho thuê, từ việc chọn vị trí, tính toán lợi nhuận đến quản lý và vận hành hiệu quả.",
      content: "Nội dung chi tiết bài viết...",
      author: "Đặng Minh Quân",
      publishDate: "2024-12-22",
      readTime: "15 phút",
      views: 11670,
      category: "blog",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Đầu tư", "Căn hộ", "Cho thuê", "Kinh nghiệm"],
    },
    {
      id: "8",
      title: "Top 10 khu vực có giá thuê tốt nhất TP.HCM 2024",
      excerpt:
        "Danh sách 10 khu vực có mức giá thuê hợp lý nhất tại TP.HCM, phù hợp với nhiều đối tượng từ sinh viên đến người đi làm.",
      content: "Nội dung chi tiết bài viết...",
      author: "Ngô Thị Lan",
      publishDate: "2024-12-21",
      readTime: "9 phút",
      views: 16890,
      category: "analysis",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Top 10", "TP.HCM", "Giá thuê", "Khu vực"],
    },
  ]

  const trendingTopics = [
    "Giá thuê căn hộ tăng",
    "Thị trường Thủ Đức",
    "Roommate matching",
    "Đầu tư cho thuê",
    "Chính sách thuế mới",
    "Gen Z thuê nhà",
    "Công nghệ BĐS",
    "Dự báo 2025",
  ]

  const filteredArticles = newsArticles.filter(
    (article) =>
      (activeTab === "all" || article.category === activeTab) &&
      (searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
  )

  const featuredArticles = newsArticles.filter((article) => article.featured)

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
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
              <Newspaper className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Tin tức & Thị trường</h1>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            Cập nhật hàng ngày
          </Badge>
        </div>
      </header>

      {/* Hero Section - Market Overview */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="text-4xl font-bold mb-4">Thị trường bất động sản hôm nay</h2>
            <p className="text-xl text-blue-100">Cập nhật thông tin thị trường thuê phòng mới nhất</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((data, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-2">
                    {data.trend === "up" ? (
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    ) : data.trend === "down" ? (
                      <TrendingDown className="w-6 h-6 text-red-400" />
                    ) : (
                      <BarChart3 className="w-6 h-6 text-yellow-400" />
                    )}
                  </div>
                  <h3 className="text-white font-medium text-sm mb-2">{data.metric}</h3>
                  <div className="text-2xl font-bold text-white mb-1">{data.value}</div>
                  <div
                    className={`text-sm flex items-center justify-center gap-1 ${
                      data.trend === "up"
                        ? "text-green-300"
                        : data.trend === "down"
                          ? "text-red-300"
                          : "text-yellow-300"
                    }`}
                  >
                    {data.trend === "up" ? "+" : data.trend === "down" ? "-" : ""}
                    {Math.abs(data.change)}%
                  </div>
                  <p className="text-blue-100 text-xs mt-2">{data.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tin nổi bật</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">Nổi bật</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{formatNumber(article.views)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                      Đọc thêm <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Tìm kiếm bài viết..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Content Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8 bg-white shadow-sm">
                  <TabsTrigger value="market" className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Thị trường
                  </TabsTrigger>
                  <TabsTrigger value="news" className="flex items-center gap-2">
                    <Newspaper className="w-4 h-4" />
                    Tin tức
                  </TabsTrigger>
                  <TabsTrigger value="blog" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Blog
                  </TabsTrigger>
                  <TabsTrigger value="analysis" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Phân tích
                  </TabsTrigger>
                  <TabsTrigger value="all">Tất cả</TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab}>
                  <div className="space-y-6">
                    {filteredArticles.map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="flex gap-6 p-6">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="w-48 h-32 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                              <Badge
                                className={`${
                                  article.category === "market"
                                    ? "bg-blue-600"
                                    : article.category === "news"
                                      ? "bg-green-600"
                                      : article.category === "blog"
                                        ? "bg-purple-600"
                                        : "bg-orange-600"
                                }`}
                              >
                                {article.category === "market"
                                  ? "Thị trường"
                                  : article.category === "news"
                                    ? "Tin tức"
                                    : article.category === "blog"
                                      ? "Blog"
                                      : "Phân tích"}
                              </Badge>
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{article.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(article.publishDate)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                <span>{formatNumber(article.views)}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {article.tags.slice(0, 3).map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                                Đọc thêm <ArrowRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Chủ đề hot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-700">{topic}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Đăng ký nhận tin
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Nhận thông tin thị trường và tin tức bất động sản mới nhất qua email
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Nhập email của bạn" type="email" />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Mail className="w-4 h-4 mr-2" />
                      Đăng ký ngay
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Bằng cách đăng ký, bạn đồng ý nhận email từ IZI HOUSE và có thể hủy đăng ký bất kỳ lúc nào.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Thống kê nhanh
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Tin đăng mới hôm nay</span>
                    </div>
                    <span className="font-semibold">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Người dùng hoạt động</span>
                    </div>
                    <span className="font-semibold">45,678</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Dự án mới</span>
                    </div>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm">Đánh giá trung bình</span>
                    </div>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </CardContent>
              </Card>

              {/* Market Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Insight thị trường
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-sm">Khu vực hot nhất</span>
                    </div>
                    <p className="text-sm text-gray-600">Thủ Đức dẫn đầu với 23% lượng tìm kiếm</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-sm">Mức giá phổ biến</span>
                    </div>
                    <p className="text-sm text-gray-600">3-5 triệu/tháng chiếm 45% thị trường</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Percent className="w-4 h-4 text-orange-600" />
                      <span className="font-medium text-sm">Tăng trưởng</span>
                    </div>
                    <p className="text-sm text-gray-600">Thị trường tăng 8.5% so với năm trước</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
