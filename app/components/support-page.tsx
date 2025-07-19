"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ChevronRight, Mail, MessageSquare, Phone, Send } from "lucide-react"

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("faq")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const faqCategories = [
    {
      id: "general",
      name: "Chung",
      questions: [
        {
          question: "Làm thế nào để đăng tin cho thuê phòng?",
          answer: "Để đăng tin cho thuê phòng, bạn cần đăng nhập vào tài khoản, sau đó nhấn vào nút 'Đăng tin' ở góc trên bên phải màn hình và điền đầy đủ thông tin theo hướng dẫn."
        },
        {
          question: "Tôi có thể liên hệ với chủ nhà bằng cách nào?",
          answer: "Bạn có thể nhấn vào nút 'Nhắn tin' hoặc 'Gọi điện' trên trang thông tin phòng để liên hệ trực tiếp với chủ nhà."
        }
      ]
    },
    {
      id: "account",
      name: "Tài khoản",
      questions: [
        {
          question: "Làm thế nào để đặt lại mật khẩu?",
          answer: "Tại trang đăng nhập, nhấn vào 'Quên mật khẩu' và làm theo hướng dẫn để đặt lại mật khẩu mới qua email đã đăng ký."
        }
      ]
    },
    {
      id: "payment",
      name: "Thanh toán",
      questions: [
        {
          question: "Các hình thức thanh toán được chấp nhận?",
          answer: "Chúng tôi chấp nhận thanh toán qua chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay) và tiền mặt khi gặp mặt."
        }
      ]
    }
  ]

  const supportChannels = [
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      title: "Chat trực tuyến",
      description: "Được hỗ trợ ngay lập tức qua cửa sổ chat",
      action: "Bắt đầu chat"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: "Email hỗ trợ",
      description: "support@izihouse.vn",
      action: "Gửi email"
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-600" />,
      title: "Tổng đài hỗ trợ",
      description: "1900 1234 (8:00 - 22:00 hàng ngày)",
      action: "Gọi ngay"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trung Tâm Hỗ Trợ
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-8">
        <button
          className={`px-6 py-3 font-medium ${activeTab === "faq" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("faq")}
        >
          Câu hỏi thường gặp
        </button>
        <button
          className={`px-6 py-3 font-medium ${activeTab === "contact" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("contact")}
        >
          Liên hệ hỗ trợ
        </button>
      </div>

      {/* FAQ Section */}
      {activeTab === "faq" && (
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Tất cả
            </button>
            {faqCategories.map(category => (
              <button
                key={category.id}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200"
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {faqCategories.map(category => (
              <div key={category.id} className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
                {category.questions.map((faq, index) => (
                  <Card key={index} className="overflow-hidden">
                    <details className="group">
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90" />
                      </summary>
                      <CardContent className="pt-0 text-gray-600">
                        {faq.answer}
                      </CardContent>
                    </details>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Form */}
      {activeTab === "contact" && (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Gửi yêu cầu hỗ trợ</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Tiêu đề <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Tiêu đề yêu cầu hỗ trợ"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Nội dung <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải..."
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4 mr-2" />
                      Gửi yêu cầu
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Kênh hỗ trợ khác</h3>
            <div className="space-y-4">
              {supportChannels.map((channel, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        {channel.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{channel.title}</h4>
                        <p className="text-sm text-gray-600">{channel.description}</p>
                        <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800 mt-2">
                          {channel.action} <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Chúng tôi luôn sẵn sàng hỗ trợ bạn</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Đội ngũ hỗ trợ của chúng tôi làm việc 24/7 để giải đáp mọi thắc mắc của bạn một cách nhanh chóng và hiệu quả nhất.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
