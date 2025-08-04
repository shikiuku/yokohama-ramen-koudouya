"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { 
  MapPin, Clock, Phone, Star, ChefHat, Utensils, Building, 
  CheckCircle, Users, AlertCircle, Info, XCircle, Home,
  ArrowRight, Heart, ShoppingCart, Menu, X
} from "lucide-react"

export default function StyleGuide() {
  const [switchOn, setSwitchOn] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState("option1")

  const colors = {
    primary: [
      { name: "Red 500", value: "#ef4444", class: "bg-red-500" },
      { name: "Red 600", value: "#dc2626", class: "bg-red-600" },
      { name: "Red 700", value: "#b91c1c", class: "bg-red-700" },
      { name: "Red 900", value: "#7f1d1d", class: "bg-red-900" },
    ],
    neutral: [
      { name: "Black", value: "#000000", class: "bg-black" },
      { name: "Gray 900", value: "#111827", class: "bg-gray-900" },
      { name: "Gray 800", value: "#1f2937", class: "bg-gray-800" },
      { name: "Gray 700", value: "#374151", class: "bg-gray-700" },
      { name: "Gray 300", value: "#d1d5db", class: "bg-gray-300" },
      { name: "White", value: "#ffffff", class: "bg-white" },
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-red-900 bg-black sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <ChefHat className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold">幸道家 スタイルガイド</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">カラーパレット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">プライマリーカラー</h3>
              <div className="space-y-2">
                {colors.primary.map((color) => (
                  <div key={color.name} className="flex items-center space-x-4">
                    <div className={`w-24 h-12 rounded ${color.class}`} />
                    <div>
                      <p className="font-medium">{color.name}</p>
                      <p className="text-sm text-gray-300">{color.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">ニュートラルカラー</h3>
              <div className="space-y-2">
                {colors.neutral.map((color) => (
                  <div key={color.name} className="flex items-center space-x-4">
                    <div className={`w-24 h-12 rounded ${color.class} border border-gray-600`} />
                    <div>
                      <p className="font-medium">{color.name}</p>
                      <p className="text-sm text-gray-300">{color.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-red-900" />

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">タイポグラフィ</h2>
          <div className="space-y-8">
            <div>
              <h1 className="text-7xl font-bold mb-2 text-white">見出し1 - 7xl</h1>
              <p className="text-gray-300">font-size: 4.5rem; font-weight: 700;</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2 text-white">見出し2 - 5xl</h2>
              <p className="text-gray-300">font-size: 3rem; font-weight: 700;</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-white">見出し3 - 4xl</h3>
              <p className="text-gray-300">font-size: 2.25rem; font-weight: 700;</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2 text-white">見出し4 - 3xl</h4>
              <p className="text-gray-300">font-size: 1.875rem; font-weight: 700;</p>
            </div>
            <div>
              <p className="text-xl mb-2 text-white">本文（大）- xl</p>
              <p className="text-gray-300">font-size: 1.25rem;</p>
            </div>
            <div>
              <p className="text-lg mb-2 text-white">本文（標準）- lg</p>
              <p className="text-gray-300">font-size: 1.125rem;</p>
            </div>
            <div>
              <p className="text-sm mb-2 text-white">キャプション - sm</p>
              <p className="text-gray-300">font-size: 0.875rem;</p>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-red-900" />

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">ボタン</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">サイズ</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="sm" className="bg-red-600 hover:bg-red-700">Small</Button>
                <Button size="default" className="bg-red-600 hover:bg-red-700">Default</Button>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">Large</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">バリエーション</h3>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700">Primary</Button>
                <Button variant="secondary" className="bg-gray-800 hover:bg-gray-700">Secondary</Button>
                <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">Outline</Button>
                <Button variant="ghost" className="text-red-400 hover:bg-red-900/20">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button disabled className="bg-red-600">Disabled</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">アイコン付き</h3>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700">
                  <ChefHat className="mr-2 h-4 w-4" />
                  メニューを見る
                </Button>
                <Button className="bg-red-600 hover:bg-red-700">
                  注文する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-red-500 text-red-400">
                  <Heart className="mr-2 h-4 w-4" />
                  お気に入り
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-red-900" />

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">カード</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <CardTitle className="text-white">基本カード</CardTitle>
                <CardDescription className="text-gray-300">カードの説明文</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">カードのコンテンツ部分です。</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900 hover:border-red-500 transition-all">
              <CardHeader>
                <CardTitle className="text-white">ホバー効果付き</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">マウスオーバーで枠線の色が変わります。</p>
              </CardContent>
              <CardFooter>
                <Button className="bg-red-600 hover:bg-red-700 w-full">詳細を見る</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <Badge className="bg-red-600 text-white w-fit mb-2">
                  <Star className="w-3 h-3 mr-1" />
                  人気
                </Badge>
                <CardTitle className="text-white">バッジ付きカード</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">バッジで情報を強調できます。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16 bg-red-900" />

        {/* Badges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">バッジ</h2>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-red-600 text-white">人気</Badge>
            <Badge className="bg-red-500 text-white">新メニュー</Badge>
            <Badge variant="secondary" className="bg-gray-700 text-white">準備中</Badge>
            <Badge variant="outline" className="border-red-500 text-red-400">限定</Badge>
            <Badge className="bg-green-600 text-white">
              <CheckCircle className="w-3 h-3 mr-1" />
              営業中
            </Badge>
            <Badge className="bg-yellow-600 text-white">
              <AlertCircle className="w-3 h-3 mr-1" />
              残りわずか
            </Badge>
          </div>
        </section>

        <Separator className="my-16 bg-red-900" />

        {/* Forms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">フォーム要素</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <CardTitle className="text-white">入力フィールド</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white" htmlFor="name">お名前</Label>
                  <Input 
                    id="name" 
                    placeholder="山田太郎" 
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white" htmlFor="email">メールアドレス</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@email.com" 
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white" htmlFor="message">メッセージ</Label>
                  <Textarea 
                    id="message" 
                    placeholder="お問い合わせ内容" 
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <CardTitle className="text-white">選択要素</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-white">チェックボックス</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox 
                      id="terms" 
                      checked={checkboxChecked}
                      onCheckedChange={setCheckboxChecked}
                    />
                    <label htmlFor="terms" className="text-sm text-white">利用規約に同意する</label>
                  </div>
                </div>

                <div>
                  <Label className="text-white">ラジオボタン</Label>
                  <RadioGroup value={selectedRadio} onValueChange={setSelectedRadio} className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="option1" />
                      <label className="text-white" htmlFor="option1">オプション1</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="option2" />
                      <label className="text-white" htmlFor="option2">オプション2</label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-white" htmlFor="select">セレクトボックス</Label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="option1">醤油ラーメン</SelectItem>
                      <SelectItem value="option2">味噌ラーメン</SelectItem>
                      <SelectItem value="option3">塩ラーメン</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16 bg-red-900" />

        {/* Other Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">その他のコンポーネント</h2>
          
          <div className="space-y-8">
            {/* Alerts */}
            <div>
              <h3 className="text-xl font-semibold mb-4">アラート</h3>
              <div className="space-y-4">
                <Alert className="bg-red-900/20 border-red-900">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>注意</AlertTitle>
                  <AlertDescription>本日は満席の可能性があります。</AlertDescription>
                </Alert>
                <Alert className="bg-green-900/20 border-green-900">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>成功</AlertTitle>
                  <AlertDescription>ご予約を承りました。</AlertDescription>
                </Alert>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <h3 className="text-xl font-semibold mb-4">タブ</h3>
              <Tabs defaultValue="menu" className="w-full">
                <TabsList className="bg-gray-800">
                  <TabsTrigger value="menu">メニュー</TabsTrigger>
                  <TabsTrigger value="info">店舗情報</TabsTrigger>
                  <TabsTrigger value="access">アクセス</TabsTrigger>
                </TabsList>
                <TabsContent value="menu" className="text-gray-300">
                  メニューコンテンツ
                </TabsContent>
                <TabsContent value="info" className="text-gray-300">
                  店舗情報コンテンツ
                </TabsContent>
                <TabsContent value="access" className="text-gray-300">
                  アクセスコンテンツ
                </TabsContent>
              </Tabs>
            </div>

            {/* Progress */}
            <div>
              <h3 className="text-xl font-semibold mb-4">プログレスバー</h3>
              <Progress value={66} className="bg-gray-800" />
            </div>

            {/* Slider */}
            <div>
              <h3 className="text-xl font-semibold mb-4">スライダー</h3>
              <Slider 
                value={sliderValue} 
                onValueChange={setSliderValue}
                max={100} 
                step={1} 
                className="w-full"
              />
              <p className="text-sm text-gray-300 mt-2">値: {sliderValue[0]}</p>
            </div>

            {/* Switch */}
            <div>
              <h3 className="text-xl font-semibold mb-4">スイッチ</h3>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="notifications" 
                  checked={switchOn}
                  onCheckedChange={setSwitchOn}
                />
                <Label htmlFor="notifications" className="text-white">通知を受け取る</Label>
              </div>
            </div>

            {/* Avatar */}
            <div>
              <h3 className="text-xl font-semibold mb-4">アバター</h3>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>YT</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>店長</AvatarFallback>
                </Avatar>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>スタッフ</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-red-900" />

        {/* Icons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">アイコン</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { Icon: ChefHat, name: "シェフハット" },
              { Icon: Utensils, name: "食器" },
              { Icon: MapPin, name: "地図ピン" },
              { Icon: Clock, name: "時計" },
              { Icon: Phone, name: "電話" },
              { Icon: Star, name: "スター" },
              { Icon: Building, name: "ビル" },
              { Icon: CheckCircle, name: "チェック" },
              { Icon: Users, name: "ユーザー" },
              { Icon: AlertCircle, name: "警告" },
              { Icon: Info, name: "情報" },
              { Icon: XCircle, name: "エラー" },
              { Icon: Home, name: "ホーム" },
              { Icon: ArrowRight, name: "右矢印" },
              { Icon: Heart, name: "ハート" },
              { Icon: ShoppingCart, name: "カート" },
              { Icon: Menu, name: "メニュー" },
              { Icon: X, name: "閉じる" },
            ].map(({ Icon, name }) => (
              <Card key={name} className="bg-gray-900 border-gray-800">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Icon className="h-8 w-8 text-red-500 mb-2" />
                  <p className="text-xs text-gray-300">{name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Menu Photo Border Style */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">メニュー写真枠線スタイル</h2>
          
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4 text-white text-center">内側3px + 外側3px 黒枠線</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="relative bg-black p-[3px]">
                <div className="relative">
                  <Image
                    src="/ramen-photos/ramen1.jpg"
                    alt="ラーメン"
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 border-[3px] border-black pointer-events-none"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-4 text-center">
              写真に3pxの内側枠線が重なり、さらに3pxの外側枠線で囲まれています。
            </p>
          </div>
        </section>

        <Separator className="my-16 bg-red-900" />

        {/* Side Menu Color Variations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">サイドメニュー色バリエーション</h2>
          
          {/* Sample Data */}
          <div className="mb-4">
            <p className="text-gray-300 mb-4">サンプルメニュー:</p>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-300 text-sm">単品メニュー: 餃子 5個 ¥350, 揚げ餃子 3個 ¥380</p>
              <p className="text-gray-300 text-sm">トッピング: 味玉・海苔 3枚・メンマ ¥120, ネギ・キャベツ・もやし ¥150</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Variation 1: Red Background (Current) */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">1. 赤背景（現在使用中）</h3>
              <div className="bg-red-600 p-6 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 border-b border-white pb-2">単品メニュー</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-white/30">
                        <span className="text-white">餃子 5個</span>
                        <span className="text-yellow-400 font-bold">¥350</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/30">
                        <span className="text-white">揚げ餃子 3個</span>
                        <span className="text-yellow-400 font-bold">¥380</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variation 2: Dark Red Background */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">2. 濃い赤背景</h3>
              <div className="bg-red-900 p-6 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 border-b border-red-400 pb-2">単品メニュー</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-red-800">
                        <span className="text-white">餃子 5個</span>
                        <span className="text-yellow-400 font-bold">¥350</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-red-800">
                        <span className="text-white">揚げ餃子 3個</span>
                        <span className="text-yellow-400 font-bold">¥380</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variation 3: Red with Black Accents */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">3. 赤背景＋黒アクセント</h3>
              <div className="bg-red-600 p-6 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 bg-black p-2 rounded">単品メニュー</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-black/30">
                        <span className="text-white">餃子 5個</span>
                        <span className="text-black bg-yellow-400 px-2 py-1 rounded font-bold">¥350</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-black/30">
                        <span className="text-white">揚げ餃子 3個</span>
                        <span className="text-black bg-yellow-400 px-2 py-1 rounded font-bold">¥380</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variation 4: Gradient Red */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">4. 赤グラデーション背景</h3>
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-6 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 border-b-2 border-white pb-2">単品メニュー</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-white/40">
                        <span className="text-white">餃子 5個</span>
                        <span className="text-white font-bold bg-black/30 px-3 py-1 rounded">¥350</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/40">
                        <span className="text-white">揚げ餃子 3個</span>
                        <span className="text-white font-bold bg-black/30 px-3 py-1 rounded">¥380</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variation 5: Red Border Style */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">5. 赤枠線スタイル</h3>
              <div className="bg-white border-4 border-red-600 p-6 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-red-600 mb-3 border-b-2 border-red-600 pb-2">単品メニュー</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="text-gray-800">餃子 5個</span>
                        <span className="text-red-600 font-bold">¥350</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="text-gray-800">揚げ餃子 3個</span>
                        <span className="text-red-600 font-bold">¥380</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variation 6: Red with Pattern */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">6. 赤背景＋パターン</h3>
              <div className="bg-red-600 p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'}}></div>
                </div>
                <div className="relative space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 border-b border-white pb-2">単品メニュー</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-white/30">
                        <span className="text-white">餃子 5個</span>
                        <span className="text-yellow-300 font-bold">¥350</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/30">
                        <span className="text-white">揚げ餃子 3個</span>
                        <span className="text-yellow-300 font-bold">¥380</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}