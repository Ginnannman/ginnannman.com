import { LOCALE } from "@config";

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

// LOCALE を使って日付をフォーマットする共通関数（ModDatetime でも再利用）
export const formatDatetime = (datetime: string | Date): string => {
  const date = new Date(datetime);
  return date.toLocaleDateString(LOCALE.length > 0 ? LOCALE : undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export default function Datetime({ datetime, size = "sm", className }: Props) {
  return (
    <div className={`flex items-center opacity-80 ${className}`}>
      <span className={`${size === "sm" ? "text-sm" : "text-base"}`}>
        Posted on:&nbsp;
        <time dateTime={new Date(datetime).toISOString()}>
          {formatDatetime(datetime)}
        </time>
      </span>
    </div>
  );
}
