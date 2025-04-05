"use client"

import { useState, useEffect } from "react"
import { categories, contentItems, type ContentItem } from "@/data/content-data"

export function ContentTabs() {
  const [activeTab, setActiveTab] = useState("all")
  const [filteredItems, setFilteredItems] = useState<ContentItem[]>([])

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredItems(contentItems.slice(0, 9))
    } else {
      const filtered = contentItems.filter((item) => item.category === activeTab).slice(0, 9)
      setFilteredItems(filtered)
    }
  }, [activeTab])

  return (
    <section className="py-16 bg-white">
      {/* 상단 텍스트 제거 */}

      {/* 탭 메뉴 */}
      <div className="mb-10 w-full bg-[#f8f8f8]">
        <div className="overflow-x-auto">
          <div className="flex justify-center min-w-max container-custom">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 text-center whitespace-nowrap transition-colors ${
                  activeTab === category.id
                    ? "bg-[#ff8000] text-white font-medium"
                    : "bg-[#f8f8f8] text-[#666666] hover:bg-[#ffebda]"
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 콘텐츠 그리드 */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 truncate">{item.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">이 카테고리에는 아직 콘텐츠가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  )
}

