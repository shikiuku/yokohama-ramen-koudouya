# カスタムフォントの追加方法

## フォントファイルをお持ちの場合の手順

### 1. フォントファイルの配置
```
public/
  fonts/
    your-font.ttf     # あなたのフォントファイル
    your-font.otf     # または .otf
    your-font.woff2   # または .woff2 (推奨)
```

### 2. CSSでフォントを定義（app/globals.css に追加）
```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/your-font.woff2') format('woff2'),
       url('/fonts/your-font.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* 読み込み中の表示を改善 */
}

/* 全体に適用する場合 */
body {
  font-family: 'MyCustomFont', serif;
}
```

### 3. 特定の要素だけに適用する場合
```jsx
<h1 style={{fontFamily: "'MyCustomFont', serif"}}>
  横浜家系ラーメン幸道家
</h1>
```

または

```jsx
<h1 className="font-custom">
  横浜家系ラーメン幸道家
</h1>
```

```css
/* globals.css に追加 */
.font-custom {
  font-family: 'MyCustomFont', serif;
}
```

## 例：「筆まめ」や「モリサワフォント」などの商用フォント

もし商用フォントのライセンスをお持ちの場合：

1. フォントファイル（.ttf/.otf）を `public/fonts/` フォルダに配置
2. 上記の手順でCSSに定義
3. サイト全体または特定の箇所に適用

## セキュリティとライセンスの注意点

- フォントファイルは public フォルダに置くため、誰でもダウンロード可能
- 商用フォントの場合はWebフォントライセンスが必要
- 無料フォントでも利用規約を確認

## サポートされるフォント形式

- **WOFF2** (.woff2) - 最も推奨、ファイルサイズが小さい
- **WOFF** (.woff) - 広くサポートされている
- **TrueType** (.ttf) - 一般的なフォント形式
- **OpenType** (.otf) - より高度な機能を持つフォント

---

フォントファイルをお持ちの場合は、ファイルをアップロードしていただければ、すぐに設定して使えるようにします！