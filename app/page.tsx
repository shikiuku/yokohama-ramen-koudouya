import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Star, ChefHat, Utensils, Building, CheckCircle, Users } from "lucide-react"
import Image from "next/image"

export default function RamenRestaurant() {
  const menuItems = [
    {
      image: "/ramen-photos/ramen1.jpg",
      alt: "ラーメン",
    },
    {
      image: "/ramen-photos/ramen2.jpg",
      alt: "味玉ラーメン",
    },
    {
      image: "/ramen-photos/ramen3.jpg",
      alt: "ネギラーメン",
    },
    {
      image: "/ramen-photos/ramen4.jpg",
      alt: "チャーシューメン",
    },
    {
      image: "/ramen-photos/ramen5.jpg",
      alt: "スペシャルラーメン",
    },
    {
      image: "/ramen-photos/ramen6.jpg",
      alt: "特上ラーメン",
    },
    {
      image: "/ramen-photos/ramen7.jpg",
      alt: "とんこつ味噌ラーメン",
    },
    {
      image: "/ramen-photos/ramen8.jpg",
      alt: "激辛ラーメン",
    },
  ]

  const sideMenuCategories = [
    {
      category: "単品メニュー",
      items: [
        { name: "餃子 5個", price: "¥350" },
        { name: "揚げ餃子 3個", price: "¥380" },
        { name: "唐揚げ 4個", price: "¥450" },
      ]
    },
    {
      category: "トッピング",
      items: [
        { name: "味玉・海苔 3枚・メンマ", price: "¥120" },
        { name: "ネギ・キャベツ・もやし", price: "¥150" },
        { name: "ほうれん草増し", price: "¥150" },
        { name: "チャーシュー 2枚", price: "¥200" },
      ]
    },
    {
      category: "ライス",
      items: [
        { name: "小", price: "¥50" },
        { name: "中", price: "¥100" },
        { name: "大", price: "¥150" },
      ]
    },
    {
      category: "ソフトドリンク",
      items: [
        { name: "黒烏龍", price: "¥200" },
        { name: "コーラ", price: "¥250" },
        { name: "サイダー", price: "¥250" },
      ]
    },
    {
      category: "アルコール",
      items: [
        { name: "アサヒ 中瓶", price: "¥450" },
        { name: "サッポロ 中瓶", price: "¥450" },
        { name: "ハイボール", price: "¥380" },
        { name: "レモンサワー", price: "¥380" },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-white">横浜家系ラーメン幸道家</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-red-400 transition-colors">
                ホーム
              </a>
              <a href="#menu" className="text-white hover:text-red-400 transition-colors">
                メニュー
              </a>
              <a href="#about" className="text-white hover:text-red-400 transition-colors">
                店舗情報
              </a>
              <a href="#franchise" className="text-white hover:text-red-400 transition-colors">
                フランチャイズ
              </a>
              <a href="#contact" className="text-white hover:text-red-400 transition-colors">
                アクセス
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image
          src="/ramen-photos/normal-ajitama-ramen.jpg"
          alt="通常味玉ラーメン"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-7xl md:text-9xl font-bold mb-6 text-white" style={{fontSize: 'clamp(4rem, 10vw, 8rem)'}}>
            横浜家系ラーメン
            <br />
            <span className="text-red-500">幸道家</span>
          </h2>
          <p className="text-2xl md:text-3xl mb-8 text-gray-200">伝統の家系ラーメンを心を込めてお届け</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg shadow-2xl">
            メニューを見る
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <Utensils className="inline-block mr-4 text-white" />
              メニュー
            </h3>
            <p className="text-xl text-white/90">職人が心を込めて作る本格家系ラーメン</p>
          </div>

          {/* Ramen Menu */}
          <div className="mb-16">
            <h4 className="text-3xl font-bold mb-8 text-white text-center">ラーメン</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-black p-[3px]"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt || "ラーメン"}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                    <div className="absolute inset-0 border-[3px] border-black pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Menu */}
          <div className="w-full">
            <h4 className="text-3xl font-bold mb-8 text-white text-center">サイドメニュー</h4>
            <div className="bg-red-600 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {sideMenuCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h5 className="text-lg font-bold text-white mb-4 border-b border-white pb-2">{category.category}</h5>
                    <div>
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center py-3 border-b border-white/30">
                          <span className="text-white">{item.name}</span>
                          <span className="text-yellow-400 font-bold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-white/90 mt-8">※販売価格はすべて税込み価格です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-black">店舗について</h3>
              <p className="text-lg text-gray-700 mb-6">
                横浜家系ラーメン幸道家は、横浜で生まれた家系ラーメンの伝統を大切にしながら、
                お客様に最高の一杯をお届けしています。
              </p>
              <p className="text-lg text-gray-700 mb-8">
                豚骨と鶏ガラを18時間煮込んだ濃厚スープと、
                コシのある太麺、そして秘伝のタレが織りなす絶妙なハーモニーをお楽しみください。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-red-600 rounded-lg text-white shadow-lg">
                  <div className="text-3xl font-bold text-white mb-2">18時間</div>
                  <div className="text-white/90">スープ煮込み時間</div>
                </div>
                <div className="text-center p-4 bg-red-600 rounded-lg text-white shadow-lg">
                  <div className="text-3xl font-bold text-white mb-2">自家製</div>
                  <div className="text-white/90">麺・チャーシュー</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="ラーメン作り"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Store Info Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">営業時間・店舗情報</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">営業時間</h4>
                    <p className="text-gray-300">
                      平日: 11:00 - 15:00, 18:00 - 23:00
                      <br />
                      土日祝: 11:00 - 23:00
                      <br />
                      <span className="text-red-400">定休日: 火曜日</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">席数</h4>
                    <p className="text-gray-300">
                      カウンター席: 12席
                      <br />
                      テーブル席: 20席
                      <br />
                      総席数: 32席
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">電話番号</h4>
                    <p className="text-gray-300 text-xl">045-123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-400">Google Maps</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-2">アクセス</h4>
                <p className="text-gray-300">
                  〒220-0011
                  <br />
                  神奈川県横浜市西区高島2-19-12
                  <br />
                  横浜駅東口より徒歩5分
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-20 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">フランチャイズ募集</h3>
            <p className="text-xl text-white/90">幸道家の味を全国に広めませんか？</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h4 className="text-3xl font-bold mb-6 text-white">フランチャイズの特徴</h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" />
                  <p className="text-white/90">創業30年の確かな実績とブランド力</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" />
                  <p className="text-white/90">本部による徹底した開業・運営サポート</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" />
                  <p className="text-white/90">安定した食材供給システム</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" />
                  <p className="text-white/90">充実した研修制度</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-white text-red-600 hover:bg-gray-200">資料請求</Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                >
                  説明会予約
                </Button>
              </div>
            </div>

            <Card className="bg-white">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-black mb-6">開業資金目安</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-700">初期費用</span>
                    <span className="font-bold text-black">300万円</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-700">設備投資</span>
                    <span className="font-bold text-black">800万円</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-700">運転資金</span>
                    <span className="font-bold text-black">200万円</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-xl font-bold text-black">総投資額</span>
                    <span className="text-2xl font-bold text-red-600">約1,300万円</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">※物件取得費・保証金は別途</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">お問い合わせ</h3>
            <p className="text-xl text-gray-300">ご質問・ご要望はお気軽にお問い合わせください</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">店舗へのお問い合わせ</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-red-500 h-6 w-6" />
                      <div>
                        <p className="text-white font-bold">店舗直通</p>
                        <p className="text-2xl font-bold text-red-400">045-123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-red-500 h-6 w-6 mt-1" />
                      <div>
                        <p className="text-white font-bold">所在地</p>
                        <p className="text-gray-300">
                          〒220-0011
                          <br />
                          神奈川県横浜市西区高島2-19-12
                          <br />
                          横浜駅東口より徒歩5分
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">フランチャイズお問い合わせ</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Building className="text-red-500 h-6 w-6" />
                      <div>
                        <p className="text-white font-bold">フランチャイズ本部</p>
                        <p className="text-2xl font-bold text-red-400">0120-456-789</p>
                        <p className="text-gray-300 text-sm">受付時間: 平日 9:00-18:00</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button className="bg-red-600 hover:bg-red-700 text-white w-full">フランチャイズ資料請求</Button>
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white w-full bg-transparent"
                      >
                        説明会予約
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold text-white">横浜家系ラーメン幸道家</span>
          </div>
          <p className="text-gray-400">© 2024 横浜家系ラーメン幸道家. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
