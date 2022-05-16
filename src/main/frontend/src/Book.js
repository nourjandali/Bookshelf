import React from "react";

import Dropdown from "./Dropdown";
import egoIsTheEnemy from "./assets/egoIsTheEnemy.jpg";
import bookmarkAdd from "./assets/bookmarkAdd.svg";
import cart from "./assets/cart.svg";

export default function Book() {
  return (
    <div className="mt-16 flex gap-10 justify-center items-start m-auto">
      <Dropdown />
      <div className="w-7/12">
        <div className="flex gap-4 mb-6">
          <div>
            <img src={egoIsTheEnemy} alt="Ego Is The Enemy" />
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="uppercase font-bold tracking-widest text-matte">
                Ego is the enemy
              </h1>
              <div className="flex">
                <img
                  className="w-6 mr-4 cursor-pointer"
                  src={bookmarkAdd}
                  alt="Add to reading list"
                />
                <img
                  className="w-6 mr-4 cursor-pointer"
                  src={cart}
                  alt="Add to cart"
                />
              </div>
            </div>
            <p className="text-xs mt-4">
              In Ego is the Enemy, Ryan Holiday shows us how and why ego is such
              a powerful internal opponent to be guarded against at all stages
              of our careers and lives, and that we can only create our best
              work when we identify, acknowledge and disarm its dangers. Drawing
              on an array of inspiring characters and narratives from
              literature, philosophy and history, the book explores the nature
              and dangers of ego to illustrate how you can be humble in your
              aspirations, gracious in your success and resilient in your
              failures.
            </p>
          </div>
        </div>

        {/* Book 2  */}
        <div className="flex gap-4 mb-6">
          <div>
            <img src={egoIsTheEnemy} alt="Ego Is The Enemy" />
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="uppercase font-bold tracking-widest text-matte">
                Ego is the enemy
              </h1>
              <div className="flex">
                <img
                  className="w-6 mr-4 cursor-pointer"
                  src={bookmarkAdd}
                  alt="Add to reading list"
                />
                <img
                  className="w-6 mr-4 cursor-pointer"
                  src={cart}
                  alt="Add to cart"
                />
              </div>
            </div>
            <p className="text-xs mt-4">
              In Ego is the Enemy, Ryan Holiday shows us how and why ego is such
              a powerful internal opponent to be guarded against at all stages
              of our careers and lives, and that we can only create our best
              work when we identify, acknowledge and disarm its dangers. Drawing
              on an array of inspiring characters and narratives from
              literature, philosophy and history, the book explores the nature
              and dangers of ego to illustrate how you can be humble in your
              aspirations, gracious in your success and resilient in your
              failures.
            </p>
          </div>
        </div>

        {/* Book 3 */}
        <div className="flex gap-4 mb-6">
          <div>
            <img src={egoIsTheEnemy} alt="Ego Is The Enemy" />
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="uppercase font-bold tracking-widest text-matte">
                Ego is the enemy
              </h1>
              <div className="flex">
                <img
                  className="w-6 mr-4 cursor-pointer"
                  src={bookmarkAdd}
                  alt="Add to reading list"
                />
                <img
                  className="w-6 mr-4 cursor-pointer"
                  src={cart}
                  alt="Add to cart"
                />
              </div>
            </div>
            <p className="text-xs mt-4">
              In Ego is the Enemy, Ryan Holiday shows us how and why ego is such
              a powerful internal opponent to be guarded against at all stages
              of our careers and lives, and that we can only create our best
              work when we identify, acknowledge and disarm its dangers. Drawing
              on an array of inspiring characters and narratives from
              literature, philosophy and history, the book explores the nature
              and dangers of ego to illustrate how you can be humble in your
              aspirations, gracious in your success and resilient in your
              failures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
