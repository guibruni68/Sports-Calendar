import "./TagJogo.css";

export type TagJogoName = "Clássico" | "Final" | "None";

export interface TagJogoProps {
  /** The tag type: "Clássico" (derby), "Final", or "None" (hidden) */
  name: TagJogoName;
  /** Custom text override. Defaults to "⚔️ Clássico!" or "🏆 Final!" based on name */
  text?: string;
}

const DEFAULT_TEXT: Record<TagJogoName, string> = {
  "Clássico": "⚔️ Clássico!",
  Final: "🏆 Final!",
  None: "",
};

const NAME_CLASS: Record<TagJogoName, string> = {
  "Clássico": "tagJogo--classico",
  Final: "tagJogo--final",
  None: "",
};

export function TagJogo({ name, text }: TagJogoProps) {
  if (name === "None") return null;

  const label = text ?? DEFAULT_TEXT[name];
  const variantClass = NAME_CLASS[name];

  return (
    <span className={`tagJogo ${variantClass}`} title={label}>
      {label}
    </span>
  );
}
