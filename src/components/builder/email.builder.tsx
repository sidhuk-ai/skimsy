"use client";
import { DefaultJsonData } from "@/lib/default-email";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { Button } from "@/components/ui/button";
import { saveTemplate } from "@/actions/template";
import { toast } from "sonner";

export default function Emaileditor({
  tempName,
  workspaceId
}: {
  tempName: string;
  workspaceId: string;
}) {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const emailEditorRef = useRef<EditorRef>(null);
  const router = useRouter();

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      setJsonData(design);
    });
  };

  const saveDraft = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design } = data;
      await saveTemplate({
        name: tempName,
        content: JSON.stringify(design),
        workspaceId
      }).then((res) => {
        toast(res?.msg);
        router.push('/dashboard/templates');
      }).catch((e) => {
        toast.error(String(e));
      })
    })
  }

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
      <div className="flex gap-2 justify-end w-full">
        <Button onClick={saveDraft} size={"lg"} variant={"outline"} className="cursor-pointer">
          Save Draft
        </Button>
        <Button size={"lg"} className="cursor-pointer">
          Send
        </Button>
      </div>
    </>
  );
}
