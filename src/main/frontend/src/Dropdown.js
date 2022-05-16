import React from "react";

export default function Book() {
  return (
    <div
      class="w-2/12 rounded-md shadow-lg sticky top-10"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <a
          href=""
          class="text-matte block px-4 py-2 text-xs uppercase font-bold opacity-75 hover:bg-primary ease-linear transition-all duration-500"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
        >
          Discover
        </a>
        <a
          href="./reading"
          class="text-matte block px-4 py-2 text-xs uppercase font-bold opacity-75 hover:bg-primary ease-linear transition-all duration-500"
          role="menuitem"
          tabindex="-1"
          id="menu-item-1"
        >
          Reading
        </a>
        <a
          href="./finished"
          class="text-matte block px-4 py-2 text-xs uppercase font-bold opacity-75 hover:bg-primary ease-linear transition-all duration-500"
          role="menuitem"
          tabindex="-1"
          id="menu-item-2"
        >
          Finished
        </a>
      </div>
    </div>
  );
}
