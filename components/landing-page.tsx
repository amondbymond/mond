"use client"

import { useEffect, useState, type FormEvent } from "react"
import Image from "next/image"
import { AnimatedBubble } from "./animated-bubble"
import { SuccessModal } from "./success-modal"
import { ContentTabs } from "./content-tabs"
import { FeatureBoxes } from "./feature-boxes"
import { usePhoneFormat } from "@/hooks/use-phone-format"

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false)
  const { handlePhoneChange } = usePhoneFormat()

  // 폼 제출 처리
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const adConsent = formData.get("marketing") === "on"

    // 로컬 스토리지에 저장
    const formDataObj = {
      email,
      phone,
      adConsent,
      timestamp: new Date().toISOString(),
    }

    const savedData = localStorage.getItem("formSubmissions")
    const submissions = savedData ? JSON.parse(savedData) : []

    submissions.push(formDataObj)
    localStorage.setItem("formSubmissions", JSON.stringify(submissions))

    // 폼 초기화
    form.reset()

    // 성공 모달 표시
    setShowModal(true)
  }

  // 푸터로 스크롤 함수
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      const headerHeight = 72 // 헤더 높이 (px)
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // 배경 패턴 생성
  useEffect(() => {
    const pattern = document.getElementById("pattern")
    if (pattern) {
      for (let i = 0; i < 20; i++) {
        const item = document.createElement("div")
        item.className = "pattern-item"
        item.textContent = "+"
        item.style.top = `${Math.random() * 100}%`
        item.style.left = `${Math.random() * 100}%`
        item.style.fontSize = `${Math.random() * 20 + 10}px`
        item.style.opacity = `${Math.random() * 0.5 + 0.1}`
        item.style.transform = `rotate(${Math.random() * 360}deg)`
        pattern.appendChild(item)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* 네비게이션 바 */}
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 border-b border-[#e6e8eb] bg-white z-50">
        <div className="container-custom flex justify-between items-center w-full">
          <div>
            <Image
              src="/logo.png"
              alt="amond 로고"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = "https://via.placeholder.com/120x32/ff8000/ffffff?text=amond"
              }}
            />
          </div>
          <button
            className="bg-[#ff8000] hover:bg-[#f59931] text-white font-medium px-6 py-2 rounded-lg transition-colors border-none cursor-pointer"
            onClick={scrollToContact}
          >
            지금 무료로 체험하기
          </button>
        </div>
      </header>

      {/* 메인 히어로 섹션 */}
      <main className="px-8 pt-28 py-16 md:py-24 relative">
        {/* 배경 패턴 */}
        <div id="pattern" className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none"></div>

        <div className="container-custom text-center">
          <h2 className="text-[58px] leading-tight font-bold text-[#333333] mt-6 mb-8">
            <div>GPT + 구글 트렌드 기반 가장</div>
            <div>트렌디한 콘텐츠를 만드는 솔루션,</div>
            <div>아몬드와 함께 하세요</div>
          </h2>
          <p className="text-lg text-[#252525] mb-10">트렌드와 브랜드 개성의 조합으로 반응을 이끌어보세요</p>

          <div className="flex flex-col items-center">
            <button
              className="bg-[#ff8000] hover:bg-[#f59931] text-white font-medium px-8 py-3 rounded-lg text-lg transition-colors border-none cursor-pointer"
              onClick={scrollToContact}
            >
              지금 무료로 체험하기
            </button>

            {/* 말풍선 */}
            <div className="mt-4">
              <AnimatedBubble />
            </div>
          </div>
        </div>
      </main>

      {/* 특징 박스 섹션 */}
      <FeatureBoxes />

      {/* 콘텐츠 탭 섹션 */}
      <ContentTabs />

      {/* 푸터 섹션 */}
      <footer id="contact-section" className="py-20 bg-[#F3F3F3] text-center">
        <div className="container-custom">
          <h2 className="text-[#ff8000] text-2xl font-semibold mb-4">서비스 이용하기</h2>
          <h3 className="text-3xl font-bold mb-2 text-[#333333]">1개월 무료 구독으로 바로 체험해보세요</h3>
          <p className="text-base text-[#333333] mb-12">AI 콘텐츠 서비스 '아몬드' 베타 버전이 5월에 출시합니다.</p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
            <label htmlFor="email" className="block mb-2 text-base text-[#333333]">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="이메일 주소"
              required
              className="w-full px-4 py-3 mb-6 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#ff8000]"
            />

            <label htmlFor="phone" className="block mb-2 text-base text-[#333333]">
              전화번호
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="010-0000-0000"
              required
              className="w-full px-4 py-3 mb-6 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#ff8000]"
              onChange={handlePhoneChange}
            />

            <div className="flex items-start mb-4">
              <input type="checkbox" id="privacy" name="privacy" required className="mt-1 mr-2" />
              <label htmlFor="privacy" className="text-sm text-[#333333]">
                개인정보 수집 이용에 동의합니다
              </label>
            </div>

            <div className="flex items-start mb-6">
              <input type="checkbox" id="marketing" name="marketing" className="mt-1 mr-2" />
              <label htmlFor="marketing" className="text-sm text-[#333333]">
                광고성 정보 수신에 동의합니다(선택)
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#ff8000] text-white font-semibold rounded-lg hover:bg-[#f59931] transition-colors border-none cursor-pointer"
            >
              무료체험 신청
            </button>
          </form>
        </div>

        <div className="mt-20 py-6 bg-[#e0e0e0] text-center">
          <div className="container-custom">
            <p className="text-sm text-[#666666] inline-block">© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" className="text-sm text-[#666666] ml-4 hover:text-[#ff8000] no-underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      {/* 성공 모달 */}
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

