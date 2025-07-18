"use client"

import { useState } from "react"

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
      title: "TOUR CĂNG HỘ 2PN VIEW SÔNG SÀI GÒN GIÁ 8.5 TỶ - CÓ ĐÁNG KHÔNG? | IZI HOUSE REVIEW",
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
      description: "Báo cáo tổng quan về thị trường bất động sản tháng 12/2024 với những phân tích chi tiết về xu hướng, biến động giá và dự báo thị trường trong thời gian tới.",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "18:20",
      views: 345678,
      likes: 18900,
      dislikes: 321,
      uploadDate: "1 tuần trước",
      category: "news",
    }
  ]

  // ... rest of the component code
}