"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  ArrowLeft,
  Shield,
  FileText,
  Users,
  AlertTriangle,
  CheckCircle,
  Scale,
  Phone,
  Mail,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
            <span className="text-gray-600">Quy chế hoạt động</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quy chế hoạt động</h1>
            <p className="text-xl text-gray-600 mb-8">Các điều khoản và quy định sử dụng nền tảng IZI HOUSE</p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Cập nhật lần cuối: 01/01/2025</span>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Hiệu lực
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Mục lục
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <a href="#section-1" className="block text-blue-600 hover:text-blue-700 text-sm">
                      1. Điều khoản chung
                    </a>
                    <a href="#section-2" className="block text-blue-600 hover:text-blue-700 text-sm">
                      2. Quyền và nghĩa vụ của người dùng
                    </a>
                    <a href="#section-3" className="block text-blue-600 hover:text-blue-700 text-sm">
                      3. Quyền và nghĩa vụ của IZI HOUSE
                    </a>
                    <a href="#section-4" className="block text-blue-600 hover:text-blue-700 text-sm">
                      4. Quy định về đăng tin
                    </a>
                  </div>
                  <div className="space-y-2">
                    <a href="#section-5" className="block text-blue-600 hover:text-blue-700 text-sm">
                      5. Chính sách bảo mật
                    </a>
                    <a href="#section-6" className="block text-blue-600 hover:text-blue-700 text-sm">
                      6. Thanh toán và hoàn tiền
                    </a>
                    <a href="#section-7" className="block text-blue-600 hover:text-blue-700 text-sm">
                      7. Xử lý vi phạm
                    </a>
                    <a href="#section-8" className="block text-blue-600 hover:text-blue-700 text-sm">
                      8. Điều khoản cuối
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1 */}
            <Card className="mb-8" id="section-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  1. Điều khoản chung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1.1. Giới thiệu về IZI HOUSE</h4>
                  <p className="text-gray-600 leading-relaxed">
                    IZI HOUSE là nền tảng trực tuyến cung cấp dịch vụ kết nối người có nhu cầu thuê, mua bán bất động
                    sản với các chủ sở hữu, môi giới bất động sản. Chúng tôi cam kết tạo ra một môi trường giao dịch
                    minh bạch, an toàn và hiệu quả.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">1.2. Phạm vi áp dụng</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Quy chế này áp dụng cho tất cả người dùng sử dụng dịch vụ của IZI HOUSE, bao gồm:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Người tìm kiếm bất động sản</li>
                    <li>Chủ sở hữu bất động sản</li>
                    <li>Môi giới bất động sản</li>
                    <li>Các đối tác kinh doanh</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">1.3. Chấp nhận điều khoản</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Việc sử dụng dịch vụ của IZI HOUSE đồng nghĩa với việc bạn đã đọc, hiểu và đồng ý tuân thủ toàn bộ
                    các điều khoản trong quy chế này.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="mb-8" id="section-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  2. Quyền và nghĩa vụ của người dùng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">2.1. Quyền của người dùng</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Được sử dụng miễn phí các tính năng cơ bản của nền tảng</li>
                    <li>Được bảo vệ thông tin cá nhân theo chính sách bảo mật</li>
                    <li>Được hỗ trợ kỹ thuật và tư vấn từ đội ngũ IZI HOUSE</li>
                    <li>Được khiếu nại khi có tranh chấp phát sinh</li>
                    <li>Được cập nhật thông tin thị trường bất động sản</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">2.2. Nghĩa vụ của người dùng</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Cung cấp thông tin chính xác, trung thực khi đăng ký tài khoản</li>
                    <li>Không sử dụng nền tảng cho mục đích bất hợp pháp</li>
                    <li>Tôn trọng quyền lợi của người dùng khác</li>
                    <li>Thanh toán đầy đủ các khoản phí dịch vụ (nếu có)</li>
                    <li>Tuân thủ các quy định về đăng tin và giao dịch</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="mb-8" id="section-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-600" />
                  3. Quyền và nghĩa vụ của IZI HOUSE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">3.1. Quyền của IZI HOUSE</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Thu phí dịch vụ theo quy định đã công bố</li>
                    <li>Từ chối cung cấp dịch vụ cho người dùng vi phạm quy chế</li>
                    <li>Tạm ngưng hoặc chấm dứt tài khoản vi phạm</li>
                    <li>Thay đổi, cập nhật quy chế khi cần thiết</li>
                    <li>Hợp tác với cơ quan chức năng khi có yêu cầu</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">3.2. Nghĩa vụ của IZI HOUSE</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Cung cấp dịch vụ ổn định, chất lượng cao</li>
                    <li>Bảo mật thông tin cá nhân của người dùng</li>
                    <li>Hỗ trợ giải quyết tranh chấp giữa các bên</li>
                    <li>Cập nhật thông tin thị trường chính xác, kịp thời</li>
                    <li>Thông báo trước khi thay đổi quy chế hoặc chính sách</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="mb-8" id="section-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  4. Quy định về đăng tin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">4.1. Yêu cầu về nội dung tin đăng</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Thông tin phải chính xác, trung thực và cập nhật</li>
                    <li>Hình ảnh phải rõ nét, phản ánh đúng thực tế</li>
                    <li>Giá cả phải hợp lý và phù hợp với thị trường</li>
                    <li>Không được sử dụng từ ngữ phản cảm, xúc phạm</li>
                    <li>Tuân thủ quy định pháp luật về quảng cáo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4.2. Các hành vi bị cấm</h4>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-800 mb-2">Nghiêm cấm các hành vi sau:</p>
                        <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                          <li>Đăng tin giả mạo, lừa đảo</li>
                          <li>Sử dụng hình ảnh không có bản quyền</li>
                          <li>Đăng tin trùng lặp nhiều lần</li>
                          <li>Quảng cáo dịch vụ không liên quan đến bất động sản</li>
                          <li>Vi phạm pháp luật về kinh doanh bất động sản</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="mb-8" id="section-5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  5. Chính sách bảo mật
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">5.1. Thu thập thông tin</h4>
                  <p className="text-gray-600 leading-relaxed">
                    IZI HOUSE chỉ thu thập các thông tin cần thiết để cung cấp dịch vụ, bao gồm: thông tin cá nhân cơ
                    bản, thông tin liên hệ, lịch sử giao dịch và hành vi sử dụng dịch vụ.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5.2. Sử dụng thông tin</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Thông tin được sử dụng để: cung cấp dịch vụ, cải thiện chất lượng dịch vụ, gửi thông báo quan trọng,
                    phân tích thị trường và tuân thủ yêu cầu pháp lý.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5.3. Bảo vệ thông tin</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Chúng tôi áp dụng các biện pháp bảo mật tiên tiến để bảo vệ thông tin cá nhân của bạn khỏi truy cập
                    trái phép, sử dụng sai mục đích hoặc tiết lộ.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="mb-8" id="section-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  6. Thanh toán và hoàn tiền
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">6.1. Phương thức thanh toán</h4>
                  <p className="text-gray-600 leading-relaxed mb-2">IZI HOUSE hỗ trợ các phương thức thanh toán sau:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Chuyển khoản ngân hàng</li>
                    <li>Ví điện tử (MoMo, ZaloPay, VNPay)</li>
                    <li>Thẻ tín dụng/ghi nợ</li>
                    <li>Thanh toán tại văn phòng</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">6.2. Chính sách hoàn tiền</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                      <li>Hoàn tiền 100% nếu hủy trong vòng 24h đầu</li>
                      <li>Hoàn tiền 50% nếu hủy trong vòng 7 ngày</li>
                      <li>Không hoàn tiền sau 7 ngày sử dụng dịch vụ</li>
                      <li>Hoàn tiền đầy đủ nếu lỗi từ phía IZI HOUSE</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card className="mb-8" id="section-7">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  7. Xử lý vi phạm
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">7.1. Các mức độ vi phạm</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <h5 className="font-medium text-yellow-700">Vi phạm nhẹ:</h5>
                      <p className="text-sm text-gray-600">Cảnh báo, yêu cầu chỉnh sửa</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-4">
                      <h5 className="font-medium text-orange-700">Vi phạm trung bình:</h5>
                      <p className="text-sm text-gray-600">Tạm khóa tài khoản 7-30 ngày</p>
                    </div>
                    <div className="border-l-4 border-red-400 pl-4">
                      <h5 className="font-medium text-red-700">Vi phạm nghiêm trọng:</h5>
                      <p className="text-sm text-gray-600">Khóa vĩnh viễn, báo cơ quan chức năng</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">7.2. Quy trình xử lý</h4>
                  <ol className="list-decimal list-inside text-gray-600 space-y-1">
                    <li>Tiếp nhận báo cáo vi phạm</li>
                    <li>Xác minh và điều tra</li>
                    <li>Thông báo cho người vi phạm</li>
                    <li>Áp dụng biện pháp xử lý</li>
                    <li>Theo dõi và đánh giá kết quả</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card className="mb-8" id="section-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-gray-600" />
                  8. Điều khoản cuối
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">8.1. Thay đổi quy chế</h4>
                  <p className="text-gray-600 leading-relaxed">
                    IZI HOUSE có quyền thay đổi, bổ sung quy chế này khi cần thiết. Mọi thay đổi sẽ được thông báo trước
                    ít nhất 15 ngày và có hiệu lực kể từ ngày công bố.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">8.2. Giải quyết tranh chấp</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết thông qua thương lượng, hòa giải. Nếu không
                    thành, tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền tại TP. Hồ Chí Minh.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">8.3. Luật áp dụng</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Quy chế này được điều chỉnh bởi pháp luật Việt Nam. Các điều khoản không phù hợp với pháp luật sẽ
                    được điều chỉnh theo quy định của pháp luật hiện hành.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Cần hỗ trợ về quy chế hoạt động?</h3>
                  <p className="text-blue-700 mb-6">
                    Đội ngũ pháp lý của chúng tôi sẵn sàng giải đáp mọi thắc mắc của bạn
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Hotline: 0978379005
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                      <Mail className="w-4 h-4 mr-2" />
                      legal@izihouse.com
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-sm text-gray-400">
            <p>© 2025 IZI HOUSE. Tất cả bản quyền được bảo lưu.</p>
            <p className="mt-2">
              Địa chỉ: 123 Nguyễn Văn Cừ, Quận 5, TP. Hồ Chí Minh | Giấy phép kinh doanh số: 0123456789
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
