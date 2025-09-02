import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "react-toastify";
import { cleanAllFormatting } from "@/utils/cleanRtfText";

interface PROPS {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: PROPS) => {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    // Clean the aiOutput before setting it to the editor
    const cleanedOutput = cleanAllFormatting(aiOutput);
    editorInstance.setMarkdown(cleanedOutput);
  }, [aiOutput]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Copied!");
      },
      (err) => {
        toast.error("Failed to Copied!");
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 border border-black p-2">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-lg font-semibold">Your Result</h2>
        <Button
          className="flex gap-2"
          onClick={() => copyToClipboard(cleanAllFormatting(aiOutput))}
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will be displayed here"
        height="430px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default OutputSection;
