"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Search, MessageSquare, Send, ThumbsUp, ThumbsDown, ChevronRight } from "lucide-react"

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "general", name: "Chung" },
    { id: "account", name: "Tài khoản" },
    { id: "payment", name: "Thanh toán" },
    { id: "booking", name: "Đặt phòng" },
    { id: "hosting", name: "Cho thuê phòng" }
  ]

  const faqs = [
    {
      id: 1,
      question: "Làm thế nào để đăng ký tài khoản?",
      answer: "Bấm vào nút 'Đăng ký' ở góc trên bên phải màn hình, điền đầy đủ thông tin theo yêu cầu và xác nhận email để hoàn tất đăng ký.",
      category: "account",
      helpful: 24,
      notHelpful: 2
    },
    {
      id: 2,
      question: "Tôi có thể thanh toán bằng những hình thức nào?",
      answer: "Chúng tôi chấp nhận thanh toán qua chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay) và tiền mặt khi nhận phòng.",
      category: "payment",
      helpful: 42,
      notHelpful: 5
    },
    {
      id: 3,
      question: "Làm thế nào để hủy đặt phòng?",
      answer: "Truy cập mục 'Đơn đặt phòng' trong tài khoản của bạn, chọn đơn cần hủy và làm theo hướng dẫn. Lưu ý chính sách hủy phòng của từng chủ nhà có thể khác nhau.",
      category: "booking",
      helpful: 18,
      notHelpful: 3
    },
    {
      id: 4,
      question: "Làm thế nào để đăng tin cho thuê phòng?",
      answer: "Sau khi đăng nhập, nhấn vào 'Đăng tin' ở thanh điều hướng, điền đầy đủ thông tin về phòng và nhấn 'Đăng tin' để hoàn tất.",
      category: "hosting",
      helpful: 31,
      notHelpful: 1
    },
    {
      id: 5,
      question: "Tôi quên mật khẩu thì phải làm sao?",
      answer: "Tại trang đăng nhập, nhấn vào 'Quên mật khẩu' và làm theo hướng dẫn để đặt lại mật khẩu mới qua email đã đăng ký.",
      category: "account",
      helpful: 15,
      notHelpful: 0
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle feedback submission
    console.log("Feedback submitted:", feedback)
    setSubmitted(true)
    setFeedback({ name: "", email: "", message: "" })
    
    // Reset submission status after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFeedback(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Câu Hỏi Thường Gặp & Góp Ý
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Tìm câu trả lời cho các thắc mắc thường gặp hoặc gửi góp ý cho chúng tôi
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Categories */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Danh mục</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === category.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ List */}
        <div className="md:col-span-2">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Tìm kiếm câu hỏi..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <Card key={faq.id} className="overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90" />
                    </summary>
                    <CardContent className="pt-0 text-gray-600">
                      <p className="mb-4">{faq.answer}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-4">Câu trả lời này có hữu ích không?</span>
                        <button className="flex items-center text-green-600 hover:text-green-700 mr-4">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          <span>{faq.helpful}</span>
                        </button>
                        <button className="flex items-center text-red-600 hover:text-red-700">
                          <ThumbsDown className="w-4 h-4 mr-1" />
                          <span>{faq.notHelpful}</span>
                        </button>
                      </div>
                    </CardContent>
                  </details>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center text-gray-500">
                Không tìm thấy câu hỏi phù hợp với tìm kiếm của bạn.
              </CardContent>
            </Card>
          )}
        </div>

        {/* Feedback Form */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gửi góp ý</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Cảm ơn bạn!</h3>
                  <p className="text-gray-600">Chúng tôi đã nhận được góp ý của bạn.</p>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Họ và tên
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={feedback.name}
                      onChange={handleFeedbackChange}
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={feedback.email}
                      onChange={handleFeedbackChange}
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Nội dung góp ý
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={feedback.message}
                      onChange={handleFeedbackChange}
                      rows={4}
                      placeholder="Nội dung góp ý của bạn..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Gửi góp ý
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
