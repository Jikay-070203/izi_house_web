"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  views: number
  likes: number
  dislikes: number
  uploadDate: string
  category: "tutorial" | "tour" | "news" | "tips" | "review"
}

export default function YouTubePage() {
  const [activeTab, setActiveTab] = useState("videos")

  const youtubeVideos: YouTubeVideo[] = [
    {
      id: "1",
      title: "TOUR CĂNG HỘ 2PN VIEW SÔNG SẠI GÒN GIÁ 8.5 TỶ - CÓ ĐÁNG KHÔNG? | IZI HOUSE REVIEW",
      description: "Hôm nay mình sẽ đưa các bạn đi tour một căn hộ 2 phòng ngủ với view sông Sài Gòn tuyệt đẹp tại Quận 1. Giá 8.5 tỷ liệu có đáng hay không? Cùng xem và đánh giá nhé!",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "15:42",
      views: 234567,
      likes: 12890,
      dislikes: 234,
      uploadDate: "2 ngày trước",
      category: "tour",
    },
    {
      id: "2",
      title: "5 LỖI SAI CHẾT NGƯỜI KHI TÌM PHÒNG TRỌ | SINH VIÊN PHẢI XEM",
      description: "Những lỗi sai phổ biến mà sinh viên thường mắc phải khi tìm phòng trọ. Video này sẽ giúp bạn tránh được những cạm bẫy và tìm được phòng trọ ưng ý!",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "12:35",
      views: 456789,
      likes: 23456,
      dislikes: 567,
      uploadDate: "5 ngày trước",
      category: "tips",
    },
    {
      id: "3",
      title: "BÁO CÁO THỊ TRƯỜNG BẤT ĐỘNG SẢN THÁNG 12/2024 | PHÂN TÍCH CHI TIẾT",
      description: "Báo cáo tổng quan về thị trường bất động sản tháng 12/2024 với những phân tích chi tiết về xu hướng và dự báo thị trường trong thời gian tới.",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "18:20",
      views: 123456,
      likes: 9876,
      dislikes: 123,
      uploadDate: "1 tuần trước",
      category: "news",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Kênh YouTube IZI HOUSE</h1>
      
      <div className="flex gap-4 mb-8">
        <Button 
          variant={activeTab === 'videos' ? 'default' : 'outline'}
          onClick={() => setActiveTab('videos')}
        >
          Tất cả video
        </Button>
        <Button 
          variant={activeTab === 'tour' ? 'default' : 'outline'}
          onClick={() => setActiveTab('tour')}
        >
          Tour bất động sản
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {youtubeVideos
          .filter(video => activeTab === 'videos' || video.category === activeTab)
          .map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{video.views.toLocaleString()} lượt xem</span>
                  <span>{video.uploadDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}
