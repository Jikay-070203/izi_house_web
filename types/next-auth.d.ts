// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

// Mở rộng kiểu Session tích hợp sẵn
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Thêm thuộc tính 'id' vào đây
    } & DefaultSession["user"]; // Kế thừa các thuộc tính mặc định (name, email, image)
  }

  interface User extends DefaultUser {
    id: string; // Đảm bảo User cũng có 'id' nếu bạn đang sử dụng nó
  }
}

// Nếu bạn đang sử dụng JWT và muốn thêm 'id' vào mã thông báo JWT
// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//   }
// }
