"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Bell, Grid3X3, Users, Settings, FileText, BarChart3, Mail, Plus, ArrowLeft, Camera } from "lucide-react"
import Link from "next/link"

interface ProfileData {
  fullName: string
  phoneNumber: string
  changePassword: string
  language: string
  dateOfBirth: string
  email: string
  newEmail: string
  avatar: string | null
}

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: "Nguyễn Thanh Hòa",
    phoneNumber: "",
    changePassword: "",
    language: "",
    dateOfBirth: "",
    email: "alexa.rawles@gmail.com",
    newEmail: "",
    avatar: null
  })

  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh')
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Kích thước ảnh không được vượt quá 5MB')
      return
    }

    setIsUploading(true)
    
    try {
      // In a real app, you would upload the file to your server here
      // For now, we'll just create a local URL for the image
      const imageUrl = URL.createObjectURL(file)
      setProfileData(prev => ({ ...prev, avatar: imageUrl }))
    } catch (error) {
      console.error('Lỗi khi tải lên ảnh đại diện:', error)
      alert('Có lỗi xảy ra khi tải lên ảnh đại diện')
    } finally {
      setIsUploading(false)
    }
  }

  const handleSaveEmail = () => {
    if (!profileData.newEmail) {
      alert('Vui lòng nhập địa chỉ email mới')
      return
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(profileData.newEmail)) {
      alert('Vui lòng nhập địa chỉ email hợp lệ')
      return
    }

    // In a real app, you would verify the email here
    // For now, we'll just update the email in the UI
    setProfileData(prev => ({
      ...prev,
      email: prev.newEmail,
      newEmail: ''
    }))
    setIsEditingEmail(false)
    alert('Đã gửi liên kết xác nhận đến email mới. Vui lòng kiểm tra hộp thư của bạn.')
  }

  const handleSaveProfile = async () => {
    // TODO: Implement API call to save profile
    console.log("Lưu hồ sơ:", profileData)
    alert("Đã lưu thông tin hồ sơ thành công!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại trang chủ</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">IZI HOUSE</h1>
              <p className="text-sm text-gray-500">
                {new Date().toLocaleDateString("vi-VN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
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
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar người dùng" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-16 bg-white/80 backdrop-blur-sm border-r border-gray-200 py-6">
          <nav className="flex flex-col items-center gap-6">
            <Button variant="ghost" size="icon" className="text-blue-600" aria-label="Trang chủ">
              <Grid3X3 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400" aria-label="Người dùng">
              <Users className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400" aria-label="Tài liệu">
              <FileText className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400" aria-label="Thống kê">
              <BarChart3 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400" aria-label="Cài đặt">
              <Settings className="w-5 h-5" />
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <Avatar className="w-20 h-20">
                      <AvatarImage 
                        src={profileData.avatar || "/placeholder.svg?height=80&width=80"} 
                        alt={`Ảnh đại diện ${profileData.fullName}`} 
                      />
                      <AvatarFallback className="text-xl">
                        {profileData.fullName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <label 
                      htmlFor="avatar-upload"
                      className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      title="Đổi ảnh đại diện"
                    >
                      <Camera className="w-6 h-6 text-white" />
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarUpload}
                        disabled={isUploading}
                      />
                    </label>
                    {isUploading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{profileData.fullName}</h2>
                    {isEditingEmail ? (
                      <div className="flex gap-2 mt-1">
                        <Input
                          type="email"
                          value={profileData.newEmail}
                          onChange={(e) => handleInputChange("newEmail", e.target.value)}
                          placeholder="Nhập email mới"
                          className="h-8 text-sm"
                        />
                        <Button 
                          size="sm" 
                          onClick={handleSaveEmail}
                          className="h-8"
                        >
                          Lưu
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setIsEditingEmail(false)}
                          className="h-8"
                        >
                          Hủy
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <p className="text-gray-500 text-sm">{profileData.email}</p>
                        <button 
                          onClick={() => {
                            setProfileData(prev => ({ ...prev, newEmail: prev.email }))
                            setIsEditingEmail(true)
                          }}
                          className="text-blue-600 text-xs hover:underline"
                        >
                          Đổi
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Họ và tên</Label>
                  <Input
                    id="fullName"
                    value={profileData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phoneNumber">Số điện thoại</Label>
                  <Input
                    id="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                
                <div>
                  <Label htmlFor="changePassword">Đổi mật khẩu</Label>
                  <Input
                    id="changePassword"
                    type="password"
                    value={profileData.changePassword}
                    onChange={(e) => handleInputChange("changePassword", e.target.value)}
                    placeholder="Nhập mật khẩu mới"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      disabled
                    />
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => {
                        setProfileData(prev => ({ ...prev, newEmail: prev.email }))
                        setIsEditingEmail(true)
                      }}
                    >
                      Đổi email
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="dateOfBirth">Ngày sinh</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="language">Ngôn ngữ</Label>
                  <Select
                    value={profileData.language}
                    onValueChange={(value) => handleInputChange("language", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn ngôn ngữ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vi">Tiếng Việt</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                <Link href="/">
                  <Button variant="outline">Hủy bỏ</Button>
                </Link>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSaveProfile}>
                  Lưu thay đổi
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
