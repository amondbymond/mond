import Image from "next/image"

type FeatureBoxProps = {
  title: string
  subtitle: string
  description: string
  imageUrl: string
}

function FeatureBox({ title, subtitle, description, imageUrl }: FeatureBoxProps) {
  return (
    <div className="bg-[#f9f9f9] rounded-lg overflow-hidden mb-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 bg-gray-100">
          <div className="relative w-full h-64 md:h-full">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
        <div className="md:w-3/5 p-6 md:p-8">
          <h4 className="text-[#ff8000] text-lg font-medium mb-1">{title}</h4>
          <h3 className="text-2xl font-bold mb-3">{subtitle}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function FeatureBoxes() {
  const features = [
    {
      title: "더 풍부한 아이디어",
      subtitle: "5만 건 이상의 트렌드 분석",
      description:
        "빗장, 명절연휴, 유행 등 실시간 업데이트되는 시장 흐름을 놓치지 말고, 핵심 키워드와 방향성을 빠르게 파악하여 콘텐츠에 적용할 수 있어요.",
      imageUrl: "/images/feature-1.png",
    },
    {
      title: "고민할 필요 없는",
      subtitle: "캡션, 본문 텍스트 자동 생성",
      description: "SNS, 뉴스레터, 블로그 등 어디에나 바로 쓸 문장을 몇 초 만에 완성해보세요.",
      imageUrl: "/images/feature-2.png",
    },
    {
      title: "시간과 비용을 아끼는",
      subtitle: "간편 협업 & 일정 관리",
      description: "하나의 워크스페이스에서 팀원들과 의견을 나누고, 마감 일정도 간단히 공유할 수 있어요.",
      imageUrl: "/images/feature-3.png",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* 상단 텍스트 추가 */}
        <div className="text-center mb-10">
          <h3 className="text-[#ff8000] text-xl font-medium mb-2">완벽한 SNS 콘텐츠 툴</h3>
          <h2 className="text-3xl font-bold text-[#333333] mb-8">콘텐츠 기획에 필요한 모든 기능</h2>
        </div>

        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            title={feature.title}
            subtitle={feature.subtitle}
            description={feature.description}
            imageUrl={feature.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}

