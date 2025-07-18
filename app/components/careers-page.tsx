"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Home,
  ArrowLeft,
  Search,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Code,
  Palette,
  BarChart,
  Megaphone,
  Database,
  Briefcase,
  Heart,
  Coffee,
  Zap,
  Shield,
  TrendingUp,
  Award,
  Upload,
  Send,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react"
import Link from "next/link"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: "full-time" | "part-time" | "contract"
  level: "junior" | "mid" | "senior"
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
  icon: React.ReactNode
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  })

  const jobs: Job[] = [
    {
      id: "1",
      title: "Frontend Developer",
      department: "Engineering",
      location: "TP. Hồ Chí Minh",
      type: "full-time",
      level: "mid",
      salary: "20-35 triệu VNĐ",
      description: "Phát triển giao diện người dùng cho nền tảng IZI HOUSE với React, Next.js và TypeScript.",
      requirements: [
        "3+ năm kinh nghiệm React/Next.js",
        "Thành thạo TypeScript, HTML5, CSS3",
        "Kinh nghiệm với REST API và GraphQL",
        "Hiểu biết về UX/UI design principles",
        "Kinh nghiệm Git và Agile workflow",
      ],
      benefits: [
        "Lương cạnh tranh + thưởng hiệu suất",
        "Bảo hiểm sức khỏe cao cấp",
        "Laptop MacBook Pro",
        "Flexible working hours",
        "Budget học tập 10 triệu/năm",
      ],
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: "2",
      title: "Backend Developer",
      department: "Engineering",
      location: "TP. Hồ Chí Minh",
      type: "full-time",
      level: "senior",
      salary: "30-50 triệu VNĐ",
      description: "Xây dựng và duy trì hệ thống backend scalable cho millions người dùng.",
      requirements: [
        "5+ năm kinh nghiệm Node.js/Python",
        "Thành thạo database (PostgreSQL, MongoDB)",
        "Kinh nghiệm microservices architecture",
        "Hiểu biết về cloud services (AWS/GCP)",
        "Kinh nghiệm với Docker, Kubernetes",
      ],
      benefits: [
        "Lương cao + equity options",
        "Bảo hiểm toàn diện",
        "Setup làm việc tại nhà",
        "Conference budget",
        "Career development path",
      ],
      icon: <Database className="w-5 h-5" />,
    },
    {
      id: "3",
      title: "Product Manager",
      department: "Product",
      location: "TP. Hồ Chí Minh",
      type: "full-time",
      level: "senior",
      salary: "35-55 triệu VNĐ",
      description: "Dẫn dắt strategy và roadmap cho các sản phẩm core của IZI HOUSE.",
      requirements: [
        "5+ năm kinh nghiệm Product Management",
        "Kinh nghiệm trong tech/real estate industry",
        "Strong analytical và problem-solving skills",
        "Excellent communication skills",
        "Experience với Agile/Scrum methodology",
      ],
      benefits: [
        "Competitive salary + bonus",
        "Stock options",
        "Premium healthcare",
        "Leadership training",
        "International conference",
      ],
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: "4",
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "TP. Hồ Chí Minh",
      type: "full-time",
      level: "mid",
      salary: "15-25 triệu VNĐ",
      description: "Phát triển và thực hiện các chiến lược marketing digital để tăng trưởng user base.",
      requirements: [
        "3+ năm kinh nghiệm digital marketing",
        "Thành thạo Google Ads, Facebook Ads",
        "Kinh nghiệm SEO/SEM và content marketing",
        "Analytics tools (GA4, GTM, etc.)",
        "Creative thinking và data-driven mindset",
      ],
      benefits: [
        "Attractive salary package",
        "Performance bonus",
        "Health insurance",
        "Marketing tools budget",
        "Creative freedom",
      ],
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      id: "5",
      title: "UX/UI Designer",
      department: "Design",
      location: "TP. Hồ Chí Minh",
      type: "full-time",
      level: "mid",
      salary: "18-30 triệu VNĐ",
      description: "Thiết kế trải nghiệm người dùng tuyệt vời cho web và mobile app.",
      requirements: [
        "3+ năm kinh nghiệm UX/UI design",
        "Thành thạo Figma, Sketch, Adobe Creative Suite",
        "Portfolio mạnh về mobile và web design",
        "Hiểu biết về user research và usability testing",
        "Knowledge về design systems",
      ],
      benefits: [
        "Competitive salary",
        "Design tools subscription",
        "Health insurance",
        "Creative workspace",
        "Design conference budget",
      ],
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: "6",
      title: "Data Analyst",
      department: "Data",
      location: "TP. Hồ Chí Minh",
      type: "full-time",
      level: "junior",
      salary: "12-20 triệu VNĐ",
      description: "Phân tích dữ liệu để đưa ra insights và support business decisions.",
      requirements: [
        "1-2 năm kinh nghiệm data analysis",
        "Thành thạo SQL, Python/R",
        "Kinh nghiệm với BI tools (Tableau, Power BI)",
        "Statistical analysis và data visualization",
        "Strong problem-solving skills",
      ],
      benefits: [
        "Competitive entry-level salary",
        "Learning budget",
        "Health insurance",
        "Mentorship program",
        "Career growth opportunities",
      ],
      icon: <BarChart className="w-5 h-5" />,
    },
  ]

  const benefits = [
    {
      title: "Lương thưởng hấp dẫn",
      description: "Mức lương cạnh tranh + thưởng hiệu suất + stock options",
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Bảo hiểm toàn diện",
      description: "Bảo hiểm sức khỏe cao cấp cho nhân viên và gia đình",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Môi trường năng động",
      description: "Văn hóa startup, học hỏi liên tục và phát triển nhanh",
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Work-life balance",
      description: "Flexible working hours, remote work và unlimited PTO",
      icon: <Heart className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Phát triển bản thân",
      description: "Budget học tập, conference và training programs",
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Tiện ích văn phòng",
      description: "Free coffee, snacks, game room và team building",
      icon: <Coffee className="w-8 h-8 text-orange-600" />,
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || job.department.toLowerCase() === selectedDepartment
    const matchesType = selectedType === "all" || job.type === selectedType
    const matchesLevel = selectedLevel === "all" || job.level === selectedLevel

    return matchesSearch && matchesDepartment && matchesType && matchesLevel
  })

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle application submission
    console.log("Application submitted:", applicationData)
    setIsApplicationOpen(false)
    // Reset form
    setApplicationData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: "",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-600">IZI HOUSE</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/promotions" className="text-gray-700 hover:text-blue-600 font-medium">
                CHƯƠNG TRÌNH ƯU ĐÃI
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                TIỆN ÍCH
              </Link>
              <Link href="/roommate" className="text-gray-700 hover:text-blue-600 font-medium">
                ROOMMATE
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-blue-600 font-medium">
                TIN TỨC
              </Link>
              <Link href="/post" className="text-gray-700 hover:text-blue-600 font-medium">
                ĐĂNG TIN
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
                ĐĂNG NHẬP
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/register" className="text-sm text-gray-600 hover:text-blue-600">
                ĐĂNG KÍ
              </Link>
              <Link href="/profile">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4" />
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Tuyển dụng</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tham gia đội ngũ IZI HOUSE</h1>
            <p className="text-xl text-gray-600 mb-8">
              Cùng chúng tôi xây dựng tương lai của ngành bất động sản Việt Nam
            </p>
            <div className="flex items-center justify-center gap-6">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                <Briefcase className="w-4 h-4 mr-2" />
                {jobs.length} vị trí đang tuyển
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Tăng trưởng 200%/năm
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Top 10 Startup VN
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search & Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Tìm kiếm vị trí..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Department Filter */}
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Phòng ban" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả phòng ban</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="data">Data</SelectItem>
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Loại hình" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả loại hình</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>

              {/* Level Filter */}
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Cấp độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả cấp độ</SelectItem>
                  <SelectItem value="junior">Junior</SelectItem>
                  <SelectItem value="mid">Mid-level</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                </SelectContent>
              </Select>

              {/* Clear Filters */}
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedDepartment("all")
                  setSelectedType("all")
                  setSelectedLevel("all")
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Vị trí tuyển dụng ({filteredJobs.length})</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          {job.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          <p className="text-blue-600 font-medium">{job.department}</p>
                        </div>
                      </div>
                      <Badge
                        variant={job.level === "senior" ? "default" : job.level === "mid" ? "secondary" : "outline"}
                        className="capitalize"
                      >
                        {job.level}
                      </Badge>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type === "full-time"
                          ? "Toàn thời gian"
                          : job.type === "part-time"
                            ? "Bán thời gian"
                            : "Hợp đồng"}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="flex-1 bg-transparent"
                            onClick={() => setSelectedJob(job)}
                          >
                            Xem chi tiết
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                {job.icon}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold">{job.title}</h3>
                                <p className="text-blue-600 font-medium">{job.department}</p>
                              </div>
                            </DialogTitle>
                            <DialogDescription asChild>
                              <div className="space-y-6">
                                <div className="flex items-center gap-4 text-sm">
                                  <Badge variant="outline">{job.location}</Badge>
                                  <Badge variant="outline">
                                    {job.type === "full-time"
                                      ? "Toàn thời gian"
                                      : job.type === "part-time"
                                        ? "Bán thời gian"
                                        : "Hợp đồng"}
                                  </Badge>
                                  <Badge variant="outline">{job.salary}</Badge>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Mô tả công việc</h4>
                                  <p className="text-gray-600">{job.description}</p>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Yêu cầu</h4>
                                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {job.requirements.map((req, index) => (
                                      <li key={index}>{req}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Quyền lợi</h4>
                                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {job.benefits.map((benefit, index) => (
                                      <li key={index}>{benefit}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="flex gap-3 pt-4">
                                  <Button
                                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                                    onClick={() => {
                                      setApplicationData((prev) => ({ ...prev, position: job.title }))
                                      setIsApplicationOpen(true)
                                    }}
                                  >
                                    Ứng tuyển ngay
                                  </Button>
                                  <Button variant="outline">Chia sẻ</Button>
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>

                      <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => {
                          setApplicationData((prev) => ({ ...prev, position: job.title }))
                          setIsApplicationOpen(true)
                        }}
                      >
                        Ứng tuyển
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Không tìm thấy vị trí phù hợp</h3>
                <p className="text-gray-600">Thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn IZI HOUSE?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Chúng tôi cam kết tạo ra môi trường làm việc tốt nhất để bạn phát triển sự nghiệp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Ứng tuyển vị trí</DialogTitle>
            <DialogDescription>Điền thông tin của bạn để ứng tuyển vào IZI HOUSE</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleApplicationSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                <Input
                  value={applicationData.name}
                  onChange={(e) => setApplicationData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <Input
                  type="email"
                  value={applicationData.email}
                  onChange={(e) => setApplicationData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="Nhập email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                <Input
                  value={applicationData.phone}
                  onChange={(e) => setApplicationData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vị trí ứng tuyển *</label>
                <Input
                  value={applicationData.position}
                  onChange={(e) => setApplicationData((prev) => ({ ...prev, position: e.target.value }))}
                  placeholder="Vị trí ứng tuyển"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kinh nghiệm làm việc</label>
              <Textarea
                value={applicationData.experience}
                onChange={(e) => setApplicationData((prev) => ({ ...prev, experience: e.target.value }))}
                placeholder="Mô tả ngắn gọn về kinh nghiệm làm việc của bạn..."
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Thư xin việc</label>
              <Textarea
                value={applicationData.coverLetter}
                onChange={(e) => setApplicationData((prev) => ({ ...prev, coverLetter: e.target.value }))}
                placeholder="Viết vài dòng về lý do bạn muốn làm việc tại IZI HOUSE..."
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload CV *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">
                  Kéo thả file CV hoặc <span className="text-blue-600">click để chọn</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">Hỗ trợ: PDF, DOC, DOCX (tối đa 5MB)</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => setIsApplicationOpen(false)}
              >
                Hủy
              </Button>
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4 mr-2" />
                Gửi ứng tuyển
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">VỀ IZI HOUSE</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-white">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Tuyển dụng
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Quy chế hoạt động
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">TÀI KHOẢN</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/register" className="hover:text-white">
                    Đăng ký
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white">
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Quên mật khẩu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">LIÊN HỆ</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Hotline: 0978379005
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email: info@izihouse.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">KẾT NỐI VỚI CHÚNG TÔI</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-sm text-gray-400">
            <p>© 2025 IZI HOUSE. Tất cả bản quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
