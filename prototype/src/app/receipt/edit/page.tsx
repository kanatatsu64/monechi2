"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Item = {
  name: string;
  price: number;
  shareWith: string[];
};

export default function EditReceipt() {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([
    { name: "カフェラテ", price: 550, shareWith: [] },
    { name: "チョコレートケーキ", price: 680, shareWith: [] },
  ]);

  const handleSave = () => {
    // モック保存処理
    router.push("/");
  };

  return (
    <main className="min-h-screen p-4">
      <div className="space-y-4">
        {/* 上部エリア */}
        <div className="bg-white p-4 rounded-lg shadow space-y-2">
          <input
            type="text"
            defaultValue="スターバックス"
            className="w-full text-xl font-bold"
          />
          <input type="date" defaultValue="2024-02-10" className="w-full" />
          <select className="w-full">
            <option>カフェ</option>
            <option>食事</option>
            <option>買い物</option>
          </select>
        </div>

        {/* 明細リスト */}
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[i].name = e.target.value;
                    setItems(newItems);
                  }}
                  className="flex-1"
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[i].price = parseInt(e.target.value);
                    setItems(newItems);
                  }}
                  className="w-24 text-right"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 保存ボタン */}
        <button
          onClick={handleSave}
          className="fixed bottom-6 left-4 right-4 bg-blue-500 text-white py-3 rounded-lg shadow"
        >
          保存
        </button>
      </div>
    </main>
  );
}
