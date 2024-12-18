import classNames from "classnames";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param args
 * @returns
 */
const cn = (...args: classNames.ArgumentArray) => twMerge(classNames(args));

export { cn };
