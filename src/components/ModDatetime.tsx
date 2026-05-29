import { formatDatetime } from "./Datetime";

export interface Props {
  datetime: string | Date | undefined;
  size?: "sm" | "lg";
  className?: string;
}

export default function ModDatetime({
  datetime,
  size = "sm",
  className,
}: Props) {
  if (!datetime) {
    return null;
  }
  return (
    <div className={`flex items-center opacity-80 ${className}`}>
      <span>Last Modified on:&nbsp;</span>
      <span className={`${size === "sm" ? "text-sm" : "text-base"}`}>
        <time dateTime={new Date(datetime).toISOString()}>
          {formatDatetime(datetime)}
        </time>
      </span>
    </div>
  );
}
