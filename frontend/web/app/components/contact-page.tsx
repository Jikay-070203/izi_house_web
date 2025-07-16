"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Home,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Youtube,
  Instagram,
  CheckCircle,
  HelpCircle,
  Users,
  Shield,
  Headphones,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
      })
    }, 3000)
  }

  const faqItems = [
    {
      question: "Làm thế nào để đăng tin bất động sản?",
      answer: "Bạn cần đăng ký tài khoản, sau đó chọn 'Đăng tin' và điền đầy đủ thông tin về bất động sản của mình.",
    },
    {
      question: "Phí dịch vụ của IZI HOUSE như thế nào?",
      answer: "Chúng tôi có các gói dịch vụ từ miễn phí đến VIP với mức phí hợp lý. Xem chi tiết tại mục 'Bảng giá'.",
    },
    {
      question: "Làm sao để tìm roommate phù hợp?",
      answer: "Sử dụng tính năng 'Tìm roommate' với bộ lọc chi tiết về sở thích, ngân sách và khu vực mong muốn.",
    },
    {
      question: "Tôi có thể tin tưởng vào thông tin trên IZI HOUSE không?",
      answer: "Chúng tôi có hệ thống xác minh thông tin và đánh giá từ người dùng để đảm bảo độ tin cậy.",
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
            <span className="text-gray-600">Liên hệ</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Liên hệ với chúng tôi</h1>
            <p className="text-xl text-gray-600 mb-8">Đội ngũ hỗ trợ 24/7 sẵn sàng giải đáp mọi thắc mắc của bạn</p>
            <div className="flex items-center justify-center gap-6">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Phản hồi trong 30 phút
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Hỗ trợ chuyên nghiệp
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Bảo mật tuyệt đối
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    Gửi tin nhắn cho chúng tôi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Cảm ơn bạn đã liên hệ!</h3>
                      <p className="text-gray-600">Chúng tôi sẽ phản hồi trong vòng 30 phút.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                          <Input
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Nhập họ và tên"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="Nhập số điện thoại"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Nhập địa chỉ email"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề *</label>
                          <Input
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            placeholder="Nhập chủ đề"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Danh mục</label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) => handleInputChange("category", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn danh mục" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="support">Hỗ trợ kỹ thuật</SelectItem>
                              <SelectItem value="billing">Thanh toán</SelectItem>
                              <SelectItem value="partnership">Hợp tác</SelectItem>
                              <SelectItem value="complaint">Khiếu nại</SelectItem>
                              <SelectItem value="other">Khác</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung *</label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Nhập nội dung chi tiết..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Đang gửi...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Gửi tin nhắn
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin liên hệ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Hotline</h4>
                      <p className="text-blue-600 font-semibold">0978379005</p>
                      <p className="text-sm text-gray-500">24/7 - Miễn phí</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-green-600 font-semibold">info@izihouse.com</p>
                      <p className="text-sm text-gray-500">Phản hồi trong 30 phút</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Địa chỉ</h4>
                      <p className="text-gray-600">123 Nguyễn Văn Cừ</p>
                      <p className="text-gray-600">Quận 5, TP. Hồ Chí Minh</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Giờ làm việc</h4>
                      <p className="text-gray-600">T2 - T6: 8:00 - 18:00</p>
                      <p className="text-gray-600">T7 - CN: 9:00 - 17:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Kết nối với chúng tôi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-red-50 hover:border-red-300 bg-transparent"
                    >
                      <Youtube className="w-5 h-5 text-red-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-pink-50 hover:border-pink-300 bg-transparent"
                    >
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Theo dõi chúng tôi để cập nhật tin tức mới nhất về thị trường bất động sản
                  </p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Hỗ trợ</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">30s</div>
                      <div className="text-sm text-gray-600">Phản hồi</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">99%</div>
                      <div className="text-sm text-gray-600">Hài lòng</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">50K+</div>
                      <div className="text-sm text-gray-600">Khách hàng</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
              <p className="text-gray-600">Tìm câu trả lời nhanh chóng cho những thắc mắc phổ biến</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <HelpCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.question}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Không tìm thấy câu trả lời bạn cần?</p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Xem thêm FAQ
              </Button>
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
            <p>© 2025 IZI HOUSE. Tất cả bản quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
