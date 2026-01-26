"use client";
import CamelCaseStyles from "./CamelCase.module.scss";
export default function CamelCase() {
  return (
    <div className="grid grid-rows items-center justify-items-center p-8 font-[family-name:var(--font-geist-sans)] w-">
      <main className="w-full flex flex-row gap-[32px] row-start-2 items-center justify-center sm:items-start">
        <div className="section-text-editor">
          <p>CamelCase</p>
        </div>
        <div>
          <a
            href="#_"
            className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Button Text</span>
          </a>
          <p>Editor</p>
        </div>
      </main>
    </div>
  );
}
