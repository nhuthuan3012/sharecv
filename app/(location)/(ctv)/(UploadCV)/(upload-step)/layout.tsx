"use client"

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function UploadCVLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname()
    const router = useRouter()
    return (
      <>
        <p
          className="font-bold text-3xl text-center py-10"
          style={{ backgroundColor: "#E4F2F9", color: "#073776" }}
        >
          Điền thông tin Ứng viên
        </p>
        <div className="container">
        <div className="flex flex-row justify-between">
            <p className={`cursor-pointer`}>Tải lên CV</p>
            <p className={`cursor-pointer ${pathname === '/uploadcv2' && 'font-bold'}`} onClick={() => router.push('/uploadcv2')}>Thông tin cơ bản</p>
            <p className={`cursor-pointer ${pathname === '/uploadcv3' && 'font-bold'}`} onClick={() => router.push('/uploadcv3')}>Kỹ năng</p>
            <p className={`cursor-pointer ${pathname === '/uploadcv4' && 'font-bold'}`}  onClick={() => router.push('/uploadcv4')}>Kinh nghiệm</p>
            <p className={`cursor-pointer ${pathname === '/uploadcv5' && 'font-bold'}`} onClick={() => router.push('/uploadcv5')}>Học vấn</p>
            <p className={`cursor-pointer ${pathname === '/uploadcv6' && 'font-bold'}`} onClick={() => router.push('/uploadcv6')}>Chứng chỉ</p>
            <p className={`cursor-pointer ${pathname === '/uploadcv7' && 'font-bold'}`} onClick={() => router.push('/uploadcv7')}>Dự án</p>
            <p className={`cursor-pointer ${pathname === '/uploadcv8' && 'font-bold'}`} onClick={() => router.push('/uploadcv8')}>Giải thưởng</p>
          </div>
        </div>
        {children}
      </>
    )
  }