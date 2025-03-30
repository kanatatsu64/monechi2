"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CameraIcon, PhotoIcon } from "@heroicons/react/24/solid";

export default function AddReceipt() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    setLoading(true);
    // モックのアップロード処理
    setTimeout(() => {
      router.push("/receipt/edit");
    }, 1500);
  };

  return (
    <main className="min-h-screen p-4">
      {loading ? (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
          <div className="animate-pulse h-8 w-8 bg-blue-500 rounded-full"></div>
          <p className="text-gray-600">AIが解析中...</p>
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">レシートを追加</h1>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleUpload}
              className="bg-white p-6 rounded-lg shadow flex flex-col items-center space-y-2"
            >
              <CameraIcon className="h-8 w-8 text-blue-500" />
              <span>撮影する</span>
            </button>
            <button
              onClick={handleUpload}
              className="bg-white p-6 rounded-lg shadow flex flex-col items-center space-y-2"
            >
              <PhotoIcon className="h-8 w-8 text-blue-500" />
              <span>画像を選択</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
