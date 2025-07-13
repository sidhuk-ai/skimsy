"use client";
import { DefaultJsonData } from "@/lib/default-email";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

export default function Emaileditor({
  subjectTitle,
}: {
  subjectTitle: string;
}) {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const emailEditorRef = useRef<EditorRef>(null);
  const history = useRouter();

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      setJsonData(design);
    });
  };

  const onReady: EmailEditorProps["onReady"] = (unlayer) => {
    unlayer.loadDesign(jsonData);
  };

  return (
    <>
      {!loading && (
        <div className="w-full h-[80vh] relative">
          <EmailEditor
            // projectId={276439}
            options={{ appearance: { theme: "classic_dark" } }}
            minHeight={"80vh"}
            ref={emailEditorRef}
            onReady={onReady}
          />
        </div>
      )}
    </>
  );
}
