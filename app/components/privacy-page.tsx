"use client"

import { Shield, Lock, User, Server, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  const lastUpdated = "19/07/2024"

  const handleContactClick = () => {
    window.location.href = "/contact"
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Chính Sách Bảo Mật
        </h1>
        <p className="text-gray-600">
          Cập nhật lần cuối: {lastUpdated}
        </p>
      </div>

      {/* Introduction */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <p className="text-gray-700 mb-4">
            Tại <span className="font-semibold">IZI HOUSE</span>, chúng tôi cam kết bảo vệ thông tin cá nhân và quyền riêng tư của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin của bạn khi bạn sử dụng nền tảng của chúng tôi.
          </p>
          <p className="text-gray-700">
            Bằng cách truy cập hoặc sử dụng dịch vụ của chúng tôi, bạn đồng ý với việc thu thập và sử dụng thông tin theo mô tả trong chính sách bảo mật này.
          </p>
        </CardContent>
      </Card>

      {/* Information We Collect */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <User className="w-5 h-5 mr-2 text-blue-600" />
            Thông Tin Chúng Tôi Thu Thập
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">1. Thông tin cá nhân</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Họ và tên</li>
                <li>Địa chỉ email</li>
                <li>Số điện thoại</li>
                <li>Địa chỉ nhà/địa chỉ giao dịch</li>
                <li>Thông tin thanh toán (được mã hóa)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">2. Thông tin sử dụng</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Địa chỉ IP</li>
                <li>Loại trình duyệt và phiên bản</li>
                <li>Trang bạn truy cập trên nền tảng của chúng tôi</li>
                <li>Thời gian và ngày truy cập</li>
                <li>Thời gian dành cho các trang</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How We Use Your Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Server className="w-5 h-5 mr-2 text-blue-600" />
            Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-decimal pl-5 text-gray-700 space-y-3">
            <li>
              <span className="font-semibold">Cung cấp và duy trì dịch vụ:</span> Để vận hành và duy trì nền tảng của chúng tôi.
            </li>
            <li>
              <span className="font-semibold">Cải thiện trải nghiệm người dùng:</span> Để hiểu cách người dùng tương tác với nền tảng của chúng tôi và cải thiện nó.
            </li>
            <li>
              <span className="font-semibold">Giao tiếp:</span> Để gửi thông báo, cập nhật và thông tin liên quan đến tài khoản của bạn.
            </li>
            <li>
              <span className="font-semibold">Bảo mật:</span> Để phát hiện và ngăn chặn các hoạt động gian lận và bảo vệ quyền lợi của người dùng.
            </li>
            <li>
              <span className="font-semibold">Tuân thủ pháp lý:</span> Để tuân thủ các nghĩa vụ pháp lý và quy định hiện hành.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Data Protection */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Lock className="w-5 h-5 mr-2 text-blue-600" />
            Bảo Vệ Dữ Liệu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-700">
            <p>
              Chúng tôi áp dụng các biện pháp bảo mật phù hợp để bảo vệ thông tin cá nhân của bạn khỏi việc truy cập, sử dụng hoặc tiết lộ trái phép. Các biện pháp này bao gồm:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mã hóa dữ liệu nhạy cảm</li>
              <li>Kiểm soát truy cập nghiêm ngặt</li>
              <li>Giám sát bảo mật thường xuyên</li>
              <li>Đào tạo nhân viên về bảo vệ dữ liệu</li>
            </ul>
            <p>
              Chúng tôi chỉ cho phép nhân viên, nhà thầu và đại lý có quyền truy cập vào thông tin cá nhân của bạn khi họ cần biết thông tin đó để thực hiện công việc của mình và họ được yêu cầu giữ bí mật thông tin đó.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Your Rights */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">
            Quyền Của Bạn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-700">
            <p>Bạn có các quyền sau đây liên quan đến dữ liệu cá nhân của mình:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Quyền truy cập thông tin cá nhân của bạn</li>
              <li>Quyền yêu cầu sửa đổi thông tin không chính xác</li>
              <li>Quyền yêu cầu xóa dữ liệu của bạn</li>
              <li>Quyền phản đối việc xử lý dữ liệu của bạn</li>
              <li>Quyền yêu cầu hạn chế xử lý</li>
              <li>Quyền nhận dữ liệu của bạn ở định dạng có cấu trúc</li>
              <li>Quyền rút lại sự đồng ý bất cứ lúc nào</li>
            </ul>
            <p>
              Để thực hiện bất kỳ quyền nào trong số này, vui lòng liên hệ với chúng tôi bằng thông tin liên hệ được cung cấp bên dưới.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Changes to This Policy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">
            Thay Đổi Đối Với Chính Sách Bảo Mật
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-700">
            <p>
              Chúng tôi có thể cập nhật Chính sách bảo mật của mình theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Chính sách bảo mật mới trên trang này và cập nhật ngày "Cập nhật lần cuối" ở đầu Chính sách bảo mật này.
            </p>
            <p>
              Bạn nên xem xét Chính sách bảo mật này định kỳ để biết bất kỳ thay đổi nào. Những thay đổi này có hiệu lực ngay khi chúng tôi đăng lên trang này.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Us */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            Liên Hệ Với Chúng Tôi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-700">
            <p>Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này, vui lòng liên hệ với chúng tôi:</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                <span>Email: support@izihouse.vn</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                <span>Điện thoại: 1900 1234</span>
              </div>
            </div>
            <div className="pt-4">
              <Button 
                onClick={handleContactClick}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Đi đến trang Liên hệ
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
