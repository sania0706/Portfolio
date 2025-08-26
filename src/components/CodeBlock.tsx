import { cn } from "@/lib/utils";
import { useState } from "react";
import { Check, ClipboardCopy } from "lucide-react";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language: string;
  header: string;
}

const CodeBlock = ({ className, code, language, header, ...props }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("code-block group relative", className)} {...props}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-success font-mono text-sm">// {header}</span>
        <button
          onClick={handleCopy}
          className="flex items-center text-muted-foreground/70 hover:text-primary transition-colors text-xs"
        >
          {copied ? <Check size={14} /> : <ClipboardCopy size={14} />}
          <span className="ml-1">{copied ? "Copied!" : "Copy code"}</span>
        </button>
      </div>
      <pre className="text-foreground font-mono text-sm">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;