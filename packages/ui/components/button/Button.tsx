import { classNames } from "@documenso/lib";
import Link from "next/link";
import React from "react";

export function Button(props: any) {
  const isLink = typeof props.href !== "undefined";
  const { color = "primary", icon, disabled, onClick } = props;
  const baseStyles =
    "inline-flex items-center justify-center min-w-[80px] rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm disabled:bg-gray-300";
  const primaryStyles = "text-white bg-neon hover:bg-neon-dark";
  const secondaryStyles =
    "border-gray-300 bg-white text-gray-700 hover:bg-gray-50";

  return isLink ? (
    <Link
      id={props.id}
      href={props.href}
      className={classNames(
        baseStyles,
        color === "primary" ? primaryStyles : secondaryStyles,
        props.className
      )}
      hidden={props.hidden}
    >
      {props.icon ? (
        <props.icon
          className="inline h-5 mr-1 text-inherit"
          aria-hidden="true"
        ></props.icon>
      ) : (
        ""
      )}
      {props.children}
    </Link>
  ) : (
    <button
      id={props.id}
      type="button"
      className={classNames(
        baseStyles,
        color === "primary" ? primaryStyles : secondaryStyles,
        props.className
      )}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      hidden={props.hidden}
    >
      {props.icon ? (
        <props.icon
          className="inline h-5 mr-1 text-inherit"
          aria-hidden="true"
        ></props.icon>
      ) : (
        ""
      )}
      {props.children}
    </button>
  );
}
