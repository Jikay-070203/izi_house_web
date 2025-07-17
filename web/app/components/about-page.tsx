"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Zap,
  Award,
  TrendingUp,
  Building,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Instagram,
  CheckCircle,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    {
      year: "2020",
      title: "Thành lập IZI HOUSE",
      description: "Ra mắt nền tảng với 1,000 tin đăng đầu tiên",
      icon: <Building className="w-5 h-5" />,
    },
    {
      year: "2021",
      title: "Mở rộng thị trường",
      description: "Phủ sóng 10 tỉnh thành với 50,000 tin đăng",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      year: "2022",
      title: "Tính năng AI",
      description: "Ra mắt chatbot AI và gợi ý thông minh",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      year: "2023",
      title: "Ứng dụng di động",
      description: "Phát hành app iOS và Android",
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "Dẫn đầu thị trường",
      description: "Trở thành nền tảng #1 với 1 triệu người dùng",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ]

  const teamMembers = {
    ceo: {
      name: "Nguyen Thanh Hoa",
      position: "CEO – Project Manager & Developer",
      description: "Project Management – CEO, Developer. Expected Deliverables: A complete business plan, Signed partnership agreements with strategic partners.",
      image: "/profile/hoa_avatar@6x.png"
    },
    development: [
      {
        name: "Tran Hoang Long",
        position: "Backend Developer, Tech lead",
        description: "Expected Deliverables: Build the software core. Manage & maintain the database.",
        image: "/profile/long_avatar@6x.png"
      },
      {
        name: "Pham Nguyen Khanh Minh",
        position: "AI Model Developer/Frontend Developer",
        description: "Expected Deliverables: Design and develop AI Agent. Develop UX/UI.",
        image: "/profile/minh_avatar@6x.png"
      },
      {
        name: "Lam Thanh Nhan",
        position: "Designer/Social Content",
        description: "Expected Deliverables: Develop a cohesive brand visual identity. Design user-friendly, consistent interfaces.",
        image: "/profile/nhan_avatar@6x.png"
      }
    ],
    business: [
      {
        name: "Nguyen Le Trong Phuc",
        position: "Financial Lead/Operations",
        description: "Expected Deliverables: Analyze and define sustainable financial goals. Manages finances & budgets. Ensures smooth daily operations. Handles legal & administrative tasks.",
        image: "/profile/phuc_avatar@6x.png"
      },
      {
        name: "Hoang Quynh Trang",
        position: "Chief Marketing Officer/Sale leads",
        description: "Expected Deliverables: Strengthen brand visibility and positioning. Conduct market and competitor analysis and STP. Business Environment Analysis.",
        image: "/profile/trang_avatar@6x.png"
      }
    ]
  }

  const achievements = [
    {
      title: "Top 10 Nền tảng BĐS",
      description: "Được vinh danh bởi VNExpress",
      icon: <Award className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Giải thưởng Đổi mới",
      description: "Công nghệ tiên tiến nhất 2023",
      icon: <Star className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Chứng nhận ISO 27001",
      description: "Đảm bảo an toàn thông tin quốc tế",
      icon: <Shield className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Giải thưởng Sao Khuê 2024",
      description: "Sản phẩm công nghệ xuất sắc",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    },
  ]

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
            <span className="text-gray-600">Giới thiệu</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Về IZI HOUSE</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nền tảng bất động sản hàng đầu Việt Nam, kết nối hàng triệu người với căn phòng mơ ước
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-gray-600">Người dùng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
                <div className="text-gray-600">Tin đăng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">34</div>
                <div className="text-gray-600">Tỉnh thành</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Hài lòng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Sứ mệnh</h3>
                    <p className="text-blue-600 font-medium">Mission</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Tạo ra một nền tảng minh bạch, đáng tin cậy và dễ sử dụng, giúp mọi người dễ dàng tìm kiếm và sở hữu căn phòng mơ ước cùng với các dịch vụ tiện ích tốt nhất. Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho cả người mua, người bán và các đối tác.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Tầm nhìn</h3>
                    <p className="text-green-600 font-medium">Vision</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Trở thành nền tảng bất động sản số 1 Đông Nam Á vào năm 2030, tiên phong trong việc ứng dụng công nghệ
                  AI và Big Data để cách mạng hóa cách thức giao dịch bất động sản, mang lại giá trị bền vững cho cộng
                  đồng.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tận tâm</h3>
                <p className="text-gray-600 leading-relaxed">
                  Đặt khách hàng làm trung tâm, luôn lắng nghe và thấu hiểu nhu cầu để mang đến dịch vụ tốt nhất.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tin cậy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Xây dựng niềm tin thông qua sự minh bạch, chính xác và cam kết thực hiện đúng những gì đã hứa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kết nối</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tạo ra cầu nối giữa người mua và người bán, xây dựng cộng đồng bất động sản mạnh mẽ.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Đổi mới</h3>
                <p className="text-gray-600 leading-relaxed">
                  Không ngừng cải tiến và ứng dụng công nghệ mới để nâng cao trải nghiệm người dùng.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hành trình phát triển</h2>
            <p className="text-gray-600">Những cột mốc quan trọng trong quá trình xây dựng và phát triển IZI HOUSE</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">
                      {milestone.icon}
                    </div>

                    {/* Content */}
                    <Card className="flex-1">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-blue-100 text-blue-800 font-bold">{milestone.year}</Badge>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ lãnh đạo</h2>
            <p className="text-gray-600">Những con người tài năng đang dẫn dắt IZI HOUSE tiến về phía trước</p>
          </div>

          <div className="space-y-16">
            {/* CEO Card - Centered at the top */}
            <div className="flex justify-center px-4">
              <div className="w-full max-w-lg">
                <Card className="text-center hover:shadow-lg transition-shadow border-2 border-blue-50">
                  <CardContent className="p-8">
                    <div className="w-36 h-36 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-md">
                      <img
                        src={teamMembers.ceo.image || "/placeholder.svg"}
                        alt={teamMembers.ceo.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{teamMembers.ceo.name}</h3>
                    <p className="text-blue-600 font-medium text-lg mb-4">{teamMembers.ceo.position}</p>
                    <p className="text-gray-600 leading-relaxed">{teamMembers.ceo.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Development Team */}
            <div className="mt-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Đội Phát Triển</h3>
                <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {teamMembers.development.map((member, index) => (
                  <Card key={`dev-${index}`} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="w-28 h-28 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full mx-auto mb-5 overflow-hidden border-4 border-white shadow-md">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Team */}
            <div className="mt-20">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Đội Kinh Doanh</h3>
                <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
              </div>
              <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {teamMembers.business.map((member, index) => (
                    <Card key={`biz-${index}`} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="w-28 h-28 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full mx-auto mb-5 overflow-hidden border-4 border-white shadow-md">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                          <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thành tựu & Giải thưởng</h2>
            <p className="text-gray-600">Những ghi nhận và vinh danh mà IZI HOUSE đã đạt được</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{achievement.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Tham gia cùng chúng tôi</h2>
            <p className="text-xl mb-8 opacity-90">
              Hãy trở thành một phần của cộng đồng IZI HOUSE và cùng nhau xây dựng tương lai bất động sản Việt Nam
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">Cơ hội nghề nghiệp</Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
                >
                  Liên hệ hợp tác
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
            <p> 2025 IZI HOUSE. Tất cả bản quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}