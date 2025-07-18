"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Eye, EyeOff, Home, Mail, Lock, User, Phone, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreeNewsletter: false,
  })
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeTerms: "",
    }
    let isValid = true

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên"
      isValid = false
    }

    if (!formData.email) {
      newErrors.email = "Vui lòng nhập email"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ"
      isValid = false
    }

    if (!formData.phone) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
      isValid = false
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ"
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu"
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự"
      isValid = false
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu"
      isValid = false
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp"
      isValid = false
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Vui lòng đồng ý với điều khoản sử dụng"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log("Register data:", formData)
      // Redirect to login or profile page
      alert("Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản.")
      window.location.href = "/login"
    }, 2000)
  }

  const handleGoogleRegister = () => {
    setIsLoading(true)
    // Simulate Google OAuth
    setTimeout(() => {
      setIsLoading(false)
      console.log("Google register initiated")
      // In real app, this would redirect to Google OAuth
      alert("Chức năng đăng ký Google sẽ được tích hợp sau!")
    }, 1000)
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
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              <span className="text-xl font-bold text-blue-600">IZI HOUSE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900">Đăng ký</CardTitle>
            <p className="text-gray-600 mt-2">Tạo tài khoản mới để bắt đầu!</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Google Register Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 bg-transparent border-gray-300 hover:bg-gray-50"
              onClick={handleGoogleRegister}
              disabled={isLoading}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {isLoading ? "Đang xử lý..." : "Đăng ký với Google"}
            </Button>

            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">Hoặc</span>
              </div>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Họ và tên *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Nhập họ và tên"
                    className={`pl-10 ${errors.fullName ? "border-red-500" : ""}`}
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                  />
                </div>
                {errors.fullName && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.fullName}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Nhập email của bạn"
                    className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                {errors.email && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
                {errors.phone && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Xác nhận mật khẩu *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Nhập lại mật khẩu"
                    className={`pl-10 pr-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="agreeTerms" className="text-sm text-gray-600 leading-relaxed">
                    Tôi đồng ý với{" "}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                      Điều khoản sử dụng
                    </Link>{" "}
                    và{" "}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                      Chính sách bảo mật
                    </Link>{" "}
                    của IZI HOUSE *
                  </Label>
                </div>
                {errors.agreeTerms && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.agreeTerms}
                  </div>
                )}

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeNewsletter"
                    checked={formData.agreeNewsletter}
                    onCheckedChange={(checked) => handleInputChange("agreeNewsletter", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="agreeNewsletter" className="text-sm text-gray-600 leading-relaxed">
                    Tôi muốn nhận thông tin ưu đãi và tin tức từ IZI HOUSE
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                {isLoading ? "Đang đăng ký..." : "Đăng ký"}
              </Button>
            </form>

            <div className="text-center">
              <span className="text-gray-600">Đã có tài khoản? </span>
              <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Đăng nhập ngay
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
