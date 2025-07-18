"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowLeft,
  Users,
  MapPin,
  Search,
  Filter,
  Heart,
  MessageCircle,
  Phone,
  Star,
  Calendar,
  DollarSign,
  User,
  Coffee,
  Music,
  Gamepad2,
  Book,
  Dumbbell,
  Cigarette,
  Dog,
  Car,
  Utensils,
} from "lucide-react"
import Link from "next/link"

interface RoommateProfile {
  id: string
  name: string
  age: number
  gender: "male" | "female" | "other"
  occupation: string
  budget: string
  location: string
  bio: string
  interests: string[]
  lifestyle: {
    smoking: boolean
    pets: boolean
    cooking: boolean
    partying: boolean
    studying: boolean
    working: boolean
  }
  avatar: string
  rating: number
  verified: boolean
  moveInDate: string
  lat: number
  lng: number
}

interface SearchForm {
  gender: string
  ageRange: string
  budget: string
  location: string
  moveInDate: string
  roomType: string
  lifestyle: string[]
  interests: string[]
  description: string
}

export default function RoommatePage() {
  const [activeTab, setActiveTab] = useState("search")
  const [searchForm, setSearchForm] = useState<SearchForm>({
    gender: "",
    ageRange: "",
    budget: "",
    location: "",
    moveInDate: "",
    roomType: "",
    lifestyle: [],
    interests: [],
    description: "",
  })
  const [selectedProfile, setSelectedProfile] = useState<RoommateProfile | null>(null)

  const roommateProfiles: RoommateProfile[] = [
    {
      id: "1",
      name: "Minh Anh",
      age: 24,
      gender: "female",
      occupation: "Graphic Designer",
      budget: "3-5 triệu",
      location: "Quận 1, TP.HCM",
      bio: "Mình là designer, thích không gian sạch sẽ, yên tĩnh để làm việc. Tìm bạn cùng phòng có cùng sở thích và tôn trọng không gian riêng.",
      interests: ["Design", "Coffee", "Reading", "Movies"],
      lifestyle: {
        smoking: false,
        pets: false,
        cooking: true,
        partying: false,
        studying: true,
        working: true,
      },
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.8,
      verified: true,
      moveInDate: "15/01/2025",
      lat: 10.7769,
      lng: 106.7009,
    },
    {
      id: "2",
      name: "Đức Thành",
      age: 26,
      gender: "male",
      occupation: "Software Engineer",
      budget: "4-6 triệu",
      location: "Quận 3, TP.HCM",
      bio: "Developer làm remote, thích gaming và công nghệ. Tìm bạn cùng phòng chill, có thể chơi game cùng vào cuối tuần.",
      interests: ["Gaming", "Technology", "Music", "Fitness"],
      lifestyle: {
        smoking: false,
        pets: true,
        cooking: false,
        partying: true,
        studying: false,
        working: true,
      },
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.6,
      verified: true,
      moveInDate: "01/02/2025",
      lat: 10.7829,
      lng: 106.6934,
    },
    {
      id: "3",
      name: "Thu Hà",
      age: 22,
      gender: "female",
      occupation: "Student",
      budget: "2-3 triệu",
      location: "Quận 7, TP.HCM",
      bio: "Sinh viên năm cuối, thích học tập và đọc sách. Tìm bạn cùng phòng yên tĩnh, có thể học cùng và chia sẻ kinh nghiệm.",
      interests: ["Reading", "Study", "Coffee", "Yoga"],
      lifestyle: {
        smoking: false,
        pets: false,
        cooking: true,
        partying: false,
        studying: true,
        working: false,
      },
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.9,
      verified: true,
      moveInDate: "20/01/2025",
      lat: 10.7411,
      lng: 106.72,
    },
    {
      id: "4",
      name: "Hoàng Nam",
      age: 28,
      gender: "male",
      occupation: "Marketing Manager",
      budget: "5-7 triệu",
      location: "Quận 2, TP.HCM",
      bio: "Làm marketing, hay đi công tác. Tìm bạn cùng phòng mature, có thể chia sẻ chi phí và trách nhiệm trong nhà.",
      interests: ["Business", "Travel", "Fitness", "Networking"],
      lifestyle: {
        smoking: false,
        pets: false,
        cooking: false,
        partying: true,
        studying: false,
        working: true,
      },
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.7,
      verified: true,
      moveInDate: "10/02/2025",
      lat: 10.7971,
      lng: 106.7243,
    },
  ]

  const lifestyleOptions = [
    { id: "no-smoking", label: "Không hút thuốc", icon: <Cigarette className="w-4 h-4" /> },
    { id: "pet-friendly", label: "Thích thú cưng", icon: <Dog className="w-4 h-4" /> },
    { id: "cooking", label: "Thích nấu ăn", icon: <Utensils className="w-4 h-4" /> },
    { id: "quiet", label: "Yên tĩnh", icon: <Book className="w-4 h-4" /> },
    { id: "social", label: "Thích giao lưu", icon: <Users className="w-4 h-4" /> },
    { id: "fitness", label: "Tập gym", icon: <Dumbbell className="w-4 h-4" /> },
  ]

  const interestOptions = [
    { id: "music", label: "Âm nhạc", icon: <Music className="w-4 h-4" /> },
    { id: "gaming", label: "Gaming", icon: <Gamepad2 className="w-4 h-4" /> },
    { id: "reading", label: "Đọc sách", icon: <Book className="w-4 h-4" /> },
    { id: "coffee", label: "Coffee", icon: <Coffee className="w-4 h-4" /> },
    { id: "fitness", label: "Thể thao", icon: <Dumbbell className="w-4 h-4" /> },
    { id: "travel", label: "Du lịch", icon: <Car className="w-4 h-4" /> },
  ]

  const handleFormChange = (field: keyof SearchForm, value: string | string[]) => {
    setSearchForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleLifestyleChange = (lifestyle: string, checked: boolean) => {
    setSearchForm((prev) => ({
      ...prev,
      lifestyle: checked ? [...prev.lifestyle, lifestyle] : prev.lifestyle.filter((item) => item !== lifestyle),
    }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setSearchForm((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((item) => item !== interest),
    }))
  }

  const handleSearch = () => {
    console.log("Tìm kiếm roommate với thông tin:", searchForm)
    alert("Đang tìm kiếm roommate phù hợp...")
    setActiveTab("results")
  }

  const handleContact = (profileId: string) => {
    alert(`Đã gửi lời mời kết bạn đến ${profileId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại trang chủ</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              <h1 className="text-xl font-semibold text-gray-900">Tìm Roommate</h1>
            </div>
          </div>
          <Badge variant="outline" className="text-purple-600 border-purple-600">
            {roommateProfiles.length} người đang tìm
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Tìm Roommate Lý Tưởng</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Kết nối với những người bạn cùng phòng phù hợp, chia sẻ không gian sống tuyệt vời
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">2,500+</div>
              <div className="text-purple-200">Thành viên hoạt động</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-purple-200">Tỷ lệ hài lòng</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">4.8/5</div>
              <div className="text-purple-200">Đánh giá trung bình</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-sm">
              <TabsTrigger value="search" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Tìm kiếm
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bản đồ
              </TabsTrigger>
              <TabsTrigger value="results" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Kết quả
              </TabsTrigger>
            </TabsList>

            {/* Search Tab */}
            <TabsContent value="search">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Filter className="w-5 h-5" />
                        Thông tin tìm kiếm
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Basic Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="gender">Giới tính mong muốn</Label>
                          <Select
                            value={searchForm.gender}
                            onValueChange={(value) => handleFormChange("gender", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn giới tính" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Không quan trọng</SelectItem>
                              <SelectItem value="male">Nam</SelectItem>
                              <SelectItem value="female">Nữ</SelectItem>
                              <SelectItem value="other">Khác</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="ageRange">Độ tuổi</Label>
                          <Select
                            value={searchForm.ageRange}
                            onValueChange={(value) => handleFormChange("ageRange", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn độ tuổi" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="18-22">18-22 tuổi</SelectItem>
                              <SelectItem value="23-27">23-27 tuổi</SelectItem>
                              <SelectItem value="28-32">28-32 tuổi</SelectItem>
                              <SelectItem value="33+">33+ tuổi</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="budget">Ngân sách</Label>
                          <Select
                            value={searchForm.budget}
                            onValueChange={(value) => handleFormChange("budget", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn ngân sách" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-2">1-2 triệu</SelectItem>
                              <SelectItem value="2-3">2-3 triệu</SelectItem>
                              <SelectItem value="3-5">3-5 triệu</SelectItem>
                              <SelectItem value="5-7">5-7 triệu</SelectItem>
                              <SelectItem value="7+">7+ triệu</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="location">Khu vực</Label>
                          <Select
                            value={searchForm.location}
                            onValueChange={(value) => handleFormChange("location", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn khu vực" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="q1">Quận 1</SelectItem>
                              <SelectItem value="q3">Quận 3</SelectItem>
                              <SelectItem value="q7">Quận 7</SelectItem>
                              <SelectItem value="q2">Quận 2</SelectItem>
                              <SelectItem value="td">Thủ Đức</SelectItem>
                              <SelectItem value="bc">Bình Chánh</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="moveInDate">Ngày chuyển vào</Label>
                          <Input
                            type="date"
                            value={searchForm.moveInDate}
                            onChange={(e) => handleFormChange("moveInDate", e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="roomType">Loại phòng</Label>
                          <Select
                            value={searchForm.roomType}
                            onValueChange={(value) => handleFormChange("roomType", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn loại phòng" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="shared">Phòng chung</SelectItem>
                              <SelectItem value="private">Phòng riêng</SelectItem>
                              <SelectItem value="studio">Studio</SelectItem>
                              <SelectItem value="apartment">Căn hộ</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Lifestyle Preferences */}
                      <div>
                        <Label className="text-base font-medium mb-4 block">Lối sống</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {lifestyleOptions.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={option.id}
                                checked={searchForm.lifestyle.includes(option.id)}
                                onCheckedChange={(checked) => handleLifestyleChange(option.id, checked as boolean)}
                              />
                              <Label htmlFor={option.id} className="flex items-center gap-2 text-sm">
                                {option.icon}
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Interests */}
                      <div>
                        <Label className="text-base font-medium mb-4 block">Sở thích</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {interestOptions.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={option.id}
                                checked={searchForm.interests.includes(option.id)}
                                onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)}
                              />
                              <Label htmlFor={option.id} className="flex items-center gap-2 text-sm">
                                {option.icon}
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <Label htmlFor="description">Mô tả thêm</Label>
                        <Textarea
                          id="description"
                          placeholder="Chia sẻ thêm về bản thân và những gì bạn mong muốn ở roommate..."
                          value={searchForm.description}
                          onChange={(e) => handleFormChange("description", e.target.value)}
                          rows={4}
                        />
                      </div>

                      <Button onClick={handleSearch} className="w-full bg-purple-600 hover:bg-purple-700">
                        <Search className="w-4 h-4 mr-2" />
                        Tìm kiếm Roommate
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Tips Sidebar */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">💡 Mẹo tìm roommate</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                          <p>Hãy trung thực về lối sống và thói quen của bạn</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                          <p>Đặt câu hỏi về việc chia sẻ chi phí và trách nhiệm</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                          <p>Gặp mặt trực tiếp trước khi quyết định</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                          <p>Thảo luận về quy tắc chung trong nhà</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-lg">🔒 An toàn</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <p>• Tất cả thành viên đều được xác thực</p>
                      <p>• Báo cáo hành vi không phù hợp</p>
                      <p>• Không chia sẻ thông tin cá nhân quá sớm</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Map Tab */}
            <TabsContent value="map">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="h-[600px]">
                    <CardContent className="p-0 h-full">
                      {/* Simulated Map */}
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden rounded-lg">
                        {/* Map Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                            {Array.from({ length: 144 }).map((_, i) => (
                              <div key={i} className="border border-gray-300"></div>
                            ))}
                          </div>
                        </div>

                        {/* Street Lines */}
                        <svg className="absolute inset-0 w-full h-full">
                          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#94a3b8" strokeWidth="3" />
                          <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#94a3b8" strokeWidth="3" />
                          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#94a3b8" strokeWidth="3" />
                          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#94a3b8" strokeWidth="3" />
                          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#94a3b8" strokeWidth="3" />
                        </svg>

                        {/* Roommate Markers */}
                        {roommateProfiles.map((profile, index) => (
                          <div
                            key={profile.id}
                            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-110 ${
                              selectedProfile?.id === profile.id ? "scale-125 z-20" : "z-10"
                            }`}
                            style={{
                              left: `${20 + ((index * 15) % 60)}%`,
                              top: `${25 + ((index * 20) % 50)}%`,
                            }}
                            onClick={() => setSelectedProfile(profile)}
                          >
                            <div className={`relative ${selectedProfile?.id === profile.id ? "animate-bounce" : ""}`}>
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ${
                                  profile.gender === "female" ? "bg-pink-600" : "bg-blue-600"
                                }`}
                              >
                                <Users className="w-5 h-5" />
                              </div>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
                                <div className="bg-white px-2 py-1 rounded shadow-md text-xs font-medium whitespace-nowrap">
                                  {profile.name}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Map Controls */}
                        <div className="absolute top-4 right-4 space-y-2">
                          <Button variant="outline" size="icon" className="bg-white shadow-md">
                            <MapPin className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="bg-white shadow-md">
                            <Filter className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Map Legend */}
                        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
                          <h4 className="font-medium text-sm mb-2">Chú thích</h4>
                          <div className="space-y-1 text-xs">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
                              <span>Nữ</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                              <span>Nam</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Profile Preview */}
                <div>
                  {selectedProfile ? (
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <img
                            src={selectedProfile.avatar || "/placeholder.svg"}
                            alt={selectedProfile.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <CardTitle className="text-lg">{selectedProfile.name}</CardTitle>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">{selectedProfile.age} tuổi</span>
                              {selectedProfile.verified && (
                                <Badge className="bg-green-600 text-white text-xs">Đã xác thực</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{selectedProfile.rating}</span>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-500" />
                            <span>{selectedProfile.occupation}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-gray-500" />
                            <span>{selectedProfile.budget}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span>{selectedProfile.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span>Chuyển vào: {selectedProfile.moveInDate}</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600">{selectedProfile.bio}</p>

                        <div>
                          <h4 className="font-medium text-sm mb-2">Sở thích:</h4>
                          <div className="flex flex-wrap gap-1">
                            {selectedProfile.interests.map((interest, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            className="flex-1 bg-purple-600 hover:bg-purple-700"
                            onClick={() => handleContact(selectedProfile.id)}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Nhắn tin
                          </Button>
                          <Button variant="outline" size="icon" className="bg-transparent">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="font-medium text-gray-900 mb-2">Chọn một vị trí</h3>
                        <p className="text-gray-600 text-sm">
                          Click vào các marker trên bản đồ để xem thông tin roommate
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roommateProfiles.map((profile) => (
                  <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={profile.avatar || "/placeholder.svg"}
                          alt={profile.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{profile.name}</CardTitle>
                            {profile.verified && <Badge className="bg-green-600 text-white text-xs">Verified</Badge>}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{profile.age} tuổi</span>
                            <span>•</span>
                            <span>{profile.occupation}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{profile.rating}</span>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-gray-500" />
                          <span>{profile.budget}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span>{profile.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span>Chuyển vào: {profile.moveInDate}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 line-clamp-3">{profile.bio}</p>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Sở thích:</h4>
                        <div className="flex flex-wrap gap-1">
                          {profile.interests.slice(0, 3).map((interest, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {interest}
                            </Badge>
                          ))}
                          {profile.interests.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{profile.interests.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-purple-600 hover:bg-purple-700"
                          onClick={() => handleContact(profile.id)}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Liên hệ
                        </Button>
                        <Button variant="outline" size="icon" className="bg-transparent">
                          <Phone className="w-4 h-4" />
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
    </div>
  )
}
