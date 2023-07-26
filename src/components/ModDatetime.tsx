export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function ModDatetime({
  datetime,
  size = "sm",
  className,
}: Props) {
  return (
    <div className={`flex items-center opacity-80 ${className}`}>
      <span>Last Modified on:&nbsp;</span>
      <span className={` ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const year = myDatetime.getFullYear().toString();
  const month = (myDatetime.getMonth() + 1).toString().padStart(2, "0");
  const day = myDatetime.getDate().toString().padStart(2, "0");

  return `${year}/${month}/${day}`;
};
