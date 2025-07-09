import React from "react";
import { Editor } from "@tiptap/react";

interface Props {
  editor: Editor | null;
}

const EditorToolbar: React.FC<Props> = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-2">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn">
        Bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn">
        Italic
      </button>
      <button onClick={() => editor.chain().focus().setParagraph().run()} className="btn">
        Paragraph
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="btn">
        H1
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="btn">
        H2
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="btn">
        Bullet List
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="btn">
        Ordered List
      </button>
      <button onClick={() => editor.chain().focus().setTextAlign("left").run()} className="btn">
        Left
      </button>
      <button onClick={() => editor.chain().focus().setTextAlign("center").run()} className="btn">
        Center
      </button>
      <button onClick={() => editor.chain().focus().setTextAlign("right").run()} className="btn">
        Right
      </button>
      <button
        onClick={() =>
          editor.chain().focus().insertTable({ rows: 2, cols: 2, withHeaderRow: true }).run()
        }
        className="btn"
      >
        Table
      </button>
      <button
        onClick={() => editor.chain().focus().addImage({ src: prompt("Image URL") || "" }).run()}
        className="btn"
      >
        Image
      </button>
    </div>
  );
};

export default EditorToolbar;
