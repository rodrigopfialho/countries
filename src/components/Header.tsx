import { IconMoon } from "./Icons";

export function Header() {
  return (
    <div className="w-full flex h-20 justify-between items-center px-8 border-b-2 border-dark-lightinput border-opacity-10 bg-dark-lightElements">
      <h2 className=" text-xl font-bold text-dark-darkText">Where in the world</h2>
      <div className="flex items-center space-x-4">
        <button>
          {IconMoon}
        </button>
        <span className="font-medium">
          Dark Mode
        </span>
      </div>
    </div>
  )
}