"use client";
import {
  PlusCircleIcon,
  CameraIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen p-4 relative">
      {loading ? (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-4">
          <div className="animate-pulse h-8 w-8 bg-blue-500 rounded-full"></div>
          <p className="text-gray-600">AIが解析中...</p>
        </div>
      ) : null}

      {/* 支出サマリー */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">今月の支出</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-2xl font-bold">¥45,200</p>
          <div className="h-32 bg-gray-100 rounded mt-2">
            {/* グラフプレースホルダー */}
          </div>
        </div>
      </div>

      {/* 最近の支出リスト */}
      <div>
        <h2 className="text-xl font-bold mb-2">最近の支出</h2>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">スターバックス</p>
                  <p className="text-sm text-gray-500">2024/02/0{i}</p>
                </div>
                <p className="font-bold">¥1,580</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* レシート追加ボタン */}
      <Popover className="fixed bottom-6 right-6">
        <Popover.Button className="bg-blue-500 text-white rounded-full p-4 shadow-lg">
          <PlusCircleIcon className="h-8 w-8" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute bottom-full mb-3 right-0 w-48">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "image/*";
                  input.capture = "environment"; // カメラを直接起動
                  input.onchange = (e) => {
                    const target = e.target as HTMLInputElement;
                    if (target.files?.[0]) {
                      setLoading(true);
                      // モック: 画像アップロード＆解析
                      setTimeout(() => {
                        router.push("/receipt/edit");
                      }, 1500);
                    }
                  };
                  input.click();
                }}
                className="flex items-center space-x-2 w-full p-4 hover:bg-gray-50"
              >
                <CameraIcon className="h-5 w-5 text-blue-500" />
                <span>写真を撮る</span>
              </button>
              <button
                onClick={() => {
                  // ギャラリーから選択
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "image/*";
                  input.onchange = (e) => {
                    const target = e.target as HTMLInputElement;
                    if (target.files?.[0]) {
                      // モック: 画像アップロード＆解析
                      setTimeout(() => {
                        router.push("/receipt/edit");
                      }, 1500);
                    }
                  };
                  input.click();
                }}
                className="flex items-center space-x-2 w-full p-4 hover:bg-gray-50 border-t"
              >
                <PhotoIcon className="h-5 w-5 text-blue-500" />
                <span>画像を選ぶ</span>
              </button>
            </div>
            {/* 吹き出しの三角形 */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 rotate-45 bg-white"></div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </main>
  );
}
