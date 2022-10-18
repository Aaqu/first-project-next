import Link from "next/link";
import {MDXRemote} from "next-mdx-remote";
import {MarkdownResult} from "../types";

export const AaquReactMarkdown = ({children}: {children: MarkdownResult}) => {
  return (
    <MDXRemote {...children}
      components={{
        a: ({href, ...props}) => {
          if(!href) {
            return <a {...props}></a>
          }
          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          )
        }
      }}
    />
  )
}