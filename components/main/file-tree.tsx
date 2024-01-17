"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, FileBox } from "lucide-react"

import { SolideFile, isSolideFile } from "@/lib/solide/solide-file"
import { cn } from "@/lib/utils"
import { useSolideFile } from "@/components/provider/file-provider"

interface FileTreeNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  node: any
  depth: number
}

const FileTreeNode = ({ name, node, depth }: FileTreeNodeProps) => {
  const { handleIDEDisplay } = useSolideFile()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const openFile = () => {
    handleIDEDisplay(node as SolideFile)
  }

  const getIndentStyle = () => {
    const baseIndent = 16 // Adjust as needed
    const indent = baseIndent // * depth;
    return { marginLeft: `${indent}px` }
  }

  if (isSolideFile(node)) {
    return (
      <div onClick={openFile} style={getIndentStyle()}>
        <span className="flex cursor-pointer space-x-2">
          <FileBox /> {name}
        </span>
      </div>
    )
  }

  return (
    <div className="dark:border-white border-l" style={getIndentStyle()}>
      <div>
        <span
          onClick={node ? handleToggle : () => {}}
          className="flex cursor-pointer"
        >
          {isExpanded ? <ChevronDown /> : <ChevronRight />} {name}
        </span>
      </div>
      {isExpanded && node && (
        <ul style={{ listStyleType: "none" }}>
          {Object.entries(node).map(([childName, childNode]) => (
            <li key={childName}>
              <FileTreeNode
                name={childName}
                node={childNode}
                depth={depth + 1}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

interface FileTreeProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
}

export const FileTree = ({ name = "root", className }: FileTreeProps) => {
  const { folder } = useSolideFile()

  if (!folder) {
    return <div className={cn("w-[350px]", className)}>Empty</div>
  }

  return (
    <div className={cn("w-[350px]", className)}>
      <FileTreeNode name={name} node={folder} depth={0} />
    </div>
  )
}
