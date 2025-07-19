"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  Search,
  Heart,
  MessageSquare,
  User,
  Smartphone,
  Download,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

export default function InstructPage() {
  const steps = [
    {
      title: "Tìm kiếm phòng trọ",
      description: "Sử dụng thanh tìm kiếm để lọc theo khu vực, giá cả và tiện ích",
      icon: <Search className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Xem thông tin chi tiết",
      description: "Xem ảnh, mô tả và đánh giá về từng phòng trọ",
      icon: <Home className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Liên hệ chủ nhà",
      description: "Nhắn tin trực tiếp với chủ nhà để được tư vấn thêm",
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Đặt lịch xem phòng",
      description: "Chọn thời gian phù hợp để đến xem phòng trực tiếp",
      icon: <Calendar className="w-6 h-6 text-blue-600" />
    }
  ]

  const appFeatures = [
    "Tìm kiếm phòng trọ nhanh chóng",
    "Xem bản đồ vị trí chính xác",
    "Lưu lại các phòng yêu thích",
    "Nhận thông báo khi có phòng mới",
    "Đánh giá và xếp hạng minh bạch"
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hướng Dẫn Sử Dụng IZI HOUSE
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Khám phá cách dễ dàng tìm kiếm và đặt phòng trọ phù hợp nhất với bạn
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((step, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* App Features */}
      <div className="bg-blue-50 rounded-xl p-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tải Ứng Dụng Di Động
              </h2>
              <p className="text-gray-600 mb-6">
                Trải nghiệm tìm kiếm phòng trọ mượt mà hơn với ứng dụng IZI HOUSE
              </p>
              <ul className="space-y-3 mb-8">
                {appFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  <Download className="w-5 h-5 mr-2" />
                  Tải App Ngay
                </Button>
                <Button variant="outline" size="lg">
                  Xem thêm tính năng
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-auto">
                <div className="absolute -top-8 -left-8 w-64 h-auto bg-white p-2 rounded-3xl shadow-xl">
                  <div className="bg-gray-100 rounded-2xl overflow-hidden">
                    <img
                      src="/placeholder-phone.png"
                      alt="IZI HOUSE App"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Câu Hỏi Thường Gặp
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "Làm thế nào để đăng tin cho thuê phòng?",
              answer: "Bạn có thể đăng tin miễn phí bằng cách nhấn vào nút 'Đăng tin' ở góc trên bên phải màn hình và điền đầy đủ thông tin theo hướng dẫn."
            },
            {
              question: "Có mất phí khi sử dụng IZI HOUSE không?",
              answer: "Người tìm phòng hoàn toàn miễn phí khi sử dụng IZI HOUSE. Chúng tôi chỉ thu phí từ chủ nhà khi họ muốn đẩy tin đăng lên vị trí ưu tiên."
            },
            {
              question: "Làm sao để liên hệ với chủ nhà?",
              answer: "Bạn có thể nhấn vào nút 'Nhắn tin' hoặc 'Gọi điện' trên trang thông tin phòng để liên hệ trực tiếp với chủ nhà."
            }
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                  <span className="font-medium text-gray-900">{item.question}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90" />
                </summary>
                <CardContent className="pt-0 text-gray-600">
                  {item.answer}
                </CardContent>
              </details>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Bạn cần hỗ trợ thêm?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Liên Hệ Hỗ Trợ
          </Button>
          <Button variant="outline" size="lg">
            Xem Thêm Câu Hỏi
          </Button>
        </div>
      </div>
    </div>
  )
}

// Add Calendar icon component
function Calendar(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
