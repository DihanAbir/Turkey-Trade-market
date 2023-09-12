import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Item = ({ items }) => {
  const pathname = usePathname();

  return (
    <div className="item_parent pt-0">
      <div className="items">
        <div style={{ gap: "49px" }} className="grid-container ">
          {items?.map((item, index) => (
            <Link
              href={`/product/${item._id}`}
              key={index}
              style={{ cursor: "pointer", textDecoration: "none" }}
              className="item"
            >
              <img className="img-fluid" src={item?.images?.length && item?.images[0]} alt="" />
              <div style={{ padding: "21px 18px" }}>
                <p className={`${pathname === "/" && "text-center"} name`}>
                  {item?.title?.length > 50 ? <h4>{item?.title?.slice(0, 50)}...</h4> : <h4>{item?.title}</h4>
                  }
                </p>
                {pathname !== "/" && (
                  <>
                    {
                      item?.price?.length > 0 && <p className="price">
                        US$ {item?.price[0]?.euro}-{item?.price[0]?.piece}/ <span>piece</span>
                      </p>

                    }

                    <p className="amount">{item?.moq} Pieces (MOQ)</p>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
