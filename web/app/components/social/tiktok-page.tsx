"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Heart, MessageCircle, Share2, Play, Music, Users, TrendingUp, Eye } from "lucide-react"
import Link from "next/link"

interface TikTokVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  views: number
  likes: number
  comments: number
  shares: number
  duration: string
  hashtags: string[]
  music: string
  timeAgo: string
}

export default function TikTokPage() {
  const [activeTab, setActiveTab] = useState("videos")

  const tiktokVideos: TikTokVideo[] = [
    {
      id: "1",
      title: "Tour căn hộ 2PN view sông Sài Gòn 🏙️",
      description: "Ai bảo 8 tỷ không mua được căn hộ đẹp ở Q1? Xem ngay tour này! #CanHo #Quan1 #ViewSong",
      thumbnail: "/placeholder.svg?height=400&width=300",
      views: 1200000,
      likes: 89000,
      comments: 2340,
      shares: 1890,
      duration: "0:45",
      hashtags: ["#CanHo", "#Quan1", "#ViewSong", "#IziHouse", "#BatDongSan"],
      music: "Nhạc trending - IZI HOUSE",
      timeAgo: "2h",
    },
    {
      id: "2",
      title: "5 tips tìm phòng trọ không bị lừa 🚨",
      description: "Sinh viên phải biết những điều này! Save lại để không bao giờ bị lừa #Tips #SinhVien #PhongTro",
      thumbnail: "/placeholder.svg?height=400&width=300",
      views: 890000,
      likes: 67000,
      comments: 1890,
      shares: 2340,
      duration: "1:20",
      hashtags: ["#Tips", "#SinhVien", "#PhongTro", "#KhongBiLua", "#IziHouse"],
      music: "Nhạc nền viral - Trending",
      timeAgo: "1d",
    },
    {
      id: "3",
      title: "Roommate matching thành công! 🎉",
      description: "Từ stranger thành bestie chỉ qua app IZI HOUSE! Bạn cũng muốn thử? #Roommate #Success #BestFriend",
      thumbnail: "/placeholder.svg?height=400&width=300",
      views: 2100000,
      likes: 156000,
      comments: 4560,
      shares: 3210,
      duration: "0:30",
      hashtags: ["#Roommate", "#Success", "#BestFriend", "#IziHouse", "#Viral"],
      music: "Happy vibes - Upbeat",
      timeAgo: "2d",
    },
    {
      id: "4",
      title: "Studio 25m² nhưng đầy đủ tiện nghi ✨",
      description: "Proof rằng diện tích nhỏ vẫn có thể sống thoải mái! #Studio #SmallSpace #MinimalLiving",
      thumbnail: "/placeholder.svg?height=400&width=300",
      views: 750000,
      likes: 45000,
      comments: 1230,
      shares: 890,
      duration: "1:05",
      hashtags: ["#Studio", "#SmallSpace", "#MinimalLiving", "#Decor", "#IziHouse"],
      music: "Chill lofi - Aesthetic",
      timeAgo: "3d",
    },
    {
      id: "5",
      title: "Giá thuê nhà tăng 15% - Có nên panic? 📈",
      description: "Phân tích thị trường BĐS tháng 12 trong 60 giây! #ThiTruong #BDS #Analysis #GiaThue",
      thumbnail: "/placeholder.svg?height=400&width=300",
      views: 1800000,
      likes: 123000,
      comments: 5670,
      shares: 4320,
      duration: "1:00",
      hashtags: ["#ThiTruong", "#BDS", "#Analysis", "#GiaThue", "#Trending"],
      music: "Dramatic news - Suspense",
      timeAgo: "4d",
    },
    {
      id: "6",
      title: "POV: Bạn vừa tìm được căn hộ mơ ước 🏠",
      description: "Feeling này không thể tả được! Ai đã từng trải qua chưa? #POV #DreamHome #Feeling #Happy",
      thumbnail: "/placeholder.svg?height=400&width=300",
      views: 3200000,
      likes: 234000,
      comments: 8900,
      shares: 6540,
      duration: "0:25",
      hashtags: ["#POV", "#DreamHome", "#Feeling", "#Happy", "#Viral"],
      music: "Emotional piano - Trending",
      timeAgo: "5d",
    },
    {
      id: "7",
      title: "Hack tìm phòng giá rẻ ở TPHCM 💰",
      description: "Những khu vực ít người biết nhưng giá cực tốt! #Hack #GiaRe #TPHCM #BatDongSan",
      thumbnail: "/placeholder.svg?height=400&width=300",
      views: 1500000,
      likes: 98000,
      comments: 3450,
      shares: 2890,
      duration: "1:15",
      hashtags: ["#Hack", "#GiaRe", "#TPHCM", "#BatDongSan", "#Tips"],
      music: "Mystery beat - Viral",
      timeAgo: "6d",
    },
    {
      id: "8",
      title: "Red flags khi xem phòng trọ 🚩",
      description: "Những dấu hiệu này xuất hiện = RUN ngay! #RedFlags #PhongTro #Warning #Safety",
      thumbnail: "/placeholder.svg?height=400&width=300",
      views: 2800000,
      likes: 189000,
      comments: 7890,
      shares: 5670,
      duration: "0:50",
      hashtags: ["#RedFlags", "#PhongTro", "#Warning", "#Safety", "#MustKnow"],
      music: "Alert sound - Warning",
      timeAgo: "1w",
    },
    {
      id: "9",
      title: "Transformation: Phòng trọ cũ thành căn hộ xinh ✨",
      description: "Budget 5 triệu biến phòng cũ thành không gian sống đẹp như mơ! #Transformation #Decor #Budget",
      thumbnail: "/placeholder.svg?height=400&width=300",
      views: 4100000,
      likes: 312000,
      comments: 12000,
      shares: 8900,
      duration: "1:30",
      hashtags: ["#Transformation", "#Decor", "#Budget", "#DIY", "#Viral"],
      music: "Upbeat transformation - Trending",
      timeAgo: "1w",
    },
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

  const stats = [
    { label: "Followers", value: "2.1M", icon: <Users className="w-5 h-5" /> },
    { label: "Following", value: "892", icon: <Heart className="w-5 h-5" /> },
    { label: "Likes", value: "45.6M", icon: <Heart className="w-5 h-5" /> },
    { label: "Videos", value: "156", icon: <Play className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-red-500 hover:text-red-400">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại trang chủ</span>
            </Link>
            <div className="h-6 w-px bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded">
                <Play className="w-4 h-4 text-white m-1" />
              </div>
              <h1 className="text-xl font-semibold">IZI HOUSE TikTok</h1>
            </div>
          </div>
          <Badge className="bg-red-600 text-white">2.1M followers</Badge>
        </div>
      </header>

      {/* Profile Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-8 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Play className="w-8 h-8 text-red-500" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold">@izihouse_official</h2>
                <Button className="bg-red-600 hover:bg-red-700">Follow</Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                  Message
                </Button>
              </div>
              <div className="flex gap-8 mb-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-bold text-lg">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">IZI HOUSE 🏠 Find Your Dream Home</h3>
                <p className="text-gray-300 text-sm mb-2">
                  🔥 Nền tảng BĐS #1 Việt Nam
                  <br />📱 50K+ tin đăng chất lượng
                  <br />💡 Tips & Tricks BĐS hàng ngày
                  <br />👇 Download app ngay
                </p>
                <a href="#" className="text-red-500 text-sm font-medium">
                  izihouse.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-800 border-gray-700">
              <TabsTrigger value="videos" className="text-white data-[state=active]:bg-red-600">
                Videos
              </TabsTrigger>
              <TabsTrigger value="trending" className="text-white data-[state=active]:bg-red-600">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="liked" className="text-white data-[state=active]:bg-red-600">
                <Heart className="w-4 h-4 mr-2" />
                Liked
              </TabsTrigger>
            </TabsList>

            <TabsContent value="videos">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tiktokVideos.map((video) => (
                  <Card key={video.id} className="bg-gray-900 border-gray-700 overflow-hidden group cursor-pointer">
                    <div className="relative aspect-[9/16]">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>

                      {/* Views */}
                      <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-xs">
                        <Eye className="w-3 h-3" />
                        <span>{formatNumber(video.views)}</span>
                      </div>

                      {/* Engagement Stats */}
                      <div className="absolute right-2 bottom-16 flex flex-col gap-3">
                        <div className="flex flex-col items-center text-white">
                          <Heart className="w-6 h-6 mb-1" />
                          <span className="text-xs">{formatNumber(video.likes)}</span>
                        </div>
                        <div className="flex flex-col items-center text-white">
                          <MessageCircle className="w-6 h-6 mb-1" />
                          <span className="text-xs">{formatNumber(video.comments)}</span>
                        </div>
                        <div className="flex flex-col items-center text-white">
                          <Share2 className="w-6 h-6 mb-1" />
                          <span className="text-xs">{formatNumber(video.shares)}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-3">
                      <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2">{video.title}</h3>
                      <p className="text-gray-400 text-xs mb-2 line-clamp-2">{video.description}</p>

                      {/* Music */}
                      <div className="flex items-center gap-2 mb-2">
                        <Music className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-400 text-xs truncate">{video.music}</span>
                      </div>

                      {/* Hashtags */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {video.hashtags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-red-400 text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-gray-500 text-xs">{video.timeAgo}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trending">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tiktokVideos
                  .sort((a, b) => b.views - a.views)
                  .slice(0, 6)
                  .map((video, index) => (
                    <Card key={video.id} className="bg-gray-900 border-gray-700 overflow-hidden">
                      <div className="flex gap-4 p-4">
                        <div className="relative w-20 h-28 flex-shrink-0">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-full object-cover rounded"
                          />
                          <Play className="absolute inset-0 m-auto w-6 h-6 text-white" />
                          <div className="absolute top-1 left-1 bg-red-600 text-white text-xs px-1 rounded">
                            #{index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
                          <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{formatNumber(video.views)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{formatNumber(video.likes)}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {video.hashtags.slice(0, 2).map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-red-400 text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="liked">
              <div className="text-center py-16">
                <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Videos đã thích</h3>
                <p className="text-gray-400">Các video bạn đã thích sẽ hiển thị ở đây</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
