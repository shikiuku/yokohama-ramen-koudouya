import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Truck, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StoresPage() {
  const stores = [
    {
      id: 1,
      name: "横浜家系ラーメン幸道家 横浜店",
      area: "横浜エリア",
      deliveryZones: ["西区", "神奈川区", "港北区", "中区"],
      operatingHours: {
        weekday: "11:00 - 23:00",
        weekend: "11:00 - 23:00",
        closed: "年中無休"
      },
      rating: 4.8,
      orderCount: "月間1000件以上",
      deliveryTime: "30-45分",
    },
    {
      id: 2,
      name: "横浜家系ラーメン幸道家 渋谷店",
      area: "渋谷エリア",
      deliveryZones: ["渋谷区", "新宿区", "港区", "目黒区"],
      operatingHours: {
        weekday: "11:00 - 24:00",
        weekend: "11:00 - 24:00",
        closed: "年中無休"
      },
      rating: 4.7,
      orderCount: "月間1200件以上",
      deliveryTime: "25-40分",
    },
    {
      id: 3,
      name: "横浜家系ラーメン幸道家 新宿店",
      area: "新宿エリア",
      deliveryZones: ["新宿区", "渋谷区", "中野区", "豊島区"],
      operatingHours: {
        weekday: "10:30 - 24:00",
        weekend: "10:30 - 24:00",
        closed: "年中無休"
      },
      rating: 4.9,
      orderCount: "月間1500件以上",
      deliveryTime: "20-35分",
    },
    {
      id: 4,
      name: "横浜家系ラーメン幸道家 池袋店",
      area: "池袋エリア",
      deliveryZones: ["豊島区", "板橋区", "北区", "文京区"],
      operatingHours: {
        weekday: "11:00 - 23:30",
        weekend: "11:00 - 23:30",
        closed: "年中無休"
      },
      rating: 4.6,
      orderCount: "月間800件以上",
      deliveryTime: "30-45分",
    },
    {
      id: 5,
      name: "横浜家系ラーメン幸道家 川崎店",
      area: "川崎エリア",
      deliveryZones: ["川崎区", "幸区", "中原区", "高津区"],
      operatingHours: {
        weekday: "11:00 - 23:00",
        weekend: "11:00 - 23:00",
        closed: "年中無休"
      },
      rating: 4.8,
      orderCount: "月間900件以上",
      deliveryTime: "25-40分",
    },
    {
      id: 6,
      name: "横浜家系ラーメン幸道家 品川店",
      area: "品川エリア",
      deliveryZones: ["港区", "品川区", "大田区", "目黒区"],
      operatingHours: {
        weekday: "11:00 - 22:00",
        weekend: "11:00 - 22:00",
        closed: "年中無休"
      },
      rating: 4.5,
      orderCount: "月間700件以上",
      deliveryTime: "30-45分",
    },
    {
      id: 7,
      name: "横浜家系ラーメン幸道家 吉祥寺店",
      area: "吉祥寺エリア",
      deliveryZones: ["武蔵野市", "三鷹市", "西東京市", "練馬区"],
      operatingHours: {
        weekday: "11:00 - 23:00",
        weekend: "11:00 - 23:00",
        closed: "年中無休"
      },
      rating: 4.7,
      orderCount: "月間600件以上",
      deliveryTime: "35-50分",
    },
    {
      id: 8,
      name: "横浜家系ラーメン幸道家 立川店",
      area: "立川エリア",
      deliveryZones: ["立川市", "国分寺市", "国立市", "昭島市"],
      operatingHours: {
        weekday: "11:00 - 22:30",
        weekend: "11:00 - 22:30",
        closed: "年中無休"
      },
      rating: 4.6,
      orderCount: "月間750件以上",
      deliveryTime: "30-45分",
    },
    {
      id: 9,
      name: "横浜家系ラーメン幸道家 町田店",
      area: "町田エリア",
      deliveryZones: ["町田市", "相模原市", "多摩市", "八王子市"],
      operatingHours: {
        weekday: "11:00 - 23:00",
        weekend: "11:00 - 23:00",
        closed: "年中無休"
      },
      rating: 4.8,
      orderCount: "月間650件以上",
      deliveryTime: "35-50分",
    },
    {
      id: 10,
      name: "横浜家系ラーメン幸道家 八王子店",
      area: "八王子エリア",
      deliveryZones: ["八王子市", "日野市", "多摩市", "町田市"],
      operatingHours: {
        weekday: "11:00 - 22:00",
        weekend: "11:00 - 22:00",
        closed: "年中無休"
      },
      rating: 4.7,
      orderCount: "月間850件以上",
      deliveryTime: "30-45分",
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
      {/* Header */}
      <header className="bg-black sticky top-0 z-50 border-b border-red-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>ホームに戻る</span>
              </Link>
              <div className="flex items-center space-x-2">
                <Image
                  src="/yokohama-iekei-logo.png"
                  alt="横浜家系ロゴ"
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
                <h1 className="text-xl font-bold text-white">配達エリア</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">配達エリア案内</h2>
          <p className="text-xl text-white/90 mb-8">Uber Eatsで関東全域にお届け中の幸道家ゴーストキッチン</p>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">{stores.length}</div>
                <div className="text-white/90">配達拠点</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stores.reduce((total, store) => total + store.deliveryZones.length, 0)}
                </div>
                <div className="text-white/90">配達エリア数</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">関東</div>
                <div className="text-white/90">配達地域</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stores Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store) => (
              <Card key={store.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-red-500 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{store.name}</h3>
                    <div className="flex items-start space-x-2 text-gray-300 mb-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-500" />
                      <div className="text-sm">
                        <p className="text-red-400 font-medium">{store.area}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {store.deliveryZones.map((zone, index) => (
                            <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                              {zone}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-500" />
                      <div className="text-sm text-gray-300">
                        <p>平日: {store.operatingHours.weekday}</p>
                        <p>土日祝: {store.operatingHours.weekend}</p>
                        <p className="text-red-400">{store.operatingHours.closed}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Star className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-500" />
                      <div className="text-sm text-gray-300">
                        <p className="text-white font-medium">評価: {store.rating}/5.0</p>
                        <p>{store.orderCount}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Truck className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-500" />
                      <div className="text-sm text-gray-300">
                        <p className="text-white font-medium">配達時間: {store.deliveryTime}</p>
                      </div>
                    </div>

                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <a 
                      href={`https://www.ubereats.com/jp/search?q=${encodeURIComponent(store.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-2 px-4 rounded-md font-medium transition-colors"
                    >
                      Uber Eatsで注文
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image
              src="/yokohama-iekei-logo.png"
              alt="横浜家系ロゴ"
              width={30}
              height={30}
              className="h-6 w-6"
            />
            <span className="text-xl font-bold text-white">横浜家系ラーメン幸道家</span>
          </div>
          <p className="text-gray-400">© 2025 横浜家系ラーメン幸道家. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}