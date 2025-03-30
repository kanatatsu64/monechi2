"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MemberIcon } from "../../components/MemberIcon";

type Item = {
  name: string;
  price: number;
  shareWith: string[];
};

const members = ["太郎", "花子", "次郎"];

export default function EditReceipt() {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([
    { name: "カフェラテ", price: 550, shareWith: [] },
    { name: "チョコレートケーキ", price: 680, shareWith: [] },
  ]);
  const [payer, setPayer] = useState<string | null>(null);
  const [showMemberSelect, setShowMemberSelect] = useState<{
    type: "payer" | "share";
    index?: number;
  } | null>(null);

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
            placeholder="店舗名を入力"
          />
          <input type="date" defaultValue="2024-02-10" className="w-full" />
          <select className="w-full">
            <option>カフェ</option>
            <option>食事</option>
            <option>買い物</option>
          </select>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">支払者:</span>
            <button onClick={() => setShowMemberSelect({ type: "payer" })}>
              {payer ? (
                <MemberIcon name={payer} />
              ) : (
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400">+</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* 支払者選択後に表示 */}
        {payer && (
          <>
            {/* 明細リスト */}
            <div className="space-y-2">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow space-y-2"
                >
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
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">請求先:</span>
                    <button
                      onClick={() =>
                        setShowMemberSelect({ type: "share", index: i })
                      }
                    >
                      {item.shareWith[0] ? (
                        <MemberIcon name={item.shareWith[0]} />
                      ) : (
                        <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                          <span className="text-gray-400">+</span>
                        </div>
                      )}
                    </button>
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
          </>
        )}

        {/* メンバー選択モーダル */}
        {showMemberSelect && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-4 w-full max-w-sm">
              <div className="space-y-2">
                {members.map((member) => (
                  <button
                    key={member}
                    className="flex items-center space-x-3 w-full p-2 hover:bg-gray-100 rounded"
                    onClick={() => {
                      if (showMemberSelect.type === "payer") {
                        setPayer(member);
                        // 支払者選択時に全ての明細の請求先を初期化
                        const newItems = items.map((item) => ({
                          ...item,
                          shareWith: [member],
                        }));
                        setItems(newItems);
                      } else if (showMemberSelect.index !== undefined) {
                        const newItems = [...items];
                        newItems[showMemberSelect.index].shareWith = [member];
                        setItems(newItems);
                      }
                      setShowMemberSelect(null);
                    }}
                  >
                    <MemberIcon name={member} />
                    <span>{member}</span>
                  </button>
                ))}
              </div>
              <button
                className="mt-4 w-full py-2 bg-gray-100 rounded"
                onClick={() => setShowMemberSelect(null)}
              >
                キャンセル
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
