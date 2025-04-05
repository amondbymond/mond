export type ContentItem = {
  id: string
  category: string
  title: string
  description: string
  icon: string
  date: string
}

export const categories = [
  { id: "all", name: "전체" },
  { id: "beauty", name: "뷰티/미용" },
  { id: "food", name: "맛집/음식" },
  { id: "daily", name: "일상/트렌드" },
  { id: "fashion", name: "패션" },
  { id: "self", name: "자기개발" },
  { id: "knowledge", name: "지식 콘텐츠" },
  { id: "health", name: "건강/헬스" },
  { id: "etc", name: "기타" },
]

export const contentItems: ContentItem[] = [
  {
    id: "1",
    category: "beauty",
    title: "타이틀이 가진 힘",
    description: "마케팅에서 제목은 절대 과소평가할 수 없는 힘이 있어요! ❤️",
    icon: "💻",
    date: "5/1",
  },
  {
    id: "2",
    category: "daily",
    title: "필수 마케팅 채널",
    description: "이제 시작해도 늦지 않았어요. 함께 성장해볼까요? 🙌 #마케팅채널",
    icon: "📊",
    date: "5/1",
  },
  {
    id: "3",
    category: "self",
    title: "프리랜서의 하루",
    description: "제 하루를 엿보며 나만의 루틴을 만들어 보세요! #프리랜서일상 #디지털노마드",
    icon: "💼",
    date: "5/1",
  },
  {
    id: "4",
    category: "knowledge",
    title: "팔리는 콘텐츠",
    description: "좋은 콘텐츠는 팔리고, 나쁜 콘텐츠는 사라진다. 😉 치열한 당신의 콘텐츠는...",
    icon: "😀",
    date: "5/1",
  },
  {
    id: "5",
    category: "daily",
    title: "마케팅 TIP 이벤트",
    description: "제가 준비한 무료 선물 받으실 분? 실무에서 바로 쓰이는 마케팅 전자책 증정 이벤...",
    icon: "🎁",
    date: "5/1",
  },
  {
    id: "6",
    category: "beauty",
    title: "매출을 올리는 힘",
    description: "마케팅렌더러네이는 마케팅의 핵심가!! ❤️ 이 3가지만 실천해도 매출은 쑥쑥 올라...",
    icon: "💡",
    date: "5/1",
  },
  {
    id: "7",
    category: "knowledge",
    title: "콘텐츠 트렌드의 핵심",
    description: "콘텐츠의 트렌드는 매년 바뀌지만, 핵심은 같습니다. 🎯 고객과 공감하고, 가치 전달...",
    icon: "🎯",
    date: "5/1",
  },
  {
    id: "8",
    category: "fashion",
    title: "스토리텔링의 힘",
    description: "특별한 당신만의 이야기를 만들어 보세요! #스토리텔링마케팅 #콘텐츠팁",
    icon: "✨",
    date: "5/1",
  },
  {
    id: "9",
    category: "health",
    title: "밀스 2025 트렌드",
    description: "3가지 밀스 에서 활용 방법으로 브랜드 인지도를 배르게 높여보세요. 당신의 비즈...",
    icon: "🔥",
    date: "5/1",
  },
  {
    id: "10",
    category: "food",
    title: "맛집 콘텐츠 제작법",
    description: "맛집 콘텐츠로 팔로워 늘리는 비법 대공개! #맛집스타그램 #푸드콘텐츠",
    icon: "🍔",
    date: "5/1",
  },
  {
    id: "11",
    category: "etc",
    title: "콘텐츠 기획 노하우",
    description: "10년차 마케터가 알려주는 콘텐츠 기획의 모든 것 #콘텐츠기획 #마케팅팁",
    icon: "📝",
    date: "5/1",
  },
  {
    id: "12",
    category: "self",
    title: "성장하는 마케터의 습관",
    description: "매일 1% 성장하는 마케터들의 5가지 공통점 #마케터성장 #습관형성",
    icon: "📈",
    date: "5/1",
  },
]

