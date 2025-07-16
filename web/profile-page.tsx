"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Bell, Grid3X3, Users, Settings, FileText, BarChart3, Mail, Plus } from "lucide-react"

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    fullName: "Alexa Rawles",
    nickName: "",
    gender: "",
    country: "",
    language: "",
    timeZone: "",
    email: "alexa.rawles@gmail.com",
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Chào mừng, Amanda</h1>
            <p className="text-sm text-gray-500">14 tháng 6 năm 2022</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Tìm kiếm..." className="pl-10 w-80 bg-gray-50 border-gray-200" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-16 bg-white/80 backdrop-blur-sm border-r border-gray-200 py-6">
          <div className="flex flex-col items-center gap-6">
            <Button variant="ghost" size="icon" className="text-blue-600">
              <Grid3X3 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Users className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <FileText className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <BarChart3 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="text-lg">AR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Alexa Rawles</h2>
                    <p className="text-gray-500">alexa.rawles@gmail.com</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Chỉnh sửa</Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Họ và tên</Label>
                  <Input
                    id="fullName"
                    placeholder="Nhập họ và tên"
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nickName">Biệt danh</Label>
                  <Input
                    id="nickName"
                    placeholder="Nhập biệt danh"
                    value={profileData.nickName}
                    onChange={(e) => setProfileData({ ...profileData, nickName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Giới tính</Label>
                  <Select
                    value={profileData.gender}
                    onValueChange={(value) => setProfileData({ ...profileData, gender: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn giới tính" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Nam</SelectItem>
                      <SelectItem value="female">Nữ</SelectItem>
                      <SelectItem value="other">Khác</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Quốc gia</Label>
                  <Select
                    value={profileData.country}
                    onValueChange={(value) => setProfileData({ ...profileData, country: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn quốc gia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vn">Việt Nam</SelectItem>
                      <SelectItem value="us">Hoa Kỳ</SelectItem>
                      <SelectItem value="jp">Nhật Bản</SelectItem>
                      <SelectItem value="kr">Hàn Quốc</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Ngôn ngữ</Label>
                  <Select
                    value={profileData.language}
                    onValueChange={(value) => setProfileData({ ...profileData, language: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn ngôn ngữ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vi">Tiếng Việt</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ja">日本語</SelectItem>
                      <SelectItem value="ko">한국어</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeZone">Múi giờ</Label>
                  <Select
                    value={profileData.timeZone}
                    onValueChange={(value) => setProfileData({ ...profileData, timeZone: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn múi giờ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia/ho_chi_minh">GMT+7 (Hồ Chí Minh)</SelectItem>
                      <SelectItem value="asia/tokyo">GMT+9 (Tokyo)</SelectItem>
                      <SelectItem value="america/new_york">GMT-5 (New York)</SelectItem>
                      <SelectItem value="europe/london">GMT+0 (London)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Email Section */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Địa chỉ email của tôi</h3>

                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{profileData.email}</p>
                    <p className="text-sm text-gray-500">1 tháng trước</p>
                  </div>
                </div>

                <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                  <Plus className="w-4 h-4 mr-2" />
                  Thêm địa chỉ email
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
