"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Instagram, Heart, MessageCircle, Grid3X3, Play, Users, Camera } from "lucide-react"
import Link from "next/link"

interface InstagramPost {
  id: string
  image: string
  caption: string
  likes: number
  comments: number
  timeAgo: string
  type: "photo" | "video" | "carousel"
}

export default function InstagramPage() {
  const [activeTab, setActiveTab] = useState("posts")

  const instagramPosts: InstagramPost[] = [
    {
      id: "1",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "🏠 Căn hộ view sông tuyệt đẹp tại Quận 1! Ai đang tìm không gian sống lý tưởng? 💫 #IziHouse #CanHo #ViewSong #TPHCM",
      likes: 2847,
      comments: 156,
      timeAgo: "2h",
      type: "photo",
    },
    {
      id: "2",
      image: "/placeholder.svg?height=400&width=400",
      caption: "✨ FLASH SALE 50% - Chỉ còn 24h! Đăng tin VIP với giá siêu ưu đãi 🔥 #FlashSale #UuDai #DangTin",
      likes: 1923,
      comments: 234,
      timeAgo: "5h",
      type: "carousel",
    },
    {
      id: "3",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "🎥 Tour căn hộ studio hiện đại 45m² - Perfect cho gen Z! Swipe để xem thêm 👉 #Studio #GenZ #ModernLiving",
      likes: 3456,
      comments: 445,
      timeAgo: "1d",
      type: "video",
    },
    {
      id: "4",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "🌟 Success story: Anh Minh đã tìm được roommate lý tưởng qua IZI HOUSE! Bạn cũng muốn thử? #SuccessStory #Roommate",
      likes: 1567,
      comments: 89,
      timeAgo: "2d",
      type: "photo",
    },
    {
      id: "5",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "📊 Báo cáo thị trường BĐS tháng 12: Giá thuê tăng 5-8%, khu vực Thủ Đức hot nhất! #BaoCao #ThiTruong #BDS",
      likes: 892,
      comments: 67,
      timeAgo: "3d",
      type: "carousel",
    },
    {
      id: "6",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "🏡 Nhà phố 3 tầng Bình Chánh - Giá chỉ 8.9 triệu! Cơ hội vàng cho gia đình trẻ 💛 #NhaPho #BinhChanh #GiaRe",
      likes: 2134,
      comments: 178,
      timeAgo: "4d",
      type: "photo",
    },
    {
      id: "7",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "🎯 Tips tìm phòng trọ cho sinh viên: 5 điều cần lưu ý để không bị lừa! Save post này nhé 📌 #Tips #SinhVien #PhongTro",
      likes: 4567,
      comments: 234,
      timeAgo: "5d",
      type: "carousel",
    },
    {
      id: "8",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "🌅 Good morning! Bắt đầu ngày mới với view tuyệt đẹp từ căn hộ cao tầng. Ai cũng xứng đáng có một ngôi nhà đẹp! ☀️",
      likes: 1789,
      comments: 92,
      timeAgo: "6d",
      type: "photo",
    },
    {
      id: "9",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "🔥 HOT: Khu vực nào ở TPHCM đang có giá thuê tốt nhất? Xem ngay video phân tích chi tiết! ▶️ #Hot #PhanTich #GiaThue",
      likes: 3245,
      comments: 567,
      timeAgo: "1w",
      type: "video",
    },
  ]

  const stories = [
    { id: "1", title: "Flash Sale", image: "/placeholder.svg?height=100&width=100" },
    { id: "2", title: "New Listing", image: "/placeholder.svg?height=100&width=100" },
    { id: "3", title: "Tips", image: "/placeholder.svg?height=100&width=100" },
    { id: "4", title: "Success", image: "/placeholder.svg?height=100&width=100" },
    { id: "5", title: "Behind Scene", image: "/placeholder.svg?height=100&width=100" },
  ]

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại trang chủ</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-pink-600" />
              <h1 className="text-xl font-semibold text-gray-900">IZI HOUSE Instagram</h1>
            </div>
          </div>
          <Badge variant="outline" className="text-pink-600 border-pink-600">
            89.2K followers
          </Badge>
        </div>
      </header>

      {/* Profile Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-8 mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Camera className="w-12 h-12 text-pink-600" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold">izihouse_official</h2>
                <Button className="bg-pink-600 hover:bg-pink-700">Theo dõi</Button>
                <Button variant="outline" className="bg-transparent">
                  Nhắn tin
                </Button>
              </div>
              <div className="flex gap-8 mb-4">
                <div className="text-center">
                  <div className="font-bold text-lg">{instagramPosts.length}</div>
                  <div className="text-gray-600 text-sm">bài viết</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">89.2K</div>
                  <div className="text-gray-600 text-sm">người theo dõi</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">1,234</div>
                  <div className="text-gray-600 text-sm">đang theo dõi</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">IZI HOUSE - Find Your Dream Home</h3>
                <p className="text-gray-600 text-sm mb-2">
                  🏠 Nền tảng BĐS #1 Việt Nam
                  <br />🔍 50K+ tin đăng chất lượng
                  <br />👥 Tìm roommate dễ dàng
                  <br />📱 App: izihouse.com
                </p>
                <a href="#" className="text-blue-600 text-sm font-medium">
                  izihouse.com
                </a>
              </div>
            </div>
          </div>

          {/* Stories */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {stories.map((story) => (
              <div key={story.id} className="flex-shrink-0 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-0.5 mb-2">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <p className="text-xs text-gray-600">{story.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-sm">
              <TabsTrigger value="posts" className="flex items-center gap-2">
                <Grid3X3 className="w-4 h-4" />
                Bài viết
              </TabsTrigger>
              <TabsTrigger value="reels" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Reels
              </TabsTrigger>
              <TabsTrigger value="tagged" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Được gắn thẻ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts">
              <div className="grid grid-cols-3 gap-1">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="relative aspect-square group cursor-pointer">
                    <img src={post.image || "/placeholder.svg"} alt="Post" className="w-full h-full object-cover" />
                    {post.type === "video" && <Play className="absolute top-2 right-2 w-5 h-5 text-white" />}
                    {post.type === "carousel" && (
                      <div className="absolute top-2 right-2 w-5 h-5 text-white">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 3H6C4.9 3 4 3.9 4 5v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-4 text-white">
                        <div className="flex items-center gap-1">
                          <Heart className="w-5 h-5 fill-white" />
                          <span className="font-semibold">{formatNumber(post.likes)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-5 h-5 fill-white" />
                          <span className="font-semibold">{formatNumber(post.comments)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reels">
              <div className="grid grid-cols-3 gap-1">
                {instagramPosts
                  .filter((post) => post.type === "video")
                  .map((post) => (
                    <div key={post.id} className="relative aspect-[9/16] group cursor-pointer">
                      <img src={post.image || "/placeholder.svg"} alt="Reel" className="w-full h-full object-cover" />
                      <Play className="absolute inset-0 m-auto w-8 h-8 text-white" />
                      <div className="absolute bottom-2 left-2 text-white text-xs">
                        <div className="flex items-center gap-1">
                          <Play className="w-3 h-3" />
                          <span>{formatNumber(post.likes * 2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="tagged">
              <div className="text-center py-16">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chưa có bài viết nào được gắn thẻ</h3>
                <p className="text-gray-600">Khi có người gắn thẻ @izihouse_official, bài viết sẽ hiển thị ở đây</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Post Detail Modal would go here */}
    </div>
  )
}
