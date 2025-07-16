"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Upload, X, ImageIcon, Home, DollarSign, Phone, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

interface PropertyForm {
  title: string
  type: string
  address: string
  district: string
  city: string
  price: string
  area: string
  bedrooms: string
  bathrooms: string
  description: string
  phone: string
  contactName: string
  images: File[]
}

export default function PostPropertyPage() {
  const [formData, setFormData] = useState<PropertyForm>({
    title: "",
    type: "",
    address: "",
    district: "",
    city: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    phone: "",
    contactName: "",
    images: [],
  })

  const [dragActive, setDragActive] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (field: keyof PropertyForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return

    const newImages = Array.from(files).slice(0, 10 - formData.images.length)
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }))
  }

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      console.log("Form submitted:", formData)
    }, 2000)
  }

  const isFormValid = () => {
    return (
      formData.title &&
      formData.type &&
      formData.address &&
      formData.price &&
      formData.phone &&
      formData.contactName &&
      formData.images.length > 0
    )
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Đăng tin thành công!</h2>
            <p className="text-gray-600 mb-6">
              Tin đăng của bạn đã được gửi và đang chờ duyệt. Chúng tôi sẽ liên hệ với bạn trong vòng 24h.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Về trang chủ</Button>
              </Link>
              <Button variant="outline" onClick={() => setSubmitSuccess(false)}>
                Đăng tin khác
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Đăng tin bất động sản</h1>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            Miễn phí
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Thông tin cơ bản
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="title">Tiêu đề tin đăng *</Label>
                    <Input
                      id="title"
                      placeholder="VD: Cho thuê căn hộ 2PN đầy đủ nội thất"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="type">Loại hình *</Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại hình" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="can-ho">Căn hộ</SelectItem>
                        <SelectItem value="phong-tro">Phòng trọ</SelectItem>
                        <SelectItem value="nha-nguyen-can">Nhà nguyên căn</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="nha-pho">Nhà phố</SelectItem>
                        <SelectItem value="dat-nen">Đất nền</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="city">Thành phố *</Label>
                    <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn thành phố" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                        <SelectItem value="hn">Hà Nội</SelectItem>
                        <SelectItem value="dn">Đà Nẵng</SelectItem>
                        <SelectItem value="ct">Cần Thơ</SelectItem>
                        <SelectItem value="hp">Hải Phòng</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="district">Quận/Huyện</Label>
                    <Input
                      id="district"
                      placeholder="VD: Quận 1"
                      value={formData.district}
                      onChange={(e) => handleInputChange("district", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Địa chỉ cụ thể *</Label>
                    <Input
                      id="address"
                      placeholder="VD: 123 Nguyễn Huệ"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Chi tiết bất động sản
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="price">Giá thuê (VNĐ/tháng) *</Label>
                    <Input
                      id="price"
                      placeholder="VD: 8000000"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="area">Diện tích (m²)</Label>
                    <Input
                      id="area"
                      placeholder="VD: 65"
                      value={formData.area}
                      onChange={(e) => handleInputChange("area", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="bedrooms">Số phòng ngủ</Label>
                    <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange("bedrooms", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Studio</SelectItem>
                        <SelectItem value="1">1 phòng</SelectItem>
                        <SelectItem value="2">2 phòng</SelectItem>
                        <SelectItem value="3">3 phòng</SelectItem>
                        <SelectItem value="4">4+ phòng</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="bathrooms">Số phòng tắm</Label>
                    <Select value={formData.bathrooms} onValueChange={(value) => handleInputChange("bathrooms", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 phòng</SelectItem>
                        <SelectItem value="2">2 phòng</SelectItem>
                        <SelectItem value="3">3 phòng</SelectItem>
                        <SelectItem value="4">4+ phòng</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Mô tả chi tiết</Label>
                  <Textarea
                    id="description"
                    placeholder="Mô tả chi tiết về bất động sản của bạn..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    maxLength={400}
                    rows={4}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">{formData.description.length}/400 ký tự</div>
                </div>
              </CardContent>
            </Card>

            {/* Images Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Hình ảnh (Tối đa 10 ảnh)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">Kéo thả ảnh vào đây</p>
                  <p className="text-gray-500 mb-4">hoặc</p>
                  <label htmlFor="image-upload">
                    <Button type="button" variant="outline" className="cursor-pointer bg-transparent">
                      Chọn ảnh từ máy tính
                    </Button>
                    <input
                      id="image-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e.target.files)}
                      disabled={formData.images.length >= 10}
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-2">Định dạng: JPG, PNG. Tối đa 10 ảnh.</p>
                </div>

                {/* Image Preview */}
                {formData.images.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-3">Ảnh đã chọn ({formData.images.length}/10)</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={URL.createObjectURL(image) || "/placeholder.svg"}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          {index === 0 && (
                            <Badge className="absolute bottom-1 left-1 bg-blue-600 text-xs">Ảnh chính</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Thông tin liên hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactName">Tên người liên hệ *</Label>
                    <Input
                      id="contactName"
                      placeholder="VD: Nguyễn Văn A"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange("contactName", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      placeholder="VD: 0901234567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">Lưu ý quan trọng</h4>
                      <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                        <li>• Số điện thoại sẽ được hiển thị công khai</li>
                        <li>• Tin đăng sẽ được duyệt trong vòng 24h</li>
                        <li>• Vui lòng cung cấp thông tin chính xác</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Link href="/">
                <Button type="button" variant="outline">
                  Hủy bỏ
                </Button>
              </Link>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={!isFormValid() || isSubmitting}>
                {isSubmitting ? "Đang đăng tin..." : "Đăng tin"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
